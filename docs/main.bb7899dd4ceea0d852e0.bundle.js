(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{0:function(e,t,n){n(507),n(1222),e.exports=n(1101)},1:function(e,t){},1222:function(e,t,n){"use strict";n.r(t);n(616),n(665);var o=n(10),r=n(2),i=n(65),c=n.n(i),a="ThemeSwitcher/Theme",u={CONSOLE:"console",SENDGRID:"sendgrid"},l={CHANGE_THEME:"".concat("twilio/theme-switcher","/change_theme")};function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={name:"eaeacs",styles:"margin:10px;"},w={name:"1hijivq",styles:"font-weight:700;margin-right:4px;"},v=function(e){function t(){var e,n,o,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var i=arguments.length,c=new Array(i),f=0;f<i;f++)c[f]=arguments[f];return o=this,r=(e=p(t)).call.apply(e,[this].concat(c)),n=!r||"object"!==s(r)&&"function"!=typeof r?h(o):r,m(h(n),"state",{theme:localStorage.getItem(a)||u.CONSOLE}),m(h(n),"onChangeTheme",(function(e){var t=n.props.channel,o=u[e.target.value];n.setState({theme:o}),t.emit(l.CHANGE_THEME,o)})),n}var n,r,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(r=[{key:"componentWillUnmount",value:function(){var e=this.state.theme;localStorage.setItem(a,e)}},{key:"render",value:function(){if(!this.props.active)return null;var e,t=this.state.theme,n=Object.keys(u).map((function(e,t){return Object(o.jsx)("option",{key:t,value:e},e.toLowerCase())}));return Object(o.jsx)("aside",{css:y},Object(o.jsx)("label",{css:w},"Theme Selector:"),Object(o.jsx)("select",{value:(e=t,Object.keys(u).find((function(t){return u[t]===e}))),onChange:this.onChangeTheme},n))}}])&&f(n.prototype,r),i&&f(n,i),t}(r.Component);c.a.register("twilio/theme-switcher",(function(e){c.a.addPanel("".concat("twilio/theme-switcher","/panel"),{title:"Theme Switcher",render:function(t){var n=t.active;return Object(o.jsx)(v,{key:"theme-switcher-panel",channel:c.a.getChannel(),api:e,active:n})}})}));n(993),n(1030)}},[[0,1,2]]]);