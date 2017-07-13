import * as types from '../types'

/**
 *App通用配置
 */
const state = {
  toastMsg: '',//toast提示语
  toastType: 'text',//toast类型，可选值 success, warn, cancel, text
  showToast: false,
  isLoading: false,
  titleMsg: '',
  titleCont: '',
  titleFlag: false

}

const actions = {
  showToast({commit}, status) {
    commit(types.COM_SHOW_TOAST, status)
  },
  toastMsg({commit}, str){
    commit(types.COM_TOAST_MSG, str);
  },
  toastType({commit}, toastType){
    commit(types.COM_TOAST_TYPE, toastType)
  },
  setLoadingState({commit}, status){
    commit(types.COM_LOADDING_STATUS, status)
  },
  titleMsg({commit}, str){
    commit(types.TITLEMSG, str)
  },
  titleCont({commit}, str){
    commit(types.TITLECONT, str)
  },
  titleFlag({commit}, str){
    commit(types.TITLEFLAG, str)
  }
}

const getters = {
  showToast: state => state.showToast
}

const mutations = {
  [types.COM_SHOW_TOAST](state, status) {
    state.showToast = status
  },
  [types.COM_TOAST_MSG](state, str) {
    state.toastMsg = str
  },
  [types.COM_TOAST_TYPE](state, toastType){
    state.toastType = toastType
  },

  [types.COM_LOADDING_STATUS] (state, status) {
    state.isLoading = status
  },
  
  [types.TITLEMSG] (state, str) {
    state.titleMsg = str
  },
  
  [types.TITLECONT] (state, str) {
    state.titleCont = str
  },
  
  [types.TITLEFLAG] (state, status) {
    state.titleFlag = status
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}
