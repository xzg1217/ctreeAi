<template>
  <div class="home">
    <!-- 顶部导航条 -->
    <div class="home-header" @mouseleave="handleHeaderMouseLeave">
      <div class="home-header-tab">
        <div class="home-header-left">
          <!-- Logo -->
          <ElImage src="/src/assets/img/logo.png" class="home-header-left-logo" />
          <!-- 导航菜单 -->
          <div class="home-header-left-menu">
            <div class="home-header-left-menu-item flex gap-2 items-center" v-for="(item, index) in menus"
              :key="item.path" @mouseenter="handleMouseEnter(index)">
              <p class="name">{{ item.name }}</p>
              <i class="iconfont-sys font-size-[12px]"
                :class="[item.icon, { 'rotate-icon': hoveredIndex === index }]"></i>
            </div>
          </div>
        </div>
        <div class="home-header-right">
          <a class="font-size-[12px] flex gap-2 items-center add-chrome px-3 py-1.5 rounded-[999px] cursor-pointer">

            <i class="iconfont-sys iconsys-add-plus font-size-[12px]"></i>

            添加到Chrome
          </a>

          <!-- 登录 -->
          <a
            class="font-normal-14 flex gap-2 items-center login px-3 py-1.5 rounded-[999px] cursor-pointer bg-black text-white">

            登录
          </a>
        </div>
      </div>

      <!-- 扩展面板 -->
      <div class="extension-panel-wrapper" @mouseenter="handlePanelMouseEnter">
        <!-- wb扩展 -->
        <transition name="slide-down">
          <div v-if="hoveredIndex == 1" class="extension-panel-content">
            <div v-for="(item, index) in wbData" :key="item.path" class="panel-item flex gap-2 items-center">
              <p class="name">{{ item.name }}</p>
              <div v-if="item.isNew" class="new-tag">New</div>
            </div>
          </div>
        </transition>
      </div>

    </div>

    <!-- 第二模块 -->
    <div class="relative w-full h-screen h-svh min-h-[600px]">
      <div class="fade-in absolute inset-0 opacity-60 fade-in-bg">
        <div id=":R177puaqfja:" class="h-full canvas-container">
          <canvas width="100%" height="1271" id="colorbgcanvas" class="colorbgcanvas"></canvas>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center w-full h-full px-5">
        <h1
          class="slogan transform-gpu scale-[100%] translate-y-[50%] text-center text-[42px] sm:text-[68px] lg:text-[80px] leading-[1.3] font-semibold hero-slogan">
          <p class="blur-text"><span class="animate-in-down first-word animated-text">Deep<!-- -->&nbsp;</span><span
              class="animate-in-down second-word animated-text">Research<!-- -->&nbsp;</span><span
              class="animate-in-down third-word animated-text">仅需数分钟<!-- -->&nbsp;</span><span
              style="display: inline-block; will-change: transform, filter, opacity; filter: blur(0px); opacity: 1; transform: none;"></span>
          </p>
        </h1>
        <div
          class="w-full max-w-[720px] mt-2 gsap-fade-in transform-gpu scale-75 opacity-0 animate-content content-container">
          <div class="w-fit mx-auto text-center">
            <div class="text-[16px] sm:text-[20px] font-normal leading-[1.33] text-color-text-primary-3 hero-text">
              AI自动模拟人类研究：智能高亮、即时笔记、可视化报告
            </div>
          </div>
          <div
            class="relative w-full my-10 md:my-12 bg-gray-50 hover:bg-gray-100 focus-within:!bg-white backdrop-blur-[20px] text-color-text-primary-4 rounded-[32px] border border-[rgba(107,107,118,0.02)] border-solid focus-within:!border-color-grey-line2-hover focus-within:shadow-[0_0_0_4px_#72768B0F] transition-colors">
            <textarea rows="1" placeholder="您想研究什么主题？" v-model="searchText"
              class="w-full rounded-[32px] box-border max-h-36 ps-6 py-2.5 my-[10px] pe-16 text-color-text-primary-1 block bg-transparent border-none outline-none resize-none text-base search-textarea "
              maxlength="200"></textarea>
            <button :disabled="searchText.length === 0"
              class="absolute size-fit bottom-[10px] right-[10px] left-auto rtl:left-[10px] rtl:right-auto rounded-full p-3 bg-black cursor-pointer disabled:bg-gray-200 disabled:cursor-not-allowed border-none"><svg
                width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="size-5 text-color-text-white-1">
                <path
                  d="M3.242 15.029c.635.157 1.772-.33 4.046-1.3l2.08-.89c3.181-1.36 4.772-2.04 5.254-2.996.418-.83.418-1.81 0-2.64-.482-.956-2.073-1.636-5.254-2.995l-2.13-.91c-2.247-.961-3.37-1.441-3.994-1.296A1.96 1.96 0 0 0 1.74 3.72c-.061.638.564 1.687 1.815 3.787.1.166.173.29.227.393H8a.6.6 0 0 1 0 1.2H3.79c-.053.105-.126.23-.225.4-1.249 2.14-1.873 3.21-1.796 3.86a1.96 1.96 0 0 0 1.473 1.668"
                  fill="#fff"></path>
              </svg></button>
          </div>
        </div>
        <div
          class="gsap-fade-in transform-gpu scale-75 opacity-0 flex flex-wrap items-center justify-center gap-6 animate-content content-bottom">
          <ul class="flex items-center justify-center gap-5 text-text-primary-2 w-full md:w-auto">
            <li>
              <h3 class="text-base font-bold">2025</h3>
              <p class="text-xs opacity-60">编辑推荐</p>
            </li>
            <li>
              <h3 class="flex items-center gap-1 text-base font-bold">1000万+</h3>
              <p class="text-xs opacity-60">活跃用户</p>
            </li>
            <li>
              <h3 class="text-base font-bold">10万+</h3>
              <p class="text-xs opacity-60">五星好评</p>
            </li>
          </ul>
          |
          <div class="flex gap-4 flex-wrap justify-center">
            <a href="https://app.arcade.software/share/X4F2JwLx3SewOIa9GDGd" target="_blank"
              class="cursor-pointer flex items-center gap-3 rounded-xl border px-4 py-2 text-base border-solid text-[var(--color-text-primary-3)] hover:bg-gray-100 hover:text-black no-underline">
              <i class="iconfont-sys font-size-[20px] iconsys-shuju"></i>
              查看演示</a>
            <a
              class="cursor-pointer flex items-center gap-3 rounded-xl border px-4 py-2 text-base border-solid text-[var(--color-text-primary-3)] hover:bg-gray-100 hover:text-black no-underline">
              <i class="iconfont-sys font-size-[20px] iconsys-shuju"></i>
              了解 Sider 5.0</a>
          </div>
        </div>
      </div>
    </div>

    <!-- 第三模块 -->
    <div class="mt-[-80px] relative w-full">
      <div class="text-base flex justify-center font-size-[12px]"> <i
          class="iconfont-sys font-size-[12px] iconsys-xia mr-2 bounce-arrow-icon"></i> 了解更多</div>
      <!-- 滚动区 -->
      <div
        class="s2-card w-full relative aspect-square xs:aspect-[16/9] lg:aspect-[16/6] xl:aspect-[16/6] text-center text-[32px] sm:text-[68px] lg:text-[92px]">
        <div
          class="s2-card-bg from-hide origin-center top-0 left-0 w-full h-full absolute bg-[#5b59c9] rounded-2xl md:rounded-3xl overflow-hidden"
          style="translate: none; rotate: none; scale: none; opacity: 1; transform: scale(1, 1);">
          <div id=":R1m97puaqfja:" class="w-full h-full" style="position: relative;"><canvas width="1568" height="588"
              id="colorbgcanvas"
              style="width: 1568px; height: 588px; position: absolute; top: 0px; left: 0px; z-index: 0;"></canvas></div>
        </div>
        <h3
          class="s2-title-1 absolute left-0 right-0 top-1/2 text-white font-semibold leading-tight text-center px-5 transition-all duration-300"
          style="transform: translate(-50%, -50%) translateY(0) translateX(50%); opacity: 1;">
          前所未有的研究体验</h3>
        <h3
          class="s2-title-2 absolute left-0 right-0 top-1/2 text-white font-semibold leading-tight text-center px-5 transition-all duration-300"
          style="transform: translate(-50%, -50%) translateY(100px) translateX(50%); opacity: 0;">
          更快速、更深入、更智能</h3>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ColorBgCanvas } from '../../../colorbgcanvas-example.js'

const menus = ref([
  {
    name: '聊天',
    path: '/'
  },
  {
    name: 'Wisebase',
    path: '/wisebase',
    icon: 'iconsys-xia2',
    hoverIcon: 'iconsys-shang2'
  },
  {
    name: '工具',
    path: '/wisebase/agent',
    icon: 'iconsys-xia2',
    hoverIcon: 'iconsys-shang2'
  },
  {
    name: '扩展程序',
    path: '/setting'
  },
  {
    name: '应用',
    path: '/setting',
    icon: 'iconsys-xia2',
    hoverIcon: 'iconsys-shang2'
  },
  {
    name: '价格',
    path: '/setting'
  }
])

const wbData = ref([
  {
    name: 'Wisebase',
    path: '/wisebase'
  },
  {
    name: 'Deep Research',
    path: '/wisebase'
  },
  {
    name: 'Scholar Research',
    path: '/wisebase'
  },
  {
    name: 'Math Solver',
    path: '/wisebase'
  },
  {
    name: 'Rec Note',
    path: '/wisebase',
    isNew: true
  },
  {
    name: 'Audio To Text',
    path: '/wisebase'
  },
  {
    name: 'Gamified Learning',
    path: '/wisebase'
  },
  {
    name: 'Interactive Reading',
    path: '/wisebase'
  },
  {
    name: 'ChatPDF',
    path: '/wisebase'
  },
])

const searchText = ref('')

const hoveredIndex = ref<number | null>(null)

const handleMouseEnter = (index: number) => {
  hoveredIndex.value = index
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

let colorBgCanvas = null

// 在组件挂载时初始化canvas动画和滚动监听
onMounted(() => {
  // 确保DOM已渲染完成
  setTimeout(() => {
    if (document.getElementById('colorbgcanvas')) {
      colorBgCanvas = new ColorBgCanvas('colorbgcanvas')
      console.log('ColorBgCanvas initialized')
    } else {
      console.error('Canvas element with id \'colorbgcanvas\' not found')
    }
  }, 100)

  // 添加滚动事件监听器
  window.addEventListener('scroll', handleScroll)
  // 初始调用一次以设置正确的初始状态
  handleScroll()
})

// 处理滚动事件，根据滚动高度改变样式
const handleScroll = () => {
  const scrollY = window.scrollY
  const cardBg = document.querySelector('.s2-card-bg')
  const title1 = document.querySelector('.s2-title-1')
  const title2 = document.querySelector('.s2-title-2')

  // 改变s2-card-bg的transform，使其铺满整个网页
  if (cardBg) {
    // 计算scale值，当滚动高度增加时，scale值增大
    const scale = Math.max(1, 1 + scrollY * 0.002)
    cardBg.style.transform = `scale(${scale}, ${scale})`
  }

  // 保存title1的opacity值，用于控制title2的显示
  let title1Opacity = 1

  // s2-title-1始终显示，不需要淡入效果，只考虑淡出
  if (title1) {
    let opacity = 1 // 初始保持显示
    let translateY = 0 // 初始位置居中
    
    // 获取视口高度和元素位置信息
    const viewportHeight = window.innerHeight
    const elementRect = title1.getBoundingClientRect()
    const elementCenter = elementRect.top + elementRect.height / 2
    const viewportCenter = viewportHeight / 2
    
    // 计算元素中心与视口中心的距离比例（-1到1之间）
    const distanceFactor = Math.max(-1, Math.min(1, (elementCenter - viewportCenter) / (viewportHeight / 2)))
    
    // 检查元素位置并应用相应的效果
    if (distanceFactor < -0.5) {
      // 元素在屏幕中央上方时淡出
      opacity = Math.max(0, 1 - ((-distanceFactor - 0.5) * 2))
      translateY = -50 + (1 - opacity) * 150
    } else if (Math.abs(distanceFactor) <= 0.5) {
      // 元素在屏幕中央附近时完全显示
      opacity = 1
      translateY = 0
    } else if (distanceFactor > 0.5) {
      // 元素在屏幕中央下方时保持完全显示和居中位置
      opacity = 1
      translateY = 0
    }
    
    // 保存title1的opacity值
    title1Opacity = opacity
    
    // 设置样式，保持水平居中
    title1.style.opacity = opacity.toString()
    title1.style.transform = `translate(-50%, -50%) translateY(${translateY}px) translateX(50%)`
  }

  // 只有当s2-title-1淡出后，s2-title-2才会出现
  if (title2) {
    let opacity = 0
    let translateY = 100 // 初始在视口下方100px的位置
    
    // 获取视口高度和元素位置信息
    const viewportHeight = window.innerHeight
    const elementRect = title2.getBoundingClientRect()
    const elementCenter = elementRect.top + elementRect.height / 2
    const viewportCenter = viewportHeight / 2
    
    // 计算元素中心与视口中心的距离比例（-1到1之间）
    const distanceFactor = Math.max(-1, Math.min(1, (elementCenter - viewportCenter) / (viewportHeight / 2)))
    
    // 只有当s2-title-1的opacity小于0.5时，才考虑s2-title-2的显示
    if (title1Opacity < 0.5) {
      // 元素在屏幕中央附近时显示
      if (Math.abs(distanceFactor) < 0.5) {
        opacity = 1
        translateY = 0
      } else if (distanceFactor < -0.5) {
        // 元素在屏幕中央上方时淡出
        opacity = Math.max(0, 1 - ((-distanceFactor - 0.5) * 2))
        translateY = -50 + (1 - opacity) * 150
      } else if (distanceFactor > 0.5) {
        // 元素在屏幕中央下方时淡入
        opacity = Math.max(0, 1 - ((distanceFactor - 0.5) * 2))
        translateY = 100 - opacity * 100
      }
    }
    
    // 设置样式，保持水平居中
    title2.style.opacity = opacity.toString()
    title2.style.transform = `translate(-50%, -50%) translateY(${translateY}px) translateX(50%)`
  }
}

// 在组件卸载时清理资源
onUnmounted(() => {
  if (colorBgCanvas) {
    colorBgCanvas.destroy()
    colorBgCanvas = null
  }
  // 移除滚动事件监听器
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
@use './index';

#nprogress {
  pointer-events: none
}

#nprogress .bar {
  background: #8A57EA;
  position: fixed;
  z-index: 1600;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px
}

#nprogress .peg {
  display: block;
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #8A57EA, 0 0 5px #8A57EA;
  opacity: 1;
  -webkit-transform: rotate(3deg) translate(0px, -4px);
  -ms-transform: rotate(3deg) translate(0px, -4px);
  transform: rotate(3deg) translate(0px, -4px)
}

#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1600;
  top: 15px;
  right: 15px
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border: 2px solid transparent;
  border-top-color: #8A57EA;
  border-left-color: #8A57EA;
  border-radius: 50%;
  -webkit-animation: nprogress-spinner 400ms linear infinite;
  animation: nprogress-spinner 400ms linear infinite
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative
}

.nprogress-custom-parent #nprogress .bar,
.nprogress-custom-parent #nprogress .spinner {
  position: absolute
}

@-webkit-keyframes nprogress-spinner {
  0% {
    -webkit-transform: rotate(0deg)
  }

  100% {
    -webkit-transform: rotate(360deg)
  }
}

@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
}
</style>
