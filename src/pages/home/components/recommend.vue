<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag="li"
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/'+item.id"
      >
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  props : {
    recommendList : Array
  },
  data(){
    return {
      // recommendList: [{
      //   id: '001',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
      //   desc: '日佛耳机foe金融割肉几个偶然间狗儿剧哦大佛VR噢弄哦日',
      //   title: '北京欢乐谷'
      // },{
      //   id: '002',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
      //   desc: '日佛耳机foe金融割肉几个偶然间狗儿剧哦大佛VR噢弄哦日',
      //   title: '的防守打法'
      // },{
      //   id: '003',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
      //   desc: '日佛耳机foe金融割肉几个偶然间狗儿剧哦大佛VR噢弄哦日',
      //   title: '兔兔'
      // },{
      //   id: '004',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
      //   desc: '日佛耳机foe金融割肉几个偶然间狗儿剧哦大佛VR噢弄哦日',
      //   title: '北京 谷'
      // },{
      //   id: '005',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
      //   desc: '日佛耳机foe金融割肉几个偶然间狗儿剧哦大佛VR噢弄哦日',
      //   title: ' 欢乐谷'
      // },{
      //   id: '006',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
      //   desc: '日佛耳机foe金融割肉几个偶然间狗儿剧哦大佛VR噢弄哦日',
      //   title: ' 京欢乐谷'
      // },{
      //   id: '007',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
      //   desc: '日佛耳机foe金融割肉几个偶然间狗儿剧哦大佛VR噢弄哦日',
      //   title: ' 乐谷'
      // },{
      //   id: '008',
      //   imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
      //   desc: '日佛耳机foe金融割肉几个偶然间狗儿剧哦大佛VR噢弄哦日',
      //   title: ' 谷'
      // }]
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
  .item
    overflow: hidden
    display: flex
    height: 1.9rem
    .item-img
      width: 1.7rem
      height: 1.7rem
      padding: .1rem
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
      .item-button
        line-height: .44rem
        margin-top: .15rem
        background: #ff9300
        padding: 0 .2rem
        border-radius: .06rem
        color: #fff
</style>
