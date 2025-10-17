class BlueCloudAnimation {
  constructor(canvasId, primaryColor = '#1C4FCE', secondaryColor = '#51A2FF') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      console.error(`Canvas element with id '${canvasId}' not found`);
      return;
    }
    
    // 获取2D渲染上下文，移除willReadFrequently以提升性能
    this.ctx = this.canvas.getContext('2d');
    
    // 降低图像平滑质量以提升性能
    this.ctx.imageSmoothingEnabled = true;
    this.ctx.imageSmoothingQuality = 'medium';
    
    this.primaryColor = primaryColor;
    this.secondaryColor = secondaryColor;
    this.clouds = [];
    this.animationId = null;
    
    // 设置canvas样式为透明，以显示背景色
    this.canvas.style.backgroundColor = 'transparent';
    
    // 性能优化相关变量
    this.lastFrameTime = 0;
    this.targetFPS = 30; // 限制帧率为30fps
    this.frameInterval = 1000 / this.targetFPS;
    this.isVisible = true;
    this.isPaused = false;
    
    // 可见性检测
    this.observer = null;
    
    // resize防抖
    this.resizeTimeout = null;
    this.resizeDelay = 200;
    
    this.init();
  }
  
  init() {
    // 设置canvas尺寸
    this.resizeCanvas();
    
    // 添加防抖的resize处理
    window.addEventListener('resize', () => this.handleResize());
    
    // 创建云朵
    this.createClouds();
    
    // 添加可见性检测
    this.setupVisibilityObserver();
    
    // 开始动画
    this.animate();
  }
  
  resizeCanvas() {
    const container = this.canvas.parentElement;
    if (container) {
      // 降低DPR以减少渲染负担，最大为1.5
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      
      // 获取容器尺寸
      const containerWidth = container.clientWidth;
      const containerHeight = container.clientHeight;
      
      // 设置canvas元素尺寸
      this.canvas.width = containerWidth * dpr;
      this.canvas.height = containerHeight * dpr;
      
      // 设置canvas CSS尺寸
      this.canvas.style.width = containerWidth + 'px';
      this.canvas.style.height = containerHeight + 'px';
      
      // 缩放上下文以匹配设备像素比
      this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      
      // 重新创建云朵
      this.createClouds();
    }
  }
  
  // 防抖处理resize事件
  handleResize() {
    clearTimeout(this.resizeTimeout);
    this.resizeTimeout = setTimeout(() => {
      this.resizeCanvas();
    }, this.resizeDelay);
  }
  
  // 设置可见性检测
  setupVisibilityObserver() {
    if ('IntersectionObserver' in window) {
      this.observer = new IntersectionObserver((entries) => {
        const isVisible = entries[0].isIntersecting;
        this.isVisible = isVisible;
        
        if (isVisible && this.isPaused) {
          this.isPaused = false;
          this.animate();
        } else if (!isVisible && !this.isPaused) {
          this.isPaused = true;
          if (this.animationId) {
            cancelAnimationFrame(this.animationId);
            this.animationId = null;
          }
        }
      }, {
        threshold: 0.1 // 当10%的元素可见时触发
      });
      
      this.observer.observe(this.canvas);
    }
  }
  
  createClouds() {
    this.clouds = [];
    // 减少云朵数量以提升性能
    const cloudCount = 8;
    const containerWidth = this.canvas.clientWidth;
    const containerHeight = this.canvas.clientHeight;
    
    // 创建一个自定义分布的圆形函数
    const createCloudAt = (x, y, size, opacity, colorIndex) => {
      // 调整移动半径
      const moveRadius = size * 0.8;
      
      this.clouds.push({
        x: x,
        y: y,
        originalX: x,
        originalY: y,
        moveRadius: moveRadius,
        size: size,
        originalSize: size,
        opacity: opacity,
        originalOpacity: opacity,
        phase: Math.random() * Math.PI * 2,
        colorIndex: colorIndex
      });
    };
    
    // 在左侧创建蓝色云
    for (let i = 0; i < 3; i++) {
      const colorIndex = Math.random() > 0.4 ? 0 : 1;
      createCloudAt(
        -containerWidth * 0.1 + Math.random() * containerWidth * 0.5,
        -containerHeight * 0.1 + Math.random() * containerHeight * 1.2,
        150 + Math.random() * 150, // 减小尺寸
        0.15 + Math.random() * 0.1,
        colorIndex
      );
    }
    
    // 在右侧创建浅蓝色云
    for (let i = 0; i < 3; i++) {
      const colorIndex = Math.random() > 0.5 ? 1 : 0;
      createCloudAt(
        containerWidth * 0.6 + Math.random() * containerWidth * 0.5,
        -containerHeight * 0.1 + Math.random() * containerHeight * 1.2,
        150 + Math.random() * 150,
        0.15 + Math.random() * 0.1,
        colorIndex
      );
    }
    
    // 在中间区域添加一些混合色云
    for (let i = 0; i < 2; i++) {
      const colorIndex = Math.random() > 0.5 ? 0 : 1;
      createCloudAt(
        containerWidth * 0.2 + Math.random() * containerWidth * 0.6,
        containerHeight * 0.3 + Math.random() * containerHeight * 0.4,
        120 + Math.random() * 120, // 减小中间云朵尺寸
        0.12 + Math.random() * 0.08,
        colorIndex
      );
    }
  }
  
  drawCloud(cloud) {
    const { x, y, size, opacity, colorIndex } = cloud;
    
    // 快速检查云朵是否在可视区域内或附近，不在则跳过绘制
    const containerWidth = this.canvas.clientWidth;
    const containerHeight = this.canvas.clientHeight;
    const padding = 200; // 可视区域外的额外绘制范围
    
    if (x < -padding || x > containerWidth + padding || 
        y < -padding || y > containerHeight + padding) {
      return;
    }
    
    // 根据颜色索引选择当前云朵的颜色
    const currentColor = colorIndex === 0 ? this.primaryColor : this.secondaryColor;
    
    this.ctx.save();
    this.ctx.globalCompositeOperation = 'lighter'; // 叠加效果
    
    // 优化渲染性能，减少不必要的渐变计算
    const getColorWithOpacity = (opacityValue) => {
      const alpha = Math.min(Math.round(opacity * opacityValue * 255), 255);
      return currentColor + alpha.toString(16).padStart(2, '0');
    };
    
    // 简化渐变层次，减少色标数量
    // 合并外层和中层光晕为一层
    const outerGlow = this.ctx.createRadialGradient(
      x, y, 0,
      x, y, size * 3 // 减小光晕范围
    );
    outerGlow.addColorStop(0, getColorWithOpacity(0.5));
    outerGlow.addColorStop(0.2, getColorWithOpacity(0.3));
    outerGlow.addColorStop(0.5, getColorWithOpacity(0.15));
    outerGlow.addColorStop(0.8, getColorWithOpacity(0.05));
    outerGlow.addColorStop(1, currentColor + '00');
    
    this.ctx.fillStyle = outerGlow;
    this.ctx.beginPath();
    this.ctx.arc(x, y, size * 3, 0, Math.PI * 2);
    this.ctx.fill();
    
    // 简化内部光晕
    const innerGlow = this.ctx.createRadialGradient(
      x, y, 0,
      x, y, size
    );
    innerGlow.addColorStop(0, getColorWithOpacity(0.7));
    innerGlow.addColorStop(0.5, getColorWithOpacity(0.4));
    innerGlow.addColorStop(0.8, getColorWithOpacity(0.15));
    innerGlow.addColorStop(1, currentColor + '00');
    
    this.ctx.fillStyle = innerGlow;
    this.ctx.beginPath();
    this.ctx.arc(x, y, size, 0, Math.PI * 2);
    this.ctx.fill();
    
    this.ctx.restore();
  }
  
  updateClouds() {
    const time = Date.now() * 0.001;
    
    // 减少每次更新的计算复杂度
    this.clouds.forEach(cloud => {
      // 稍微降低移动速度以减轻计算负担
      const moveTime = time * 0.1;
      
      // 简化波形计算
      const xPhase = moveTime + cloud.phase;
      const yPhase = moveTime + cloud.phase * 1.2;
      
      // 计算新位置
      cloud.x = cloud.originalX + Math.sin(xPhase) * cloud.moveRadius;
      cloud.y = cloud.originalY + Math.cos(yPhase) * cloud.moveRadius * 0.8;
      
      // 简化呼吸效果计算
      const variation = Math.sin(time * 0.1 + cloud.phase) * 0.05 + 1;
      cloud.size = cloud.originalSize * variation;
      
      // 简化透明度变化
      const opacityVariation = Math.sin(time * 0.15 + cloud.phase * 1.1) * 0.1 + 1;
      cloud.opacity = cloud.originalOpacity * opacityVariation;
    });
  }
  
  animate(timestamp = 0) {
    // 如果暂停或不可见，不继续动画
    if (this.isPaused || !this.isVisible) {
      return;
    }
    
    // 帧率控制
    if (timestamp - this.lastFrameTime < this.frameInterval) {
      this.animationId = requestAnimationFrame((ts) => this.animate(ts));
      return;
    }
    
    this.lastFrameTime = timestamp;
    
    const containerWidth = this.canvas.clientWidth;
    const containerHeight = this.canvas.clientHeight;
    
    // 清空画布
    this.ctx.clearRect(0, 0, containerWidth, containerHeight);
    
    // 简化背景光晕效果
    this.ctx.save();
    this.ctx.globalCompositeOperation = 'lighter';
    
    // 减少光晕范围和色标数量
    const leftGlow = this.ctx.createRadialGradient(
      containerWidth * 0.15, containerHeight * 0.5, 0,
      containerWidth * 0.25, containerHeight * 0.4, containerWidth * 0.8
    );
    leftGlow.addColorStop(0, this.primaryColor + '30');
    leftGlow.addColorStop(0.5, this.primaryColor + '10');
    leftGlow.addColorStop(1, this.primaryColor + '00');
    
    this.ctx.fillStyle = leftGlow;
    this.ctx.fillRect(0, 0, containerWidth, containerHeight);
    
    const rightGlow = this.ctx.createRadialGradient(
      containerWidth * 0.85, containerHeight * 0.5, 0,
      containerWidth * 0.75, containerHeight * 0.4, containerWidth * 0.8
    );
    rightGlow.addColorStop(0, this.secondaryColor + '30');
    rightGlow.addColorStop(0.5, this.secondaryColor + '10');
    rightGlow.addColorStop(1, this.secondaryColor + '00');
    
    this.ctx.fillStyle = rightGlow;
    this.ctx.fillRect(0, 0, containerWidth, containerHeight);
    
    this.ctx.restore();
    
    // 更新云朵位置
    this.updateClouds();
    
    // 绘制可见的云朵
    this.clouds.forEach(cloud => this.drawCloud(cloud));
    
    this.animationId = requestAnimationFrame((ts) => this.animate(ts));
  }
  
  // 暂停动画
  pause() {
    if (!this.isPaused && this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
      this.isPaused = true;
    }
  }
  
  // 恢复动画
  resume() {
    if (this.isPaused) {
      this.isPaused = false;
      this.animate();
    }
  }
  
  destroy() {
    // 清理动画帧
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    
    // 清理事件监听器
    window.removeEventListener('resize', () => this.handleResize());
    
    // 清理可见性观察器
    if (this.observer) {
      this.observer.disconnect();
      this.observer = null;
    }
    
    // 清理定时器
    if (this.resizeTimeout) {
      clearTimeout(this.resizeTimeout);
      this.resizeTimeout = null;
    }
    
    // 清理云朵数据
    this.clouds = [];
  }
}

export { BlueCloudAnimation };