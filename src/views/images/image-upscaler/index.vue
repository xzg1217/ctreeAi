<template>
  <div class="h-full flex flex-col"
    ><div class="flex-1 flex flex-col w-full max-w-[1414px] mx-auto p-[20px_20px_16px]"
      ><div class="relative w-full flex-1"
        ><div class="relative w-full h-full flex flex-col bg-bg2 rounded-[12px] p-[8px] select-none"
          ><div
            class="flex-1 bg-white flex items-center justify-center rounded-[12px] cursor-pointer transition-all hover:bg-[rgba(138,87,234,0.08)] hover:border hover:border-dashed hover:border-primary"
            ><div class="flex flex-col items-center text-center"
              ><img
                alt="upload"
                loading="lazy"
                width="60"
                height="60"
                decoding="async"
                data-nimg="1"
                class="w-[60px]"
                src="@/assets/img/icons/upload.webp"
                style="color: transparent"
              /><p class="mt-[16px] text-blackText2 text-[16px] font-medium">单击或拖动图片至此处</p
              ><p class="text-blackText3 text-[12px]">每次使用扣除 <span class="text-primary5">1</span> 高级积分</p></div
            ></div
          ><div
            ><div class="pt-[16px] text-center space-x-[15px] lg:space-x-[45px]"
              ><img
                alt=""
                loading="eager"
                width="236"
                height="132"
                decoding="async"
                data-nimg="1"
                class="inline-block w-[25%] max-w-[236px] rounded-[8px]"
                src="@/assets/img/icons/upscale.webp"
                style="color: transparent" /></div></div></div></div
      ><div class="mt-[12px] flex justify-center"
        ><div class="flex-center flex-wrap gap-[12px]"
          ><div class="flex-center text-right space-x-[12px] text-blackText2"
            ><span>图片放大倍率:</span
            ><div class="relative p-[4px] rounded-[8px] flex gap-[8px] bg-bg5 select-none"
              ><button
                type="button"
                disabled=""
                class="w-[42px] h-[32px] bg-transparent rounded-[6px] flex-center disabled:text-blackText3 select-none"
                >4X</button
              ><div class="absolute top-[4px] w-[42px] h-[32px] rounded-[6px] flex-center bg-white text-primary5 right-[4px]">4X</div></div
            ></div
          ><a-button type="primary" class="!flex items-center justify-center !border-none bg-[#8A57EA] !h-[40px] gap-[8px]" disabled>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.00002 11.062L6.11385 13.8862L8.93802 15L6.11385 16.1139L5.00002 18.938L3.88618 16.1139L1.06201 15L3.88618 13.8862L5.00002 11.062Z"
                fill="currentcolor"
              ></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0833 1.19189L14.2042 6.21244L19.2248 8.33334L14.2042 10.4542L12.0833 15.4748L9.96244 10.4542L4.94189 8.33334L9.96244 6.21244L12.0833 1.19189ZM12.0833 5.47478L11.2344 7.48439L9.22478 8.33334L11.2344 9.18229L12.0833 11.1919L12.9323 9.18229L14.9419 8.33334L12.9323 7.48439L12.0833 5.47478Z"
                fill="currentcolor"
              ></path>
            </svg>
            <span>确认</span>
          </a-button>
        </div></div
      ></div
    ></div
  >
</template>

<script setup lang="ts">
  // 画质提升页面
</script>

<style scoped lang="scss">
  :deep(.ant-btn-primary) {
    background-color: #8a57ea;
    border-color: #8a57ea;

    &:hover {
      background-color: #7a4cd9;
      border-color: #7a4cd9;
    }
  }
</style>
