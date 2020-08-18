const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  define () {
    const { theme, alipay, wechat, qq, paypal, duration } = options
    return {
      THEME: theme || "simple",
      ALIPAY: alipay || null,
      WECHAT: wechat || null,
      QQ: qq || null,
      PAYPAL: paypal || null,
      DURATION: duration || 1500
    }
  },
  name: 'vuepress-plugin-sponsor',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ],
  globalUIComponents: "Sponsor"
})
