"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.per2num = per2num;
/**
 * 百分比转换
 * @param  {[type]} per [description]
 * @return {[type]}     [description]
 */
function per2num(per) {
  return ("" + per).replace(/([0-9.]+)%/, function (a, b) {
    return +b / 100;
  });
}