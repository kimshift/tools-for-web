/*******
 * @description: 将txt的blob转文本内容
 * @author: 琴时
 * @param {*} blob
 * @return {*}
 */
export const blobToText = blob => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = function () {
      resolve(reader.result)
    }
    reader.onerror = function () {
      reject(new Error('无法读取Blob对象'))
    }
    if (blob.constructor !== File) {
      reject(new Error('该数据不是blob'))
      return
    }
    reader.readAsText(blob)
  })
}

/*******
 * @description: 下载流文件
 * @author: 琴时
 * @param {*} stream 文件流
 * @param {String} fileName 文件名
 * @return {*}
 */
export const downloadStream = (stream, fileName) => {
  try {
    const fileTypeMime = {
      png: 'image/png',
      jpeg: 'image/jpeg',
      gif: 'image/gif',
      svg: 'image/svg+xml',
      tiff: 'image/tiff',
      doc: 'application/msword',
      docx: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
      txt: 'text/plain',
      pdf: 'application/pdf',
      mp4: 'video/mp4',
      mp3: 'audio/mpeg',
      rar: 'application/x-rar-compressed',
      html: 'text/html',
      xml: 'text/xml',
      json: 'application/json',
      css: 'text/css',
      js: 'text/javascript',
      ppt: 'application/vnd.ms-powerpoint',
      pptx: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
      csv: 'text/csv',
      xls: 'application/vnd.ms-excel',
      xlsx: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      zip: 'application/zip',
      '7z': 'application/x-7z-compressed',
    }
    let suffix = fileName.slice(fileName.indexOf('.') + 1) //获取文件后缀
    let blob = new Blob([stream], { type: fileTypeMime[suffix] }) //创建blob对象
    let aLink = document.createElement('a') //创建a标签
    document.body.appendChild(aLink) //末尾添加新的子节点
    aLink.style.display = 'none' //将a标签隐藏
    let blobURL = URL.createObjectURL(blob) //将blob转换成URL
    aLink.href = aLink.download = fileName //配置下载文件名
    aLink.click() //自动触发点击a标签[下载文件]
    document.body.removeChild(aLink) //移除a标签
    URL.revokeObjectURL(blobURL) // 释放blob URL地址
  } catch (error) {
    console.log('下载异常:', error.message)
  }
}

/*******
 * @description: 图片转base64
 * @author: 琴时
 * @param {File} fil
 * @return {*}
 */
export const getBase64 = file => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => resolve(reader.result)
    reader.onerror = error => reject(error)
  })
}
