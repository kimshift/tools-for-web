/*******
 * @description: 计算两个参数
 * @param {Number|String} arg1
 * @param {Number|String} arg2
 * @param {String} type [计算类型:sum-加,subtract-减,multiply-乘,divide-除]
 * @return {Number}
 */
const countNumber = (arg1, arg2, type = 'sum') => {
  if (arg1 === undefined || arg2 === undefined) {
    console.log('参数格式不正确')
    return NaN
  }
  if (isNaN(arg1)) arg1 = 0
  if (isNaN(arg2)) arg2 = 0

  // 转字符串类型
  arg1 = arg1.toString()
  arg2 = arg2.toString()

  // 获取小数点位置
  let index1 = arg1.indexOf('.')
  let index2 = arg2.indexOf('.')

  // 获取小数点位数
  let ws1 = 0
  let ws2 = 0
  if (index1 !== -1) {
    ws1 = arg1.split('.')[1].length
  }
  if (index2 !== -1) {
    ws2 = arg2.split('.')[1].length
  }
  let bigger = ws1 > ws2 ? ws1 : ws2 //位数较大值
  let small = ws1 < ws2 ? ws1 : ws2 //位数较小值
  let zeroCount = bigger - small //位数差

  // 去除小数点
  arg1 = arg1.replace('.', '')
  arg2 = arg2.replace('.', '')

  // 位数差额补0
  if (ws1 === small) {
    for (let i = 0; i < zeroCount; i++) {
      arg1 += '0'
    }
  } else {
    for (let i = 0; i < zeroCount; i++) {
      arg2 += '0'
    }
  }

  let result = 0 //结果
  let multiple = 1 //倍数
  for (let i = 0; i < bigger; i++) {
    multiple = multiple * 10
  }

  // 计算结果
  if (type === 'sum') {
    result = parseInt(arg1) + parseInt(arg2)
    result = result / multiple
  } else if (type === 'subtract') {
    result = parseInt(arg1) - parseInt(arg2)
    result = result / multiple
  } else if (type === 'multiply') {
    result = parseInt(arg1) * parseInt(arg2)
    result = result / multiple / multiple
  } else if (type === 'divide') {
    result = parseInt(arg1) / parseInt(arg2)
  }
  return result
}

/*******
 * @description: 获取移动端转换比例
 * @return {*}
 */
export const getScale = (size = 75) => {
  const htmlElement = document.documentElement
  const fontSize = window.getComputedStyle(htmlElement).fontSize
  const scale = countNumber(parseFloat(fontSize), size, 'divide')
  return scale
}

/*******
 * @description: 移动端自适应尺寸转换
 * @return {*}
 */
export const sizeConvert = (number, fontSize) => {
  const scale = getScale(fontSize)
  let value = countNumber(number, scale, 'multiply')
  return value
}
