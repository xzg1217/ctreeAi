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

import PopMenu from './popMenu.vue'
import { useSettingStore } from '@/store/modules/setting'

const settingStore = useSettingStore()
const { menuOpen } = storeToRefs(settingStore)

const router = useRouter()
const route = useRoute()
const activeMenuPath = ref<string>('')

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
  <div class="relative my-1 box-border w-full space-y-1 px-[12px]"><a draggable="false" class="block"
      href="/zh-CN/wisebase">
      <div
        class="box-border h-[36px] cursor-pointer gap-[8px] rounded-[10px] px-[8px] py-[6px] transition-colors flex items-center text-color-text-primary-3 hover:bg-(--menu-hover-bg-color)">
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
    <div class="relative" draggable="true" style="opacity: 1">
      <div class="absolute h-1 w-full bg-color-assistive-blue-focus opacity-0 -top-1"></div><a draggable="false"
        class="block group" href="/zh-CN/wisebase/68e7584b6cd86d3975227213">
        <div
          class="box-border h-[36px] cursor-pointer gap-[8px] rounded-[10px] px-[8px] py-[6px] transition-colors flex items-center text-color-text-primary-3 hover:bg-(--menu-hover-bg-color)">
          <DragHandleIcon
            class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100" />
          <span class="size-[24px] shrink-0 flex justify-center items-center">
            <div class="cursor-pointer rounded-[8px] bg-transparent flex justify-center items-center shrink-0" style="
                  color: var(--color-warning-normal);
                  width: 24px;
                  height: 24px;
                  background-color: var(--color-warning-bg);
                ">
              <WisebaseIcon />
            </div>
          </span>
          <span v-show="menuOpen"
            class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja">Demo:
            Research on LLMs</span>
          <div v-show="menuOpen"
            class="ml-auto shrink-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div
              class="ant-dropdown-trigger more-icon-wrapper size-[24px] cursor-pointer rounded-[6px] text-color-text-primary-3 flex justify-center items-center hover:bg-(--menu-hover-bg-color)">
              <MoreOptionsIcon />
            </div>
          </div>
        </div>
      </a>
      <div class="absolute h-1 w-full bg-color-assistive-blue-focus opacity-0 -bottom-1"></div>
    </div>
    <div class="relative" draggable="true" style="opacity: 1">
      <div class="absolute h-1 w-full bg-color-assistive-blue-focus opacity-0 -top-1"></div><a draggable="false"
        class="block group" href="/zh-CN/wisebase/68e7584b6cd86d3975227214">
        <div
          class="box-border h-[36px] cursor-pointer gap-[8px] rounded-[10px] px-[8px] py-[6px] transition-colors flex items-center text-color-text-primary-3 hover:bg-(--menu-hover-bg-color)">
          <DragHandleIcon
            class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100" />
          <span class="size-[24px] shrink-0 flex justify-center items-center">
            <div class="cursor-pointer rounded-[8px] bg-transparent flex justify-center items-center shrink-0" style="
                  color: var(--color-success-normal);
                  width: 24px;
                  height: 24px;
                  background-color: var(--color-success-bg);
                ">
              <ResearchIcon />
            </div>
          </span>
          <span v-show="menuOpen"
            class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja">Demo:
            NVIDIA Business Outlook</span>
          <div v-show="menuOpen"
            class="ml-auto shrink-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div
              class="ant-dropdown-trigger more-icon-wrapper size-[24px] cursor-pointer rounded-[6px] text-color-text-primary-3 flex justify-center items-center hover:bg-(--menu-hover-bg-color)">
              <MoreOptionsIcon />
            </div>
          </div>
        </div>
      </a>
      <div class="absolute h-1 w-full bg-color-assistive-blue-focus opacity-0 -bottom-1"></div>
    </div>
    <div class="relative" draggable="true" style="opacity: 1">
      <div class="absolute h-1 w-full bg-color-assistive-blue-focus opacity-0 -top-1"></div><a draggable="false"
        class="block group" href="/zh-CN/wisebase/68e7584b6cd86d3975227215">
        <div
          class="box-border h-[36px] cursor-pointer gap-[8px] rounded-[10px] px-[8px] py-[6px] transition-colors flex items-center text-color-text-primary-3 hover:bg-(--menu-hover-bg-color)">
          <DragHandleIcon
            class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100" />
          <span class="size-[24px] shrink-0 flex justify-center items-center">
            <div class="cursor-pointer rounded-[8px] bg-transparent flex justify-center items-center shrink-0" style="
                  color: var(--color-brand-primary-normal);
                  width: 24px;
                  height: 24px;
                  background-color: var(--color-brand-primary-bg);
                ">
              <BusinessIcon />
            </div>
          </span>
          <span v-show="menuOpen"
            class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja">Demo:
            Introduction to Wisebase</span>
          <div v-show="menuOpen"
            class="ml-auto shrink-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100">
            <div
              class="ant-dropdown-trigger more-icon-wrapper size-[24px] cursor-pointer rounded-[6px] text-color-text-primary-3 flex justify-center items-center hover:bg-(--menu-hover-bg-color)">
              <MoreOptionsIcon />
            </div>
          </div>
        </div>
      </a>
      <div class="absolute h-1 w-full bg-color-assistive-blue-focus opacity-0 -bottom-1"></div>
    </div><a draggable="false" class="block" href="/zh-CN/wisebase/ai-inbox">
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
    </a>
  </div>
</template>

<style scoped>
.ant-typography {
  width: 136px;
}
</style>
