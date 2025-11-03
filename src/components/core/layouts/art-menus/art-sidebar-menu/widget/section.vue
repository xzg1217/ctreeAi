<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import ChatIcon from '@/assets/svg/ChatIcon.vue'
import SlidesIcon from '@/assets/svg/SlidesIcon.vue'
import MoreIcon from '@/assets/svg/MoreIcon.vue'
import ResearchIcon from '@/assets/svg/ResearchIcon.vue'
import DocumentIcon from '@/assets/svg/DocumentIcon.vue'
import StarIcon from '@/assets/svg/StarIcon.vue'
import InboxIcon from '@/assets/svg/InboxIcon.vue'
import WisebaseIcon from './icons/WisebaseIcon.vue'
import WisebaseIcoin from './icons/wisebaseIcoin.vue'
import BusinessIcon from './icons/BusinessIcon.vue'
import PlusIcon from './icons/PlusIcon.vue'
import MoreOptionsIcon from './icons/MoreOptionsIcon.vue'
import DragHandleIcon from './icons/DragHandleIcon.vue'
import ArrowRightIcon from './icons/ArrowRightIcon.vue'
import PinFilled from './icons/PinFilled.vue'

import PopMenu from './popMenu.vue'
import { useSettingStore } from '@/store/modules/setting'

const settingStore = useSettingStore()
const { menuOpen } = storeToRefs(settingStore)

const router = useRouter()
const route = useRoute()
const activeMenuPath = ref<string>('')

// 拖拽相关状态
const dragOverIndex = ref<number>(-1)
const demoItems = ref([
  { 
    id: 'wisebase-demo', 
    title: 'Demo: Introduction to Wisebase',
    icon: WisebaseIcon,
    color: 'var(--color-warning-normal)',
    bgColor: 'var(--color-warning-bg)',
    pinned: false
  },
  { 
    id: 'llm-research-demo', 
    title: 'Demo: Research on LLMs',
    icon: ResearchIcon,
    color: 'var(--color-success-normal)',
    bgColor: 'var(--color-success-bg)',
    pinned: false
  },
  { 
    id: 'nvidia-business-demo', 
    title: 'Demo: NVIDIA Business Outlook',
    icon: BusinessIcon,
    color: 'var(--color-brand-primary-normal)',
    bgColor: 'var(--color-brand-primary-bg)',
    pinned: false
  }
])

// 拖拽开始事件
const handleDragStart = (event: DragEvent, index: number) => {
  // 如果项目被固定，则不允许拖动
  if (demoItems.value[index].pinned) {
    event.preventDefault()
    return
  }
  if (event.dataTransfer) {
    event.dataTransfer.setData('text/plain', index.toString())
    event.dataTransfer.effectAllowed = 'move'
  }
}

// 拖拽经过事件
const handleDragOver = (event: DragEvent, index: number) => {
  event.preventDefault()
  if (event.dataTransfer) {
    event.dataTransfer.dropEffect = 'move'
  }
  dragOverIndex.value = index
}

// 拖拽离开事件
const handleDragLeave = (event: DragEvent) => {
  event.preventDefault()
  dragOverIndex.value = -1
}

// 拖拽放置事件
const handleDrop = (event: DragEvent, targetIndex: number) => {
  event.preventDefault()
  dragOverIndex.value = -1
  
  if (event.dataTransfer) {
    const sourceIndex = parseInt(event.dataTransfer.getData('text/plain'))
    if (sourceIndex !== targetIndex && sourceIndex >= 0 && targetIndex >= 0) {
      // 检查源项目和目标项目的固定状态
      const sourceItem = demoItems.value[sourceIndex]
      const targetItem = demoItems.value[targetIndex]
      
      // 如果目标项目是固定的，则不允许放置
      if (targetItem.pinned) {
        return
      }
      
      // 交换项目位置
      const [removed] = demoItems.value.splice(sourceIndex, 1)
      demoItems.value.splice(targetIndex, 0, removed)
    }
  }
}

// 计算排序后的项目列表
const sortedDemoItems = computed(() => {
  // 先按固定状态排序（固定的在前），然后保持原有顺序
  const pinnedItems = demoItems.value.filter(item => item.pinned)
  const unpinnedItems = demoItems.value.filter(item => !item.pinned)
  return [...pinnedItems, ...unpinnedItems]
})

// 获取项目在原始数组中的索引
const getOriginalIndex = (itemId: string) => {
  return demoItems.value.findIndex(item => item.id === itemId)
}

const handleMenuClick = ({ key }: { key: string }, itemId: string) => {
   if (key === 'pin') {
     // 实现固定功能
     const item = demoItems.value.find(item => item.id === itemId)
     if (item) {
       item.pinned = !item.pinned
     }
   } else if (key === 'edit') {
     // 实现编辑功能
     console.log('编辑功能被点击')
   } else if (key === 'delete') {
     // 实现删除功能
     console.log('删除功能被点击')
   }
 }

// 监听路由变化，更新当前激活的菜单
watch(
  () => route.path,
  (newPath) => {
    console.log(newPath)
    activeMenuPath.value = newPath
  },
  { immediate: true }
)

const handleNavigation = (path?: string) => {
  if (!path) return
  activeMenuPath.value = path
  router.push(path)
}
</script>

<template>
  <div id="sidebar-list-inner" class="box-border flex h-fit w-full flex-col">
    <div class="relative box-border w-full px-3"><a draggable="false" class="block mb-1"
        @click="handleNavigation('/system/user-center')">
        <div :class="[
          'box-border',
          'h-[36px]',
          'cursor-pointer',
          'gap-[8px]',
          'rounded-[10px]',
          'px-[8px]',
          'py-[6px]',
          'transition-colors',
          'flex',
          'items-center',
          'text-color-text-primary-3',
          'hover:bg-(--menu-hover-bg-color)',
          {
            'bg-[var(--menu-active-bg-color)] text-[var(--menu-active-color)]':
              activeMenuPath === '/system/user-center'
          }
        ]">
          <DragHandleIcon
            class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100" />
          <span class="size-[24px] shrink-0 flex justify-center items-center">
            <ResearchIcon />
          </span>
          <span v-show="menuOpen"
            class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja">聊天</span>
        </div>
      </a></div <div class="mx-[22px] my-[6px] h-[1px] bg-color-grey-line1-normal">
  </div>
  <div class="relative box-border w-full px-[12px]">
    <div class="mb-1 px-[10px] py-[8px] text-color-text-primary-3 text-[14px] font-semibold" v-show="menuOpen">Agents
    </div><a draggable="false" class="block mb-1" @click="handleNavigation('/agents/deep-research')">
      <div :class="[
        'box-border',
        'h-[36px]',
        'cursor-pointer',
        'gap-[8px]',
        'rounded-[10px]',
        'px-[8px]',
        'py-[6px]',
        'transition-colors',
        'flex',
        'items-center',
        'text-color-text-primary-3',
        'hover:bg-(--menu-hover-bg-color)',
        {
          'bg-[var(--menu-active-bg-color)] text-[var(--menu-active-color)]':
            activeMenuPath === '/agents/deep-research'
        }
      ]">
        <DragHandleIcon
          class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100" />
        <span class="size-[24px] shrink-0 flex justify-center items-center">
          <SlidesIcon />
        </span>
        <span v-show="menuOpen"
          class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja">Deep
          Research</span>
      </div>
    </a><a draggable="false" class="block mb-1" @click="handleNavigation('/agents/web-creator')">
      <div :class="[
        'box-border',
        'h-[36px]',
        'cursor-pointer',
        'gap-[8px]',
        'rounded-[10px]',
        'px-[8px]',
        'py-[6px]',
        'transition-colors',
        'flex',
        'items-center',
        'text-color-text-primary-3',
        'hover:bg-(--menu-hover-bg-color)',
        {
          'bg-[var(--menu-active-bg-color)] text-[var(--menu-active-color)]':
            activeMenuPath === '/agents/web-creator'
        }
      ]">
        <DragHandleIcon
          class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100" />
        <span class="size-[24px] shrink-0 flex justify-center items-center">
          <DocumentIcon />
        </span>
        <span v-show="menuOpen"
          class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja">网页创建者</span>
        <div v-show="menuOpen" class="size-2 rounded-full bg-color-error-normal"></div>
      </div>
    </a><a draggable="false" class="block mb-1" @click="handleNavigation('/agents/ai-writer')">
      <div :class="[
        'box-border',
        'h-[36px]',
        'cursor-pointer',
        'gap-[8px]',
        'rounded-[10px]',
        'px-[8px]',
        'py-[6px]',
        'transition-colors',
        'flex',
        'items-center',
        'text-color-text-primary-3',
        'hover:bg-(--menu-hover-bg-color)',
        {
          'bg-[var(--menu-active-bg-color)] text-[var(--menu-active-color)]':
            activeMenuPath === '/agents/ai-writer'
        }
      ]">
        <DragHandleIcon
          class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100" />
        <span class="size-[24px] shrink-0 flex justify-center items-center">
          <ChatIcon />
        </span>
        <span v-show="menuOpen"
          class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja">AI写作助手</span>
      </div>
    </a><a draggable="false" class="block mb-1" @click="handleNavigation('/agents/ai-slides')">
      <div :class="[
        'box-border',
        'h-[36px]',
        'cursor-pointer',
        'gap-[8px]',
        'rounded-[10px]',
        'px-[8px]',
        'py-[6px]',
        'transition-colors',
        'flex',
        'items-center',
        'text-color-text-primary-3',
        'hover:bg-(--menu-hover-bg-color)',
        {
          'bg-[var(--menu-active-bg-color)] text-[var(--menu-active-color)]':
            activeMenuPath === '/agents/ai-slides'
        }
      ]">
        <DragHandleIcon
          class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100" />
        <span class="size-[24px] shrink-0 flex justify-center items-center">
          <SlidesIcon />
        </span>
        <span v-show="menuOpen"
          class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja">AI
          PPT</span>
        <div v-show="menuOpen" class="size-2 rounded-full bg-color-error-normal"></div>
      </div>
    </a>
    <a-popover trigger="hover" placement="right" :overlay-style="{ padding: 0 }">
      <template #content>
        <PopMenu />
      </template>
      <div
        class="box-border cursor-pointer gap-[8px] rounded-[10px] px-[8px] py-[6px] text-color-text-primary-3 flex items-center hover:bg-(--menu-hover-bg-color)">
        <MoreIcon class="mx-[3px] my-[1px]" />
        <span v-show="menuOpen" class="line-clamp-1 text-[14px]">更多</span>
        <div v-show="menuOpen" class="ml-auto size-[24px] flex justify-center items-center">
          <ArrowRightIcon />
        </div>
      </div>
    </a-popover>
  </div>
  <div class="mx-[22px] my-[6px] h-[1px] bg-color-grey-line1-normal"></div>
  <div class="relative my-1 box-border w-full space-y-1 px-[12px]"><a draggable="false" class="block" @click="handleNavigation('/wisebase/index')">
      <div
        :class="[
          'box-border',
          'h-[36px]',
          'cursor-pointer',
          'gap-[8px]',
          'rounded-[10px]',
          'px-[8px]',
          'py-[6px]',
          'transition-colors',
          'flex',
          'items-center',
          'text-color-text-primary-3',
          'hover:bg-(--menu-hover-bg-color)',
          {
            'bg-[var(--menu-active-bg-color)] text-[var(--menu-active-color)]':
              activeMenuPath === '/wisebase/index'
          }
        ]">
        <DragHandleIcon
          class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100" />
        <span v-show="menuOpen"
          class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] font-semibold css-1p6dcus css-var-R5ubrafja">Wisebase</span>
        <span v-show="!menuOpen">
          <WisebaseIcoin />
        </span>
        <span v-show="menuOpen"
          class="ml-auto cursor-pointer rounded-[6px] bg-transparent p-[4px] text-color-text-primary-3 transition-colors hover:bg-(--menu-hover-bg-color)">
          <PlusIcon />
        </span>
      </div>
    </a>
    <!-- <div 
      v-for="(item, index) in sortedDemoItems" 
      :key="item.id"
      class="relative" 
      :draggable="!item.pinned" 
      style="opacity: 1"
      @dragstart="handleDragStart($event, getOriginalIndex(item.id))"
      @dragover="handleDragOver($event, getOriginalIndex(item.id))"
      @dragleave="handleDragLeave($event)"
      @drop="handleDrop($event, getOriginalIndex(item.id))"
      :class="{ 'bg-color-assistive-blue-focus': dragOverIndex === getOriginalIndex(item.id) }"
    >
      <div class="absolute h-1 w-full bg-color-assistive-blue-focus opacity-0 -top-1"></div>
      <a draggable="false" class="block group" :href="`/zh-CN/wisebase/${item.id}`">
        <div
          class="box-border h-[36px] gap-[8px] rounded-[10px] px-[8px] py-[6px] transition-colors flex items-center text-color-text-primary-3"
          :class="item.pinned ? 'cursor-default opacity-60' : 'cursor-pointer hover:bg-(--menu-hover-bg-color)'">
          <DragHandleIcon
            class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100" />
          <span class="size-[24px] shrink-0 flex justify-center items-center">
            <div class="cursor-pointer rounded-[8px] bg-transparent flex justify-center items-center shrink-0" :style="`color: ${item.color}; background-color: ${item.bgColor}; width: 24px; height: 24px;`">
              <component :is="item.icon" />
            </div>
          </span>
          <span v-show="menuOpen"
            class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja">{{ item.title }} <div v-if="item.pinned" class="ml-0">
            <PinFilled style="color: #1890ff; font-size: 10px;" />
          </div></span>
         
          <div v-show="menuOpen"
            class="ml-auto shrink-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <a-dropdown :trigger="['hover','click']" placement="bottomRight">
              <div 
                class="ant-dropdown-trigger more-icon-wrapper size-[24px] cursor-pointer rounded-[6px] text-color-text-primary-3 flex justify-center items-center hover:bg-(--menu-hover-bg-color)!">
                <MoreOptionsIcon />
              </div>
              <template #overlay>
                <a-menu @click="(menuInfo) => handleMenuClick(menuInfo, item.id)">
                  <a-menu-item key="pin">
                    <template #icon v-if="item.pinned">
                      <PinFilled style="color: #1890ff" />
                    </template>
                    {{ item.pinned ? '取消固定' : '固定' }}
                  </a-menu-item>
                  <a-menu-item key="edit">编辑</a-menu-item>
                  <a-menu-item key="delete">删除</a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
          </div>
        </div>
      </a>
      <div class="absolute h-1 w-full bg-color-assistive-blue-focus opacity-0 -bottom-1"></div>
    </div> -->
    <!-- <a draggable="false" class="block" href="/zh-CN/wisebase/ai-inbox">
      <div
        class="box-border h-[36px] cursor-pointer gap-[8px] rounded-[10px] px-[8px] py-[6px] transition-colors flex items-center text-color-text-primary-3 hover:bg-(--menu-hover-bg-color)">
        <DragHandleIcon
          class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100" />
        <span class="size-[24px] shrink-0 flex justify-center items-center">
          <InboxIcon />
        </span>
        <span v-show="menuOpen"
          class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja">AI
          暂存箱</span>
      </div>
    </a> -->
  </div>
</template>

<style scoped>
.ant-typography {
  width: 136px;
}
</style>
