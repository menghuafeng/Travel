<template>
  <div>
    <home-header></home-header>
    <home-swiper v-bind:swiperList = "swiperList"></home-swiper>
    <home-icons v-bind:iconList = "iconList"></home-icons>
    <home-recommend v-bind:recommendList = "recommendList"></home-recommend>
    <home-weekend v-bind:weekendList = "weekendList"></home-weekend>
  </div>
</template>

<script>
import HomeSwiper from './components/swiper'
import HomeIcons from './components/icons'
import HomeRecommend from './components/recommend'
import HomeWeekend from './components/weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'HelloWorld',
  components: {
    HomeHeader : () => import ('./components/header'),
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend,
  },
  data (){
    return {
      lastCity : '',
      iconList : [],
      recommendList : [],
      swiperList : [],
      weekendList : []
    }
  },
  computed : {
    ...mapState(['city']),
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/homeinfo.json?city=' + this.city)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        this.iconList = res.data.iconList
        this.recommendList = res.data.recommendList
        this.swiperList = res.data.swiperList
        this.weekendList = res.data.weekendList
      }
      console.log(res)
    }
  },
  mounted () {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated () {
    if(this.lastCity !== this.city){
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
