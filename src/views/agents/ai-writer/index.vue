<template>
  <div>
    <div class="mx-auto w-[750px] pb-6 pt-[120px]">
      <div class="gap-4 flex-center">
        <TitleIcon />
        <h1
          class="text-4xl font-semibold leading-[48px] text-color-text-primary-1"
          style="font-family: 'DM Sans'"
        >
          AI写作助手</h1
        >
      </div>
      <p
        class="mb-6! mt-2 text-center text-color-text-primary-3 font-normal-16"
        style="font-family: 'DM Sans'"
      >
        AI帮助您理清思路，撰写优质内容</p
      >
      <div class="h-[204px]">
        <div
          data-ext-context-menu="no"
          data-ext-inject="no"
          class="box-border flex w-[720px] flex-col gap-2 overflow-hidden rounded-3xl border border-color-grey-line2-normal bg-color-grey-layer2-normal shadow-[0px_2px_8px_0px_var(--color-shadow-overflow-2),0px_8px_24px_0px_var(--color-shadow-overflow-2),0px_16px_48px_0px_var(--color-shadow-overflow-2)] hover:border-color-grey-line2-hover focus-within:border-color-grey-line2-hover focus-within:!shadow-[0px_0px_0px_4px_var(--color-focus-gray-1)]"
        >
          <div class="m-4 mb-0">
            <textarea
              placeholder="输入一个主题开始写作"
              class="ant-input css-7l4r6d ant-input-outlined css-var-r2 ant-input-css-var custom-scrollbar !m-0 !p-0 !text-color-text-primary-1 placeholder:!text-color-text-primary-4 !max-h-[144px] !min-h-[48px] !overflow-y-auto !rounded-none !border-0 !bg-transparent !shadow-none !outline-none"
              style="resize: none; height: 22px"
            ></textarea>
          </div>
          <div class="flex gap-2 p-2.5 pt-0">
            <div
              class="relative flex h-8 w-fit items-center gap-0.5 rounded-full bg-color-grey-layer1-semitrans p-[3px]"
            >
              <div
                class="relative z-1 h-[26px] cursor-pointer select-none rounded-full px-2.5 text-sm flex-center text-color-text-primary-3 hover:bg-color-grey-fill1-hover"
              >
                <div class="flex items-center gap-2">
                  <WriteIcon />
                  <span>写作</span>
                </div>
              </div>
              <div
                class="relative z-1 h-[26px] cursor-pointer select-none rounded-full px-2.5 text-sm flex-center tab-item-active text-color-text-primary-1"
              >
                <div class="flex items-center gap-2">
                  <ChatIcon />
                  <span>聊天</span>
                </div>
              </div>
              <div
                class="pointer-events-none absolute z-0 rounded-full bg-color-grey-layer3-normal"
                style="left: 75px; top: 3px; width: 70px; height: 26px"
              ></div>
            </div>
            <div
              class="h-8 cursor-pointer select-none gap-2 rounded-full px-[14px] py-[6px] flex-center bg-color-grey-fill2-normal text-color-text-primary-3 hover:bg-color-grey-fill2-hover"
            >
              <SearchIcon />
              <span class="font-normal-14">搜索</span> </div
            ><button
              type="button"
              class="ant-btn css-7l4r6d css-var-r2 ant-btn-text ant-btn-icon-only !ms-auto !min-h-8 !min-w-8 !rounded-full !flex-center hover:opacity-80 !bg-color-glass-fill1-normal !text-color-grey-layer2-normal"
              disabled=""
              ><span class="ant-btn-icon"> <MagicWandIcon /> </span
            ></button>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full px-14">
      <div class="mx-auto min-w-[720px]">
        <div class="py-4 flex-center">
          <p class="text-[18px] font-semibold leading-5 text-color-text-primary-1">我创建的文档</p>
          <div class="ms-auto !h-8 w-[260px]">
            <a-input
              v-model:value="searchValue"
              placeholder="搜索"
              :max-length="255"
              class="!w-[260px] !rounded-full css-1p6dcus focus-within:!bg-transparent [&amp;.ant-input-outlined:hover]:bg-color-grey-fill1-hover1 css-var-R1afja"
              prefixIcon=""
            >
              <template #prefix>
                <SearchPrefixIcon width="14" height="14" class="text-color-text-primary-4" />
              </template>
            </a-input>
          </div>
        </div>
        <div
          class="grid gap-4"
          style="grid-template-columns: repeat(auto-fill, minmax(220px, 1fr))"
        >
          <div
            class="h-[250px] w-full min-w-[220px] max-w-[320px] cursor-pointer rounded-[16px] hover:shadow-[0px_4px_16px_0px_rgba(12,_13,_25,_0.03),_0px_8px_32px_0px_rgba(12,_13,_25,_0.03),_0px_16px_64px_0px_rgba(12,_13,_25,_0.03)]"
            style="opacity: 1; transform: none"
          >
            <div
              class="h-full w-full select-none flex-col gap-2 rounded-2xl px-4 pb-2 pt-4 font-semibold flex-center border-[1px] border-color-grey-line1-normal bg-color-grey-layer2-normal text-color-text-primary-3 hover:border-color-grey-line1-hover"
              style="
                box-shadow:
                  rgba(12, 13, 25, 0.02) 0px 2px 8px 0px,
                  rgba(12, 13, 25, 0.02) 0px 4px 16px 0px,
                  rgba(12, 13, 25, 0.02) 0px 8px 32px 0px;
              "
            >
              <PlusIcon />从空白页开始
            </div>
          </div>
          <div
            class="h-[250px] w-full min-w-[220px] max-w-[320px] cursor-pointer rounded-[16px] hover:shadow-[0px_4px_16px_0px_rgba(12,_13,_25,_0.03),_0px_8px_32px_0px_rgba(12,_13,_25,_0.03),_0px_16px_64px_0px_rgba(12,_13,_25,_0.03)]"
            style="opacity: 1; transform: none"
          >
            <div
              class="flex h-full w-full flex-col gap-2 rounded-2xl border-[1px] border-color-grey-line1-normal bg-color-grey-layer2-normal px-4 pb-2 pt-4 hover:border-color-grey-line1-hover"
              style="
                box-shadow:
                  rgba(12, 13, 25, 0.02) 0px 2px 8px 0px,
                  rgba(12, 13, 25, 0.02) 0px 4px 16px 0px,
                  rgba(12, 13, 25, 0.02) 0px 8px 32px 0px;
              "
            >
              <div class="line-clamp-2 break-words text-color-text-primary-1 font-medium-16"
                >未命名</div
              >
              <div
                class="line-clamp-[7] leading-[18px] text-color-text-primary-3 font-normal-12"
              ></div>
              <div class="mt-auto items-center flex-between"
                ><span class="text-center text-color-text-primary-3 font-normal-12"
                  >2025-10-22 09:59</span
                >
                <div
                  class="ant-dropdown-trigger h-[26px] w-[26px] cursor-pointer rounded-[6px] text-color-text-primary-3 flex-center hover:bg-(--color-grey-line1-normal)"
                >
                  <MenuIcon />
                </div>
              </div>
            </div>
          </div>
          <div
            class="h-[250px] w-full min-w-[220px] max-w-[320px] cursor-pointer rounded-[16px] hover:shadow-[0px_4px_16px_0px_rgba(12,_13,_25,_0.03),_0px_8px_32px_0px_rgba(12,_13,_25,_0.03),_0px_16px_64px_0px_rgba(12,_13,_25,_0.03)]"
            style="opacity: 1; transform: none"
          >
            <div
              class="flex h-full w-full flex-col gap-2 rounded-2xl border-[1px] border-color-grey-line1-normal bg-color-grey-layer2-normal px-4 pb-2 pt-4 hover:border-color-grey-line1-hover"
              style="
                box-shadow:
                  rgba(12, 13, 25, 0.02) 0px 2px 8px 0px,
                  rgba(12, 13, 25, 0.02) 0px 4px 16px 0px,
                  rgba(12, 13, 25, 0.02) 0px 8px 32px 0px;
              "
            >
              <div class="line-clamp-2 break-words text-color-text-primary-1 font-medium-16"
                >100字冷笑话集</div
              >
              <div class="line-clamp-[7] leading-[18px] text-color-text-primary-3 font-normal-12">
                有一天，一颗星星掉到了地上，于是地球人都觉得自己很幸运，因为捡到了一“星”。猫对鱼说：“我能闻到你的味道！”鱼说：“可我不会失身的。”老师问小明：“为什么作业和别人一模一样？”小明答：“因为我们有共同的理想。”有只鸭子走进超市，问老板：“有葡萄吗？”老板说没有。第二天，鸭子又问：“有葡萄吗？”老板烦了：“再问就把你的嘴钉在柜台上！”第三天鸭子来了：“有钉子吗？”老板说没有，鸭子问：“那有葡萄吗？”...
              </div>
              <div class="mt-auto items-center flex-between"
                ><span class="text-center text-color-text-primary-3 font-normal-12"
                  >2025-10-10 10:46</span
                >
                <div
                  class="ant-dropdown-trigger h-[26px] w-[26px] cursor-pointer rounded-[6px] text-color-text-primary-3 flex-center hover:bg-(--color-grey-line1-normal)"
                >
                  <MenuIcon />
                </div>
              </div>
            </div>
          </div>
          <div
            class="h-[250px] w-full min-w-[220px] max-w-[320px] cursor-pointer rounded-[16px] hover:shadow-[0px_4px_16px_0px_rgba(12,_13,_25,_0.03),_0px_8px_32px_0px_rgba(12,_13,_25,_0.03),_0px_16px_64px_0px_rgba(12,_13,_25,_0.03)]"
            style="opacity: 1; transform: none"
          >
            <div
              class="flex h-full w-full flex-col gap-2 rounded-2xl border-[1px] border-color-grey-line1-normal bg-color-grey-layer2-normal px-4 pb-2 pt-4 hover:border-color-grey-line1-hover"
              style="
                box-shadow:
                  rgba(12, 13, 25, 0.02) 0px 2px 8px 0px,
                  rgba(12, 13, 25, 0.02) 0px 4px 16px 0px,
                  rgba(12, 13, 25, 0.02) 0px 8px 32px 0px;
              "
            >
              <div class="line-clamp-2 break-words text-color-text-primary-1 font-medium-16"
                >未命名</div
              >
              <div
                class="line-clamp-[7] leading-[18px] text-color-text-primary-3 font-normal-12"
              ></div>
              <div class="mt-auto items-center flex-between"
                ><span class="text-center text-color-text-primary-3 font-normal-12"
                  >2025-10-09 15:09</span
                >
                <div
                  class="ant-dropdown-trigger h-[26px] w-[26px] cursor-pointer rounded-[6px] text-color-text-primary-3 flex-center hover:bg-(--color-grey-line1-normal)"
                >
                  <MenuIcon />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  // 导入图标组件
  import TitleIcon from './svg/TitleIcon.vue'
  import WriteIcon from './svg/WriteIcon.vue'
  import ChatIcon from './svg/ChatIcon.vue'
  import SearchIcon from './svg/SearchIcon.vue'
  import MagicWandIcon from './svg/MagicWandIcon.vue'
  import SearchPrefixIcon from './svg/SearchPrefixIcon.vue'
  import ClearIcon from './svg/ClearIcon.vue'
  import PlusIcon from './svg/PlusIcon.vue'
  import MenuIcon from './svg/MenuIcon.vue'

  // AI写作助手页面逻辑
  const searchValue = ref()
</script>

<style scoped lang="scss"></style>
