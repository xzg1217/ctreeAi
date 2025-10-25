<template>
  <div class="top-layout">
    <!-- 顶部导航栏 -->
    <header class="layout-top">
      <ArtHeaderBar />
    </header>
    
    <!-- 主要内容区域 -->
    <main class="layout-main">
      <ArtPageContent />
    </main>
    
    <!-- 底部区域 -->
    <footer class="layout-footer">
      <div class="footer-content">
        <p>&copy; 2024 公司名称. 保留所有权利.</p>
      </div>
    </footer>
    
    <!-- 全局组件 -->
    <div class="app-global">
      <ArtGlobalComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ArtHeaderBar from '@/components/core/layouts/art-header-bar/index.vue'
  import ArtPageContent from '@/components/core/layouts/art-page-content/index.vue'
  import ArtGlobalComponent from '@/components/core/layouts/art-global-component/index.vue'

  defineOptions({ name: 'TopLayout' })
</script>

<style lang="scss" scoped>
.top-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  
  .layout-top {
    flex-shrink: 0;
    height: 60px;
    background: var(--art-bg-color);
    border-bottom: 1px solid var(--art-border-color);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  }
  
  .layout-main {
    flex: 1;
    overflow: auto;
    background: var(--art-bg-color);
  }
  
  .layout-footer {
    flex-shrink: 0;
    height: 60px;
    background: var(--art-bg-color);
    border-top: 1px solid var(--art-border-color);
    display: flex;
    align-items: center;
    justify-content: center;
    
    .footer-content {
      color: var(--art-gray-500);
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
</style>