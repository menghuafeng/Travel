<template>
  <div>
    <div class="banner" v-on:click="handleBannerClick">
      <img calss="banner-img" src="//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg">
      <div class="banner-info">
        <div class="banner-title">
          故宫(AAAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe633;</span>
          109
        </div>
      </div>
    </div>
    <common-gallay :imgs="imgs" v-if="showGallay" v-on:close="handleGallaryClose"></common-gallay>
  </div>
</template>

<script>
  import CommonGallay from 'common/gallary/gallary'
  export default{
    name : 'DetailBanner',
    data (){
      return {
        showGallay : false,
        imgs : ['http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_r_800x800_9b21ceda.jpg',
          'http://img1.qunarzz.com/sight/p0/1804/1a/1a48cc20b0d6ed44a3.img.jpg_r_800x800_9b21ceda.jpg'
        ]
      }
    },
    methods : {
      handleBannerClick (){
        this.showGallay = true
      },
      handleGallaryClose(){
        this.showGallay = false
      }
    },
    components : {
      CommonGallay
    }
  }
</script>

<style lang="stylus" scoped>
.banner
  position : relative
  overflow : hidden
  height : 0
  padding-bottom : 55%
  .banner-img
    width : 100%
  .banner-info
    position : absolute
    display : flex
    rigth : 0
    left : 0
    bottom : 0
    line-height : .6rem
    color : #fff
    background-image : linear-gradient(top , rgba(0 , 0 , 0 , 0) , rgba(0 , 0 , 0 , 0.8))
    .banner-title
      flex : 1
      font-size : .32rem
      padding : 0 .2rem
    .banner-number
      position: absolute
      width: 1.2rem
      left: .2rem
      bottom: .86rem
      height : .32rem
      font-size : .24rem
      line-height : .32rem
      border-radius : .2rem
      background : rgba(0, 0, 0, .8)
      .banner-icon
        font-size : .2rem
        padding: 0.1rem;
</style>
