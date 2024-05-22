/*******
 * @description: 获取哈希路由参数
 * @author: 琴时
 * @param {String} key
 * @return {*}
 */
export const getHashParam = key => {
  const reg = new RegExp('(^|&)' + key + '=([^&]*)(&|$)')
  const queryString = window.location.href.split('?')[1] || ''
  const result = queryString.match(reg)
  return result ? decodeURIComponent(result[2]) : null
}
