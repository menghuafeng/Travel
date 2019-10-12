<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-if="showHeader">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed"  v-if="!showHeader" :style="opacityStyle">景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetailHeader',
  data () {
    return {
      showHeader: true,
      // 不透明级别 0.0(完全透明)到 1.0(完全不透明)
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScoll () {
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity: opacity}
        this.showHeader = false
      } else {
        this.showHeader = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScoll)
  },
  deactivated () {
    window.removeEventListener('scroll', this.handleScoll)
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/global.styl"
  @import "~styles/varibles.styl"
  .header-abs
    position : absolute
    left : .2rem
    top : .2rem
    width : .8rem
    height : .8rem
    line-height : .8rem
    text-align : center
    border-radius : .4rem
    background-color : rgba(0 , 0 , 0 , .8)
    .header-abs-back
      color : #fff
      font-size : .4rem
  .header-fixed
      z-index : 2
      position : fixed
      left : 0
      right : 0
      top : 0
      // 超出边框的内容的处理方式,这里是裁剪
      /*overflow : hidden*/
      height : $headerHeight
      line-height : $headerHeight
      text-align : center
      color : #fff
      background : $theme
      font-size : .32rem
    .header-fixed-back
      position : absolute
      top : 0
      left : 0
      width : .64rem
      text-align : center
      font-size : .32rem
      color : #fff
</style>
