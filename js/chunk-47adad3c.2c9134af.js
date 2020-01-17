(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-47adad3c"],{"382b":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"search",staticStyle:{padding:"20px"}},[n("condition-filter",{attrs:{layout:t.conditionFilterInfo.layout,fields:t.conditionFilterInfo.fields,actions:t.conditionFilterInfo.actions},model:{value:t.conditionFilterInfo.params,callback:function(e){t.$set(t.conditionFilterInfo,"params",e)},expression:"conditionFilterInfo.params"}})],1),n("div",{staticClass:"space"}),t._m(0),n("a-table",t._g(t._b({staticStyle:{padding:"20px"},attrs:{bordered:""}},"a-table",t.tableInfo.attrs,!1),t.tableInfo.events))],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"tableTop"},[n("div",{staticClass:"tableTop_rank"},[t._v("所有项目")])])}],o=(n("a4d3"),n("99af"),n("4de4"),n("7db0"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7"));function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){Object(o["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var l=[{label:"待上线",value:0,color:"orange"},{label:"运行中",value:1,color:"green"},{label:"临到期",value:2,color:"red"},{label:"已过期",value:3}],c={data:function(){var t=this;return{sorter:{},conditionFilterInfo:{layout:"block",params:{status:"all",appName:void 0,time:void 0},fields:[{label:"项目状态",key:"status",value:"status",style:{width:"30%"},component:"a-select",attrs:{placeholder:"全部",style:"width: 300px",options:[{label:"全部",value:"all"},{label:"待上线",value:0},{label:"运行中",value:1},{label:"临到期",value:2},{label:"已过期",value:3}]}},{label:"搜索项目名称",key:"appName",value:"appName",style:{width:"30%"},component:"a-input",attrs:{placeholder:"项目名称",style:"width: 300px",options:[]}},{label:"到期时间",value:"time",key:"time",component:"a-range-picker",style:{width:"30%"},attrs:{placeholder:["开始日期","结束日期"],style:"width: 300px;"}}],actions:[{component:"a-button",label:"查询",events:{click:function(){t.handleSearch()}},attrs:{type:"primary"}},{component:"a-button",label:"重置",events:{click:function(){t.handleReset()}},attrs:{}}]},tableInfo:{selects:[],attrs:{scroll:{x:1200},columns:this.getTableColumns(),dataSource:[],customRow:function(t,e){return{style:{background:e%2===1?"rgba(247,248,252,1)":""}}},pagination:{total:0,current:1,pageSize:10,defaultCurrent:1,defaultPageSize:10,showSizeChanger:!0,showQuickJumper:!0,showTotal:function(t,e){return"总记录: ".concat(t)}},loading:!1},events:{change:function(e,n,a){t.tableInfo.attrs.pagination=e,t.sorter=a,t.getList()}}},downloadLoading:!1}},methods:{getTableColumns:function(){var t=this,e=this.$createElement,n=[{title:"项目名称",dataIndex:"appName",align:"center",width:200,customRender:function(n,a,r){return e("span",{style:"cursor:pointer",on:{click:function(){t.clickProject(a)}}},[n])}},{title:"总PV",width:150,dataIndex:"pv",align:"center",sorter:function(t,e){return t.pv-e.pv}},{title:"总UV",width:150,dataIndex:"uv",align:"center",sorter:function(t,e){return t.uv-e.uv}},{title:"置业顾问人数",width:150,dataIndex:"counselor",align:"center",sorter:function(t,e){return t.counselor-e.counselor},customRender:function(t,n,a){return e("span",[n.counselor])}},{title:"分享数",width:150,dataIndex:"share",align:"center",sorter:function(t,e){return t.share-e.share},customRender:function(t,n,a){return e("span",[n.share])}},{title:"二次分享数",width:150,dataIndex:"secondShare",align:"center",sorter:function(t,e){return t.secondShare-e.secondShare}},{title:"留电用户数",width:150,dataIndex:"stayPhone",align:"center",sorter:function(t,e){return t.stayPhone-e.stayPhone}},{title:"项目状态",width:150,dataIndex:"appStatus",align:"center",customRender:function(t,n,a){var r=l.find((function(t){return t.value===n.appStatus}))||{};return e("a-tag",{attrs:{color:r.color}},[r.label])}},{title:"到期时间",width:200,dataIndex:"expirationDate",align:"center"}];return n},handleReset:function(){this.tableInfo.attrs.pagination.current=1,this.conditionFilterInfo.params={status:"all",appName:void 0,time:void 0},this.getList()},handleSearch:function(){this.conditionFilterInfo.params.status="all"===this.conditionFilterInfo.params.status?" ":this.conditionFilterInfo.params.status,this.tableInfo.attrs.pagination.current=1,this.getList()},getList:function(){var t=this,e={pv:null,uv:1,counselor:2,share:3,secondShare:4,stayPhone:5},n=this.tableInfo.attrs;this.$Api.getProjectList(s({},this.params,{pageNo:n.pagination.current,pageSize:n.pagination.pageSize,orderType:e[this.sorter.field]})).then((function(e){200===e.code?(t.tableInfo.attrs.pagination.current=e.data.current,t.tableInfo.attrs.pagination.total=e.data.total,t.tableInfo.attrs.dataSource=e.data.list):t.$message.error(e.msg),n.loading=!1}))},clickProject:function(t){this.$router.push("/projectData/".concat(t.appCode,"&").concat(t.appName))}},computed:{params:function(){var t=this.$utils.deepClone(this.conditionFilterInfo.params);if(t.status="all"===t.status?"":t.status,t.time){var e=this.conditionFilterInfo.params.time[0].format("YYYY-MM-DD"),n=this.conditionFilterInfo.params.time[1].format("YYYY-MM-DD");t.beginDate=e,t.endDate=n,delete t.time}return t}},mounted:function(){this.getList()}},u=c,d=(n("c38f"),n("2877")),p=Object(d["a"])(u,a,r,!1,null,"40e7cc39",null);e["default"]=p.exports},"67e8":function(t,e,n){},"99af":function(t,e,n){"use strict";var a=n("23e7"),r=n("d039"),o=n("e8b5"),i=n("861d"),s=n("7b0b"),l=n("50c4"),c=n("8418"),u=n("65f0"),d=n("1dde"),p=n("b622"),f=n("60ae"),h=p("isConcatSpreadable"),b=9007199254740991,m="Maximum allowed index exceeded",g=f>=51||!r((function(){var t=[];return t[h]=!1,t.concat()[0]!==t})),v=d("concat"),y=function(t){if(!i(t))return!1;var e=t[h];return void 0!==e?!!e:o(t)},w=!g||!v;a({target:"Array",proto:!0,forced:w},{concat:function(t){var e,n,a,r,o,i=s(this),d=u(i,0),p=0;for(e=-1,a=arguments.length;e<a;e++)if(o=-1===e?i:arguments[e],y(o)){if(r=l(o.length),p+r>b)throw TypeError(m);for(n=0;n<r;n++,p++)n in o&&c(d,p,o[n])}else{if(p>=b)throw TypeError(m);c(d,p++,o)}return d.length=p,d}})},c38f:function(t,e,n){"use strict";var a=n("67e8"),r=n.n(a);r.a}}]);