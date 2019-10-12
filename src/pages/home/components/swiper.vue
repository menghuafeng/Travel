<template>
  <div class="wrapper">
    <!--初始化swiperList为空,图片顺序混乱,判断数据不为空时渲染数据-->
    <swiper :options="swiperOption" v-if = "showSwiper">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data () {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        loop: true
      }
    }
  },
  computed: {
    showSwiper () {
      return this.swiperList.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet
    background : #fff
  .wrapper
    overflow : hidden
    width : 100%
    height : 0
    padding-bottom : 31.25%
    background : #eee
    .swiper-img
     width : 100%
</style>
