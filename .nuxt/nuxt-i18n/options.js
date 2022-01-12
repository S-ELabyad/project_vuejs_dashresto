

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
}
export const nuxtOptions = {
  isUniversalMode: true,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {"locale":"en","fallbackLocale":"en","messages":{"en":{},"fr":{},"es":{}}},
  vueI18nLoader: true,
  locales: [{"code":"en","name":"English","iso":"en-US"},{"code":"fr","name":"Français","iso":"fr-FR"},{"code":"es","name":"Espagnol","iso":"es-ES"}],
  defaultLocale: "en",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: false,
  langDir: null,
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":true,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"e_locale","cookieSecure":false,"fallbackLocale":"en","onlyOnNoPrefix":false,"onlyOnRoot":false,"useCookie":true},
  differentDomains: false,
  seo: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncLocale":false,"syncMessages":false,"syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  beforeLanguageSwitch: () => null,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"en","name":"English","iso":"en-US"},{"code":"fr","name":"Français","iso":"fr-FR"},{"code":"es","name":"Espagnol","iso":"es-ES"}],
  localeCodes: ["en","fr","es"],
}

export const localeMessages = {}
