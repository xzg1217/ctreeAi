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
              ><p class="text-blackText3 text-[12px]">每次使用扣除 <span class="text-primary5">8</span> 高级积分</p></div
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
                src="@/assets/img/icons/rpbg1.webp"
                style="color: transparent" /><img
                alt=""
                loading="lazy"
                width="86"
                height="28"
                decoding="async"
                data-nimg="1"
                class="inline-block w-[9%] max-w-[86px]"
                src="@/assets/img/icons/arrow-right.webp"
                style="color: transparent" /><img
                alt=""
                loading="eager"
                width="236"
                height="132"
                decoding="async"
                data-nimg="1"
                class="inline-block w-[25%] max-w-[236px] rounded-[8px]"
                src="@/assets/img/icons/rpbg2.webp"
                style="color: transparent" /></div></div></div></div
      ><div class="mt-[12px] flex justify-center"
        ><div class="w-full flex-center flex-wrap gap-[12px]"
          ><div class="relative flex-1 max-w-[600px] text-blackText2">
            <textarea
              rows="1"
              placeholder="您想把背景改成什么？"
              class="ant-input css-1qi1usw ant-input-borderless w-full !min-h-[40px] py-[8px] !bg-[rgba(0,0,0,0.04)]"
              style="overflow-y: hidden; resize: none; height: 38px; max-height: 82px"
            ></textarea></div
          ><a-button
            type="primary"
            class="!flex items-center justify-center !border-none bg-[#8A57EA] !h-[40px] gap-[8px]"
            disabled
          >
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
            <span>改变</span>
          </a-button>
          </div
        ></div
      ></div
    ></div
  >
</template>

<script setup lang="ts">
  // 背景替换页面
</script>

<style scoped lang="scss">
  :deep(.ant-btn-primary) {
    background-color: #8A57EA;
    border-color: #8A57EA;
    color: #fff;

    &:hover {
      background-color: #7a4cd9;
      border-color: #7a4cd9;
    }

    &.ant-btn-disabled {
      background-color: #DCCDF9;
      border-color: #DCCDF9;
      color: #fff;
    }
  }
</style>
