<script setup lang="ts">
  import { ref, watch } from 'vue'
  import { useRouter, useRoute } from 'vue-router'

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
  <div id="sidebar-list-inner" class="box-border flex h-fit w-full flex-col"
    ><div class="relative box-border w-full px-3"
      ><a draggable="false" class="block mb-1" @click="handleNavigation('/system/user-center')"
        ><div
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
                activeMenuPath === '/system/user-center'
            }
          ]"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 60 60"
            class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100"
          >
            <path
              d="M30 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10M30 35a5 5 0 1 1 0-10 5 5 0 0 1 0 10M25 50a5 5 0 1 0 10 0 5 5 0 0 0-10 0"
            ></path></svg
          ><span class="size-[24px] shrink-0 flex justify-center items-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 60 60"
            >
              <path
                d="M15.75 21.338a2.25 2.25 0 0 1 2.25-2.25h24a2.25 2.25 0 0 1 0 4.5H18a2.25 2.25 0 0 1-2.25-2.25M15.75 35.338a2.25 2.25 0 0 1 2.25-2.25h18a2.25 2.25 0 1 1 0 4.5H18a2.25 2.25 0 0 1-2.25-2.25"
              ></path>
              <path
                fill-rule="evenodd"
                d="M38.696 4.25H21.304c-2.439 0-4.406 0-5.998.13-1.64.134-3.08.417-4.413 1.096a11.25 11.25 0 0 0-4.917 4.917c-.679 1.332-.962 2.773-1.096 4.413-.13 1.592-.13 3.56-.13 5.998v30.503c0 .772 0 1.497.054 2.09.056.614.192 1.426.706 2.166a4.25 4.25 0 0 0 2.84 1.775c.89.138 1.68-.096 2.256-.315.556-.21 1.208-.529 1.902-.867l4.495-2.192c1.539-.75 2.124-1.03 2.722-1.227a10 10 0 0 1 1.722-.397c.623-.085 1.272-.09 2.984-.09h14.265c2.439 0 4.406 0 5.998-.13 1.64-.134 3.08-.417 4.413-1.096a11.25 11.25 0 0 0 4.917-4.917c.679-1.332.962-2.773 1.096-4.413.13-1.592.13-3.56.13-5.998V20.804c0-2.439 0-4.406-.13-5.998-.134-1.64-.417-3.08-1.096-4.413a11.25 11.25 0 0 0-4.917-4.917c-1.332-.679-2.773-.962-4.413-1.096-1.592-.13-3.56-.13-5.998-.13m-25.76 5.236c.592-.302 1.374-.51 2.736-.62 1.388-.114 3.17-.116 5.728-.116h17.2c2.557 0 4.34.002 5.728.115 1.362.111 2.144.319 2.736.62a6.75 6.75 0 0 1 2.95 2.95c.302.593.51 1.375.62 2.737.114 1.388.116 3.17.116 5.728v14.7c0 2.557-.002 4.34-.115 5.728-.111 1.362-.319 2.144-.62 2.736a6.75 6.75 0 0 1-2.95 2.95c-.593.302-1.375.51-2.737.62-1.388.114-3.17.116-5.728.116H24.275c-1.504 0-2.475 0-3.439.132-.854.117-1.696.311-2.516.58-.924.304-1.797.73-3.149 1.39l-4.555 2.22a37 37 0 0 1-1.349.639 37 37 0 0 1-.017-1.493V20.9c0-2.557.002-4.34.115-5.728.111-1.362.319-2.144.62-2.736a6.75 6.75 0 0 1 2.95-2.95"
                clip-rule="evenodd"
              ></path></svg></span
          ><span
            class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja"
            >聊天</span
          ></div
        ></a
      ></div
    ><div class="mx-[22px] my-[6px] h-[1px] bg-color-grey-line1-normal"></div
    ><div class="relative box-border w-full px-[12px]"
      ><div class="mb-1 px-[10px] py-[8px] text-color-text-primary-3 text-[14px] font-semibold"
        >Agents</div
      ><a draggable="false" class="block mb-1" @click="handleNavigation('/agents/deep-research')"
        ><div
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
                activeMenuPath === '/agents/deep-research'
            }
          ]"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 60 60"
            class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100"
          >
            <path
              d="M30 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10M30 35a5 5 0 1 1 0-10 5 5 0 0 1 0 10M25 50a5 5 0 1 0 10 0 5 5 0 0 0-10 0"
            ></path></svg
          ><span class="size-[24px] shrink-0 flex justify-center items-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 60 60"
            >
              <path
                fill-rule="evenodd"
                d="M11.812 30C5.16 39.687 2.943 48.905 7.019 52.98c4.076 4.077 13.294 1.86 22.981-4.792 9.687 6.651 18.905 8.869 22.981 4.793S54.84 39.687 48.188 30c6.651-9.687 8.869-18.905 4.793-22.981s-13.294-1.858-22.98 4.793C20.313 5.16 11.094 2.943 7.018 7.019c-4.075 4.076-1.858 13.294 4.793 22.98m2.85 3.836c-1.602 2.482-2.855 4.876-3.73 7.078-1.05 2.636-1.475 4.788-1.46 6.367.014 1.55.432 2.221.73 2.518.296.297.967.715 2.518.73 1.578.014 3.73-.412 6.367-1.46 2.201-.876 4.595-2.129 7.077-3.732A74 74 0 0 1 20.1 39.9a74 74 0 0 1-5.438-6.063M17.373 30a69 69 0 0 0 5.91 6.718A69 69 0 0 0 30 42.628a69 69 0 0 0 6.718-5.91A69 69 0 0 0 42.628 30a69 69 0 0 0-5.91-6.718A69 69 0 0 0 30 17.372a69 69 0 0 0-6.717 5.91A69 69 0 0 0 17.373 30m8.792-15.338A74 74 0 0 0 20.1 20.1a74 74 0 0 0-5.438 6.063c-1.603-2.481-2.856-4.875-3.732-7.077-1.048-2.636-1.474-4.788-1.46-6.367.015-1.55.434-2.221.73-2.518.297-.297.968-.715 2.519-.73 1.579-.014 3.73.411 6.367 1.46 2.201.876 4.595 2.129 7.077 3.731m7.673 0A74 74 0 0 1 39.9 20.1a74 74 0 0 1 5.438 6.063c1.602-2.481 2.855-4.875 3.73-7.077 1.05-2.636 1.475-4.788 1.46-6.367-.014-1.55-.432-2.221-.729-2.518s-.968-.715-2.518-.73c-1.58-.014-3.731.411-6.367 1.46-2.202.876-4.596 2.129-7.077 3.731m11.5 19.174A74 74 0 0 1 39.9 39.9a74 74 0 0 1-6.063 5.438c2.481 1.603 4.875 2.856 7.077 3.732 2.636 1.048 4.788 1.474 6.367 1.46 1.55-.015 2.222-.434 2.518-.73.297-.297.716-.968.73-2.518.014-1.58-.411-3.731-1.46-6.367-.876-2.202-2.129-4.596-3.731-7.078"
                clip-rule="evenodd"
              ></path>
              <path d="M34.12 30.12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"></path></svg></span
          ><span
            class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja"
            >Deep Research</span
          ></div
        ></a
      ><a draggable="false" class="block mb-1" @click="handleNavigation('/agents/web-creator')"
        ><div
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
                activeMenuPath === '/agents/web-creator'
            }
          ]"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 60 60"
            class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100"
          >
            <path
              d="M30 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10M30 35a5 5 0 1 1 0-10 5 5 0 0 1 0 10M25 50a5 5 0 1 0 10 0 5 5 0 0 0-10 0"
            ></path></svg
          ><span class="size-[24px] shrink-0 flex justify-center items-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 60 60"
            >
              <path
                d="M14 18.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5M23 16a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0M27.5 18.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5"
              ></path>
              <path
                fill-rule="evenodd"
                d="M20.304 5.75h19.392c2.439 0 4.406 0 5.998.13 1.64.134 3.08.417 4.413 1.096a11.25 11.25 0 0 1 4.917 4.917c.679 1.332.962 2.773 1.096 4.413.13 1.592.13 3.56.13 5.997v15.393c0 2.439 0 4.406-.13 5.998-.134 1.64-.417 3.08-1.096 4.413a11.25 11.25 0 0 1-4.917 4.917c-1.332.679-2.773.962-4.413 1.096-1.592.13-3.56.13-5.998.13H20.305c-2.439 0-4.406 0-5.998-.13-1.64-.134-3.08-.417-4.413-1.096a11.25 11.25 0 0 1-4.917-4.917c-.679-1.332-.962-2.773-1.096-4.413-.13-1.592-.13-3.56-.13-5.998V22.304c0-2.439 0-4.406.13-5.998.134-1.64.417-3.08 1.096-4.413a11.25 11.25 0 0 1 4.917-4.917c1.332-.679 2.773-.962 4.413-1.096 1.592-.13 3.56-.13 5.998-.13m-5.632 4.615c-1.362.111-2.144.319-2.736.62a6.75 6.75 0 0 0-2.95 2.95c-.302.593-.51 1.375-.62 2.737-.104 1.267-.115 2.863-.116 5.078h43.5c-.001-2.215-.012-3.81-.115-5.078-.111-1.362-.319-2.144-.62-2.736a6.75 6.75 0 0 0-2.95-2.95c-.593-.302-1.375-.51-2.737-.62-1.388-.114-3.17-.116-5.728-.116H20.4c-2.557 0-4.34.002-5.728.115M8.25 37.6V26.25h43.5V37.6c0 2.557-.002 4.34-.115 5.728-.111 1.362-.319 2.144-.62 2.736a6.75 6.75 0 0 1-2.95 2.95c-.593.302-1.375.51-2.737.62-1.388.114-3.17.116-5.728.116H20.4c-2.557 0-4.34-.002-5.728-.115-1.362-.111-2.144-.319-2.736-.62a6.75 6.75 0 0 1-2.95-2.95c-.302-.593-.51-1.375-.62-2.737-.114-1.388-.116-3.17-.116-5.728"
                clip-rule="evenodd"
              ></path></svg></span
          ><span
            class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja"
            >网页创建者</span
          ><div class="size-2 rounded-full bg-color-error-normal"></div></div></a
      ><a draggable="false" class="block mb-1" @click="handleNavigation('/system/user-center')"
        ><div
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
                activeMenuPath === '/system/user-center'
            }
          ]"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 60 60"
            class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100"
          >
            <path
              d="M30 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10M30 35a5 5 0 1 1 0-10 5 5 0 0 1 0 10M25 50a5 5 0 1 0 10 0 5 5 0 0 0-10 0"
            ></path></svg
          ><span class="size-[24px] shrink-0 flex justify-center items-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 60 60"
            >
              <path
                fill-rule="evenodd"
                d="M21.4 55.25h-.096c-2.439 0-4.406 0-5.998-.13-1.64-.134-3.08-.417-4.413-1.096a11.25 11.25 0 0 1-4.917-4.917c-.679-1.332-.962-2.773-1.096-4.413-.13-1.592-.13-3.56-.13-5.998V21.304c0-2.439 0-4.406.13-5.998.134-1.64.417-3.08 1.096-4.413a11.25 11.25 0 0 1 4.917-4.917c1.332-.679 2.773-.962 4.413-1.096 1.592-.13 3.56-.13 5.998-.13H37.5a2.25 2.25 0 0 1 0 4.5H21.4c-2.557 0-4.34.002-5.728.115-1.362.111-2.144.319-2.736.62a6.75 6.75 0 0 0-2.95 2.95c-.302.593-.51 1.375-.62 2.737-.114 1.388-.116 3.17-.116 5.728v17.2c0 2.557.002 4.34.115 5.728.111 1.362.319 2.144.62 2.736a6.75 6.75 0 0 0 2.95 2.95c.593.302 1.375.51 2.737.62 1.388.114 3.17.116 5.728.116h17.2c2.557 0 4.34-.002 5.728-.115 1.362-.111 2.144-.319 2.736-.62a6.75 6.75 0 0 0 2.95-2.95c.302-.593.51-1.375.62-2.737.114-1.388.116-3.17.116-5.728V30a2.25 2.25 0 0 1 4.5 0v8.696c0 2.439 0 4.406-.13 5.998-.134 1.64-.417 3.08-1.096 4.413a11.25 11.25 0 0 1-4.917 4.917c-1.332.679-2.773.962-4.413 1.096-1.592.13-3.56.13-5.998.13H21.4M17 15.75a2.25 2.25 0 0 0 0 4.5h13a2.25 2.25 0 0 0 0-4.5zM14.75 28A2.25 2.25 0 0 1 17 25.75h5a2.25 2.25 0 0 1 0 4.5h-5A2.25 2.25 0 0 1 14.75 28m39.009-17.66a3 3 0 0 0-4.237.223l-18.837 20.92a24.2 24.2 0 0 0-4.713 7.798c-.433 1.173.788 2.273 1.91 1.719a24.2 24.2 0 0 0 7.262-5.502l18.837-20.92a3 3 0 0 0-.222-4.237"
                clip-rule="evenodd"
              ></path></svg></span
          ><span
            class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja"
            >AI写作助手</span
          ></div
        ></a
      ><a draggable="false" class="block mb-1" @click="handleNavigation('/agents/ai-slides')"
        ><div
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
                activeMenuPath === '/agents/ai-slides'
            }
          ]"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 60 60"
            :class="[
              'absolute',
              '-left-[3px]',
              'top-1/2',
              '-translate-y-1/2',
              'px-[1px]',
              'text-color-text-primary-5',
              'opacity-0',
              'group-hover:opacity-100'
            ]"
          >
            <path
              d="M30 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10M30 35a5 5 0 1 1 0-10 5 5 0 0 1 0 10M25 50a5 5 0 1 0 10 0 5 5 0 0 0-10 0"
            ></path></svg
          ><span class="size-[24px] shrink-0 flex justify-center items-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 18 18"
            >
              <path
                d="M8.325 9.9a.675.675 0 0 0 1.35 0V5.7a.675.675 0 0 0-1.35 0zM12.6 10.575a.675.675 0 0 1-.675-.675V7.5a.675.675 0 1 1 1.35 0v2.4a.675.675 0 0 1-.675.675M4.725 9.9a.675.675 0 0 0 1.35 0v-3a.675.675 0 0 0-1.35 0z"
              ></path>
              <path
                fill-rule="evenodd"
                d="M.825 4.8A3.375 3.375 0 0 1 4.2 1.425h9.6A3.375 3.375 0 0 1 17.175 4.8v7.43a.675.675 0 0 1-.075 1.345H9.675v2.25H11.7a.675.675 0 0 1 0 1.35H6.3a.675.675 0 1 1 0-1.35h2.025v-2.25H.9a.675.675 0 0 1-.075-1.346zm1.35 0v7.425h13.65V4.8A2.025 2.025 0 0 0 13.8 2.775H4.2A2.025 2.025 0 0 0 2.175 4.8"
                clip-rule="evenodd"
              ></path></svg></span
          ><span
            class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja"
            >AI PPT</span
          ><div class="size-2 rounded-full bg-color-error-normal"></div></div></a
      ><div
        class="box-border cursor-pointer gap-[8px] rounded-[10px] px-[8px] py-[6px] text-color-text-primary-3 flex items-center hover:bg-(--menu-hover-bg-color)"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          fill="currentColor"
          viewBox="0 0 60 60"
          class="mx-[3px] my-[1px]"
        >
          <path
            d="M17 32.75c1.363 0 2.52-.002 3.467.075.973.08 1.92.254 2.824.715l.253.136a7.25 7.25 0 0 1 2.916 3.033l.16.34c.342.801.485 1.633.555 2.484.077.947.075 2.104.075 3.467v2c0 1.363.002 2.52-.075 3.467-.07.851-.213 1.683-.556 2.483l-.159.341a7.25 7.25 0 0 1-2.916 3.033l-.253.136c-.905.46-1.851.635-2.824.715-.947.077-2.104.075-3.467.075h-2c-1.363 0-2.52.002-3.467-.075-.851-.07-1.683-.212-2.483-.556l-.341-.159a7.25 7.25 0 0 1-3.033-2.916l-.136-.253c-.46-.905-.635-1.851-.715-2.824-.077-.947-.075-2.104-.075-3.467v-2c0-1.363-.002-2.52.075-3.467.08-.973.254-1.92.715-2.824l.136-.253a7.25 7.25 0 0 1 3.033-2.916l.34-.16c.801-.342 1.633-.485 2.484-.555.947-.077 2.104-.075 3.467-.075zm28 0c1.363 0 2.52-.002 3.467.075.973.08 1.92.254 2.824.715l.253.136a7.25 7.25 0 0 1 2.916 3.033l.16.34c.343.801.485 1.633.555 2.484.077.947.075 2.104.075 3.467v2c0 1.363.002 2.52-.075 3.467-.07.851-.212 1.683-.556 2.483l-.159.341a7.25 7.25 0 0 1-2.916 3.033l-.253.136c-.905.46-1.851.635-2.824.715-.947.077-2.104.075-3.467.075h-2c-1.363 0-2.52.002-3.467-.075-.851-.07-1.683-.212-2.483-.556l-.341-.159a7.25 7.25 0 0 1-3.033-2.916l-.136-.253c-.46-.905-.635-1.851-.715-2.824-.077-.947-.075-2.104-.075-3.467v-2c0-1.363-.002-2.52.075-3.467.08-.973.254-1.92.715-2.824l.136-.253a7.25 7.25 0 0 1 3.033-2.916l.34-.16c.801-.342 1.633-.485 2.484-.555.947-.077 2.104-.075 3.467-.075zm-30 4.5c-1.437 0-2.38.002-3.1.06-.522.043-.815.11-.998.175l-.15.065a2.75 2.75 0 0 0-1.096 1.013l-.106.189c-.084.165-.183.453-.24 1.147-.058.721-.06 1.664-.06 3.101v2c0 1.437.002 2.38.06 3.1.057.695.156.983.24 1.148l.106.19c.264.43.643.781 1.096 1.012l.15.065c.184.066.476.132.997.175.721.058 1.664.06 3.101.06h2c1.437 0 2.38-.002 3.1-.06.695-.057.983-.156 1.148-.24l.19-.106a2.75 2.75 0 0 0 1.012-1.096l.065-.15c.066-.184.132-.476.174-.997.06-.721.061-1.664.061-3.101v-2c0-1.437-.002-2.38-.06-3.1-.043-.522-.11-.814-.175-.998l-.065-.15a2.75 2.75 0 0 0-1.012-1.096l-.19-.106c-.165-.084-.453-.183-1.147-.24-.721-.058-1.664-.06-3.101-.06zm28 0c-1.437 0-2.38.002-3.1.06-.522.043-.814.11-.998.175l-.15.065a2.75 2.75 0 0 0-1.096 1.013l-.106.189c-.084.165-.183.453-.24 1.147-.058.721-.06 1.664-.06 3.101v2c0 1.437.002 2.38.06 3.1.057.695.156.983.24 1.148l.106.19c.264.43.643.781 1.096 1.012l.15.065c.184.066.476.132.997.175.721.058 1.664.06 3.101.06h2c1.437 0 2.38-.002 3.1-.06.695-.057.983-.156 1.148-.24l.19-.106a2.75 2.75 0 0 0 1.012-1.096l.065-.15c.066-.184.132-.476.175-.997.058-.721.06-1.664.06-3.101v-2c0-1.437-.002-2.38-.06-3.1-.043-.522-.11-.814-.175-.998l-.065-.15a2.75 2.75 0 0 0-1.013-1.096l-.189-.106c-.165-.084-.453-.183-1.147-.24-.721-.058-1.664-.06-3.101-.06zM17 4.75c1.363 0 2.52-.002 3.467.075.973.08 1.92.254 2.824.715l.253.136a7.25 7.25 0 0 1 2.916 3.033l.16.34c.342.801.485 1.633.555 2.484.077.947.075 2.104.075 3.467v2c0 1.363.002 2.52-.075 3.467-.07.851-.213 1.683-.556 2.483l-.159.341a7.25 7.25 0 0 1-2.916 3.033l-.253.136c-.905.46-1.851.635-2.824.715-.947.077-2.104.075-3.467.075h-2c-1.363 0-2.52.002-3.467-.075-.851-.07-1.683-.213-2.483-.556l-.341-.159a7.25 7.25 0 0 1-3.033-2.916l-.136-.253c-.46-.905-.635-1.851-.715-2.824-.077-.947-.075-2.104-.075-3.467v-2c0-1.363-.002-2.52.075-3.467.08-.973.254-1.92.715-2.824l.136-.253A7.25 7.25 0 0 1 8.709 5.54l.34-.16c.801-.342 1.633-.485 2.484-.555.947-.077 2.104-.075 3.467-.075zm28 0c1.363 0 2.52-.002 3.467.075.973.08 1.92.254 2.824.715l.253.136a7.25 7.25 0 0 1 2.916 3.033l.16.34c.343.801.485 1.633.555 2.484.077.947.075 2.104.075 3.467v2c0 1.363.002 2.52-.075 3.467-.07.851-.212 1.683-.556 2.483l-.159.341a7.25 7.25 0 0 1-2.916 3.033l-.253.136c-.905.46-1.851.635-2.824.715-.947.077-2.104.075-3.467.075h-2c-1.363 0-2.52.002-3.467-.075-.851-.07-1.683-.213-2.483-.556l-.341-.159a7.25 7.25 0 0 1-3.033-2.916l-.136-.253c-.46-.905-.635-1.851-.715-2.824-.077-.947-.075-2.104-.075-3.467v-2c0-1.363-.002-2.52.075-3.467.08-.973.254-1.92.715-2.824l.136-.253a7.25 7.25 0 0 1 3.033-2.916l.34-.16c.801-.342 1.633-.485 2.484-.555.947-.077 2.104-.075 3.467-.075zm-30 4.5c-1.437 0-2.38.002-3.1.06-.522.043-.815.11-.998.175l-.15.065a2.75 2.75 0 0 0-1.096 1.012l-.106.19c-.084.165-.183.453-.24 1.147-.058.721-.06 1.664-.06 3.101v2c0 1.437.002 2.38.06 3.1.057.695.156.983.24 1.148l.106.19c.264.43.643.782 1.096 1.012l.15.065c.184.066.476.132.997.174.721.06 1.664.061 3.101.061h2c1.437 0 2.38-.002 3.1-.06.695-.057.983-.156 1.148-.24l.19-.106c.43-.265.782-.643 1.012-1.096l.065-.15c.066-.183.132-.476.174-.997.06-.721.061-1.664.061-3.101v-2c0-1.437-.002-2.38-.06-3.1-.043-.522-.11-.815-.175-.998l-.065-.15a2.75 2.75 0 0 0-1.012-1.096l-.19-.106c-.165-.084-.453-.183-1.147-.24-.721-.058-1.664-.06-3.101-.06zm28 0c-1.437 0-2.38.002-3.1.06-.522.043-.814.11-.998.175l-.15.065a2.75 2.75 0 0 0-1.096 1.012l-.106.19c-.084.165-.183.453-.24 1.147-.058.721-.06 1.664-.06 3.101v2c0 1.437.002 2.38.06 3.1.057.695.156.983.24 1.148l.106.19c.264.43.643.782 1.096 1.012l.15.065c.184.066.476.132.997.174.721.06 1.664.061 3.101.061h2c1.437 0 2.38-.002 3.1-.06.695-.057.983-.156 1.148-.24l.19-.106c.43-.265.781-.643 1.012-1.096l.065-.15c.066-.183.132-.476.175-.997.058-.721.06-1.664.06-3.101v-2c0-1.437-.002-2.38-.06-3.1-.043-.522-.11-.815-.175-.998l-.065-.15a2.75 2.75 0 0 0-1.013-1.096l-.189-.106c-.165-.084-.453-.183-1.147-.24-.721-.058-1.664-.06-3.101-.06z"
          ></path></svg
        ><span class="line-clamp-1 text-[14px]">更多</span
        ><div class="ml-auto size-[24px] flex justify-center items-center"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 60 60"
          >
            <path
              fill-rule="evenodd"
              d="M20.879 8.879a3 3 0 0 1 4.242 0l17.586 17.586a5 5 0 0 1 0 7.07L25.121 51.123a3 3 0 0 1-4.242-4.243L37.757 30 20.88 13.122a3 3 0 0 1 0-4.243"
              clip-rule="evenodd"
            ></path></svg></div></div></div
    ><div class="mx-[22px] my-[6px] h-[1px] bg-color-grey-line1-normal"></div
    ><div class="relative my-1 box-border w-full space-y-1 px-[12px]"
      ><a draggable="false" class="block" href="/zh-CN/wisebase"
        ><div
          class="box-border h-[36px] cursor-pointer gap-[8px] rounded-[10px] px-[8px] py-[6px] transition-colors flex items-center text-color-text-primary-3 hover:bg-(--menu-hover-bg-color)"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 60 60"
            class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100"
          >
            <path
              d="M30 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10M30 35a5 5 0 1 1 0-10 5 5 0 0 1 0 10M25 50a5 5 0 1 0 10 0 5 5 0 0 0-10 0"
            ></path></svg
          ><span
            class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] font-semibold css-1p6dcus css-var-R5ubrafja"
            >Wisebase</span
          ><span
            class="ml-auto cursor-pointer rounded-[6px] bg-transparent p-[4px] text-color-text-primary-3 transition-colors hover:bg-(--menu-hover-bg-color)"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              fill="currentColor"
              viewBox="0 0 60 60"
            >
              <path
                fill-rule="evenodd"
                d="M30 6.75a3 3 0 0 1 3 3V27h17.25a3 3 0 1 1 0 6H33v17.25a3 3 0 1 1-6 0V33H9.75a3 3 0 1 1 0-6H27V9.75a3 3 0 0 1 3-3"
                clip-rule="evenodd"
              ></path></svg></span></div></a
      ><div class="relative" draggable="true" style="opacity: 1"
        ><div class="absolute h-1 w-full bg-color-assistive-blue-focus opacity-0 -top-1"></div
        ><a draggable="false" class="block group" href="/zh-CN/wisebase/68e7584b6cd86d3975227213"
          ><div
            class="box-border h-[36px] cursor-pointer gap-[8px] rounded-[10px] px-[8px] py-[6px] transition-colors flex items-center text-color-text-primary-3 hover:bg-(--menu-hover-bg-color)"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 60 60"
              class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100"
            >
              <path
                d="M30 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10M30 35a5 5 0 1 1 0-10 5 5 0 0 1 0 10M25 50a5 5 0 1 0 10 0 5 5 0 0 0-10 0"
              ></path></svg
            ><span class="size-[24px] shrink-0 flex justify-center items-center"
              ><div
                class="cursor-pointer rounded-[8px] bg-transparent flex justify-center items-center shrink-0"
                style="
                  color: var(--color-warning-normal);
                  width: 24px;
                  height: 24px;
                  background-color: var(--color-warning-bg);
                "
                ><span class="relative z-10" style="font-size: 16px"
                  ><svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 60 60"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M48.4781 31.5303L51.9785 29.4978V38.7703C51.9785 40.0129 52.9859 41.0203 54.2285 41.0203C55.4712 41.0203 56.4785 40.0129 56.4785 38.7703V20.7703C56.2285 18.7703 54.6305 16.4213 52.3857 15.1179L35.841 5.51131C32.3706 3.49623 28.0863 3.49623 24.6159 5.51131L8.07125 15.1179C2.64292 18.2698 2.64292 26.1094 8.07125 29.2614L11.9789 31.5303C11.9785 31.7972 11.9785 32.0737 11.9785 32.3598L11.9783 42.3283C11.9762 44.5154 11.9746 46.2182 12.5444 47.6762C13.0567 48.9871 13.829 50.0668 14.904 50.9751C15.5898 51.5546 16.3668 51.952 17.2112 52.3016C18.0258 52.639 19.0429 52.9862 20.2655 53.4036L20.3334 53.4268C22.7672 54.2577 25.5343 55.2584 28.1001 56.3151L28.1082 56.3184L28.205 56.3586C28.5709 56.5106 29.0591 56.7135 29.5671 56.7936C30.0141 56.864 30.443 56.864 30.89 56.7936C31.398 56.7135 31.8861 56.5107 32.252 56.3586L32.3569 56.3151C34.9227 55.2584 37.6898 54.2577 40.1236 53.4268L40.1912 53.4037C41.4139 52.9863 42.4312 52.639 43.2458 52.3016C44.0903 51.952 44.8672 51.5546 45.553 50.9751C46.6281 50.0668 47.4004 48.9871 47.9126 47.6762C48.4824 46.2182 48.4808 44.5154 48.4788 42.3283L48.4785 32.3594C48.4785 32.0734 48.4785 31.797 48.4781 31.5303ZM33.6543 9.27733C31.536 8.04734 28.9209 8.04734 26.8026 9.27733L10.258 18.8839C7.72046 20.3573 7.72046 24.0219 10.258 25.4953L12.0342 26.5267L12.0353 26.4436L27.697 35.5375C29.3208 36.1865 31.135 36.1867 32.7588 35.538L48.4217 26.4434L48.4228 26.5267L50.1989 25.4953C51.1444 24.9464 51.7376 24.0931 51.9785 23.1624V21.2168C51.7376 20.2861 51.1444 19.4329 50.1989 18.8839L33.6543 9.27733ZM30.2285 52.3224C30.139 52.2878 30.0153 52.2372 29.8139 52.1542L29.6961 52.1058C27.0481 51.0194 24.2339 50.0034 21.7874 49.1681C20.4799 48.7217 19.5993 48.42 18.9328 48.144C18.2812 47.8741 17.9862 47.6881 17.8083 47.5378C17.3053 47.1128 16.9754 46.6516 16.7357 46.0383C16.5169 45.4783 16.4785 44.7142 16.4785 41.9257V34.2271L26.1829 39.8619C28.6843 41.3143 31.7723 41.3143 34.2737 39.8619L43.9785 34.2269V41.9257C43.9785 44.7142 43.9401 45.4783 43.7213 46.0383C43.4816 46.6516 43.1517 47.1128 42.6488 47.5378C42.4709 47.6881 42.1759 47.8741 41.5242 48.144C40.8577 48.42 39.9771 48.7217 38.6697 49.1681C36.1868 50.0158 33.3254 51.0496 30.6432 52.1542C30.4418 52.2372 30.3181 52.2878 30.2285 52.3224Z"
                    ></path></svg></span></div></span
            ><span
              class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja"
              >Demo: Research on LLMs</span
            ><div
              class="ml-auto shrink-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              ><div
                class="ant-dropdown-trigger more-icon-wrapper size-[24px] cursor-pointer rounded-[6px] text-color-text-primary-3 flex justify-center items-center hover:bg-(--menu-hover-bg-color)"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 60 60"
                >
                  <path
                    d="M15 30a5 5 0 1 1-10 0 5 5 0 0 1 10 0M35 30a5 5 0 1 1-10 0 5 5 0 0 1 10 0M50 35a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
                  ></path></svg></div></div></div></a
        ><div
          class="absolute h-1 w-full bg-color-assistive-blue-focus opacity-0 -bottom-1"
        ></div></div
      ><div class="relative" draggable="true" style="opacity: 1"
        ><div class="absolute h-1 w-full bg-color-assistive-blue-focus opacity-0 -top-1"></div
        ><a draggable="false" class="block group" href="/zh-CN/wisebase/68e7584b6cd86d3975227214"
          ><div
            class="box-border h-[36px] cursor-pointer gap-[8px] rounded-[10px] px-[8px] py-[6px] transition-colors flex items-center text-color-text-primary-3 hover:bg-(--menu-hover-bg-color)"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 60 60"
              class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100"
            >
              <path
                d="M30 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10M30 35a5 5 0 1 1 0-10 5 5 0 0 1 0 10M25 50a5 5 0 1 0 10 0 5 5 0 0 0-10 0"
              ></path></svg
            ><span class="size-[24px] shrink-0 flex justify-center items-center"
              ><div
                class="cursor-pointer rounded-[8px] bg-transparent flex justify-center items-center shrink-0"
                style="
                  color: var(--color-success-normal);
                  width: 24px;
                  height: 24px;
                  background-color: var(--color-success-bg);
                "
                ><span class="relative z-10" style="font-size: 16px"
                  ><svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 60 60"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M28.5087 16.75H31.4913C33.0937 16.75 34.4313 16.7499 35.524 16.8392C36.6637 16.9323 37.7336 17.1337 38.7454 17.6492C40.2978 18.4402 41.5599 19.7022 42.3508 21.2546C42.8663 22.2664 43.0677 23.3363 43.1608 24.476C43.2501 25.5687 43.25 26.9063 43.25 28.5087V31.4913C43.25 33.0937 43.2501 34.4313 43.1608 35.524C43.0677 36.6637 42.8663 37.7336 42.3508 38.7454C41.5599 40.2978 40.2978 41.5599 38.7454 42.3508C37.7336 42.8663 36.6637 43.0677 35.524 43.1608C34.4313 43.2501 33.0937 43.25 31.4913 43.25H28.5087C26.9063 43.25 25.5687 43.2501 24.476 43.1608C23.3363 43.0677 22.2664 42.8663 21.2546 42.3508C19.7022 41.5599 18.4402 40.2978 17.6492 38.7454C17.1337 37.7336 16.9323 36.6637 16.8392 35.524C16.7499 34.4313 16.75 33.0938 16.75 31.4913V28.5087C16.75 26.9063 16.7499 25.5687 16.8392 24.476C16.9323 23.3363 17.1337 22.2664 17.6492 21.2546C18.4402 19.7022 19.7022 18.4402 21.2546 17.6492C22.2664 17.1337 23.3363 16.9323 24.476 16.8392C25.5687 16.7499 26.9063 16.75 28.5087 16.75ZM24.8424 21.3243C23.9811 21.3947 23.5692 21.5203 23.2975 21.6587C22.5919 22.0183 22.0183 22.5919 21.6587 23.2975C21.5203 23.5692 21.3947 23.9811 21.3243 24.8424C21.2518 25.7301 21.25 26.8827 21.25 28.6V31.4C21.25 33.1173 21.2518 34.2699 21.3243 35.1576C21.3947 36.0189 21.5203 36.4308 21.6587 36.7025C22.0183 37.4081 22.5919 37.9818 23.2975 38.3413C23.5692 38.4797 23.9811 38.6054 24.8424 38.6757C25.7301 38.7483 26.8827 38.75 28.6 38.75H31.4C33.1173 38.75 34.2699 38.7483 35.1576 38.6757C36.0189 38.6054 36.4308 38.4797 36.7025 38.3413C37.4081 37.9818 37.9818 37.4081 38.3413 36.7025C38.4797 36.4308 38.6054 36.0189 38.6757 35.1576C38.7483 34.2699 38.75 33.1173 38.75 31.4V28.6C38.75 26.8827 38.7483 25.7301 38.6757 24.8424C38.6054 23.9811 38.4797 23.5692 38.3413 23.2975C37.9818 22.5919 37.4081 22.0183 36.7025 21.6587C36.4308 21.5203 36.0189 21.3947 35.1576 21.3243C34.2699 21.2518 33.1173 21.25 31.4 21.25H28.6C26.8827 21.25 25.7301 21.2518 24.8424 21.3243Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M22.25 6C22.25 4.75736 21.2426 3.75 20 3.75C18.7574 3.75 17.75 4.75736 17.75 6V9.06929C16.7305 9.24293 15.7873 9.52033 14.8926 9.97618C12.7758 11.0548 11.0548 12.7758 9.97618 14.8926C9.52033 15.7873 9.24293 16.7305 9.06929 17.75H6C4.75736 17.75 3.75 18.7574 3.75 20C3.75 21.2426 4.75736 22.25 6 22.25H8.76235C8.74998 23.1758 8.74999 24.1906 8.75 25.3037V27.75H6C4.75736 27.75 3.75 28.7574 3.75 30C3.75 31.2426 4.75736 32.25 6 32.25H8.75V34.6963C8.74999 35.8094 8.74998 36.8242 8.76235 37.75H6C4.75736 37.75 3.75 38.7574 3.75 40C3.75 41.2426 4.75736 42.25 6 42.25H9.06929C9.24293 43.2695 9.52033 44.2127 9.97618 45.1074C11.0548 47.2242 12.7758 48.9452 14.8926 50.0238C15.7873 50.4797 16.7305 50.7571 17.75 50.9307V54C17.75 55.2426 18.7574 56.25 20 56.25C21.2426 56.25 22.25 55.2426 22.25 54V51.2377C23.1758 51.25 24.1906 51.25 25.3036 51.25H27.75V54C27.75 55.2426 28.7574 56.25 30 56.25C31.2426 56.25 32.25 55.2426 32.25 54V51.25H34.6964C35.8094 51.25 36.8242 51.25 37.75 51.2377V54C37.75 55.2426 38.7574 56.25 40 56.25C41.2426 56.25 42.25 55.2426 42.25 54V50.9307C43.2695 50.7571 44.2127 50.4797 45.1074 50.0238C47.2242 48.9452 48.9452 47.2242 50.0238 45.1074C50.4797 44.2127 50.7571 43.2695 50.9307 42.25H54C55.2426 42.25 56.25 41.2426 56.25 40C56.25 38.7574 55.2426 37.75 54 37.75H51.2377C51.25 36.8242 51.25 35.8094 51.25 34.6964V32.25H54C55.2426 32.25 56.25 31.2426 56.25 30C56.25 28.7574 55.2426 27.75 54 27.75H51.25V25.3036C51.25 24.1906 51.25 23.1758 51.2377 22.25H54C55.2426 22.25 56.25 21.2426 56.25 20C56.25 18.7574 55.2426 17.75 54 17.75H50.9307C50.7571 16.7305 50.4797 15.7873 50.0238 14.8926C48.9452 12.7758 47.2242 11.0548 45.1074 9.97618C44.2127 9.52033 43.2695 9.24293 42.25 9.06929V6C42.25 4.75736 41.2426 3.75 40 3.75C38.7574 3.75 37.75 4.75736 37.75 6V8.76235C36.8242 8.74998 35.8094 8.74999 34.6963 8.75H32.25V6C32.25 4.75736 31.2426 3.75 30 3.75C28.7574 3.75 27.75 4.75736 27.75 6V8.75H25.3037C24.1906 8.74999 23.1758 8.74998 22.25 8.76235V6ZM16.9356 13.9857C17.5281 13.6838 18.3104 13.4764 19.672 13.3651C21.0599 13.2518 22.8426 13.25 25.4 13.25H34.6C37.1574 13.25 38.9401 13.2518 40.328 13.3651C41.6896 13.4764 42.4719 13.6838 43.0644 13.9857C44.3345 14.6329 45.3671 15.6655 46.0143 16.9356C46.3162 17.5281 46.5236 18.3104 46.6349 19.672C46.7482 21.0599 46.75 22.8426 46.75 25.4V34.6C46.75 37.1574 46.7482 38.9401 46.6349 40.328C46.5236 41.6896 46.3162 42.4719 46.0143 43.0644C45.3671 44.3345 44.3345 45.3671 43.0644 46.0143C42.4719 46.3162 41.6896 46.5236 40.328 46.6349C38.9401 46.7482 37.1574 46.75 34.6 46.75H25.4C22.8426 46.75 21.0599 46.7482 19.672 46.6349C18.3104 46.5236 17.5281 46.3162 16.9356 46.0143C15.6655 45.3671 14.6329 44.3345 13.9857 43.0644C13.6838 42.4719 13.4764 41.6896 13.3651 40.328C13.2518 38.9401 13.25 37.1574 13.25 34.6V25.4C13.25 22.8426 13.2518 21.0599 13.3651 19.672C13.4764 18.3104 13.6838 17.5281 13.9857 16.9356C14.6329 15.6655 15.6655 14.6329 16.9356 13.9857Z"
                    ></path></svg></span></div></span
            ><span
              class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja"
              >Demo: NVIDIA Business Outlook</span
            ><div
              class="ml-auto shrink-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              ><div
                class="ant-dropdown-trigger more-icon-wrapper size-[24px] cursor-pointer rounded-[6px] text-color-text-primary-3 flex justify-center items-center hover:bg-(--menu-hover-bg-color)"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 60 60"
                >
                  <path
                    d="M15 30a5 5 0 1 1-10 0 5 5 0 0 1 10 0M35 30a5 5 0 1 1-10 0 5 5 0 0 1 10 0M50 35a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
                  ></path></svg></div></div></div></a
        ><div
          class="absolute h-1 w-full bg-color-assistive-blue-focus opacity-0 -bottom-1"
        ></div></div
      ><div class="relative" draggable="true" style="opacity: 1"
        ><div class="absolute h-1 w-full bg-color-assistive-blue-focus opacity-0 -top-1"></div
        ><a draggable="false" class="block group" href="/zh-CN/wisebase/68e7584b6cd86d3975227215"
          ><div
            class="box-border h-[36px] cursor-pointer gap-[8px] rounded-[10px] px-[8px] py-[6px] transition-colors flex items-center text-color-text-primary-3 hover:bg-(--menu-hover-bg-color)"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 60 60"
              class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100"
            >
              <path
                d="M30 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10M30 35a5 5 0 1 1 0-10 5 5 0 0 1 0 10M25 50a5 5 0 1 0 10 0 5 5 0 0 0-10 0"
              ></path></svg
            ><span class="size-[24px] shrink-0 flex justify-center items-center"
              ><div
                class="cursor-pointer rounded-[8px] bg-transparent flex justify-center items-center shrink-0"
                style="
                  color: var(--color-brand-primary-normal);
                  width: 24px;
                  height: 24px;
                  background-color: var(--color-brand-primary-bg);
                "
                ><span class="relative z-10" style="font-size: 16px"
                  ><svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 60 60"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M47.6157 38.9452C47.8966 38.3272 48.0371 38.0182 48.2317 37.9224C48.4009 37.8391 48.5991 37.8391 48.7683 37.9224C48.9629 38.0182 49.1034 38.3272 49.3843 38.9452L51.1566 42.8434L55.0549 44.6157C55.6728 44.8967 55.9818 45.0371 56.0777 45.2318C56.161 45.4009 56.161 45.5992 56.0777 45.7683C55.9818 45.9629 55.6728 46.1034 55.0549 46.3844L51.1566 48.1566L49.3843 52.0549C49.1034 52.6729 48.9629 52.9818 48.7683 53.0777C48.5991 53.161 48.4009 53.161 48.2317 53.0777C48.0371 52.9818 47.8966 52.6729 47.6157 52.0549L45.8434 48.1566L41.9451 46.3844C41.3272 46.1034 41.0182 45.9629 40.9223 45.7683C40.839 45.5992 40.839 45.4009 40.9223 45.2318C41.0182 45.0371 41.3272 44.8967 41.9451 44.6157L45.8434 42.8434L47.6157 38.9452Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M23.3901 11.3537C23.0188 11.2645 22.5982 11.25 21.0236 11.25H17.8C15.5227 11.25 13.95 11.2518 12.7288 11.3516C11.534 11.4492 10.8752 11.6293 10.3896 11.8768C9.30762 12.428 8.42799 13.3077 7.87671 14.3896C7.62929 14.8752 7.44915 15.534 7.35152 16.7289C7.25175 17.95 7.25 19.5227 7.25 21.8V37.1C7.25 39.6574 7.25175 41.4401 7.36515 42.828C7.4764 44.1896 7.68379 44.9719 7.98571 45.5645C8.63285 46.8346 9.66547 47.8672 10.9356 48.5143C11.5281 48.8163 12.3104 49.0236 13.672 49.1349C15.0599 49.2483 16.8426 49.25 19.4 49.25H38C39.2426 49.25 40.25 50.2574 40.25 51.5C40.25 52.7427 39.2426 53.75 38 53.75H19.3036C16.8651 53.7501 14.8983 53.7501 13.3056 53.62C11.6657 53.486 10.2253 53.2029 8.89261 52.5239C6.77578 51.4453 5.05475 49.7243 3.97618 47.6074C3.29716 46.2748 3.01408 44.8344 2.88009 43.1944C2.74996 41.6017 2.74998 39.6349 2.75 37.1964L2.75 21.705C2.74998 19.5455 2.74996 17.7885 2.86647 16.3624C2.98683 14.8893 3.24266 13.5723 3.86718 12.3466C4.84989 10.418 6.41794 8.84993 8.3466 7.86723C9.5723 7.2427 10.8892 6.98687 12.3624 6.86651C13.7884 6.75 15.5455 6.75002 17.705 6.75004L21.0236 6.75004C21.0969 6.75004 21.1694 6.75 21.241 6.74996C22.4968 6.74923 23.4854 6.74866 24.4406 6.97799C25.2824 7.18009 26.0872 7.51342 26.8253 7.96576C27.663 8.47906 28.3616 9.17849 29.2491 10.067C29.2997 10.1177 29.3509 10.1689 29.4028 10.2208L30.3634 11.1815C31.4443 12.2624 31.7426 12.5414 32.0582 12.7375C32.3833 12.9396 32.7374 13.0907 33.1083 13.1856C33.4683 13.2777 33.8761 13.3001 35.4043 13.3326L41.0493 13.4527C43.4403 13.5036 45.37 13.5446 46.9323 13.7046C48.5418 13.8695 49.9533 14.1755 51.2561 14.8639C53.3277 15.9586 55.0058 17.6728 56.0562 19.7673C56.7168 21.0844 56.9927 22.5021 57.1233 24.1148C57.25 25.6801 57.25 27.6103 57.25 30.0018V35C57.25 36.2427 56.2426 37.25 55 37.25C53.7574 37.25 52.75 36.2427 52.75 35V30.0969C52.75 27.588 52.7483 25.8403 52.638 24.478C52.5298 23.1424 52.3282 22.3718 52.0337 21.7846C51.4035 20.5279 50.3966 19.4994 49.1537 18.8426C48.5729 18.5357 47.8067 18.3177 46.4737 18.1812C45.1141 18.0419 43.3668 18.003 40.8584 17.9497L35.3086 17.8316C35.2375 17.8301 35.1672 17.8286 35.0978 17.8272C33.8784 17.8019 32.9185 17.782 31.9928 17.5452C31.1769 17.3364 30.3978 17.0039 29.6825 16.5593C28.871 16.0549 28.1924 15.3755 27.3305 14.5127C27.2815 14.4635 27.2318 14.4138 27.1815 14.3635L26.2208 13.4028C25.1073 12.2894 24.7997 12.0022 24.4741 11.8026C24.1386 11.597 23.7728 11.4455 23.3901 11.3537Z"
                    ></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.75 27C10.75 25.7574 11.7574 24.75 13 24.75H47C48.2426 24.75 49.25 25.7574 49.25 27C49.25 28.2427 48.2426 29.25 47 29.25H13C11.7574 29.25 10.75 28.2427 10.75 27Z"
                    ></path></svg></span></div></span
            ><span
              class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja"
              >Demo: Introduction to Wisebase</span
            ><div
              class="ml-auto shrink-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
              ><div
                class="ant-dropdown-trigger more-icon-wrapper size-[24px] cursor-pointer rounded-[6px] text-color-text-primary-3 flex justify-center items-center hover:bg-(--menu-hover-bg-color)"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  fill="currentColor"
                  viewBox="0 0 60 60"
                >
                  <path
                    d="M15 30a5 5 0 1 1-10 0 5 5 0 0 1 10 0M35 30a5 5 0 1 1-10 0 5 5 0 0 1 10 0M50 35a5 5 0 1 0 0-10 5 5 0 0 0 0 10"
                  ></path></svg></div></div></div></a
        ><div
          class="absolute h-1 w-full bg-color-assistive-blue-focus opacity-0 -bottom-1"
        ></div></div
      ><a draggable="false" class="block" href="/zh-CN/wisebase/ai-inbox"
        ><div
          class="box-border h-[36px] cursor-pointer gap-[8px] rounded-[10px] px-[8px] py-[6px] transition-colors flex items-center text-color-text-primary-3 hover:bg-(--menu-hover-bg-color)"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            fill="currentColor"
            viewBox="0 0 60 60"
            class="absolute -left-[3px] top-1/2 -translate-y-1/2 px-[1px] text-color-text-primary-5 opacity-0 group-hover:opacity-100"
          >
            <path
              d="M30 15a5 5 0 1 1 0-10 5 5 0 0 1 0 10M30 35a5 5 0 1 1 0-10 5 5 0 0 1 0 10M25 50a5 5 0 1 0 10 0 5 5 0 0 0-10 0"
            ></path></svg
          ><span class="size-[24px] shrink-0 flex justify-center items-center"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 60 60"
            >
              <path
                fill-rule="evenodd"
                d="M9.25 27.75H16A6.25 6.25 0 0 1 22.25 34v2c0 .967.784 1.75 1.75 1.75h12A1.75 1.75 0 0 0 37.75 36v-2A6.25 6.25 0 0 1 44 27.75h6.75v4.5H44A1.75 1.75 0 0 0 42.25 34v2A6.25 6.25 0 0 1 36 42.25H24A6.25 6.25 0 0 1 17.75 36v-2A1.75 1.75 0 0 0 16 32.25H9.25z"
                clip-rule="evenodd"
              ></path>
              <path
                fill-rule="evenodd"
                d="M21.304 4.75h17.392c2.439 0 4.406 0 5.998.13 1.64.134 3.08.417 4.413 1.096a11.25 11.25 0 0 1 4.917 4.917c.679 1.332.962 2.773 1.096 4.413.13 1.592.13 3.56.13 5.998v17.392c0 2.439 0 4.406-.13 5.998-.134 1.64-.417 3.08-1.096 4.413a11.25 11.25 0 0 1-4.917 4.917c-1.332.679-2.773.962-4.413 1.096-1.592.13-3.56.13-5.998.13H21.304c-2.439 0-4.406 0-5.998-.13-1.64-.134-3.08-.417-4.413-1.096a11.25 11.25 0 0 1-4.917-4.917c-.679-1.332-.962-2.773-1.096-4.413-.13-1.592-.13-3.56-.13-5.998V21.304c0-2.439 0-4.406.13-5.998.134-1.64.417-3.08 1.096-4.413a11.25 11.25 0 0 1 4.917-4.917c1.332-.679 2.773-.962 4.413-1.096 1.592-.13 3.56-.13 5.998-.13m-5.632 4.615c-1.362.111-2.144.319-2.736.62a6.75 6.75 0 0 0-2.95 2.95c-.302.593-.51 1.375-.62 2.737-.114 1.388-.116 3.17-.116 5.728v17.2c0 2.557.002 4.34.115 5.728.111 1.362.319 2.144.62 2.736a6.75 6.75 0 0 0 2.95 2.95c.593.302 1.375.51 2.737.62 1.388.114 3.17.116 5.728.116h17.2c2.557 0 4.34-.002 5.728-.115 1.362-.111 2.144-.319 2.736-.62a6.75 6.75 0 0 0 2.95-2.95c.302-.593.51-1.375.62-2.737.114-1.388.116-3.17.116-5.728V21.4c0-2.557-.002-4.34-.115-5.728-.111-1.362-.319-2.144-.62-2.736a6.75 6.75 0 0 0-2.95-2.95c-.593-.302-1.375-.51-2.737-.62-1.388-.114-3.17-.116-5.728-.116H21.4c-2.557 0-4.34.002-5.728.115"
                clip-rule="evenodd"
              ></path></svg></span
          ><span
            class="ant-typography ant-typography-ellipsis text-ellipsis overflow-hidden ant-typography-ellipsis-single-line line-clamp-1 w-max !text-inherit text-[14px] css-1p6dcus css-var-R5ubrafja"
            >AI 暂存箱</span
          ></div
        ></a
      ></div
    ></div
  >
</template>

<style scoped>
  .ant-typography {
    width: 136px;
  }
</style>
