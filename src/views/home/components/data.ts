// 导航菜单数据
export const menuData = [
  {
    name: 'home.nav.chat',
    path: '/'
  },
  {
    name: 'home.nav.wisebase',
    path: '/wisebase',
    icon: 'iconsys-xia2',
    hoverIcon: 'iconsys-shang2'
  },
  {
    name: 'home.nav.tools',
    path: '/wisebase/agent',
    icon: 'iconsys-xia2',
    hoverIcon: 'iconsys-shang2'
  },
  {
    name: 'home.nav.extension',
    path: '/agents/browser-extension'
  },
  {
    name: 'home.nav.pricing',
    path: '/price'
  }
]

// Wisebase扩展数据
export const wisebaseData = [
  {
    name: 'home.appNames.wisebase',
    path: '/wisebase/index'
  },
  {
    name: 'home.appNames.deepResearch',
    path: '/agents/deep-research?type=1'
  },
  {
    name: 'home.appNames.scholarResearch',
    path: '/agents/deep-research?type=2'
  }
]

// 工具数据
export const toolData = [
  {
    title: 'Agents',
    children: [
      {
        name: 'home.nav.deepResearch',
        path: '/agents/deep-research?type=1'
      },
      {
        name: 'home.nav.scholarResearch',
        path: '/agents/deep-research?type=2'
      },
      {
        name: 'home.nav.websiteGenerator',
        path: '/agents/web-creator'
      },
      {
        name: 'home.nav.AIPPT',
        path: '/agents/ai-slides',
        isNew: true
      },
      {
        name: 'home.nav.writerMaster',
        path: '/agents/ai-writer'
      }
    ]
  },
  {
    title: '图像',
    children: [
      {
        name: '图片生成',
        path: '/images/generate'
      },
      {
        name: '背景移除',
        path: '/images/background-remover'
      },
      {
        name: '背景替换',
        path: '/images/photo-background-changer'
      },
      {
        name: '区域抹除',
        path: '/images/photo-eraser'
      },
      {
        name: '文字移除',
        path: '/images/text-remover'
      },
      {
        name: '局部重绘',
        path: '/images/inpaint'
      },
      {
        name: '画质提升',
        path: '/images/image-upscaler'
      }
    ]
  }
]