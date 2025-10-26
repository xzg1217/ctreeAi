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
            <div
              class="home-header-left-menu-item flex gap-1 items-center align-center"
              v-for="(item, index) in menus"
              :key="item.path"
              @mouseenter="handleMouseEnter(index)"
              @click="go(item.path)"
            >
              <p class="">{{ t(item.name) }}</p>
              <i
                class="iconfont-sys font-size-[12px]"
                :class="[item.icon, { 'rotate-icon': hoveredIndex === index }]"
              ></i>
            </div>
          </div>
        </div>
        <div class="home-header-right">
          <a
            class="font-size-[12px] flex gap-2 items-center add-chrome px-3 py-1.5 rounded-[999px] cursor-pointer hover:bg-gray-200"
          >
            <i class="iconfont-sys iconsys-add-plus font-size-[12px]"></i>

            {{ t('home.buttons.addToChrome') }}
          </a>

          <!-- 登录 -->
          <a
            class="font-normal-14 flex gap-2 items-center login px-3 py-1.5 rounded-[999px] cursor-pointer bg-black text-white"
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
            <div
              v-for="(item, index) in wbData"
              :key="item.path"
              class="panel-item flex gap-2 items-center"
              @click="go(item.path)"
            >
              <p class="name">{{ t(item.name) }}</p>

              <div v-if="item.isNew" class="new-tag">New</div>
            </div>
          </div>
        </transition>

        <transition name="slide-down">
          <div v-if="hoveredIndex == 2" class="extension-panel-content flex gap-2">
            <div v-for="(item, index) in toolData" :key="index" class="flex flex-col gap-2">
              <p class="title text-sm">{{ t(item.title) }}</p>
              <div class="flex flex-col gap-4 mt-4">
                <p
                  class="name text-[#333] cursor-pointer"
                  v-for="value in item.children"
                  :key="value.name"
                  @click="go(value.path)"
                  >{{ t(value.name) }}
                  <span
                    v-if="value.isNew"
                    class="px-1 font-[600]! text-[11px] text-white bg-red-400 rounded-[4px]"
                    >New</span
                  ></p
                >
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
          class="slogan transform-gpu scale-[100%] translate-y-[50%] text-center text-[42px] sm:text-[68px] lg:text-[80px] leading-[1.3] font-semibold hero-slogan"
        >
          <p class="blur-text"
            ><span class="animate-in-down first-word animated-text">Deep<!-- -->&nbsp;</span
            ><span class="animate-in-down second-word animated-text">Research<!-- -->&nbsp;</span
            ><span class="animate-in-down third-word animated-text"
              >{{ t('home.titles.deepResearchMinutes').replace('Deep Research ', '')
              }}<!-- -->&nbsp;</span
            ><span
              style="
                display: inline-block;
                will-change: transform, filter, opacity;
                filter: blur(0px);
                opacity: 1;
                transform: none;
              "
            ></span>
          </p>
        </h1>
        <div
          class="w-full max-w-[720px] mt-2 gsap-fade-in transform-gpu scale-75 opacity-0 animate-content content-container"
        >
          <div class="w-fit mx-auto text-center">
            <div
              class="text-[16px] sm:text-[20px] font-normal leading-[1.33] text-color-text-primary-3 hero-text"
            >
              {{ t('home.titles.aiResearchSimulation') }}
            </div>
          </div>
          <div
            class="relative w-full my-10 md:my-12 bg-gray-50 hover:bg-gray-100 focus-within:!bg-white backdrop-blur-[20px] text-color-text-primary-4 rounded-[32px] border border-[rgba(107,107,118,0.02)] border-solid focus-within:!border-color-grey-line2-hover focus-within:shadow-[0_0_0_4px_#72768B0F] transition-colors"
          >
            <textarea
              rows="1"
              :placeholder="t('home.placeholders.researchTopic')"
              v-model="searchText"
              class="w-full box-border max-h-36 ps-6 py-2.5 my-[10px] pe-16 text-color-text-primary-1 block bg-transparent border-none outline-none resize-none text-base search-textarea"
              maxlength="200"
            ></textarea>
            <button
              :disabled="searchText.length === 0"
              class="absolute size-fit bottom-[10px] right-[10px] left-auto rtl:left-[10px] rtl:right-auto rounded-full p-3 bg-black cursor-pointer disabled:bg-gray-200 disabled:cursor-not-allowed border-none"
              ><svg
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="size-5 text-color-text-white-1"
              >
                <path
                  d="M3.242 15.029c.635.157 1.772-.33 4.046-1.3l2.08-.89c3.181-1.36 4.772-2.04 5.254-2.996.418-.83.418-1.81 0-2.64-.482-.956-2.073-1.636-5.254-2.995l-2.13-.91c-2.247-.961-3.37-1.441-3.994-1.296A1.96 1.96 0 0 0 1.74 3.72c-.061.638.564 1.687 1.815 3.787.1.166.173.29.227.393H8a.6.6 0 0 1 0 1.2H3.79c-.053.105-.126.23-.225.4-1.249 2.14-1.873 3.21-1.796 3.86a1.96 1.96 0 0 0 1.473 1.668"
                  fill="#fff"
                ></path></svg
            ></button>
          </div>
        </div>
        <div
          class="gsap-fade-in transform-gpu scale-75 opacity-0 flex flex-wrap items-center justify-center gap-6 animate-content content-bottom"
        >
          <ul class="flex items-center justify-center gap-5 text-text-primary-2 w-full md:w-auto">
            <li>
              <h3 class="text-base font-bold">2025</h3>
              <p class="text-xs opacity-60">{{ t('home.features.recommend') }}</p>
            </li>
            <li>
              <h3 class="flex items-center gap-1 text-base font-bold">{{
                t('home.stats.tenMillionPlus')
              }}</h3>
              <p class="text-xs opacity-60">{{ t('home.stats.activeUsers') }}</p>
            </li>
            <li>
              <h3 class="text-base font-bold">{{ t('home.stats.oneHundredThousandPlus') }}</h3>
              <p class="text-xs opacity-60">{{ t('home.stats.fiveStarReviews') }}</p>
            </li>
          </ul>
          <div
            class="w-px h-10 hidden md:block bg-gradient-to-b from-[hsla(230_10%_50%/0)] via-[hsla(230_10%_50%/0.4)] via-[50%] to-[hsla(230_10%_50%/0)]"
          >
          </div>
          <div class="flex gap-4 flex-wrap justify-center">
            <a
              href="https://app.arcade.software/share/X4F2JwLx3SewOIa9GDGd"
              target="_blank"
              class="cursor-pointer flex items-center gap-3 rounded-xl border px-4 py-2 text-base border-solid text-[var(--color-text-primary-3)] hover:bg-gray-100 hover:text-black no-underline"
            >
              <i class="iconfont-sys font-size-[20px] iconsys-shuju"></i>
              {{ t('home.features.viewDemo') }}</a
            >

            <a
              class="cursor-pointer flex items-center gap-3 rounded-xl border px-4 py-2 text-base border-solid text-[var(--color-text-primary-3)] hover:bg-gray-100 hover:text-black no-underline"
            >
              <i class="iconfont-sys font-size-[20px] iconsys-shuju"></i>
              {{ t('home.features.learn') }} Sider 5.0</a
            >
          </div>
        </div>
      </div>
    </div>

    <!-- 第三模块 -->
    <div class="mt-[-80px] relative w-full h-[200vh]">
      <div class="text-base flex justify-center font-size-[12px]">
        <i class="iconfont-sys font-size-[12px] iconsys-xia mr-2 bounce-arrow-icon"></i>
        {{ t('home.features.learnMore') }}</div
      >
      <!-- 滚动区 -->
      <div
        class="s2-card w-full relative aspect-square xs:aspect-[16/9] lg:aspect-[16/6] xl:aspect-[16/6] text-center text-[32px] sm:text-[68px] lg:text-[92px]"
      >
        <div
          class="s2-card-bg from-hide origin-center top-0 left-0 w-full h-full absolute bg-[#5b59c9] rounded-2xl md:rounded-3xl overflow-hidden"
          style="translate: none; rotate: none; scale: none; opacity: 1; transform: scale(1, 1)"
        >
          <div id=":R1m97puaqfja:" class="w-full h-full" style="position: relative">
            <canvas
              width="1568"
              height="588"
              id="colorbgcanvas-1"
              style="position: absolute; top: 0px; left: 0px; z-index: 0"
            ></canvas>
          </div>
        </div>
        <h3
          class="s2-title-1 transform-gpu scale-100 top-1/2 -translate-y-1/2 opacity-100 absolute px-5 left-0 right-0 text-white! font-semibold! leading-tight w-max!"
          style="transform: translate(-50%, -50%) translateY(0); left: 50%; opacity: 1"
        >
          {{ t('home.titles.unprecedentedResearch') }}</h3
        >
        <h3
          class="s2-title-2 absolute left-0 right-0 top-1/2 text-white! font-semibold! leading-tight text-center px-5 transition-all duration-300 w-[max-content]"
          style="transform: translate(-50%, -50%) translateY(0); left: 50%; opacity: 0"
        >
          {{ t('home.features.gFast') }}</h3
        >
      </div>
    </div>

    <!-- 第四模块 -->
    <div class="relative w-full mt-[60px] md:mt-[160px]">
      <div
        class="s4-wrapper -max-h-screen pb-16 max-w-[1400px] relative flex mx-auto px-5 gap-8 pt-[120px] md:flex-row lg:px-10 lg:gap-20 md:pt-[160px]"
      >
        <div class="hidden md:block flex-1">
          <div class="sticky top-[120px]">
            <div class="w-full flex flex-col gap-6">
              <h2 class="text-[40px] lg:text-[64px] font-semibold leading-[1.2]">{{
                t('home.titles.deepResearchAgent')
              }}</h2>
              <p class="text-xl opacity-60 leading-normal">{{
                t('home.titles.aiResearchWorkload')
              }}</p>
              <div class="mt-0 md:mt-8"
                ><a
                  class="text-base text-white bg-[hsla(235_35%_7%/1)] px-4 py-2 rounded-xl inline-flex gap-2 items-center w-fit"
                  href="/wisebase/deep-research"
                  >{{ t('home.buttons.freeStart')
                  }}<svg
                    width="12"
                    height="24"
                    viewBox="0 0 12 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.54708 8.75977C4.29855 8.75977 4.09708 8.96124 4.09708 9.20977C4.09708 9.45829 4.29855 9.65977 4.54708 9.65977L7.70333 9.65977L2.53183 14.8313C2.35609 15.007 2.35609 15.2919 2.53183 15.4677C2.70756 15.6434 2.99249 15.6434 3.16822 15.4677L8.33972 10.2962V13.4524C8.33972 13.7009 8.54119 13.9024 8.78972 13.9024C9.03825 13.9024 9.23972 13.7009 9.23972 13.4524L9.23972 9.60977C9.23972 9.14032 8.85916 8.75977 8.38972 8.75977L4.54708 8.75977Z"
                      fill="white"
                    ></path></svg></a
              ></div>
            </div>
          </div>
        </div>
        <div
          class="s4-cards-wrapper s4-width w-full md:w-[60%] will-change-[width,top,transform] relative h-fit min-w-[260px] lg:min-w-[342px] mx-auto"
          style="--position: 0%; --tr: 0%; --img-tr: 0%"
        >
          <div class="relative block md:hidden text-left mb-14 w-full">
            <div class="w-full flex flex-col gap-6">
              <h2 class="text-[40px] lg:text-[64px] font-semibold leading-[1.2]">{{
                t('home.titles.deepResearchAgent')
              }}</h2>
              <p class="text-xl opacity-60 leading-normal">{{
                t('home.titles.aiResearchWorkload')
              }}</p>
              <div class="mt-0 md:mt-8"
                ><a
                  class="text-base text-white bg-[hsla(235_35%_7%/1)] px-4 py-2 rounded-xl inline-flex gap-2 items-center w-fit"
                  href="/wisebase/deep-research"
                  >{{ t('home.buttons.freeStart')
                  }}<svg
                    width="12"
                    height="24"
                    viewBox="0 0 12 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.54708 8.75977C4.29855 8.75977 4.09708 8.96124 4.09708 9.20977C4.09708 9.45829 4.29855 9.65977 4.54708 9.65977L7.70333 9.65977L2.53183 14.8313C2.35609 15.007 2.35609 15.2919 2.53183 15.4677C2.70756 15.6434 2.99249 15.6434 3.16822 15.4677L8.33972 10.2962V13.4524C8.33972 13.7009 8.54119 13.9024 8.78972 13.9024C9.03825 13.9024 9.23972 13.7009 9.23972 13.4524L9.23972 9.60977C9.23972 9.14032 8.85916 8.75977 8.38972 8.75977L4.54708 8.75977Z"
                      fill="white"
                    ></path></svg></a
              ></div>
            </div>
          </div>
          <div class="">
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform: none">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] group bg-gradient-to-br from-[hsla(253_100%_62%/1)] to-[hsla(252_100%_75%/1)]"
                >
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white"
                  >
                    {{ t('home.features.intelligentSearch') }}</h3
                  >
                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white"
                  >
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]"
                  >
                    <video
                      class="w-full h-full"
                      src="/src/assets/vedio/A1.mp4"
                      loop=""
                      autoplay=""
                      playsinline=""
                      muted=""
                    ></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]"
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform: translateY(3%)">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] group bg-gradient-to-br from-[hsla(216_100%_60%/1)] to-[hsla(218_100%_75%/1)]"
                >
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white"
                  >
                    {{ t('home.features.highlightNotes') }}</h3
                  >
                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white"
                  >
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]"
                  >
                    <video
                      class="w-full h-full"
                      src="/src/assets/vedio/A2.mp4"
                      loop=""
                      autoplay=""
                      playsinline=""
                      muted=""
                    ></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]"
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform: translateY(6%)">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] bg-gradient-to-br from-[hsla(161_69%_41%/1)] to-[hsla(161_56%_53%/1)]"
                >
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white"
                  >
                    {{ t('home.features.detailedReport') }}</h3
                  >
                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white"
                  >
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]"
                  >
                    <video
                      class="w-full h-full"
                      src="/src/assets/vedio/A3.mp4"
                      loop=""
                      autoplay=""
                      playsinline=""
                      muted=""
                    ></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]"
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform: translateY(9%)">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] bg-gradient-to-br from-[hsla(249_11%_31%/1)] to-[hsla(250_9%_52%/1)]"
                >
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white"
                  >
                    {{ t('home.features.visualReport') }}</h3
                  >
                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white"
                  >
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]"
                  >
                    <video
                      class="w-full h-full"
                      src="/src/assets/vedio/A4.mp4"
                      loop=""
                      autoplay=""
                      playsinline=""
                      muted=""
                    ></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]"
                    >
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
        class="s5-wrapper -max-h-screen pb-16 max-w-[1400px] relative flex mx-auto px-5 gap-8 pt-[120px] md:flex-row-reverse lg:px-10 lg:gap-20 md:pt-[160px]"
      >
        <div class="hidden md:block flex-1">
          <div class="sticky top-[120px]">
            <div class="w-full flex flex-col gap-6">
              <h2 class="text-[40px] lg:text-[64px] font-semibold leading-[1.2]">{{
                t('home.titles.allInOneBrowserAssistant')
              }}</h2>
              <p class="text-xl opacity-60">{{ t('home.titles.smartResearchAnytime') }}</p>
              <div class="mt-4 md:mt-8">
                <ul class="flex items-center gap-5 text-text-primary-2 leading-normal">
                  <li>
                    <h3 class="text-base font-bold">1000万+</h3>
                    <p class="text-xs leading-[18px] opacity-60">{{
                      t('home.stats.activeUsers')
                    }}</p>
                  </li>
                  <li>
                    <h3 class="text-base font-bold">10万+</h3>
                    <p class="text-xs leading-[18px] opacity-60">{{
                      t('home.stats.fiveStarReviews')
                    }}</p>
                  </li> </ul
                ><a
                  href="https://chrome.google.com/webstore/detail/sider-chatgpt-sidebar-gpt/difoiogjjojoaoomphldepapgpbgkhkb"
                  target="_blank"
                  class="text-base text-white bg-[hsla(235_35%_7%/1)] px-4 py-2 rounded-xl inline-flex gap-2 items-center w-fit mt-6"
                  >{{ t('home.buttons.getExtension')
                  }}<svg
                    width="12"
                    height="24"
                    viewBox="0 0 12 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.54708 8.75977C4.29855 8.75977 4.09708 8.96124 4.09708 9.20977C4.09708 9.45829 4.29855 9.65977 4.54708 9.65977L7.70333 9.65977L2.53183 14.8313C2.35609 15.007 2.35609 15.2919 2.53183 15.4677C2.70756 15.6434 2.99249 15.6434 3.16822 15.4677L8.33972 10.2962V13.4524C8.33972 13.7009 8.54119 13.9024 8.78972 13.9024C9.03825 13.9024 9.23972 13.7009 9.23972 13.4524L9.23972 9.60977C9.23972 9.14032 8.85916 8.75977 8.38972 8.75977L4.54708 8.75977Z"
                      fill="white"
                    ></path></svg
                ></a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="s5-cards-wrapper s5-width w-full md:w-[60%] will-change-[width,top,transform] relative h-fit min-w-[260px] lg:min-w-[342px] mx-auto"
          style="--position: 0%; --tr: 0%; --img-tr: 0%"
        >
          <div class="relative block md:hidden text-left mb-14 w-full">
            <div class="w-full flex flex-col gap-6">
              <h2 class="text-[40px] lg:text-[64px] font-semibold leading-[1.2]">{{
                t('home.titles.allInOneBrowserAssistant')
              }}</h2>
              <p class="text-xl opacity-60">{{ t('home.titles.smartResearchAnytime') }}</p>
              <div class="mt-4 md:mt-8">
                <ul class="flex items-center gap-5 text-text-primary-2 leading-normal">
                  <li>
                    <h3 class="text-base font-bold">1000万+</h3>
                    <p class="text-xs leading-[18px] opacity-60">{{
                      t('home.stats.activeUsers')
                    }}</p>
                  </li>
                  <li>
                    <h3 class="text-base font-bold">10万+</h3>
                    <p class="text-xs leading-[18px] opacity-60">{{
                      t('home.stats.fiveStarReviews')
                    }}</p>
                  </li> </ul
                ><a
                  href="https://chrome.google.com/webstore/detail/sider-chatgpt-sidebar-gpt/difoiogjjojoaoomphldepapgpbgkhkb"
                  target="_blank"
                  class="text-base text-white bg-[hsla(235_35%_7%/1)] px-4 py-2 rounded-xl inline-flex gap-2 items-center w-fit mt-6"
                  >{{ t('home.buttons.getExtension')
                  }}<svg
                    width="12"
                    height="24"
                    viewBox="0 0 12 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.54708 8.75977C4.29855 8.75977 4.09708 8.96124 4.09708 9.20977C4.09708 9.45829 4.29855 9.65977 4.54708 9.65977L7.70333 9.65977L2.53183 14.8313C2.35609 15.007 2.35609 15.2919 2.53183 15.4677C2.70756 15.6434 2.99249 15.6434 3.16822 15.4677L8.33972 10.2962V13.4524C8.33972 13.7009 8.54119 13.9024 8.78972 13.9024C9.03825 13.9024 9.23972 13.7009 9.23972 13.4524L9.23972 9.60977C9.23972 9.14032 8.85916 8.75977 8.38972 8.75977L4.54708 8.75977Z"
                      fill="white"
                    ></path></svg
                ></a>
              </div>
            </div>
          </div>
          <div class="">
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform: none">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] group bg-gradient-to-br from-[hsla(30_98%_52%/1)] to-[hsla(35_95%_66%/1)]"
                >
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white"
                  >
                    {{ t('home.features.quickSummary') }}</h3
                  >
                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white"
                  >
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]"
                  >
                    <video
                      class="w-full h-full"
                      src="/src/assets/vedio/C1.mp4"
                      loop=""
                      autoplay=""
                      playsinline=""
                      muted=""
                    ></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]"
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform: translateY(3%)">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] group bg-gradient-to-br from-[hsla(159_58%_46%/1)] to-[hsla(159_58%_46%/1)]"
                >
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white"
                  >
                    {{ t('home.features.explainHighlight') }}</h3
                  >
                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white"
                  >
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]"
                  >
                    <video
                      class="w-full h-full"
                      src="/src/assets/vedio/C2.mp4"
                      loop=""
                      autoplay=""
                      playsinline=""
                      muted=""
                    ></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]"
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform: translateY(6%)">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] bg-gradient-to-br from-[hsla(216_100%_60%/1)] to-[hsla(218_100%_75%/1)]"
                >
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white"
                  >
                    {{ t('home.features.oneClickTranslateWeb') }}</h3
                  >

                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white"
                  >
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]"
                  >
                    <video
                      class="w-full h-full"
                      src="/src/assets/vedio/C3.mp4"
                      loop=""
                      autoplay=""
                      playsinline=""
                      muted=""
                    ></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]"
                    >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="h-full sticky top-[120px]">
              <div class="origin-top relative h-full" style="transform: translateY(9%)">
                <div
                  class="@container relative rounded-2xl md:rounded-3xl overflow-hidden flex flex-col items-start justify-start mb-5 sm:mb-10 contain-strict px-4 sm:px-8 pt-4 sm:pt-8 transition duration-500 aspect-[1.2/1] md:aspect-[822/566] bg-gradient-to-br from-[hsla(253_100%_62%/1)] to-[hsla(252_100%_75%/1)]"
                >
                  <h3
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-base sm:text-2xl font-semibold w-fit will-change-[top,left,transform] text-white"
                  >
                    智能阅读工具，深入研究网页与文件</h3
                  >
                  <p
                    class="relative top-[--position] left-[--position] translate-x-[--tr] translate-y-[--tr] text-xl opacity-60 mt-2 will-change-[top,left,transform] text-white"
                  >
                  </p>
                  <div
                    class="flex-1 w-full h-full mx-auto bg-white rounded-t-xl mt-2 sm:mt-6 overflow-hidden contain-strict relative translate-y-[--img-tr] opacity-[--img-opacity] will-change-[translate,opacity]"
                  >
                    <video
                      class="w-full h-full"
                      src="/src/assets/vedio/C4.mp4"
                      loop=""
                      autoplay=""
                      playsinline=""
                      muted=""
                    ></video>
                    <div
                      class="absolute bottom-0 w-full h-8 z-10 left-0 bg-gradient-to-b from-[transparent_60%] to-[hsl(252_0%_0%/0.1)]"
                    >
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
            <h2 class="text-[40px] lg:text-[64px] font-semibold leading-normal">{{
              t('home.titles.buildYourKnowledgeBase')
            }}</h2>

            <div class="flex justify-between items-end gap-8 flex-wrap">
              <p
                class="w-full md:w-[60%] max-w-[720px] text-xl font-normal leading-normal opacity-60"
              >
                {{ t('home.features.saveResearchFindings') }}</p
              >

              <div class=""
                ><a
                  target="_blank"
                  class="text-base text-white bg-[hsla(235_35%_7%/1)] px-4 py-2 rounded-xl flex gap-2 items-center w-fit h-fit ms-auto"
                  href="/wisebase"
                  >{{ t('home.buttons.freeStart')
                  }}<svg
                    width="12"
                    height="24"
                    viewBox="0 0 12 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M4.54708 8.75977C4.29855 8.75977 4.09708 8.96124 4.09708 9.20977C4.09708 9.45829 4.29855 9.65977 4.54708 9.65977L7.70333 9.65977L2.53183 14.8313C2.35609 15.007 2.35609 15.2919 2.53183 15.4677C2.70756 15.6434 2.99249 15.6434 3.16822 15.4677L8.33972 10.2962V13.4524C8.33972 13.7009 8.54119 13.9024 8.78972 13.9024C9.03825 13.9024 9.23972 13.7009 9.23972 13.4524L9.23972 9.60977C9.23972 9.14032 8.85916 8.75977 8.38972 8.75977L4.54708 8.75977Z"
                      fill="white"
                    ></path></svg></a
              ></div>
            </div>
          </div>
          <div
            class="relative mt-8 md:mt-16 max-w-[min(1400px,100%)] mx-auto rounded-2xl md:rounded-3xl overflow-hidden"
          >
            <video
              class="w-full aspect-[2100/1110] lg:aspect-[1216/574] -xl:aspect-[1300/614] 2xl:aspect-[2100/1110] object-cover object-top"
              src="/src/assets/vedio/wisebase.mp4"
              loop=""
              autoplay=""
              playsinline=""
              muted=""
            ></video>
          </div>
        </div>
        <div
          class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 max-w-[1400px] mx-auto mt-8 md:mt-[100px] mb-[160px]"
        >
          <div class=""
            ><video
              class="w-full aspect-square rounded-2xl md:rounded-3xl mb-4 md:mb-8 bg-color-grey-fill1-hover"
              src="/src/assets/vedio/L.mp4"
              playsinline=""
              muted=""
            ></video>
            <p class="text-xl font-semibold">{{ t('home.features.uploadPrivateFiles') }}</p>
          </div>
          <div class=""
            ><video
              class="w-full aspect-square rounded-2xl md:rounded-3xl mb-4 md:mb-8 bg-color-grey-fill1-hover"
              src="/src/assets/vedio/M.mp4"
              playsinline=""
              muted=""
            ></video>
            <p class="text-xl font-semibold">{{ t('home.features.chatWithAIModels') }}</p>
          </div>
          <div class=""
            ><video
              class="w-full aspect-square rounded-2xl md:rounded-3xl mb-8 md:mb-8 bg-color-grey-fill1-hover"
              src="/src/assets/vedio/R.mp4"
              playsinline=""
              muted=""
            ></video>
            <p class="text-xl font-semibold">{{ t('home.features.writeBasedOnNotes') }}</p>
          </div>
        </div>
      </div>
      <div class="relative z-10 px-5 md:px-10">
        <div
          class="relative -z-[1] mx-auto my-20 flex items-center justify-center w-full aspect-square md:aspect-[1856/680]"
        >
          <div
            class="s6-bg scale-x-[200%] overflow-hidden absolute z-0 w-full h-full rounded-[32px] bg-blue-400"
            style="translate: none; rotate: none; scale: none; transform: scale(2, 1)"
          >
            <div id="s6-bg" class="absolute inset-0">
              <div id=":R6f7puaqfja:" class="w-full h-full" style="position: relative">
                <canvas
                  width="3136"
                  height="574"
                  id="colorbgcanvas-2"
                  style="
                    width: 3136px;
                    height: 574.469px;
                    position: absolute;
                    top: 0px;
                    left: 0px;
                    z-index: 0;
                  "
                ></canvas>
              </div>
            </div>
          </div>
          <h2
            class="relative z-10 font-semibold! mx-[6%] text-center text-white! py-6 text-[32px] sm:text-[40px] md:text-[48px] lg:text-[60px] xl:text-[72px] 2xl:text-[90px]"
          >
            {{ t('home.titles.siderHelpsYouGrow') }}</h2
          >
        </div>
      </div>
    </div>

    <!-- 获取 -->
    <div class="relative w-[100vw] text-white! py-[160px] bg-[#09001e]">
      <div
        class="top-light transform-gpu scale-x-0 scale-y-50 origin-top absolute inset-0 bg-[url('/home-materials/top-light.jpg')] bg-no-repeat bg-top z-0"
        style="
          background-size: 100% 100%;
          translate: none;
          rotate: none;
          scale: none;
          transform: scale(0, 0.5);
        "
      ></div>
      <div class="relative flex flex-col items-center gap-14 z-1">
        <h2
          class="w-[757px] max-w-full px-5 text-white! text-[32px] md:text-[64px] font-medium leading-snug text-center"
        >
          {{ t('home.titles.oneAccountAllPlatform') }}</h2
        ><a
          href="https://chrome.google.com/webstore/detail/chatgpt-sidebar/difoiogjjojoaoomphldepapgpbgkhkb"
          target="_blank"
          class="bg-white text-black rounded-full px-[15px] py-3 flex items-center gap-2.5 relative hover:before:opacity-100 before:opacity-0 before:transition-opacity before:duration-500 before:ease-in-out before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-r before:from-[rgba(243,139,65,0.80)_5%] before:via-[rgba(243,71,183,0.80)_28.7%,rgba(85,139,252,0.80)_57.74%] before:to-[rgba(104,69,255,0.80)_95.01%] before:blur-[24px] before:content-[&quot;&quot;]"
          ><span class="size-6 inline-block"
            ><svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              class="size-8 w-full h-full"
            >
              <path
                d="M11.965.75q3.014-.024 5.664 1.507a11 11 0 0 1 4.42 4.67l-9.318-.49a6.17 6.17 0 0 0-3.692.936q-1.683 1.048-2.324 2.88L3.25 4.931A11 11 0 0 1 7.155 1.85 11.3 11.3 0 0 1 11.965.75M2.583 5.834l4.233 8.323a6.13 6.13 0 0 0 2.65 2.724 5.47 5.47 0 0 0 3.68.565l-2.889 5.662a11.1 11.1 0 0 1-4.835-1.977A11.16 11.16 0 0 1 2 17.164a11.03 11.03 0 0 1-1.25-5.166q0-3.351 1.833-6.164m19.919 2.122q.729 1.884.747 3.898a11.4 11.4 0 0 1-.609 3.841 11.1 11.1 0 0 1-1.921 3.415 11.2 11.2 0 0 1-3.09 2.63q-2.888 1.669-6.254 1.493l5.086-7.82a6 6 0 0 0 1.036-3.648q-.068-2.003-1.337-3.483zm-10.5.251q1.57 0 2.682 1.11a3.65 3.65 0 0 1 1.111 2.681q0 1.57-1.11 2.68a3.65 3.65 0 0 1-2.683 1.111 3.65 3.65 0 0 1-2.681-1.11 3.66 3.66 0 0 1-1.111-2.68q0-1.57 1.11-2.681a3.66 3.66 0 0 1 2.682-1.111"
              ></path></svg></span
          ><span class="text-lg md:text-2xl font-semibold">{{ t('home.buttons.freeGet') }}</span></a
        >
        <div
          class="flex flex-wrap justify-start md:justify-center gap-y-5 gap-x-3 md:gap-x-4 px-5 md:px-[10%] text-[hsla(235_100%_92%/0.56)]"
        >
          <div class="w-[72.7px] cursor-pointer text-(--art-text-muted) hover:text-white"
            ><a
              href="https://chrome.google.com/webstore/detail/chatgpt-sidebar/difoiogjjojoaoomphldepapgpbgkhkb"
              target="_blank"
              class="flex flex-col items-center gap-2"
              ><span class="size-[22px] md:size-8"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-8 w-full h-full"
                >
                  <path
                    d="M11.965.75q3.014-.024 5.664 1.507a11 11 0 0 1 4.42 4.67l-9.318-.49a6.17 6.17 0 0 0-3.692.936q-1.683 1.048-2.324 2.88L3.25 4.931A11 11 0 0 1 7.155 1.85 11.3 11.3 0 0 1 11.965.75M2.583 5.834l4.233 8.323a6.13 6.13 0 0 0 2.65 2.724 5.47 5.47 0 0 0 3.68.565l-2.889 5.662a11.1 11.1 0 0 1-4.835-1.977A11.16 11.16 0 0 1 2 17.164a11.03 11.03 0 0 1-1.25-5.166q0-3.351 1.833-6.164m19.919 2.122q.729 1.884.747 3.898a11.4 11.4 0 0 1-.609 3.841 11.1 11.1 0 0 1-1.921 3.415 11.2 11.2 0 0 1-3.09 2.63q-2.888 1.669-6.254 1.493l5.086-7.82a6 6 0 0 0 1.036-3.648q-.068-2.003-1.337-3.483zm-10.5.251q1.57 0 2.682 1.11a3.65 3.65 0 0 1 1.111 2.681q0 1.57-1.11 2.68a3.65 3.65 0 0 1-2.683 1.111 3.65 3.65 0 0 1-2.681-1.11 3.66 3.66 0 0 1-1.111-2.68q0-1.57 1.11-2.681a3.66 3.66 0 0 1 2.682-1.111"
                  ></path></svg></span
              ><span class="text-xs md:text-sm">Chrome</span></a
            ></div
          >
          <div class="w-[72.7px] cursor-pointer text-(--art-text-muted) hover:text-white"
            ><a
              href="https://microsoftedge.microsoft.com/addons/detail/sider-ai-sidebar/dhoenijjpgpeimemopealfcbiecgceod"
              target="_blank"
              class="flex flex-col items-center gap-2"
              ><span class="size-[22px] md:size-8"
                ><svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-8 w-full h-full"
                >
                  <path
                    d="M12 .75C5.813.75.75 5.813.75 12S5.813 23.25 12 23.25c4.005 0 7.538-2.12 9.53-5.294a.4.4 0 0 0 .04-.098c.009-.035.009-.07.009-.106a.4.4 0 0 0-.027-.103.4.4 0 0 0-.058-.088.24.24 0 0 0-.084-.063c-.031-.018-.067-.026-.102-.035a.3.3 0 0 0-.107 0 .3.3 0 0 0-.098.035c-.276.16-.564.298-.862.405-1.725.591-2.676.613-3.85.564-1.306-.057-2.902-.506-4.022-1.173s-2.04-1.623-2.538-2.454c-.498-.83-.796-1.871-.662-3.2.137-1.36 1.377-2.467 2.831-2.467 1.569 0 2.85 1.25 2.85 2.818 0 .796-.379 1.485-.868 2.04-.106.098-.355.454.272.938.746.574 2.418.845 3.747.778 1.324-.067 2.769-.591 3.76-1.631.787-.831 1.489-2.16 1.489-3.627C23.254 4.626 17.814.75 12 .75"
                  ></path></svg></span
              ><span class="text-xs md:text-sm">Edge</span></a
            ></div
          >
          <div
            class="w-0.5 h-15 hidden md:block bg-gradient-to-b from-[hsla(230_10%_50%/0)] via-[hsla(230_10%_50%/0.4)] via-[50%] to-[hsla(230_10%_50%/0)]"
          >
          </div>
          <div class="w-[72.7px] cursor-pointer text-(--art-text-muted) hover:text-white"
            ><a
              href="https://sider-1257001727.cos.ap-guangzhou.myqcloud.com/mac/Sider-release-2.5.7.dmg"
              target="_blank"
              class="flex flex-col items-center gap-2"
              ><span class="size-[22px] md:size-8"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                  class="size-8 w-full h-full"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M15 30c8.284 0 15-6.716 15-15S23.284 0 15 0 0 6.716 0 15s6.716 15 15 15m.505-22.992-.54.934-.53-.937a1.217 1.217 0 0 0-2.107 1.214l1.237 2.147-3.962 6.867H6.508a1.21 1.21 0 0 0-1.214 1.213c0 .674.54 1.214 1.214 1.214h11.038c.53-.994-.153-2.427-1.373-2.427h-3.765l5.205-9.011a1.215 1.215 0 1 0-2.107-1.214M9.116 22.935l1.167-2.024c-.63-.76-1.427-.994-2.407-.69l-.867 1.5a1.215 1.215 0 1 0 2.107 1.214m14.376-5.696h-3.158l-.697-1.207q-1.868-3.239-2.88-4.979c-.718.597-1.445 2.358-.428 4.112l1.62 2.807 2.865 4.963a1.217 1.217 0 0 0 2.108-1.214l-1.184-2.054h1.754a1.21 1.21 0 0 0 1.214-1.214 1.21 1.21 0 0 0-1.214-1.214"
                  ></path></svg></span
              ><span class="text-xs md:text-sm">Mac OS</span></a
            ></div
          >
          <div class="w-[72.7px] cursor-pointer text-(--art-text-muted) hover:text-white"
            ><a
              href="/download?windowsDl=1"
              target="_blank"
              class="flex flex-col items-center gap-2"
              ><span class="size-[22px] md:size-8"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="currentColor"
                  class="size-8 w-full h-full"
                >
                  <path
                    d="M11.56 3.137 1.049 4.62c-.191 0-.382.297-.382.494v8.897c0 .296.19.494.477.494h10.512c.286 0 .477-.198.477-.494V3.63c0-.098-.095-.296-.19-.395-.096-.099-.192-.099-.383-.099M29.142.765c-.095-.099-.287-.099-.382-.099L14.427 2.643c-.191 0-.383.198-.383.494v10.874c0 .296.191.494.478.494h14.333c.287 0 .478-.198.478-.494V1.16c0-.1-.095-.297-.19-.396M11.656 15.494H1.143c-.286 0-.477.197-.477.494v8.896c0 .297.19.495.382.495L11.56 26.86h.095c.096 0 .192 0 .287-.098.096-.1.191-.198.191-.396v-10.38c0-.296-.19-.493-.477-.493m17.2 0H14.522c-.287 0-.478.197-.478.494V26.86c0 .297.191.495.383.495l14.333 1.977h.095c.096 0 .192 0 .287-.1.096-.098.191-.197.191-.395v-12.85c0-.297-.19-.494-.477-.494"
                  ></path></svg></span
              ><span class="text-xs md:text-sm">Windows</span></a
            ></div
          >
          <div
            class="w-0.5 h-15 hidden md:block bg-gradient-to-b from-[hsla(230_10%_50%/0)] via-[hsla(230_10%_50%/0.4)] via-[50%] to-[hsla(230_10%_50%/0)]"
          >
          </div>
          <div
            class="w-[72.7px] cursor-pointer text-(--art-text-muted) hover:text-white relative group flex flex-col gap-2 items-center -order-1 md:order-none"
          >
            <a
              href="https://apps.apple.com/app/id6446394143"
              target="_blank"
              class="flex flex-col items-center gap-2"
              ><span class="size-[22px] md:size-8"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="32"
                  viewBox="0 0 28 32"
                  fill="currentColor"
                  class="size-8 w-full h-full"
                >
                  <path
                    d="M26.294 11.122c-1.894-2.635-4.849-2.998-5.902-3.04-2.513-.243-4.906 1.406-6.18 1.406s-3.24-1.373-5.325-1.337c-2.74.038-5.265 1.513-6.678 3.847-2.848 4.692-.729 11.644 2.045 15.45 1.357 1.865 2.974 3.958 5.096 3.883 2.045-.077 2.82-1.258 5.287-1.258 2.473 0 3.167 1.258 5.33 1.22 2.2-.039 3.595-1.9 4.94-3.77 1.558-2.162 2.198-4.252 2.236-4.36-.05-.021-4.288-1.564-4.332-6.203-.04-3.881 3.332-5.744 3.484-5.838zM20.426.666c-1.624.064-3.59 1.027-4.756 2.32-1.044 1.151-1.85 2.985-1.605 4.746 1.814.134 3.554-.874 4.682-2.173 1.126-1.293 1.886-3.096 1.679-4.893"
                  ></path></svg></span
              ><span class="text-xs md:text-sm">{{ t('home.platforms.ios') }}</span></a
            >
            <div
              class="absolute w-[120px] h-[120px] left-1/2 transform -translate-x-1/2 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20"
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="size-30"
              >
                <rect width="120" height="120" rx="12" fill="url(#IosQr_svg__a)"></rect>
                <defs>
                  <pattern
                    id="IosQr_svg__a"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlink:href="#IosQr_svg__b" transform="scale(.00676)"></use>
                  </pattern>
                  <image
                    id="IosQr_svg__b"
                    width="148"
                    height="148"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,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"
                  ></image>
                </defs>
              </svg>
            </div>
          </div>
          <div
            class="w-[72.7px] cursor-pointer text-(--art-text-muted) hover:text-white relative group flex flex-col gap-2 items-center -order-1 md:order-none"
          >
            <a
              href="https://sider-1257001727.cos.ap-guangzhou.myqcloud.com/android/SiderAndroid-release-3.4.7-1760412485974.apk"
              target="_blank"
              class="flex flex-col items-center gap-2"
              ><span class="size-[22px] md:size-8"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="22"
                  viewBox="0 0 32 22"
                  fill="currentColor"
                  class="size-8 w-full h-full"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M3.71.968a1.09 1.09 0 0 1 1.526.218L8.298 5.27A15.9 15.9 0 0 1 16 3.297c2.792 0 5.417.715 7.702 1.972l3.062-4.083a1.09 1.09 0 0 1 1.745 1.31l-2.967 3.956C29.462 9.368 32 14.036 32 19.297c0 1.117-.958 1.953-2.076 1.953H2.076C.958 21.25 0 20.414 0 19.297c0-5.261 2.539-9.929 6.458-12.845L3.491 2.496A1.09 1.09 0 0 1 3.709.968m6.472 12.51a1.455 1.455 0 1 1-2.91 0 1.455 1.455 0 0 1 2.91 0m13.09 1.454a1.455 1.455 0 1 0 0-2.91 1.455 1.455 0 0 0 0 2.91"
                  ></path></svg></span
              ><span class="text-xs md:text-sm">{{ t('home.platforms.android') }}</span></a
            >
            <div
              class="absolute w-[120px] h-[120px] left-1/2 transform -translate-x-1/2 top-full mt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20"
            >
              <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                class="size-30"
              >
                <rect width="120" height="120" rx="12" fill="url(#AndroidQr_svg__a)"></rect>
                <defs>
                  <pattern
                    id="AndroidQr_svg__a"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlink:href="#AndroidQr_svg__b" transform="scale(.00676)"></use>
                  </pattern>
                  <image
                    id="AndroidQr_svg__b"
                    width="148"
                    height="148"
                    preserveAspectRatio="none"
                    xlink:href="data:image/png;base64,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"
                  ></image>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 页脚 -->
    <Footer />
  </div>

  <!-- 登录弹窗 -->
  <ArtLoginDialog ref="loginDialog" />
</template>

<script setup lang="ts">
  import { ColorBgCanvas } from '../../../colorbgcanvas-example.js'
  import { GlowCloudAnimation } from '@/utils/canvas/glow-cloud-animation.js'
  //import { BlueCloudAnimation } from '@/utils/canvas/blue-cloud-animation.js'
  import Logo from '/src/assets/img/logo.png'

  import { useI18n } from 'vue-i18n'
  import { LanguageEnum } from '../../enums/appEnum'
  import { changeLanguage } from '@/locales'
  import { router } from '@/router/index.js'
  import ArtLoginDialog from '@/components/core/dialogs/art-login-dialog/index.vue'
  import Footer from '@/components/core/footer.vue'

  // 登录弹窗引用
  const loginDialog = ref<InstanceType<typeof ArtLoginDialog>>()
  let originalHtmlClass = ''

  const { locale, t } = useI18n()

  // 语言列表数据
  const languages = [
    { key: LanguageEnum.ZH, name: '中文(简体)', code: 'zh' },
    { key: LanguageEnum.EN, name: 'English', code: 'en' }
  ]

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
      path: '/agents/browser-extension'
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
      name: 'home.appNames.wisebase',
      path: ''
    },
    {
      name: 'home.appNames.deepResearch',
      path: '/agents/deep-research?type=1'
    },
    {
      name: 'home.appNames.scholarResearch',
      path: '/agents/deep-research?type=2'
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
    }
  ])

  const toolData = ref([
    {
      title: 'Agents',
      children: [
        {
          name: 'home.nav.deepResearch',
          path: '/agents/deep-research?type=1'
        },
        {
          name: 'home.nav.scholarResearch',
          path: '/agents/deep-research?type=2'
        },
        {
          name: 'home.nav.websiteGenerator',
          path: '/agents/web-creator'
        },
        {
          name: 'home.nav.AIPPT',
          path: '/agents/ai-slides',
          isNew: true
        },
        {
          name: 'home.nav.writerMaster',
          path: '/agents/ai-writer'
        }
      ]
    },
    {
      title: '图像',
      children: [
        // {
        //   name:'home.appNames.agent',
        //   path: '/wisebase/agent'
        // },
      ]
    },
    {
      title: '翻译器',
      children: [
        // {
        //   name:'home.appNames.agent',
        //   path: '/wisebase/agent'
        // },
      ]
    }
  ])

  const searchText = ref('')

  const hoveredIndex = ref<number | null>(null)

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
    loginDialog.value?.open()
  }

  let colorBgCanvas = null
  let glowCloudAnimation = null
  let blueCloudAnimation = null

  // 在组件挂载时初始化canvas动画和滚动监听
  onMounted(() => {
    const htmlElement = document.documentElement
    originalHtmlClass = htmlElement.className
    if (htmlElement.classList.contains('dark')) {
      htmlElement.classList.remove('dark')
    }

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
    const title1Center =
      title1.getBoundingClientRect().top + title1.getBoundingClientRect().height / 2
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
      const distanceFactor = Math.max(
        -1,
        Math.min(1, (elementCenter - viewportCenter) / (viewportHeight / 2))
      )

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

  // 页面卸载时恢复原始状态
  onBeforeUnmount(() => {
    document.documentElement.className = originalHtmlClass
  })

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
    pointer-events: none;
  }

  #nprogress .bar {
    background: #8a57ea;
    position: fixed;
    z-index: 1600;
    top: 0;
    left: 0;
    width: 100%;
    height: 3px;
  }

  #nprogress .peg {
    display: block;
    position: absolute;
    right: 0;
    width: 100px;
    height: 100%;
    box-shadow:
      0 0 10px #8a57ea,
      0 0 5px #8a57ea;
    opacity: 1;
    -webkit-transform: rotate(3deg) translate(0px, -4px);
    -ms-transform: rotate(3deg) translate(0px, -4px);
    transform: rotate(3deg) translate(0px, -4px);
  }

  #nprogress .spinner {
    display: block;
    position: fixed;
    z-index: 1600;
    top: 15px;
    right: 15px;
  }

  #nprogress .spinner-icon {
    width: 18px;
    height: 18px;
    box-sizing: border-box;
    border: 2px solid transparent;
    border-top-color: #8a57ea;
    border-left-color: #8a57ea;
    border-radius: 50%;
    -webkit-animation: nprogress-spinner 400ms linear infinite;
    animation: nprogress-spinner 400ms linear infinite;
  }

  .nprogress-custom-parent {
    overflow: hidden;
    position: relative;
  }

  .nprogress-custom-parent #nprogress .bar,
  .nprogress-custom-parent #nprogress .spinner {
    position: absolute;
  }

  @-webkit-keyframes nprogress-spinner {
    0% {
      -webkit-transform: rotate(0deg);
    }

    100% {
      -webkit-transform: rotate(360deg);
    }
  }

  @keyframes nprogress-spinner {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
</style>
