<template>
  <div class="!flex !flex-col !gap-[12px] !p-[12px]"
    ><div
      ><h3 class="px-[8px] pb-[8px] text-color-text-primary-1 font-semibold-14">图片</h3
      ><div class="grid grid-cols-2 gap-2"
        ><a target="_blank" @click="to('/images/generate')"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"><ToolsPainterIcon />图片生成</span></button
          ></a
        ><a target="_blank" href="/create/image/background-remover"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"><RemoveBackgroundIcon />背景移除</span></button
          ></a
        ><a target="_blank" href="/create/image/text-remover"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"><RemoveTextIcon />文字移除</span></button
          ></a
        ><a target="_blank" href="/create/image/photo-eraser"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"><EraseAreaIcon />区域抹除</span></button
          ></a
        ><a target="_blank" href="/create/image/inpaint"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"><RepaintIcon />局部重绘</span></button
          ></a
        ><a target="_blank" href="/create/image/image-upscaler"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"><QualityIcon />画质提升</span></button
          ></a
        ><a target="_blank" href="/create/image/photo-background-changer"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"><ReplaceBackgroundIcon />背景替换</span></button
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
              ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 60 60">
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
                </defs>
              </svg>
              文本翻译</span
            ></button
          ></a
        ><a target="_blank" href="/translator/image-translator"
          ><button
            type="button"
            class="min-w-[196px] rounded-[8px] !bg-transparent !p-[8px] text-color-text-primary-3 hover:bg-(--color-grey-fill1-hover)! hover:cursor-pointer"
            ><span class="line-clamp-1 flex items-center gap-[8px] font-normal-14"
              ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 60 60">
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
                </defs>
              </svg>
              图像翻译</span
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
              ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" viewBox="0 0 60 60">
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
                </defs>
              </svg>
              智简视频</span
            ></button
          ></a
        ></div
      ></div
    ></div
  >
</template>

<script setup lang="ts">
  import ToolsPainterIcon from './icons/ToolsPainterIcon.vue'
  import RemoveBackgroundIcon from './icons/RemoveBackgroundIcon.vue'
  import RemoveTextIcon from './icons/RemoveTextIcon.vue'
  import EraseAreaIcon from './icons/EraseAreaIcon.vue'
  import RepaintIcon from './icons/RepaintIcon.vue'
  import QualityIcon from './icons/QualityIcon.vue'
  import ReplaceBackgroundIcon from './icons/ReplaceBackgroundIcon.vue'
  import TranslatorIcon from './icons/TranslatorIcon.vue'
  import { router } from '@/router'

  const to = (path: string) => {
    router.push(path)
  }
</script>
