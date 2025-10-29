<template>
  <div class="h-full pt-[20px]">
    <div class="relative w-full h-full flex flex-col bg-bg2 rounded-[12px] p-[8px] pb-0! select-none">
      <!-- 上传区域 -->
      <div
        class="flex-1 bg-white flex items-center justify-center rounded-[12px] cursor-pointer transition-all hover:bg-[rgba(138,87,234,0.08)] hover:border hover:border-dashed hover:border-primary"
        @click="handleUploadClick"
        @drop="handleDrop"
        @dragover="handleDragOver"
        @dragleave="handleDragLeave"
        :class="{ 'border-dashed border-primary bg-[rgba(138,87,234,0.08)]': isDragging }"
      >
        <input ref="fileInputRef" type="file" accept="image/*" class="hidden" @change="handleFileSelect" />

        <!-- 上传状态显示 -->
        <div v-if="!selectedFile" class="flex flex-col items-center text-center">
          <img
            alt="upload"
            loading="lazy"
            width="60"
            height="60"
            decoding="async"
            data-nimg="1"
            class="w-[60px]"
            style="color: transparent"
            src="@/assets/img/icons/upload.webp"
          />
          <p class="mt-[16px]! text-blackText2 text-[16px] font-medium">单击或拖动图片至此处</p>
          <p class="text-blackText3 text-[12px]">每次使用扣除 <span class="text-primary5">2</span> 高级积分</p>
        </div>

        <!-- 图片预览 -->
        <div v-else class="flex flex-col items-center">
          <img :src="previewUrl" alt="预览图片" class="max-h-64 max-w-full rounded-lg object-contain" />
        </div>
      </div>

      <!-- 示例图片 -->
      <div v-if="!selectedFile">
        <div class="pt-[16px] text-center space-x-[15px] lg:space-x-[45px]">
          <img
            alt=""
            loading="eager"
            width="236"
            height="132"
            decoding="async"
            data-nimg="1"
            class="inline-block w-[25%] max-w-[236px] rounded-[8px]"
            style="color: transparent"
            src="@/assets/img/icons/rmbg1.webp"
          />
          <img
            alt=""
            loading="lazy"
            width="86"
            height="28"
            decoding="async"
            data-nimg="1"
            class="inline-block w-[9%] max-w-[86px]"
            style="color: transparent"
            src="@/assets/img/icons/arrow-right.webp"
          />
          <img
            alt=""
            loading="eager"
            width="236"
            height="132"
            decoding="async"
            data-nimg="1"
            class="inline-block w-[25%] max-w-[236px] rounded-[8px]"
            style="color: transparent"
            src="@/assets/img/icons/rmbg2.webp"
          />
        </div>
      </div>

      <!-- 操作按钮 -->
      <div class="mt-[12px] flex justify-center">
        <div class="flex-center gap-[12px]">
          <a-button
            type="primary"
            class="ant-btn css-1qi1usw ant-btn-primary !flex items-center justify-center !border-none bg-[#8A57EA]! !h-[40px] w-full max-w-[280px] gap-[8px]"
            :disabled="!selectedFile"
            @click="handleUpload"
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
            <span>{{ uploadUrl ? '上传图片' : '确认' }}</span>
          </a-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'

  // 上传接口地址（暂时为null，后续可替换）
  const uploadUrl = ref<string | null>(null)

  // 文件相关状态
  const fileInputRef = ref<HTMLInputElement>()
  const selectedFile = ref<File | null>(null)
  const isDragging = ref(false)

  // 预览URL
  const previewUrl = computed(() => {
    if (selectedFile.value) {
      return URL.createObjectURL(selectedFile.value)
    }
    return ''
  })

  // 处理上传点击
  const handleUploadClick = () => {
    fileInputRef.value?.click()
  }

  // 处理文件选择
  const handleFileSelect = (event: Event) => {
    const target = event.target as HTMLInputElement
    const file = target.files?.[0]

    if (file && file.type.startsWith('image/')) {
      selectedFile.value = file
    } else {
      // 可以添加错误提示
      console.error('请选择有效的图片文件')
    }

    // 重置input值，允许重复选择同一文件
    target.value = ''
  }

  // 处理拖拽进入
  const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
    isDragging.value = true
  }

  // 处理拖拽离开
  const handleDragLeave = (event: DragEvent) => {
    event.preventDefault()
    isDragging.value = false
  }

  // 处理拖拽放置
  const handleDrop = (event: DragEvent) => {
    event.preventDefault()
    isDragging.value = false

    const files = event.dataTransfer?.files
    if (files && files.length > 0) {
      const file = files[0]
      if (file.type.startsWith('image/')) {
        selectedFile.value = file
      } else {
        console.error('请拖拽有效的图片文件')
      }
    }
  }

  // 格式化文件大小
  const formatFileSize = (bytes: number): string => {
    if (bytes === 0) return '0 B'

    const k = 1024
    const sizes = ['B', 'KB', 'MB', 'GB']
    const i = Math.floor(Math.log(bytes) / Math.log(k))

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i]
  }

  // 处理上传
  const handleUpload = async () => {
    if (!selectedFile.value) return

    if (!uploadUrl.value) {
      console.log('上传接口未配置，请先设置uploadUrl')
      // 这里可以添加用户提示
      return
    }

    try {
      const formData = new FormData()
      formData.append('file', selectedFile.value)

      // 这里可以添加上传逻辑
      // const response = await fetch(uploadUrl.value, {
      //   method: 'POST',
      //   body: formData
      // })

      console.log('准备上传文件:', selectedFile.value.name)
    } catch (error) {
      console.error('上传失败:', error)
    }
  }
</script>

<style scoped>
  /* 背景移除页面样式 */
</style>
