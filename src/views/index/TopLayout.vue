<template>
  <div class="top-layout">
    <!-- 顶部导航条 -->
    <header class="bg-white sticky top-0 z-[5] shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]">
      <div class="home-header" @mouseleave="handleHeaderMouseLeave">
        <div class="home-header-tab f-i-center h-[64px] px-[32px] xl:px-[80px] whitespace-nowrap">
          <div class="home-header-left">
            <!-- Logo -->
            <ElImage :src="Logo" class="home-header-left-logo" />
            <!-- 导航菜单 -->
            <div class="home-header-left-menu">
              <div
                :class="{ 'active-menu-item': isMenuItemActive(item.path) }"
                v-for="(item, index) in menus"
                :key="item.path"
              >
                <div
                  class="home-header-left-menu-item flex gap-1 items-center align-center"
                  @mouseenter="handleMouseEnter(index)"
                  @click="go(item.path)"
                >
                  <p class="">{{ t(item.name) }}</p>
                  <i
                    class="iconfont-sys font-size-[12px]"
                    :class="[item.icon, { 'rotate-icon': hoveredIndex === index }]"
                  ></i>
                </div>
              </div>
            </div>
          </div>
          <div class="home-header-right">
            <a
              class="font-size-[12px] flex gap-2 items-center add-chrome px-3 py-1.5 rounded-[999px] cursor-pointer hover:bg-gray-200"
            >
              <i class="iconfont-sys iconsys-add-plus font-size-[12px]"></i>

              {{ t('home.buttons.addToChrome') }}
            </a>

            <!-- 登录 -->
            <a
              class="font-normal-14 flex gap-2 items-center login px-3 py-1.5 rounded-[999px] cursor-pointer bg-black text-white"
              @click="handleLoginClick"
            >
              {{ t('home.buttons.login') }}
            </a>
          </div>
        </div>

        <!-- 扩展面板 -->
        <div class="extension-panel-wrapper" @mouseenter="handlePanelMouseEnter">
          <!-- wb扩展 -->
          <transition name="slide-down">
            <div v-if="hoveredIndex == 1" class="extension-panel-content">
              <div
                v-for="(item, index) in wbData"
                :key="item.path"
                class="panel-item flex gap-2 items-center"
                @click="go(item.path)"
              >
                <p class="name">{{ t(item.name) }}</p>

                <div v-if="item.isNew" class="new-tag">New</div>
              </div>
            </div>
          </transition>

          <transition name="slide-down">
            <div v-if="hoveredIndex == 2" class="extension-panel-content flex gap-2">
              <div v-for="(item, index) in toolData" :key="index" class="flex flex-col gap-2">
                <p class="title text-sm">{{ t(item.title) }}</p>
                <div class="flex flex-col gap-4 mt-4">
                  <p
                    class="name text-[#333] cursor-pointer"
                    v-for="value in item.children"
                    :key="value.name"
                    @click="go(value.path)"
                    >{{ t(value.name) }}
                    <span
                      v-if="value.isNew"
                      class="px-1 font-[600]! text-[11px] text-white bg-red-400 rounded-[4px]"
                      >New</span
                    ></p
                  >
                </div>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </header>

    <!-- 主要内容区域 -->
    <main class="layout-main">
      <ArtPageContent />
      <Footer />
    </main>

    <!-- 底部区域 -->
    <div class="layout-footer">
      <!-- <div class="footer-content">
        <
      </div> -->
    </div>

    <!-- 全局组件 -->
    <div class="app-global">
      <ArtGlobalComponent />
    </div>

    <!-- 登录弹窗 -->
    <ArtLoginDialog ref="loginDialog" />
  </div>
</template>

<script setup lang="ts">
  import { onMounted, onUnmounted, ref, computed } from 'vue'
  import { useRouter, useRoute } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  import { ElImage } from 'element-plus'
  import { useSettingStore } from '@/store/modules/setting'
  import { SystemThemeEnum } from '@/enums/appEnum'
  import ArtPageContent from '@/components/core/layouts/art-page-content/index.vue'
  import ArtGlobalComponent from '@/components/core/layouts/art-global-component/index.vue'
  import ArtLoginDialog from '@/components/core/dialogs/art-login-dialog/index.vue'
  import Footer from '@/components/core/footer.vue'
  import Logo from '/src/assets/img/logo.png'

  defineOptions({ name: 'TopLayout' })

  const router = useRouter()
  const route = useRoute()
  const { t } = useI18n()
  const settingStore = useSettingStore()

  // 导航菜单数据
  const menus = ref([
    {
      name: 'home.nav.chat',
      path: '/'
    },
    {
      name: 'home.nav.wisebase',
      path: '/wisebase',
      icon: 'iconsys-xia2',
      hoverIcon: 'iconsys-shang2'
    },
    {
      name: 'home.nav.tools',
      path: '/wisebase/agent',
      icon: 'iconsys-xia2',
      hoverIcon: 'iconsys-shang2'
    },
    {
      name: 'home.nav.extension',
      path: '/agents/browser-extension'
    },
    {
      name: 'home.nav.app',
      path: '/setting',
      icon: 'iconsys-xia2',
      hoverIcon: 'iconsys-shang2'
    },
    {
      name: 'home.nav.pricing',
      path: '/setting'
    }
  ])

  // wb扩展数据
  const wbData = ref([
    {
      name: 'home.appNames.wisebase',
      path: ''
    },
    {
      name: 'home.appNames.deepResearch',
      path: '/agents/deep-research?type=1'
    },
    {
      name: 'home.appNames.scholarResearch',
      path: '/agents/deep-research?type=2'
    },
    {
      name: 'home.appNames.mathSolver',
      path: '/wisebase'
    },
    {
      name: 'home.appNames.recNote',
      path: '/wisebase',
      isNew: true
    },
    {
      name: 'home.appNames.audioToText',
      path: '/wisebase'
    },
    {
      name: 'home.appNames.gamifiedLearning',
      path: '/wisebase'
    },
    {
      name: 'home.appNames.interactiveReading',
      path: '/wisebase'
    },
    {
      name: 'home.appNames.chatPDF',
      path: '/wisebase'
    }
  ])

  // 工具数据
  const toolData = ref([
    {
      title: 'Agents',
      children: [
        {
          name: 'home.nav.deepResearch',
          path: '/agents/deep-research?type=1'
        },
        {
          name: 'home.nav.scholarResearch',
          path: '/agents/deep-research?type=2'
        },
        {
          name: 'home.nav.websiteGenerator',
          path: '/agents/web-creator'
        },
        {
          name: 'home.nav.AIPPT',
          path: '/agents/ai-slides',
          isNew: true
        },
        {
          name: 'home.nav.writerMaster',
          path: '/agents/ai-writer'
        }
      ]
    },
    {
      title: '图像',
      children: [
        // {
        //   name:'home.appNames.agent',
        //   path: '/wisebase/agent'
        // },
      ]
    },
    {
      title: '翻译器',
      children: [
        // {
        //   name:'home.appNames.agent',
        //   path: '/wisebase/agent'
        // },
      ]
    }
  ])

  const hoveredIndex = ref<number | null>(null)

  // 登录弹窗引用
  const loginDialog = ref<InstanceType<typeof ArtLoginDialog>>()

  // 判断菜单项是否被选中
  const isMenuItemActive = (menuPath: string) => {
    const currentPath = route.path

    // 如果当前路径是根路径，只匹配根路径
    if (currentPath === '/' && menuPath === '/') {
      return true
    }

    // 对于其他路径，检查当前路径是否以菜单路径开头
    if (menuPath !== '/' && currentPath.startsWith(menuPath)) {
      return true
    }

    return false
  }

  const handleMouseEnter = (index: number) => {
    hoveredIndex.value = index
  }

  const go = (path: any) => {
    console.log(path)
    router.push(path)
  }

  // 面板鼠标移入时，保持hoveredIndex状态为1
  const handlePanelMouseEnter = () => {
    if (hoveredIndex.value === 1) {
      // 保持hoveredIndex为1，不做任何改变
    }
  }

  // 当鼠标完全离开home-header区域时才收起面板
  const handleHeaderMouseLeave = () => {
    hoveredIndex.value = null
  }

  // 处理登录按钮点击
  const handleLoginClick = () => {
    loginDialog.value?.open()
  }

  // 保存原始主题状态
  let originalTheme: SystemThemeEnum | null = null

  // 强制设置为亮色模式
  const forceLightMode = () => {
    // 保存当前主题状态
    originalTheme = settingStore.systemThemeType

    // 强制设置为亮色模式
    settingStore.setGlopTheme(SystemThemeEnum.LIGHT, SystemThemeEnum.LIGHT)

    // 确保HTML元素应用亮色主题类
    document.documentElement.classList.remove('dark')
    document.documentElement.classList.add('light')
  }

  // 恢复原始主题
  const restoreOriginalTheme = () => {
    if (originalTheme) {
      settingStore.setGlopTheme(originalTheme, originalTheme)

      // 根据主题类型设置HTML类
      if (originalTheme === SystemThemeEnum.DARK) {
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
      }
    }
  }

  onMounted(() => {
    // 页面加载时强制亮色模式
    forceLightMode()
  })

  onUnmounted(() => {
    // 页面卸载时恢复原始主题
    restoreOriginalTheme()
  })
</script>

<style lang="scss" scoped>
  .top-layout {
    display: flex;
    flex-direction: column;
    height: 100vh;

    .layout-main {
      flex: 1;
      overflow: auto;
      //background: var(--art-bg-color);
    }

    .layout-footer {
      // flex-shrink: 0;
      // height: 60px;
      // background: var(--art-bg-color);
      // border-top: 1px solid var(--art-border-color);
      // display: flex;
      // align-items: center;
      // justify-content: center;

      .footer-content {
        //color: var(--art-gray-500);
        font-size: 14px;
      }
    }

    .app-global {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      pointer-events: none;
      z-index: 9999;
    }
  }

  // home页面导航条样式
  .home-header {
    // background-color: rgba(239, 240, 243, 0.6);
    // --tw-backdrop-blur: blur(40px);
    // padding: 12px;
    // position: fixed;
    // top: 16px;
    // left: 50%;
    // transform: translateX(-50%);
    // border-radius: calc(56px / 2);
    // z-index: 100;
    // width: calc(100% - 80px);
    // max-width: 1296px;
    // min-height: calc(56px - 24px);
    // transition: height 0.3s ease-in-out;
    // backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness)
    //   var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate)
    //   var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate)
    //   var(--tw-backdrop-sepia);
  }

  .home-header-tab {
    // display: flex;
    justify-content: space-between;
    // align-items: center;
  }

  .home-header-left {
    display: flex;
    gap: 24px;
    align-items: center;
  }

  .home-header-left-logo {
    height: 20px;
  }

  .home-header-left-menu {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    font-size: 14px;
    color: rgba(0, 0, 0, 0.96);
  }

  .home-header-left-menu-item {
    padding: 6px 12px;
    border-radius: 10px;
    position: relative;
    transition: all 0.3s ease;
  }

  .home-header-left-menu-item:hover {
    background-color: rgba(114, 118, 139, 0.08);
    cursor: pointer;
  }

  .active-menu-item {
    color: #8a57ea;
    border-top: 2px solid #8a57ea;
    display: flex;
    height: 64px;
    //background-color: rgba(138, 87, 234, 0.08);
  }

  .home-header-left-menu-item i {
    transition: transform 0.3s ease;
    display: inline-block;
  }

  .home-header-left-menu-item i.rotate-icon {
    transform: rotate(180deg);
  }

  .home-header-right {
    display: flex;
    justify-content: center;
    gap: 12px;

    .add-chrome {
      border: 1px solid var(--art-border-color);
      font-size: 14px;
    }

    .login {
      border: 1px solid var(--art-border-color);
      font-size: 14px;
    }
  }

  /* 扩展面板样式 */
  .extension-panel-wrapper {
    position: relative;
    width: 100%;
  }

  .extension-panel-content {
    padding: 20px 120px;
    //margin-top: 10px;
  }

  .panel-item {
    font-weight: 500;
    padding: 12px 0px;
    font-family:
      'D-DIN Exp', 'DM Sans', arial, 'microsoft yahei', pingfangsc, helvetica, sans-serif;
    color: rgba(6, 8, 31, 0.88);

    .new-tag {
      font-size: 11px;
      line-height: 17px;
      font-style: normal;
      background-color: rgb(229, 86, 73);
      padding: 0 4px;
      border-radius: 4px;
      color: var(--art-color);
    }
  }

  .panel-item:hover {
    cursor: pointer;
  }

  /* 从上往下伸展，从下往上收缩的过渡动画 */
  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: all 0.3s ease-in-out;
    overflow: hidden;
  }

  .slide-down-enter-from {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
  }

  .slide-down-enter-to {
    opacity: 1;
    max-height: 500px;
    /* 设置一个足够大的值以容纳内容 */
    transform: translateY(0);
  }

  .slide-down-leave-from {
    opacity: 1;
    max-height: 500px;
    transform: translateY(0);
  }

  .slide-down-leave-to {
    opacity: 0;
    max-height: 0;
    transform: translateY(-10px);
  }
</style>
