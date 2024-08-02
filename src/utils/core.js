/*******
 * @description: 创建script标签加载js
 * @author: 琴时
 * @param {String} url
 * @return {*}
 */
export const createScript = (url = '') => {
  let scriptTags = window.document.querySelectorAll('script')
  let len = scriptTags.length
  let i = 0
  // 截取字符串,去掉可能url是相对路径的
  url = url.indexOf('.') === 0 ? url.substr(1) : url
  let _url = location.origin + url
  return new Promise((resolve, reject) => {
    var isHas = false
    for (i = 0; i < len; i++) {
      var src = scriptTags[i].src
      if (src && src === _url) {
        isHas = true
        resolve()
      }
    }
    if (!isHas) {
      let node = document.createElement('script')
      node.type = 'text/javascript'
      node.src = url
      node.onload = resolve
      document.body.appendChild(node)
    }
  })
}

/*******
 * @description: 复制文本
 * @author: 琴时
 * @param {String} text
 * @return {*}
 */
export const copeText = (() => {
  if (navigator.clipboard) {
    return (text) => {
      navigator.clipboard.writeText(text)
    }
  }
  return (text) => {
    const input = document.createElement('input')
    input.setAttribute('value', text)
    document.body.appendChild(input)
    input.select()
    document.execCommand('copy')
    document.body.removeChild(input)
  }
})()
