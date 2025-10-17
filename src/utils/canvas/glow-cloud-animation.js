class GlowCloudAnimation {
  constructor(canvasId, color = '#A088E2') {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      console.error(`Canvas element with id '${canvasId}' not found`);
      return;
    }
    
    // 获取2D渲染上下文并设置抗锯齿
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
    
    // 启用抗锯齿和平滑渲染
    this.ctx.imageSmoothingEnabled = true;
    this.ctx.imageSmoothingQuality = 'high';
    
    this.color = color;
    this.clouds = [];
    this.animationId = null;
    
    // 设置canvas样式为透明，以显示背景色
    this.canvas.style.backgroundColor = 'transparent';
    
    this.init();
  }
  
  init() {
    // 设置canvas尺寸
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
    
    // 创建云朵
    this.createClouds();
    
    // 开始动画
    this.animate();
  }
  
  resizeCanvas() {
    const container = this.canvas.parentElement;
    if (container) {
      // 获取设备像素比
      const dpr = window.devicePixelRatio || 1;
      
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
      this.ctx.scale(dpr, dpr);
    }
  }
  
  createClouds() {
    this.clouds = [];
    const cloudCount = 10; // 增加云朵数量以增强渐变效果
    
    // 创建一个自定义分布的圆形函数
    const createCloudAt = (x, y, size, opacity) => {
      // 计算移动半径，使较大的圆形移动范围更大
      const moveRadius = size * 0.5;
      
      this.clouds.push({
        x: x,
        y: y,
        originalX: x, // 存储原始位置
        originalY: y,
        moveRadius: moveRadius, // 移动范围半径
        size: size,
        originalSize: size, // 存储原始大小
        opacity: opacity,
        originalOpacity: opacity, // 存储原始透明度
        phase: Math.random() * Math.PI * 2
      });
    };
    
    // 在左上角创建较多的淡紫色云
    for (let i = 0; i < 4; i++) {
      createCloudAt(
        Math.random() * this.canvas.width * 0.3,
        Math.random() * this.canvas.height * 0.3,
        100 + Math.random() * 120,
        0.25 + Math.random() * 0.15
      );
    }
    
    // 在右下角创建较多的淡紫色云
    for (let i = 0; i < 4; i++) {
      createCloudAt(
        this.canvas.width * 0.7 + Math.random() * this.canvas.width * 0.3,
        this.canvas.height * 0.7 + Math.random() * this.canvas.height * 0.3,
        100 + Math.random() * 120,
        0.25 + Math.random() * 0.15
      );
    }
    
    // 在中间区域添加一些较小的云
    for (let i = 0; i < 2; i++) {
      createCloudAt(
        this.canvas.width * 0.3 + Math.random() * this.canvas.width * 0.4,
        this.canvas.height * 0.3 + Math.random() * this.canvas.height * 0.4,
        70 + Math.random() * 90,
        0.15 + Math.random() * 0.1
      );
    }
  }
  
  drawCloud(cloud) {
    const { x, y, size, opacity } = cloud;
    
    // 创建多层渐变光晕
    this.ctx.save();
    this.ctx.globalCompositeOperation = 'lighter'; // 叠加效果
    
    // 优化渲染性能，减少不必要的渐变计算
    const getColorWithOpacity = (opacityValue) => {
      // 使用Math.min避免alpha值超出255
      const alpha = Math.min(Math.round(opacity * opacityValue * 255), 255);
      return this.color + alpha.toString(16).padStart(2, '0');
    };
    
    // 超大范围外层羽化光晕 - 使用更多色标点实现更平滑的渐变
    const outerGlow = this.ctx.createRadialGradient(
      x, y, 0,
      x, y, size * 3
    );
    outerGlow.addColorStop(0, getColorWithOpacity(0.5));
    outerGlow.addColorStop(0.2, getColorWithOpacity(0.35));
    outerGlow.addColorStop(0.4, getColorWithOpacity(0.2));
    outerGlow.addColorStop(0.6, getColorWithOpacity(0.12));
    outerGlow.addColorStop(0.8, getColorWithOpacity(0.05));
    outerGlow.addColorStop(1, this.color + '00');
    
    this.ctx.fillStyle = outerGlow;
    this.ctx.beginPath();
    this.ctx.arc(x, y, size * 3, 0, Math.PI * 2);
    this.ctx.fill();
    
    // 中层柔和光晕 - 增加更多色标点
    const middleGlow = this.ctx.createRadialGradient(
      x, y, 0,
      x, y, size * 1.5
    );
    middleGlow.addColorStop(0, getColorWithOpacity(0.7));
    middleGlow.addColorStop(0.3, getColorWithOpacity(0.5));
    middleGlow.addColorStop(0.6, getColorWithOpacity(0.3));
    middleGlow.addColorStop(0.8, getColorWithOpacity(0.15));
    middleGlow.addColorStop(1, this.color + '00');
    
    this.ctx.fillStyle = middleGlow;
    this.ctx.beginPath();
    this.ctx.arc(x, y, size * 1.5, 0, Math.PI * 2);
    this.ctx.fill();
    
    // 内部柔和光晕 - 平滑过渡
    const innerGlow = this.ctx.createRadialGradient(
      x, y, 0,
      x, y, size
    );
    innerGlow.addColorStop(0, getColorWithOpacity(0.8));
    innerGlow.addColorStop(0.5, getColorWithOpacity(0.6));
    innerGlow.addColorStop(0.8, getColorWithOpacity(0.3));
    innerGlow.addColorStop(1, this.color + '00');
    
    this.ctx.fillStyle = innerGlow;
    this.ctx.beginPath();
    this.ctx.arc(x, y, size, 0, Math.PI * 2);
    this.ctx.fill();
    
    this.ctx.restore();
  }
  
  updateClouds() {
    const time = Date.now() * 0.001;
    
    this.clouds.forEach(cloud => {
      // 更自然的流动效果，使用正弦和余弦函数创建循环运动
      // 让圆形在小范围内循环移动，保持在各自的区域内
      const moveTime = time * 0.2; // 减慢移动速度
      
      // 计算新位置
      const newX = cloud.originalX + Math.sin(moveTime + cloud.phase) * cloud.moveRadius;
      const newY = cloud.originalY + Math.cos(moveTime + cloud.phase * 1.2) * cloud.moveRadius * 0.7;
      
      // 确保圆形不会移出画布
      if (newX >= 0 && newX <= this.canvas.width && newY >= 0 && newY <= this.canvas.height) {
        cloud.x = newX;
        cloud.y = newY;
      }
      
      // 轻微的大小和透明度变化，创造呼吸效果
      const variation = Math.sin(time * 0.1 + cloud.phase) * 0.03 + 1;
      cloud.size = Math.max(cloud.originalSize * 0.9, Math.min(cloud.originalSize * 1.1, cloud.size * variation));
      
      // 透明度变化
      const opacityVariation = Math.sin(time * 0.15 + cloud.phase * 1.5) * 0.1 + 1;
      cloud.opacity = Math.max(cloud.originalOpacity * 0.9, Math.min(cloud.originalOpacity * 1.1, cloud.opacity * opacityVariation));
    });
  }
  
  animate() {
    const containerWidth = this.canvas.clientWidth;
    const containerHeight = this.canvas.clientHeight;
    
    // 清空画布
    this.ctx.clearRect(0, 0, containerWidth, containerHeight);
    
    // 添加一些基础光晕效果
    this.ctx.save();
    this.ctx.globalCompositeOperation = 'lighter';
    
    // 使用更多色标点改进基础光晕
    // 左上角光晕
    const topLeftGlow = this.ctx.createRadialGradient(
      0, 0, 0,
      containerWidth * 0.2, containerHeight * 0.2, containerWidth * 0.6
    );
    topLeftGlow.addColorStop(0, this.color + '40');
    topLeftGlow.addColorStop(0.3, this.color + '20');
    topLeftGlow.addColorStop(0.6, this.color + '10');
    topLeftGlow.addColorStop(0.8, this.color + '08');
    topLeftGlow.addColorStop(1, this.color + '00');
    
    this.ctx.fillStyle = topLeftGlow;
    this.ctx.fillRect(0, 0, containerWidth, containerHeight);
    
    // 右下角光晕
    const bottomRightGlow = this.ctx.createRadialGradient(
      containerWidth, containerHeight, 0,
      containerWidth * 0.8, containerHeight * 0.8, containerWidth * 0.6
    );
    bottomRightGlow.addColorStop(0, this.color + '40');
    bottomRightGlow.addColorStop(0.3, this.color + '20');
    bottomRightGlow.addColorStop(0.6, this.color + '10');
    bottomRightGlow.addColorStop(0.8, this.color + '08');
    bottomRightGlow.addColorStop(1, this.color + '00');
    
    this.ctx.fillStyle = bottomRightGlow;
    this.ctx.fillRect(0, 0, containerWidth, containerHeight);
    
    this.ctx.restore();
    
    // 更新云朵位置
    this.updateClouds();
    
    // 绘制所有云朵
    this.clouds.forEach(cloud => this.drawCloud(cloud));
    
    this.animationId = requestAnimationFrame(() => this.animate());
  }
  
  destroy() {
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
      this.animationId = null;
    }
    
    window.removeEventListener('resize', () => this.resizeCanvas());
  }
}

export { GlowCloudAnimation };