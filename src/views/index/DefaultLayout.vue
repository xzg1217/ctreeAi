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
@use '@/assets/styles/variables' as *;

.app-layout {
  display: flex;
  width: 100%;
  min-height: 100vh;
  background: var(--art-new-bg-color);

  .app-sidebar {
    flex-shrink: 0;
    width: 240px; /* 默认展开宽度 */
    background: var(--art-bg-color);
    border-right: 1px solid var(--art-border-color);
    transition: width 0.3s ease;
    
    /* 菜单折叠时的样式 */
    :deep(.el-menu--collapse) {
      & ~ * {
        margin-left: 70px; /* 折叠宽度 */
      }
    }
  }

  #app-main {
    display: flex;
    flex: 1;
    flex-direction: column;
    min-width: 0;
    height: 100vh;
    overflow: auto;
    padding: 8px;
    transition: margin-left 0.3s ease;

    .app-content {
      flex: 1;
      background: var(--art-main-bg-color);
      border-radius: 10px;

      :deep(.layout-content) {
        box-sizing: border-box;
        width: calc(100% - 40px);
        margin: auto;

        // 子页面默认 style
        .page-content {
          position: relative;
          box-sizing: border-box;
          padding: 20px;
          overflow: hidden;
          background: var(--art-main-bg-color);
          border-radius: calc(var(--custom-radius) / 2 + 2px) !important;
        }
      }
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

@media only screen and (max-width: $device-ipad-pro) {
  .app-layout {
    #app-main {
      height: 100dvh;
    }
  }
}

@media only screen and (max-width: $device-ipad) {
  .app-layout {
    position: relative;

    .app-sidebar {
      position: fixed;
      top: 0;
      left: 0;
      z-index: 300;
      height: 100vh;
    }

    #app-main {
      width: 100%;
      height: auto;
      overflow: visible;

      .app-content {
        :deep(.layout-content) {
          width: calc(100% - 40px);
        }
      }
    }
  }
}

@media only screen and (max-width: $device-phone) {
  .app-layout {
    #app-main {
      .app-content {
        :deep(.layout-content) {
          width: calc(100% - 30px);
        }
      }
    }
  }
}
</style>