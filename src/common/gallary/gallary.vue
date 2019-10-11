<template>
  <div class="container" v-on:click="handleGallaryClick">
    <div class="wrapper">
      <!--初始化swiperList为空,图片顺序混乱,判断数据不为空时渲染数据-->
      <swiper :options="swiperOption">
        <swiper-slide v-for="(item, index) in imgs" :key="index">
          <img class="gallary-img" :src="item">
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'CommonGallay',
    props : {
      imgs : {
        type : Array,
        default(){
          return []
        }
      }
    },
    data (){
      return{
        swiperOption : {
          pagination : '.swiper-pagination',
          paginationType : 'fraction',
          // 环路,让页面转换看起来是循环的
          loop : true,
          // 监听swiper的样式或者子级元素 / 父元素发生变化的时候,自动更新
          observer : true,
          observeParents : true
        }
      }
    },
    methods : {
      handleGallaryClick (){
        this.$emit('close')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .container >>> .swiper-container
    // 规定当内容溢出元素框时发生的事情,这里是从父属性集成overflow的值,即也是隐藏
    overflow : inherit
  .container
    // 弹性盒子
    display : flex
    // 弹性盒子的伸缩方式
    flex-direction : column
    // 盒子内的内容的位置
    justify-content : center
    z-index : 99
    // 相对于浏览器窗口进行定位
    position : fixed
    left : 0
    right : 0
    top : 0
    bottom : 0
    background : #000
    .wrapper
      // 规定当内容溢出元素框时发生的事情,这里是裁剪
      /*overflow : hidden*/
      height : 0
      width : 100%
      // 底部留白
      padding-bottom : 100%
      .gallary-img
        width : 100%
      .swiper-pagination
        color : #fff
        bottom : -1rem
</style>
