<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities" v-on:showMe="handleShowMe"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :letter="letter"></city-list>
    <city-alphabet v-if="showMe" :cities="cities" @change="handleChange"></city-alphabet>
  </div>
</template>

<script>
import axios from 'axios'
import CityHeader from "./components/header";
import CitySearch from "./components/search";
import CityList from "./components/list"
import CityAlphabet from "./components/alphabet"
export default {
  name : 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data () {
    return {
      cities : {},
      hotCities : [],
      letter : '',// 字母列表组件传来的值,
      showMe : true
    }
  },
  methods : {
    // 点击搜索框时,隐藏其他组件
    handleShowMe (showMe) {
      this.showMe = showMe
      console.log(this.showMe)
    },
    // 请求城市数据
    getCityInfo () {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    // 数据渲染
    getCityInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    // 监听子组件事件,接收子组件数据
    handleChange (letter) {
      this.letter = letter
    }
  },
  mounted () {
    this.getCityInfo();
  }
}
</script>

<style lang = "stylus" scoped>

</style>
