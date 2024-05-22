/*******
 * @description: 浏览器-javascript工具库导出配置
 * @author: 琴时
 */

// 文件类
export { blobToText, downloadStream, getBase64 } from './utils/files'

// 缓存类
export {
  default as store,
  local,
  session,
  setExpires,
  getExpires,
  getCookie,
  setCookie,
} from './utils/store'

// 浏览器信息类
export {
  kernelInfo,
  isMobile,
  isIOS,
  isAndroid,
  isWeiXn,
  isQQ,
  isDingTalk,
  isWeiBo,
} from './utils/browser'

// 路由类
export { getHashParam } from './utils/route'

// 移动端类
export { getScale, sizeConvert } from './utils/mobile'

// 脚本类
export { createScript } from './utils/core'
