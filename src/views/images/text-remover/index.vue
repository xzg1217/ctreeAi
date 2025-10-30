<template>
  <div class="h-full flex flex-col">
    <div class="flex-1 flex flex-col w-full max-w-[1414px] mx-auto p-[20px_20px_16px]">
      <div class="relative w-full flex-1">
        <div class="relative w-full h-full flex flex-col bg-bg2 rounded-[12px] p-[8px] select-none">
          <!-- 上传区域 -->
          <div
            class="flex-1 flex items-center justify-center rounded-[12px] cursor-pointer transition-all"
            :class="{
              'hover:bg-[rgba(138,87,234,0.08)] hover:border hover:border-dashed hover:border-primary': !selectedFile,
              'border-2 border-dashed border-primary bg-[rgba(138,87,234,0.08)]': isDragging
            }"
            @click="handleUploadClick"
            @drop="handleDrop"
            @dragover="handleDragOver"
            @dragleave="handleDragLeave"
          >
            <!-- 隐藏的文件输入 -->
            <input ref="fileInputRef" type="file" accept="image/*" class="hidden" @change="handleFileSelect" />

            <!-- 上传提示区域 -->
            <div v-if="!selectedFile" class="flex flex-col items-center text-center">
              <img
                alt="upload"
                loading="lazy"
                width="60"
                height="60"
                decoding="async"
                class="w-[60px]"
                src="@/assets/img/icons/upload.webp"
                style="color: transparent"
              />
              <p class="mt-[16px]! text-blackText2 text-[16px] font-medium">单击或拖动图片至此处</p>
              <p class="text-blackText3 text-[12px]">每次使用扣除 <span class="text-primary5">8</span> 高级积分</p>
            </div>

            <!-- 图片预览区域 -->
            <div v-else class="flex flex-col items-center">
              <img :src="previewUrl" alt="预览图片" class="max-h-[280px] max-w-full rounded-[8px] object-contain" />
            </div>
          </div>

          <!-- 示例图片对比 -->
          <div v-if="!selectedFile">
            <div class="pt-[16px] text-center space-x-[15px] lg:space-x-[45px]">
              <img
                alt=""
                loading="eager"
                width="236"
                height="132"
                decoding="async"
                class="inline-block w-[25%] max-w-[236px] rounded-[8px]"
                src="@/assets/img/icons/rmtxt1.webp"
                style="color: transparent"
              />
              <img
                alt=""
                loading="lazy"
                width="86"
                height="28"
                decoding="async"
                class="inline-block w-[9%] max-w-[86px]"
                src="@/assets/img/icons/arrow-right.webp"
                style="color: transparent"
              />
              <img
                alt=""
                loading="eager"
                width="236"
                height="132"
                decoding="async"
                class="inline-block w-[25%] max-w-[236px] rounded-[8px]"
                src="@/assets/img/icons/rmtxt2.webp"
                style="color: transparent"
              />
            </div>
          </div>
        </div>
      </div>

      <!-- 确认按钮 -->
      <div class="mt-[12px] flex justify-center">
        <div class="flex-center gap-[12px]">
          <a-tooltip placement="topLeft" v-if="selectedFile">
            <template #title>
              <span>重新上传</span>
            </template>
            <a-button type="ghost" @click="handleReupload">
              <template #icon>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path
                    d="M16.4173 1C16.4173 0.585786 16.0815 0.25 15.6673 0.25C15.2531 0.25 14.9173 0.585786 14.9173 1V3.58333L12.334 3.58333C11.9198 3.58333 11.584 3.91912 11.584 4.33333C11.584 4.74755 11.9198 5.08333 12.334 5.08333L14.9173 5.08333V7.66667C14.9173 8.08088 15.2531 8.41667 15.6673 8.41667C16.0815 8.41667 16.4173 8.08088 16.4173 7.66667V5.08333L19.0006 5.08333C19.4149 5.08333 19.7506 4.74755 19.7506 4.33333C19.7506 3.91912 19.4149 3.58333 19.0006 3.58333L16.4173 3.58333V1Z"
                    fill="currentcolor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M7.10162 1.58333L10.0007 1.58333C10.4149 1.58333 10.7507 1.91912 10.7507 2.33333C10.7507 2.74755 10.4149 3.08333 10.0007 3.08333H7.13373C6.28136 3.08333 5.68719 3.08392 5.22461 3.12171C4.77078 3.1588 4.51003 3.22792 4.31251 3.32857C3.88914 3.54428 3.54494 3.88849 3.32922 4.31185C3.22858 4.50937 3.15945 4.77014 3.12237 5.22401C3.08457 5.68664 3.08398 6.28088 3.08398 7.13333V12.8667C3.08398 13.7191 3.08457 14.3134 3.12237 14.776C3.15945 15.2299 3.22858 15.4906 3.32922 15.6881C3.54494 16.1115 3.88914 16.4557 4.31251 16.6714C4.51002 16.7721 4.77079 16.8412 5.22466 16.8783C5.324 16.8864 5.42941 16.8928 5.54214 16.8978L10.5624 11.8776C10.9401 11.4998 11.2554 11.1846 11.534 10.9481C11.8245 10.7014 12.1242 10.4967 12.4842 10.3797C13.0365 10.2002 13.6315 10.2002 14.1838 10.3797C14.5438 10.4967 14.8434 10.7014 15.134 10.9481C15.4126 11.1846 15.7278 11.4998 16.1055 11.8775L16.9173 12.6893V10C16.9173 9.58579 17.2531 9.25 17.6673 9.25C18.0815 9.25 18.4173 9.58579 18.4173 10V12.8988C18.4173 13.4546 18.4173 13.9369 18.4035 14.3561C18.4263 14.4736 18.4209 14.5955 18.3872 14.7109C18.3833 14.775 18.3789 14.8374 18.374 14.8981C18.3293 15.4448 18.2349 15.9249 18.0086 16.3691C17.6491 17.0747 17.0754 17.6484 16.3698 18.0079C15.9256 18.2343 15.4454 18.3286 14.8988 18.3733C14.3679 18.4167 13.7123 18.4167 12.8995 18.4167H7.10186C6.28905 18.4167 5.63341 18.4167 5.10252 18.3733C4.55588 18.3286 4.07574 18.2343 3.63152 18.0079C2.92591 17.6484 2.35224 17.0747 1.99271 16.3691C1.76637 15.9249 1.67201 15.4448 1.62735 14.8981C1.58397 14.3672 1.58398 13.7116 1.58398 12.8988V7.10123C1.58398 6.2884 1.58397 5.63277 1.62735 5.10187C1.67201 4.55523 1.76637 4.07509 1.99271 3.63087C2.35224 2.92526 2.92591 2.35158 3.63152 1.99206C4.07573 1.76572 4.55584 1.67136 5.10245 1.6267C5.63332 1.58332 6.28887 1.58333 7.10162 1.58333ZM16.8792 14.7726L15.0664 12.9597C14.6616 12.555 14.3895 12.2837 14.1632 12.0916C13.9436 11.9051 13.8169 11.8377 13.7203 11.8063C13.4692 11.7247 13.1988 11.7247 12.9477 11.8063C12.851 11.8377 12.7244 11.9051 12.5047 12.0916C12.2784 12.2837 12.0063 12.555 11.6016 12.9597L7.64464 16.9167H12.8673C13.7198 16.9167 14.314 16.9161 14.7766 16.8783C15.2305 16.8412 15.4913 16.7721 15.6888 16.6714C16.1122 16.4557 16.4564 16.1115 16.6721 15.6881C16.7727 15.4906 16.8419 15.2299 16.8789 14.776C16.879 14.7748 16.8791 14.7737 16.8792 14.7726Z"
                    fill="currentcolor"
                  ></path>
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M4.58398 7.66667C4.58398 5.96379 5.96444 4.58333 7.66732 4.58333C9.37019 4.58333 10.7506 5.96379 10.7506 7.66667C10.7506 9.36954 9.37019 10.75 7.66732 10.75C5.96444 10.75 4.58398 9.36954 4.58398 7.66667ZM7.66732 6.08333C6.79287 6.08333 6.08398 6.79222 6.08398 7.66667C6.08398 8.54112 6.79287 9.25 7.66732 9.25C8.54177 9.25 9.25065 8.54112 9.25065 7.66667C9.25065 6.79222 8.54177 6.08333 7.66732 6.08333Z"
                    fill="currentcolor"
                  ></path>
                </svg>
              </template>
            </a-button>
          </a-tooltip>
          <a-button
            type="primary"
            class="!flex items-center justify-center !border-none !h-[40px] w-full max-w-[280px] gap-[8px]"
            :class="{ 'bg-[#8A57EA]': !isButtonDisabled, 'bg-[#DCCDF9]': isButtonDisabled }"
            :disabled="isButtonDisabled"
            @click="handleConfirm"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5.00002 11.062L6.11385 13.8862L8.93802 15L6.11385 16.1139L5.00002 18.938L3.88618 16.1139L1.06201 15L3.88618 13.8862L5.00002 11.062Z"
                fill="currentcolor"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.0833 1.19189L14.2042 6.21244L19.2248 8.33334L14.2042 10.4542L12.0833 15.4748L9.96244 10.4542L4.94189 8.33334L9.96244 6.21244L12.0833 1.19189ZM12.0833 5.47478L11.2344 7.48439L9.22478 8.33334L11.2344 9.18229L12.0833 11.1919L12.9323 9.18229L14.9419 8.33334L12.9323 7.48439L12.0833 5.47478Z"
                fill="currentcolor"
              />
            </svg>
            <span>{{ selectedFile ? '确认' : '请选择图片' }}</span>
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed, onUnmounted } from 'vue'

  // 上传接口地址（后续可配置）
  const uploadUrl = ref<string | null>(null)

  // 文件相关状态
  const fileInputRef = ref<HTMLInputElement>()
  const selectedFile = ref<File | null>(null)
  const previewUrl = ref<string>('')
  const isDragging = ref<boolean>(false)

  // 计算按钮禁用状态
  const isButtonDisabled = computed(() => !selectedFile.value || !uploadUrl.value)

  // 处理上传点击
  const handleUploadClick = () => {
    if (!selectedFile.value) {
      fileInputRef.value?.click()
    }
  }

  // 处理文件选择
  const handleFileSelect = (event: Event) => {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]

    if (file && file.type.startsWith('image/')) {
      selectedFile.value = file
      previewUrl.value = URL.createObjectURL(file)
    }

    // 重置input值，允许选择同一文件
    target.value = ''
  }

  // 处理拖拽事件
  const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
    isDragging.value = true
  }

  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault()
    isDragging.value = false
  }

  const handleDrop = (event: DragEvent) => {
    event.preventDefault()
    isDragging.value = false

    const files = event.dataTransfer?.files
    if (files && files.length > 0) {
      const file = files[0]
      if (file.type.startsWith('image/')) {
        selectedFile.value = file
        previewUrl.value = URL.createObjectURL(file)
      }
    }
  }

  // 处理重新上传
  const handleReupload = () => {
    // 清理预览URL
    if (previewUrl.value) {
      URL.revokeObjectURL(previewUrl.value)
    }
    // 重置文件状态
    selectedFile.value = null
    previewUrl.value = ''
    // 触发文件选择
    fileInputRef.value?.click()
  }

  // 处理确认操作
  const handleConfirm = async () => {
    if (!selectedFile.value || !uploadUrl.value) {
      console.log('请先选择图片或配置上传接口')
      return
    }

    try {
      const formData = new FormData()
      formData.append('image', selectedFile.value)

      // 这里可以添加上传逻辑
      console.log('开始上传图片:', selectedFile.value.name)
      console.log('上传地址:', uploadUrl.value)

      // 模拟上传过程
      // const response = await fetch(uploadUrl.value, {
      //   method: 'POST',
      //   body: formData
      // })

      // if (response.ok) {
      //   console.log('上传成功')
      // } else {
      //   console.log('上传失败')
      // }
    } catch (error) {
      console.error('上传出错:', error)
    }
  }

  // 清理预览URL
  onUnmounted(() => {
    if (previewUrl.value) {
      URL.revokeObjectURL(previewUrl.value)
    }
  })
</script>

<style scoped lang="scss">
  // 可以添加自定义样式
</style>
