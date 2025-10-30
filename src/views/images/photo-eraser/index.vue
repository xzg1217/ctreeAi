<template>
  <div class="h-full flex flex-col"
    ><div class="flex-1 flex flex-col w-full max-w-[1414px] mx-auto px-[24px] pt-[16px] pb-[12px]"
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
              ><p class="text-blackText3 text-[12px]">每次使用扣除 <span class="text-primary5">3</span> 高级积分</p></div
            ></div
          ><div class="mt-[16px]"
            ><div class="text-center space-x-[15px] lg:space-x-[45px]"
              ><img
                alt=""
                loading="eager"
                width="236"
                height="132"
                decoding="async"
                data-nimg="1"
                class="inline-block w-[25%] max-w-[236px] rounded-[8px]"
                src="@/assets/img/icons/inpaint1.webp"
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
                src="@/assets/img/icons/inpaint2.webp"
                style="color: transparent" /></div></div></div></div
      ><div class="mt-[12px] flex justify-center"
        ><div class="w-full flex items-center flex-wrap gap-[24px]"
          ><div class="flex-1 flex items-center gap-[12px] text-blackText2"
            ><div class="flex flex-1 gap-[12px]"
              ><button
                type="button"
                disabled=""
                class="flex items-center justify-center p-[10px] rounded-[8px] bg-bg2 disabled:bg-bg2 disabled:text-blackText4 hover:bg-[#eee] active:bg-[#eaeaea] select-none"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-undo2"
                >
                  <path d="M9 14 4 9l5-5"></path>
                  <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11"></path></svg></button
              ><button
                type="button"
                disabled=""
                class="flex items-center justify-center p-[10px] rounded-[8px] bg-bg2 disabled:bg-bg2 disabled:text-blackText4 hover:bg-[#eee] active:bg-[#eaeaea] select-none"
                ><svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-redo2"
                >
                  <path d="m15 14 5-5-5-5"></path>
                  <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5A5.5 5.5 0 0 0 9.5 20H13"></path></svg></button></div
            ><div class="flex items-center gap-[16px]"
              ><div class="relative bg-bg2 p-[4px] rounded-[8px]"
                ><div class="absolute top-[4px] rounded-[8px] bg-white w-[32px] h-[32px] left-[4px]"></div
                ><div class="relative flex z-[1]"
                  ><button
                    type="button"
                    disabled=""
                    class="flex items-center justify-center p-[6px] rounded-[8px] bg-transparent disabled:bg-bg2 disabled:text-blackText4 text-primary cursor-default"
                    ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.7117 2.79646C10.936 3.02961 10.153 3.38346 9.59442 3.94536C8.48782 5.0586 7.90725 6.54484 7.95522 7.96293L7.91927 7.92676L2.02575 13.2685L2.01198 13.2824C0.996052 14.3044 0.996048 15.9596 2.01198 16.9816C3.02541 18.0011 4.66729 18.0061 5.68686 16.9965L11.4742 11.751C12.0665 11.7609 12.6627 11.6544 13.1884 11.4777C14.4527 11.0526 15.8108 10.0471 15.915 8.5504C15.9635 7.85481 16.3763 6.5883 16.8274 5.40539C17.0453 4.83395 17.26 4.31209 17.4205 3.93278C17.5007 3.74334 17.567 3.58997 17.6132 3.48436C17.6363 3.43157 17.6543 3.39075 17.6664 3.36336L17.6801 3.33254L17.6842 3.32332L18.1316 2.3257L17.0402 2.26718L17 3.01611C17.0402 2.26718 17.0404 2.26719 17.0402 2.26718L17.0382 2.26708L17.0343 2.26688L17.0211 2.26623L16.9732 2.26409C16.932 2.26236 16.8726 2.26012 16.797 2.25794C16.646 2.25358 16.4303 2.24944 16.1666 2.25006C15.6407 2.25131 14.9181 2.27156 14.1362 2.34841C13.3577 2.42494 12.5001 2.55948 11.7117 2.79646ZM15.87 3.75291C15.7354 4.07943 15.5816 4.46247 15.4258 4.87096C14.989 6.01646 14.4852 7.49103 14.4187 8.44613C14.3778 9.03297 13.7601 9.70297 12.7104 10.0559C11.6693 10.4059 10.7031 10.2702 10.2493 9.8137C9.10888 8.66641 9.15376 6.51636 10.6582 5.00284C10.9616 4.69769 11.4687 4.43577 12.1434 4.23297C12.8054 4.03401 13.5585 3.91243 14.283 3.84122C14.8669 3.78382 15.4191 3.76037 15.87 3.75291ZM9.43268 11.577L4.65175 15.9103L4.63798 15.9241C4.20608 16.3586 3.50771 16.3586 3.07581 15.9241C2.64546 15.4912 2.64148 14.7899 3.06387 14.352L7.86528 10.0001L9.43268 11.577Z"
                        fill="currentcolor"
                      ></path></svg></button
                  ><button
                    type="button"
                    disabled=""
                    class="flex items-center justify-center p-[6px] rounded-[8px] bg-transparent disabled:bg-bg2 disabled:text-blackText4 hover:text-primary"
                    ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.33267 10.675C0.563151 11.4445 0.563149 12.6922 1.33267 13.4617L6.00729 18.1363C6.14794 18.277 6.33871 18.356 6.53762 18.356L11.5718 18.356C11.7707 18.356 11.9615 18.277 12.1022 18.1363L18.7905 11.448C19.56 10.6785 19.56 9.43086 18.7905 8.66134L12.4617 2.33261C11.6922 1.56309 10.4446 1.5631 9.67507 2.33262L1.33267 10.675ZM7.09486 7.03415L10.7357 3.39328C10.9195 3.20954 11.2174 3.20954 11.4011 3.39327L17.7298 9.722C17.9135 9.90573 17.9135 10.2036 17.7298 10.3874L14.0889 14.0282L7.09486 7.03415ZM13.0283 15.0889L6.0342 8.09481L2.39333 11.7357C2.2096 11.9194 2.2096 12.2173 2.39333 12.401L6.84828 16.856H11.2612L13.0283 15.0889Z"
                        fill="currentcolor"
                      ></path></svg></button></div></div
              ><div class="rounded-[8px] bg-bg2 flex items-center gap-[12px]"
                ><div id="brush-width-slider" class="w-[180px]"
                  ><a-slider
                    class="ant-slider-lock css-mkip61 ant-slider-disabled ant-slider-horizontal"
                    :min="20"
                    :max="120"
                    :value="72"
                    disabled
                  ></a-slider></div></div></div></div
          ><button
            type="button"
            class="ant-btn css-1qi1usw ant-btn-primary !flex items-center justify-center !border-none bg-[#8A57EA] !h-[40px] gap-[8px]"
            disabled=""
            ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
              ></path></svg
            ><span>确认</span></button
          ></div
        ></div
      ></div
    ></div
  >
</template>

<script setup lang="ts">
  // 区域涂抹页面逻辑
</script>

<style scoped lang="scss">
  // 可以添加自定义样式
</style>
