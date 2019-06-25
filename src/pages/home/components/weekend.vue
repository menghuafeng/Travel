<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="item of recommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data(){
    return {
      recommendList: [{
        id: '001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        desc: '在帝都过周末，不仅仅是城中游！',
        title: '京城周末撒欢'
      },{
        id: '002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
        desc: '日佛耳机foe金融割肉几个偶然间狗儿剧哦大佛VR噢弄哦日',
        title: '的防守打法'
      },{
        id: '003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
        desc: '日佛耳机foe金融割肉几个偶然间狗儿剧哦大佛VR噢弄哦日',
        title: '兔兔'
      },{
        id: '004',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
        desc: '日佛耳机foe金融割肉几个偶然间狗儿剧哦大佛VR噢弄哦日',
        title: '北京 谷'
      },{
        id: '005',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg',
        desc: '日佛耳机foe金融割肉几个偶然间狗儿剧哦大佛VR噢弄哦日',
        title: ' 欢乐谷'
      },{
        id: '006',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1505/ce/bc89bc2f0e33ea.jpg_r_640x214_3e408453.jpg',
        desc: '日佛耳机foe金融割肉几个偶然间狗儿剧哦大佛VR噢弄哦日',
        title: ' 京欢乐谷'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .title
    margin-top: .2rem
    line-height: .8rem
    background: #eee
    text-indent: .2rem
  .item-img-wrapper
    overflow: hidden
    height: 0
    padding-bottom: 33.9%
    .item-img
      width: 100%
  .item-info
    flex: 1
    padding: .1rem
    min-width: 0
    .item-title
      line-height: .54rem
      font-size: .32rem
      ellipsis()
    .item-desc
      line-height: .4rem
      font-size: .23rem
      color: #ccc
      ellipsis()
</style>
