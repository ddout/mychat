(function(e){function o(o){for(var t,a,c=o[0],d=o[1],u=o[2],s=0,f=[];s<c.length;s++)a=c[s],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(t in d)Object.prototype.hasOwnProperty.call(d,t)&&(e[t]=d[t]);l&&l(o);while(f.length)f.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,o=0;o<r.length;o++){for(var n=r[o],t=!0,c=1;c<n.length;c++){var d=n[c];0!==i[d]&&(t=!1)}t&&(r.splice(o--,1),e=a(a.s=n[0]))}return e}var t={},i={index:0},r=[];function a(o){if(t[o])return t[o].exports;var n=t[o]={i:o,l:!1,exports:{}};return e[o].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.e=function(e){var o=[],n=i[e];if(0!==n)if(n)o.push(n[2]);else{var t=new Promise((function(o,t){n=i[e]=[o,t]}));o.push(n[2]=t);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,a.nc&&c.setAttribute("nonce",a.nc),c.src=function(e){return a.p+"static/js/"+({"pages-main-index-index":"pages-main-index-index"}[e]||e)+"."+{"pages-main-index-index":"8a85ea87"}[e]+".js"}(e);var d=new Error;r=function(o){c.onerror=c.onload=null,clearTimeout(u);var n=i[e];if(0!==n){if(n){var t=o&&("load"===o.type?"missing":o.type),r=o&&o.target&&o.target.src;d.message="Loading chunk "+e+" failed.\n("+t+": "+r+")",d.name="ChunkLoadError",d.type=t,d.request=r,n[1](d)}i[e]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(o)},a.m=e,a.c=t,a.d=function(e,o,n){a.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,o){if(1&o&&(e=a(e)),8&o)return e;if(4&o&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var t in e)a.d(n,t,function(o){return e[o]}.bind(null,t));return n},a.n=function(e){var o=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(o,"a",o),o},a.o=function(e,o){return Object.prototype.hasOwnProperty.call(e,o)},a.p="/mychat/",a.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],d=c.push.bind(c);c.push=o,c=c.slice();for(var u=0;u<c.length;u++)o(c[u]);var l=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,o,n){e.exports=n("b4e7")},"0a97":function(e,o,n){var t=n("2985");t.__esModule&&(t=t.default),"string"===typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);var i=n("4f06").default;i("4c83ad68",t,!0,{sourceMap:!1,shadowMode:!1})},"136f":function(e,o,n){"use strict";n.d(o,"b",(function(){return t})),n.d(o,"c",(function(){return i})),n.d(o,"a",(function(){}));var t=function(){var e=this.$createElement,o=this._self._c||e;return o("App",{attrs:{keepAliveInclude:this.keepAliveInclude}})},i=[]},2985:function(e,o,n){var t=n("24fb");o=t(!1),o.push([e.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* uni.scss */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */.u-line-1{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.u-line-2{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button::after{border:none}.u-hover-class{opacity:.7}.u-primary-light{color:#ecf5ff}.u-warning-light{color:#fdf6ec}.u-success-light{color:#f5fff0}.u-error-light{color:#fef0f0}.u-info-light{color:#f4f4f5}.u-primary-light-bg{background-color:#ecf5ff}.u-warning-light-bg{background-color:#fdf6ec}.u-success-light-bg{background-color:#f5fff0}.u-error-light-bg{background-color:#fef0f0}.u-info-light-bg{background-color:#f4f4f5}.u-primary-dark{color:#398ade}.u-warning-dark{color:#f1a532}.u-success-dark{color:#53c21d}.u-error-dark{color:#e45656}.u-info-dark{color:#767a82}.u-primary-dark-bg{background-color:#398ade}.u-warning-dark-bg{background-color:#f1a532}.u-success-dark-bg{background-color:#53c21d}.u-error-dark-bg{background-color:#e45656}.u-info-dark-bg{background-color:#767a82}.u-primary-disabled{color:#9acafc}.u-warning-disabled{color:#f9d39b}.u-success-disabled{color:#a9e08f}.u-error-disabled{color:#f7b2b2}.u-info-disabled{color:#c4c6c9}.u-primary{color:#3c9cff}.u-warning{color:#f9ae3d}.u-success{color:#5ac725}.u-error{color:#f56c6c}.u-info{color:#909399}.u-primary-bg{background-color:#3c9cff}.u-warning-bg{background-color:#f9ae3d}.u-success-bg{background-color:#5ac725}.u-error-bg{background-color:#f56c6c}.u-info-bg{background-color:#909399}.u-main-color{color:#303133}.u-content-color{color:#606266}.u-tips-color{color:#909193}.u-light-color{color:#c0c4cc}.u-safe-area-inset-top{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}uni-toast{z-index:10090}uni-toast .uni-toast{z-index:10090}::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}uni-page-body{font-size:%?28?%}',""]),e.exports=o},"2f52":function(e,o,n){"use strict";(function(e){var o=n("4ea4").default;n("13d5"),n("d3b7"),n("ddb0"),n("ac1f"),n("5319");var t=o(n("e143")),i={keys:function(){return[]}};e["____1316232____"]=!0,delete e["____1316232____"],e.__uniConfig={easycom:{"^u-(.*)":"uview-ui/components/u-$1/u-$1.vue","^unicloud-db$":"@dcloudio/uni-cli-shared/components/unicloud-db.vue","^uniad$":"@dcloudio/uni-cli-shared/components/uniad.vue","^ad-rewarded-video$":"@dcloudio/uni-cli-shared/components/ad-rewarded-video.vue","^ad-fullscreen-video$":"@dcloudio/uni-cli-shared/components/ad-fullscreen-video.vue","^ad-interstitial$":"@dcloudio/uni-cli-shared/components/ad-interstitial.vue","^ad-interactive$":"@dcloudio/uni-cli-shared/components/ad-interactive.vue","^page-meta$":"@dcloudio/uni-cli-shared/components/page-meta.vue","^navigation-bar$":"@dcloudio/uni-cli-shared/components/navigation-bar.vue","^uni-match-media$":"@dcloudio/uni-cli-shared/components/uni-match-media.vue"},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"AI问答",navigationBarBackgroundColor:"#ffffff",backgroundColor:"#ffffff"},uniIdRouter:{}},e.__uniConfig.compilerVersion="3.6.18",e.__uniConfig.darkmode=!1,e.__uniConfig.themeConfig={},e.__uniConfig.uniPlatform="h5",e.__uniConfig.appId="__UNI__1316232",e.__uniConfig.appName="mychat",e.__uniConfig.appVersion="1.0.0",e.__uniConfig.appVersionCode="100",e.__uniConfig.router={mode:"hash",base:"/mychat/"},e.__uniConfig.publicPath="/mychat/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.aMapKey=void 0,e.__uniConfig.aMapSecurityJsCode=void 0,e.__uniConfig.aMapServiceHost=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=i.keys().reduce((function(e,o){var n=o.replace(/\.\/(uni-app.)?(.*).json/,"$2"),t=i(o);return Object.assign(e[n]||(e[n]={}),t.common||t),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=n.e,t.default.component("pages-main-index-index",(function(e){var o={component:n.e("pages-main-index-index").then(function(){return e(n("bf08"))}.bind(null,n)).catch(n.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(o.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(o.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),o})),e.__uniRoutes=[{path:"/",alias:"/pages/main/index/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0},__uniConfig.globalStyle,{navigationBarTitleText:"AI问答",enablePullDownRefresh:!1,navigationStyle:"custom"})},[e("pages-main-index-index",{slot:"page"})])}},meta:{id:1,name:"pages-main-index-index",isNVue:!1,maxWidth:0,pagePath:"pages/main/index/index",isQuit:!0,isEntry:!0,windowTop:0}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,n("c8ba"))},"67bc":function(e,o,n){"use strict";n("7a82"),Object.defineProperty(o,"__esModule",{value:!0}),o.default=void 0;var t={onLaunch:function(){console.log("App Launch")},onShow:function(){},onHide:function(){console.log("App Hide")}};o.default=t},"8e89":function(e,o,n){"use strict";n.r(o);var t=n("67bc"),i=n.n(t);for(var r in t)["default"].indexOf(r)<0&&function(e){n.d(o,e,(function(){return t[e]}))}(r);o["default"]=i.a},9370:function(e,o,n){"use strict";var t=n("0a97"),i=n.n(t);i.a},b4e7:function(e,o,n){"use strict";var t=n("4ea4").default,i=t(n("5530"));n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("2f52"),n("1c31");var r=t(n("ee2c")),a=t(n("e143")),c=t(n("d143"));a.default.use(c.default),a.default.config.productionTip=!1,r.default.mpType="app";var d=new a.default((0,i.default)({},r.default));d.$mount()},ee2c:function(e,o,n){"use strict";n.r(o);var t=n("136f"),i=n("8e89");for(var r in i)["default"].indexOf(r)<0&&function(e){n.d(o,e,(function(){return i[e]}))}(r);n("9370");var a=n("f0c5"),c=Object(a["a"])(i["default"],t["b"],t["c"],!1,null,null,null,!1,t["a"],void 0);o["default"]=c.exports}});