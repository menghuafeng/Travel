import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutation from './mutation'

Vue.use(Vuex)


export default new Vuex.Store({
  state : state ,
  // actions : {
  //   changeCity (ctx , city) {
  //     ctx.commit('changeCity' , city)
  //   }
  // },
  mutations : mutation ,


  // 类似computed 可以对state中的属性进行计算,避免数据的冗余
  getters : {
    doubleCity(state){
      return state.city + ' ' + state.city
    }
  }
})
