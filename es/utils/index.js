/**
 * [formatCamelCase 将字符串转换小驼峰命名规则]
 * @param  {[string]} str    [需要转换的字符串]
 * @param  {[string]} format [自定义规则]
 * @return {[type]}          [description]
 */
export function formatCamelCase(str = '', format = '_') {
  let re = new RegExp(`${format}(\\w)`, 'g')
  return str.charAt(0).toLowerCase() + str.substr(1).replace(re, (a, b) => b.toUpperCase())
}