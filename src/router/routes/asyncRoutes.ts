import { RoutesAlias } from '../routesAlias'
import { AppRouteRecord } from '@/types/router'

/**
 * 菜单列表、异步路由
 *
 * 支持两种模式:
 * 前端静态配置 - 直接使用本文件中定义的路由配置
 * 后端动态配置 - 后端返回菜单数据，前端解析生成路由
 *
 * 菜单标题（title）:
 * 可以是 i18n 的 key，也可以是字符串，比如：'用户列表'
 *
 * RoutesAlias.Layout 指向的是布局组件，后端返回的菜单数据中，component 字段需要指向 /index/index
 * 路由元数据（meta）：异步路由在 asyncRoutes 中配置，静态路由在 staticRoutes 中配置
 */
export const asyncRoutes: AppRouteRecord[] = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    component: RoutesAlias.Layout,
    meta: {
      title: 'menus.dashboard.title',
      icon: '&#xe721;',
      roles: ['R_SUPER', 'R_ADMIN'],
      layoutType: 'default'
    },
    children: [
      {
        path: 'console',
        name: 'Console',
        component: RoutesAlias.Dashboard,
        meta: {
          title: 'menus.dashboard.console',
          keepAlive: false,
          fixedTab: true
        }
      }
    ]
  },
  {
    path: '/system',
    name: 'System',
    component: RoutesAlias.Layout,
    meta: {
      title: 'menus.system.title',
      icon: '&#xe7b9;',
      roles: ['R_SUPER', 'R_ADMIN'],
      layoutType: 'default'
    },
    children: [
      {
        path: 'user',
        name: 'User',
        component: RoutesAlias.User,
        meta: {
          title: 'menus.system.user',
          keepAlive: true,
          roles: ['R_SUPER', 'R_ADMIN']
        }
      },
      {
        path: 'role',
        name: 'Role',
        component: RoutesAlias.Role,
        meta: {
          title: 'menus.system.role',
          keepAlive: true,
          roles: ['R_SUPER']
        }
      },
      {
        path: 'user-center',
        name: 'UserCenter',
        component: RoutesAlias.UserCenter,
        meta: {
          title: 'menus.system.userCenter',
          isHide: true,
          keepAlive: true,
          isHideTab: true
        }
      },
      {
        path: 'menu',
        name: 'Menus',
        component: RoutesAlias.Menu,
        meta: {
          title: 'menus.system.menu',
          keepAlive: true,
          roles: ['R_SUPER'],
          authList: [
            {
              title: '新增',
              authMark: 'add'
            },
            {
              title: '编辑',
              authMark: 'edit'
            },
            {
              title: '删除',
              authMark: 'delete'
            }
          ]
        }
      }
    ]
  },
  {
    path: '/result',
    name: 'Result',
    component: RoutesAlias.Layout,
    meta: {
      title: 'menus.result.title',
      icon: '&#xe715;',
      layoutType: 'default'
    },
    children: [
      {
        path: 'success',
        name: 'ResultSuccess',
        component: RoutesAlias.Success,
        meta: {
          title: 'menus.result.success',
          keepAlive: true
        }
      },
      {
        path: 'fail',
        name: 'ResultFail',
        component: RoutesAlias.Fail,
        meta: {
          title: 'menus.result.fail',
          keepAlive: true
        }
      }
    ]
  },
  {
    path: '/exception',
    name: 'Exception',
    component: RoutesAlias.Layout,
    meta: {
      title: 'menus.exception.title',
      icon: '&#xe820;',
      layoutType: 'default'
    },
    children: [
      {
        path: '403',
        name: '403',
        component: RoutesAlias.Exception403,
        meta: {
          title: 'menus.exception.forbidden',
          keepAlive: true,
          isFullPage: true
        }
      },
      {
        path: '404',
        name: '404',
        component: RoutesAlias.Exception404,
        meta: {
          title: 'menus.exception.notFound',
          keepAlive: true,
          isFullPage: true
        }
      },
      {
        path: '500',
        name: '500',
        component: RoutesAlias.Exception500,
        meta: {
          title: 'menus.exception.serverError',
          keepAlive: true,
          isFullPage: true
        }
      }
    ]
  },
  {
    path: '/agents',
    name: 'Agents',
    component: RoutesAlias.Layout,
    meta: {
      title: 'AI工具',
      icon: '&#xe721;',
      layoutType: 'default'
    },
    children: [
      {
        path: 'ai-slides',
        name: 'AISlides',
        component: RoutesAlias.AISlides,
        meta: {
          title: 'AI PPT',
          keepAlive: true,
          layoutType: 'default'
        }
      },
      {
        path: 'deep-research',
        name: 'DeepResearch',
        component: RoutesAlias.DeepResearch,
        meta: {
          title: '深度研究',
          keepAlive: true
        }
      },
      {
        path: 'web-creator',
        name: 'WebCreator',
        component: RoutesAlias.WebCreator,
        meta: {
          title: '网页创作者',
          keepAlive: true
        }
      },
      {
        path: 'ai-writer',
        name: 'AIWriter',
        component: RoutesAlias.AIWriter,
        meta: {
          title: 'AI写作助手',
          keepAlive: true
        }
      },
      {
        path: 'browser-extension',
        name: 'BrowserExtension',
        component: RoutesAlias.BrowserExtension,
        meta: {
          title: '浏览器插件',
          keepAlive: true,
          layoutType: 'top'
        }
      }
    ]
  },
  {
    path: '/price',
    name: 'Price',
    component: RoutesAlias.Price,
    meta: {
      title: '价格',
      keepAlive: true,
      layoutType: 'top'
    }
  },
  {
    path: '/images',
    name: 'Images',
    component: RoutesAlias.Layout,
    meta: {
      title: '图片生成',
      icon: '&#xe721;'
    },
    children: [
      {
        path: 'generate',
        name: 'ImagesGenerate',
        component: RoutesAlias.Images,
        meta: {
          title: '图片生成',
          keepAlive: true,
          layoutType: 'image'
        }
      },
      {
        path: 'background-remover',
        name: 'BackgroundRemover',
        component: RoutesAlias.BackgroundRemover,
        meta: {
          title: '背景移除',
          keepAlive: true,
          layoutType: 'image'
        }
      },
      {
        path: 'text-remover',
        name: 'TextRemover',
        component: RoutesAlias.TextRemover,
        meta: {
          title: '文字移除',
          keepAlive: true,
          layoutType: 'image'
        }
      }
    ]
  }
]
