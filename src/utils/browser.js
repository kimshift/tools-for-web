/*******
 * @description: 浏览器信息
 * @author: 琴时
 */

const ua = navigator.userAgent // 获取设备信息

/*******
 * @description: 浏览器内核
 * @author: 琴时
 * @return {Object} 返回内核信息
 */
export const kernelInfo = {
  trident: ua.indexOf('Trident') > -1, //IE内核
  presto: ua.indexOf('Presto') > -1, //opera内核
  webKit: ua.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
  gecko: ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') == -1, //火狐内核
}

/*******
 * @description: 检测移动端/PC端
 * [移动端:true - PC端:false]
 */
export const isMobile = Boolean(
  ua.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  )
)

/*******
 * @description: android终端
 */
export const isAndroid = ua.indexOf('Android') > -1 || ua.indexOf('Adr') > -1

/*******
 * @description: ios终端
 */
export const isIOS = Boolean(ua.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/))

/*******
 * @description: 微信环境
 */
export const isWeiXn = ua.toLowerCase().includes('micromessenger')

/*******
 * @description: QQ环境
 */
export const isQQ = ua.toLowerCase().includes('qqbrowser')

/*******
 * @description: 钉钉环境
 */
export const isDingTalk = ua.toLowerCase().includes('dingtalk')

/*******
 * @description: 微博环境
 */
export const isWeiBo = ua.toLowerCase().includes('weibo')
