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
          <a class="font-normal-14 flex gap-2 items-center login px-3 py-1.5 rounded-[999px] cursor-pointer bg-black text-white">

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
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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
</script>

<style lang="scss" scoped>
@use './index';
</style>
