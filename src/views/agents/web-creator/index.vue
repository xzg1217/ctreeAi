<template>
  <div>
    <div class="flex h-[500px] flex-col items-center px-5 pb-6 pt-[120px]">
      <div class="flex w-fit items-center gap-4">
        <WebCreatorIcon className="text-color-text-primary-1" />
        <span class="text-[36px] font-[500] leading-[48px] text-color-text-primary-1"
          >网页创建者</span
        >
      </div>
      <div class="mb-6 mt-2 max-w-[750px] text-center text-base text-color-text-primary-3"
        >只需与AI聊天，即可快速生成精美网页</div
      >
      <div class="w-full">
        <div
          class="mx-auto flex max-w-[720px] cursor-text flex-col gap-2 rounded-[24px] border border-solid border-color-grey-line2-normal bg-color-grey-layer2-normal shadow-[0px_2px_8px_0px_var(--color-shadow-overflow-2),0px_8px_24px_0px_var(--color-shadow-overflow-2),0px_16px_48px_0px_var(--color-shadow-overflow-2)] transition-colors hover:border-color-grey-line2-hover"
        >
          <div>
            <div class="mb-3"></div>
            <div class="px-4">
              <textarea
                maxlength="10000"
                class="cus-scrollbar leading-[24px]placeholder:!text-color-text-primary-4 rounded-none p-0 text-base min-h-[48px] max-h-[144px] w-full resize-none border-none outline-none bg-transparent text-color-text-primary-1"
                placeholder="今天你想创建什么？"
                data-ext-inject="no"
              ></textarea>
            </div>
          </div>
          <div class="flex items-center justify-between px-2 pb-2">
            <div class="flex items-center gap-2">
              <button
                class="ant-dropdown-trigger flex h-8 cursor-pointer items-center gap-[7px] rounded-full border-none bg-color-grey-fill2-normal pe-[11px] ps-[7px] text-sm leading-5 text-color-text-primary-1 outline-none hover:bg-color-grey-fill2-hover"
              >
                <BasicIcon />
                基础
                <DropdownArrowIcon width="10" height="10" className="transition-all" />
              </button>
              <div class="flex items-center gap-2">
                <div>
                  <div
                    class="flex h-8 cursor-pointer items-center gap-2 rounded-full border border-solid border-color-grey-line2-normal px-[14px] text-color-text-primary-3 transition-colors hover:border-color-grey-line2-hover hover:bg-color-grey-fill1-hover"
                  >
                    <FileIcon />
                    <span>文件</span>
                    <input
                      class="hidden"
                      multiple=""
                      accept=".pdf,.json,.html,.txt,.md,.doc,.docx,.ppt,.pptx"
                      type="file"
                    />
                  </div>
                </div>
                <div>
                  <div
                    class="flex h-8 items-center gap-2 rounded-full border border-solid border-color-grey-line2-normal px-[14px] transition-colors hover:border-color-grey-line2-hover hover:bg-color-grey-fill1-hover cursor-not-allowed !border-color-grey-line1-normal !bg-transparent text-color-text-primary-5"
                  >
                    <ImageIcon />
                    <span>图片</span>
                    <input class="hidden" multiple="" accept=".png,.jpg,.jpeg,.webp" type="file" />
                  </div>
                </div>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <button
                class="sider-btn sider-btn-round sider-btn-middle sider-btn-text sider-btn-icon-only !size-8 flex-center"
                disabled=""
              >
                <span class="sider-btn-icon">
                  <MagicWandIcon />
                </span>
              </button>
              <button
                class="sider-btn sider-btn-middle sider-btn-text sider-btn-icon-only !size-8 !rounded-full flex-center hover:opacity-80 !bg-color-glass-fill1-normal !text-color-grey-layer2-normal"
                disabled=""
              >
                <span class="sider-btn-icon">
                  <SendIcon />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div class="my-2 gap-2 flex-center">
          <span class="text-sm leading-5 text-color-text-primary-3">试试这些：</span>
          <div
            class="h-6 cursor-pointer truncate rounded bg-color-grey-fill2-normal px-2 text-xs leading-[18px] text-color-text-primary-3 flex-center hover:bg-color-grey-fill2-hover hover:text-color-text-primary-1"
          >
            餐厅网站</div
          >
          <div
            class="h-6 cursor-pointer truncate rounded bg-color-grey-fill2-normal px-2 text-xs leading-[18px] text-color-text-primary-3 flex-center hover:bg-color-grey-fill2-hover hover:text-color-text-primary-1"
          >
            旅游预订网站</div
          >
          <div
            class="h-6 cursor-pointer truncate rounded bg-color-grey-fill2-normal px-2 text-xs leading-[18px] text-color-text-primary-3 flex-center hover:bg-color-grey-fill2-hover hover:text-color-text-primary-1"
          >
            个人主页</div
          >
          <div
            class="h-6 cursor-pointer truncate rounded bg-color-grey-fill2-normal px-2 text-xs leading-[18px] text-color-text-primary-3 flex-center hover:bg-color-grey-fill2-hover hover:text-color-text-primary-1"
          >
            健身房管理系统</div
          >
        </div>
      </div>
    </div>
    <div class="pb-6">
      <div
        class="sticky end-0 start-0 top-0 flex items-center justify-between px-[56px] py-4 transition-all"
      >
        <div class="relative flex h-8 w-fit items-center gap-4 whitespace-nowrap">
          <div
            class="relative z-1 cursor-pointer select-none pb-2 pt-0.5 text-lg font-semibold leading-5 tab-item-active text-color-text-primary-1"
          >
            我的创作</div
          >
          <div
            class="relative z-1 cursor-pointer select-none pb-2 pt-0.5 text-lg font-semibold leading-5 text-color-text-primary-4 hover:text-color-text-primary-1"
          >
            社区</div
          >
          <div
            class="pointer-events-none absolute bottom-0 z-0 h-0.5 overflow-hidden rounded-full bg-color-text-primary-1"
            style="left: 18px; width: 36px"
          ></div>
        </div>

        <a-input
          v-model:value="searchValue"
          placeholder="搜索"
          :max-length="255"
          class="!w-[260px] !rounded-full css-1p6dcus focus-within:!bg-transparent [&amp;.ant-input-outlined:hover]:bg-color-grey-fill1-hover1 css-var-R1afja"
          prefixIcon=""
        >
          <template #prefix>
            <SearchIcon width="14" height="14" class="text-color-text-primary-4" />
          </template>
        </a-input>
      </div>
      <div class="px-[56px]">
        <div>
          <div
            class="grid w-full grid-cols-[repeat(auto-fill,_minmax(260px,_1fr))] gap-x-6 gap-y-8"
          >
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f794845cf3e3b3fae2c04e">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U0Y3HGY51XX/web-coder/68f78f311c8a8bace17813a5/resource/1d050282-c7c4-4ab5-a0d8-76d8d1e5e151.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >Execution Edge Timewriting Hub</span
                    ></div
                  >
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/c7809660accd420c910a216dd799a7d9-1738670567.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">User_ouriBW</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-21</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f786235cf3e3b3fae2be07">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U005HE0KOJG/web-coder/68f6ae0e126ded33f3aea300/resource/93988b3d-860d-4617-9647-0eaceb181947.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >TalentXenter: Plataforma Integral de Gestión y Analítica para Creadores
                      Digitales</span
                    ></div
                  >
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/a2725ddf88f2494dae239b79548d4f7c-1748383088.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">BI Planning</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-21</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f732c35cf3e3b3fae2b25b">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U08XH81YA9G/web-coder/68f731d3126ded33f3b040d4/resource/ff8cf369-2ff3-41d3-9348-13796be69674.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >Góc Tâm Hiếu</span
                    ></div
                  >
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/149b8d7ebd7c44e0b045cecb178cdd68-1761016329.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">Soan Truong</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-21</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f72fb85cf3e3b3fae2b1f4">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U0KAHZ09K62/web-coder/68e9f62a6b803a5b0ffc572f/resource/40939ebc-bb61-4661-ac76-fe393863dc4e.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >BitaHub——会员模块</span
                    >
                  </div>
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/e4e43c0e14d94ccf90052345562ee9be-1715649279.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">leo neo</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-21</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f726835cf3e3b3fae2b075">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U06XHN2KW0X/web-coder/68f723f0126ded33f3b0032c/resource/a189b1ea-1933-4927-85ae-38cef27567ed.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >湘江数字航道管理系统</span
                    >
                  </div>
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/default-avatar-1.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">User_2521</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-21</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f71b9d5cf3e3b3fae2af95">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U0O9H1YE8K8/web-coder/68f719d1126ded33f3afde1a/resource/9ffbdf6d-52e0-4015-8324-e6ad9d1ce7bf.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >童舞天地</span
                    >
                  </div>
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/8d65789ef1c846e7931be4afd47c8689-1729159334.jpg"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">Crixus88</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-21</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f6e1be5cf3e3b3fae2aa59">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U03VH2W623/web-coder/68f6db761c8a8bace1758657/resource/0b0b8a45-1a23-4cb7-b806-b639e20f7e69.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >Simulador de Avaliação de Risco em Saúde Mental</span
                    ></div
                  >
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/92504874e11d455d8ac2eaef5785fd28-1695868308.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">User_moDzwy</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-21</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f6d8fa5cf3e3b3fae2a99e">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U0W8HKEX6X5/web-coder/68f6d4f81c8a8bace1757716/resource/200cd196-6b09-4de0-802c-76d288baac72.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >高附加值有机分子宝库</span
                    >
                  </div>
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/default-avatar-10.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">Chemhub</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-21</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f6d6915cf3e3b3fae2a95e">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U0O9H1OEZ6/web-coder/68f5ca6807e60d14b9b5a56c/resource/317349df-c4a3-4ec3-90a2-a63791b9ef6a.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >PGCS251021S1-LG</span
                    >
                  </div>
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/default-avatar-8.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">User_8390</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-21</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f6a4285cf3e3b3fae2a64e">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U0GVH7068J6/web-coder/68f69960126ded33f3ae623e/resource/b2a72550-8018-4979-a259-01584730b50f.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >TaxiJujuy Aero</span
                    ></div
                  >
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/6ecd5654fb5a44d8bf47e144ffad0349-1745692950.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">Fabian Sanchez</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-21</span></div
                >
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f66dcf5cf3e3b3fae2a0fe">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U0NWHVLJ3N/web-coder/68f6630e07e60d14b9b8090f/resource/14e11daf-61b8-488c-9f3e-28f0db631ab9.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >助贷业务仪表盘</span
                    >
                  </div>
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/default-avatar-7.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">User_8666</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-21</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f65b225cf3e3b3fae29ed3">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U05XHAR44E1/web-coder/68f64d2107e60d14b9b7b294/resource/1c0eef84-5830-4a77-b85e-c013cd1ac6a9.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >Mapas Mentais Interativos: Atendimento e Reservas em Hotelaria</span
                    ></div
                  >
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/651819785b6b4a12b52803b2876e343e-1724959517.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">User_TbilJh</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-20</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f6426d5cf3e3b3fae29c49">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U0GVH7VELVL/web-coder/68f63e93394cd3cb541093bf/resource/fa9c2798-67dd-4822-af57-200d02e1b433.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >FluxoVisualLúdico</span
                    >
                  </div>
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/d9a7aaafb6274135b1894e28efd44561-1755611828.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">User_VhnUbm</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-20</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f622a15cf3e3b3fae298d6">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U0E5HLKGYZ4/web-coder/68f6212107e60d14b9b6eb61/resource/174c70d2-1d72-4c89-aeeb-cfcda61e8454.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >Konservasi Pantai Kembar</span
                    ></div
                  >
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/ea095ca857d8486fa2e32840300fba3c-1746237233.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">Toolify ID</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-20</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f60cc35cf3e3b3fae2973a">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U0NWHAN05KW/web-coder/68f6045507e60d14b9b67b66/resource/23fbf465-1429-4f92-8b0a-1ffb5a04d9d9.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >SSTA压力调适互动站</span
                    >
                  </div>
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/5debc3a78e944dfcae1c7053143bff74-1760516888.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">Chengjiajun</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-20</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f60c565cf3e3b3fae29729">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U005HJK4GE/web-coder/68f604ea394cd3cb540faa4d/resource/6586571d-5ac2-4390-a6d6-0f82eeac6e1a.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >GlobalBiz Navigator</span
                    ></div
                  >
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/da8c7b2357b64c4e851701d7cfb72067-1694764703.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">Aloysius Luo</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-20</span></div
                >
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f608935cf3e3b3fae296aa">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U03VHZ77Z27/web-coder/68f5f2cb07e60d14b9b6371e/resource/742ba360-15b7-40a1-be1c-8dc52585d049.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >EmlakYonetimi</span
                    >
                  </div>
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/07386f81ad7b489f81b4349ef104f0f8-1716724477.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">webchat</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-20</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f5f5685cf3e3b3fae29444">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U04XHY71LW/web-coder/68f38638394cd3cb54085678/resource/61fa4b7c-8f20-4698-ac21-e71d47f57eff.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >SmartHome Dashboard</span
                    ></div
                  >
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/cc9bb21b600c4fe0a763491eb17adbcf-1704548939.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">Papp Tamas</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-20</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f5d78c5cf3e3b3fae2903d">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U01AH8Z1K2Z/web-coder/68f5cfe6394cd3cb540ecdde/resource/81cac132-f4a2-4b1f-b994-bbbcb7c27d98.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >New Beginnings Network</span
                    ></div
                  >
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/default-avatar-6.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">Carlos Diaz</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-20</span>
                </div>
              </div>
            </div>
            <div class="group w-full"
              ><a class="group" href="/zh-CN/agents/web-creator/tpl/68f5cb375cf3e3b3fae28eb9">
                <div
                  class="relative aspect-video cursor-pointer overflow-hidden rounded-xl border border-solid border-color-grey-line1-normal"
                >
                  <img
                    class="size-full object-cover"
                    alt=""
                    src="https://pub-cdn.sider.ai/u/U0NWHYYGJG/web-coder/68f5c42d07e60d14b9b59623/resource/5dfcd9b3-5e79-436c-a059-c57377b503db.jpg"
                  />
                  <div
                    class="absolute left-0 top-0 h-full w-full opacity-0 transition-opacity will-change-[opacity] group-hover:opacity-100"
                    style="
                      background: linear-gradient(
                        180deg,
                        var(--color-text-white-5) 0%,
                        var(--color-text-black-5) 100%
                      );
                    "
                  ></div>
                </div>
              </a>
              <div class="mt-3 flex items-center gap-1">
                <div class="flex-1 overflow-hidden">
                  <div class="text-[14px] font-semibold leading-[20px] text-color-text-primary-1"
                    ><span
                      class="ant-typography ant-typography-ellipsis ant-typography-single-line ant-typography-ellipsis-single-line css-1p6dcus css-var-R1afja"
                      >智慧医疗导诊助手</span
                    >
                  </div>
                </div>
              </div>
              <div class="mt-1.5 flex items-center gap-1.5"
                ><img
                  class="size-5 shrink-0 overflow-hidden rounded-full object-cover"
                  alt="avatar"
                  src="https://chitchat-avatar.s3.amazonaws.com/a58292dc4cf24d0e8270d81d9a2a5709-1705246434.png"
                />
                <div
                  class="flex w-20 flex-1 items-center gap-1.5 text-sm leading-5 text-color-text-primary-4"
                  ><span class="truncate">王雅珊</span><span class="shrink-0">•</span
                  ><span class="shrink-0">2025-10-20</span>
                </div>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { Input } from 'ant-design-vue'
  import WebCreatorIcon from './svg/WebCreatorIcon.vue'
  import BasicIcon from './svg/BasicIcon.vue'
  import DropdownArrowIcon from './svg/DropdownArrowIcon.vue'
  import FileIcon from './svg/FileIcon.vue'
  import ImageIcon from './svg/ImageIcon.vue'
  import SearchIcon from './svg/SearchIcon.vue'
  import ClearIcon from './svg/ClearIcon.vue'
  import MagicWandIcon from './svg/MagicWandIcon.vue'
  import SendIcon from './svg/SendIcon.vue'

  // 搜索框的值
  const searchValue = ref('')
</script>

<style scoped lang="scss"></style>
