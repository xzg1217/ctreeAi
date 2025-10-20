import type { Router, RouteLocationNormalized, NavigationGuardNext } from 'vue-router'
import { ref, nextTick } from 'vue'
import NProgress from 'nprogress'
import { useSettingStore } from '@/store/modules/setting'
import { useUserStore } from '@/store/modules/user'
import { useMenuStore } from '@/store/modules/menu'
import { setWorktab } from '@/utils/navigation'
import { setPageTitle } from '../utils/utils'
import { registerDynamicRoutes } from '../utils/registerRoutes'
import { AppRouteRecord } from '@/types/router'
import { RoutesAlias } from '../routesAlias'
import { menuDataToRouter } from '../utils/menuToRouter'
import { asyncRoutes } from '../routes/asyncRoutes'
import { staticRoutes } from '../routes/staticRoutes'
import { loadingService } from '@/utils/ui'
import { useCommon } from '@/composables/useCommon'
import { useWorktabStore } from '@/store/modules/worktab'

// 是否已注册动态路由
const isRouteRegistered = ref(false)

// 跟踪是否需要关闭 loading
const pendingLoading = ref(false)

/**
 * 设置路由全局前置守卫
 */
export function setupBeforeEachGuard(router: Router): void {
  router.beforeEach(
    async (
      to: RouteLocationNormalized,
      from: RouteLocationNormalized,
      next: NavigationGuardNext
    ) => {
      try {
        await handleRouteGuard(to, from, next, router)
      } catch (error) {
        console.error('路由守卫处理失败:', error)
        next('/exception/500')
      }
    }
  )

  // 设置后置守卫以关闭 loading 和进度条
  setupAfterEachGuard(router)
}

/**
 * 设置路由全局后置守卫
 */
function setupAfterEachGuard(router: Router): void {
  router.afterEach(() => {
    // 关闭进度条
    const settingStore = useSettingStore()
    if (settingStore.showNprogress) {
      NProgress.done()
    }

    // 关闭 loading 效果
    if (pendingLoading.value) {
      nextTick(() => {
        loadingService.hideLoading()
        pendingLoading.value = false
      })
    }
  })
}

/**
 * 处理路由守卫逻辑 - 修改为允许所有页面访问
 */
async function handleRouteGuard(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  router: Router
): Promise<void> {
  const settingStore = useSettingStore()

  // 处理进度条
  if (settingStore.showNprogress) {
    NProgress.start()
  }

  // 处理动态路由注册 - 无论是否登录都注册
  if (!isRouteRegistered.value) {
    await handleDynamicRoutes(to, from, next, router)
    return
  }

  // 处理根路径跳转到首页 - 移除登录状态检查
  if (isRouteRegistered.value && handleRootPathRedirect(to, next)) {
    return
  }

  // 处理已知的匹配路由
  if (to.matched.length > 0) {
    setWorktab(to)
    setPageTitle(to)
    next()
    return
  }

  // 尝试刷新路由重新注册 - 移除登录状态检查
  if (!isRouteRegistered.value) {
    await handleDynamicRoutes(to, from, next, router)
    return
  }

  // 未匹配到路由，跳转到 404
  next(RoutesAlias.Exception404)
}

/**
 * 处理登录状态 - 修改为始终允许访问
 */
async function handleLoginStatus(
  to: RouteLocationNormalized,
  userStore: ReturnType<typeof useUserStore>,
  next: NavigationGuardNext
): Promise<boolean> {
  // 移除登录检查，始终返回true允许访问
  return true
}

/**
 * 检查路由是否为静态路由
 */
function isRouteInStaticRoutes(path: string): boolean {
  const checkRoute = (routes: any[], targetPath: string): boolean => {
    return routes.some((route) => {
      if (route.path === targetPath) {
        return true
      }
      if (route.children && route.children.length > 0) {
        return checkRoute(route.children, targetPath)
      }
      return false
    })
  }

  return checkRoute(staticRoutes, path)
}

/**
 * 处理动态路由注册 - 修改为直接注册所有异步路由
 */
async function handleDynamicRoutes(
  to: RouteLocationNormalized,
  from: RouteLocationNormalized,
  next: NavigationGuardNext,
  router: Router
): Promise<void> {
  try {
    // 显示 loading 并标记 pending
    pendingLoading.value = true
    loadingService.showLoading()

    // 设置默认用户信息以避免潜在问题
    const userStore = useUserStore()
    if (!userStore.info || Object.keys(userStore.info).length === 0) {
      userStore.setUserInfo({ roles: ['*'] })
    }

    // 直接注册所有异步路由
    await getMenuData(router)

    // 处理根路径跳转
    if (handleRootPathRedirect(to, next)) {
      return
    }

    next({
      path: to.path,
      query: to.query,
      hash: to.hash,
      replace: true
    })
  } catch (error) {
    console.error('动态路由注册失败:', error)
    // 即使路由注册失败，也尝试让用户继续访问
    next()
  }
}

/**
 * 获取菜单数据 - 修改为直接使用asyncRoutes中的所有路由
 */
async function getMenuData(router: Router): Promise<void> {
  try {
    // 直接使用asyncRoutes中的所有路由，不再进行模式判断
    await registerAllAsyncRoutes(router)
  } catch (error) {
    handleMenuError(error)
    throw error
  }
}

/**
 * 注册所有异步路由 - 新增函数，确保使用所有asyncRoutes
 */
async function registerAllAsyncRoutes(router: Router): Promise<void> {
  // 直接使用asyncRoutes中的所有路由，不进行任何过滤
  const menuList = asyncRoutes.map((route) => {
    // 深拷贝路由配置，避免修改原始数据
    const copiedRoute = JSON.parse(JSON.stringify(route)) as AppRouteRecord
    // 移除所有可能的权限限制
    if (copiedRoute.meta) {
      delete copiedRoute.meta.roles
      delete copiedRoute.meta.authList
    }
    // 递归处理子路由
    if (copiedRoute.children) {
      copiedRoute.children = copiedRoute.children.map(child => {
        const copiedChild = { ...child }
        if (copiedChild.meta) {
          delete copiedChild.meta.roles
          delete copiedChild.meta.authList
        }
        return copiedChild
      })
    }
    return menuDataToRouter(copiedRoute)
  })

  await registerAndStoreMenu(router, menuList)
}

/**
 * 处理前端控制模式的菜单逻辑 - 修改为不依赖角色权限
 */
async function processFrontendMenu(router: Router): Promise<void> {
  // 这个函数可能不再使用，但保留以防其他地方调用
  await registerAllAsyncRoutes(router)
}

/**
 * 处理后端控制模式的菜单逻辑 - 修改为直接使用前端菜单
 */
async function processBackendMenu(router: Router): Promise<void> {
  // 不再尝试获取后端菜单，直接使用前端定义的所有路由
  await registerAllAsyncRoutes(router)
}

/**
 * 递归过滤空菜单项
 */
function filterEmptyMenus(menuList: AppRouteRecord[]): AppRouteRecord[] {
  return menuList
    .map((item) => {
      // 如果有子菜单，先递归过滤子菜单
      if (item.children && item.children.length > 0) {
        const filteredChildren = filterEmptyMenus(item.children)
        return {
          ...item,
          children: filteredChildren
        }
      }
      return item
    })
    .filter((item) => {
      // 过滤掉布局组件且没有子菜单的项
      const isEmptyLayoutMenu =
        item.component === RoutesAlias.Layout && (!item.children || item.children.length === 0)

      // 过滤掉组件为空字符串且没有子菜单的项，但保留有外链的菜单项
      const isEmptyComponentMenu =
        item.component === '' &&
        (!item.children || item.children.length === 0) &&
        item.meta.isIframe !== true &&
        !item.meta.link

      return !(isEmptyLayoutMenu || isEmptyComponentMenu)
    })
}

/**
 * 注册路由并存储菜单数据
 */
async function registerAndStoreMenu(router: Router, menuList: AppRouteRecord[]): Promise<void> {
  if (!isValidMenuList(menuList)) {
    throw new Error('获取菜单列表失败，请重新登录')
  }
  const menuStore = useMenuStore()
  // 递归过滤掉为空的菜单项
  const list = filterEmptyMenus(menuList)
  menuStore.setMenuList(list)
  registerDynamicRoutes(router, list)
  isRouteRegistered.value = true
  useWorktabStore().validateWorktabs(router)
}

/**
 * 处理菜单相关错误 - 不再强制登出
 */
function handleMenuError(error: unknown): void {
  console.error('菜单处理失败:', error)
  // 不再执行登出操作
  throw error instanceof Error ? error : new Error('获取菜单列表失败，但继续尝试加载')
}

/**
 * 根据角色过滤菜单 - 修改为返回所有菜单
 */
const filterMenuByRoles = (menu: AppRouteRecord[], roles: string[]): AppRouteRecord[] => {
  // 返回所有菜单，不再进行角色过滤
  return menu.map(item => {
    const filteredItem = { ...item }
    if (filteredItem.children?.length) {
      // 递归处理子菜单，但同样不进行过滤
      filteredItem.children = filterMenuByRoles(filteredItem.children, roles)
    }
    return filteredItem
  })
}

/**
 * 验证菜单列表是否有效
 */
function isValidMenuList(menuList: AppRouteRecord[]): boolean {
  return Array.isArray(menuList) && menuList.length > 0
}

/**
 * 重置路由相关状态
 */
export function resetRouterState(): void {
  isRouteRegistered.value = false
  const menuStore = useMenuStore()
  menuStore.removeAllDynamicRoutes()
  menuStore.setMenuList([])
}

/**
 * 处理根路径跳转到首页
 */
function handleRootPathRedirect(to: RouteLocationNormalized, next: NavigationGuardNext): boolean {
  if (to.path === '/') {
    const { homePath } = useCommon()
    if (homePath.value && homePath.value !== '/') {
      next({ path: homePath.value, replace: true })
      return true
    }
  }
  return false
}
