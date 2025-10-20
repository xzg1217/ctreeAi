<template>
  <div class="flex size-full flex-col overflow-hidden bg-color-grey-layer1-white"
    ><div class="custom-scrollbar h-full overflow-y-auto"
      ><div class="px-5 py-4"
        ><div class="flex-col pt-[74px] flex-center"
          ><div class="flex gap-[18px] text-color-text-primary-1"
            ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              viewBox="0 0 40 40"
            >
              <path
                fill="currentColor"
                d="M18.499 22.001a1.5 1.5 0 0 0 3 0v-9.333a1.5 1.5 0 1 0-3 0zM27.999 23.501a1.5 1.5 0 0 1-1.5-1.5v-5.333a1.5 1.5 0 1 1 3 0v5.333a1.5 1.5 0 0 1-1.5 1.5M10.499 22.001a1.5 1.5 0 0 0 3 0v-6.666a1.5 1.5 0 0 0-3 0z"
              ></path>
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M1.832 10.668a7.5 7.5 0 0 1 7.5-7.5h21.334a7.5 7.5 0 0 1 7.5 7.5v16.51a1.5 1.5 0 0 1-.167 2.99h-16.5v5h4.5a1.5 1.5 0 1 1 0 3h-12a1.5 1.5 0 0 1 0-3h4.5v-5h-16.5a1.5 1.5 0 0 1-.167-2.99zm3 0v16.5h30.334v-16.5a4.5 4.5 0 0 0-4.5-4.5H9.332a4.5 4.5 0 0 0-4.5 4.5"
                clip-rule="evenodd"
              ></path></svg
            ><span class="text-[34px] font-semibold leading-[48px] text-(--menu-text-primary-color)"
              >AI PPT</span
            ></div
          ><div class="mt-2 flex gap-5 text-sm text-color-text-primary-3"
            ><div class="flex items-center gap-1"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 60 60"
              >
                <path
                  d="M44.167 25.167a2.25 2.25 0 1 0-3.182-3.182L27.687 35.284l-7.651-7.651a2.25 2.25 0 1 0-3.182 3.182l7.828 7.828a4.25 4.25 0 0 0 6.01 0z"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M30 2.75C14.95 2.75 2.75 14.95 2.75 30S14.95 57.25 30 57.25 57.25 45.05 57.25 30 45.05 2.75 30 2.75M7.25 30C7.25 17.436 17.436 7.25 30 7.25S52.75 17.436 52.75 30 42.565 52.75 30 52.75 7.25 42.565 7.25 30"
                  clip-rule="evenodd"
                ></path></svg
              ><span class="text-sm">PPT主题深度调研</span></div
            ><div class="flex items-center gap-1"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 60 60"
              >
                <path
                  d="M44.167 25.167a2.25 2.25 0 1 0-3.182-3.182L27.687 35.284l-7.651-7.651a2.25 2.25 0 1 0-3.182 3.182l7.828 7.828a4.25 4.25 0 0 0 6.01 0z"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M30 2.75C14.95 2.75 2.75 14.95 2.75 30S14.95 57.25 30 57.25 57.25 45.05 57.25 30 45.05 2.75 30 2.75M7.25 30C7.25 17.436 17.436 7.25 30 7.25S52.75 17.436 52.75 30 42.565 52.75 30 52.75 7.25 42.565 7.25 30"
                  clip-rule="evenodd"
                ></path></svg
              ><span class="text-sm">幻灯片图文匹配</span></div
            ><div class="flex items-center gap-1"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 60 60"
              >
                <path
                  d="M44.167 25.167a2.25 2.25 0 1 0-3.182-3.182L27.687 35.284l-7.651-7.651a2.25 2.25 0 1 0-3.182 3.182l7.828 7.828a4.25 4.25 0 0 0 6.01 0z"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M30 2.75C14.95 2.75 2.75 14.95 2.75 30S14.95 57.25 30 57.25 57.25 45.05 57.25 30 45.05 2.75 30 2.75M7.25 30C7.25 17.436 17.436 7.25 30 7.25S52.75 17.436 52.75 30 42.565 52.75 30 52.75 7.25 42.565 7.25 30"
                  clip-rule="evenodd"
                ></path></svg
              ><span class="text-sm">统一风格</span></div
            ><div class="flex items-center gap-1"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                fill="currentColor"
                viewBox="0 0 60 60"
              >
                <path
                  d="M44.167 25.167a2.25 2.25 0 1 0-3.182-3.182L27.687 35.284l-7.651-7.651a2.25 2.25 0 1 0-3.182 3.182l7.828 7.828a4.25 4.25 0 0 0 6.01 0z"
                ></path>
                <path
                  fill-rule="evenodd"
                  d="M30 2.75C14.95 2.75 2.75 14.95 2.75 30S14.95 57.25 30 57.25 57.25 45.05 57.25 30 45.05 2.75 30 2.75M7.25 30C7.25 17.436 17.436 7.25 30 7.25S52.75 17.436 52.75 30 42.565 52.75 30 52.75 7.25 42.565 7.25 30"
                  clip-rule="evenodd"
                ></path></svg
              ><span class="text-sm">AI 驱动</span></div
            ></div
          ><div class="w-full mt-6"
            ><div
              class="mx-auto overflow-hidden rounded-3xl px-2 pb-2 border border-color-grey-line2-normal transition-colors hover:border-color-grey-line2-hover bg-color-grey-layer2-normal shadow-transparent cursor-text max-w-[720px] active:shadow"
              role="form"
              aria-label="Submit Input Form"
            >
              <textarea
                class="custom-scrollbar mt-3! h-auto max-h-36 w-full resize-none overflow-y-auto border-none bg-transparent px-2 pb-2 leading-6 outline-none text-[14px]!"
                placeholder="今天想创建什么 PPT?"
                aria-label="Input your text"
              ></textarea
              ><div class="flex justify-between text-[14px]"
                ><div class="flex gap-2"
                  ><button
                    class="ant-dropdown-trigger flex h-8 cursor-pointer items-center gap-[7px] rounded-full border-none bg-color-grey-fill2-normal px-[14px] text-sm leading-5 text-color-text-primary-1 outline-none hover:bg-color-grey-fill2-hover"
                    ><div class="flex items-center gap-2"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 60 60"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M11.812 30C5.16 39.687 2.943 48.905 7.019 52.98c4.076 4.077 13.294 1.86 22.981-4.792 9.687 6.651 18.905 8.869 22.981 4.793S54.84 39.687 48.188 30c6.651-9.687 8.869-18.905 4.793-22.981s-13.294-1.858-22.98 4.793C20.313 5.16 11.094 2.943 7.018 7.019c-4.075 4.076-1.858 13.294 4.793 22.98m2.85 3.836c-1.602 2.482-2.855 4.876-3.73 7.078-1.05 2.636-1.475 4.788-1.46 6.367.014 1.55.432 2.221.73 2.518.296.297.967.715 2.518.73 1.578.014 3.73-.412 6.367-1.46 2.201-.876 4.595-2.129 7.077-3.732A74 74 0 0 1 20.1 39.9a74 74 0 0 1-5.438-6.063M17.373 30a69 69 0 0 0 5.91 6.718A69 69 0 0 0 30 42.628a69 69 0 0 0 6.718-5.91A69 69 0 0 0 42.628 30a69 69 0 0 0-5.91-6.718A69 69 0 0 0 30 17.372a69 69 0 0 0-6.717 5.91A69 69 0 0 0 17.373 30m8.792-15.338A74 74 0 0 0 20.1 20.1a74 74 0 0 0-5.438 6.063c-1.603-2.481-2.856-4.875-3.732-7.077-1.048-2.636-1.474-4.788-1.46-6.367.015-1.55.434-2.221.73-2.518.297-.297.968-.715 2.519-.73 1.579-.014 3.73.411 6.367 1.46 2.201.876 4.595 2.129 7.077 3.731m7.673 0A74 74 0 0 1 39.9 20.1a74 74 0 0 1 5.438 6.063c1.602-2.481 2.855-4.875 3.73-7.077 1.05-2.636 1.475-4.788 1.46-6.367-.014-1.55-.432-2.221-.729-2.518s-.968-.715-2.518-.73c-1.58-.014-3.731.411-6.367 1.46-2.202.876-4.596 2.129-7.077 3.731m11.5 19.174A74 74 0 0 1 39.9 39.9a74 74 0 0 1-6.063 5.438c2.481 1.603 4.875 2.856 7.077 3.732 2.636 1.048 4.788 1.474 6.367 1.46 1.55-.015 2.222-.434 2.518-.73.297-.297.716-.968.73-2.518.014-1.58-.411-3.731-1.46-6.367-.876-2.202-2.129-4.596-3.731-7.078"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M34.12 30.12a4 4 0 1 1-8 0 4 4 0 0 1 8 0"></path></svg
                      ><span>深入</span></div
                    ><svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="currentColor"
                      viewBox="0 0 60 60"
                      class="transition-all text-color-text-primary-3"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M50.591 20.409a2.25 2.25 0 0 1 0 3.182L33.005 41.177a4.25 4.25 0 0 1-6.01 0L9.409 23.59a2.25 2.25 0 0 1 3.182-3.182L30 37.818l17.409-17.409a2.25 2.25 0 0 1 3.182 0"
                        clip-rule="evenodd"
                      ></path></svg></button
                  ><div class="js-clickable"
                    ><button
                      class="flex h-8 cursor-pointer items-center gap-2 rounded-full border border-solid px-3 transition-colors border-color-grey-line2-normal text-color-text-primary-3 hover:border-color-grey-line2-hover hover:bg-color-grey-fill1-hover disabled:border-color-grey-line1-normal disabled:bg-transparent disabled:text-color-text-primary-5"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 60 60"
                      >
                        <path
                          d="M32.25 9a2.25 2.25 0 0 0-4.5 0v18.75H9a2.25 2.25 0 0 0 0 4.5h18.75V51a2.25 2.25 0 0 0 4.5 0V32.25H51a2.25 2.25 0 0 0 0-4.5H32.25z"
                        ></path></svg
                      ><span>文件</span
                      ><input
                        class="hidden"
                        multiple=""
                        accept=".pdf,.json,.html,.txt,.md,.doc,.docx,.ppt,.pptx,.png,.jpg,.jpeg,.svg,.webp"
                        type="file" /></button></div
                  ><div class="js-clickable"
                    ><button
                      class="disabled:border-color-grey-line1-normal disabled:bg-transparent disabled:text-color-text-primary-5 flex h-8 cursor-pointer items-center gap-2 rounded-full border border-solid border-color-grey-line2-normal px-3 text-color-text-primary-3 transition-colors hover:border-color-grey-line2-hover hover:bg-color-grey-fill1-hover"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        fill="currentColor"
                        viewBox="0 0 60 60"
                      >
                        <path
                          d="M56.899 36.293A17.75 17.75 0 1 0 22.75 29.5a2.25 2.25 0 0 0 4.5 0A13.25 13.25 0 1 1 40.5 42.75a2.25 2.25 0 1 0 0 4.5 17.75 17.75 0 0 0 16.399-10.957"
                        ></path>
                        <path
                          d="M3.101 23.707A17.75 17.75 0 1 0 37.25 30.5a2.25 2.25 0 1 0-4.5 0A13.25 13.25 0 1 1 19.5 17.25a2.25 2.25 0 0 0 0-4.5A17.75 17.75 0 0 0 3.101 23.707"
                        ></path></svg
                      ><span>URL</span></button
                    ></div
                  ></div
                ><button
                  disabled=""
                  class="js-clickable size-[32px] rounded-full bg-color-advanced-fill-normal flex-center disabled:bg-color-glass-fill1-normal"
                  aria-label="Submit"
                  tabindex="0"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 60 60"
                    class="text-color-grey-layer2-normal"
                  >
                    <path
                      d="M12.156 54.481c2.383.59 6.646-1.232 15.172-4.875l7.802-3.335c11.93-5.098 17.894-7.647 19.702-11.234a11 11 0 0 0 0-9.9c-1.808-3.587-7.772-6.136-19.702-11.234l-7.986-3.413c-8.428-3.602-12.642-5.402-14.98-4.858a7.33 7.33 0 0 0-5.636 6.444c-.229 2.39 2.117 6.326 6.808 14.2.371.623.647 1.085.85 1.474H30a2.25 2.25 0 1 1 0 4.5H14.214c-.201.394-.475.864-.845 1.498-4.683 8.027-7.025 12.04-6.735 14.479a7.33 7.33 0 0 0 5.522 6.254"
                    ></path></svg></button></div></div
            ><div class="mt-4 flex-wrap gap-2 flex-center"
              ><span class="text-sm text-color-text-primary-3">e.g.</span
              ><span
                class="cursor-pointer rounded bg-color-grey-fill2-normal px-2 py-[3px] text-xs text-color-text-primary-3"
                >威尼斯-水城魅力</span
              ><span
                class="cursor-pointer rounded bg-color-grey-fill2-normal px-2 py-[3px] text-xs text-color-text-primary-3"
                >维也纳音乐会</span
              ><span
                class="cursor-pointer rounded bg-color-grey-fill2-normal px-2 py-[3px] text-xs text-color-text-primary-3"
                >日本旅游攻略</span
              ><span
                class="cursor-pointer rounded bg-color-grey-fill2-normal px-2 py-[3px] text-xs text-color-text-primary-3"
                >星巴克品牌营销策略</span
              ></div
            ></div
          ></div
        ></div
      ><div class="mx-14 mt-6"
        ><div class="flex gap-5 text-lg font-semibold leading-5 text-color-text-primary-4"
          ><div
            class="relative cursor-pointer py-2 pt-1 text-color-text-primary-1 after:absolute after:bottom-0 after:left-0 after:right-0 after:m-auto after:h-[2px] after:w-[10px] after:bg-color-text-primary-1"
            >模板</div
          ><div class="relative cursor-pointer py-2 pt-1">历史</div></div
        ><div class="my-3"
          ><div class="mt-4 grid grid-cols-[repeat(auto-fill,minmax(280px,1fr))] gap-4"
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="创意商务与品牌展示演示文稿"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0KAH1A86O/slides-template/images/198c64a739d88.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="企业品牌与愿景演示模板"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0KAH1A86O/slides-template/images/198c55ac610d5.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="极简黑白演示模板"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0KAH1A86O/slides-template/images/198c5596029ae.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="现代品牌指南演示模板"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0KAH1A86O/slides-template/images/198c5578cb72c.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="适用于商务的现代提案演示模板"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0D4XHXEY2/slides-template/images/198c552cd0e8f.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="嘻哈文化创意设计 — 当代街头艺术品牌视觉系统"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0D4XHXEY2/slides-template/images/198c5515c6f72.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="产品推介营销策略 - 现代商业数据分析界面设计"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0D4XHXEY2/slides-template/images/198c54e07fa2c.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="多彩渐变商务演示 —— 现代数据可视化设计作品集"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0D4XHXEY2/slides-template/images/198c54ba11a37.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="经典黑白摄影系列 - 极简演示设计模板"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0D4XHXEY2/slides-template/images/198c54a315de5.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="太阳系行星 - 科普教育移动应用界面设计"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0D4XHXEY2/slides-template/images/198c548f52f81.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="戏剧史 — 乌克兰戏剧文化数字展览设计"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0D4XHXEY2/slides-template/images/198c54786e585.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="极简美学 — 现代版面设计作品集"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0D4XHXEY2/slides-template/images/198c545a52626.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="Cosmic Finance &amp; Tech 演示文稿"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0D4XHXEY2/slides-template/images/198c1e61e3ac1.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="点燃你的创意：创新者的融资演示模板"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0D4XHXEY2/slides-template/images/198c1e5b2b932.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="充满活力且插画风的创意演示模板"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0D4XHXEY2/slides-template/images/198c1e5131914.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="奇思妙想涂鸦与插画演示模板"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0D4XHXEY2/slides-template/images/198c1e49adb12.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="创意插画风路演演示模板"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0D4XHXEY2/slides-template/images/198c1e43d7627.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="现代个人作品集演示模板"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0KAH1A86O/slides-template/images/198c1e3886bdf.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="俏皮艺术与设计项目展示模板"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0KAH1A86O/slides-template/images/198c1e3168ebc.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="成为视觉艺术家 — 设计师的全面职业发展指南"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0D4XHXEY2/slides-template/images/198c1de9f6051.png"
                  style="color: transparent" /></div></div
            ><div
              class="group max-w-[420px] overflow-hidden rounded-xl bg-grey-layer2-normal shadow-[0_0_0_1px_var(--color-grey-line2-normal)] transition-shadow hover:shadow-[0_0_0_1px_var(--color-grey-line2-normal),_0_2px_8px_0_var(--color-shadow-overflow-4),_0_4px_16px_0_var(--color-shadow-overflow-2),_0_12px_40px_0_var(--color-shadow-overflow-4)] cursor-pointer"
              ><div class="h-full overflow-hidden"
                ><img
                  alt="创意策略与移动应用展示 - 数字产品设计作品集"
                  loading="lazy"
                  width="280"
                  height="158"
                  decoding="async"
                  data-nimg="1"
                  class="h-full w-full object-cover transition-transform group-hover:scale-105"
                  src="https://pub-cdn.sider.ai/u/U0D4XHXEY2/slides-template/images/198c1ace29011.png"
                  style="color: transparent" /></div></div></div></div></div></div
  ></div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
