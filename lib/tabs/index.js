!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames")):"function"==typeof define&&define.amd?define(["react","classnames"],t):"object"==typeof exports?exports.tabs=t(require("react"),require("classnames")):(e["kingdee-ui-test"]=e["kingdee-ui-test"]||{},e["kingdee-ui-test"].tabs=t(e.react,e.classnames))}(window,function(e,t){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=28)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},2:function(e,t,n){e.exports=n(5)()},27:function(e,t,n){},28:function(e,t,n){"use strict";n.r(t);var r=n(0),o=n.n(r),i=n(1),u=n.n(i);n(27);function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function c(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function s(e,t){return(s=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=f(this,l(t).call(this,e));var r=e.defaultActiveKey,o=e.needContent;return n.state={defaultActiveKey:r,needContent:!!o},n}var n,i,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&s(e,t)}(t,r["Component"]),n=t,(i=[{key:"handleClick",value:function(e){var t=this.props.onChange;"function"==typeof t&&t(e)}},{key:"render",value:function(){var e=this,t=this.state,n=t.defaultActiveKey,i=t.noChange,a=t.needContent,c=this.props,f=c.children,l=c.activeKey;return o.a.createElement("div",{className:"kingdee-ui-tabs"},o.a.createElement("div",{className:"kingdee-ui-tabs_list"},r.Children.map(f,function(t){if(null===t)return null;var r=t.key,i=t.type,a=t.props,c=u()({"kingdee-ui-tabs_item":!0,"kingdee-ui-tabs_item--active":void 0!==l?l===r:n===r});return"TabPane"===i.name?o.a.createElement("div",{className:c,key:r,onClick:function(t){e.handleClick(r)}},a.tab):null})),a?o.a.createElement("div",null,r.Children.map(f,function(e,t){var r=e.key;if("TabPane"===e.type.name)return i?void 0!==n?r===n&&o.a.createElement("div",null,e):0===t&&o.a.createElement("div",null,e):r===l&&o.a.createElement("div",null,e)})):null)}}])&&c(n.prototype,i),a&&c(n,a),t}();n(2);function y(e){return(y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function d(e,t){return!t||"object"!==y(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h,O,_,g=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),d(this,m(t).apply(this,arguments))}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}(t,o.a.Component),n=t,(r=[{key:"render",value:function(){return o.a.createElement("div",null,this.props.children)}}])&&b(n.prototype,r),i&&b(n,i),t}();_="TabPane",(O="name")in(h=g)?Object.defineProperty(h,O,{value:_,enumerable:!0,configurable:!0,writable:!0}):h[O]=_;var j=g;p.Tabpane=j;t.default=p},5:function(e,t,n){"use strict";var r=n(6);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,u){if(u!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},6:function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}})});