<template>
  <div>
    <div><h1>{{ msg }}</h1></div>
    <home-header></home-header>
  </div>
</template>

<script>
import HomeHeader from './components/header'
export default {
  name: 'HelloWorld',
  components: {HomeHeader},
  comments : {
    HomeHeader : HomeHeader
  },
  data () {
    return {
      msg: 'happy birthday to'
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
