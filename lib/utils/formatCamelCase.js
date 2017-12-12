'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * [formatCamelCase 将字符串转换小驼峰命名规则]
 * @param  {[string]} str    [需要转换的字符串]
 * @param  {[string]} format [自定义规则]
 * @return {[type]}          [description]
 */
function formatCamelCase() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var format = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';

  var re = new RegExp(format + '(\\w)', 'g');
  return str.charAt(0).toLowerCase() + str.substr(1).replace(re, function (a, b) {
    return b.toUpperCase();
  });
}
exports.default = formatCamelCase;