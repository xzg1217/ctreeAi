<template>
  <div class="app-layout">
    <aside class="app-sidebar">
      <ArtSidebarMenu />
    </aside>

    <main id="app-main">
      <div class="app-content">
        <ArtPageContent />
      </div>
    </main>

    <div class="app-global">
      <ArtGlobalComponent />
    </div>
  </div>
</template>

<script setup lang="ts">
  import ArtSidebarMenu from '@/components/core/layouts/art-menus/art-sidebar-menu/index.vue'
  import ArtPageContent from '@/components/core/layouts/art-page-content/index.vue'
  import ArtGlobalComponent from '@/components/core/layouts/art-global-component/index.vue'

  defineOptions({ name: 'DefaultLayout' })
</script>

<style lang="scss" scoped>
.app-layout {
  display: flex;
  height: 100vh;
  
  .app-sidebar {
    width: 240px;
    flex-shrink: 0;
    background: var(--art-bg-color);
    border-right: 1px solid var(--art-border-color);
  }
  
  #app-main {
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    
    .app-content {
      flex: 1;
      overflow: auto;
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