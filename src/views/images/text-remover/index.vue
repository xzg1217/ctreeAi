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
          <a-tooltip placement="topLeft">
            <template #title>
              <span>重新上传</span>
            </template>
            <a-button>TL</a-button>
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
