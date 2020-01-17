(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-8ead6f58"],{"30d5":function(t,a,e){},"478b":function(t,a,e){"use strict";var s=e("52ad"),i=e.n(s);i.a},"52ad":function(t,a,e){},7833:function(t,a,e){"use strict";var s=e("30d5"),i=e.n(s);i.a},f1b7:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[e("DetailTable")],1)},i=[],n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"o-block ant-override"},[e("div",{staticStyle:{width:"100%",background:"#fff",padding:"25px"}},[e("div",[t._v(" 项目名称："),e("span",{staticStyle:{"font-weight":"500","font-size":"18px"}},[t._v(t._s(t.projectName))])])]),e("a-card",{staticClass:"key-index"},[e("template",{slot:"title"},[t._v(" 基本指标 ")]),t.loading?e("div",{staticClass:"loading-mask"},[e("a-spin")],1):[e("a-row",{staticClass:"dataCard",attrs:{gutter:16}},[e("a-col",{staticClass:"key-index__item",attrs:{span:4}},[e("div",{staticClass:"title"},[t._v("PV")]),e("div",{staticClass:"value"},[t._v(t._s(t.keyData.pv))])]),e("a-col",{staticClass:"key-index__item",attrs:{span:4}},[e("div",{staticClass:"title"},[t._v("UV")]),e("div",{staticClass:"value"},[t._v(t._s(t.keyData.uv))])]),e("a-col",{staticClass:"key-index__item",attrs:{span:4}},[e("div",{staticClass:"title"},[t._v("置业顾问数")]),e("div",{staticClass:"value"},[t._v(t._s(t.keyData.counselor))])]),e("a-col",{staticClass:"key-index__item",attrs:{span:4}},[e("div",{staticClass:"title"},[t._v("分享次数")]),e("div",{staticClass:"value"},[t._v(t._s(t.keyData.share))])]),e("a-col",{staticClass:"key-index__item",attrs:{span:4}},[e("div",{staticClass:"title"},[t._v("二次分享次数")]),e("div",{staticClass:"value"},[t._v(t._s(t.keyData.secondShare))])]),e("a-col",{staticClass:"key-index__item",attrs:{span:4}},[e("div",{staticClass:"title"},[t._v("留电人数")]),e("div",{staticClass:"value"},[t._v(t._s(t.keyData.stayPhone))])])],1)]],2),e("div",{staticClass:"content"},[e("div",{staticClass:"content-item"},[e("a-card",{attrs:{title:"访问来源"}},[t.loading?e("div",{staticClass:"loading-mask"},[e("a-spin")],1):e("Pie",{attrs:{name:"AccessSource",sourceData:t.accessSourceData,options:t.accessSourceOptions}})],1),e("a-card",[e("div",{staticClass:"customize-title",attrs:{slot:"title"},slot:"title"},[t._v(" 客户转化漏斗 "),e("a-tooltip",{attrs:{placement:"top"}},[e("template",{slot:"title"},[t._v(" 计算客户从访问到关键步骤的转化率情况 ")]),e("a-icon",{attrs:{type:"exclamation-circle"}})],2)],1),t.loading?e("div",{staticClass:"loading-mask"},[e("a-spin")],1):e("div",{staticClass:"funnel-block"},[e("div",{staticClass:"block"},[e("div",{staticClass:"block_top"}),e("div",{staticClass:"content first"},[e("div",[t._v("访问量")]),e("div",[t._v(t._s(t.keyData.pv))])]),e("div",{staticClass:"block_middle"}),e("div",{staticClass:"content second"},[e("div",[t._v("访客量")]),e("div",[t._v(t._s(t.keyData.uv))])]),e("div",{staticClass:"block_bottom"}),e("div",{staticClass:"content third"},[e("div",[t._v("留电人数")]),e("div",[t._v(t._s(t.keyData.stayPhone))])])]),e("a-row",[e("a-col",{attrs:{span:8}},[e("div",{staticClass:"funnel-item"},[t._v("访问转留电率："),e("span",[t._v(t._s(t.keyData.stayPhone&&(t.keyData.stayPhone/t.keyData.pv*100).toFixed(2))+"%")])])]),e("a-col",{attrs:{span:8}},[e("div",{staticClass:"funnel-item"},[t._v("访问转访客率："),e("span",[t._v(t._s(t.keyData.uv&&(t.keyData.uv/t.keyData.pv*100).toFixed(2))+"%")])])]),e("a-col",{attrs:{span:8}},[e("div",{staticClass:"funnel-item"},[t._v("访客转留电率："),e("span",[t._v(t._s(t.keyData.stayPhone&&(t.keyData.stayPhone/t.keyData.uv*100).toFixed(2))+"%")])])])],1)],1)])],1),e("div",{staticClass:"content-item"},[e("a-card",[e("template",{staticClass:"customize-title",slot:"title"},[t._v(" 置业顾问访问量排名 ")]),t.loading?e("div",{staticClass:"card-content loading-mask"},[e("a-spin")],1):e("div",{staticClass:"card-content"},[e("a-list",{attrs:{itemLayout:"horizontal",dataSource:t.adviserRankData},scopedSlots:t._u([{key:"renderItem",fn:function(a,s){return e("a-list-item",{},[e("div",{staticClass:"rank-item"},[e("div",{staticClass:"rank-item__header"},[e("div",{staticClass:"num"},[t._v(t._s(s+1))]),e("a-avatar",{attrs:{size:48,src:"https://cdn.ideamake.cn/"+a.avatar}}),e("div",{staticClass:"name"},[t._v(t._s(a.realName))])],1),e("div",{staticClass:"rank-item__content"},[t._v(t._s(a.pv))])])])}}])})],1),e("div",{staticClass:"card-footer",on:{click:t.showAllDataDetail}},[t._v("查看所有排名"),e("a-icon",{attrs:{type:"caret-right"}})],1)],2)],1),e("a-modal",t._b({attrs:{width:"1000px",footer:null},model:{value:t.modelDetail.visible,callback:function(a){t.$set(t.modelDetail,"visible",a)},expression:"modelDetail.visible"}},"a-modal",t.modelDetail.attrs,!1),[e("a-table",t._g(t._b({scopedSlots:t._u([{key:"avatar",fn:function(t){return[e("img",{staticStyle:{height:"36px",width:"36px"},attrs:{src:"https://cdn.ideamake.cn/"+t}})]}}])},"a-table",t.detailInfo.attrs,!1),t.detailInfo.events))],1)],1)],1)},o=[],c=(e("a4d3"),e("4de4"),e("4160"),e("d81d"),e("e439"),e("dbb4"),e("b64b"),e("ac1f"),e("1276"),e("159b"),e("2fa7")),l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:t.name}})},r=[],d=(e("4e82"),e("b680"),e("0d5c")),v={name:"chartPie",mixins:[d["a"]],methods:{initChart:function(){var t=this.options,a=t.sort,e=void 0===a?"type":a,s=t.value,i=void 0===s?"value":s,n=t.radius,o=void 0===n?.8:n,c=t.innerRadius,l=void 0===c?.65:c,r=t.shape,d=void 0===r?"":r;this.chartDefault(),this.chart.source(this.sourceData);var v=this.chart.view();v.source(this.sourceData,{percent:{formatter:function(t){return(100*t).toFixed(2)+"%"}}}),this.chart.coord("theta",{radius:o,innerRadius:l}),this.chart.tooltip({showTitle:!1}),this.chart.intervalStack().position(i).color(e).shape(d).label(i,{formatter:function(t,a){return a.point[e]+": "+t}}),this.chart.render()}}},u=v,p=e("2877"),h=Object(p["a"])(u,l,r,!1,null,"40b1aee0",null),m=h.exports;function _(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,s)}return e}function f(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?_(Object(e),!0).forEach((function(a){Object(c["a"])(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):_(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}var y={height:498},g={data:function(){var t=this;return{date:[],projectName:"",code:"",loading:!1,keyData:{},accessSourceData:[],adviserRankData:[],accessSourceOptions:f({},y),modelDetail:{visible:!1,loading:!1,attrs:{title:"排名详情"}},detailInfo:{selects:[],attrs:{columns:this.getDetailInfoColumns(),dataSource:[],pagination:{total:0,current:1,pageSize:10,defaultCurrent:1,defaultPageSize:10,showSizeChanger:!0,showQuickJumper:!0,showTotal:function(t,a){return"总记录: ".concat(t)}},loading:!1},events:{change:function(a){t.detailInfo.attrs.pagination=a,t.getAnalysisDataDetail()}}}}},components:{Pie:m},methods:{getAnalysisSummary:function(){var t=this;this.$Api.getAnalysisSummary({code:this.code,pageNo:1,pageSize:5}).then((function(a){t.keyData=a.data,t.accessSourceData=a.data.daysSource.map((function(t){return{value:t.num,type:t.readSourceName}})),t.adviserRankData=a.data.daysAdviser.list}))},getDetailInfoColumns:function(){var t=[{title:"头像",dataIndex:"avatar",align:"center",width:30,scopedSlots:{customRender:"avatar"}},{title:"客户昵称",align:"center",width:60,dataIndex:"realName"},{title:"访问量",align:"center",width:80,dataIndex:"pv"}];return t},getAnalysisDataDetail:function(){var t=this;this.loading=!0,this.$Api.getAnalysisDataDetail({code:this.code,pageNo:this.detailInfo.attrs.pagination.current,pageSize:this.detailInfo.attrs.pagination.pageSize}).then((function(a){200===a.code?(t.detailInfo.attrs.pagination.current=a.data.current,t.detailInfo.attrs.pagination.total=a.data.total,t.detailInfo.attrs.dataSource=a.data.list):t.$message.error(a.msg),t.loading=!1}))},showAllDataDetail:function(t){this.modelDetail.visible=!0,this.getAnalysisDataDetail()}},created:function(){this.code=this.$route.params.id.split("&")[0],this.projectName=this.$route.params.id.split("&")[1],this.getAnalysisSummary()},mounted:function(){document.querySelector(".page-main").scrollTo(0,0)}},k=g,D=(e("478b"),Object(p["a"])(k,n,o,!1,null,"2725f1b7",null)),C=D.exports,b={data:function(){return{}},components:{DetailTable:C},methods:{}},S=b,w=(e("7833"),Object(p["a"])(S,s,i,!1,null,"36c05876",null));a["default"]=w.exports}}]);