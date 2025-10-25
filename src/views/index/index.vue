<template>
  <!-- 根据layoutType动态渲染不同布局 -->
  <component 
    :is="currentLayout" 
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
  import { computed } from 'vue'
  import { useRoute } from 'vue-router'
  import DefaultLayout from './DefaultLayout.vue'
  import TopLayout from './TopLayout.vue'

  const route = useRoute()

  // 根据路由meta中的layoutType选择布局组件
  const currentLayout = computed(() => {
    const layoutType = route.meta?.layoutType as 'default' | 'top' | undefined
    
    switch (layoutType) {
      case 'top':
        return TopLayout
      case 'default':
      default:
        return DefaultLayout
    }
  })

  defineOptions({ name: 'AppLayout' })
</script>

<style lang="scss" scoped>
  @use './style';
</style>
