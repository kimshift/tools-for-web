/*******
 * @description: 缓存工具
 * @author: 琴时
 */
import store from 'store2'
export default store

/*******
 * @description: localStorage缓存
 * get:获取缓存|set:设置缓存|remove:删除缓存
 */
const local = store.local
local.getItem = local.get
local.setItem = local.set
local.removeItem = local.remove
/*******
 * @description: sessionStorage缓存
 * get:获取缓存|set:设置缓存|remove:删除缓存
 */

const session = store.session
session.getItem = session.get
session.setItem = session.set
session.removeItem = session.remove
export { session, local }
/*******
 * @description: 设置有效期信息
 * @author: 琴时
 * @param {Number} value [到期时间，单位毫秒] [默认30分钟]
 */
export const setExpires = (value = 30 * 60 * 1000) => {
  session.set('user_last_time', +new Date()) //最后一次设置缓存时间
  session.set('user_expires', value) //设置到期时间，单位毫秒
}

/*******
 * @description: 获取有效期信息
 * @author: 琴时
 * @return {Boolean} true:未过期 false:已过期
 */
export const getExpires = () => {
  const lastTime = session.get('user_last_time') //最后登录时间
  const expires = session.get('user_expires') //过期时间
  if (!lastTime || !expires) return false //无记录==>过期
  const nowTime = +new Date() // 当前时间戳
  const times = nowTime - (lastTime + expires) // 剩余时间总毫秒数
  return times < 0
}

/*******
 * @description: 移除有效期信息
 * @author: 琴时
 */
export const removeExpires = () => {
  session.remove('user_last_time')
  session.remove('user_expires')
}

/*******
 * @description: 获取cookie
 * @author: 琴时
 * @param {String} key
 * @return {String}
 */
export const getCookie = (key) => {
  if (typeof document === 'undefined') return ''
  const name = key + '='
  const ca = document.cookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim()
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

/*******
 * @description: 获取所有cookie
 * @author: 琴时
 * @return {Array}
 */
export const getCookies = () => {
  let cookies = []
  if (typeof document === 'undefined') return cookies
  if (document.cookie.length === 0) return cookies
  let array = document.cookie.split('; ') //通过分号连空格将字符串切割成数组
  cookies = array.map((item) => {
    let [key, value] = item.split('=') // 通过=再次切割
    return { key, value }
  })
  return cookies
}

/*******
 * @description: 设置cookie
 * @author: 琴时
 * @param {String} key   [键名]
 * @param {String} value [键值]
 * @param {Number} day   [有效期/天] | 不传默认当前会话有效
 * @return {*}
 */
export const setCookie = (key, value, day) => {
  let cookie = key + '=' + value + '; path=/'

  if (day != undefined) {
    const d = new Date()
    d.setTime(d.getTime() + day * 24 * 60 * 60 * 1000)
    const expires = '; expires=' + d.toGMTString()
    cookie += expires
  }
  if (typeof document === 'undefined') return
  document.cookie = cookie
}

/*******
 * @description: 删除指定cookie
 * @author: 琴时
 * @param {*} key [指定cookies的键]
 * @return {*}
 */
export const removeCookie = (key) => {
  setCookie(key, '', -1) // 将生命周期改为-1
}
/*******
 * @description:删除所有cookie
 * @author: 琴时
 * @return {*}
 */
export const removeCookies = () => {
  getCookies().forEach((cookie) => {
    setCookie(cookie.key, '', -1) //将生命周期改为-1==>使其失效
  })
}
