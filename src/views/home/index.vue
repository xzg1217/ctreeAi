<template>
  <div class="home">
    <!-- 顶部导航条 -->
    <div class="home-header" @mouseleave="handleHeaderMouseLeave">
      <div class="home-header-tab">
        <div class="home-header-left">
          <!-- Logo -->
          <ElImage :src="Logo" class="home-header-left-logo" />
          <!-- 导航菜单 -->
          <div class="home-header-left-menu">
            <div class="home-header-left-menu-item flex gap-1 items-center align-center" v-for="(item, index) in menus"
              :key="item.path" @mouseenter="handleMouseEnter(index)">
              <p class="">{{ t(item.name) }}</p>
              <i class="iconfont-sys font-size-[12px]"
                :class="[item.icon, { 'rotate-icon': hoveredIndex === index }]"></i>
            </div>
          </div>
        </div>
        <div class="home-header-right">
          <a
              class="font-size-[12px] flex gap-2 items-center add-chrome px-3 py-1.5 rounded-[999px] cursor-pointer hover:bg-gray-200">

              <i class="iconfont-sys iconsys-add-plus font-size-[12px]"></i>

              {{ t('home.buttons.addToChrome') }}
            </a>

          <!-- 登录 -->
          <a
            class="font-normal-14 flex gap-2 items-center login px-3 py-1.5 rounded-[999px] cursor-pointer bg-black text-white">

            {{ t('home.buttons.login') }}
          </a>
        </div>
      </div>

      <!-- 扩展面板 -->
      <div class="extension-panel-wrapper" @mouseenter="handlePanelMouseEnter">
        <!-- wb扩展 -->
        <transition name="slide-down">
          <div v-if="hoveredIndex == 1" class="extension-panel-content">
            <div v-for="(item, index) in wbData" :key="item.path" class="panel-item flex gap-2 items-center">
              <p class="name">{{ t(item.name) }}</p>

              <div v-if="item.isNew" class="new-tag">New</div>
            </div>
          </div>
        </transition>

         <transition name="slide-down">
         <div  class="extension-panel-content flex gap-2">
            <div v-for="(item, index) in toolData" :key="index" class="flex flex-col gap-2">
              <p class="title text-sm">{{ t(item.title) }}</p>
              <div class="flex flex-col gap-2">
                <p class="name text-[#333] cursor-pointer" v-for="value in item.children" :key="value.name" @click="go(value.path)">{{ t(value.name) }} 
                  <span v-if="value.isNew" class="px-1 font-[600]! text-[11px] text-white bg-red-400 rounded-[4px]">New</span></p>

              </div>
            </div>
          </div>
          </transition>
      </div>

    </div>

    <!-- 第二模块 -->
    <div class="relative w-full h-screen h-svh min-h-[600px]">
      <div class="fade-in absolute inset-0 opacity-60 fade-in-bg">
        <div id=":R177puaqfja:" class="h-full canvas-container">
          <canvas width="100%" height="1271" id="colorbgcanvas-0" class="colorbgcanvas"></canvas>
        </div>
      </div>
      <div class="flex flex-col items-center justify-center w-full h-full px-5">
        <h1
          class="slogan transform-gpu scale-[100%] translate-y-[50%] text-center text-[42px] sm:text-[68px] lg:text-[80px] leading-[1.3] font-semibold hero-slogan">
          <p class="blur-text"><span class="animate-in-down first-word animated-text">Deep<!-- -->&nbsp;</span><span
              class="animate-in-down second-word animated-text">Research<!-- -->&nbsp;</span><span
              class="animate-in-down third-word animated-text">{{ t('home.titles.deepResearchMinutes').replace('Deep Research ','') }}<!-- -->&nbsp;</span><span
              style="display: inline-block; will-change: transform, filter, opacity; filter: blur(0px); opacity: 1; transform: none;"></span>
          </p>
        </h1>
        <div
          class="w-full max-w-[720px] mt-2 gsap-fade-in transform-gpu scale-75 opacity-0 animate-content content-container">
          <div class="w-fit mx-auto text-center">
            <div class="text-[16px] sm:text-[20px] font-normal leading-[1.33] text-color-text-primary-3 hero-text">
              {{ t('home.titles.aiResearchSimulation') }}
            </div>
          </div>
          <div
            class="relative w-full my-10 md:my-12 bg-gray-50 hover:bg-gray-100 focus-within:!bg-white backdrop-blur-[20px] text-color-text-primary-4 rounded-[32px] border border-[rgba(107,107,118,0.02)] border-solid focus-within:!border-color-grey-line2-hover focus-within:shadow-[0_0_0_4px_#72768B0F] transition-colors">
            <textarea rows="1" :placeholder="t('home.placeholders.researchTopic')" v-model="searchText"
              class="w-full box-border max-h-36 ps-6 py-2.5 my-[10px] pe-16 text-color-text-primary-1 block bg-transparent border-none outline-none resize-none text-base search-textarea "
              maxlength="200"></textarea>
            <button :disabled="searchText.length === 0"
              class="absolute size-fit bottom-[10px] right-[10px] left-auto rtl:left-[10px] rtl:right-auto rounded-full p-3 bg-black cursor-pointer disabled:bg-gray-200 disabled:cursor-not-allowed border-none"><svg
                width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg"
                class="size-5 text-color-text-white-1">
                <path
                  d="M3.242 15.029c.635.157 1.772-.33 4.046-1.3l2.08-.89c3.181-1.36 4.772-2.04 5.254-2.996.418-.83.418-1.81 0-2.64-.482-.956-2.073-1.636-5.254-2.995l-2.13-.91c-2.247-.961-3.37-1.441-3.994-1.296A1.96 1.96 0 0 0 1.74 3.72c-.061.638.564 1.687 1.815 3.787.1.166.173.29.227.393H8a.6.6 0 0 1 0 1.2H3.79c-.053.105-.126.23-.225.4-1.249 2.14-1.873 3.21-1.796 3.86a1.96 1.96 0 0 0 1.473 1.668"
                  fill="#fff"></path>
              </svg></button>
          </div>
        </div>
        <div
          class="gsap-fade-in transform-gpu scale-75 opacity-0 flex flex-wrap items-center justify-center gap-6 animate-content content-bottom">
          <ul class="flex items-center justify-center gap-5 text-text-primary-2 w-full md:w-auto">
            <li>
              <h3 class="text-base font-bold">2025</h3>
              <p class="text-xs opacity-60">{{ t('home.features.recommend') }}</p>

            </li>
            <li>
              <h3 class="flex items-center gap-1 text-base font-bold">{{ t('home.stats.tenMillionPlus') }}</h3>
              <p class="text-xs opacity-60">{{ t('home.stats.activeUsers') }}</p>
            </li>
            <li>
              <h3 class="text-base font-bold">{{ t('home.stats.oneHundredThousandPlus') }}</h3>
              <p class="text-xs opacity-60">{{ t('home.stats.fiveStarReviews') }}</p>
            </li>
          </ul>
          <div
            class="w-px h-10 hidden md:block bg-gradient-to-b from-[hsla(230_10%_50%/0)] via-[hsla(230_10%_50%/0.4)] via-[50%] to-[hsla(230_10%_50%/0)]">
          </div>
          <div class="flex gap-4 flex-wrap justify-center">
            <a href="https://app.arcade.software/share/X4F2JwLx3SewOIa9GDGd" target="_blank"
              class="cursor-pointer flex items-center gap-3 rounded-xl border px-4 py-2 text-base border-solid text-[var(--color-text-primary-3)] hover:bg-gray-100 hover:text-black no-underline">
              <i class="iconfont-sys font-size-[20px] iconsys-shuju"></i>
              {{ t('home.features.viewDemo') }}</a>

            <a
              class="cursor-pointer flex items-center gap-3 rounded-xl border px-4 py-2 text-base border-solid text-[var(--color-text-primary-3)] hover:bg-gray-100 hover:text-black no-underline">
              <i class="iconfont-sys font-size-[20px] iconsys-shuju"></i>
              {{ t('home.features.learn') }} Sider 5.0</a>

          </div>
        </div>
      </div>
    </div>

    <!-- 第三模块 -->
    <div class="mt-[-80px] relative w-full h-[200vh]">
      <div class="text-base flex justify-center font-size-[12px]"> <i
          class="iconfont-sys font-size-[12px] iconsys-xia mr-2 bounce-arrow-icon"></i> {{ t('home.features.learnMore') }}</div>
      <!-- 滚动区 -->
      <div
        class="s2-card w-full relative aspect-square xs:aspect-[16/9] lg:aspect-[16/6] xl:aspect-[16/6] text-center text-[32px] sm:text-[68px] lg:text-[92px]">
        <div
          class="s2-card-bg from-hide origin-center top-0 left-0 w-full h-full absolute bg-[#5b59c9] rounded-2xl md:rounded-3xl overflow-hidden"
          style="translate: none; rotate: none; scale: none; opacity: 1; transform: scale(1, 1);">
          <div id=":R1m97puaqfja:" class="w-full h-full" style="position: relative;">
            <canvas width="1568" height="588" id="colorbgcanvas-1"
              style="position: absolute; top: 0px; left: 0px; z-index: 0;"></canvas>
          </div>
        </div>
        <h3
          class="s2-title-1 transform-gpu scale-100 top-1/2 -translate-y-1/2 opacity-100 absolute px-5 left-0 right-0 text-white! font-semibold! leading-tight w-max!"
          style="transform: translate(-50%, -50%) translateY(0); left: 50%; opacity: 1;">
          {{ t('home.titles.unprecedentedResearch') }}</h3>
        <h3
          class="s2-title-2 absolute left-0 right-0 top-1/2 text-white! font-semibold! leading-tight text-center px-5 transition-all duration-300 w-[max-content] "
          style="transform: translate(-50%, -50%) translateY(0); left: 50%; opacity: 0;">
          {{ t('home.features.gFast') }}</h3>
      </div>
    </div>

    <!-- 第四模块 -->
    <div class="relative w-full mt-[60px] md:mt-[160px]">
      <div
        class="s4-wrapper -max-h-screen pb-16 max-w-[1400px] relative flex flex-col mx-auto px-5 gap-8 pt-[120px] md:flex-row lg:px-10 lg:gap-20 md:pt-[160px]">
        <div class="hidden md:block flex-1">
          <div class="sticky top-[120px]">
            <div class="w-full flex flex-col gap-6">
              <h2 class="text-[40px] lg:text-[64px] font-semibold leading-[1.2]">{{ t('home.titles.deepResearchAgent') }}</h2>
              <p class="text-xl opacity-60 leading-normal">{{ t('home.titles.aiResearchWorkload') }}</p>
              <div class="mt-0 md:mt-8"><a
                  class="text-base text-white bg-[hsla(235_35%_7%/1)] px-4 py-2 rounded-xl inline-flex gap-2 items-center w-fit"
                  href="/wisebase/deep-research">{{ t('home.buttons.freeStart') }}<svg width="12" height="24" viewBox="0 0 12 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.54708 8.75977C4.29855 8.75977 4.09708 8.96124 4.09708 9.20977C4.09708 9.45829 4.29855 9.65977 4.54708 9.65977L7.70333 9.65977L2.53183 14.8313C2.35609 15.007 2.35609 15.2919 2.53183 15.4677C2.70756 15.6434 2.99249 15.6434 3.16822 15.4677L8.33972 10.2962V13.4524C8.33972 13.7009 8.54119 13.9024 8.78972 13.9024C9.03825 13.9024 9.23972 13.7009 9.23972 13.4524L9.23972 9.60977C9.23972 9.14032 8.85916 8.75977 8.38972 8.75977L4.54708 8.75977Z"
                      fill="white"></path>
                  </svg></a></div>
            </div>
          </div>
        </div>
        <div
          class="s4-cards-wrapper s4-width w-full md:w-[60%] will-change-[width,top,transform] relative h-fit min-w-[260px] lg:min-w-[342px] mx-auto"
          style="--position:0%;--tr:0%;--img-tr:0%">
          <div class="relative block md:hidden text-left mb-14 w-full">
            <div class="w-full flex flex-col gap-6">
              <h2 class="text-[40px] lg:text-[64px] font-semibold leading-[1.2]">{{ t('home.titles.deepResearchAgent') }}</h2>
              <p class="text-xl opacity-60 leading-normal">{{ t('home.titles.aiResearchWorkload') }}</p>
              <div class="mt-0 md:mt-8"><a
                  class="text-base text-white bg-[hsla(235_35%_7%/1)] px-4 py-2 rounded-xl inline-flex gap-2 items-center w-fit"
                  href="/wisebase/deep-research">{{ t('home.buttons.freeStart') }}<svg width="12" height="24" viewBox="0 0 12 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.54708 8.75977C4.29855 8.75977 4.09708 8.96124 4.09708 9.20977C4.09708 9.45829 4.29855 9.65977 4.54708 9.65977L7.70333 9.65977L2.53183 14.8313C2.35609 15.007 2.35609 15.2919 2.53183 15.4677C2.70756 15.6434 2.99249 15.6434 3.16822 15.4677L8.33972 10.2962V13.4524C8.33972 13.7009 8.54119 13.9024 8.78972 13.9024C9.03825 13.9024 9.23972 13.7009 9.23972 13.4524L9.23972 9.60977C9.23972 9.14032 8.85916 8.75977 8.38972 8.75977L4.54708 8.75977Z"
                      fill="white"></path>
                  </svg></a></div>
            </div>
          </div>
          <div class="">
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform: none;">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] group bg-gradient-to-br from-[hsla(253_100%_62%/1)] to-[hsla(252_100%_75%/1)]">
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white">
                    {{ t('home.features.intelligentSearch') }}</h3>
                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white">
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]">
                    <video class="w-full h-full" src="/src/assets/vedio/A1.mp4" loop="" autoplay="" playsinline=""
                      muted=""></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform: translateY(3%);">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] group bg-gradient-to-br from-[hsla(216_100%_60%/1)] to-[hsla(218_100%_75%/1)]">
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white">
                    {{ t('home.features.highlightNotes') }}</h3>
                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white">
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]">
                    <video class="w-full h-full" src="/src/assets/vedio/A2.mp4" loop="" autoplay="" playsinline=""
                      muted=""></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform: translateY(6%);">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] bg-gradient-to-br from-[hsla(161_69%_41%/1)] to-[hsla(161_56%_53%/1)]">
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white">
                    {{ t('home.features.detailedReport') }}</h3>
                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white">
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]">
                    <video class="w-full h-full" src="/src/assets/vedio/A3.mp4" loop="" autoplay="" playsinline=""
                      muted=""></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform: translateY(9%);">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] bg-gradient-to-br from-[hsla(249_11%_31%/1)] to-[hsla(250_9%_52%/1)]">
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white">
                    {{ t('home.features.visualReport') }}</h3>
                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white">
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]">
                    <video class="w-full h-full" src="/src/assets/vedio/A4.mp4" loop="" autoplay="" playsinline=""
                      muted=""></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative w-full mt-[60px] md:mt-[160px]">
      <div
        class="s5-wrapper -max-h-screen pb-16 max-w-[1400px] relative flex flex-col mx-auto px-5 gap-8 pt-[120px] md:flex-row-reverse lg:px-10 lg:gap-20 md:pt-[160px]">
        <div class="hidden md:block flex-1">
          <div class="sticky top-[120px]">
            <div class="w-full flex flex-col gap-6">
              <h2 class="text-[40px] lg:text-[64px] font-semibold leading-[1.2]">{{ t('home.titles.allInOneBrowserAssistant') }}</h2>
              <p class="text-xl opacity-60">{{ t('home.titles.smartResearchAnytime') }}</p>
              <div class="mt-4 md:mt-8">
                <ul class="flex items-center gap-5 text-text-primary-2 leading-normal">
                  <li>
                    <h3 class="text-base font-bold">1000万+</h3>
                    <p class="text-xs leading-[18px] opacity-60">{{ t('home.stats.activeUsers') }}</p>
                  </li>
                  <li>
                    <h3 class="text-base font-bold">10万+</h3>
                    <p class="text-xs leading-[18px] opacity-60">{{ t('home.stats.fiveStarReviews') }}</p>
                  </li>
                </ul><a
                  href="https://chrome.google.com/webstore/detail/sider-chatgpt-sidebar-gpt/difoiogjjojoaoomphldepapgpbgkhkb"
                  target="_blank"
                  class="text-base text-white bg-[hsla(235_35%_7%/1)] px-4 py-2 rounded-xl inline-flex gap-2 items-center w-fit mt-6">{{ t('home.buttons.getExtension') }}<svg
                    width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.54708 8.75977C4.29855 8.75977 4.09708 8.96124 4.09708 9.20977C4.09708 9.45829 4.29855 9.65977 4.54708 9.65977L7.70333 9.65977L2.53183 14.8313C2.35609 15.007 2.35609 15.2919 2.53183 15.4677C2.70756 15.6434 2.99249 15.6434 3.16822 15.4677L8.33972 10.2962V13.4524C8.33972 13.7009 8.54119 13.9024 8.78972 13.9024C9.03825 13.9024 9.23972 13.7009 9.23972 13.4524L9.23972 9.60977C9.23972 9.14032 8.85916 8.75977 8.38972 8.75977L4.54708 8.75977Z"
                      fill="white"></path>
                  </svg></a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="s5-cards-wrapper s5-width w-full md:w-[60%] will-change-[width,top,transform] relative h-fit min-w-[260px] lg:min-w-[342px] mx-auto"
          style="--position:0%;--tr:0%;--img-tr:0%">
          <div class="relative block md:hidden text-left mb-14 w-full">
            <div class="w-full flex flex-col gap-6">
              <h2 class="text-[40px] lg:text-[64px] font-semibold leading-[1.2]">{{ t('home.titles.allInOneBrowserAssistant') }}</h2>
              <p class="text-xl opacity-60">{{ t('home.titles.smartResearchAnytime') }}</p>
              <div class="mt-4 md:mt-8">
                <ul class="flex items-center gap-5 text-text-primary-2 leading-normal">
                  <li>
                    <h3 class="text-base font-bold">1000万+</h3>
                    <p class="text-xs leading-[18px] opacity-60">{{ t('home.stats.activeUsers') }}</p>
                  </li>
                  <li>
                    <h3 class="text-base font-bold">10万+</h3>
                    <p class="text-xs leading-[18px] opacity-60">{{ t('home.stats.fiveStarReviews') }}</p>
                  </li>
                </ul><a
                  href="https://chrome.google.com/webstore/detail/sider-chatgpt-sidebar-gpt/difoiogjjojoaoomphldepapgpbgkhkb"
                  target="_blank"
                  class="text-base text-white bg-[hsla(235_35%_7%/1)] px-4 py-2 rounded-xl inline-flex gap-2 items-center w-fit mt-6">{{ t('home.buttons.getExtension') }}<svg
                    width="12" height="24" viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.54708 8.75977C4.29855 8.75977 4.09708 8.96124 4.09708 9.20977C4.09708 9.45829 4.29855 9.65977 4.54708 9.65977L7.70333 9.65977L2.53183 14.8313C2.35609 15.007 2.35609 15.2919 2.53183 15.4677C2.70756 15.6434 2.99249 15.6434 3.16822 15.4677L8.33972 10.2962V13.4524C8.33972 13.7009 8.54119 13.9024 8.78972 13.9024C9.03825 13.9024 9.23972 13.7009 9.23972 13.4524L9.23972 9.60977C9.23972 9.14032 8.85916 8.75977 8.38972 8.75977L4.54708 8.75977Z"
                      fill="white"></path>
                  </svg></a>
              </div>
            </div>
          </div>
          <div class="">
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform:none">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] group bg-gradient-to-br from-[hsla(30_98%_52%/1)] to-[hsla(35_95%_66%/1)]">
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white">
                    {{ t('home.features.quickSummary') }}</h3>
                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white">
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]">
                    <video class="w-full h-full" src="/src/assets/vedio/C1.mp4" loop="" autoplay="" playsinline=""
                      muted=""></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform:translateY(3%)">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] group bg-gradient-to-br from-[hsla(159_58%_46%/1)] to-[hsla(159_58%_46%/1)]">
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white">
                    {{ t('home.features.explainHighlight') }}</h3>
                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white">
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]">
                    <video class="w-full h-full" src="/src/assets/vedio/C2.mp4" loop="" autoplay="" playsinline=""
                      muted=""></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform:translateY(6%)">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] bg-gradient-to-br from-[hsla(216_100%_60%/1)] to-[hsla(218_100%_75%/1)]">
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white">
                    {{ t('home.features.oneClickTranslateWeb') }}</h3>

                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white">
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]">
                    <video class="w-full h-full" src="/src/assets/vedio/C3.mp4" loop="" autoplay="" playsinline=""
                      muted=""></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]">
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform:translateY(9%)">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] bg-gradient-to-br from-[hsla(253_100%_62%/1)] to-[hsla(252_100%_75%/1)]">
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white">
                    智能阅读工具，深入研究网页与文件</h3>
                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white">
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]">
                    <video class="w-full h-full" src="/src/assets/vedio/C4.mp4" loop="" autoplay="" playsinline=""
                      muted=""></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]">
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="relative w-full mt-[200px]">
      <div class="relative z-10 max-w-[1400px] mx-auto px-5 md:px-10">
        <div class="mx-auto">
          <div class="space-y-5 md:space-y-6">
            <h2 class="text-[40px] lg:text-[64px] font-semibold leading-normal">{{  t('home.titles.buildYourKnowledgeBase')  }}</h2>

            <div class="flex justify-between items-end gap-8 flex-wrap">
              <p class="w-full md:w-[60%] max-w-[720px] text-xl font-normal leading-normal opacity-60">
                {{  t('home.features.saveResearchFindings')  }}</p>

              <div class=""><a target="_blank"
                  class="text-base text-white bg-[hsla(235_35%_7%/1)] px-4 py-2 rounded-xl flex gap-2 items-center w-fit h-fit ms-auto"
                  href="/wisebase">{{ t('home.buttons.freeStart') }}<svg width="12" height="24" viewBox="0 0 12 24" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M4.54708 8.75977C4.29855 8.75977 4.09708 8.96124 4.09708 9.20977C4.09708 9.45829 4.29855 9.65977 4.54708 9.65977L7.70333 9.65977L2.53183 14.8313C2.35609 15.007 2.35609 15.2919 2.53183 15.4677C2.70756 15.6434 2.99249 15.6434 3.16822 15.4677L8.33972 10.2962V13.4524C8.33972 13.7009 8.54119 13.9024 8.78972 13.9024C9.03825 13.9024 9.23972 13.7009 9.23972 13.4524L9.23972 9.60977C9.23972 9.14032 8.85916 8.75977 8.38972 8.75977L4.54708 8.75977Z"
                      fill="white"></path>
                  </svg></a></div>
            </div>
          </div>
          <div
            class="relative mt-8 md:mt-16 max-w-[min(1400px,100%)] mx-auto rounded-2xl md:rounded-3xl overflow-hidden">
            <video
              class="w-full aspect-[2100/1110] lg:aspect-[1216/574] -xl:aspect-[1300/614] 2xl:aspect-[2100/1110] object-cover object-top"
              src="/src/assets/vedio/wisebase.mp4" loop="" autoplay="" playsinline="" muted=""></video>
          </div>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-[1400px] mx-auto mt-8 md:mt-[100px] mb-[160px]">
          <div class=""><video
              class="w-full aspect-square rounded-2xl md:rounded-3xl mb-4 md:mb-8 bg-color-grey-fill1-hover"
              src="/src/assets/vedio/L.mp4" playsinline="" muted=""></video>
            <p class="text-xl font-semibold">{{  t('home.features.uploadPrivateFiles')  }}</p>

          </div>
          <div class=""><video
              class="w-full aspect-square rounded-2xl md:rounded-3xl mb-4 md:mb-8 bg-color-grey-fill1-hover"
              src="/src/assets/vedio/M.mp4" playsinline="" muted=""></video>
            <p class="text-xl font-semibold">{{  t('home.features.chatWithAIModels')  }}</p>

          </div>
          <div class=""><video
              class="w-full aspect-square rounded-2xl md:rounded-3xl mb-8 md:mb-8 bg-color-grey-fill1-hover"
              src="/src/assets/vedio/R.mp4" playsinline="" muted=""></video>
            <p class="text-xl font-semibold">{{  t('home.features.writeBasedOnNotes')  }}</p>

          </div>
        </div>
      </div>
      <div class="relative z-10 px-5 md:px-10">
        <div
          class="relative -z-[1] mx-auto my-20 flex items-center justify-center w-full aspect-square md:aspect-[1856/680]">
          <div class="s6-bg scale-x-[200%] overflow-hidden absolute z-0 w-full h-full rounded-[32px] bg-blue-400"
            style="translate: none; rotate: none; scale: none; transform: scale(2, 1);">
            <div id="s6-bg" class="absolute inset-0">
              <div id=":R6f7puaqfja:" class="w-full h-full" style="position: relative;">
                <canvas width="3136" height="574" id="colorbgcanvas-2"
                  style="width: 3136px; height: 574.469px; position: absolute; top: 0px; left: 0px; z-index: 0;"></canvas>
              </div>
            </div>
          </div>
          <h2
            class="relative z-10 font-semibold! mx-[6%] text-center text-white! py-6 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] 2xl:text-[90px]"> {{  t('home.titles.siderHelpsYouGrow')  }}</h2>

        </div>
      </div>
    </div>

    <!-- 获取 -->
    <div class="relative w-[100vw] text-white! py-[160px] bg-[#09001e]">
      <div
        class="top-light transform-gpu scale-x-0 scale-y-50 origin-top absolute inset-0 bg-[url('/home-materials/top-light.jpg')] bg-no-repeat bg-top z-0"
        style="background-size: 100% 100%; translate: none; rotate: none; scale: none; transform: scale(0, 0.5);"></div>
      <div class="relative flex flex-col items-center gap-14 z-1">
        <h2
          class="w-[757px] max-w-full px-5 text-white! text-[32px] md:text-[64px] font-medium leading-snug text-center">
          {{  t('home.titles.oneAccountAllPlatform')  }}</h2><a

          href="https://chrome.google.com/webstore/detail/chatgpt-sidebar/difoiogjjojoaoomphldepapgpbgkhkb"
          target="_blank"
          class="bg-white text-black rounded-full px-[15px] py-3 flex items-center gap-2.5 relative hover:before:opacity-100 before:opacity-0 before:transition-opacity before:duration-500 before:ease-in-out before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-r before:from-[rgba(243,139,65,0.80)_5%] before:via-[rgba(243,71,183,0.80)_28.7%,rgba(85,139,252,0.80)_57.74%] before:to-[rgba(104,69,255,0.80)_95.01%] before:blur-[24px] before:content-[&quot;&quot;]"><span
            class="size-6 inline-block"><svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"
              xmlns="http://www.w3.org/2000/svg" class="size-8 w-full h-full">
              <path
                d="M11.965.75q3.014-.024 5.664 1.507a11 11 0 0 1 4.42 4.67l-9.318-.49a6.17 6.17 0 0 0-3.692.936q-1.683 1.048-2.324 2.88L3.25 4.931A11 11 0 0 1 7.155 1.85 11.3 11.3 0 0 1 11.965.75M2.583 5.834l4.233 8.323a6.13 6.13 0 0 0 2.65 2.724 5.47 5.47 0 0 0 3.68.565l-2.889 5.662a11.1 11.1 0 0 1-4.835-1.977A11.16 11.16 0 0 1 2 17.164a11.03 11.03 0 0 1-1.25-5.166q0-3.351 1.833-6.164m19.919 2.122q.729 1.884.747 3.898a11.4 11.4 0 0 1-.609 3.841 11.1 11.1 0 0 1-1.921 3.415 11.2 11.2 0 0 1-3.09 2.63q-2.888 1.669-6.254 1.493l5.086-7.82a6 6 0 0 0 1.036-3.648q-.068-2.003-1.337-3.483zm-10.5.251q1.57 0 2.682 1.11a3.65 3.65 0 0 1 1.111 2.681q0 1.57-1.11 2.68a3.65 3.65 0 0 1-2.683 1.111 3.65 3.65 0 0 1-2.681-1.11 3.66 3.66 0 0 1-1.111-2.68q0-1.57 1.11-2.681a3.66 3.66 0 0 1 2.682-1.111">
              </path>
            </svg></span><span class="text-lg md:text-2xl font-semibold">{{  t('home.buttons.freeGet')  }}</span></a>
        <div
          class="flex flex-wrap justify-start md:justify-center gap-y-5 gap-x-3 md:gap-x-4 px-5 md:px-[10%] text-[hsla(235_100%_92%/0.56)]">
          <div class="w-[72.7px] cursor-pointer text-(--art-text-muted) hover:text-white"><a
              href="https://chrome.google.com/webstore/detail/chatgpt-sidebar/difoiogjjojoaoomphldepapgpbgkhkb"
              target="_blank" class="flex flex-col items-center gap-2"><span class="size-[22px] md:size-8"><svg
                  width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                  class="size-8 w-full h-full">
                  <path
                    d="M11.965.75q3.014-.024 5.664 1.507a11 11 0 0 1 4.42 4.67l-9.318-.49a6.17 6.17 0 0 0-3.692.936q-1.683 1.048-2.324 2.88L3.25 4.931A11 11 0 0 1 7.155 1.85 11.3 11.3 0 0 1 11.965.75M2.583 5.834l4.233 8.323a6.13 6.13 0 0 0 2.65 2.724 5.47 5.47 0 0 0 3.68.565l-2.889 5.662a11.1 11.1 0 0 1-4.835-1.977A11.16 11.16 0 0 1 2 17.164a11.03 11.03 0 0 1-1.25-5.166q0-3.351 1.833-6.164m19.919 2.122q.729 1.884.747 3.898a11.4 11.4 0 0 1-.609 3.841 11.1 11.1 0 0 1-1.921 3.415 11.2 11.2 0 0 1-3.09 2.63q-2.888 1.669-6.254 1.493l5.086-7.82a6 6 0 0 0 1.036-3.648q-.068-2.003-1.337-3.483zm-10.5.251q1.57 0 2.682 1.11a3.65 3.65 0 0 1 1.111 2.681q0 1.57-1.11 2.68a3.65 3.65 0 0 1-2.683 1.111 3.65 3.65 0 0 1-2.681-1.11 3.66 3.66 0 0 1-1.111-2.68q0-1.57 1.11-2.681a3.66 3.66 0 0 1 2.682-1.111">
                  </path>
                </svg></span><span class="text-xs md:text-sm">Chrome</span></a></div>
          <div class="w-[72.7px] cursor-pointer text-(--art-text-muted) hover:text-white"><a
              href="https://microsoftedge.microsoft.com/addons/detail/sider-ai-sidebar/dhoenijjpgpeimemopealfcbiecgceod"
              target="_blank" class="flex flex-col items-center gap-2"><span class="size-[22px] md:size-8"><svg
                  width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"
                  class="size-8 w-full h-full">
                  <path
                    d="M12 .75C5.813.75.75 5.813.75 12S5.813 23.25 12 23.25c4.005 0 7.538-2.12 9.53-5.294a.4.4 0 0 0 .04-.098c.009-.035.009-.07.009-.106a.4.4 0 0 0-.027-.103.4.4 0 0 0-.058-.088.24.24 0 0 0-.084-.063c-.031-.018-.067-.026-.102-.035a.3.3 0 0 0-.107 0 .3.3 0 0 0-.098.035c-.276.16-.564.298-.862.405-1.725.591-2.676.613-3.85.564-1.306-.057-2.902-.506-4.022-1.173s-2.04-1.623-2.538-2.454c-.498-.83-.796-1.871-.662-3.2.137-1.36 1.377-2.467 2.831-2.467 1.569 0 2.85 1.25 2.85 2.818 0 .796-.379 1.485-.868 2.04-.106.098-.355.454.272.938.746.574 2.418.845 3.747.778 1.324-.067 2.769-.591 3.76-1.631.787-.831 1.489-2.16 1.489-3.627C23.254 4.626 17.814.75 12 .75">
                  </path>
                </svg></span><span class="text-xs md:text-sm">Edge</span></a></div>
          <div
            class="w-0.5 h-15 hidden md:block bg-gradient-to-b from-[hsla(230_10%_50%/0)] via-[hsla(230_10%_50%/0.4)] via-[50%] to-[hsla(230_10%_50%/0)]">
          </div>
          <div class="w-[72.7px] cursor-pointer text-(--art-text-muted) hover:text-white"><a
              href="https://sider-1257001727.cos.ap-guangzhou.myqcloud.com/mac/Sider-release-2.5.7.dmg" target="_blank"
              class="flex flex-col items-center gap-2"><span class="size-[22px] md:size-8"><svg
                  xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="currentColor"
                  class="size-8 w-full h-full">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M15 30c8.284 0 15-6.716 15-15S23.284 0 15 0 0 6.716 0 15s6.716 15 15 15m.505-22.992-.54.934-.53-.937a1.217 1.217 0 0 0-2.107 1.214l1.237 2.147-3.962 6.867H6.508a1.21 1.21 0 0 0-1.214 1.213c0 .674.54 1.214 1.214 1.214h11.038c.53-.994-.153-2.427-1.373-2.427h-3.765l5.205-9.011a1.215 1.215 0 1 0-2.107-1.214M9.116 22.935l1.167-2.024c-.63-.76-1.427-.994-2.407-.69l-.867 1.5a1.215 1.215 0 1 0 2.107 1.214m14.376-5.696h-3.158l-.697-1.207q-1.868-3.239-2.88-4.979c-.718.597-1.445 2.358-.428 4.112l1.62 2.807 2.865 4.963a1.217 1.217 0 0 0 2.108-1.214l-1.184-2.054h1.754a1.21 1.21 0 0 0 1.214-1.214 1.21 1.21 0 0 0-1.214-1.214">
                  </path>
                </svg></span><span class="text-xs md:text-sm">Mac OS</span></a></div>
          <div class="w-[72.7px] cursor-pointer text-(--art-text-muted) hover:text-white"><a
              href="/download?windowsDl=1" target="_blank" class="flex flex-col items-center gap-2"><span
                class="size-[22px] md:size-8"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
                  viewBox="0 0 30 30" fill="currentColor" class="size-8 w-full h-full">
                  <path
                    d="M11.56 3.137 1.049 4.62c-.191 0-.382.297-.382.494v8.897c0 .296.19.494.477.494h10.512c.286 0 .477-.198.477-.494V3.63c0-.098-.095-.296-.19-.395-.096-.099-.192-.099-.383-.099M29.142.765c-.095-.099-.287-.099-.382-.099L14.427 2.643c-.191 0-.383.198-.383.494v10.874c0 .296.191.494.478.494h14.333c.287 0 .478-.198.478-.494V1.16c0-.1-.095-.297-.19-.396M11.656 15.494H1.143c-.286 0-.477.197-.477.494v8.896c0 .297.19.495.382.495L11.56 26.86h.095c.096 0 .192 0 .287-.098.096-.1.191-.198.191-.396v-10.38c0-.296-.19-.493-.477-.493m17.2 0H14.522c-.287 0-.478.197-.478.494V26.86c0 .297.191.495.383.495l14.333 1.977h.095c.096 0 .192 0 .287-.1.096-.098.191-.197.191-.395v-12.85c0-.297-.19-.494-.477-.494">
                  </path>
                </svg></span><span class="text-xs md:text-sm">Windows</span></a></div>
          <div
            class="w-0.5 h-15 hidden md:block bg-gradient-to-b from-[hsla(230_10%_50%/0)] via-[hsla(230_10%_50%/0.4)] via-[50%] to-[hsla(230_10%_50%/0)]">
          </div>
          <div
            class="w-[72.7px] cursor-pointer text-(--art-text-muted) hover:text-white relative group flex flex-col gap-2 items-center -order-1 md:order-none">
            <a href="https://apps.apple.com/app/id6446394143" target="_blank"
              class="flex flex-col items-center gap-2"><span class="size-[22px] md:size-8"><svg
                  xmlns="http://www.w3.org/2000/svg" width="28" height="32" viewBox="0 0 28 32" fill="currentColor"
                  class="size-8 w-full h-full">
                  <path
                    d="M26.294 11.122c-1.894-2.635-4.849-2.998-5.902-3.04-2.513-.243-4.906 1.406-6.18 1.406s-3.24-1.373-5.325-1.337c-2.74.038-5.265 1.513-6.678 3.847-2.848 4.692-.729 11.644 2.045 15.45 1.357 1.865 2.974 3.958 5.096 3.883 2.045-.077 2.82-1.258 5.287-1.258 2.473 0 3.167 1.258 5.33 1.22 2.2-.039 3.595-1.9 4.94-3.77 1.558-2.162 2.198-4.252 2.236-4.36-.05-.021-4.288-1.564-4.332-6.203-.04-3.881 3.332-5.744 3.484-5.838zM20.426.666c-1.624.064-3.59 1.027-4.756 2.32-1.044 1.151-1.85 2.985-1.605 4.746 1.814.134 3.554-.874 4.682-2.173 1.126-1.293 1.886-3.096 1.679-4.893">
                  </path>
                </svg></span><span class="text-xs md:text-sm">{{ t('home.platforms.ios') }}</span></a>
            <div
              class="absolute w-[120px] h-[120px] left-1/2 transform -translate-x-1/2 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" class="size-30">
                <rect width="120" height="120" rx="12" fill="url(#IosQr_svg__a)"></rect>
                <defs>
                  <pattern id="IosQr_svg__a" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#IosQr_svg__b" transform="scale(.00676)"></use>
                  </pattern>
                  <image id="IosQr_svg__b" width="148" height="148" preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,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">
                  </image>
                </defs>
              </svg>
            </div>
          </div>
          <div
            class="w-[72.7px] cursor-pointer text-(--art-text-muted) hover:text-white relative group flex flex-col gap-2 items-center -order-1 md:order-none">
            <a href="https://sider-1257001727.cos.ap-guangzhou.myqcloud.com/android/SiderAndroid-release-3.4.7-1760412485974.apk"
              target="_blank" class="flex flex-col items-center gap-2"><span class="size-[22px] md:size-8"><svg
                  xmlns="http://www.w3.org/2000/svg" width="32" height="22" viewBox="0 0 32 22" fill="currentColor"
                  class="size-8 w-full h-full">
                  <path fill-rule="evenodd" clip-rule="evenodd"
                    d="M3.71.968a1.09 1.09 0 0 1 1.526.218L8.298 5.27A15.9 15.9 0 0 1 16 3.297c2.792 0 5.417.715 7.702 1.972l3.062-4.083a1.09 1.09 0 0 1 1.745 1.31l-2.967 3.956C29.462 9.368 32 14.036 32 19.297c0 1.117-.958 1.953-2.076 1.953H2.076C.958 21.25 0 20.414 0 19.297c0-5.261 2.539-9.929 6.458-12.845L3.491 2.496A1.09 1.09 0 0 1 3.709.968m6.472 12.51a1.455 1.455 0 1 1-2.91 0 1.455 1.455 0 0 1 2.91 0m13.09 1.454a1.455 1.455 0 1 0 0-2.91 1.455 1.455 0 0 0 0 2.91">
                  </path>
                </svg></span><span class="text-xs md:text-sm">{{ t('home.platforms.android') }}</span></a>
            <div
              class="absolute w-[120px] h-[120px] left-1/2 transform -translate-x-1/2 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink" class="size-30">
                <rect width="120" height="120" rx="12" fill="url(#AndroidQr_svg__a)"></rect>
                <defs>
                  <pattern id="AndroidQr_svg__a" patternContentUnits="objectBoundingBox" width="1" height="1">
                    <use xlink:href="#AndroidQr_svg__b" transform="scale(.00676)"></use>
                  </pattern>
                  <image id="AndroidQr_svg__b" width="148" height="148" preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,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">
                  </image>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <div class="relative w-[100vw] bg-grey-layer3-reserve text-white! pt-10 pb-[18px] bg-[#0C0D19]">
      <div class="flex justify-between gap-6 max-w-[1400px] mx-auto px-8 box-border flex-wrap">
        <div class="flex flex-col max-w-[320px] md:max-w-[320px] w-full"><svg width="190" height="40"
            viewBox="0 0 190 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M14.16 0c3.407 0 6.22 2.63 6.645 6.034v.633h-6.252a.64.64 0 0 0-.41.152L11.53 9.036a1.5 1.5 0 0 0-.642-.147c-.833 0-1.509.696-1.509 1.555 0 .86.676 1.556 1.51 1.556.833 0 1.509-.696 1.509-1.556q0-.196-.046-.379L14.785 8h6.02v11.333H8.587a1.51 1.51 0 0 0-1.363-.889c-.834 0-1.51.697-1.51 1.556s.676 1.556 1.51 1.556c.602 0 1.121-.364 1.363-.89h12.218V32h-6.02l-2.433-2.065q.046-.183.046-.38c0-.859-.676-1.555-1.51-1.555-.833 0-1.509.696-1.509 1.556 0 .859.676 1.555 1.51 1.555.229 0 .446-.053.641-.147l2.612 2.217a.64.64 0 0 0 .411.152h6.252v.634C20.333 37.377 17.481 40 14.051 40c-3.161 0-5.82-2.228-6.586-5.248-2.294-1.033-3.897-3.397-3.897-6.149 0-.648.089-1.276.255-1.869-2.05-1.102-3.46-3.303-3.497-5.849v-.218c0-2.784 1.654-5.17 4.006-6.167a6.6 6.6 0 0 1-.754-2.729l-.006-.132a7 7 0 0 1-.013-.417c0-2.758 1.71-5.104 4.097-5.973C8.382 2.234 11.018 0 14.16 0"
              fill="url(#LogoWhite_svg__a)"></path>
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M36.127 5.326C35.428 2.272 32.774 0 29.607 0c-3.408 0-6.222 2.63-6.646 6.034v27.933c.472 3.41 3.323 6.033 6.754 6.033 3.161 0 5.82-2.228 6.586-5.248 2.294-1.033 3.897-3.397 3.897-6.149 0-.648-.089-1.276-.255-1.869 2.078-1.117 3.498-3.363 3.498-5.952 0-2.33-1.15-4.381-2.894-5.582a.7.7 0 0 1-.136.367c-1.298 1.725-2.766 2.81-4.382 3.253a4.723 4.723 0 0 0-.27 1.816c.023.469.113.943.281 1.423a.677.677 0 0 1-.387.859.643.643 0 0 1-.831-.401 6.4 6.4 0 0 1-.358-1.815 6.1 6.1 0 0 1 .146-1.657c-1.632.077-3.395-.439-5.271-1.547a.683.683 0 0 1-.242-.914.637.637 0 0 1 .885-.25l.115.067c3.786 2.186 6.814 1.469 9.3-1.831.51-.938.801-2.02.801-3.173 0-2.78-1.693-5.15-4.07-6.071m-9.942 22.588a.68.68 0 0 1 .362-.871.64.64 0 0 1 .827.337l.015.036.028.06c.057.117.142.257.255.404.187.242.416.453.688.614.668.395 1.538.465 2.685.07.941-.63 2.112-.93 3.5-.888.357.01.64.32.629.69a.66.66 0 0 1-.667.65c-2.552-.076-4.057 1.178-4.667 3.91a.65.65 0 0 1-.777.503.67.67 0 0 1-.486-.803q.32-1.435.952-2.46a3.69 3.69 0 0 1-3.306-2.164l-.006-.013zm2.956-21.657a.66.66 0 0 0-.633.686q.043 1.805.745 3.089c-1.106.08-2.185.683-3.168 1.893a.686.686 0 0 0 .08.945c.275.238.684.2.914-.083.801-.988 1.597-1.406 2.38-1.424.314-.007.615.052.896.16.17.066.313.142.42.211l.054.037.033.024q.023.015.045.028 1.103.732 2.694 1.022a.65.65 0 0 0 .751-.544.67.67 0 0 0-.526-.777q-1.346-.243-2.232-.835l-.057-.042-.066-.045c-1.086-.785-1.628-2.002-1.667-3.69a.66.66 0 0 0-.663-.655"
              fill="url(#LogoWhite_svg__b)"></path>
            <g fill="#fff">
              <path
                d="M77.431 11.697q-1.284 0-2.15-.798-.834-.831-.833-2.046 0-1.214.832-2.01.868-.834 2.151-.833 1.284 0 2.116.832.867.798.867 2.011 0 1.215-.867 2.046-.832.798-2.116.798M79.825 13.986v18.212h-4.857V13.986zM57.61 31.273q2.047.867 4.58.867 2.67 0 4.613-.97 1.942-1.006 2.949-2.67a6.85 6.85 0 0 0 1.006-3.607c0-1.503-.359-2.917-1.076-3.842q-1.074-1.386-2.567-2.08-1.49-.694-3.85-1.387-1.734-.52-2.706-.902a5.6 5.6 0 0 1-1.595-1.04c-.417-.44-.625-1.183-.625-1.83q0-1.387.833-2.116.866-.728 2.29-.728 1.63 0 2.6.832 1.007.798 1.076 2.046h5.342q-.243-3.259-2.601-5.063-2.325-1.838-6.071-1.838-2.498 0-4.44.867-1.943.832-3.018 2.428-1.075 1.595-1.075 3.745c0 1.526.346 2.951 1.04 3.876q1.075 1.353 2.532 2.046 1.492.66 3.85 1.352 1.736.486 2.707.902 1.005.381 1.665 1.075c.44.462.659 1.252.659 1.969q0 1.317-.971 2.15-.971.798-2.672.797-1.664 0-2.636-.867-.936-.867-1.04-2.358h-5.204q.035 2.22 1.214 3.85t3.192 2.496">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M84.519 17.055q-1.145 2.254-1.145 5.167 0 2.948 1.145 5.237 1.18 2.254 3.191 3.502 2.013 1.25 4.44 1.249 2.151 0 3.781-.867 1.632-.867 2.533-2.289v2.844h4.926V6.236h-4.926v9.12q-1.006-1.353-2.706-2.15a8 8 0 0 0-3.573-.832q-2.462 0-4.475 1.213-2.012 1.215-3.191 3.468m13.286 2.22q.694 1.248.694 3.017t-.694 3.051a5.05 5.05 0 0 1-1.874 1.942q-1.179.66-2.532.66a4.85 4.85 0 0 1-2.497-.694q-1.145-.695-1.874-1.977-.693-1.318-.693-3.052t.693-2.982q.728-1.283 1.874-1.942a4.9 4.9 0 0 1 2.497-.659q1.353 0 2.532.694 1.18.658 1.874 1.942">
              </path>
              <path
                d="M136.827 13.275a6.9 6.9 0 0 0-2.428 2.393v-2.982h-4.856v19.212h4.856v-9.572q0-2.67 1.145-3.745 1.179-1.075 3.469-1.075h1.283v-5.098q-1.942 0-3.469.867">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M125.699 19.886q.218 1.017.256 1.86l-13.738 2.939q.604 1.998 2.107 2.883 1.502.884 3.333.492c2.303-.492 3.141-1.6 3.591-3.077h4.707c-.155 1.924-.904 2.97-2.107 4.14-1.408 1.372-3.009 2.37-5.248 2.85q-2.714.58-5.138-.143-2.399-.763-4.091-2.706-1.659-1.95-2.275-4.833-.624-2.916.092-5.375.715-2.457 2.599-4.102 1.883-1.644 4.664-2.239 2.68-.573 5.03.13a8.14 8.14 0 0 1 3.994 2.585q1.637 1.849 2.224 4.596m-5.208-.305q-.426-1.824-1.947-2.633-1.528-.843-3.394-.444-1.764.377-2.753 1.724-.963 1.305-.828 3.262z">
              </path>
            </g>
            <defs>
              <linearGradient id="LogoWhite_svg__a" x1="37.013" y1="38.924" x2="3.578" y2="7.332"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#32C5FF"></stop>
                <stop offset="0.25" stop-color="#5666F5"></stop>
                <stop offset="0.524" stop-color="#8A57EA"></stop>
                <stop offset="0.821" stop-color="#EB35CE"></stop>
                <stop offset="1" stop-color="#F7B500"></stop>
              </linearGradient>
              <linearGradient id="LogoWhite_svg__b" x1="37.013" y1="38.924" x2="3.578" y2="7.332"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#32C5FF"></stop>
                <stop offset="0.25" stop-color="#5666F5"></stop>
                <stop offset="0.524" stop-color="#8A57EA"></stop>
                <stop offset="0.821" stop-color="#EB35CE"></stop>
                <stop offset="1" stop-color="#F7B500"></stop>
              </linearGradient>
            </defs>
          </svg>
          <p class="text-(--art-text-muted) mt-8!">{{ t('home.footer.siderLearning') }}</p>
          <div class="flex gap-4 mt-4"><a
              class="size-8 md:size-9 rounded-full shrink-0 flex items-center justify-center cursor-pointer bg-[rgba(114,118,139,0.12)] hover:bg-[rgba(114,118,139,0.24)] text-text-white-2 hover:text-text-white-1"
              target="_blank" href="/zh-CN/contact"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#Email_svg__a)" fill="#DCDFF9" fill-opacity="0.92">
                  <path
                    d="M0 11.45V4.656l6.576 5.656a.56.56 0 0 0 .425.132.56.56 0 0 0 .426-.132l6.576-5.658v6.796a1.01 1.01 0 0 1-1.01 1.015H1.01A1.01 1.01 0 0 1 0 11.45">
                  </path>
                  <path d="M0 3.168v-.621a1.01 1.01 0 0 1 1.01-1.01h11.983a1.01 1.01 0 0 1 1.01 1.01v.621L7 9.202z">
                  </path>
                </g>
                <defs>
                  <clipPath id="Email_svg__a">
                    <path fill="#fff" d="M0 0H14V14H0z"></path>
                  </clipPath>
                </defs>
              </svg></a><a
              class="size-8 md:size-9 rounded-full shrink-0 flex items-center justify-center cursor-pointer bg-[rgba(114,118,139,0.12)] hover:bg-[rgba(114,118,139,0.24)] text-text-white-2 hover:text-text-white-1"
              target="_blank" href="https://discord.com/invite/5PQ3pYaTDZ"><svg width="14" height="14"
                viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.87 2.558c1.572 2.334 2.358 4.954 2.072 7.98 0 0 0 .023-.024.023a11.3 11.3 0 0 1-3.501 1.763c-.024.024-.024 0-.048 0-.262-.381-.5-.762-.714-1.167v-.048l.023-.024c.382-.143.739-.31 1.096-.524 0 0 .024 0 .024-.024 0-.023 0-.023-.024-.047-.071-.048-.143-.095-.214-.167h-.048c-2.263 1.048-4.74 1.048-7.027 0h-.047c-.072.072-.143.12-.215.167-.023.024-.023.024-.023.047 0 .024 0 .024.023.024.334.215.715.381 1.096.524 0 0 0 .024.024.024v.048c-.214.405-.453.786-.715 1.167-.023 0-.047.024-.047 0A11.3 11.3 0 0 1 .079 10.56c-.024 0-.024-.024-.024-.024-.238-2.62.262-5.264 2.073-7.98h.024a10.9 10.9 0 0 1 2.834-.88c.024-.024.048 0 .048 0 .143.238.262.5.357.738a10.4 10.4 0 0 1 3.216 0c.095-.238.214-.5.357-.738 0 0 .024-.024.048 0 .976.166 1.929.452 2.834.88zM4.676 8.942c.691 0 1.263-.644 1.263-1.406 0-.786-.548-1.405-1.263-1.405-.69 0-1.262.62-1.262 1.405 0 .762.572 1.406 1.262 1.406m4.645 0c.715 0 1.263-.644 1.263-1.406.023-.786-.548-1.405-1.263-1.405-.69 0-1.238.62-1.238 1.405 0 .762.547 1.406 1.238 1.406"
                  fill="#DCDFF9" fill-opacity="0.92"></path>
              </svg></a><a
              class="size-8 md:size-9 rounded-full shrink-0 flex items-center justify-center cursor-pointer bg-[rgba(114,118,139,0.12)] hover:bg-[rgba(114,118,139,0.24)] text-text-white-2 hover:text-text-white-1"
              target="_blank" href="https://x.com/Sider_AI"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.026.584h2.147l-4.69 5.36L14 13.24H9.68L6.296 8.815l-3.871 4.424H.276l5.017-5.734L0 .584h4.43l3.058 4.044zm-.754 11.37h1.19L3.783 1.8H2.507z"
                  fill="#DCDFF9" fill-opacity="0.92"></path>
              </svg></a><a
              class="size-8 md:size-9 rounded-full shrink-0 flex items-center justify-center cursor-pointer bg-[rgba(114,118,139,0.12)] hover:bg-[rgba(114,118,139,0.24)] text-text-white-2 hover:text-text-white-1"
              target="_blank" href="https://www.youtube.com/@Sider_ai"><svg width="14" height="14" viewBox="0 0 14 14"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.693 3.458C14 4.533 14 6.836 14 6.836s0 2.278-.307 3.379a1.71 1.71 0 0 1-1.229 1.228c-1.1.282-5.451.282-5.451.282s-4.377 0-5.477-.282a1.71 1.71 0 0 1-1.229-1.228C0 9.114 0 6.836 0 6.836s0-2.303.307-3.378c.154-.615.64-1.1 1.229-1.254 1.1-.308 5.477-.308 5.477-.308s4.35 0 5.451.308c.589.153 1.075.64 1.229 1.254M5.58 8.909l3.634-2.073L5.58 4.763z"
                  fill="#DCDFF9" fill-opacity="0.92"></path>
              </svg></a><a
              class="size-8 md:size-9 rounded-full shrink-0 flex items-center justify-center cursor-pointer bg-[rgba(114,118,139,0.12)] hover:bg-[rgba(114,118,139,0.24)] text-text-white-2 hover:text-text-white-1"
              target="_blank" href="https://www.tiktok.com/@sider.ai"><svg width="14" height="14" viewBox="0 0 14 14"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#TikTok_svg__a)">
                  <path
                    d="M12.99 5.883c-1.228.027-2.376-.355-3.359-1.065v4.89a4.42 4.42 0 0 1-2.896 4.152 4.405 4.405 0 0 1-4.89-1.23 4.47 4.47 0 0 1-.573-5.053c.874-1.612 2.677-2.513 4.535-2.268v2.459a2.06 2.06 0 0 0-2.295.737c-.492.738-.492 1.694.027 2.404a2.04 2.04 0 0 0 2.268.738 2.05 2.05 0 0 0 1.42-1.94V.147h2.404c0 .218 0 .41.055.628A3.23 3.23 0 0 0 11.16 2.96a3.28 3.28 0 0 0 1.83.546z"
                    fill="#DCDFF9" fill-opacity="0.92"></path>
                </g>
                <defs>
                  <clipPath id="TikTok_svg__a">
                    <path fill="#fff" d="M0 0H14V14H0z"></path>
                  </clipPath>
                </defs>
              </svg></a><a
              class="size-8 md:size-9 rounded-full shrink-0 flex items-center justify-center cursor-pointer bg-[rgba(114,118,139,0.12)] hover:bg-[rgba(114,118,139,0.24)] text-text-white-2 hover:text-text-white-1"
              target="_blank" href="https://www.facebook.com/SiderAIApp"><svg width="14" height="14" viewBox="0 0 14 14"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#Facebook_svg__a)">
                  <path
                    d="M14 7.146a7 7 0 1 0-8.69 6.794V9.286H3.865v-2.14h1.443v-.921c0-2.383 1.078-3.487 3.417-3.487.444 0 1.21.087 1.522.174V4.85a9 9 0 0 0-.808-.026c-1.148 0-1.592.435-1.592 1.565v.756h2.287l-.393 2.14H7.848v4.81A7 7 0 0 0 14 7.145"
                    fill="#DCDFF9" fill-opacity="0.92"></path>
                </g>
                <defs>
                  <clipPath id="Facebook_svg__a">
                    <path fill="#fff" d="M0 0H14V14H0z"></path>
                  </clipPath>
                </defs>
              </svg></a><a
              class="size-8 md:size-9 rounded-full shrink-0 flex items-center justify-center cursor-pointer bg-[rgba(114,118,139,0.12)] hover:bg-[rgba(114,118,139,0.24)] text-text-white-2 hover:text-text-white-1"
              target="_blank" href="https://www.linkedin.com/company/sider-ai"><svg width="15" height="15"
                viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.867.146c.531 0 1 .47 1 1.032v11.968c0 .563-.469 1-1 1H1.836a.98.98 0 0 1-.969-1V1.178c0-.563.438-1.032.969-1.032zm-8.781 12V5.49H3.023v6.656zM4.055 4.554c.656 0 1.187-.532 1.187-1.188s-.531-1.219-1.187-1.219a1.22 1.22 0 0 0-1.22 1.22c0 .655.532 1.187 1.22 1.187m8.812 7.594V8.49c0-1.781-.406-3.187-2.5-3.187-1 0-1.687.562-1.969 1.093h-.03V5.49h-1.97v6.656h2.063v-3.28c0-.876.156-1.72 1.25-1.72 1.062 0 1.062 1 1.062 1.75v3.25z"
                  fill="#DCDFF9" fill-opacity="0.92"></path>
              </svg></a></div>
        </div>
        <div class="flex gap-[60px] text-white flex-wrap">
          <div>
            <div class="text-base font-medium pb-4 border-b border-[rgba(214,218,255,0.10)] mb-4">{{ t('home.footer.categories.products') }}</div>
            <div class="flex gap-[60px] flex-wrap">
              <div class="text-sm">
                <div class="font-medium mb-4">{{ t('home.footer.categories.applications') }}</div>
                <ul class="flex flex-col gap-y-4 gap-x-4">
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/extensions">{{ t('home.footer.applications.extension') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/apps/ios">{{ t('home.platforms.ios') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/apps/android">{{ t('home.platforms.android') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/apps/mac">{{ t('home.platforms.mac') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/apps/windows">{{ t('home.platforms.windows') }}</a></li>
                </ul>
              </div>
              <div class="text-sm">
                <div class="font-medium mb-4">{{ t('home.footer.categories.wisebase') }}</div>
                <ul class="flex-col grid grid-cols-2 gap-4">
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/wisebase">{{ t('home.footer.wisebase.wisebase') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/wisebase/deep-research">{{ t('home.footer.wisebase.deepResearch') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/wisebase/scholar-research">{{ t('home.footer.wisebase.scholarResearch') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/wisebase/math-solver">{{ t('home.footer.wisebase.mathSolver') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white"
                      title="Rec Note" href="/zh-CN/rec-note">{{ t('home.footer.wisebase.recNote') }}</a><span
                      class="px-1 font-[600]! text-[11px] text-white bg-red-400 rounded-[4px]">New</span>
                  </li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/wisebase/audio-to-text">{{ t('home.footer.wisebase.audioToText') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/wisebase/gamification">{{ t('home.footer.wisebase.gamifiedLearning') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/wisebase/interactive-reading">{{ t('home.footer.wisebase.interactiveReading') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/chatpdf">{{ t('home.footer.wisebase.chatpdf') }}</a></li>
                </ul>
              </div>
              <div class="text-sm">
                <div class="font-medium mb-4">{{ t('home.footer.categories.tools') }}</div>
                <ul class="flex-col grid grid-cols-2 gap-4">
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/agents/web-creator">{{ t('home.footer.tools.webCreator') }}</a><span
                      class="px-1 font-[600]! text-[11px] text-white bg-red-400 rounded-[4px]">New</span>
                  </li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/agents/ai-slides">{{ t('home.footer.tools.aiSlides') }}</a><span
                      class="px-1 font-[600]! text-[11px] text-white bg-red-400 rounded-[4px]">New</span>
                  </li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/agents/ai-writer">{{ t('home.footer.tools.aiWriter') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/create/video/ai-video-shortener">{{ t('home.footer.tools.videoShortener') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/create/video/sora-video-downloader">{{ t('home.footer.bottomLinks.soraVideoDownloader') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/create/image/nano-banana-ai-image-generator">{{ t('home.footer.bottomLinks.nanoBanana') }}</a><span><svg
                        xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path
                          d="M11.496 3.814c-.623-1.176-1.325-1.956-1.97-2.374-.315-.205-.67-.357-1.027-.372-.38-.017-.856.137-1.073.626C6.66 3.417 6.173 4.47 5.227 5.858c-.491.722-1.148 1.692-1.68 2.77-.528 1.075-.964 2.316-.964 3.588 0 2.268.99 4.007 2.426 5.163C6.428 18.52 8.266 19.082 10 19.082c1.735 0 3.572-.562 4.991-1.703 1.437-1.156 2.426-2.895 2.426-5.163 0-2.393-.63-4.078-1.954-6.124-.235-.364-.48-.684-.752-.871a1.04 1.04 0 0 0-.653-.197.94.94 0 0 0-.66.335c-.123.142-.193.3-.236.417a3 3 0 0 0-.105.37c-.038.174-.072.377-.102.561l-.028.166c-.073.428-.159.767-.253.983a.6.6 0 0 1-.215-.23c-.105-.183-.179-.449-.243-.854q-.03-.203-.062-.449c-.092-.717-.215-1.672-.658-2.509"
                          fill="#000"></path>
                        <path
                          d="M11.496 3.814c-.623-1.176-1.325-1.956-1.97-2.374-.315-.205-.67-.357-1.027-.372-.38-.017-.856.137-1.073.626C6.66 3.417 6.173 4.47 5.227 5.858c-.491.722-1.148 1.692-1.68 2.77-.528 1.075-.964 2.316-.964 3.588 0 2.268.99 4.007 2.426 5.163C6.428 18.52 8.266 19.082 10 19.082c1.735 0 3.572-.562 4.991-1.703 1.437-1.156 2.426-2.895 2.426-5.163 0-2.393-.63-4.078-1.954-6.124-.235-.364-.48-.684-.752-.871a1.04 1.04 0 0 0-.653-.197.94.94 0 0 0-.66.335c-.123.142-.193.3-.236.417a3 3 0 0 0-.105.37c-.038.174-.072.377-.102.561l-.028.166c-.073.428-.159.767-.253.983a.6.6 0 0 1-.215-.23c-.105-.183-.179-.449-.243-.854q-.03-.203-.062-.449c-.092-.717-.215-1.672-.658-2.509"
                          fill="url(#hot_svg__a)"></path>
                        <path
                          d="M11.184 10.898c-.066-.05-.164-.175-.267-.457a7 7 0 0 1-.247-.96l-.015-.075c-.066-.317-.143-.687-.255-.986-.098-.263-.356-.844-1.002-.933-.614-.084-1.182.132-1.64.435-.46.305-.867.734-1.197 1.196a6.1 6.1 0 0 0-.79 1.508c-.18.512-.286 1.07-.229 1.586.119 1.063.373 1.867.804 2.512.433.646.998 1.064 1.606 1.423 1.39.82 3.335.79 4.934-.17.345-.207.609-.52.805-.83.2-.316.359-.675.477-1.03.223-.675.348-1.489.207-2.084a1.15 1.15 0 0 0-.398-.64 1.4 1.4 0 0 0-.566-.264c-.307-.07-.667-.064-.931-.059h-.039a6 6 0 0 1-.791-.018c-.234-.03-.377-.086-.466-.154"
                          fill="#000"></path>
                        <path
                          d="M11.184 10.898c-.066-.05-.164-.175-.267-.457a7 7 0 0 1-.247-.96l-.015-.075c-.066-.317-.143-.687-.255-.986-.098-.263-.356-.844-1.002-.933-.614-.084-1.182.132-1.64.435-.46.305-.867.734-1.197 1.196a6.1 6.1 0 0 0-.79 1.508c-.18.512-.286 1.07-.229 1.586.119 1.063.373 1.867.804 2.512.433.646.998 1.064 1.606 1.423 1.39.82 3.335.79 4.934-.17.345-.207.609-.52.805-.83.2-.316.359-.675.477-1.03.223-.675.348-1.489.207-2.084a1.15 1.15 0 0 0-.398-.64 1.4 1.4 0 0 0-.566-.264c-.307-.07-.667-.064-.931-.059h-.039a6 6 0 0 1-.791-.018c-.234-.03-.377-.086-.466-.154"
                          fill="url(#hot_svg__b)"></path>
                        <defs>
                          <linearGradient id="hot_svg__a" x1="10" y1="1.066" x2="10" y2="19.082"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#ED6557"></stop>
                            <stop offset="1" stop-color="#E55749"></stop>
                          </linearGradient>
                          <linearGradient id="hot_svg__b" x1="9.981" y1="7.469" x2="9.981" y2="16.732"
                            gradientUnits="userSpaceOnUse">
                            <stop stop-color="#FFF2DB"></stop>
                            <stop offset="1" stop-color="#F4BF00"></stop>
                          </linearGradient>
                        </defs>
                      </svg></span></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/create/image/ai-image-generator">{{ t('home.footer.bottomLinks.aiImageGenerator') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/create/image/italian-brainrot-generator">{{ t('home.footer.bottomLinks.italianBrainrotGenerator') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/create/image/background-remover">{{ t('home.footer.bottomLinks.backgroundRemover') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/create/image/photo-background-changer">{{ t('home.footer.bottomLinks.photoBackgroundChanger') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/create/image/photo-eraser">{{ t('home.footer.bottomLinks.photoEraser') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/create/image/text-remover">{{ t('home.footer.bottomLinks.textRemover') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/create/image/inpaint">{{ t('home.footer.not-[]:bottomLinks.inpaint') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/create/image/image-upscaler">{{ t('home.footer.bottomLinks.imageUpscaler') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/translator/text-translator">{{ t('home.footer.bottomLinks.textTranslator') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/translator/image-translator">{{ t('home.footer.bottomLinks.imageTranslator') }}</a></li>
                  <li class="flex items-center gap-2"><a class="text-(--art-text-muted) hover:text-white" title=""
                      href="/zh-CN/translator/pdf-translator">{{ t('home.footer.bottomLinks.pdfTranslator') }}</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div>
            <div class="text-base font-medium pb-4 border-b border-[rgba(214,218,255,0.10)] mb-4">{{ t('home.footer.bottomLinks.sider') }}</div>
            <div class="flex gap-10">
              <div class="text-sm">
                <ul class="flex flex-col gap-4">
                  <li><a target="_self" class="text-(--art-text-muted) hover:text-white" href="/zh-CN/contact">{{ t('home.footer.bottomLinks.contact') }}</a>
                  </li>
                  <li><a target="_self" class="text-(--art-text-muted) hover:text-white"
                      href="/zh-CN/help-center">{{ t('home.footer.bottomLinks.helpCenter') }}</a></li>
                  <li><a target="_self" class="text-(--art-text-muted) hover:text-white" href="/zh-CN/download">{{ t('home.footer.bottomLinks.download') }}</a>
                  </li>
                  <li><a target="_self" class="text-(--art-text-muted) hover:text-white" href="/zh-CN/pricing">{{ t('home.footer.bottomLinks.pricing') }}</a>
                  </li>
                  <li><a target="_self" class="text-(--art-text-muted) hover:text-white" href="/zh-CN/whats-new">{{ t('home.footer.bottomLinks.whatsNew') }}</a>
                  </li>
                  <li><a target="_self" class="text-(--art-text-muted) hover:text-white" href="/zh-CN/blog">{{ t('home.footer.bottomLinks.blog') }}</a></li>
                  <li><a target="_blank" class="text-(--art-text-muted) hover:text-white"
                      href="https://community.sider.ai/">{{ t('home.footer.bottomLinks.community') }}</a></li>
                  <li><a target="_self" class="text-(--art-text-muted) hover:text-white" href="/zh-CN/partners">{{ t('home.footer.bottomLinks.partners') }}</a>
                  </li>
                  <li><a target="_self" class="text-(--art-text-muted) hover:text-white" href="/zh-CN/affiliate">{{ t('home.footer.bottomLinks.affiliate') }}</a>
                  </li>
                  <li><a target="_self" class="text-(--art-text-muted) hover:text-white" href="/zh-CN/invite">{{ t('home.footer.bottomLinks.invite') }}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center mt-[52px] relative w-full"><svg width="1405" height="298"
            viewBox="0 0 1405 298" fill="none" xmlns="http://www.w3.org/2000/svg"
            class="max-w-[1400px] w-full h-auto aspect-[1405/298] shrink-0">
            <mask id="Sider_svg__b" maskUnits="userSpaceOnUse" x="0" y="0" width="1405" height="426" fill="#000">
              <path fill="#fff" d="M0 0H1405V426H0z"></path>
              <path
                d="M392.436 93.423q-20.632 0-34.573-12.821-13.383-13.38-13.383-32.89 0-19.511 13.383-32.333Q371.803 1.999 392.436 2q20.633 0 34.016 13.379 13.94 12.822 13.94 32.333t-13.94 32.89q-13.383 12.821-34.016 12.821M430.913 130.216v292.757h-78.069V130.216zM73.82 408.116q32.9 13.937 73.607 13.937 42.937 0 74.165-15.609 31.227-16.167 47.398-42.924 16.172-26.758 16.172-57.976c0-24.157-5.762-46.883-17.287-61.748q-17.286-22.299-41.265-33.448-23.977-11.15-61.897-22.298-27.881-8.362-43.495-14.494-15.056-6.69-25.651-16.724c-6.692-7.061-10.037-19.01-10.037-29.416q0-22.297 13.383-34.005 13.94-11.706 36.803-11.706 26.21 0 41.823 13.379 16.172 12.821 17.286 32.89h85.876q-3.904-52.401-41.823-81.39-37.361-29.545-97.585-29.545-40.15 0-71.377 13.937-31.228 13.38-48.514 39.022Q4.115 95.64 4.115 130.204c0 24.528 5.577 47.44 16.73 62.305q17.286 21.742 40.706 32.89 23.979 10.593 61.897 21.741 27.882 7.805 43.496 14.494 16.172 6.133 26.766 17.281c7.063 7.433 10.595 20.125 10.595 31.646q0 21.183-15.614 34.562-15.613 12.822-42.937 12.822-26.766 0-42.38-13.937-15.056-13.936-16.73-37.907H3q.557 35.678 19.517 61.878t51.302 40.137">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M506.372 179.558q-18.402 36.235-18.402 83.061 0 47.385 18.402 84.177 18.959 36.234 51.302 56.303t71.377 20.069q34.572 0 60.781-13.937 26.21-13.937 40.708-36.792v45.712h79.183V5.631H730.54v146.611q-16.172-21.74-43.496-34.562-27.324-13.379-57.436-13.379-39.591 0-71.934 19.511t-51.302 55.746m213.573 35.677q11.152 20.069 11.152 48.499t-11.152 49.057q-11.153 20.069-30.113 31.217-18.959 10.593-40.707 10.592-21.19 0-40.149-11.149-18.402-11.149-30.112-31.775-11.153-21.184-11.153-49.057t11.153-47.941q11.71-20.627 30.112-31.218t40.149-10.592q21.748 0 40.707 11.15 18.96 10.592 30.113 31.217">
              </path>
              <path
                d="M1347.24 118.795c-15.99 9.291-29 22.112-39.04 38.465v-47.942h-78.07v308.833h78.07V264.292c0-28.616 6.14-48.685 18.4-60.206q18.96-17.281 55.77-17.281H1403v-81.947c-20.82 0-39.41 4.646-55.76 13.937">
              </path>
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1168.35 225.054c2.34 10.902 3.71 20.87 4.12 29.903l-220.845 47.247q9.722 32.124 33.862 46.342 24.139 14.218 53.583 7.918c37.02-7.918 50.5-25.728 57.73-49.472h75.67c-2.51 30.94-14.55 47.743-33.88 66.568-22.63 22.043-48.37 38.09-84.36 45.789q-43.62 9.333-82.598-2.281-38.551-12.275-65.761-43.508-26.664-31.35-36.575-77.686-10.027-46.881 1.479-86.397t41.779-65.946 74.987-35.994q43.079-9.216 80.849 2.085c25.55 7.457 46.95 21.311 64.21 41.562 17.54 19.81 29.46 44.433 35.75 73.87m-83.73-4.89q-6.84-29.32-31.29-42.331-24.572-13.557-54.562-7.14-28.355 6.066-44.254 27.71-15.471 20.982-13.304 52.442z">
              </path>
            </mask>
            <path
              d="M392.436 93.423q-20.632 0-34.573-12.821-13.383-13.38-13.383-32.89 0-19.511 13.383-32.333Q371.803 1.999 392.436 2q20.633 0 34.016 13.379 13.94 12.822 13.94 32.333t-13.94 32.89q-13.383 12.821-34.016 12.821Z"
              stroke="url(#Sider_svg__a)" stroke-width="4" mask="url(#Sider_svg__b)"></path>
            <path d="M430.913 130.216v292.757h-78.069V130.216z" stroke="url(#Sider_svg__c)" stroke-width="4"
              mask="url(#Sider_svg__b)"></path>
            <path
              d="M73.82 408.116q32.9 13.937 73.607 13.937 42.937 0 74.165-15.609 31.227-16.167 47.398-42.924 16.172-26.758 16.172-57.976c0-24.157-5.762-46.883-17.287-61.748q-17.286-22.299-41.265-33.448-23.977-11.15-61.897-22.298-27.881-8.362-43.495-14.494-15.056-6.69-25.651-16.724c-6.692-7.061-10.037-19.01-10.037-29.416q0-22.297 13.383-34.005 13.94-11.706 36.803-11.706 26.21 0 41.823 13.379 16.172 12.821 17.286 32.89h85.876q-3.904-52.401-41.823-81.39-37.361-29.545-97.585-29.545-40.15 0-71.377 13.937-31.228 13.38-48.514 39.022Q4.115 95.64 4.115 130.204c0 24.528 5.577 47.44 16.73 62.305q17.286 21.742 40.706 32.89 23.979 10.593 61.897 21.741 27.882 7.805 43.496 14.494 16.172 6.133 26.766 17.281c7.063 7.433 10.595 20.125 10.595 31.646q0 21.183-15.614 34.562-15.613 12.822-42.937 12.822-26.766 0-42.38-13.937-15.056-13.936-16.73-37.907H3q.557 35.678 19.517 61.878t51.302 40.137Z"
              stroke="url(#Sider_svg__d)" stroke-width="4" mask="url(#Sider_svg__b)"></path>
            <path clip-rule="evenodd"
              d="M506.372 179.558q-18.402 36.235-18.402 83.061 0 47.385 18.402 84.177 18.959 36.234 51.302 56.303t71.377 20.069q34.572 0 60.781-13.937 26.21-13.937 40.708-36.792v45.712h79.183V5.631H730.54v146.611q-16.172-21.74-43.496-34.562-27.324-13.379-57.436-13.379-39.591 0-71.934 19.511t-51.302 55.746Zm213.573 35.677q11.152 20.069 11.152 48.499t-11.152 49.057q-11.153 20.069-30.113 31.217-18.959 10.593-40.707 10.592-21.19 0-40.149-11.149-18.402-11.149-30.112-31.775-11.153-21.184-11.153-49.057t11.153-47.941q11.71-20.627 30.112-31.218t40.149-10.592q21.748 0 40.707 11.15 18.96 10.592 30.113 31.217Z"
              stroke="url(#Sider_svg__e)" stroke-width="4" mask="url(#Sider_svg__b)"></path>
            <path
              d="M1347.24 118.795c-15.99 9.291-29 22.112-39.04 38.465v-47.942h-78.07v308.833h78.07V264.292c0-28.616 6.14-48.685 18.4-60.206q18.96-17.281 55.77-17.281H1403v-81.947c-20.82 0-39.41 4.646-55.76 13.937Z"
              stroke="url(#Sider_svg__f)" stroke-width="4" mask="url(#Sider_svg__b)"></path>
            <path clip-rule="evenodd"
              d="M1168.35 225.054c2.34 10.902 3.71 20.87 4.12 29.903l-220.845 47.247q9.722 32.124 33.862 46.342 24.139 14.218 53.583 7.918c37.02-7.918 50.5-25.728 57.73-49.472h75.67c-2.51 30.94-14.55 47.743-33.88 66.568-22.63 22.043-48.37 38.09-84.36 45.789q-43.62 9.333-82.598-2.281-38.551-12.275-65.761-43.508-26.664-31.35-36.575-77.686-10.027-46.881 1.479-86.397t41.779-65.946 74.987-35.994q43.079-9.216 80.849 2.085c25.55 7.457 46.95 21.311 64.21 41.562 17.54 19.81 29.46 44.433 35.75 73.87Zm-83.73-4.89q-6.84-29.32-31.29-42.331-24.572-13.557-54.562-7.14-28.355 6.066-44.254 27.71-15.471 20.982-13.304 52.442z"
              stroke="url(#Sider_svg__g)" stroke-width="4" mask="url(#Sider_svg__b)"></path>
            <defs>
              <linearGradient id="Sider_svg__a" x1="735" y1="2" x2="735" y2="302.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#fff" stop-opacity="0.16"></stop>
                <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
              </linearGradient>
              <linearGradient id="Sider_svg__c" x1="735" y1="2" x2="735" y2="302.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#fff" stop-opacity="0.16"></stop>
                <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
              </linearGradient>
              <linearGradient id="Sider_svg__d" x1="735" y1="2" x2="735" y2="302.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#fff" stop-opacity="0.16"></stop>
                <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
              </linearGradient>
              <linearGradient id="Sider_svg__e" x1="735" y1="2" x2="735" y2="302.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#fff" stop-opacity="0.16"></stop>
                <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
              </linearGradient>
              <linearGradient id="Sider_svg__f" x1="735" y1="2" x2="735" y2="302.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#fff" stop-opacity="0.16"></stop>
                <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
              </linearGradient>
              <linearGradient id="Sider_svg__g" x1="735" y1="2" x2="735" y2="302.5" gradientUnits="userSpaceOnUse">
                <stop stop-color="#fff" stop-opacity="0.16"></stop>
                <stop offset="1" stop-color="#fff" stop-opacity="0"></stop>
              </linearGradient>
            </defs>
          </svg>
          <div class="flex justify-start sm:!justify-between items-center w-full flex-wrap gap-2">
            <div class="text-sm text-text-white-3 flex gap-[10px] flex-wrap justify-start order-1 sm:order-none">
              ©<!-- -->2025<!-- --> <!-- -->版权所有<div class="bg-[rgba(214,218,255,0.10)] w-[1px] h-[20px]"></div><a
                class="hover:text-text-white-1" href="/zh-CN/policies/terms">{{ t('home.footer.termsOfUse') }}</a>

              <div class="bg-[rgba(214,218,255,0.10)] w-[1px] h-[20px]"></div><a class="hover:text-text-white-1"
                href="/zh-CN/policies/privacy">{{ t('home.footer.privacyPolicy') }}</a>

            </div>
            <a-dropdown :trigger="['click']"  placement="topLeft">
              <a class="ant-dropdown-link" @click.prevent>
                <button
              class="flex items-center px-3 py-1.5 gap-2 text-sm text-[#D6DAFF8F] rounded-[8px] bg-[#1E1F2B00] transition-all hover:bg-[#72768B29]"><svg
                xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16">
                <g stroke="currentcolor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.2"
                  clip-path="url(#clip0_6211_1923)">
                  <path d="M8 14.667A6.667 6.667 0 1 0 8 1.333a6.667 6.667 0 0 0 0 13.334" clip-rule="evenodd"></path>
                  <path d="M1.333 8h13.334"></path>
                  <path
                    d="M8 14.667c1.473 0 2.667-2.985 2.667-6.667S9.473 1.333 8 1.333 5.333 4.318 5.333 8 6.527 14.667 8 14.667"
                    clip-rule="evenodd"></path>
                  <path
                    d="M3.286 3.38A6.65 6.65 0 0 0 8 5.334a6.65 6.65 0 0 0 4.714-1.952M12.714 12.62A6.65 6.65 0 0 0 8 10.666c-1.84 0-3.508.746-4.714 1.952">
                  </path>
                </g>
                <defs>
                  <clipPath id="clip0_6211_1923">
                    <path fill="#fff" d="M0 0h16v16H0z"></path>
                  </clipPath>
                </defs>
              </svg>{{ languages.find((lang) => lang.code === locale).name }} <svg width="12" height="12" viewBox="0 0 12 12" fill="none"

                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.25 4.125L6 7.875L9.75 4.125" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round"
                  stroke-linejoin="round"></path>
              </svg></button>
              </a>
              <template #overlay>
                <a-menu>
                  <a-menu-item 
                    v-for="lang in languages" 
                    :key="lang.key"
                    @click="changeLanguage(lang.code)"
                    :class="{ 'text-primary': locale === lang.code }"
                  >
                    {{ lang.name }}
                  </a-menu-item>
                </a-menu>
              </template>
            </a-dropdown>
           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { ColorBgCanvas } from '../../../colorbgcanvas-example.js'
import { GlowCloudAnimation } from '@/utils/canvas/glow-cloud-animation.js'
//import { BlueCloudAnimation } from '@/utils/canvas/blue-cloud-animation.js'
import Logo from '/src/assets/img/logo.png'


import { useI18n } from "vue-i18n";
import { LanguageEnum } from '../../enums/appEnum';
import { changeLanguage } from '@/locales';
import { router } from '@/router/index.js';

const { locale, t } = useI18n();

// 语言列表数据
const languages = [
  { key: LanguageEnum.ZH, name: '中文(简体)', code: 'zh' },
  { key: LanguageEnum.EN, name: 'English', code: 'en' }
];

// 切换语言函数
const menus = ref([
  {
    name: 'home.nav.chat',
    path: '/'
  },
  {
    name: 'home.nav.wisebase',
    path: '/wisebase',
    icon: 'iconsys-xia2',
    hoverIcon: 'iconsys-shang2'
  },
  {
    name: 'home.nav.tools',
    path: '/wisebase/agent',
    icon: 'iconsys-xia2',
    hoverIcon: 'iconsys-shang2'
  },
  {
    name: 'home.nav.extension',
    path: '/setting'
  },
  {
    name: 'home.nav.app', 
    path: '/setting',
    icon: 'iconsys-xia2',
    hoverIcon: 'iconsys-shang2'
  },
  {
    name: 'home.nav.pricing',
    path: '/setting'
  }
])

const wbData = ref([
  {
    name:'home.appNames.wisebase',
    path: '/wisebase'
  },
  {
    name: 'home.appNames.deepResearch',
    path: '/wisebase'
  },
  {
    name: 'home.appNames.scholarResearch',
    path: '/wisebase'
  },
  {
    name: 'home.appNames.mathSolver',
    path: '/wisebase'
  },
  {
    name: 'home.appNames.recNote',
    path: '/wisebase',
    isNew: true
  },
  {
    name: 'home.appNames.audioToText',
    path: '/wisebase'
  },
  {
    name: 'home.appNames.gamifiedLearning',
    path: '/wisebase'
  },
  {
    name: 'home.appNames.interactiveReading',
    path: '/wisebase'
  },
  {
    name: 'home.appNames.chatPDF',
    path: '/wisebase'
  },
])

const toolData = ref([
  {
    title:'Agents',
    children:[
      {
        name:'home.nav.AIPPT',
        path: '/dashboard/console',
        isNew: true
      },
    ],
  },
  {
    title:'图像',
    children:[
      // {
      //   name:'home.appNames.agent',
      //   path: '/wisebase/agent'
      // },
    ],
  },
  {
    title:'翻译器',
    children:[
      // {
      //   name:'home.appNames.agent',
      //   path: '/wisebase/agent'
      // },
    ],
  }
])


const searchText = ref('')

const hoveredIndex = ref<number | null>(null)

const handleMouseEnter = (index: number) => {
  hoveredIndex.value = index
}

const go = (path:any) => {
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

let colorBgCanvas = null
let glowCloudAnimation = null
let blueCloudAnimation = null

// 在组件挂载时初始化canvas动画和滚动监听
onMounted(() => {
  // 确保DOM已渲染完成
  setTimeout(() => {
    // 为第一个canvas初始化ColorBgCanvas动画
    if (document.getElementById('colorbgcanvas-0')) {
      colorBgCanvas = new ColorBgCanvas('colorbgcanvas-0')
      console.log('ColorBgCanvas initialized')
    }
    
    // 为第二个canvas初始化动画
    if (document.getElementById('colorbgcanvas-1')) {
      glowCloudAnimation = new GlowCloudAnimation('colorbgcanvas-1', '#A088E2')
      console.log('Glow Cloud Animation 1 initialized')
    }
    
    // 为第三个canvas初始化蓝色流体云动画
    if (document.getElementById('colorbgcanvas-2')) {
      blueCloudAnimation = new BlueCloudAnimation('colorbgcanvas-2', '#1C4FCE', '#51A2FF')
      console.log('Blue Cloud Animation initialized with colors #1C4FCE and #51A2FF')
    }
  }, 100)

  // 添加滚动事件监听器
  window.addEventListener('scroll', handleScroll)
  // 初始调用一次以设置正确的初始状态
  handleScroll()
})

//记录滚动动画开始时的高度
let startScroll = 0
// 处理滚动事件，根据滚动高度改变样式
const handleScroll = () => {
  const scrollY = window.scrollY
  const cardBg = document.querySelector('.s2-card-bg')
  const title1 = document.querySelector('.s2-title-1')
  const title2 = document.querySelector('.s2-title-2')



  //获取title1的位置
  const viewportHeight = window.innerHeight
  const viewportCenter = viewportHeight / 2
  const title1Center = title1.getBoundingClientRect().top + title1.getBoundingClientRect().height / 2
  console.log(title1Center, viewportCenter, scrollY)

  // 改变s2-card-bg的transform，使其铺满整个网页
  if (cardBg) {
    // 计算scale值，当滚动高度增加时，scale值增大
    if (startScroll > scrollY) {
      cardBg.style.transform = `scale(1, 1)`
    } else if (title1Center <= viewportCenter) {
      if (startScroll === 0) startScroll = scrollY

      // 当scrollY>1900时，scale不再放大背景
      let scale = 1
      if (scrollY <= 1900) {
        // 在scrollY<=1900时，保持原有的放大逻辑
        scale = Math.max(1, Math.min(20, 1 + (scrollY - startScroll) * 0.004))
      } else {
        // 当scrollY>1900时，使用scrollY=1900时的scale值
        scale = Math.max(1, Math.min(20, 1 + (1900 - startScroll) * 0.004))
      }

      cardBg.style.transform = `scale(${scale}, ${scale * 1.5})`
    }

    // 当startScroll>1900时，设置透明度从1渐变为0
    if (scrollY > 1900) {
      // 设置淡出范围为500px，从startScroll=1900开始淡出，到startScroll=2400完全透明
      const fadeRange = 500
      const fadeStart = 1900
      const opacity = Math.max(0, 1 - (scrollY - fadeStart) / fadeRange)
      console.log(opacity)
      cardBg.style.opacity = opacity.toString()
    } else {
      // 当startScroll<=1900时，保持完全不透明
      cardBg.style.opacity = '1'
    }
  }

  // 保存title1的opacity值，用于控制title2的显示
  let title1Opacity = 1

  // s2-title-1始终显示，不需要淡入效果，只考虑淡出
  if (title1) {
    let opacity = 1 // 初始保持显示

    // 获取视口高度和元素位置信息
    const elementRect = title1.getBoundingClientRect()
    const elementCenter = elementRect.top + elementRect.height / 2

    // 计算元素中心与视口中心的距离比例（-1到1之间）
    const distanceFactor = Math.max(-1, Math.min(1, (elementCenter - viewportCenter) / (viewportHeight / 2)))


    // 检查元素位置并应用相应的效果
    if (startScroll > scrollY || distanceFactor > 0) {
      // 当向上滚动超过起始位置，或元素在屏幕中央下方时，应用相对定位并完全显示
      opacity = 1
      title1.style.position = 'relative'
      title1.style.left = '50%'
      title1.style.top = '50%'
      title1.style.transform = `translate(-50%, -50%)`
    } else {
      // 元素在屏幕中央上方时淡出
      // 使用scrollY和startScroll计算opacity
      // 当滚动距离超过100px开始淡出，超过300px完全透明
      const fadeRange = 300 // 淡出效果的总滚动距离
      const fadeStart = 100 // 开始淡出的滚动距离
      const scrollDistance = scrollY - startScroll
      console.log(startScroll, scrollY, 'scrollY', distanceFactor)
      if (scrollDistance > fadeStart) {
        // 计算透明度：在fadeStart到fadeStart+fadeRange之间从1降到0
        opacity = Math.max(0, 1 - (scrollDistance - fadeStart) / fadeRange)
      }

      title1.style.position = 'fixed'
      title1.style.left = '50%'
      title1.style.top = '50%'
      title1.style.transform = `translate(-50%, -50%)`
    }

    // 保存title1的opacity值
    title1Opacity = opacity

    // 设置样式，保持水平居中
    title1.style.opacity = opacity.toString()
  }

  // 只有当s2-title-1淡出后，s2-title-2才会出现
  if (title2) {
    let opacity = 0
    let translateY = 100 // 初始在视口下方100px的位置

    // 只有当s2-title-1的opacity小于0.5时，才考虑s2-title-2的显示
    if (title1Opacity < 0.5) {
      // 与title1保持一致，使用scrollY和startScroll来控制动画效果
      const scrollDistance = scrollY - startScroll

      // 设置淡入范围参数
      const fadeInRange = 200 // 淡入效果的总滚动距离
      const fadeInStart = 200 // 开始淡入的滚动距离
      const fullVisibleStart = 400 // 完全显示的滚动距离
      const fadeOutStart = 800 // 开始淡出的滚动距离
      const fadeOutRange = 200 // 淡出效果的总滚动距离

      // 计算透明度和位移
      if (scrollDistance >= fullVisibleStart && scrollDistance < fadeOutStart) {
        // 在完全显示区间
        opacity = 1
        translateY = 0
      } else if (scrollDistance >= fadeInStart && scrollDistance < fullVisibleStart) {
        // 在淡入区间
        const progress = (scrollDistance - fadeInStart) / (fullVisibleStart - fadeInStart)
        opacity = Math.min(1, progress)
        translateY = 100 - progress * 100
      } else if (scrollDistance >= fadeOutStart) {
        // 在淡出区间
        const progress = (scrollDistance - fadeOutStart) / fadeOutRange
        opacity = Math.max(0, 1 - progress)
        translateY = 0 - (1 - opacity) * 50
      }

      // 设置定位样式，与title1保持一致
      title2.style.position = 'fixed'
      title2.style.left = '50%'
      title2.style.top = '50%'
    } else {
      // 当title1显示时，title2隐藏
      opacity = 0
      title2.style.position = 'relative'
    }

    // 设置样式，保持水平居中
    title2.style.opacity = opacity.toString()
    title2.style.transform = `translate(-50%, -50%) translateY(${translateY}px)`
  }

  // 处理s6-bg元素的scale动画
  const s6Bg = document.querySelector('.s6-bg')
  if (s6Bg) {
    // 当scrollY滚动到10000-10100px范围内时，scale从2平滑过渡到1
    const startTransition = 10000
    const transitionRange = 400

    if (scrollY < startTransition) {
      // 滚动距离小于10000px时，保持scale为2
      s6Bg.style.transform = 'scale(2, 1)'
    } else if (scrollY >= startTransition && scrollY <= startTransition + transitionRange) {
      // 在10000-10100px范围内，计算scale值从2到1的平滑过渡
      const progress = (scrollY - startTransition) / transitionRange
      const scale = 2 - progress * 1
      s6Bg.style.transform = `scale(${scale}, 1)`
    } else {
      // 滚动距离大于10100px时，保持scale为1
      s6Bg.style.transform = 'scale(1, 1)'
    }
  }
}

// 在组件卸载时清理资源
onUnmounted(() => {
  if (colorBgCanvas) {
    colorBgCanvas.destroy()
    colorBgCanvas = null
  }
  
  if (glowCloudAnimation) {
    glowCloudAnimation.destroy()
    glowCloudAnimation = null
  }
  
  if (blueCloudAnimation) {
    blueCloudAnimation.destroy()
    blueCloudAnimation = null
  }
  
  // 移除滚动事件监听器
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style lang="scss" scoped>
@use './index';

#nprogress {
  pointer-events: none
}

#nprogress .bar {
  background: #8A57EA;
  position: fixed;
  z-index: 1600;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px
}

#nprogress .peg {
  display: block;
  position: absolute;
  right: 0;
  width: 100px;
  height: 100%;
  box-shadow: 0 0 10px #8A57EA, 0 0 5px #8A57EA;
  opacity: 1;
  -webkit-transform: rotate(3deg) translate(0px, -4px);
  -ms-transform: rotate(3deg) translate(0px, -4px);
  transform: rotate(3deg) translate(0px, -4px)
}

#nprogress .spinner {
  display: block;
  position: fixed;
  z-index: 1600;
  top: 15px;
  right: 15px
}

#nprogress .spinner-icon {
  width: 18px;
  height: 18px;
  box-sizing: border-box;
  border: 2px solid transparent;
  border-top-color: #8A57EA;
  border-left-color: #8A57EA;
  border-radius: 50%;
  -webkit-animation: nprogress-spinner 400ms linear infinite;
  animation: nprogress-spinner 400ms linear infinite
}

.nprogress-custom-parent {
  overflow: hidden;
  position: relative
}

.nprogress-custom-parent #nprogress .bar,
.nprogress-custom-parent #nprogress .spinner {
  position: absolute
}

@-webkit-keyframes nprogress-spinner {
  0% {
    -webkit-transform: rotate(0deg)
  }

  100% {
    -webkit-transform: rotate(360deg)
  }
}

@keyframes nprogress-spinner {
  0% {
    transform: rotate(0deg)
  }

  100% {
    transform: rotate(360deg)
  }
}
</style>
