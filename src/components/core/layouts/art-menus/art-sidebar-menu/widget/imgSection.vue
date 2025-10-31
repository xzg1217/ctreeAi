<template>
  <div class="sc-dmyCSP ktUFzt flex-1 min-h-0 rcs-custom-scroll px-[15px] text-[14px]!">
    <div data-testid="outer-container" class="rcs-outer-container">
      <div data-testid="inner-container" class="rcs-inner-container" style="overscroll-behavior: none; margin-right: -15px">
        <div style="overflow-y: visible; margin-right: 0px"
          ><button
            class="flex w-full h-10 items-center gap-2 rounded-[12px] bg-transparent text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover) transition-all p-[10px] cursor-pointer"
            :class="{ 'bg-color-grey-layer3-normal': isActive('/') }"
            @click="router.push('/')"
          >
            <div class="mx-[4px]"> <HomeIcon /> </div
            ><span
              v-show="menuOpen"
              class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-mkip61"
              :class="{ 'font-medium-14 text-color-text-primary-1': isActive('/') }"
              >首页</span
            >
          </button>
          <div class="h-[1px] m-[10px] bg-color-grey-line1-normal"></div>
          <div class="space-y-[4px]"
            ><div
              v-for="item in menuItems"
              :key="item.path"
              class="flex w-full h-10 group items-center gap-1 rounded-[12px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover) transition-all p-[10px] cursor-pointer"
              :class="{ 'bg-color-grey-layer3-normal': isActive(item.path) }"
              @click="router.push(item.path)"
            >
              <div class="mx-[4px]">
                <component :is="item.icon" />
              </div>
              <span
                v-show="menuOpen"
                class="w-[150px]! ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line group-[.active]:!font-[600] group-[.active]:!text-color-text-primary-1 group-[.active]:font-medium-14 css-mkip61"
                :class="{ 'font-medium-14 text-color-text-primary-1': isActive(item.path) }"
                >{{ item.title }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useRouter, useRoute } from 'vue-router'
  import HomeIcon from '@/assets/icons/HomeIcon.vue'
  import ImageGeneratorIcon from '@/assets/icons/ImageGeneratorIcon.vue'
  import BackgroundRemoverIcon from '@/assets/icons/BackgroundRemoverIcon.vue'
  import TextRemoverIcon from '@/assets/icons/TextRemoverIcon.vue'
  import PhotoEraserIcon from '@/assets/icons/PhotoEraserIcon.vue'
  import InpaintIcon from '@/assets/icons/InpaintIcon.vue'
  import ImageUpscalerIcon from '@/assets/icons/ImageUpscalerIcon.vue'
  import PhotoBackgroundChangerIcon from '@/assets/icons/PhotoBackgroundChangerIcon.vue'
  import { useSettingStore } from '@/store/modules/setting'

  const router = useRouter()
  const route = useRoute()

  const settingStore = useSettingStore()
  const { menuOpen } = storeToRefs(settingStore)

  const menuItems = [
    {
      title: '图片生成',
      path: '/images/generate',
      icon: ImageGeneratorIcon
    },
    {
      title: '背景移除',
      path: '/images/background-remover',
      icon: BackgroundRemoverIcon
    },
    {
      title: '文字移除',
      path: '/images/text-remover',
      icon: TextRemoverIcon
    },
    {
      title: '区域抹除',
      path: '/images/photo-eraser',
      icon: PhotoEraserIcon
    },
    {
      title: '局部重绘',
      path: '/images/inpaint',

      icon: InpaintIcon
    },
    {
      title: '画质提升',
      path: '/images/image-upscaler',

      icon: ImageUpscalerIcon
    },
    {
      title: '背景替换',
      path: '/images/photo-background-changer',
      icon: PhotoBackgroundChangerIcon
    }
  ]

  const isActive = (path: string) => {
    console.log(route.path, path)
    return route.path === path
  }
</script>

<style scoped lang="scss">
  .active {
    font-weight: 600;
  }
</style>
