!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react"),require("classnames"),require("react-select")):"function"==typeof define&&define.amd?define(["react","classnames","react-select"],t):"object"==typeof exports?exports.input=t(require("react"),require("classnames"),require("react-select")):(e["kingdee-ui-test"]=e["kingdee-ui-test"]||{},e["kingdee-ui-test"].input=t(e.react,e.classnames,e["react-select"]))}(window,function(e,t,n){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=12)}({0:function(t,n){t.exports=e},1:function(e,n){e.exports=t},12:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),c=n.n(o),u=n(8),i=n.n(u);n(21);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default=function(e){var t,n,r=c()((l(t={"kingdee-input":!0},"kingdee-input_".concat(e.type),!!e.type),l(t,"kingdee-input__".concat(e.status),!!e.status),t)),o=c()((l(n={},"kingdee-input-checkbox",!0),l(n,"kingdee-input-checkbox--".concat(e.status),!!e.status),n)),u={label:e.value,value:e.value};switch(e&&e.options&&e.options.some(function(t){return t.value===e.value})&&e.options.forEach(function(t){t.value===e.value&&(u=t)}),e.type){case"textarea":return a.a.createElement("input",s({onChange:e.onChange},e,{className:r}));case"checkbox":return a.a.createElement("div",{className:o},a.a.createElement("input",s({type:"checkbox"},e,{onChange:function(t){e.onChange&&e.onChange(t,"checkbox")},checked:!!e.value,className:"kingdee-input-checkbox_input"})),a.a.createElement("span",{className:"kingdee-input-checkbox_span"}));case"select":return a.a.createElement(i.a,s({},e,{placeholder:e.placeholder?e.placeholder:"",options:e.options,value:void 0===u?{}:u,className:"react-select",onChange:function(t){e.onChange&&e.onChange(t,"select")}}));default:return a.a.createElement("input",s({},e,{onChange:e.onChange,className:r,style:e.style,type:e.type?e.type:"text"}))}}},21:function(e,t,n){},8:function(e,t){e.exports=n}})});