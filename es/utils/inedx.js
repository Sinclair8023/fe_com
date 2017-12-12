/**
 * 百分比转换
 * @param  {[type]} per [description]
 * @return {[type]}     [description]
 */
export function per2num(per) {
  return `${per}`.replace(/([0-9.]+)%/, (a, b) => +b / 100)
}