(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-9f77051a"],{4481:function(t,e,a){},"967b":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-container"},[a("a-tabs",{staticClass:"tab",model:{value:t.key,callback:function(e){t.key=e},expression:"key"}},[a("a-tab-pane",{key:"1"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"team"}}),t._v(" 置业顾问线 ")],1),a("propertyConsultant")],1),a("a-tab-pane",{key:"2"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"team"}}),t._v(" 品牌策划线 ")],1),a("brandPlanning")],1),a("a-tab-pane",{key:"3"},[a("span",{attrs:{slot:"tab"},slot:"tab"},[a("a-icon",{attrs:{type:"user"}}),t._v(" 营销总管理线 ")],1),a("generalMarketingManagement")],1)],1)],1)},i=[],r=(a("c975"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" 置业顾问 ")])}),c=[],s={},l=s,o=a("2877"),u=Object(o["a"])(l,r,c,!1,null,"ed0230fc",null),d=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("div",{staticClass:"title"},[t._v("课程管理")]),a("a-button",{staticStyle:{"margin-left":"20px"},attrs:{type:"primary",icon:"plus"},on:{click:t.addClass}},[t._v("添加课程")]),a("a-table",t._g(t._b({staticStyle:{padding:"20px"}},"a-table",t.tableInfo.attrs,!1),t.tableInfo.events))],1)},b=[],m={data:function(){var t=this;return{tableInfo:{selects:[],attrs:{scroll:{x:1200},columns:this.getTableColumns(),dataSource:[{id:1,picture:"https://cdn.ideamake.cn/market_backend/thumb/public/articles/images/ylX1Rc.jpg",name:"如何用营销云打造一个线下活动",time:"2020-1-4",type:0},{id:2,picture:"https://cdn.ideamake.cn/market_backend/thumb/public/articles/images/Q0QWzU.jpg",name:"如何用营销云打造一个线下活动",time:"2020-1-4",type:0},{id:3,picture:"https://cdn.ideamake.cn/market_backend/thumb/public/articles/images/bbzFPT.jpg",name:"如何用营销云打造一个线下活动",time:"2020-1-4",type:1},{id:4,picture:"https://cdn.ideamake.cn/market_backend/thumb/public/articles/images/BDfNjm.jpg",name:"如何用营销云打造一个线下活动",time:"2020-1-4",type:1}],customRow:function(t,e){return{style:{background:e%2===1?"rgba(247,248,252,1)":""}}},pagination:{total:0,current:1,pageSize:10,defaultCurrent:1,defaultPageSize:10,showSizeChanger:!0,showQuickJumper:!0,showTotal:function(t,e){return"总记录: ".concat(t)}},loading:!1},events:{change:function(e){t.tableInfo.attrs.pagination=e,t.getList()}}}}},methods:{getTableColumns:function(){var t=this,e=this.$createElement,a=[{title:"缩略图  ",width:260,dataIndex:"picture",align:"center",customRender:function(t,a,n){return e("img",{attrs:{src:t},style:"height: 60px",directives:[{name:"img-alart",value:!0}]})}},{title:"课程名称",dataIndex:"name",align:"center"},{title:"类型",width:260,dataIndex:"type",align:"center",customRender:function(t,a,n){return e("span",0===t?["视频"]:["图文"])}},{title:"添加时间",width:260,dataIndex:"time",align:"center"},{title:"操作",width:260,dataIndex:"operate",align:"center",customRender:function(a,n,i){return e("div",[e("span",{style:"color:#1890FF;cursor:pointer",on:{click:function(){t.editDetail(n)}}},["编辑"]),e("span",{style:"color:#F5222D;margin-left:20px;cursor:pointer",on:{click:function(){t.deleteDetail(n)}}},["删除"])])}}];return a},addClass:function(){this.$router.push("/addTrainingDetail/add")},editDetail:function(t){this.$router.push("/addTrainingDetail/".concat(t.id))},deleteDetail:function(t){}}},f=m,g=(a("e548"),Object(o["a"])(f,p,b,!1,null,"7b4f2ad6",null)),h=g.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._v(" 营销总管理 ")])},y=[],v={},_=v,x=Object(o["a"])(_,k,y,!1,null,"a7ed1608",null),w=x.exports,C={components:{propertyConsultant:d,brandPlanning:h,generalMarketingManagement:w},data:function(){return{key:"1"}},beforeRouteEnter:function(t,e,a){a((function(t){-1!==e.path.indexOf("/addTrainingDetail/")?t.key="2":t.key="1"}))}},j=C,D=(a("e4b3"),Object(o["a"])(j,n,i,!1,null,"8c1bfc96",null));e["default"]=D.exports},d37b:function(t,e,a){},e4b3:function(t,e,a){"use strict";var n=a("4481"),i=a.n(n);i.a},e548:function(t,e,a){"use strict";var n=a("d37b"),i=a.n(n);i.a}}]);