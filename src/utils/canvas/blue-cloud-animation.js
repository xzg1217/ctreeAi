class BlueCloudAnimation {
  constructor(canvasId, primaryColor = '#1C4FCE', secondaryColor = '#51A2FF') {
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
    
    this.primaryColor = primaryColor;
    this.secondaryColor = secondaryColor;
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
    const cloudCount = 15; // 保持云朵数量
    const containerWidth = this.canvas.clientWidth;
    const containerHeight = this.canvas.clientHeight;
    
    // 创建一个自定义分布的圆形函数
    const createCloudAt = (x, y, size, opacity, colorIndex) => {
      // 增大移动半径，使云朵可以大范围流动
      const moveRadius = size * 1.2; // 增大到原来的2倍
      
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
        phase: Math.random() * Math.PI * 2,
        colorIndex: colorIndex // 0为主要颜色，1为次要颜色
      });
    };
    
    // 在左侧创建较多的蓝色云，包括屏幕外的位置
    for (let i = 0; i < 5; i++) {
      const colorIndex = Math.random() > 0.4 ? 0 : 1;
      createCloudAt(
        -containerWidth * 0.2 + Math.random() * containerWidth * 0.6, // 扩展到屏幕左侧外
        -containerHeight * 0.2 + Math.random() * containerHeight * 1.4, // 扩展到屏幕上下两侧外
        200 + Math.random() * 200, // 增大尺寸范围
        0.2 + Math.random() * 0.15,
        colorIndex
      );
    }
    
    // 在右侧创建较多的浅蓝色云，包括屏幕外的位置
    for (let i = 0; i < 5; i++) {
      const colorIndex = Math.random() > 0.5 ? 1 : 0;
      createCloudAt(
        containerWidth * 0.6 + Math.random() * containerWidth * 0.6, // 扩展到屏幕右侧外
        -containerHeight * 0.2 + Math.random() * containerHeight * 1.4, // 扩展到屏幕上下两侧外
        200 + Math.random() * 200, // 增大尺寸范围
        0.2 + Math.random() * 0.15,
        colorIndex
      );
    }
    
    // 在中间区域添加一些混合色云
    for (let i = 0; i < 5; i++) {
      const colorIndex = Math.random() > 0.5 ? 0 : 1;
      createCloudAt(
        containerWidth * 0.2 + Math.random() * containerWidth * 0.6,
        containerHeight * 0.2 + Math.random() * containerHeight * 0.6,
        150 + Math.random() * 150, // 增大中间云朵尺寸
        0.15 + Math.random() * 0.1,
        colorIndex
      );
    }
  }
  
  drawCloud(cloud) {
    const { x, y, size, opacity, colorIndex } = cloud;
    
    // 根据颜色索引选择当前云朵的颜色
    const currentColor = colorIndex === 0 ? this.primaryColor : this.secondaryColor;
    
    // 创建多层渐变光晕
    this.ctx.save();
    this.ctx.globalCompositeOperation = 'lighter'; // 叠加效果
    
    // 优化渲染性能，减少不必要的渐变计算
    const getColorWithOpacity = (opacityValue) => {
      // 使用Math.min避免alpha值超出255
      const alpha = Math.min(Math.round(opacity * opacityValue * 255), 255);
      return currentColor + alpha.toString(16).padStart(2, '0');
    };
    
    // 扩展外层羽化光晕范围，增强边缘羽化效果，避免割裂感
    const outerGlow = this.ctx.createRadialGradient(
      x, y, 0,
      x, y, size * 4 // 增大到原来的1.33倍，增强羽化范围
    );
    // 增加更多色标点，使渐变更平滑
    outerGlow.addColorStop(0, getColorWithOpacity(0.4));
    outerGlow.addColorStop(0.1, getColorWithOpacity(0.3));
    outerGlow.addColorStop(0.2, getColorWithOpacity(0.2));
    outerGlow.addColorStop(0.4, getColorWithOpacity(0.12));
    outerGlow.addColorStop(0.6, getColorWithOpacity(0.06));
    outerGlow.addColorStop(0.8, getColorWithOpacity(0.03));
    outerGlow.addColorStop(1, currentColor + '00');
    
    this.ctx.fillStyle = outerGlow;
    this.ctx.beginPath();
    this.ctx.arc(x, y, size * 4, 0, Math.PI * 2);
    this.ctx.fill();
    
    // 中层柔和光晕
    const middleGlow = this.ctx.createRadialGradient(
      x, y, 0,
      x, y, size * 1.8 // 增大中层光晕范围
    );
    middleGlow.addColorStop(0, getColorWithOpacity(0.6));
    middleGlow.addColorStop(0.2, getColorWithOpacity(0.45));
    middleGlow.addColorStop(0.4, getColorWithOpacity(0.3));
    middleGlow.addColorStop(0.6, getColorWithOpacity(0.18));
    middleGlow.addColorStop(0.8, getColorWithOpacity(0.08));
    middleGlow.addColorStop(1, currentColor + '00');
    
    this.ctx.fillStyle = middleGlow;
    this.ctx.beginPath();
    this.ctx.arc(x, y, size * 1.8, 0, Math.PI * 2);
    this.ctx.fill();
    
    // 内部柔和光晕 - 平滑过渡
    const innerGlow = this.ctx.createRadialGradient(
      x, y, 0,
      x, y, size
    );
    innerGlow.addColorStop(0, getColorWithOpacity(0.7));
    innerGlow.addColorStop(0.3, getColorWithOpacity(0.55));
    innerGlow.addColorStop(0.6, getColorWithOpacity(0.3));
    innerGlow.addColorStop(0.8, getColorWithOpacity(0.12));
    innerGlow.addColorStop(1, currentColor + '00');
    
    this.ctx.fillStyle = innerGlow;
    this.ctx.beginPath();
    this.ctx.arc(x, y, size, 0, Math.PI * 2);
    this.ctx.fill();
    
    this.ctx.restore();
  }
  
  updateClouds() {
    const time = Date.now() * 0.001;
    
    this.clouds.forEach(cloud => {
      // 更自然的流动效果，使用正弦和余弦函数创建大范围循环运动
      // 让云朵可以自由流动，包括超出屏幕范围
      const moveTime = time * 0.12; // 稍微加快移动速度
      
      // 增加流动幅度，使云朵可以大范围移动
      // 使用更复杂的波形组合，创建更自然的流动感
      const xPhase = moveTime + cloud.phase;
      const yPhase = moveTime + cloud.phase * 1.3;
      
      // 计算新位置 - 移除画布边界限制
      cloud.x = cloud.originalX + Math.sin(xPhase) * cloud.moveRadius;
      cloud.y = cloud.originalY + Math.cos(yPhase) * cloud.moveRadius * 0.8 + Math.sin(xPhase * 1.5) * cloud.moveRadius * 0.3;
      
      // 增强呼吸效果，使云朵大小变化更明显
      const variation = Math.sin(time * 0.12 + cloud.phase) * 0.08 + 1;
      cloud.size = Math.max(cloud.originalSize * 0.85, Math.min(cloud.originalSize * 1.15, cloud.size * variation));
      
      // 增强透明度变化，使云朵更有层次感
      const opacityVariation = Math.sin(time * 0.18 + cloud.phase * 1.2) * 0.15 + 1;
      cloud.opacity = Math.max(cloud.originalOpacity * 0.8, Math.min(cloud.originalOpacity * 1.2, cloud.opacity * opacityVariation));
    });
  }
  
  animate() {
    const containerWidth = this.canvas.clientWidth;
    const containerHeight = this.canvas.clientHeight;
    
    // 清空画布
    this.ctx.clearRect(0, 0, containerWidth, containerHeight);
    
    // 添加一些基础光晕效果，混合两种颜色，增强背景过渡
    this.ctx.save();
    this.ctx.globalCompositeOperation = 'lighter';
    
    // 扩展左侧主要蓝色光晕范围
    const leftGlow = this.ctx.createRadialGradient(
      containerWidth * 0.15, containerHeight * 0.5, 0,
      containerWidth * 0.25, containerHeight * 0.4, containerWidth * 0.9
    );
    leftGlow.addColorStop(0, this.primaryColor + '35');
    leftGlow.addColorStop(0.2, this.primaryColor + '25');
    leftGlow.addColorStop(0.4, this.primaryColor + '15');
    leftGlow.addColorStop(0.6, this.primaryColor + '0C');
    leftGlow.addColorStop(0.8, this.primaryColor + '06');
    leftGlow.addColorStop(1, this.primaryColor + '00');
    
    this.ctx.fillStyle = leftGlow;
    this.ctx.fillRect(0, 0, containerWidth, containerHeight);
    
    // 扩展右侧次要浅蓝色光晕范围
    const rightGlow = this.ctx.createRadialGradient(
      containerWidth * 0.85, containerHeight * 0.5, 0,
      containerWidth * 0.75, containerHeight * 0.4, containerWidth * 0.9
    );
    rightGlow.addColorStop(0, this.secondaryColor + '35');
    rightGlow.addColorStop(0.2, this.secondaryColor + '25');
    rightGlow.addColorStop(0.4, this.secondaryColor + '15');
    rightGlow.addColorStop(0.6, this.secondaryColor + '0C');
    rightGlow.addColorStop(0.8, this.secondaryColor + '06');
    rightGlow.addColorStop(1, this.secondaryColor + '00');
    
    this.ctx.fillStyle = rightGlow;
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

export { BlueCloudAnimation };