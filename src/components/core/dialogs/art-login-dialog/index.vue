<template>
  <a-modal
    v-model:visible="visible"
    title=""
    :footer="null"
    :closable="true"
    :mask-closable="true"
    width="500px"
    centered
  >
    <div class="flex justify-center flex-col w-full mt-10!"
      ><h1
        class="text-text-primary-1 text-[32px] font-semibold! mb-[8px] text-center font-poppins leading-[36px]"
        >登录</h1
      ><div class="text-[16px] leading-[20px] text-text-primary-3 text-center"
        >登录即可每天获得<div
          class="inline-block font-bold text-[18px] leading-[24px] relative text-text-primary-1"
          ><div class="absolute h-[6px] w-full bg-[#8CD5B4] bottom-[4px]"></div
          ><div class="relative">30个免费</div></div
        >积分</div
      >
      <div class="relative overflow-hidden"
        ><div class="vcomp-phone-container" v-show="showPhoneLogin"
          ><div class="vcomp-phone"
            ><div class="content h-full flex flex-col md:h-auto md:block phone-view"
              ><div class="flex flex-col flex-1"
                ><a-button
                  type="text"
                  class="back self-start gap-[4px] flex! items-center"
                  @click="showPhoneLogin = false"
                  ><LeftOutlined /><span>后退</span></a-button
                ><p>电话号码</p
                ><div class="input-container"
                  ><div class="phone-input">
                    <a-input>
                      <template #addonBefore>
                        <vue3-country-intl
                          type="phone"
                          onlyValue
                          
                          v-model="countryCode"
                        ></vue3-country-intl>
                      </template>
                    </a-input> </div
                  ><div class="code-warn"></div></div
                ><p>在这里输入您的验证码:</p
                ><div class="input-container" style="margin-bottom: 4px"
                  ><div class="f-i-center input gap-[16px]"
                    ><input
                      maxlength="6"
                      class="ant-input css-mkip61 ant-input-outlined !border-grey-line2-normal hover:!border-grey-line2-hover !rounded-[12px] focus:!border-brand-secondary-normal focus:!shadow-[0_0_0_3px_var(--sds-color-focus-primary-1)]"
                      type="text"
                      value=""
                      style="flex: 1 1 0%"
                    /><button
                      type="button"
                      class="ant-btn css-9c7804 ant-btn-primary"
                      disabled=""
                      style="width: 120px; border-radius: 12px"
                      ><span>获取代码</span></button
                    ></div
                  ><div class="code-warn"></div></div
                ><button
                  type="button"
                  class="ant-btn css-9c7804 ant-btn-primary ant-btn-block"
                  disabled=""
                  style="border-radius: 12px"
                  ><span>登 录</span></button
                ></div
              ><div class="pt-[20px] pb-[10px] text-center w-full md:hidden"
                ><div class="text-[14px] flex-center gap-[4px] text-center"
                  ><svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    height="17"
                    fill="none"
                    viewBox="0 0 17 17"
                    class="inline-block"
                  >
                    <path
                      fill="#000"
                      fill-opacity="0.96"
                      fill-rule="evenodd"
                      d="M8 .733A4.067 4.067 0 0 0 3.933 4.8v1.88c-.236.04-.456.103-.668.201a3 3 0 0 0-1.45 1.451c-.156.334-.221.691-.252 1.097-.03.394-.03.879-.03 1.48v.048c0 .602 0 1.087.03 1.481.03.405.096.762.251 1.096a3 3 0 0 0 1.451 1.452c.335.155.692.22 1.097.25.394.03.88.03 1.48.03h4.315c.602 0 1.087 0 1.481-.03.405-.03.762-.095 1.097-.25a3 3 0 0 0 1.45-1.452c.156-.334.221-.69.252-1.096.03-.394.03-.88.03-1.48v-.048c0-.602 0-1.087-.03-1.481-.03-.406-.096-.763-.251-1.097a3 3 0 0 0-1.451-1.45 2.6 2.6 0 0 0-.668-.202V4.8A4.067 4.067 0 0 0 8 .733M10.133 7.8H5.867c-.631 0-1.071 0-1.414.026-.337.026-.532.074-.68.143a1.8 1.8 0 0 0-.871.87c-.07.148-.117.343-.142.68-.026.344-.027.783-.027 1.414s0 1.071.027 1.414c.025.337.073.532.142.68a1.8 1.8 0 0 0 .87.871c.149.07.344.117.68.142.344.026.784.027 1.415.027h4.266c.631 0 1.071 0 1.414-.027.337-.025.532-.073.68-.142a1.8 1.8 0 0 0 .871-.87c.07-.149.117-.344.142-.68.026-.344.027-.784.027-1.415 0-.63 0-1.07-.027-1.414-.025-.337-.073-.532-.142-.68a1.8 1.8 0 0 0-.87-.87c-.149-.07-.344-.117-.68-.143-.344-.026-.784-.026-1.415-.026m.065-1.2h.669V4.8a2.867 2.867 0 0 0-5.734 0v1.8h5.064"
                      clip-rule="evenodd"
                    ></path>
                    <path
                      fill="#6128FF"
                      d="M12 7.458a4.542 4.542 0 1 0 0 9.084 4.542 4.542 0 0 0 0-9.084"
                    ></path>
                    <path
                      fill="#fff"
                      fill-rule="evenodd"
                      d="M14.361 10.664a.375.375 0 0 1 0 .53l-2.246 2.246a.71.71 0 0 1-1.001 0l-1.305-1.304a.375.375 0 1 1 .53-.53l1.275 1.275 2.217-2.217a.375.375 0 0 1 .53 0"
                      clip-rule="evenodd"
                    ></path></svg
                  ><span class="text-[rgba(6,8,31,0.88)]">承诺数据不外泄，无垃圾信息。</span></div
                ><div class="text-[rgba(10,13,51,0.45)] [&amp;_a]:text-[#7450FF] leading-[20px]"
                  >继续即表示您同意 <br class="dp:hidden" />
                  <a class="underline" target="_blank" href="/terms.html">使用条款</a> 和
                  <a class="underline" target="_blank" href="/privacy.html">隐私政策</a></div
                ></div
              ></div
            ></div
          ></div
        ><div class="relative w-full px-[30px] mb-[32px] mt-[32px]" v-show="!showPhoneLogin"
          ><div
            class="px-4 py-3 flex justify-center text-text-primary-1 bg-color-grey-fill2-normal rounded-[8px]"
            ><div class="flex-1 text-center"
              ><div
                class="flex justify-center items-center gap-[4px] text-[16px] font-bold leading-5"
                ><span>2025</span></div
              ><div class="text-[12px] leading-[18px] text-text-primary-2"
                >Chrome 编辑推荐</div
              ></div
            ><div class="flex-1 text-center"
              ><div
                class="flex justify-center items-center gap-[4px] text-[16px] font-bold leading-5"
                >100K+</div
              ><div class="text-[12px] leading-[18px] text-text-primary-2">5星好评</div></div
            ><div class="flex-1 text-center"
              ><div
                class="flex justify-center items-center gap-[4px] text-[16px] font-bold leading-5"
                >10M+</div
              ><div class="text-[12px] leading-[18px] text-text-primary-2">活跃用户</div></div
            ></div
          ></div
        ><div class="px-[30px]" v-show="!showPhoneLogin"
          ><div
            class="grid gap-y-6 gap-x-3 auto-rows-[48px] font-semibold text-start items-center relative w-full"
            style="
              grid-template-columns: [main-start] 1fr [icon-start] 20px [icon-end text-start] max-content [text-end] 1fr [main-end];
              grid-auto-rows: 48px;
            "
            ><div class="col-[icon] relative z-[5] text-white"
              ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="20">
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  d="M4 2.75a2 2 0 0 1 2-2h11.25a2 2 0 0 1 2 2v18.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zM8 20.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5m2.125-19a.375.375 0 1 0 0 .75h3a.375.375 0 0 0 0-.75z"
                  clip-rule="evenodd"
                ></path></svg></div
            ><div
              class="col-[text] relative z-[5] cursor-pointer font-semibold text-[20px] text-white"
              >使用手机登录</div
            >
            <div class="w-full h-full relative z-10"></div
            ><div
              @click="handlePhoneLogin"
              class="col-[main] absolute inset-0 border border-[rgba(114,118,139,.32)] rounded-[12px] transition-colors cursor-pointer text-white bg-brand-primary-normal hover:bg-brand-primary-hover"
              style="grid-row: 1 / span 1"
              ><div class="w-full h-full relative z-10"></div></div
            ><div class="col-[icon] relative z-[5]"
              ><img width="20" alt="" src="/src/assets/icons/google.svg" /></div
            ><div
              class="col-[text] relative z-[5] cursor-pointer font-semibold text-[20px] text-[#000000D1]"
              >使用Google登录</div
            ><div
              class="col-[main] absolute inset-0 border border-[rgba(114,118,139,.32)] rounded-[12px] transition-colors cursor-pointer hover:bg-[#00000008] text-[#000000D1] bg-transparent"
              style="grid-row: 2 / span 1"
              ><div class="w-full h-full relative z-10"></div></div
            ><div class="col-[icon] relative z-[5]"
              ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="20">
                <path
                  fill="currentColor"
                  d="M18.455 12.655c-.011-1.886.843-3.307 2.568-4.354-.965-1.382-2.424-2.143-4.348-2.29-1.822-.143-3.815 1.062-4.545 1.062-.771 0-2.535-1.011-3.923-1.011C5.344 6.106 2.3 8.345 2.3 12.9q0 2.02.738 4.168c.658 1.886 3.03 6.505 5.504 6.43 1.294-.03 2.209-.918 3.892-.918 1.634 0 2.48.918 3.923.918 2.496-.036 4.641-4.235 5.266-6.126-3.348-1.578-3.168-4.622-3.168-4.718"
                ></path>
                <path
                  fill="currentColor"
                  d="M15.549 4.224C16.95 2.559 16.823 1.044 16.78.5c-1.238.072-2.67.843-3.485 1.791-.899 1.018-1.427 2.275-1.313 3.693 1.337.103 2.56-.586 3.566-1.76"
                ></path></svg></div
            ><div
              class="col-[text] relative z-[5] cursor-pointer font-semibold text-[20px] text-[#000000D1]"
              >使用Apple登录</div
            ><div
              class="col-[main] absolute inset-0 border border-[rgba(114,118,139,.32)] rounded-[12px] transition-colors cursor-pointer hover:bg-[#00000008] text-[#000000D1] bg-transparent"
              style="grid-row: 3 / span 1"
              ><div class="w-full h-full relative z-10"></div></div></div></div
        ><div class="text-center mt-[40px] leading-5"
          >还没有账号？
          <button
            class="inline-block cursor-pointer font-[700] text-[#7450FF]! bg-transparent border-none p-0 m-0 outline-none"
            >创建一个帐户</button
          ></div
        ></div
      ><div
        class="mt-[40px] py-[16px] text-center text-color-text-primary-4! bg-color-grey-fill2-normal w-full mb:px-[12px]"
        ><div class="text-[14px] flex-center gap-[4px] text-center"
          ><svg
            xmlns="http://www.w3.org/2000/svg"
            width="17"
            height="17"
            fill="none"
            viewBox="0 0 17 17"
          >
            <path
              fill="#0A0D33"
              fill-opacity="0.45"
              fill-rule="evenodd"
              d="M8 .734a4.067 4.067 0 0 0-4.067 4.067v1.88c-.236.04-.456.103-.668.201a3 3 0 0 0-1.45 1.451c-.156.334-.221.691-.252 1.097-.03.394-.03.879-.03 1.48v.048c0 .602 0 1.087.03 1.481.03.405.096.762.251 1.097a3 3 0 0 0 1.451 1.45c.334.156.692.221 1.097.252.394.03.88.03 1.48.03h4.315c.602 0 1.087 0 1.48-.03.406-.03.763-.096 1.097-.251a3 3 0 0 0 1.451-1.451c.156-.335.221-.692.252-1.097.03-.394.03-.88.03-1.48v-.048c0-.602 0-1.087-.03-1.481-.031-.406-.096-.763-.252-1.097a3 3 0 0 0-1.45-1.45 2.6 2.6 0 0 0-.668-.202v-1.88A4.067 4.067 0 0 0 8 .734m2.133 7.067H5.867c-.631 0-1.071 0-1.414.026-.338.026-.532.074-.68.143a1.8 1.8 0 0 0-.871.87c-.07.148-.117.343-.142.68-.026.344-.027.783-.027 1.414s0 1.071.027 1.414c.025.337.073.532.142.68a1.8 1.8 0 0 0 .87.871c.149.07.344.117.68.142.344.026.784.027 1.415.027h4.266c.631 0 1.071 0 1.414-.027.337-.025.532-.073.68-.142a1.8 1.8 0 0 0 .87-.87c.07-.149.118-.344.143-.68.026-.344.027-.784.027-1.415 0-.63 0-1.07-.027-1.414-.025-.337-.073-.532-.142-.68a1.8 1.8 0 0 0-.87-.87c-.149-.07-.344-.117-.68-.143-.344-.026-.784-.026-1.415-.026m.065-1.2h.668v-1.8a2.867 2.867 0 1 0-5.733 0v1.8h5.064"
              clip-rule="evenodd"
            ></path>
            <path
              fill="#787A94"
              d="M12 7.457a4.542 4.542 0 1 0 0 9.083 4.542 4.542 0 0 0 0-9.083"
            ></path>
            <path
              fill="#fff"
              fill-rule="evenodd"
              d="M14.361 10.665a.375.375 0 0 1 0 .53l-2.246 2.246a.71.71 0 0 1-1.001 0l-1.305-1.305a.375.375 0 0 1 .53-.53l1.275 1.275 2.217-2.216a.375.375 0 0 1 .53 0"
              clip-rule="evenodd"
            ></path></svg
          ><span>承诺数据不外泄，无垃圾信息。</span></div
        ><div class="[&amp;_a]:text-color-text-primary-4! leading-[20px]"
          >继续即表示您同意 <br class="dp:hidden" />
          <a class="underline" target="_blank" href="/terms.html">使用条款</a> 和
          <a class="underline" target="_blank" href="/privacy.html">隐私政策</a></div
        ></div
      ></div
    >
  </a-modal>
</template>

<script setup lang="ts">
  import { ref, h } from 'vue'
  import { Modal as AModal, Button as AButton, Input as AInput } from 'ant-design-vue'
  import { LeftOutlined } from '@ant-design/icons-vue'
  import Vue3CountryIntl from 'vue3-country-intl'
  // 引入css
  import 'vue3-country-intl/lib/vue3-country-intl.css'

  // 弹窗显示状态
  const visible = ref(false)
  const showPhoneLogin = ref(false)

  const countryCode = ref(86)

  // 打开弹窗
  const open = () => {
    visible.value = true
  }

  // 关闭弹窗
  const close = () => {
    visible.value = false
    showPhoneLogin.value = false
  }

  // 手机登录处理
  const handlePhoneLogin = () => {
    console.log(showPhoneLogin.value)
    showPhoneLogin.value = true
  }

  // 暴露API给外部使用
  defineExpose({
    open,
    close,
    visible
  })
</script>

<style scoped lang="scss">
  .vcomp-phone .back {
    margin-bottom: 24px;
    //margin-left: -24px;
    color: rgba(0, 0, 0, 0.65);
    line-height: 20px;
    cursor: pointer;
  }

  .vcomp-phone button.ant-btn {
    height: 40px;
  }

  .phone-input .country-intl-input-wrap {
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    background-color: var(--sds-color-grey-fill2-normal);
    border-radius: 12px 0 0 12px;
    border-right: 1px solid var(--sds-color-grey-line2-normal);
    color: var(--sds-color-text-primary-3);
  }
</style>
