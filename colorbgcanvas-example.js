// colorbgcanvas 波浪动画效果实现（简化版，确保效果明显）
export class ColorBgCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    this.ctx = this.canvas.getContext('2d');
    this.resizeObserver = null;
    this.animationId = null;
    
    // 背景图片
    this.backgroundImage = null;
    this.imageLoaded = false;
    this.imagePath = '/src/assets/img/home_bg1.png';
    this.fallbackColor = '#4a90e2'; // 蓝色背景，模拟水的颜色
    
    // 波浪动画参数 - 支持多方向和独立运动
    this.baseWaveSpeed = 0.01; // 基础波浪速度
    this.slowWaveSpeed = this.baseWaveSpeed * 0.3; // 慢速波浪速度
    this.waveAmplitude = 940; // 波浪振幅
    this.waveFrequency = 0.2; // 波浪频率
    // 波浪层数
    this.waveCount = 5;
    // 为每个波浪层存储独立参数
    this.waveLayers = [];
    // 速度变化控制
    this.animationStartTime = null; // 动画开始时间
    this.cycleDuration = 6000; // 整个循环的持续时间（毫秒）
    this.slowdownDuration = 3000; // 减速阶段持续时间（毫秒）
    
    if (!this.canvas) {
      console.error(`Canvas element with id '${canvasId}' not found`);
      return;
    }
    
    this.init();
  }
  

  
  async init() {
    this.setupCanvas();
    await this.loadBackgroundImage();
    this.initializeWaveLayers(); // 初始化波浪层参数
    this.startAnimation();
    this.setupResize();
  }
  
  // 初始化每个波浪层的独立参数
  initializeWaveLayers() {
    this.waveLayers = [];
    for (let i = 0; i < this.waveCount; i++) {
      // 生成随机的角度（0到2π）
      const angle = Math.random() * Math.PI * 2;
      // 生成随机的基础相位偏移（-π到π）
      const basePhase = (Math.random() - 0.5) * Math.PI * 2;
      // 生成随机的速度系数（0.8到1.2之间）
      const speedFactor = 0.8 + Math.random() * 0.4;
      // 存储每个波浪层的独立参数
      this.waveLayers.push({
        direction: {
          x: Math.cos(angle), // x方向分量
          y: Math.sin(angle)  // y方向分量
        },
        phase: basePhase, // 独立相位
        speedFactor: speedFactor, // 速度系数（使每个波浪速度略有不同）
        amplitudeFactor: 1 - i * 0.1, // 振幅系数（内层波浪振幅较小）
        opacity: 0.3 + (0.7 * (1 - i * 0.1)) // 透明度（内层波浪更透明）
      });
    }
  }
  
  setupCanvas() {
    this.resizeCanvas();
  }
  
  resizeCanvas() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }
  
  setupResize() {
    this.resizeObserver = new ResizeObserver(() => {
      this.resizeCanvas();
    });
    
    this.resizeObserver.observe(this.canvas);
  }
  
  // 加载背景图片
  async loadBackgroundImage() {
    return new Promise((resolve) => {
      this.backgroundImage = new Image();
      console.log(`Attempting to load image from: ${this.imagePath}`);
      
      // 尝试使用相对路径（考虑到可能在不同环境中的加载问题）
      try {
        // 先尝试原始路径
        this.backgroundImage.src = this.imagePath;
      } catch (error) {
        console.error('Error setting image source:', error);
      }
      
      this.backgroundImage.onload = () => {
        this.imageLoaded = true;
        console.log('Background image loaded successfully');
        resolve();
      };
      
      this.backgroundImage.onerror = () => {
        console.error(`Failed to load background image: ${this.imagePath}`);
        // 尝试另一种路径格式
        const altPath = '/assets/img/home_bg1.png';
        console.log(`Attempting alternative path: ${altPath}`);
        try {
          this.backgroundImage.src = altPath;
        } catch (error) {
          console.error('Error setting alternative image source:', error);
          resolve();
        }
        
        this.backgroundImage.onload = () => {
          this.imageLoaded = true;
          console.log('Background image loaded with alternative path');
          resolve();
        };
        
        this.backgroundImage.onerror = () => {
          console.error('Failed to load background image with all paths');
          // 如果所有路径都失败，继续使用默认的蓝色背景
          console.log('Using default blue background for wave animation');
          resolve();
        };
      };
    });
  }
  
  // 绘制波浪效果 - 支持多方向和每个波浪独立运动
  draw() {
    // 即使图片未加载，也绘制一个背景色，避免白屏
    this.ctx.fillStyle = this.fallbackColor;
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    if (!this.imageLoaded) {
      // 如果图片未加载，绘制简单的波浪动画
      this.drawSimpleWaveAnimation();
      return;
    }
    
    // 清除画布
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // 计算图片的缩放和居中位置
    // 增加缩放比例以避免显示图片边缘（添加额外的20%缩放）
    const imgWidth = this.backgroundImage.width;
    const imgHeight = this.backgroundImage.height;
    const baseScale = Math.max(
      this.canvas.width / imgWidth,
      this.canvas.height / imgHeight
    );
    // 增加额外的缩放因子，确保图片足够大，不会看到边缘
    const scale = baseScale * 1.2;
    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const baseOffsetX = (this.canvas.width - drawWidth) / 2;
    const baseOffsetY = (this.canvas.height - drawHeight) / 2;
    
    // 实现每个波浪层独立运动的效果
    // 绘制多个叠加的图片，每个图片使用独立的相位和方向
    for (let i = 0; i < this.waveLayers.length; i++) {
      const layer = this.waveLayers[i];
      
      // 根据每个波浪层的独立相位和振幅计算偏移值
      const offsetValue = Math.sin(layer.phase) * this.waveAmplitude * layer.amplitudeFactor;
      
      // 使用每个波浪层的独立方向向量计算X和Y方向的偏移
      const offsetX = offsetValue * layer.direction.x;
      const offsetY = offsetValue * layer.direction.y;
      
      // 设置透明度，使用每个波浪层的独立透明度值
      this.ctx.globalAlpha = layer.opacity;
      
      // 绘制带有偏移的图片
      this.ctx.drawImage(
        this.backgroundImage,
        0, 0,
        imgWidth, imgHeight,
        baseOffsetX + offsetX, baseOffsetY + offsetY,
        drawWidth, drawHeight
      );
    }
    
    // 重置透明度
    this.ctx.globalAlpha = 1.0;
  }
  
  // 当图片未加载时，绘制简单的波浪动画（支持多方向和独立运动）
  drawSimpleWaveAnimation() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // 为简单波浪创建临时的独立相位（简化版，实际图片波浪使用更完整的独立相位系统）
    const simpleWaveLayers = [
      { phase: 0, speedFactor: 1.0, color: '#87CEEB', opacity: 0.7 },
      { phase: Math.PI, speedFactor: 0.8, color: '#4682B4', opacity: 0.5 },
      { phase: Math.PI/2, speedFactor: 1.2, color: '#1E90FF', opacity: 0.3 }
    ];
    
    // 绘制多层波浪形状
    for (let i = 0; i < simpleWaveLayers.length; i++) {
      const layer = simpleWaveLayers[i];
      this.ctx.beginPath();
      
      // 设置波浪颜色和透明度
      this.ctx.fillStyle = layer.color;
      this.ctx.globalAlpha = layer.opacity;
      
      // 计算当前的基础速度乘数（与主波浪动画同步的快—慢——快效果）
      let baseSpeedMultiplier = 1;
      if (this.animationStartTime) {
        const currentTime = performance.now();
        const timeElapsed = currentTime - this.animationStartTime;
        const cyclePosition = (timeElapsed % this.cycleDuration) / this.cycleDuration;
        
        if (cyclePosition < this.slowdownDuration / this.cycleDuration) {
          const progress = cyclePosition / (this.slowdownDuration / this.cycleDuration);
          baseSpeedMultiplier = 1 - (1 - (this.slowWaveSpeed / this.baseWaveSpeed)) * progress;
        } else {
          const progress = (cyclePosition - this.slowdownDuration / this.cycleDuration) / (1 - this.slowdownDuration / this.cycleDuration);
          baseSpeedMultiplier = (this.slowWaveSpeed / this.baseWaveSpeed) + (1 - (this.slowWaveSpeed / this.baseWaveSpeed)) * progress;
        }
      }
      
      // 为当前波浪层计算相位
      const currentPhase = this.baseWaveSpeed * 100 * baseSpeedMultiplier * layer.speedFactor * this.animationStartTime ? (performance.now() - this.animationStartTime) * 0.001 : 0 + layer.phase;
      
      // 绘制波浪曲线，增加Y方向的波浪效果
      for (let x = 0; x <= this.canvas.width; x += 5) {
        // X方向波浪
        const y1 = Math.sin(x * 0.01 + currentPhase * (1 + i * 0.2)) * 30 * (1 - i * 0.2);
        // Y方向波浪（使用不同频率和振幅）
        const y2 = Math.sin(currentPhase * 0.5 + i * 0.3) * 15;
        const y = y1 + y2 + this.canvas.height / 2;
        
        if (x === 0) {
          this.ctx.moveTo(x, y);
        } else {
          this.ctx.lineTo(x, y);
        }
      }
      
      // 闭合路径并填充
      this.ctx.lineTo(this.canvas.width, this.canvas.height);
      this.ctx.lineTo(0, this.canvas.height);
      this.ctx.closePath();
      this.ctx.fill();
    }
    
    // 重置透明度
    this.ctx.globalAlpha = 1.0;
  }
  
  // 更新动画状态 - 支持每个波浪层独立运动
  update() {
    // 初始化动画开始时间
    if (!this.animationStartTime) {
      this.animationStartTime = performance.now();
    }
    
    // 计算当前时间相对于动画开始的偏移量
    const currentTime = performance.now();
    const timeElapsed = currentTime - this.animationStartTime;
    
    // 计算当前在循环中的位置（0到1之间）
    const cyclePosition = (timeElapsed % this.cycleDuration) / this.cycleDuration;
    
    // 根据循环位置计算当前的基础速度乘数：快—慢——快
    let baseSpeedMultiplier = 1;
    if (cyclePosition < this.slowdownDuration / this.cycleDuration) {
      // 第一阶段：从正常速度逐渐减速到慢速
      const progress = cyclePosition / (this.slowdownDuration / this.cycleDuration);
      baseSpeedMultiplier = 1 - (1 - (this.slowWaveSpeed / this.baseWaveSpeed)) * progress;
    } else {
      // 第二阶段：从慢速逐渐恢复到正常速度
      const progress = (cyclePosition - this.slowdownDuration / this.cycleDuration) / (1 - this.slowdownDuration / this.cycleDuration);
      baseSpeedMultiplier = (this.slowWaveSpeed / this.baseWaveSpeed) + (1 - (this.slowWaveSpeed / this.baseWaveSpeed)) * progress;
    }
    
    // 为每个波浪层更新独立的相位
    for (let i = 0; i < this.waveLayers.length; i++) {
      const layer = this.waveLayers[i];
      // 每个波浪层使用自己的速度系数和全局的基础速度乘数
      const layerSpeed = this.baseWaveSpeed * layer.speedFactor * baseSpeedMultiplier;
      // 更新每个波浪层的独立相位
      layer.phase += layerSpeed;
    }
    
    // 绘制当前帧
    this.draw();
    
    // 继续下一帧
    this.animationId = requestAnimationFrame(() => this.update());
  }
  
  // 使用requestAnimationFrame实现动画循环
  startAnimation() {
    this.stopAnimation(); // 确保没有其他动画运行
    
    // 绘制第一帧，避免初始白屏
    this.draw();
    
    // 启动动画循环
    this.animationId = requestAnimationFrame(() => this.update());
  }
  
  stopAnimation() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    // 重置动画开始时间，确保下次启动时重新开始循环
    this.animationStartTime = null;
  }
  
  destroy() {
    this.stopAnimation();
    if (this.resizeObserver) {
      this.resizeObserver.unobserve(this.canvas);
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
}

// 保留原有的自动初始化逻辑，以支持直接引用此文件的情况
if (typeof window !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      if (document.getElementById('colorbgcanvas')) {
        new ColorBgCanvas('colorbgcanvas');
      }
    });
  } else {
    if (document.getElementById('colorbgcanvas')) {
      new ColorBgCanvas('colorbgcanvas');
    }
  }
}