<template>
  <div class="!flex !flex-col !gap-[12px] !p-[12px]"
    ><div
      ><h3 class="px-[8px] pb-[8px] text-color-text-primary-1 font-semibold-14">图片</h3
      ><div class="grid grid-cols-2 gap-2"
        ><a target="_blank" href="/create/image/ai-image-generator"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 60 60"
              >
                <path
                  fill="url(#icon-ToolsPainter-:r13:-a)"
                  d="M21.703 56.58c7.484 1.89 5.82-10.127 11.767-14.035 5.075-3.335 18.203 2.095 19.859-4.14 3.596-13.542-4.732-27.361-18.601-30.865-13.87-3.505-28.03 4.632-31.626 18.174S7.833 53.075 21.703 56.58"
                ></path>
                <path
                  fill="#fff"
                  d="M22.778 22.592c3.303-2.935 7.105-2.711 10.04.591 2.936 3.303 2.712 7.105-.59 10.04s-12.034 1.18-12.034 1.18-.718-8.875 2.584-11.81"
                ></path>
                <path
                  fill="#AECBFF"
                  d="M37.34 24.68c.099.293.475.4.697.185L55.905 7.57a3 3 0 0 0 .156-4.148l-1.02-1.148a3 3 0 0 0-4.138-.332L31.543 17.726c-.245.2-.173.597.118.723 1.24.537 2.433 1.425 3.53 2.66 1.028 1.156 1.744 2.359 2.15 3.57"
                ></path>
                <defs>
                  <linearGradient
                    id="icon-ToolsPainter-:r13:-a"
                    x1="14.394"
                    x2="38.278"
                    y1="3.078"
                    y2="42.658"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1C7BEB"></stop>
                    <stop offset="1" stop-color="#4E9FFF"></stop>
                  </linearGradient>
                </defs></svg
              >图片生成</span
            ></button
          ></a
        ><a target="_blank" href="/create/image/background-remover"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 60 60"
              >
                <path
                  fill="#AECBFF"
                  d="M14 21c0-5.6 0-8.4 1.09-10.54a10 10 0 0 1 4.37-4.37C21.6 5 24.4 5 30 5h9c5.6 0 8.4 0 10.54 1.09a10 10 0 0 1 4.37 4.37C55 12.6 55 15.4 55 21v18c0 5.6 0 8.4-1.09 10.54a10 10 0 0 1-4.37 4.37C47.4 55 44.6 55 39 55h-9c-5.6 0-8.4 0-10.54-1.09a10 10 0 0 1-4.37-4.37C14 47.4 14 44.6 14 39z"
                ></path>
                <path
                  fill="url(#icon-RemoveBackgroundFilled-:r14:-a)"
                  d="M5 21c0-5.6 0-8.4 1.09-10.54a10 10 0 0 1 4.37-4.37C12.6 5 15.4 5 21 5h7c5.6 0 8.4 0 10.54 1.09a10 10 0 0 1 4.37 4.37C44 12.6 44 15.4 44 21v18c0 5.6 0 8.4-1.09 10.54a10 10 0 0 1-4.37 4.37C36.4 55 33.6 55 28 55h-7c-5.6 0-8.4 0-10.54-1.09a10 10 0 0 1-4.37-4.37C5 47.4 5 44.6 5 39z"
                ></path>
                <path
                  fill="#fff"
                  d="M9.885 20.268a3 3 0 0 1 0-4.243l6.14-6.14a3 3 0 1 1 4.242 4.243l-6.14 6.14a3 3 0 0 1-4.242 0M28.904 50.249a3 3 0 0 1 0-4.243l6.102-6.102a3 3 0 0 1 4.243 4.243l-6.102 6.102a3 3 0 0 1-4.243 0M9.975 36.178a3 3 0 0 1 0-4.243l21.9-21.9a3 3 0 1 1 4.243 4.243l-21.9 21.9a3 3 0 0 1-4.243 0M13.185 50.167a3 3 0 0 1 0-4.243l21.907-21.907a3 3 0 1 1 4.243 4.242L17.427 50.167a3 3 0 0 1-4.242 0"
                ></path>
                <defs>
                  <linearGradient
                    id="icon-RemoveBackgroundFilled-:r14:-a"
                    x1="12.292"
                    x2="49.282"
                    y1="5"
                    y2="50.314"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1C7BEB"></stop>
                    <stop offset="1" stop-color="#4FA0FF"></stop>
                  </linearGradient>
                </defs></svg
              >背景移除</span
            ></button
          ></a
        ><a target="_blank" href="/create/image/text-remover"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 60 60"
              >
                <path
                  fill="#AECBFF"
                  d="M9 13.25c0-1.975 0-2.963.173-3.782a8 8 0 0 1 6.17-6.17c.82-.173 1.807-.173 3.782-.173h21.75c1.975 0 2.962 0 3.782.173a8 8 0 0 1 6.17 6.17c.173.82.173 1.807.173 3.782s0 2.962-.173 3.782a8 8 0 0 1-6.17 6.17c-.82.173-1.807.173-3.782.173h-21.75c-1.975 0-2.962 0-3.782-.174a8 8 0 0 1-6.17-6.17C9 16.213 9 15.226 9 13.25"
                ></path>
                <path
                  fill="url(#icon-RemoveTextFilled-:r15:-a)"
                  d="M5 24.875c0-5.6 0-8.4 1.09-10.54a10 10 0 0 1 4.37-4.37c2.14-1.09 4.94-1.09 10.54-1.09h18c5.6 0 8.4 0 10.54 1.09a10 10 0 0 1 4.37 4.37C55 16.475 55 19.275 55 24.875v16c0 5.6 0 8.4-1.09 10.54a10 10 0 0 1-4.37 4.37c-2.14 1.09-4.94 1.09-10.54 1.09H21c-5.6 0-8.4 0-10.54-1.09a10 10 0 0 1-4.37-4.37C5 49.275 5 46.475 5 40.875z"
                ></path>
                <path
                  fill="#fff"
                  d="M12 22.125a3 3 0 0 1 3-3h3a3 3 0 1 1 0 6h-3a3 3 0 0 1-3-3M24 22.125a3 3 0 0 1 3-3h6a3 3 0 1 1 0 6h-6a3 3 0 0 1-3-3M39 22.125a3 3 0 0 1 3-3h3a3 3 0 1 1 0 6h-3a3 3 0 0 1-3-3M30 37.125a3 3 0 0 1-3-3v-3a3 3 0 1 1 6 0v3a3 3 0 0 1-3 3M30 49.125a3 3 0 0 1-3-3v-3a3 3 0 1 1 6 0v3a3 3 0 0 1-3 3"
                ></path>
                <defs>
                  <linearGradient
                    id="icon-RemoveTextFilled-:r15:-a"
                    x1="12.292"
                    x2="52.535"
                    y1="3.125"
                    y2="48.983"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1C7BEB"></stop>
                    <stop offset="1" stop-color="#4FA0FF"></stop>
                  </linearGradient>
                </defs></svg
              >文字移除</span
            ></button
          ></a
        ><a target="_blank" href="/create/image/photo-eraser"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 60 60"
              >
                <path
                  fill="url(#icon-RemoveBrushedAreaFilled-:r16:-a)"
                  d="M5 21c0-5.6 0-8.4 1.09-10.54a10 10 0 0 1 4.37-4.37C12.599 5 15.4 5 21 5h18c5.6 0 8.4 0 10.54 1.09a10 10 0 0 1 4.37 4.37C55 12.6 55 15.4 55 21v18c0 5.6 0 8.4-1.09 10.54a10 10 0 0 1-4.37 4.37C47.4 55 44.6 55 39 55H21c-5.6 0-8.401 0-10.54-1.09a10 10 0 0 1-4.37-4.37C5 47.4 5 44.6 5 39z"
                ></path>
                <path
                  fill="#fff"
                  d="M35.976 37.127c-3.303 2.935-7.104 2.711-10.04-.591-2.935-3.303-2.711-7.105.591-10.04 3.303-2.935 12.033-1.18 12.033-1.18s.718 8.875-2.584 11.81"
                ></path>
                <path
                  fill="#AECBFF"
                  d="M21.414 35.04c-.098-.294-.475-.402-.697-.186L2.85 52.15a3 3 0 0 0-.156 4.148l1.02 1.148a3 3 0 0 0 4.138.332l19.359-15.785c.245-.2.173-.597-.117-.723-1.241-.537-2.434-1.425-3.532-2.66-1.027-1.156-1.742-2.359-2.148-3.57"
                ></path>
                <path
                  fill="#fff"
                  d="M24.59 12.81a3 3 0 0 1 3.099-2.899l5.996.2a3 3 0 0 1-.2 5.997l-5.997-.2a3 3 0 0 1-2.898-3.099M12.52 23.524a3 3 0 0 1-.221-4.237l4.015-4.458a3 3 0 1 1 4.459 4.015l-4.016 4.459a3 3 0 0 1-4.237.221M40.832 15.262a3 3 0 0 1 4.207.547l3.66 4.754a3 3 0 1 1-4.754 3.66l-3.66-4.754a3 3 0 0 1 .547-4.208M47.849 29.051a3 3 0 0 1 2.393 3.503l-1.109 5.896a3 3 0 0 1-5.897-1.109l1.11-5.896a3 3 0 0 1 3.503-2.394M41.577 43.288a3 3 0 0 1-1.395 4.007l-5.401 2.612a3 3 0 0 1-2.612-5.402l5.401-2.612a3 3 0 0 1 4.007 1.395M12.337 27.792a3 3 0 0 1 3.122 2.872l.126 2.997a3 3 0 0 1-5.995.25l-.125-2.997a3 3 0 0 1 2.872-3.122"
                ></path>
                <defs>
                  <linearGradient
                    id="icon-RemoveBrushedAreaFilled-:r16:-a"
                    x1="9.675"
                    x2="49.277"
                    y1="5"
                    y2="53.159"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1C7BEB"></stop>
                    <stop offset="1" stop-color="#4FA0FF"></stop>
                  </linearGradient>
                </defs></svg
              >区域抹除</span
            ></button
          ></a
        ><a target="_blank" href="/create/image/inpaint"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 60 60"
              >
                <path
                  fill="url(#icon-InpaintingFilled-:r17:-a)"
                  d="M5 21c0-5.6 0-8.4 1.09-10.54a10 10 0 0 1 4.37-4.37C12.599 5 15.4 5 21 5h18c5.6 0 8.4 0 10.54 1.09a10 10 0 0 1 4.37 4.37C55 12.6 55 15.4 55 21v18c0 5.6 0 8.4-1.09 10.54a10 10 0 0 1-4.37 4.37C47.4 55 44.6 55 39 55H21c-5.6 0-8.401 0-10.54-1.09a10 10 0 0 1-4.37-4.37C5 47.4 5 44.6 5 39z"
                ></path>
                <path
                  fill="#fff"
                  d="M34.976 37.127c-3.303 2.935-7.104 2.711-10.04-.591-2.935-3.303-2.711-7.105.591-10.04 3.303-2.935 12.033-1.18 12.033-1.18s.718 8.875-2.584 11.81"
                ></path>
                <path
                  fill="#AECBFF"
                  d="M20.414 35.04c-.098-.294-.475-.402-.697-.186L1.85 52.15a3 3 0 0 0-.156 4.148l1.02 1.148a3 3 0 0 0 4.138.332l19.359-15.785c.245-.2.173-.597-.117-.723-1.241-.537-2.434-1.425-3.532-2.66-1.027-1.156-1.742-2.359-2.148-3.57"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M22.676 12.366a19.75 19.75 0 1 1 7.256 37.876 2.25 2.25 0 1 1 .13-4.498 15.25 15.25 0 1 0-14.806-14.8 2.25 2.25 0 1 1-4.498.13 19.75 19.75 0 0 1 11.918-18.708"
                  clip-rule="evenodd"
                ></path>
                <defs>
                  <linearGradient
                    id="icon-InpaintingFilled-:r17:-a"
                    x1="8.821"
                    x2="48.274"
                    y1="5"
                    y2="53.882"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1C7BEB"></stop>
                    <stop offset="1" stop-color="#4FA0FF"></stop>
                  </linearGradient>
                </defs></svg
              >局部重绘</span
            ></button
          ></a
        ><a target="_blank" href="/create/image/image-upscaler"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 60 60"
              >
                <path
                  fill="url(#icon-UpscaleFilled-:r18:-a)"
                  d="M6 20c0-5.6 0-8.4 1.09-10.54a10 10 0 0 1 4.37-4.37C13.6 4 16.4 4 22 4h18c5.6 0 8.4 0 10.54 1.09a10 10 0 0 1 4.37 4.37C56 11.6 56 14.4 56 20v18c0 5.6 0 8.4-1.09 10.54a10 10 0 0 1-4.37 4.37C48.4 54 45.6 54 40 54H22c-5.6 0-8.4 0-10.54-1.09a10 10 0 0 1-4.37-4.37C6 46.4 6 43.6 6 38z"
                ></path>
                <path
                  fill="#fff"
                  d="M31 11.5A2.5 2.5 0 0 1 33.5 9h15a2.5 2.5 0 0 1 0 5h-15a2.5 2.5 0 0 1-2.5-2.5"
                ></path>
                <path
                  fill="#fff"
                  d="M48.5 29a2.5 2.5 0 0 1-2.5-2.5v-15a2.5 2.5 0 0 1 5 0v15a2.5 2.5 0 0 1-2.5 2.5"
                ></path>
                <path
                  fill="#fff"
                  d="M32.768 27.324a2.5 2.5 0 0 1 0-3.535l12.02-12.021a2.5 2.5 0 0 1 3.536 3.535l-12.02 12.021a2.5 2.5 0 0 1-3.536 0"
                ></path>
                <path
                  fill="#AECBFF"
                  d="M2 42.8c0-4.48 0-6.72.872-8.432a8 8 0 0 1 3.496-3.496C8.08 30 10.32 30 14.8 30h2.4c4.48 0 6.72 0 8.432.872a8 8 0 0 1 3.496 3.496C30 36.08 30 38.32 30 42.8v2.4c0 4.48 0 6.72-.872 8.432a8 8 0 0 1-3.496 3.496C23.92 58 21.68 58 17.2 58h-2.4c-4.48 0-6.72 0-8.432-.872a8 8 0 0 1-3.496-3.496C2 51.92 2 49.68 2 45.2z"
                ></path>
                <defs>
                  <linearGradient
                    id="icon-UpscaleFilled-:r18:-a"
                    x1="9.875"
                    x2="49.825"
                    y1="4"
                    y2="52.939"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1C7BEB"></stop>
                    <stop offset="1" stop-color="#4FA0FF"></stop>
                  </linearGradient>
                </defs></svg
              >画质提升</span
            ></button
          ></a
        ><a target="_blank" href="/create/image/photo-background-changer"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 60 60"
              >
                <path
                  fill="url(#icon-ReplaceBackgroundFilled-:r19:-a)"
                  d="M5 21c0-5.6 0-8.4 1.09-10.54a10 10 0 0 1 4.37-4.37C12.6 5 15.4 5 21 5h18c5.6 0 8.4 0 10.54 1.09a10 10 0 0 1 4.37 4.37C55 12.6 55 15.4 55 21v18c0 5.6 0 8.4-1.09 10.54a10 10 0 0 1-4.37 4.37C47.4 55 44.6 55 39 55H21c-5.6 0-8.4 0-10.54-1.09a10 10 0 0 1-4.37-4.37C5 47.4 5 44.6 5 39z"
                ></path>
                <path
                  fill="#fff"
                  d="M9.989 20.371a2.813 2.813 0 0 1 0-3.977l6.405-6.405a2.813 2.813 0 0 1 3.977 3.977l-6.405 6.405a2.81 2.81 0 0 1-3.977 0M27.106 19.254a2.81 2.81 0 0 1 0-3.977l5.138-5.138a2.812 2.812 0 1 1 3.977 3.977l-5.137 5.138a2.81 2.81 0 0 1-3.978 0M10.08 36.281a2.813 2.813 0 0 1 0-3.977l5.02-5.022a2.813 2.813 0 0 1 3.978 3.978l-5.021 5.021a2.813 2.813 0 0 1-3.978 0M13.289 50.27a2.81 2.81 0 0 1 0-3.977l6.537-6.538a2.812 2.812 0 1 1 3.978 3.977l-6.538 6.538a2.81 2.81 0 0 1-3.977 0M39.772 23.787a2.81 2.81 0 0 1 0-3.978l6.435-6.435a2.812 2.812 0 1 1 3.977 3.978l-6.435 6.435a2.81 2.81 0 0 1-3.977 0"
                ></path>
                <path
                  fill="#AECBFF"
                  d="M20.153 25.447 22.984 31l2.831-5.553L31 23l-5.185-2.447L22.984 15l-2.83 5.553L15 23zM32.018 41.282 36.972 51l4.954-9.718L51 37l-9.074-4.282L36.973 23l-4.954 9.718L23 37z"
                ></path>
                <defs>
                  <linearGradient
                    id="icon-ReplaceBackgroundFilled-:r19:-a"
                    x1="12.292"
                    x2="49.282"
                    y1="5"
                    y2="50.314"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#1C7BEB"></stop>
                    <stop offset="1" stop-color="#4FA0FF"></stop>
                  </linearGradient>
                </defs></svg
              >背景替换</span
            ></button
          ></a
        ></div
      ></div
    ><div
      ><h3 class="px-[8px] pb-[8px] text-color-text-primary-1 font-semibold-14">翻译器</h3
      ><div class="grid grid-cols-2 gap-2"
        ><a target="_blank" href="/translator/text-translator"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 60 60"
              >
                <g fill-rule="evenodd" clip-rule="evenodd">
                  <path
                    fill="url(#icon-AiTranslatorFilled-:r1a:-a)"
                    d="M4.09 8.46C3 10.6 3 13.4 3 19v14c0 5.6 0 8.4 1.09 10.54a10 10 0 0 0 4.37 4.37C10.6 49 13.4 49 19 49c1.33 0 2.393.997 2.934 2.212q.074.166.156.328a10 10 0 0 0 4.37 4.37C28.6 57 31.4 57 37 57h4c5.6 0 8.4 0 10.54-1.09a10 10 0 0 0 4.37-4.37C57 49.4 57 46.6 57 41v-4c0-5.6 0-8.4-1.09-10.54a10 10 0 0 0-4.37-4.37c-.718-.366-1.51-.609-2.457-.77C47.923 21.122 47 20.178 47 19c0-5.6 0-8.4-1.09-10.54a10 10 0 0 0-4.37-4.37C39.4 3 36.6 3 31 3H19c-5.6 0-8.4 0-10.54 1.09a10 10 0 0 0-4.37 4.37"
                  ></path>
                  <path
                    fill="#FFD8BD"
                    d="M45.934 31.852a2.25 2.25 0 0 1 1.477 2.818c-.646 2.074-1.929 5.506-4.093 8.166.597.35 1.297.707 2.02 1.04a36 36 0 0 0 2.386.993l.033.012.006.002a2.25 2.25 0 0 1-1.526 4.234L47 47l-.763 2.117-.007-.003-.014-.005-.047-.017-.17-.064a40.628 40.628 0 0 1-2.543-1.065c-1.055-.485-2.42-1.171-3.56-1.985-1.718 1.221-3.759 2.276-6.127 3.136a2.25 2.25 0 1 1-1.538-4.229c1.742-.633 3.212-1.363 4.441-2.157a41 41 0 0 1-1.7-2.248 2.25 2.25 0 0 1 3.677-2.594c.395.561.868 1.2 1.387 1.846 1.47-1.92 2.49-4.512 3.08-6.402a2.25 2.25 0 0 1 2.818-1.478"
                  ></path>
                  <path
                    fill="#fff"
                    d="M10 13.524A2.524 2.524 0 0 1 12.524 11h17.952a2.524 2.524 0 1 1 0 5.049h-6.452v15.427a2.524 2.524 0 1 1-5.048 0V16.049h-6.452A2.524 2.524 0 0 1 10 13.524"
                  ></path>
                </g>
                <defs>
                  <linearGradient
                    id="icon-AiTranslatorFilled-:r1a:-a"
                    x1="5.308"
                    x2="28.08"
                    y1="6"
                    y2="42.862"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E47100"></stop>
                    <stop offset="1" stop-color="#FFA56D"></stop>
                  </linearGradient>
                </defs></svg
              >文本翻译</span
            ></button
          ></a
        ><a target="_blank" href="/translator/image-translator"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 60 60"
              >
                <path
                  fill="url(#icon-ImageTranslatorFilled-:r1b:-a)"
                  fill-rule="evenodd"
                  d="M4.09 8.46C3 10.6 3 13.4 3 19v14c0 5.6 0 8.4 1.09 10.54a10 10 0 0 0 4.37 4.37C10.6 49 13.4 49 19 49c1.33 0 2.393.997 2.934 2.212q.074.166.156.328a10 10 0 0 0 4.37 4.37C28.6 57 31.4 57 37 57h4c5.6 0 8.4 0 10.54-1.09a10 10 0 0 0 4.37-4.37C57 49.4 57 46.6 57 41v-4c0-5.6 0-8.4-1.09-10.54a10 10 0 0 0-4.37-4.37c-.718-.366-1.51-.609-2.457-.77C47.923 21.122 47 20.178 47 19c0-5.6 0-8.4-1.09-10.54a10 10 0 0 0-4.37-4.37C39.4 3 36.6 3 31 3H19c-5.6 0-8.4 0-10.54 1.09a10 10 0 0 0-4.37 4.37"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#FFD8BD"
                  fill-rule="evenodd"
                  d="M45.934 31.852a2.25 2.25 0 0 1 1.477 2.818c-.646 2.074-1.929 5.506-4.093 8.166.597.35 1.297.707 2.02 1.04a36 36 0 0 0 2.386.993l.033.012.006.002a2.25 2.25 0 0 1-1.526 4.234L47 47l-.763 2.117-.007-.003-.014-.005-.047-.017-.17-.064a40.628 40.628 0 0 1-2.543-1.065c-1.055-.485-2.42-1.171-3.56-1.985-1.718 1.221-3.759 2.276-6.127 3.136a2.25 2.25 0 1 1-1.538-4.229c1.742-.633 3.212-1.363 4.441-2.157a41 41 0 0 1-1.7-2.248 2.25 2.25 0 0 1 3.677-2.594c.395.561.868 1.2 1.387 1.846 1.47-1.92 2.49-4.512 3.08-6.402a2.25 2.25 0 0 1 2.818-1.478"
                  clip-rule="evenodd"
                ></path>
                <path
                  fill="#fff"
                  fill-rule="evenodd"
                  d="M15.5 12.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5M8.75 14.5a6.75 6.75 0 1 1 13.5 0 6.75 6.75 0 0 1-13.5 0M30.85 26.532a2.15 2.15 0 0 0-1.329 0c-.092.03-.3.117-.774.52-.498.423-1.105 1.028-2.055 1.978L12.768 42.954a2.5 2.5 0 0 1-3.536-3.536l13.991-13.99c.864-.864 1.616-1.617 2.288-2.187.711-.604 1.495-1.15 2.465-1.464a7.15 7.15 0 0 1 4.42 0c.97.315 1.754.86 2.465 1.464.672.57 1.424 1.323 2.288 2.186l.619.62a2.5 2.5 0 1 1-3.536 3.535l-.551-.552c-.95-.95-1.558-1.555-2.056-1.977-.475-.404-.682-.491-.774-.521"
                  clip-rule="evenodd"
                ></path>
                <defs>
                  <linearGradient
                    id="icon-ImageTranslatorFilled-:r1b:-a"
                    x1="5.308"
                    x2="28.08"
                    y1="6"
                    y2="42.862"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#E47100"></stop>
                    <stop offset="1" stop-color="#FFA56D"></stop>
                  </linearGradient>
                </defs></svg
              >图像翻译</span
            ></button
          ></a
        ></div
      ></div
    ><div
      ><h3 class="px-[8px] pb-[8px] text-color-text-primary-1 font-semibold-14">视频</h3
      ><div class="grid grid-cols-2 gap-2"
        ><a target="_blank" href="/create/video/ai-video-shortener"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                fill="currentColor"
                viewBox="0 0 60 60"
              >
                <path fill="#CFBEFF" d="M45 8h3a9 9 0 0 1 9 9v28a9 9 0 0 1-9 9h-3z"></path>
                <path
                  fill="url(#icon-ToolsAiVideoShortener-:r1c:-a)"
                  d="M42.5 2A2.5 2.5 0 0 0 40 4.5V10H10a8 8 0 0 0-8 8v25a8 8 0 0 0 8 8h30v4.5a2.5 2.5 0 0 0 5 0v-51A2.5 2.5 0 0 0 42.5 2"
                ></path>
                <path
                  fill="#fff"
                  d="M36.666 31.045a3.74 3.74 0 0 0 0-3.09c-.29-.64-.832-1.14-1.519-1.628-.682-.484-1.609-1.023-2.78-1.705l-2.391-1.39c-1.244-.725-2.226-1.296-3.028-1.671-.805-.376-1.55-.616-2.298-.55a4.05 4.05 0 0 0-2.87 1.56c-.445.582-.617 1.32-.699 2.179C21 25.605 21 26.71 21 28.11v2.78c0 1.4 0 2.505.081 3.36.082.859.254 1.597.7 2.18a4.05 4.05 0 0 0 2.869 1.56c.748.065 1.493-.175 2.298-.551.802-.375 1.784-.946 3.028-1.67l2.39-1.391c1.172-.682 2.1-1.221 2.781-1.705.687-.487 1.229-.987 1.519-1.628"
                ></path>
                <defs>
                  <linearGradient
                    id="icon-ToolsAiVideoShortener-:r1c:-a"
                    x1="11.625"
                    x2="45.894"
                    y1="2.817"
                    y2="52.377"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#6128FF"></stop>
                    <stop offset="1" stop-color="#9071FF"></stop>
                  </linearGradient>
                </defs></svg
              >智简视频</span
            ></button
          ></a
        ></div
      ></div
    ></div
  >
</template>
