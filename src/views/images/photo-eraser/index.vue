<template>
  <div class="h-full flex flex-col" ref="box"
    ><div class="flex-1 flex flex-col w-full max-w-[1414px] mx-auto px-[24px] pt-[16px] pb-[12px]"
      ><div class="relative w-full flex-1"
        ><div class="relative w-full h-full flex flex-col bg-bg2 rounded-[12px] p-[8px] select-none"
          ><div
            class="flex-1 bg-white flex items-center justify-center rounded-[12px] cursor-pointer transition-all hover:bg-[rgba(138,87,234,0.08)] hover:border hover:border-dashed hover:border-primary"
            :class="{ 'bg-[rgba(138,87,234,0.08)] border border-dashed border-primary': isDragging }"
            @click="handleUploadClick"
            @dragover="handleDragOver"
            @dragleave="handleDragLeave"
            @drop="handleDrop"
          >
            <div v-if="!previewUrl" class="flex flex-col items-center text-center">
              <img
                alt="upload"
                loading="lazy"
                width="60"
                height="60"
                decoding="async"
                data-nimg="1"
                class="w-[60px]"
                src="@/assets/img/icons/upload.webp"
                style="color: transparent"
              />
              <p class="mt-[16px] text-blackText2 text-[16px] font-medium">单击或拖动图片至此处</p>
              <p class="text-blackText3 text-[12px]">每次使用扣除 <span class="text-primary5">3</span> 高级积分</p>
            </div>
            <div v-else class="relative w-full h-full flex items-center justify-center">
              <div class="relative max-w-full max-h-full w-full flex items-center justify-center">
                <canvas
                  ref="canvasRef"
                  class="max-w-full max-h-full w-full object-contain rounded-[8px] cursor-crosshair"
                  @mousedown="startDrawing"
                  @mousemove="handleMouseMove"
                  @mouseup="stopDrawing"
                  @mouseleave="stopDrawing"
                  @mouseenter="updateCursorStyle"
                  @touchstart="startDrawing"
                  @touchmove="draw"
                  @touchend="stopDrawing"
                ></canvas>
                <button
                  @click="clearPreview"
                  class="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs hover:bg-red-600"
                >
                  ×
                </button>
              </div>
            </div>
          </div>
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
            ><div class="flex items-center gap-[16px]">
              <div class="relative bg-bg2 p-[4px] rounded-[8px]"
                ><div class="absolute top-[4px] rounded-[8px] bg-white w-[32px] h-[32px] left-[4px]"></div
                ><div class="relative flex z-[1]">
                  <!-- 画笔 -->
                  <button
                    type="button"
                    @click="toggleTool('brush')"
                    :class="[
                      'flex items-center justify-center p-[6px] rounded-[8px] hover:cursor-pointer',
                      selectedTool === 'brush' ? 'bg-white text-primary' : 'bg-transparent text-blackText4'
                    ]"
                    ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.7117 2.79646C10.936 3.02961 10.153 3.38346 9.59442 3.94536C8.48782 5.0586 7.90725 6.54484 7.95522 7.96293L7.91927 7.92676L2.02575 13.2685L2.01198 13.2824C0.996052 14.3044 0.996048 15.9596 2.01198 16.9816C3.02541 18.0011 4.66729 18.0061 5.68686 16.9965L11.4742 11.751C12.0665 11.7609 12.6627 11.6544 13.1884 11.4777C14.4527 11.0526 15.8108 10.0471 15.915 8.5504C15.9635 7.85481 16.3763 6.5883 16.8274 5.40539C17.0453 4.83395 17.26 4.31209 17.4205 3.93278C17.5007 3.74334 17.567 3.58997 17.6132 3.48436C17.6363 3.43157 17.6543 3.39075 17.6664 3.36336L17.6801 3.33254L17.6842 3.32332L18.1316 2.3257L17.0402 2.26718L17 3.01611C17.0402 2.26718 17.0404 2.26719 17.0402 2.26718L17.0382 2.26708L17.0343 2.26688L17.0211 2.26623L16.9732 2.26409C16.932 2.26236 16.8726 2.26012 16.797 2.25794C16.646 2.25358 16.4303 2.24944 16.1666 2.25006C15.6407 2.25131 14.9181 2.27156 14.1362 2.34841C13.3577 2.42494 12.5001 2.55948 11.7117 2.79646ZM15.87 3.75291C15.7354 4.07943 15.5816 4.46247 15.4258 4.87096C14.989 6.01646 14.4852 7.49103 14.4187 8.44613C14.3778 9.03297 13.7601 9.70297 12.7104 10.0559C11.6693 10.4059 10.7031 10.2702 10.2493 9.8137C9.10888 8.66641 9.15376 6.51636 10.6582 5.00284C10.9616 4.69769 11.4687 4.43577 12.1434 4.23297C12.8054 4.03401 13.5585 3.91243 14.283 3.84122C14.8669 3.78382 15.4191 3.76037 15.87 3.75291ZM9.43268 11.577L4.65175 15.9103L4.63798 15.9241C4.20608 16.3586 3.50771 16.3586 3.07581 15.9241C2.64546 15.4912 2.64148 14.7899 3.06387 14.352L7.86528 10.0001L9.43268 11.577Z"
                        fill="currentcolor"
                      ></path></svg
                  ></button>
                  <!-- 橡皮擦 -->
                  <button
                    type="button"
                    @click="toggleTool('eraser')"
                    :class="[
                      'flex items-center justify-center p-[6px] rounded-[8px] hover:cursor-pointer',
                      selectedTool === 'eraser' ? 'bg-white text-primary' : 'bg-transparent text-blackText4'
                    ]"
                    ><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M1.33267 10.675C0.563151 11.4445 0.563149 12.6922 1.33267 13.4617L6.00729 18.1363C6.14794 18.277 6.33871 18.356 6.53762 18.356L11.5718 18.356C11.7707 18.356 11.9615 18.277 12.1022 18.1363L18.7905 11.448C19.56 10.6785 19.56 9.43086 18.7905 8.66134L12.4617 2.33261C11.6922 1.56309 10.4446 1.5631 9.67507 2.33262L1.33267 10.675ZM7.09486 7.03415L10.7357 3.39328C10.9195 3.20954 11.2174 3.20954 11.4011 3.39327L17.7298 9.722C17.9135 9.90573 17.9135 10.2036 17.7298 10.3874L14.0889 14.0282L7.09486 7.03415ZM13.0283 15.0889L6.0342 8.09481L2.39333 11.7357C2.2096 11.9194 2.2096 12.2173 2.39333 12.401L6.84828 16.856H11.2612L13.0283 15.0889Z"
                        fill="currentcolor"
                      ></path></svg></button></div
              ></div>
              <!-- 画笔宽度 -->
              <div class="rounded-[8px] bg-bg2 flex items-center gap-[12px]"
                ><div id="brush-width-slider" class="w-[180px]"
                  ><a-slider
                    :getTooltipPopupContainer="() => box"
                    class="ant-slider-lock css-mkip61 ant-slider-horizontal"
                    :min="20"
                    :max="120"
                    v-model:value="brushWidth"
                  ></a-slider></div></div></div></div
          ><a-button
            type="primary"
            class="!flex items-center justify-center !border-none bg-[#8A57EA] !h-[40px] gap-[8px]"
            :disabled="!previewUrl"
            @click="handleConfirm"
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
            ><span>确认</span></a-button
          ></div
        ></div
      ></div
    ></div
  >
</template>

<script setup lang="ts">
  import { ref, nextTick, onUnmounted } from 'vue'

  const box = ref()
  // 工具类型状态
  const selectedTool = ref<'brush' | 'eraser'>('brush')

  // 文件上传相关状态
  const selectedFile = ref<File | null>(null)
  const previewUrl = ref<string>('')
  const isDragging = ref(false)

  // Canvas相关状态
  const canvasRef = ref<HTMLCanvasElement | null>(null)
  const ctx = ref<CanvasRenderingContext2D | null>(null)
  const isDrawing = ref(false)
  const lastX = ref(0)
  const lastY = ref(0)
  const brushWidth = ref(60)

  // 图层相关状态
  const originalImageCanvas = ref<HTMLCanvasElement | null>(null)
  const drawingCanvas = ref<HTMLCanvasElement | null>(null)
  const drawingCtx = ref<CanvasRenderingContext2D | null>(null)

  // 切换工具函数
  const toggleTool = (tool: 'brush' | 'eraser') => {
    selectedTool.value = tool
  }

  // 处理文件选择
  const handleFileSelect = (event: Event) => {
    const input = event.target as HTMLInputElement
    if (input.files && input.files[0]) {
      processFile(input.files[0])
    }
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

    if (event.dataTransfer && event.dataTransfer.files[0]) {
      processFile(event.dataTransfer.files[0])
    }
  }

  // 处理文件上传
  const handleUploadClick = () => {
    // 如果已经有图片预览，则不触发上传
    if (previewUrl.value) return

    const fileInput = document.createElement('input')
    fileInput.type = 'file'
    fileInput.accept = 'image/*'
    fileInput.onchange = handleFileSelect
    fileInput.click()
  }

  // 处理文件
  const processFile = (file: File) => {
    // 检查文件类型
    if (!file.type.startsWith('image/')) {
      alert('请选择图片文件')
      return
    }

    selectedFile.value = file

    // 创建预览URL
    if (previewUrl.value) {
      URL.revokeObjectURL(previewUrl.value)
    }
    previewUrl.value = URL.createObjectURL(file)

    // 初始化Canvas
    nextTick(() => {
      initCanvas()
    })
  }

  // 初始化Canvas
  const initCanvas = () => {
    if (!canvasRef.value) return

    const canvas = canvasRef.value
    const container = canvas.parentElement
    if (!container) return

    const img = new Image()

    img.onload = () => {
      resizeCanvasToFit(img)

      // 添加窗口大小变化监听
      window.addEventListener('resize', handleResize)
    }

    img.src = previewUrl.value
  }

  // 调整Canvas尺寸以适应容器
  const resizeCanvasToFit = (img: HTMLImageElement) => {
    if (!canvasRef.value) return

    const canvas = canvasRef.value
    const container = canvas.parentElement
    if (!container) return

    // 计算Canvas尺寸，保持图片比例并适配容器
    const containerWidth = container.clientWidth
    const containerHeight = container.clientHeight
    const imgRatio = img.width / img.height
    const containerRatio = containerWidth / containerHeight

    let canvasWidth, canvasHeight

    if (imgRatio > containerRatio) {
      // 图片更宽，以宽度为准
      canvasWidth = containerWidth
      canvasHeight = containerWidth / imgRatio
    } else {
      // 图片更高，以高度为准
      canvasHeight = containerHeight
      canvasWidth = containerHeight * imgRatio
    }

    // 设置Canvas尺寸
    canvas.width = canvasWidth
    canvas.height = canvasHeight

    // 设置CSS尺寸
    canvas.style.width = canvasWidth + 'px'
    canvas.style.height = canvasHeight + 'px'

    ctx.value = canvas.getContext('2d')
    if (!ctx.value) return

    // 创建原始图片图层
    originalImageCanvas.value = document.createElement('canvas')
    originalImageCanvas.value.width = canvasWidth
    originalImageCanvas.value.height = canvasHeight
    const originalCtx = originalImageCanvas.value.getContext('2d')
    if (originalCtx) {
      originalCtx.drawImage(img, 0, 0, canvasWidth, canvasHeight)
    }

    // 创建画笔绘制图层
    drawingCanvas.value = document.createElement('canvas')
    drawingCanvas.value.width = canvasWidth
    drawingCanvas.value.height = canvasHeight
    drawingCtx.value = drawingCanvas.value.getContext('2d')

    // 合并图层到主Canvas
    redrawCanvas()
  }

  // 重绘Canvas（合并图层）
  const redrawCanvas = () => {
    if (!ctx.value || !originalImageCanvas.value || !drawingCanvas.value) return

    // 清空主Canvas
    ctx.value.clearRect(0, 0, canvasRef.value!.width, canvasRef.value!.height)

    // 绘制原始图片
    ctx.value.drawImage(originalImageCanvas.value, 0, 0)

    // 绘制画笔内容
    ctx.value.drawImage(drawingCanvas.value, 0, 0)
  }

  // 处理窗口大小变化
  const handleResize = () => {
    if (!previewUrl.value || !selectedFile.value) return

    // 重新处理文件以重新创建图层
    processFile(selectedFile.value)
  }

  // 鼠标移入Canvas时更新光标样式
  const updateCursorStyle = (e: MouseEvent) => {
    const canvas = canvasRef.value
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const brushSize = brushWidth.value * scaleX

    // 创建自定义光标样式
    const cursorCanvas = document.createElement('canvas')
    cursorCanvas.width = brushSize + 10
    cursorCanvas.height = brushSize + 10
    const cursorCtx = cursorCanvas.getContext('2d')

    if (cursorCtx) {
      cursorCtx.beginPath()
      cursorCtx.arc((brushSize + 10) / 2, (brushSize + 10) / 2, brushSize / 2, 0, 2 * Math.PI)

      if (selectedTool.value === 'brush') {
        cursorCtx.fillStyle = '#8A57EA'
        cursorCtx.strokeStyle = '#FFFFFF'
      } else {
        cursorCtx.fillStyle = 'rgba(255, 255, 255, 0.5)'
        cursorCtx.strokeStyle = '#8A57EA'
      }

      cursorCtx.lineWidth = 2
      cursorCtx.fill()
      cursorCtx.stroke()
    }

    canvas.style.cursor = `url(${cursorCanvas.toDataURL()}) ${(brushSize + 10) / 2} ${(brushSize + 10) / 2}, auto`
  }

  // 处理鼠标移动事件（同时更新光标和绘制）
  const handleMouseMove = (e: MouseEvent) => {
    updateCursorStyle(e)
    draw(e)
  }

  // 开始绘制
  const startDrawing = (e: MouseEvent | TouchEvent) => {
    if (!drawingCtx.value) return

    isDrawing.value = true
    const canvas = canvasRef.value!
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height

    if (e instanceof MouseEvent) {
      lastX.value = (e.clientX - rect.left) * scaleX
      lastY.value = (e.clientY - rect.top) * scaleY
    } else {
      const touch = e.touches[0]
      lastX.value = (touch.clientX - rect.left) * scaleX
      lastY.value = (touch.clientY - rect.top) * scaleY
    }
  }

  // 绘制
  const draw = (e: MouseEvent | TouchEvent) => {
    if (!isDrawing.value || !drawingCtx.value) return

    const canvas = canvasRef.value!
    const rect = canvas.getBoundingClientRect()
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height

    let currentX, currentY

    if (e instanceof MouseEvent) {
      currentX = (e.clientX - rect.left) * scaleX
      currentY = (e.clientY - rect.top) * scaleY
    } else {
      const touch = e.touches[0]
      currentX = (touch.clientX - rect.left) * scaleX
      currentY = (touch.clientY - rect.top) * scaleY
    }

    drawingCtx.value.beginPath()
    drawingCtx.value.moveTo(lastX.value, lastY.value)
    drawingCtx.value.lineTo(currentX, currentY)

    // 设置画笔样式
    if (selectedTool.value === 'brush') {
      drawingCtx.value.strokeStyle = '#8A57EA' // 画笔颜色
      drawingCtx.value.globalCompositeOperation = 'source-over'
    } else {
      drawingCtx.value.strokeStyle = '#8A57EA' // 使用画笔颜色但擦除模式
      drawingCtx.value.globalCompositeOperation = 'destination-out'
    }

    drawingCtx.value.lineWidth = brushWidth.value * scaleX
    drawingCtx.value.lineCap = 'round'
    drawingCtx.value.lineJoin = 'round'
    drawingCtx.value.stroke()

    // 更新显示
    redrawCanvas()

    lastX.value = currentX
    lastY.value = currentY
  }

  // 停止绘制
  const stopDrawing = () => {
    isDrawing.value = false
  }

  // 清理预览URL
  const clearPreview = () => {
    if (previewUrl.value) {
      URL.revokeObjectURL(previewUrl.value)
      previewUrl.value = ''
      selectedFile.value = null
    }

    // 清理图层状态
    originalImageCanvas.value = null
    drawingCanvas.value = null
    drawingCtx.value = null

    // 移除窗口大小变化监听
    window.removeEventListener('resize', handleResize)
  }

  // 确认按钮处理
  const handleConfirm = () => {
    if (!canvasRef.value || !previewUrl.value) return

    // 获取Canvas数据
    const canvas = canvasRef.value
    const dataUrl = canvas.toDataURL('image/png')

    // 这里可以添加处理逻辑，比如上传到服务器或保存到本地
    console.log('处理后的图片数据:', dataUrl)

    // 示例：下载图片
    const link = document.createElement('a')
    link.download = 'processed-image.png'
    link.href = dataUrl
    link.click()
  }

  // 组件卸载时清理
  onUnmounted(() => {
    window.removeEventListener('resize', handleResize)
  })
</script>

<style scoped lang="scss">
  // 自定义样式
  :deep(.ant-slider-track) {
    background-color: #8a57ea !important;
  }

  :deep(.ant-slider-handle) {
    border-color: #8a57ea !important;
  }

  :deep(.ant-btn-primary) {
    background-color: #8a57ea !important;
    border-color: #8a57ea !important;
  }

  :deep(.ant-btn-primary:hover) {
    background-color: #7a4cd9 !important;
    border-color: #7a4cd9 !important;
  }

  :deep(#brush-width-slider .ant-slider > .ant-slider-track) {
    height: 6px;
    border-radius: 6px;
    background-color: #8a57ea;
  }
</style>
