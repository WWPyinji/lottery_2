import store from '../vuex/store'


/**
 * Toast公共方法
 */
export function alert(str, toastType) {
  store.dispatch('showToast', true)
  store.dispatch('toastMsg', str)
  store.dispatch('toastType', toastType)
  setTimeout(() => {
    store.dispatch('showToast', false);
  }, 2000);
}
export function tit(str, strs, toastType) {
  store.dispatch('titleMsg', str)
  store.dispatch('titleCont', strs)
  store.dispatch('titleFlag', toastType)
setTimeout(() => {
    store.dispatch('showToast', false);
}, 2000);  
}
/**
 *  
 * @param loadingType
 */
export function showLoading(isLoading) {
  store.dispatch('setLoadingState', isLoading);
}

/**
 * 字符串非空判断
 *
 * @param {string}
 *            msg 字符串
 * @author 张威
 * @date 2017年4月22日
 */

export function isNullString(targetStr) {
  if (!targetStr || targetStr === '' || targetStr === undefined) {
    return true;
  }
  return false;
}

