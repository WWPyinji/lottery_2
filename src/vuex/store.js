/**

 Created with JetBrains WebStorm.
 User: Administrator
 Date: 13-7-17
 Time: 上午9:13
 To change this template use File | Settings | File Templates. */
import Vue from  'vue'
import Vuex from 'vuex'

import com from './modules/common'

Vue.use(Vuex);

// var store = new Vuex.Store({
//   state:{
//       totalPrice: localStorage.getItem('price')||0
//   },
//   mutations:{
//       increment(state,price){
//         state.totalPrice += price;
//         localStorage.setItem('price', state.totalPrice);
//       },
//       decrement(state,price){
//         localStorage.setItem('price', state.totalPrice);
//         state.totalPrice -= price;
//       }
//   },
//   actions:{
//
//   },
//   getters:{
//       getTen(state,getters){
//         if(state.totalPrice == 20){
//           return state.totalPrice =200;
//         }else {
//           state.totalPrice = 0;
//         }
//
//       }
//   }
// })

// export default store;


export default new Vuex.Store({
  modules: {
    com
  }
})
