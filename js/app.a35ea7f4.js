(function(e){function t(t){for(var n,r,a=t[0],p=t[1],c=t[2],l=0,u=[];l<a.length;l++)r=a[l],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&u.push(i[r][0]),i[r]=0;for(n in p)Object.prototype.hasOwnProperty.call(p,n)&&(e[n]=p[n]);d&&d(t);while(u.length)u.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var e,t=0;t<o.length;t++){for(var s=o[t],n=!0,a=1;a<s.length;a++){var p=s[a];0!==i[p]&&(n=!1)}n&&(o.splice(t--,1),e=r(r.s=s[0]))}return e}var n={},i={app:0},o=[];function r(t){if(n[t])return n[t].exports;var s=n[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=n,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(s,n,function(t){return e[t]}.bind(null,n));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],p=a.push.bind(a);a.push=t,a=a.slice();for(var c=0;c<a.length;c++)t(a[c]);var d=p;o.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"01f8":function(e,t,s){"use strict";var n=s("45fd"),i=s.n(n);i.a},2869:function(e,t,s){},4561:function(e,t,s){"use strict";var n=s("2869"),i=s.n(n);i.a},"45fd":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var n=s("2b0e"),i=s("bc3a"),o=s.n(i),r=s("a7fe"),a=s.n(r),p=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h2",[e._v(" Vue - coding snippets ")]),s("addsnippet"),s("latestsnippets"),s("removesnippet")],1)},c=[],d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"addsnippet-form"},[s("h3",[e._v(" Add snippet ")]),s("div",[s("p",{directives:[{name:"show",rawName:"v-show",value:e.succeeded,expression:"succeeded"}]},[e._v(" Added snippet to API! ")]),s("p",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}]},[e._v(" Something went wrong! Try again! ")])]),s("form",[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.snippet.title,expression:"snippet.title"}],staticClass:"title-box",attrs:{type:"text",placeholder:"Title"},domProps:{value:e.snippet.title},on:{input:function(t){t.target.composing||e.$set(e.snippet,"title",t.target.value)}}})]),s("div",[s("textarea",{directives:[{name:"model",rawName:"v-model",value:e.snippet.content,expression:"snippet.content"}],staticClass:"content-box",attrs:{type:"text",placeholder:"Code here..."},domProps:{value:e.snippet.content},on:{input:function(t){t.target.composing||e.$set(e.snippet,"content",t.target.value)}}})])]),s("button",{staticClass:"addbutton",on:{click:e.addSnippet}},[e._v(" Add snippet ")])])},l=[],u="https://forverkliga.se/JavaScript/api/api-snippets.php",v={name:"addsnippet",data:function(){return{snippet:{title:"",content:""},succeeded:!1,error:!1}},methods:{addSnippet:function(){var e=this;o.a.post(u,{add:"",title:this.snippet.title,content:this.snippet.content}).then((function(t){e.snippet={title:t.data.title,contentL:t.data.content},console.log(t),t?(e.succeeded=!0,e.error=!1):(e.succeeded=!1,e.error=!0)})).catch((function(e){console.log("Error: ",e)}))}}},h=v,f=(s("7fa9"),s("2877")),m=Object(f["a"])(h,d,l,!1,null,"51dbbf27",null),w=m.exports,b=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"latestsnippets"},[s("h3",[e._v(" Latest snippets ")]),s("div",[s("p",{directives:[{name:"show",rawName:"v-show",value:e.latestSucceeded,expression:"latestSucceeded"}]},[e._v(" Got latest snippets from API! ")]),s("p",{directives:[{name:"show",rawName:"v-show",value:e.latestError,expression:"latestError"}]},[e._v(" Something went wrong! Try again! ")])]),s("button",{staticClass:"showbutton",on:{click:e.getLatestSnippets}},[e._v(" Show latest snippets ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showLatest,expression:"showLatest"}],staticClass:"list"},e._l(e.latestSnippets,(function(t){return s("div",{key:t.id,staticClass:"snippet"},[s("div",[e._v(" "+e._s(t.title)+" ")]),s("div",[e._v(" ID:"+e._s(t.id)+" ")]),s("div",[e._v(" "+e._s(t.content)+" ")])])})),0)]),s("div",{staticClass:"latestsnippets"},[s("h3",[e._v(" Best snippets ")]),s("div",[s("p",{directives:[{name:"show",rawName:"v-show",value:e.bestSucceeded,expression:"bestSucceeded"}]},[e._v(" Got best snippets from API! ")]),s("p",{directives:[{name:"show",rawName:"v-show",value:e.bestError,expression:"bestError"}]},[e._v(" Something went wrong! Try again! ")])]),s("button",{staticClass:"showbutton",on:{click:e.getBestSnippets}},[e._v(" Show best snippets ")]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.showBest,expression:"showBest"}],staticClass:"list"},e._l(e.bestSnippets,(function(t){return s("div",{key:t.id,staticClass:"snippet"},[s("div",[e._v(" "+e._s(t.title)+" ")]),s("div",[e._v(" ID:"+e._s(t.id)+" ")]),s("div",[e._v(" "+e._s(t.content)+" ")]),s("div",[e._v(" Score:"+e._s(t.score)+" ")])])})),0)])])},g=[],_="https://www.forverkliga.se/JavaScript/api/api-snippets.php?latest",S="https://www.forverkliga.se/JavaScript/api/api-snippets.php?best",x={name:"latestsnippets",data:function(){return{showLatest:!1,latestSnippets:null,latestSucceeded:!1,latestError:!1,showBest:!1,bestSnippets:null,bestSucceeded:!1,bestError:!1}},methods:{getLatestSnippets:function(){var e=this;this.showLatest=!0,this.bestSucceeded=!1,this.bestError=!1,this.showBest=!1,o.a.get(_).then((function(t){e.latestSnippets=t.data,console.log(t.data),t?(e.latestSucceeded=!0,e.latestError=!1):(e.latestSucceeded=!1,e.latestError=!0)})).catch((function(e){console.log("Error:",e)}))},getBestSnippets:function(){var e=this;this.latestSucceeded=!1,this.latestError=!1,this.showLatest=!1,this.showBest=!0,o.a.get(S).then((function(t){e.bestSnippets=t.data,console.log(t.data),t?(e.bestSucceeded=!0,e.bestError=!1):(e.bestSucceeded=!1,e.bestError=!0)})).catch((function(e){console.log("Error:",e)}))}}},y=x,E=(s("8a72"),Object(f["a"])(y,b,g,!1,null,"0f1046d8",null)),C=E.exports,O=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"removesnippet-form"},[s("h3",[e._v(" Remove snippet ")]),s("div",[s("p",{directives:[{name:"show",rawName:"v-show",value:e.succeeded,expression:"succeeded"}]},[e._v(" Removed snippet from API! ")]),s("p",{directives:[{name:"show",rawName:"v-show",value:e.error,expression:"error"}]},[e._v(" Something went wrong! Try again! ")])]),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.id,expression:"id"}],staticClass:"id-box",attrs:{type:"text",placeholder:"Id"},domProps:{value:e.id},on:{input:function(t){t.target.composing||(e.id=t.target.value)}}})]),s("button",{staticClass:"removebutton",on:{click:e.removeSnippet}},[e._v(" Remove snippet ")])])},P=[],j="https://forverkliga.se/JavaScript/api/api-snippets.php",k={name:"removesnippet",data:function(){return{id:"",succeeded:!1,error:!1}},methods:{removeSnippet:function(){var e=this;o.a.post(j,{delete:"",id:this.id}).then((function(t){console.log(t),t?(e.succeeded=!0,e.error=!1):(e.succeeded=!1,e.error=!0)})).catch((function(e){console.log("Error: ",e)}))}}},N=k,L=(s("4561"),Object(f["a"])(N,O,P,!1,null,"88c9f7b2",null)),A=L.exports,B={name:"App",components:{addsnippet:w,latestsnippets:C,removesnippet:A},data:function(){return{showmenu:!0,showaddsnippet:!1,showlatestsnippets:!1,showremovesnippet:!1}}},T=B,I=(s("01f8"),Object(f["a"])(T,p,c,!1,null,"2d1ca83a",null)),$=I.exports;n["a"].config.productionTip=!1,n["a"].use(a.a,o.a),new n["a"]({render:function(e){return e($)}}).$mount("#app")},"7fa9":function(e,t,s){"use strict";var n=s("d503"),i=s.n(n);i.a},"8a25":function(e,t,s){},"8a72":function(e,t,s){"use strict";var n=s("8a25"),i=s.n(n);i.a},d503:function(e,t,s){}});
//# sourceMappingURL=app.a35ea7f4.js.map