<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title  border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-warrper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
        <div class="area">
          <div class="title  border-topbottom">热门城市</div>
          <div class="button-list">
            <div class="button-warrper" v-for="item of hotCities" :key="item.id">
              <div class="button" @click="handleChangeCity(item.name)">{{item.name}}</div>
            </div>
          </div>
        </div>
        <div class="area" v-for="(item ,key) of cities" :key="key" :ref="key">
          <div class="title  border-topbottom">{{key}}</div>
          <div class="item-list">
            <div class="item border-bottom"
                 v-for="innerItem of item"
                 :key="innerItem.id"
                 @click="handleChangeCity(innerItem.name)"
            >
              {{innerItem.name}}
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  computed: {
    // ...展开运算符,将一个数组转为用逗号分隔的参数序列
    ...mapState({
      // 将vuex中的city映射到当前的currentCity
      currentCity: 'city'
    })
  },
  methods: {
    handleChangeCity (city) {
      // this.$store.commit('changeCity' , city)
      this.changeCity(city)
      this.$router.push('/')
    },
    // 将changeCity属性/方法 映射到当前的changeCity属性/方法中
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  },
  watch: {
    letter () {
      // console.log(this.letter)
      if (this.letter) {
        // 这里的Bscroll可以滚动定位,但是需要传递一个dom元素或者dom选择器进去,所以[0]表示第一个元素
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/global.styl"
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
  .list
    overflow : hidden
    position : absolute
    top : 1.58rem
    left : 0
    right :0
    bottom : 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem

    .button-list
      overflow: hidden
      padding: .1rem .6rem .1rem .1rem
      .button-warrper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      line-height : .74rem
      padding-left: .2rem
</style>
