<template>
  <div class="home-header" @mouseleave="handleHeaderMouseLeave">
    <div class="home-header-tab">
      <div class="home-header-left">
        <!-- Logo -->
        <ElImage :src="Logo" class="home-header-left-logo" />
        <!-- 导航菜单 -->
        <div class="home-header-left-menu">
          <div
            class="home-header-left-menu-item flex gap-1 items-center align-center"
            v-for="(item, index) in menus"
            :key="item.path"
            @mouseenter="handleMouseEnter(index)"
            @click="go(item.path)"
          >
            <p class="">{{ t(item.name) }}</p>
            <i class="iconfont-sys font-size-[12px]" :class="[item.icon, { 'rotate-icon': hoveredIndex === index }]"></i>
          </div>
        </div>
      </div>
      <div class="home-header-right">
        <a class="font-size-[12px] flex gap-2 items-center add-chrome px-3 py-1.5 rounded-[999px] cursor-pointer hover:bg-gray-200">
          <i class="iconfont-sys iconsys-add-plus font-size-[12px]"></i>

          {{ t('home.buttons.addToChrome') }}
        </a>

        <!-- 登录 -->
        <a
          class="font-normal-14 flex gap-2 items-center login px-3 py-1.5 rounded-[999px] cursor-pointer bg-black text-white!"
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
          <div v-for="(item, index) in wbData" :key="item.path" class="panel-item flex gap-2 items-center" @click="go(item.path)">
            <p class="name">{{ t(item.name) }}</p>

            <div v-if="item.isNew" class="new-tag">New</div>
          </div>
        </div>
      </transition>

      <transition name="slide-down">
        <div v-if="hoveredIndex == 2" class="extension-panel-content flex gap-[50px]">
          <div v-for="(item, index) in toolData" :key="index" class="flex flex-col gap-2!">
            <p class="title text-sm">{{ t(item.title) }}</p>
            <div class="flex flex-col gap-6! mt-4">
              <p class="name text-[#333] cursor-pointer" v-for="value in item.children" :key="value.name" @click="go(value.path)"
                >{{ t(value.name) }}
                <span v-if="value.isNew" class="px-1 font-[600]! text-[11px] text-white! bg-red-400 rounded-[4px]">New</span></p
              >
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useI18n } from 'vue-i18n'
  import { ElImage } from 'element-plus'
  import { router } from '@/router/index.js'
  import Logo from '/src/assets/img/logo.png'
  import { menuData, wisebaseData, toolData } from './data'

  const { t } = useI18n()

  // 导航菜单数据
  const menus = ref(menuData)

  // Wisebase扩展数据
  const wbData = ref(wisebaseData)

  // 工具数据 - 直接使用导入的数据

  // 响应式数据
  const hoveredIndex = ref<number | null>(null)

  // 方法定义
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
    // 触发自定义事件，让父组件处理登录逻辑
    emit('login-click')
  }

  // 定义组件事件
  const emit = defineEmits<{
    'login-click': []
  }>()
</script>

<style lang="scss" scoped>
  // 保留原有的样式，或者如果样式在index.scss中定义，可以不在这里重复定义
  // 这里可以添加一些组件特有的样式
  @use '../index';
  // 确保在移动端屏幕小时隐藏PC导航条
  @media (max-width: 767px) {
    .home-header {
      display: none;
    }
  }
</style>
