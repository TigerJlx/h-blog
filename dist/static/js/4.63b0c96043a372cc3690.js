webpackJsonp([4],{"/1AV":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=i("N9/t"),s=i("mzkE"),n={name:"Demo",data:function(){return{msg:"",filterTest:"hello world",fullscreenLoading:!1,centerDialogVisible:!1}},components:{leftSide:o.a,foot:s.a},directives:{txtDemo:function(t,e){t.style.color=e.value.color,t.style.fontSize=e.value.fontsize}},filters:{filterA:function(t){return t?(t=t.toString()).toUpperCase():""}},computed:{count:function(){return this.$store.state.count}},methods:{loading:function(){var t=this;this.fullscreenLoading=!0,setTimeout(function(){t.fullscreenLoading=!1},2e3)},toast:function(){this.$message.error("测试消息")},messageBox:function(){this.$alert("你好","提示",{confirmButtonText:"确定",callback:function(t){alert("回调")}})},notification:function(){var t=this.$createElement;this.$notify({title:"您有一条消息",message:t("i",{style:"color: teal"},"恭喜你中奖了，哈哈哈")})},dialog:function(){this.centerDialogVisible=!0},test:function(){alert("todo")},getcomponentmsg:function(t){alert("我在效果演示页-----"+t)}}},a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home h"},[i("el-container",{staticClass:"h"},[i("left-side",{attrs:{msg:t.msg},on:{showmsg:t.getcomponentmsg}}),t._v(" "),i("el-main",[i("div",{staticClass:"breadcrumb"},[i("el-breadcrumb",{attrs:{separator:"/"}},[i("el-breadcrumb-item",{attrs:{to:{path:"/"}}},[t._v("首页")]),t._v(" "),i("el-breadcrumb-item",[t._v("效果演示")])],1)],1),t._v(" "),i("div",{staticClass:"content"},[i("h2",{staticClass:"title"},[t._v("elementUI demos")]),t._v(" "),i("div",{staticClass:"demos"},[i("a",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{href:"javascript:;"},on:{click:t.loading}},[t._v("loading")]),t._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:t.toast}},[t._v("toast")]),t._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:t.messageBox}},[t._v("messageBox")]),t._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:t.notification}},[t._v("notification")]),t._v(" "),i("a",{attrs:{href:"javascript:;"},on:{click:t.dialog}},[t._v("dialog")])]),t._v(" "),i("h2",{staticClass:"title"},[t._v("my demos")]),t._v(" "),i("div",{staticClass:"demos"},[i("a",{directives:[{name:"txtDemo",rawName:"v-txtDemo",value:{color:"red",fontsize:"18px"},expression:"{ color: 'red', fontsize: '18px' }"}]},[t._v("指令 - 让我变红")]),t._v(" "),i("a",[t._v(t._s(t._f("filterA")(t.filterTest))+" - 过滤 - 小写变大写")])]),t._v(" "),i("h2",{staticClass:"title"},[t._v("vuex demo")]),t._v(" "),i("div",{staticClass:"demos"},[i("p",[t._v("当前数量："+t._s(t.count))]),t._v(" "),i("div",[i("button",{on:{click:function(e){t.$store.commit("add")}}},[t._v("加1")]),t._v(" "),i("button",{on:{click:function(e){t.$store.commit("diff")}}},[t._v("减1")]),t._v(" "),i("button",{on:{click:function(e){t.$store.dispatch("asyncAdd")}}},[t._v("异步加1")]),t._v(" "),i("button",{on:{click:function(e){t.$store.dispatch("asyncDiff")}}},[t._v("异步减1")])])])]),t._v(" "),i("foot")],1)],1),t._v(" "),i("el-dialog",{attrs:{title:"提示",visible:t.centerDialogVisible,width:"30%",center:""},on:{"update:visible":function(e){t.centerDialogVisible=e}}},[i("span",[t._v("需要注意的是内容是默认不居中的")]),t._v(" "),i("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("取 消")]),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:function(e){t.centerDialogVisible=!1}}},[t._v("确 定")])],1)])],1)},staticRenderFns:[]};var c=i("VU/8")(n,a,!1,function(t){i("NjRI")},"data-v-96ad09b8",null);e.default=c.exports},NjRI:function(t,e){}});
//# sourceMappingURL=4.63b0c96043a372cc3690.js.map