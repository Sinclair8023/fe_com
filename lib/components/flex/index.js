'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * Created by Sinclair on 2017/6/2.
                                                                                                                                                                                                                              */


var styles = { // 注：如果需要兼容性设置flex属性，可以在对应位置按顺序补充浏览器前缀
  flex: { display: 'flex' },
  dir: {
    row: { flexDirection: 'row' },
    rowR: { flexDirection: 'row-reverse' },
    column: { flexDirection: 'column' },
    columnR: { flexDirection: 'column-reverse' }
  },
  justify: {
    start: { justifyContent: 'flex-start' },
    end: { justifyContent: 'flex-end' },
    center: { justifyContent: 'center' },
    between: { justifyContent: 'space-between' },
    around: { justifyContent: 'space-around' }
  },
  alignItems: {
    start: { alignItems: 'flex-start' },
    end: { alignItems: 'flex-end' },
    center: { alignItems: 'center' },
    baseline: { alignItems: 'baseline' },
    stretch: { alignItems: 'stretch' }
  },
  alignSelf: {
    start: { alignSelf: 'flex-start' },
    end: { alignSelf: 'flex-end' },
    center: { alignSelf: 'center' },
    baseline: { alignSelf: 'baseline' },
    stretch: { alignSelf: 'stretch' },
    auto: { alignSelf: 'auto' }
  },
  alignContent: {
    start: { alignContent: 'flex-start' },
    end: { alignContent: 'flex-end' },
    center: { alignContent: 'center' },
    between: { alignContent: 'space-between' },
    around: { alignContent: 'space-around' },
    stretch: { alignContent: 'stretch' }
  },
  wrap: {
    nowrap: { flexWrap: 'nowrap' },
    wrap: { flexWrap: 'wrap' },
    wrapR: { flexWrap: 'wrap-reverse' },
    true: { flexWrap: 'wrap' }
  }
};
var Flex = function Flex(props) {
  var dir = props.dir,
      justify = props.justify,
      align = props.align,
      Component = props.Component,
      style = props.style,
      wrap = props.wrap,
      width = props.width,
      height = props.height,
      alignContent = props.alignContent,
      order = props.order,
      getRef = props.getRef,
      others = _objectWithoutProperties(props, ['dir', 'justify', 'align', 'Component', 'style', 'wrap', 'width', 'height', 'alignContent', 'order', 'getRef']);

  style = _extends({}, styles.flex, styles.wrap[wrap], styles.dir[dir], styles.justify[justify], styles.alignItems[align], styles.alignContent[alignContent], {
    order: order
  }, style);
  if (width !== undefined) style.width = width;
  if (height !== undefined) style.height = height;
  if (typeof width === 'number') style.minWidth = width;
  if (typeof height === 'number') style.minHeight = height;
  return _react2.default.createElement(Component, _extends({ ref: getRef, style: style }, others));
};
Flex.defaultProps = {
  dir: 'row', // 主轴方向
  justify: 'start', // 主轴对齐方式
  align: 'start', // 交叉轴对齐方式
  Component: 'div', // render as
  style: {}, // 自定义行内css
  wrap: 'nowrap', // 换行 nowrap wrap wrapR
  alignContent: 'start', // 多轴线对齐方式
  order: 0, // 排序序号 排序方式从小到大
  getRef: function getRef(ref) {
    return ref;
  } // 获取ref stateless component 只好这么处理了
};
Flex.propTypes = {
  dir: _react2.default.PropTypes.oneOf(['row', 'column', 'rowR', 'columnR']),
  justify: _react2.default.PropTypes.oneOf(['start', 'end', 'center', 'between', 'around']),
  align: _react2.default.PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch']),
  Component: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.element]),
  style: _react2.default.PropTypes.object,
  wrap: _react2.default.PropTypes.oneOf(['nowrap', 'wrap', 'wrapR']),
  alignContent: _react2.default.PropTypes.oneOf(['start', 'end', 'center', 'between', 'around', 'stretch']),
  width: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  height: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.string, _react2.default.PropTypes.number]),
  order: _react2.default.PropTypes.number,
  getRef: _react2.default.PropTypes.func
};
var Item = function Item(props) {
  var grow = props.grow,
      Component = props.Component,
      flex = props.flex,
      style = props.style,
      order = props.order,
      alignSelf = props.alignSelf,
      getRef = props.getRef,
      others = _objectWithoutProperties(props, ['grow', 'Component', 'flex', 'style', 'order', 'alignSelf', 'getRef']);

  style = _extends({ flexGrow: grow }, styles.alignSelf[alignSelf], style);
  if (flex) {
    return _react2.default.createElement(Flex, _extends({
      Component: Component,
      style: style,
      order: order,
      getRef: getRef
    }, others));
  }
  style.order = order;
  return _react2.default.createElement(Component, _extends({ ref: getRef, style: style }, others));
};
Item.defaultProps = {
  grow: 1, // 占有比例
  Component: 'div',
  flex: false, // 是否启用flex
  order: 0, // 排序序号
  style: {},
  alignSelf: 'auto', // 自定义交叉轴对齐方式 覆盖父元素 align属性（只对该element有效）
  getRef: function getRef(ref) {
    return ref;
  }
};
Item.propTypes = {
  grow: _react2.default.PropTypes.number,
  Component: _react2.default.PropTypes.element,
  flex: _react2.default.PropTypes.bool,
  order: _react2.default.PropTypes.number,
  style: _react2.default.PropTypes.object,
  alignSelf: _react2.default.PropTypes.oneOf(['start', 'end', 'center', 'baseline', 'stretch', 'auto']),
  getRef: _react2.default.PropTypes.func
};
Flex.Item = Item;
exports.default = Flex;
module.exports = exports['default'];