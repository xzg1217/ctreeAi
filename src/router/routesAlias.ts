/**
 * 路由别名，方便快速找到页面，同时可以用作路由跳转
 */
export enum RoutesAlias {
  // 布局和认证
  Layout = '/index/index', // 布局容器
  Login = '/auth/login', // 登录
  Register = '/auth/register', // 注册
  ForgetPassword = '/auth/forget-password', // 忘记密码
  Home = '/', // 首页

  // 异常页面
  Exception403 = '/exception/403', // 403
  Exception404 = '/exception/404', // 404
  Exception500 = '/exception/500', // 500

  // 结果页面
  Success = '/result/success', // 成功
  Fail = '/result/fail', // 失败

  // 仪表板
  Dashboard = '/dashboard/console', // 工作台

  // 系统管理
  User = '/system/user', // 账户
  Role = '/system/role', // 角色
  UserCenter = '/system/user-center', // 用户中心
  Menu = '/system/menu', // 菜单

  // AI工具
  AISlides = '/agents/ai-slides', // AI PPT生成器
  DeepResearch = '/agents/deep-research', // 深度研究工具
  WebCreator = '/agents/web-creator', // 网页创作者工具
  AIWriter = '/agents/ai-writer', // AI写作助手
  BrowserExtension = '/agents/browser-extension', // 浏览器插件

  // 价格页面
  Price = '/price', // 价格页面

  // 图片模块
  Images = '/images', // 图片生成
  BackgroundRemover = '/images/background-remover', // 背景移除
  TextRemover = '/images/text-remover' // 文字移除
}
