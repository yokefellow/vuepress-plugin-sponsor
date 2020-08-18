### How To Use?

Add an array/object to the config.js(./vuepress/config.js) plugins array/object. Examples are as follows.

#### Babel Style

```js
module.exports = {
  plugins: [
     [
      'vuepress-plugin-sponsor',
      {
        theme: 'simple',
        alipay: '/sponsor-qrcode/qrcode-alipay.png',
        wechat: '/sponsor-qrcode/qrcode-wechat.png',
        qq: '/sponsor-qrcode/qrcode-qq.png',
        paypal: 'https://www.paypal.me/yokefellow',
        duration: 2000
      }
    ]
  ]
}
```
#### Object Style

```js
module.exports = {
  plugins: {
    'vuepress-plugin-sponsor': {
      theme: 'simple',
      alipay: '/sponsor-qrcode/qrcode-alipay.png',
      wechat: '/sponsor-qrcode/qrcode-wechat.png',
      qq: '/sponsor-qrcode/qrcode-qq.png',
      paypal: 'https://www.paypal.me/yokefellow',
      duration: 2000
    }
  }
}
