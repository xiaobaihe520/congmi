(function(){var e={1572:function(e,t,n){"use strict";var o=n(5471),r=n(2505),i=n.n(r);let s={};const l=i().create(s);l.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),l.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=l,window.axios=l,Object.defineProperties(e.prototype,{axios:{get(){return l}},$axios:{get(){return l}}})},o["default"].use(Plugin);var a=function(){var e=this,t=e._self._c;return t("div",[t("el-dialog",{attrs:{title:"登录",visible:e.loginVisible,"show-close":!1,"close-on-click-modal":!1,"close-on-press-escape":!1},on:{"update:visible":function(t){e.loginVisible=t}}},[t("el-form",{attrs:{model:e.loginForm,"label-width":"80px"}},[t("el-form-item"),t("el-form-item",{attrs:{label:"手机号"}},[t("el-input",{model:{value:e.loginForm.username,callback:function(t){e.$set(e.loginForm,"username",t)},expression:"loginForm.username"}})],1),t("el-form-item",{attrs:{label:"密码"}},[t("el-input",{attrs:{"show-password":""},model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1)],1),t("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[t("el-button",{attrs:{type:"primary"},on:{click:e.login}},[e._v("登录")])],1)],1),e._l(e.liveCameras,(function(n){return t("el-button",{key:n.id,staticStyle:{"margin-bottom":"20px"},attrs:{type:"primary"},on:{click:function(t){return e.handlePlay(n)}}},[e._v(" "+e._s(n.name)+" ")])})),t("easy-player",{ref:"easyPlayer",staticStyle:{width:"100%",height:"768px"},attrs:{id:"player","video-url":e.videoUrl,"video-title":e.videoTitle,muted:""}})],2)},u=[],c=n(7378),d=n.n(c),f={components:{EasyPlayer:d()},data(){return{token:null,loginVisible:!0,loginForm:{username:null,password:null},liveCameras:[],videoUrl:null,videoTitle:null}},created(){const e=localStorage.getItem("token");e&&(this.token=e,this.loginVisible=!1,this.getMyLive())},methods:{login(){return this.loginForm.username?this.loginForm.password?void this.request("/api/Account/Login",{strUser:this.loginForm.username,strPwd:this.$md5(this.loginForm.password)},(e=>{this.token=e.Ticket,localStorage.setItem("token",this.token),this.loginVisible=!1,this.getMyLive()})):(this.$message.error("请输入密码"),!1):(this.$message.error("请输入手机号"),!1)},getMyLive(){this.liveCameras=[],this.request("/api/Live/GetMyLive",{classId:"19fe09141cd6443ea2eca989e680289d"},(e=>{e.LiveCameras.forEach((e=>{this.liveCameras.push({id:e.CameraId,name:e.Name})}))}))},handlePlay(e){this.request("/api/Live/GetLiveAuth2",{cameraId:e.id,vType:1,quality:0},(t=>{this.videoUrl=t.AuthUrl,this.videoTitle=e.name}))},request(e,t,n){const o=this.$loading({lock:!0,text:"玩命加载中",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"});i().get(e,{headers:{auth:this.token},params:t}).then((e=>{const t=e.data;200===t.code?n(e.data.data):10011===t.code?(this.token=null,localStorage.removeItem("token"),this.loginVisible=!0,this.$message.error("会话过期，请重新登录")):this.$message.error(t.msg),o.close()})).catch((()=>{this.$message.error("请求失败"),o.close()}))}}},m=f,p=n(1656),h=(0,p.A)(m,a,u,!1,null,null,null),g=h.exports,v=n(1052),b=n.n(v);o["default"].use(b());var y=n(3386),w=n.n(y);o["default"].prototype.$md5=w(),o["default"].config.productionTip=!1,new o["default"]({render:function(e){return e(g)}}).$mount("#app")},6274:function(){},916:function(){}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,r,i){if(!o){var s=1/0;for(c=0;c<e.length;c++){o=e[c][0],r=e[c][1],i=e[c][2];for(var l=!0,a=0;a<o.length;a++)(!1&i||s>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[a])}))?o.splice(a--,1):(l=!1,i<s&&(s=i));if(l){e.splice(c--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var c=e.length;c>0&&e[c-1][2]>i;c--)e[c]=e[c-1];e[c]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.nmd=function(e){return e.paths=[],e.children||(e.children=[]),e}}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,s=o[0],l=o[1],a=o[2],u=0;if(s.some((function(t){return 0!==e[t]}))){for(r in l)n.o(l,r)&&(n.m[r]=l[r]);if(a)var c=a(n)}for(t&&t(o);u<s.length;u++)i=s[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(c)},o=self["webpackChunkcongmi_webui"]=self["webpackChunkcongmi_webui"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(1572)}));o=n.O(o)})();
//# sourceMappingURL=app.6506e66c.js.map