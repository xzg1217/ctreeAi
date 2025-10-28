<template>
  <div class="h-full pt-[12px] flex flex-col items-center"
    ><div class="conversations-container relative mt-[16px] w-full max-w-[1336px] flex-1 overflow-auto scrollbar-none"
      ><div class="space-y-[20px] text-[14px]!"
        ><div class="p-[16px] rounded-[12px] bg-[rgba(236,228,252,0.3)]"
          ><p class="text-blackText2"
            >🎨 欢迎来到 Sider 绘画大师，在这里您的想法会像艺术一样栩栩如生。只需告诉我们您的想法，然后看着您的想法变成精彩的图片！ 例如
            city with oil painting</p
          ><div class="overflow-hidden"
            ><div
              ><div class="flex gap-[12px] pt-[8px]"
                ><div class="flex-1"><img class="w-full rounded-[8px]" alt="city with oil painting" src="@/assets/img/city1.png" /></div
                ><div class="flex-1"><img class="w-full rounded-[8px]" alt="city with oil painting" src="@/assets/img/city2.png" /></div>
                <div class="flex-1"><img class="w-full rounded-[8px]" alt="city with oil painting" src="@/assets/img/city3.png" /></div>
                <div class="flex-1"
                  ><img class="w-full rounded-[8px]" alt="city with oil painting" src="@/assets/img/city4.png" /></div></div></div></div
          ><div class="mt-[16px] flex items-center gap-[8px]"
            ><span class="text-blackText2">尝试一些有趣的想法来开始:</span
            ><div class="flex items-center flex-wrap gap-[8px] text-blackText2"
              ><span class="px-[8px] py-[4px] rounded-[4px] bg-primary4 select-none cursor-pointer hover:opacity-90 active:opacity-80"
                ><span>🍢</span><span> </span><span>烤串</span></span
              ><span class="px-[8px] py-[4px] rounded-[4px] bg-primary4 select-none cursor-pointer hover:opacity-90 active:opacity-80"
                ><span>🏙️</span><span> </span><span>迷人夜景</span></span
              ><span class="px-[8px] py-[4px] rounded-[4px] bg-primary4 select-none cursor-pointer hover:opacity-90 active:opacity-80"
                ><span>👩‍🦱</span><span> </span><span>读书的女孩</span></span
              ></div
            ><div class="cursor-pointer hover:opacity-80 active:opacity-60"
              ><svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 12 12">
                <g clip-path="url(#clip0_34101_2899)">
                  <path
                    fill="#000"
                    fill-opacity="0.35"
                    d="M6.001 1.75a4.25 4.25 0 1 0 3.825 6.106.5.5 0 0 1 .899.438 5.25 5.25 0 1 1-.553-5.483l.258-.258c.257-.257.385-.385.495-.394a.3.3 0 0 1 .252.104c.072.085.072.266.072.63v1.125c0 .252 0 .378-.05.474a.45.45 0 0 1-.196.197c-.096.049-.222.049-.474.049H9.404c-.364 0-.546 0-.63-.072a.3.3 0 0 1-.104-.252c.009-.11.137-.238.394-.495l.393-.393A4.235 4.235 0 0 0 6.001 1.75"
                  ></path>
                </g>
                <defs>
                  <clipPath id="clip0_34101_2899"><path fill="#fff" d="M0 0h12v12H0z"></path></clipPath>
                </defs></svg></div></div></div></div></div
    ><div class="w-full max-w-[1336px] pt-[12px]"
      ><div class="f-i-center flex-wrap gap-[2px]"
        ><div class="flex-1 f-i-center flex-wrap gap-[2px]"
          ><a-select v-model:value="selectedModel" placement="topLeft" class="bg-darken2 rounded-[999px]!">
            <template #suffixIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#000" viewBox="0 0 18 18">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M9.471 11.805a.667.667 0 0 1-.942 0l-4-4a.667.667 0 0 1 .942-.943L9 10.39l3.529-3.528a.667.667 0 1 1 .942.943z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </template>
            <a-select-option value="SDXL V1.0">
              <div class="f-i-center gap-[2px]">
                <img width="20" class="inline-block mr-[6px]" alt="" src="@/assets/img/icons/SDXL1.beb01252.png" />
                <span>SDXL V1.0</span>
              </div>
            </a-select-option> </a-select
          ><div class="p-[10px] rounded-[8px] cursor-pointer text-black hover:bg-darken2 active:bg-darken3 select-none"
            ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path
                fill="currentcolor"
                fill-rule="evenodd"
                d="M7.083 6.667a.417.417 0 1 0 0 .833.417.417 0 0 0 0-.833M5 7.083a2.083 2.083 0 1 1 4.167 0 2.083 2.083 0 0 1-4.167 0"
                clip-rule="evenodd"
              ></path>
              <path
                fill="currentcolor"
                d="M12.083 4.167a.833.833 0 1 0 0 1.666h2.084v2.084a.833.833 0 0 0 1.666 0V5.833h2.084a.833.833 0 0 0 0-1.666h-2.084V2.083a.833.833 0 0 0-1.666 0v2.084z"
              ></path>
              <path
                fill="currentcolor"
                fill-rule="evenodd"
                d="M3.333 4.167c0-.46.373-.834.834-.834H10a.833.833 0 1 0 0-1.666H4.167a2.5 2.5 0 0 0-2.5 2.5v11.666a2.5 2.5 0 0 0 2.5 2.5h11.666a2.5 2.5 0 0 0 2.5-2.5V10a.833.833 0 0 0-1.666 0v3.213l-3.578-3.578a.833.833 0 0 0-1.178 0l-7.032 7.032h-.712a.833.833 0 0 1-.834-.834zm12.5 12.5c.46 0 .834-.373.834-.834v-.263L12.5 11.403l-5.264 5.264z"
                clip-rule="evenodd"
              ></path></svg></div
          ><div class="relative"
            ><div class="text-black [&amp;_.ant-popover-inner]:!p-[24px]"
              ><div class="p-[10px] rounded-[8px] cursor-pointer hover:bg-darken2 active:bg-darken3 select-none"
                ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path
                    fill="currentcolor"
                    fill-rule="evenodd"
                    d="M.833 3.75c0-.46.373-.833.834-.833h2.5a.833.833 0 0 1 0 1.666h-2.5a.833.833 0 0 1-.834-.833M.833 16.25c0-.46.373-.833.834-.833h2.5a.833.833 0 0 1 0 1.666h-2.5a.833.833 0 0 1-.834-.833M.833 10c0-.46.373-.833.834-.833h9.166a.833.833 0 1 1 0 1.666H1.667A.833.833 0 0 1 .833 10M7.5 3.75c0-.46.373-.833.833-.833h10a.833.833 0 1 1 0 1.666h-10A.833.833 0 0 1 7.5 3.75M7.5 16.25c0-.46.373-.833.833-.833h10a.833.833 0 1 1 0 1.666h-10a.833.833 0 0 1-.833-.833M14.167 10c0-.46.373-.833.833-.833h3.333a.833.833 0 0 1 0 1.666H15a.833.833 0 0 1-.833-.833"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="currentcolor"
                    fill-rule="evenodd"
                    d="M6.25 2.5a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M3.333 3.75a2.917 2.917 0 1 1 5.834 0 2.917 2.917 0 0 1-5.834 0M6.25 15a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5m-2.917 1.25a2.917 2.917 0 1 1 5.834 0 2.917 2.917 0 0 1-5.834 0M12.917 8.75a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5M10 10a2.917 2.917 0 1 1 5.833 0A2.917 2.917 0 0 1 10 10"
                    clip-rule="evenodd"
                  ></path></svg></div></div></div
          ><div class="relative text-[0px]"
            ><button type="button" class="text-black bg-transparent"
              ><div class="p-[10px] rounded-[8px] cursor-pointer hover:bg-darken2 active:bg-darken3 select-none"
                ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path
                    fill="currentcolor"
                    fill-rule="evenodd"
                    d="M16.469 1.754c1.006-.512 2.081.562 1.569 1.57l-2.495 4.898 3.891 3.892c.8.799.109 2.154-1.008 1.977l-5.43-.864-2.494 4.898c-.513 1.008-2.015.77-2.192-.346l-.4-2.509a.833.833 0 1 1 1.647-.261l.157.99 1.96-3.852c.23-.45.724-.702 1.224-.623l4.269.679-3.059-3.059a1.17 1.17 0 0 1-.215-1.354l1.962-3.853-3.853 1.961c-.45.23-.997.143-1.354-.214l-3.06-3.059.68 4.27c.079.499-.173.992-.624 1.222l-3.85 1.96.99.158a.833.833 0 0 1-.262 1.646l-2.51-.399C.897 11.305.66 9.802 1.667 9.29l4.898-2.493-.863-5.432C5.524.25 6.88-.442 7.678.357l3.891 3.891z"
                    clip-rule="evenodd"
                  ></path>
                  <path
                    fill="currentcolor"
                    fill-rule="evenodd"
                    d="M11.477 8.315a.833.833 0 0 1 0 1.179l-1.081 1.08a.833.833 0 0 1-1.179-1.178l1.081-1.08a.833.833 0 0 1 1.179 0m-3.243 3.243a.833.833 0 0 1 0 1.178L2.83 18.141a.833.833 0 0 1-1.179-1.178l5.405-5.405a.833.833 0 0 1 1.178 0"
                    clip-rule="evenodd"
                  ></path></svg></div></button></div></div
        ><div class="f-i-center"
          ><div class="hidden md:block relative p-[10px] rounded-[8px] cursor-pointer hover:bg-darken2"
            ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
              <rect
                width="14.1"
                height="19.85"
                x="4.95"
                y="0.075"
                fill="url(#paint0_radial_62987_10246)"
                stroke="url(#paint1_linear_62987_10246)"
                stroke-width="0.15"
                rx="3.525"
              ></rect>
              <circle cx="12" cy="16.5" r="1" fill="#fff"></circle>
              <circle cx="15" cy="16.5" r="1" fill="#fff"></circle>
              <circle cx="9" cy="16.5" r="1" fill="#fff"></circle>
              <rect width="6" height="2" x="9" y="2.5" fill="#fff" rx="1"></rect>
              <g filter="url(#filter0_b_62987_10246)">
                <mask id="path-6-inside-1_62987_10246" fill="#fff">
                  <path
                    fill-rule="evenodd"
                    d="M4.595 14.125c2.055 0 3.72-2.07 3.72-4.625 0-2.554-1.665-4.625-3.72-4.625-2.054 0-3.72 2.07-3.72 4.625 0 2.554 1.666 4.625 3.72 4.625m6.563 0c-1.57 0-2.842-1.588-2.842-3.546s1.272-3.546 2.842-3.546S14 8.621 14 10.58s-1.272 3.546-2.842 3.546"
                    clip-rule="evenodd"
                  ></path>
                </mask>
                <path
                  fill="url(#paint2_radial_62987_10246)"
                  fill-rule="evenodd"
                  d="M4.595 14.125c2.055 0 3.72-2.07 3.72-4.625 0-2.554-1.665-4.625-3.72-4.625-2.054 0-3.72 2.07-3.72 4.625 0 2.554 1.666 4.625 3.72 4.625m6.563 0c-1.57 0-2.842-1.588-2.842-3.546s1.272-3.546 2.842-3.546S14 8.621 14 10.58s-1.272 3.546-2.842 3.546"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="url(#paint3_radial_62987_10246)"
                  d="M8.166 9.5c0 2.504-1.627 4.475-3.57 4.475v.3c2.166 0 3.87-2.17 3.87-4.775zm-3.57-4.475c1.943 0 3.57 1.971 3.57 4.475h.3c0-2.605-1.704-4.775-3.87-4.775zM1.024 9.5c0-2.504 1.627-4.475 3.57-4.475v-.3C2.43 4.725.725 6.895.725 9.5zm3.57 4.475c-1.943 0-3.57-1.971-3.57-4.475h-.3c0 2.605 1.704 4.775 3.87 4.775zm3.57-3.396c0 2.009 1.311 3.696 2.993 3.696v-.3c-1.458 0-2.692-1.488-2.692-3.396zm2.993-3.696c-1.682 0-2.992 1.688-2.992 3.696h.3c0-1.908 1.234-3.396 2.692-3.396zm2.992 3.696c0-2.008-1.31-3.696-2.992-3.696v.3c1.458 0 2.692 1.488 2.692 3.396zm-2.992 3.696c1.682 0 2.992-1.687 2.992-3.696h-.3c0 1.908-1.234 3.396-2.692 3.396z"
                  mask="url(#path-6-inside-1_62987_10246)"
                ></path>
              </g>
              <circle cx="4.313" cy="7.563" r="0.813" fill="#fff"></circle>
              <defs>
                <radialGradient
                  id="paint0_radial_62987_10246"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(-4.7163 17.3242 -13.1694 -3.5852 18.159 0)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#FDF132"></stop>
                  <stop offset="1" stop-color="#AD28FF"></stop>
                </radialGradient>
                <radialGradient
                  id="paint2_radial_62987_10246"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="matrix(5.78638 5.0674 -5.14209 5.87167 2.835 6.679)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#fff" stop-opacity="0.8"></stop>
                  <stop offset="1" stop-color="#BC9AFF" stop-opacity="0.55"></stop>
                </radialGradient>
                <radialGradient
                  id="paint3_radial_62987_10246"
                  cx="0"
                  cy="0"
                  r="1"
                  gradientTransform="rotate(57.327 -3.335 5.554)scale(6.65657 12.1921)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#fff"></stop>
                  <stop offset="1" stop-color="#fff" stop-opacity="0.01"></stop>
                </radialGradient>
                <linearGradient
                  id="paint1_linear_62987_10246"
                  x1="0.918"
                  x2="13.837"
                  y1="10.849"
                  y2="17.683"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#fff" stop-opacity="0.299"></stop>
                  <stop offset="1" stop-color="#fff" stop-opacity="0.01"></stop>
                </linearGradient>
                <filter
                  id="filter0_b_62987_10246"
                  width="17.202"
                  height="13.327"
                  x="-1.164"
                  y="2.836"
                  color-interpolation-filters="sRGB"
                  filterUnits="userSpaceOnUse"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                  <feGaussianBlur in="BackgroundImageFix" stdDeviation="1.019"></feGaussianBlur>
                  <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_62987_10246"></feComposite>
                  <feBlend in="SourceGraphic" in2="effect1_backgroundBlur_62987_10246" result="shape"></feBlend>
                </filter>
              </defs></svg></div
          ><div class="p-[10px] rounded-[8px] cursor-pointer hover:bg-darken2 active:bg-darken3 select-none"
            ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
              <path
                fill="#000"
                fill-opacity="0.9"
                fill-rule="evenodd"
                d="M9.605 4.757c.46 0 .833.373.833.833v4.878l2.5 1.342a.833.833 0 1 1-.788 1.468l-2.94-1.577a.83.83 0 0 1-.439-.735V5.59c0-.46.373-.833.834-.833"
                clip-rule="evenodd"
              ></path>
              <path
                fill="#000"
                fill-opacity="0.9"
                fill-rule="evenodd"
                d="M4.991 4.991A7.083 7.083 0 1 1 2.916 10a.833.833 0 0 0-1.666 0 8.75 8.75 0 1 0 1.856-5.39L2.104 3.61a.5.5 0 0 0-.854.353v3.05c0 .414.336.75.75.75h3.05a.5.5 0 0 0 .354-.854L4.295 5.8q.319-.43.696-.809"
                clip-rule="evenodd"
              ></path></svg></div
          ><div class="p-[10px] rounded-[8px] cursor-pointer hover:bg-darken2 active:bg-darken3 select-none"
            ><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
              <g clip-path="url(#clip0_34506_21213)">
                <path fill="#fff" fill-opacity="0.01" d="M20 0H0v20h20z"></path>
                <path
                  fill="#8A57EA"
                  d="M7.728 19.451c2.777.72 2.158-3.847 4.364-5.331 1.882-1.267 6.752.798 7.366-1.571C20.79 7.404 17.7 2.152 12.555.819a9.624 9.624 0 1 0-4.827 18.632"
                ></path>
                <path
                  fill="#fff"
                  fill-opacity="0.95"
                  fill-rule="evenodd"
                  d="M9.167 4c.46 0 .833.373.833.833v2.5h2.5A.833.833 0 0 1 12.5 9H10v2.5a.833.833 0 0 1-1.667 0V9h-2.5a.833.833 0 0 1 0-1.667h2.5v-2.5c0-.46.373-.833.834-.833"
                  clip-rule="evenodd"
                ></path>
              </g>
              <defs>
                <clipPath id="clip0_34506_21213"><path fill="#fff" d="M0 0h20v20H0z"></path></clipPath>
              </defs></svg></div></div></div
      ><div class="mt-[12px]"
        ><div class="flex gap-[12px]"
          ><div
            id="prompt-input-area"
            class="flex-1 border border-solid border-darken6 rounded-[12px] !border-primary"
            style="box-shadow: rgba(0, 0, 0, 0.08) 0px 1px 4px 0px"
            ><div class="relative">
              <a-textarea
                placeholder="描述您想要创建的图片..."
                :rows="1"
                class="css-mkip61 ant-input-borderless !px-[12px] !pb-[12px] !rounded-[12px] custom-scrollbar !pt-[12px]"
                style="resize: none; overflow-y: hidden; height: 46px; max-height: 156px" /></div></div
          ><div class="self-end flex justify-end"
            ><a-button
              type="default"
              class="!flex items-center gap-[8px] !border-none !h-[48px] !px-[12px] !rounded-[12px] !text-primary5 disabled:!text-blackText3 disabled:!bg-bg2 !bg-primary4"
              disabled
              ><template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <g fill="currentcolor">
                    <path
                      fill-rule="evenodd"
                      d="M9.25 16.672c.586-.182 1.017-.414 1.27-.678 1.232-1.28 1.332-3.067.52-4.12l-.274-.286c-.406-.298-1.166-.382-2-.098-.932.318-1.4.897-1.4 1.358 0 1.606-.44 2.962-.876 3.911a10 10 0 0 1-.162.337c.321-.012.682-.033 1.057-.071.634-.065 1.29-.175 1.865-.353M5 17.842l-.041.75-1.439-.08.889-1.131v-.001l.01-.011.04-.056q.057-.079.16-.24a8 8 0 0 0 .507-.939c.373-.813.74-1.953.74-3.286 0-1.44 1.275-2.388 2.415-2.777a4.6 4.6 0 0 1 1.938-.23l4.757-4.944a2.084 2.084 0 0 1 3.02 0 2.215 2.215 0 0 1 0 3.055l-4.947 5.142c.12 1.378-.401 2.852-1.448 3.94-.507.527-1.214.856-1.906 1.07-.704.22-1.468.343-2.159.413a19 19 0 0 1-2.517.077l-.043-.002h-.017zm7.632-6.477 4.283-4.453a.715.715 0 0 0 0-.975.585.585 0 0 0-.858 0l-4.323 4.494.04.041q.096.082.188.177.113.117.214.242z"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      d="m9 1 .849 2.151L12 4l-2.151.849L9 7l-.849-2.151L6 4l2.151-.849zM3 7l.566 1.434L5 9l-1.434.566L3 11l-.566-1.434L1 9l1.434-.566z"
                    ></path>
                  </g>
                </svg>
              </template>
              生成
            </a-button></div
          ></div
        ></div
      ><div class="flex items-center flex-wrap gap-[8px] my-[6px]"><div class="flex-1"></div></div></div
  ></div>
</template>

<script setup lang="ts">
  // 图片生成页面逻辑
  import { ref } from 'vue'

  // 设置默认选中第一个选项
  const selectedModel = ref('SDXL V1.0')
</script>

<style scoped lang="scss">
  .ant-select {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    font-family: var(--font-family);
    position: relative;
    display: inline-block;
    cursor: pointer;
  }

  :deep(.ant-input-focused) {
    border-color: var(--color-primary, #8a57ea) !important;
    box-shadow: 0 0 0 2px rgba(138, 87, 234, 0.1) !important;
  }
</style>
