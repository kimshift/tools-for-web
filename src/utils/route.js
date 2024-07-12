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

/*******
 * @description: 获取路由参数
 * @author: 琴时
 * @return {*}
 */
export const getQueryParams = () => {
  const queryString = window.location.href.split('?')[1] || ''
  if (!queryString) return null
  const params = {}
  queryString.split('&').forEach(param => {
    const [key, value] = param.split('=')
    params[decodeURIComponent(key)] = decodeURIComponent(value)
  })
  return params
}

// 获取当前路径
export function getPath() {
  const { pathname } = window.location
  const currentPath = pathname.replace(/.html$/, '')
  // 兼容中文路径
  const okPaths = [currentPath, decodeURIComponent(currentPath)]
  // 兼容 /(index.md)
  if (currentPath.endsWith('/')) {
    okPaths.push(...[`${currentPath}index`, `${decodeURIComponent(currentPath)}index`])
  }
  return [...new Set(okPaths)]
}

/*******
 * @description: 清除.html后缀
 * @author: 琴时
 * @param {Boolean} cleanUrls [是否清除]
 * @param {String} path
 * @return {String}
 */
export function wrapperCleanUrls(cleanUrls, path = '') {
  const tempUrl = path.replace(/\.html$/, '')
  return cleanUrls ? tempUrl : `${tempUrl}.html`
}
