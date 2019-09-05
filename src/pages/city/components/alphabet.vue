<template>
  <ul class="list">
    <li class="item"
        v-for="item of letter"
        :key="item"
        :ref="item"
        @click="handleClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
  export default {
    name : 'CityAlphabet',
    props : {
      cities : Object
    },
    data(){
      return {
        touchStatus : false,
        startY : 0,
        timer : null
      }
    },
    computed : {
      letter () {
        const letters = []
        for(let i in this.cities) {
          letters.push(i)
        }
        return letters
      }
    },
    updated () {
      // A字母距离顶部下沿的值
      this.startY = this.$refs['A'][0].offsetTop
    },
    methods : {
      handleClick (e) {
        this.$emit('change' , e.target.innerText)
      },
      handleTouchStart () {
        this.touchStatus = true
      },
      handleTouchMove (e) {
        // 滑动时
        if(this.touchStatus) {
          if(this.timer){
            clearTimeout(this.timer)
          }
          this.timer = setTimeout(() => {
            // 滑动的位置距离顶部下沿的值,顶部高度79
            const touchY = e.touches[0].clientY - 79
            // 判断滑动到了第几个字母的位置
            const index = Math.floor((touchY - this.startY)/20)
            if(index >= 0 && index < this.letter.length){
              this.$emit('change' , this.letter[index])
            }
          },6)
        }
      },
      handleTouchEnd(){
        this.touchStatus = false
      }
    }
  }
</script>

<style lang = "stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display : flex
    flex-direction : column
    justify-content : center
    position : absolute
    right : 0
    bottom : 0
    top : 1.58rem
    width : .4rem
    line-height : .4rem
    .item
      text-align : center
      color : $bgColor
</style>
