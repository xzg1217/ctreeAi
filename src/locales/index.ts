import { createI18n } from 'vue-i18n'
import type { I18n, I18nOptions } from 'vue-i18n'
import { LanguageEnum } from '@/enums/appEnum'
import { getSystemStorage } from '@/utils/storage'
import { StorageKeyManager } from '@/utils/storage/storage-key-manager'
// 同步导入语言文件
import enMessages from './langs/en.json'
import zhMessages from './langs/zh.json'

// 创建存储键管理器实例
const storageKeyManager = new StorageKeyManager()
// 语言存储键名
const LANGUAGE_STORAGE_KEY = storageKeyManager.getStorageKey('app_language')

const messages = {
  [LanguageEnum.EN]: enMessages,
  [LanguageEnum.ZH]: zhMessages
}

// 语言选项
export const languageOptions = [
  { value: LanguageEnum.ZH, label: '简体中文' },
  { value: LanguageEnum.EN, label: 'English' }
]

/**
 * 获取浏览器默认语言
 * @returns 浏览器语言对应的系统语言枚举值
 */
const getBrowserLanguage = (): LanguageEnum => {
  try {
    // 获取浏览器语言设置
    const browserLang = navigator.language || navigator.userLanguage || ''
    const langCode = browserLang.toLowerCase().split('-')[0]
    
    // 根据语言代码返回对应的枚举值
    if (langCode === 'en') {
      return LanguageEnum.EN
    } else if (langCode === 'zh') {
      return LanguageEnum.ZH
    }
  } catch (error) {
    console.warn('[i18n] 获取浏览器语言失败:', error)
  }
  
  // 默认返回中文
  return LanguageEnum.ZH
}

/**
 * 从本地存储中获取语言设置，如果没有则根据浏览器语言设置
 * @returns 语言设置
 */
const getDefaultLanguage = (): LanguageEnum => {
  // 1. 优先从专用的语言存储键中获取
  try {
    const savedLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY)
    if (savedLanguage && Object.values(LanguageEnum).includes(savedLanguage as LanguageEnum)) {
      console.debug('[i18n] 从本地存储获取语言设置:', savedLanguage)
      return savedLanguage as LanguageEnum
    }
  } catch (error) {
    console.warn('[i18n] 从专用存储获取语言设置失败:', error)
  }

  // 2. 尝试从版本化的存储中获取语言设置
  try {
    const storageKey = storageKeyManager.getStorageKey('user')
    const userStore = localStorage.getItem(storageKey)

    if (userStore) {
      const { language } = JSON.parse(userStore)
      if (language && Object.values(LanguageEnum).includes(language)) {
        return language
      }
    }
  } catch (error) {
    console.warn('[i18n] 从版本化存储获取语言设置失败:', error)
  }

  // 3. 尝试从系统存储中获取语言设置
  try {
    const sys = getSystemStorage()
    if (sys) {
      const { user } = JSON.parse(sys)
      if (user?.language && Object.values(LanguageEnum).includes(user.language)) {
        return user.language
      }
    }
  } catch (error) {
    console.warn('[i18n] 从系统存储获取语言设置失败:', error)
  }

  // 4. 根据浏览器语言设置默认语言
  const browserLanguage = getBrowserLanguage()
  console.debug('[i18n] 使用浏览器默认语言:', browserLanguage)
  return browserLanguage
}

/**
 * 保存语言设置到本地存储
 * @param language 要保存的语言
 */
export const saveLanguageSetting = (language: LanguageEnum): void => {
  try {
    localStorage.setItem(LANGUAGE_STORAGE_KEY, language)
    console.debug('[i18n] 已保存语言设置到本地存储:', language)
  } catch (error) {
    console.error('[i18n] 保存语言设置失败:', error)
  }
}

/**
 * 切换应用语言
 * @param language 目标语言
 */
export const changeLanguage = (language: LanguageEnum): void => {
  if (Object.values(LanguageEnum).includes(language)) {
    i18n.global.locale.value = language
    saveLanguageSetting(language)
    console.info('[i18n] 语言已切换为:', language)
  } else {
    console.error('[i18n] 无效的语言设置:', language)
  }
}

const i18nOptions: I18nOptions = {
  locale: getDefaultLanguage(),
  legacy: false,
  globalInjection: true,
  fallbackLocale: LanguageEnum.ZH,
  messages
}

const i18n: I18n = createI18n(i18nOptions)

interface Translation {
  (key: string): string
}

export const $t = i18n.global.t as Translation

// 初始化时保存当前语言设置，确保首次访问时也会保存浏览器语言设置
saveLanguageSetting(i18n.global.locale.value)

export default i18n
