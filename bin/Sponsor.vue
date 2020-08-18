<template>
  <div v-if="$frontmatter.showSponsor">
    <component :is="componentName" :options="options"/>
  </div>
</template>

<script>
import SponsorSimple from './SponsorSimple'
export default {
  name: "Sponsor",
  components: {
    SponsorSimple
  },
  data() {
    return {
      theme: THEME,
      alipay: ALIPAY,
      wechat: WECHAT,
      qq: QQ,
      paypal: PAYPAL,
      duration: DURATION
    }
  },
  computed: {
    options() {
      const options = {
        alipay: this.alipay,
        wechat: this.wechat,
        qq: this.qq,
        paypal: this.paypal,
        duration: this.duration
      }
      return options
    },
    componentName() {
      return this.theme === "simple" ? "SponsorSimple" : "SponsorDrinks"
    }
  }
}
</script>
