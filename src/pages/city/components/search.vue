<template>
  <div>
    <div class="search">
      <input class="search-input"  v-on:focus="hideOthers" v-on:blur="showOthers" v-model="keyword" type="text" placeholder="输入城市名或拼音"/>
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul>
        <li class="search-item border-bottom" v-for="item of list" :key="item.id" @click="handleChangeCity(item.name)">{{item.name}}</li>
        <li class="search-item border-bottom" v-if="hasNoData">没有找到对应数据</li>
      </ul>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapMutations } from 'vuex'
export default {
  name: 'CitySearch',
  props: {
    cities: Object
  },
  methods: {
    // 隐藏显示字母列表
    hideOthers () {
      this.$emit('showMe', false)
    },
    showOthers () {
      this.$emit('showMe', true)
    },
    handleChangeCity (city) {
      // this.$store.commit('changeCity' , city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted () {
    this.scroll = new Bscroll(this.$refs.search)
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  },
  watch: {
    keyword () {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        // 遍历城市集合
        for (let i in this.cities) {
          // 遍历每条城市数据的属性
          this.cities[i].forEach((value) => {
            // 判断每条数据内name和拼音是否能够匹配输入的搜索内容
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  }
}
</script>

<style lang = "stylus" scoped>
  @import "~styles/global.styl"
  .search
    height : .72rem
    padding : 0 .1rem
    background : $theme
    .search-input
      box-sizing : border-box
      width : 100%
      height : .62rem
      padding : 0 .2rem
      line-height : .62rem
      text-align : center
      border-radius : .06rem
      color : #666
  .search-content
    z-index : 1
    overflow : hidden
    position : absolute
    top : 1.58rem
    left : 0
    right : 0
    bottom : 0
    background : #eee
    .search-item
      line-height : .62rem
      padding-left : .2rem
      color : #666
      background : #fff
</style>
