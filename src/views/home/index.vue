<template>
  <div class="home">
    <!-- 顶部导航条 -->
    <div class="home-header">
      <div class="home-header-left">
        <!-- Logo -->
        <ElImage src="/src/assets/img/logo.png" class="home-header-left-logo" />
        <!-- 导航菜单 -->
        <div class="home-header-left-menu">
          <div
            class="home-header-left-menu-item flex"
            v-for="(item, index) in menus"
            :key="item.path"
          >
            <i class="iconfont-sys" :class="item.icon"></i>
            <p class="name">{{ item.name }}</p>
          </div>
        </div>
      </div>
      <div class="home-header-right"> 右 <i class="iconfont-sys">&#xe7f1;</i> </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  const menus = ref([
    {
      name: '聊天',
      path: '/'
    },
    {
      name: 'wisebase',
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
</script>

<style lang="scss" scoped>
  @use './index';
</style>
