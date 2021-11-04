"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4671],{85228:function(e,t,n){n.d(t,{D:function(){return s}});var r=n(85893),i=n(67294),o=n(79766),a=n(14123),s=function(e){var t=e.title,n=e.format,s=e.items,c=void 0===s?[]:s,d=e.sx,p=void 0===d?{}:d,f=e.prefix,x=void 0===f?"":f,h=e.suffix,m=void 0===h?"":h,g=e.hairline,v=void 0!==g&&g,y=(0,i.useMemo)((function(){return(0,a.WUZ)(n||"")}),[n]);return v&&!c.length?null:(0,r.jsxs)(o.xu,{sx:p,children:[v&&(0,r.jsx)(o.xu,{sx:{borderBottom:"0.5px solid rgb(223, 227, 232)",height:"1px",width:"90%",margin:"0 auto"}}),(0,r.jsx)(o.xv,{variant:"overline",sx:{p:2,height:20},children:t}),(0,r.jsx)(o.xu,{as:"ul",sx:{flex:1,listStyle:"none",p:0,pb:1,maxHeight:"350px",overflow:"auto"},children:c.map((function(e){return(0,r.jsxs)(o.xu,{as:"li",sx:{display:"grid",gridTemplateColumns:"1fr max-content",alignItems:"center",px:2,height:26,position:"relative",my:1},children:[e.color&&(0,r.jsx)(l,{color:e.color}),(0,r.jsx)(o.xv,{sx:{color:"text2",fontSize:1,flex:1,textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap"},children:e.label}),e.value&&void 0!==e.value&&(0,r.jsx)(u,{color:e.color,value:x+("number"==typeof e.value&&n?y(e.value):e.value)+m})]},e.label)}))})]})},l=function(e){var t=e.color;return(0,r.jsx)(o.xu,{sx:{bg:t,position:"absolute",height:"100%",width:"4px",top:0,left:0,borderRadius:5}})},u=function(e){var t=e.color,n=e.value;return(0,r.jsx)(o.xv,{sx:{fontSize:t?2:1,bg:t,borderRadius:3,color:t?"white":"text",fontWeight:500,px:1,width:"auto"},children:n})}},75276:function(e,t,n){n.d(t,{I:function(){return S}});var r=n(85893),i=n(49907),o=n(92809),a=n(5152),s=n(65946),l=n(57163),u=n(14123),c=n(60305),d=n(96486),p=n(78230),f=n(67294),x=n(79766),h=n(32491),m=n(99490),g=(n(92077),n(75133)),v=n(97940),y=(n(74691),n(12953));var b=n(25832);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,o.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=(0,a.default)((function(){return Promise.all([n.e(2960),n.e(8660)]).then(n.bind(n,58660))}),{ssr:!1,loadableGenerated:{webpack:function(){return[58660]},modules:["../components/card-plot/CardPlot.tsx -> react-plotly.js"]}}),k={time:"date",categories:"category",linear:"linear",log:"log"};function C(e){var t=(0,g.T)({queries:{table:e.queryId},params:{startTime:e.startTime.toUTC(),endTime:e.endTime.toUTC()},timestamp:"metric_date",notebook:e.notebook}),n=t.notebook,i=t.isLoading,o=(0,f.useState)(0),a=o[0],s=o[1];return i?null:(0,r.jsx)(y.X.Provider,{value:{dependency:a,setDependency:s},children:(0,r.jsx)(l.eV,{hideButton:e.tableHideButton,defaultExpand:e.tableExpanded,graphTitle:e.graphTitle,children:(0,r.jsx)(v.iA,O({loading:i,data:(null===n||void 0===n?void 0:n.table)||[],columns:e.columns},e.tableOptions))})})}function S(e){var t,n,a=e.title,g=e.data,v=e.xAxis,y=e.yAxis,j=e.groupColumn,O=e.yColumns,S=e.isLoading,P=e.explainer,T=e.seriesOptions,D=e.setActiveMetric,M=e.metric,I=e.metricOptions,B=e.defaultType,L=void 0===B?"bar":B,E=e.query,Z=e.visualOnly,z=void 0!==Z&&Z,A=e.dependency,R=e.setLegendProp,q=e.onSeriesCreated,H=e.currencyOptions,_=e.currency,F=e.onCurrencyChange,W=(e.axisFormat,e.legendFormat),V=(e.summaryItems,e.summarySuffix,e.tableQuery),X=e.tableNotebook,U=e.tableColumns,N=e.tableExpanded,G=e.tableHideButton,K=void 0!==G&&G,Y=e.tableOptions,Q=(e.legendOrder,e.description),J=e.yAxisLabel,$=(e.visualOnlyHeight,e.isStacked),ee=void 0===$||$,te=e.hasErrored,ne=void 0!==te&&te,re=e.footer,ie=e.hideBackground,oe=void 0!==ie&&ie,ae=(0,c.n)({marginLeft:0,marginRight:0,marginTop:J?40:30},S),se=(0,i.Z)(ae,2),le=se[0],ue=se[1],ce=(0,f.useState)({}),de=(ce[0],ce[1]),pe=function(e,t,n,r){return(0,f.useMemo)((function(){var i=(0,d.sortBy)(e,r);if(!t||!e.some((function(e){return void 0!==e[t]})))return{seriesColumns:n,groupedData:i};var a=(0,p.uniq)((0,p.map)((function(e){return e[t]}))(e)),s=new Map;i.forEach((function(e){var i,a=String(e[r]),l=s.get(a)||(0,o.Z)({},r,e[r]);l[e[t]]=e[null!==(i=n[0])&&void 0!==i?i:""],s.set(a,l)}));var l=Array.from(s.values()).map((function(e){return a.forEach((function(t){e[t]||(e[t]=0)})),e}));return{seriesColumns:a,groupedData:l}}),[e,t,n,r])}(g,"string"===typeof j?j:M&&j&&null!==(t=null===j||void 0===j?void 0:j[M])&&void 0!==t?t:"",O instanceof Array?O:M&&O&&null!==(n=O[M])&&void 0!==n?n:[],v.column),fe=pe.groupedData,xe=pe.seriesColumns,he=(0,h.u)({data:g,groupColumn:"string"===typeof j?j:M?null===j||void 0===j?void 0:j[M]:void 0,yColumns:xe,xColumn:v.column,overrides:M?T[M]:T,onSeriesCreated:null!==q&&void 0!==q?q:p.identity,defaultType:"string"===typeof L?L:L[M]}),me=(0,f.useMemo)((function(){return(0,s.scaleOrdinal)({domain:he.map((function(e){return e.column})),range:he.map((function(e,t){var n,r;return null!==(n=null!==(r=e.color)&&void 0!==r?r:u.W1Y[t])&&void 0!==n?n:""}))})}),[he]),ge=((0,f.useMemo)((function(){return v.column?(0,d.keyBy)(fe,v.column):{}}),[fe.length,v.column,A,M,_]),(0,b.S)({base:!0,"2xs":!0,sm:!1}));W&&M&&"function"===typeof W[M]&&W[M];(0,f.useEffect)((function(){var e=he.map((function(e){return{label:e.label,color:me(e.column)}}));z&&R?R({title:"",items:e}):de({title:"",items:e})}),[he,me,fe.length]);var ve,ye,be=(0,f.useMemo)((function(){return fe.map((function(e){return e[v.column]})).map((function(e){return e instanceof m.ou?e.toISO():e}))}),[v,fe]),je=(ve=ue.boundedWidth,ye=be,(0,f.useMemo)((function(){var e=6*ye.reduce((function(e,t){var n=5;return"string"!==typeof t||t.startsWith("0x")||(n=t.length),"number"===typeof t&&(n="".concat(n).length),t instanceof Date&&(n=t.toString().length),n>e?n:e}),0),t=ve/ye.length;return{shouldUseAngledXLabels:e>=t,bottomMarginEstimate:Math.sqrt(Math.pow(e,2)-Math.pow(t,2))}}),[ve,ye])).shouldUseAngledXLabels;return oe?(0,r.jsx)(x.xu,{ref:le,sx:{height:350,width:"100%"},children:(0,r.jsx)(w,{data:he.map((function(e){return{x:be,y:fe.map((function(t){return t[e.column]})),yaxis:"left"===e.axis?void 0:"y2",type:e.type,name:e.label,bar:{color:e.color},line:{color:e.color},marker:{color:e.color},transforms:"bar"===e.type?[{type:"filter",target:"y",operation:"!=",value:0}]:[]}})),layout:{width:ue.width,height:ue.height,margin:{t:ue.marginTop,b:ue.marginBottom,l:ue.marginLeft,r:ue.marginRight},barmode:ee?"relative":"group",showlegend:!1,xaxis:{fixedrange:ge,type:v.type?k[v.type]:void 0,tickangle:je?45:0,automargin:!0},yaxis:{fixedrange:ge,type:y.type?k[y.type]:void 0,automargin:!0},yaxis2:{fixedrange:ge,type:y.type?k[y.type]:void 0,overlaying:"y",side:"right"},legend:{traceorder:"normal"}},style:{height:"100%",width:"100%"},config:{displaylogo:!1,displayModeBar:!1}})}):(0,r.jsxs)(l.I8,{loading:S||!1,fullPanel:!0,header:(0,r.jsxs)(l.H8,{children:[a&&(0,r.jsx)(l.Hb,{currencyOptions:H,currency:_,onCurrencyChange:F,description:Q,explainer:P,tabberOnChange:function(e){return D?D(e):alert(e)},tabberOptions:I,children:a}),!a&&(0,r.jsx)(x.xv,{sx:{fontSize:4,opacity:.25},children:"Visualization Name"})]}),children:[(0,r.jsx)(l.WH,{children:(0,r.jsx)(l.PG,{sx:{px:1},hasErrored:ne,children:(0,r.jsx)(x.xu,{ref:le,sx:{height:350,width:"100%"},children:(0,r.jsx)(w,{data:he.map((function(e){return{x:be,y:fe.map((function(t){return t[e.column]})),yaxis:"left"===e.axis?void 0:"y2",type:e.type,name:e.label,bar:{color:e.color},line:{color:e.color},marker:{color:e.color},transforms:"bar"===e.type?[{type:"filter",target:"y",operation:"!=",value:0}]:[]}})),layout:{width:ue.width,height:ue.height,margin:{t:ue.marginTop,b:ue.marginBottom,l:ue.marginLeft,r:ue.marginRight},barmode:ee?"relative":"group",autosize:!0,showlegend:!1,xaxis:{fixedrange:!1,type:v.type?k[v.type]:void 0,automargin:!0},yaxis:{fixedrange:!1,type:y.type?k[y.type]:void 0,automargin:!0},yaxis2:{fixedrange:!1,type:y.type?k[y.type]:void 0,overlaying:"y",side:"right"},legend:{traceorder:"normal"}},style:{height:"100%",width:"100%"},config:{displaylogo:!1,displayModeBar:!1}})})})}),V&&U&&E&&(0,r.jsx)(C,{queryId:V,columns:U,startTime:E.startTime,endTime:E.endTime,notebook:X,tableExpanded:N,tableHideButton:K,tableOptions:Y,graphTitle:a}),re]})}},78642:function(e,t,n){n.d(t,{K:function(){return s}});var r=n(85893),i=(n(67294),n(40980)),o=n(8327),a=n(94096),s=function(e){var t=e.children,n=e.onClick,s=e.sx,l=void 0===s?{}:s,u=(0,i.useStyleConfig)("ActionButton");return(0,r.jsx)(o.z,{onClick:n,__css:u,sx:l,children:(0,r.jsx)(a.k,{alignItems:"center",children:t})})}},59490:function(e,t,n){n.d(t,{X:function(){return A}});var r=n(85893),i=n(92809),o=n(49907),a=n(78833),s=n(18725),l=n(24764),u=n(99599),c=n(22589),d=n(57163),p=n(98144),f=n(60305),x=n(96486),h=n(99490),m=n(67294),g=n(45720),v=n(50794),y=n(79766),b=n(98823),j=n(30475),O=n(48017),w=n(64115),k=n(82802),C=n(27434),S=n(7863),P=function(e){var t=e.frameData,n=e.series,i=e.yScale,o=e.xScale,a=e.showChange,s=e.colorScale,l=null===t||void 0===t?void 0:t.data.map((function(e,t){var r;return{y:i(t),transform:"translate(".concat(o(0),"px, ").concat(i(t),"px)"),width:o(e.value),value:(0,c.w)(e.value),label:(null===(r=n[e.name])||void 0===r?void 0:r.label)||e.name||"",name:e.name||"",change:Number(e.change.toFixed(2)),color:s(e.name)}})),u=(0,S.Yz)(l,(function(e){return e.name}),{initial:function(e){return e},from:{transform:"translate(".concat(o(0),"px, ").concat(i.range()[1],"px)"),y:i.range()[1],width:0,value:"0"},leave:{transform:"translate(".concat(o(0),"px, ").concat(i.range()[1],"px)"),y:i.range()[1],width:0,value:"0"},enter:function(e){return e},update:function(e){return e},unique:!0}),d=i.bandwidth()/2;return(0,r.jsx)(r.Fragment,{children:u.map((function(e){var t=e.props,n=e.item,o=e.key;return(0,r.jsx)(S.q.g,{style:{transform:t.transform},children:(0,r.jsxs)(O.xu,{as:"g",dominantBaseline:"middle",fontSize:"xs",children:[(0,r.jsx)(w.x,{as:"text",fill:"gray.400",textAnchor:"end",x:-5,y:d,children:n.label}),(0,r.jsxs)(O.xu,{as:"g",fontWeight:600,style:{transform:"translateX(5px)"},children:[(0,r.jsx)(S.q.text,{textAnchor:"start",x:t.width,y:d,children:n.value}),a&&(0,r.jsx)(S.q.svg,{x:t.width,children:(0,r.jsxs)(O.xu,{as:"g",transform:"translate(40px, ".concat(d-8,"px)"),children:[(0,r.jsx)(O.xu,{as:S.q.rect,width:"52px",height:"16px",fill:n.change>=0?"green.100":"red.100",rx:"3px"}),(0,r.jsxs)(O.xu,{as:S.q.text,fill:n.change>=0?"green.500":"red.500",fontWeight:"400",fontSize:"11px",y:9,x:30,textAnchor:"middle",style:{fontVariantNumeric:"tabular-nums"},children:[Math.abs(n.change),"%"]}),(0,r.jsx)(O.xu,{as:n.change>=0?k.Z:C.Z,fill:n.change>=0?"green.600":"red.600",strokeWidth:"0",size:"14",x:"0",y:"1"})]})})]}),(0,r.jsx)(S.q.rect,{fill:n.color,width:t.width,height:i.bandwidth()},n.name)]})},o)}))})},T=n(14123),D=n(62550),M=n(17949),I=n(55280);function B(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?B(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var E=function(e){var t=e.points,n=(0,a.Z)(e,["points"]),i=(0,f.n)({marginLeft:32,marginRight:32}),l=(0,o.Z)(i,2),u=l[0],c=l[1],d=(0,m.useMemo)((function(){return(0,s.scalePoint)({domain:t,range:[0,c.boundedWidth]})}),[c.boundedWidth,t]);return(0,r.jsxs)(O.xu,{ref:u,children:[(0,r.jsx)(O.xu,{height:"10px",px:"32px",children:(0,r.jsxs)(D.iR,L(L({},n),{},{min:0,max:t.length-1,children:[(0,r.jsx)(D.Uj,{bg:"gray.200",children:(0,r.jsx)(D.Ms,{bg:"gray.500"})}),(0,r.jsx)(D.gs,{bg:"transparent",boxShadow:"none",_focus:{boxShadow:"none"},children:(0,r.jsx)(O.xu,{width:"2px",height:"9px",bg:"gray.700"})})]}))}),(0,r.jsx)("svg",{height:24,width:c.width,children:(0,r.jsx)(M.Z,{left:c.marginLeft,scale:d,tickLength:6,hideTicks:!0,hideAxisLine:!0,tickFormat:function(e){return h.ou.fromJSDate(e).toFormat("MMM d yy")},tickComponent:function(e){return(0,r.jsx)(O.xu,{as:I.Z,x:e.x,y:e.y+4,textAnchor:"middle",fontSize:"11px",fill:"gray.400",children:e.formattedValue})}})})]})},Z=n(75284);function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var A=function(e){var t,n=e.title,O=e.data,w=e.series,k=void 0===w?{}:w,C=e.onCreated,S=e.numBars,D=void 0===S?10:S,M=e.footer,I=(0,a.Z)(e,["title","data","series","onCreated","numBars","footer"]),B=(0,f.n)({marginTop:30,marginLeft:100,marginBottom:0,marginRight:120}),L=(0,o.Z)(B,2),A=L[0],R=L[1],q=(0,m.useState)(0),H=q[0],_=q[1],F=(0,m.useState)(!0),W=F[0],V=F[1];D=Number(D);var X=function(e,t){return(0,m.useMemo)((function(){if(!t.timestamp||!t.keyBy)return[];var n=(0,x.sortBy)(e,t.timestamp),r=(0,j.ZP)(n,(function(e){var n,r;return null===(n=e[null!==(r=t.timestamp)&&void 0!==r?r:""])||void 0===n?void 0:n.toString()})),i=new Map;return(0,x.compact)(Array.from(r.values()).map((function(e){var n,r=e[0][null!==(n=t.timestamp)&&void 0!==n?n:""],o=r;r&&o.isLuxonDateTime&&o.ts&&(r=new Date(o.ts));var a=e.map((function(e){var n,r,o,a,s,l=e[null!==(n=t.indexBy)&&void 0!==n?n:""],u=e[null!==(r=t.keyBy)&&void 0!==r?r:""];l&&i.has(l)?s=i.get(l):(l&&u&&i.set(l,u),s=u);var c=l&&u&&i.has(l)?(u-(null!==(o=s)&&void 0!==o?o:0))/(null!==(a=s)&&void 0!==a?a:1):0;return l&&c&&u?{name:l,change:c,value:u}:void 0}));return a=(0,x.sortBy)(a,(function(e){return null===e||void 0===e?void 0:e.value})).reverse().slice(0,Number(t.numBars)),r?{timestamp:r,data:(0,x.compact)(a)}:void 0})))}),[e,t.keyBy,t.indexBy,t.timestamp,t.numBars])}(O,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){(0,i.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({numBars:D=0===D?10:D},I)),U=(0,m.useMemo)((function(){var e=Array.from(Array(D).keys());return(0,s.scaleBand)({domain:e,range:[0,R.boundedHeight],padding:.2})}),[R.boundedHeight,O,null===I||void 0===I?void 0:I.indexBy,D]),N=(0,m.useMemo)((function(){var e,t;if(!X[H])return(0,s.scaleLinear)({domain:[0,100],range:[0,R.boundedWidth]});var n=b.Z(null!==(e=null===(t=X[H])||void 0===t?void 0:t.data.map((function(e){return e.value})))&&void 0!==e?e:[]),r=[0,null!==n&&void 0!==n?n:0];return(0,s.scaleLinear)({domain:r,range:[0,R.boundedWidth]})}),[R.boundedWidth,H,X]),G=(0,m.useRef)();(0,m.useEffect)((function(){W?window.clearInterval(G.current):G.current=window.setInterval((function(){_((function(e){return H===X.length-1?0:Math.min(e+1,X.length-1)}))}),350)}),[W]),(0,m.useEffect)((function(){H===X.length-1&&V(!0)}),[H]);var K=(0,m.useMemo)((function(){if(0===X.length)return"";var e;try{var t;e=(null===(t=X[H])||void 0===t?void 0:t.timestamp).toFormat("MMM d yyyy")}catch(n){e=h.ou.fromJSDate(new Date).toFormat("MMM d yyyy")}return e}),[H,X]),Y=(0,m.useMemo)((function(){return I.indexBy?(0,x.compact)((0,x.uniq)(O.map((function(e){var t;return e[null!==(t=I.indexBy)&&void 0!==t?t:""]})))):[]}),[O,I.indexBy]),Q=(0,m.useMemo)((function(){return(0,s.scaleOrdinal)({domain:Y,range:(0,x.compact)(Y.map((function(e,t){var n,r;return null!==k&&void 0!==k&&null!==(n=k[e])&&void 0!==n&&n.color?null===(r=k[e])||void 0===r?void 0:r.color:(0,T.OOA)(t/Y.length)})))})}),[Y.length,k]);return(0,m.useEffect)((function(){C&&C({keys:Y.sort(),colorScale:Q})}),[Q,Y.length]),(0,r.jsxs)(d.I8,{fullPanel:!0,children:[(0,r.jsxs)(d.H8,{children:[(0,r.jsx)(y.X6,{as:"h4",children:n}),(0,r.jsxs)(y.kC,{sx:{alignItems:"center"},children:[(0,r.jsx)(y.xv,{sx:{fontWeight:500},children:K}),(0,r.jsx)(y.zx,{onClick:function(){return V((function(e){return!e}))},sx:{display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",width:28,height:28,p:0,ml:2,borderRadius:14},children:W?(0,r.jsx)(g.Z,{size:14,fill:"white",sx:{transform:"translateX(1px)"}}):(0,r.jsx)(v.Z,{size:14,fill:"white"})})]})]}),(0,r.jsxs)(d.WH,{children:[(0,r.jsx)(y.xu,{ref:A,sx:{height:350},children:(0,r.jsxs)("svg",{height:R.height,width:R.width,children:[(0,r.jsx)(Z.Z,{orientation:"top",top:20,left:R.marginLeft,scale:N,hideAxisLine:!0,tickLength:0,tickFormat:c.w}),(0,r.jsx)(l.Z,{top:R.marginTop,left:R.marginLeft,stroke:p.r.colors.muted,strokeWidth:2,height:R.boundedHeight,scale:N}),(0,r.jsx)(u.Z,{top:R.marginTop,left:R.marginLeft,children:X.length>0&&(0,r.jsx)(P,{series:null!==k&&void 0!==k?k:{},frameData:X[H],yScale:U,xScale:N,colorScale:Q,showChange:null!==(t=I.showChange)&&void 0!==t?t:void 0})})]})}),(0,r.jsx)(E,{value:H,points:X.map((function(e){return e.timestamp})),onChange:function(e){return _(e)}})]}),M&&(0,r.jsx)(d.WH,{children:M})]})}},95353:function(e,t,n){n.d(t,{q:function(){return f}});var r=n(92809),i=n(85893),o=(n(67294),n(75276)),a=n(59490),s=n(90682),l=n(39693),u=n.n(l);function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var d=function(e){var t,n,r,a,l,c,d,p,f,x,h,m,g,v,y=e.data,b=e.visual,j=e.hideBackground;return(0,i.jsx)(o.I,{data:y,title:b.title,yAxis:{type:null!==(t=null===(n=b.options)||void 0===n?void 0:n.yAxisLeft.type.value)&&void 0!==t?t:s.s6.Linear},xAxis:{type:null!==(r=null===(a=b.options)||void 0===a||null===(l=a.xAxis)||void 0===l?void 0:l.type.value)&&void 0!==r?r:void 0,column:(null===(c=b.options)||void 0===c||null===(d=c.xAxisColumn)||void 0===d?void 0:d.value)||""},yColumns:u()(null===(p=b.options)||void 0===p||null===(f=p.yAxisColumns)||void 0===f?void 0:f.map((function(e){return e.value})))||[],groupColumn:null===(x=b.options)||void 0===x||null===(h=x.groupColumn)||void 0===h?void 0:h.value,seriesOptions:null===(m=b.options)||void 0===m?void 0:m.seriesOptions,isStacked:null!==(g=null===(v=b.options)||void 0===v?void 0:v.isStacked)&&void 0!==g?g:void 0,hideBackground:j})},p={line:d,bar:d,multi:d,bar_race:function(e){var t=e.data,n=e.visual;return console.log(n),(0,i.jsx)(a.X,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({data:t,title:n.title},n.options))}},f=function(e){var t=e.data,n=e.visual,r=e.hideBackground,o=void 0!==r&&r,a=p[n.type];return(0,i.jsx)(a,{data:t,visual:n,hideBackground:o})}},4671:function(e,t,n){n.d(t,{G:function(){return C},K:function(){return x}});var r=n(85893),i=n(49907),o=n(67294),a=n(79766),s=n(75133),l=n(92809);function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d=function(e){var t=e.path,n=e.onClick,i=e.style;return(0,r.jsx)(a.xu,{onClick:n,"aria-label":"Toggle dark mode",sx:c({padding:0,width:"20px",height:"17px",cursor:"pointer",marginRight:"3px",background:"url(".concat(t,")"),backgroundRepeat:"no-repeat",backgroundSize:"15px",backgroundPosition:"center center","&:hover":{opacity:.7,transition:"all .3s"}},i)})},p=n(95353),f=n(90682),x=function(e){var t=e.queries,n=e.visualID,l=e.startTime,u=e.endTime,c=(0,f.IM)({variables:{visualizationId:n}}),d=(0,i.Z)(c,1)[0].data,x=(0,s.T)({queries:t,params:{startTime:l.toUTC(),endTime:u.toUTC()},timestamp:"metric_date"}),m=x.isLoading,g=x.raw,v=null===g||void 0===g?void 0:g.data[0],y=(0,o.useMemo)((function(){return!m&&null!==d&&void 0!==d&&d.visualization&&v?(0,s.v)(v,!1):[]}),[v,m,null===d||void 0===d?void 0:d.visualization]);return!m&&null!==d&&void 0!==d&&d.visualization&&v?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.xu,{sx:{flex:1,p:1},children:(0,r.jsx)(p.q,{data:y,visual:d.visualization})}),(0,r.jsx)(h,{})]}):(0,r.jsx)(a.xu,{})},h=function(){return(0,r.jsx)(a.kC,{sx:{width:"100%",justifyContent:"flex-end",marginTop:"-40px"},children:(0,r.jsx)(a.zx,{as:"a",target:"_blank",href:"https://flipsidecrypto.com",variant:"small",sx:{fontSize:0,bg:"#6371ff",px:2,py:"4px",borderRadius:100,mr:"16px"},children:(0,r.jsxs)(a.kC,{sx:{alignItems:"center"},children:[(0,r.jsx)(d,{path:"/images/logos/light/box-logo.svg",style:{backgroundSize:"100% 100%",width:"24px",height:"30px",marginRight:"10px"}}),"Powered by Flipside Crypto"]})})})},m=n(96486),g=n(33561),v=n(57163),y=n(85228),b=n(15413);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(Object(n),!0).forEach((function(t){(0,l.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){var t=e.queryID,n=e.rows,i=e.columnLabels,s=e.columnTypes,l=e.xAxisLabel,u=(0,o.useState)(null),c=u[0],d=u[1],p=(0,o.useState)(!0),f=p[0],x=p[1];if(!l)return(0,r.jsx)("div",{});var h=(0,o.useMemo)((function(){return Array.isArray(n)?n.map((function(e){return(0,m.zipObject)(i,e)})):[]}),[n,i]),j=(0,o.useMemo)((function(){var e=[];return i.forEach((function(t,n){"number"===s[n]&&e.push({id:t,rows:h,x:l,y:t})})),x(!1),e}),[n,i,s,h]),w=(0,o.useMemo)((function(){var e=[];return s.forEach((function(t,n){if("number"===t){var r=i[n];r&&e.push(r)}})),e}),[s]),C="Results";if(1===w.length)try{var S;C=(0,m.capitalize)(null===(S=w[0])||void 0===S?void 0:S.replaceAll("_"," ").replaceAll("-"," "))}catch(P){C="Results"}return(0,r.jsxs)(a.xu,{sx:{padding:"16px"},children:[t&&(0,r.jsx)(a.kC,{sx:{justifyContent:"flex-end",marginBottom:"10px"},children:(0,r.jsx)(b.B,{visualID:t,queryId:t})}),(0,r.jsxs)(v.I8,{loading:f,children:[(0,r.jsxs)(v.WH,{children:[(0,r.jsx)(v.H8,{children:(0,r.jsx)(a.xv,{children:C})}),(0,r.jsx)(v.PG,{sx:{height:350},children:(0,r.jsx)(g.K,{onLegend:d,loading:f,series:j||[]})})]}),(0,r.jsx)(v.WH,{children:c&&(0,r.jsx)(y.D,O(O({},c),{},{sx:{flex:1}}))})]}),w.length>1&&w.map((function(e,t){return e&&l?(0,r.jsx)(k,{loading:f,visLineSerie:{id:e,rows:h,x:l,y:e}},t):(0,r.jsx)("div",{})}))]})},k=function(e){var t,n=e.visLineSerie,i=e.loading,s=(0,o.useState)(null),l=s[0],u=s[1];try{t=(0,m.capitalize)(n.y.replaceAll("_"," ").replaceAll("-"," "))}catch(c){t=n.y}return(0,r.jsxs)(v.I8,{loading:i,children:[(0,r.jsxs)(v.WH,{children:[(0,r.jsx)(v.H8,{children:(0,r.jsx)(a.xv,{children:t})}),(0,r.jsx)(v.PG,{sx:{height:350},children:(0,r.jsx)(g.K,{onLegend:u,loading:i,series:[n]})})]}),(0,r.jsx)(v.WH,{children:l&&(0,r.jsx)(y.D,O(O({},l),{},{sx:{flex:1}}))})]})},C=function(e){var t,n,i,o=e.queries,l=e.startTime,u=e.endTime,c=(0,s.T)({queries:o,params:{startTime:l.toUTC(),endTime:u.toUTC()},timestamp:"metric_date"}),d=c.isLoading,p=c.raw;if(d)return(0,r.jsx)(a.xu,{});var f,x=null===p||void 0===p?void 0:p.data[0],h="";null!==x&&void 0!==x&&x.results&&(null===x||void 0===x||null===(f=x.column_types)||void 0===f||f.forEach((function(e,t){"timestamp"===e&&(h=null===x||void 0===x?void 0:x.column_labels[t])})));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{rows:null!==(t=null===x||void 0===x?void 0:x.results)&&void 0!==t?t:[],xAxisLabel:h,columnLabels:null!==(n=null===x||void 0===x?void 0:x.column_labels)&&void 0!==n?n:[],columnTypes:null!==(i=null===x||void 0===x?void 0:x.column_types)&&void 0!==i?i:[]}),(0,r.jsx)(S,{})]})},S=function(){return(0,r.jsx)(a.kC,{sx:{width:"100%",justifyContent:"flex-end",marginTop:"-40px"},children:(0,r.jsx)(a.zx,{as:"a",target:"_blank",href:"https://flipsidecrypto.com",variant:"small",sx:{fontSize:0,bg:"#6371ff",px:2,py:"4px",borderRadius:100,mr:"16px"},children:(0,r.jsxs)(a.kC,{sx:{alignItems:"center"},children:[(0,r.jsx)(d,{path:"/images/logos/light/box-logo.svg",style:{backgroundSize:"100% 100%",width:"24px",height:"30px",marginRight:"10px"}}),"Powered by Flipside Crypto"]})})})}},15413:function(e,t,n){n.d(t,{B:function(){return v}});var r=n(85893),i=n(67294),o=n(94096),a=n(64115),s=n(66752),l=n(93029),u=n(79766),c=n(65055),d=n(9737),p=function(e){e.current&&(e.current.select(),e.current.setSelectionRange(0,9999),document.execCommand("copy"))},f={height:"36px",backgroundColor:"#6371ff",borderRadius:"18px",cursor:"pointer",padding:"7px 12px",width:"142px",outline:"none"},x=function(e){var t=e.onClick,n=e.title;return(0,r.jsx)(u.zx,{sx:f,onClick:t,children:(0,r.jsxs)(u.kC,{sx:{alignItems:"center"},children:[(0,r.jsx)(d.Z,{sx:{marginRight:"5px",height:"16px"}}),(0,r.jsx)(u.xv,{sx:{fontSize:1},children:n})]})})},h=function(e){var t=e.onClose,n=e.title,r=e.visualID,o=e.queryId,a=(0,i.useRef)(null),s=(0,i.useRef)(null);return(0,l.tZ)(c.u,{title:n,onClose:t,width:600,backgroundColor:"#F4F6F8",padding:"32px"},(0,l.tZ)(u.xu,{sx:{marginTop:"-10px"}},(0,l.tZ)(u.xv,{sx:{marginBottom:"10px",color:"#637381",fontSize:1}},"Share via Link"),(0,l.tZ)(u.kC,{sx:{alignItems:"center"}},(0,l.tZ)(u.II,{sx:m,ref:a,readOnly:!0,value:"https://velocity-app.flipsidecrypto.com/velocity/visuals/".concat(r,"/").concat(o)}),(0,l.tZ)(x,{onClick:function(){p(a),analytics.track("VCTY_Query_Visual_Shared_Link",{queryId:o})},title:"Copy Link"}))),(0,l.tZ)(u.xu,{sx:{marginTop:"25px"}},(0,l.tZ)(u.xv,{sx:{marginBottom:"10px",color:"#637381",fontSize:1}},"Embed on your Site"),(0,l.tZ)(u.kC,{sx:{alignItems:"center"}},(0,l.tZ)(u.II,{sx:m,ref:s,readOnly:!0,value:'<iframe src="https://velocity-app.flipsidecrypto.com/velocity/visuals/'.concat(r,"/").concat(o,'" width="800" height="600"></iframe>')}),(0,l.tZ)(x,{onClick:function(){analytics.track("VCTY_Query_Visual_Shared_Embed",{queryId:o}),p(s)},title:"Copy Embed"}))))},m={borderRadius:"18px",height:"36px",backgroundColor:"#fff",border:"none",boxShadow:"0px 1px 0px 0px rgba(22, 29, 37, 0.05)",outline:"none",width:"75%",marginRight:"10px"},g=n(78642),v=function(e){var t=e.fontSize,n=void 0===t?"12px":t,l=e.sx,u=void 0===l?{}:l,c=e.visualID,d=e.queryId,p=(0,i.useState)(!1),f=p[0],x=p[1];return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g.K,{onClick:function(){return x(!0)},sx:u,children:(0,r.jsxs)(o.k,{color:"#000",height:"100%",alignItems:"center",children:[(0,r.jsx)(s.vzB,{style:{marginRight:"4px"}}),(0,r.jsx)(a.x,{sx:{fontSize:n},children:"Share Visual"})]})}),f&&d&&(0,r.jsx)(h,{title:"Share It!",visualID:c,queryId:d,onClose:function(){return x(!1)}})]})}},33561:function(e,t,n){n.d(t,{K:function(){return m}});var r=n(92809),i=n(85893),o=n(78833),a=n(67294),s=n(8310),l=n(51712),u=n(96486),c=a.memo((function(e){var t=e.onHover,n=e.slices,r=e.series,o=e.setCurrentSlice,s=(0,a.useCallback)((function(){if(o(null),t){var e=r.map((function(e){return{label:e.id,color:e.color}}));t({title:"",items:e})}}),[t,r,o]);return(0,a.useEffect)(s,[r.map((function(e){return e.id.toString()})).join("")]),(0,i.jsx)(i.Fragment,{children:n.map((function(e){return(0,i.jsx)("rect",{x:e.x0,y:e.y0,width:e.width,height:e.height,fillOpacity:0,onMouseEnter:function(){var n;if(o(e),t){var i=r.map((function(t){var n=e.points.find((function(e){return e.serieId===t.id}));return{label:n.serieId,color:null===n||void 0===n?void 0:n.serieColor,value:null===n||void 0===n?void 0:n.data.yFormatted,rawValue:null===n||void 0===n?void 0:n.data.y}}));t({title:null===(n=e.points[0])||void 0===n?void 0:n.data.xFormatted,items:i})}},onMouseLeave:s},e.x0)}))})})),d=n(19995),p=n(79766);function f(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function x(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?f(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):f(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var h=a.memo((function(e){var t=e.loading,n=void 0!==t&&t,r=e.series,d=e.onLegend,f=(e.summaryHeader,e.mergeLayers),h=(0,o.Z)(e,["loading","series","onLegend","summaryHeader","mergeLayers"]),m=(0,a.useMemo)((function(){return function(e,t){if(!e)return[];if(t){var n=[];return e.forEach((function(e){e.rows.forEach((function(e){var t=n.find((function(t){return t.x==e.timestamp}));t?t.y+=e.value:n.push({x:e.timestamp,y:e.value})}))})),[{id:"total",data:n}]}return e.map((function(e){var t=[];return e.rows&&(t=e.rows.map((function(t){return{x:(0,u.get)(t,e.x),y:(0,u.get)(t,e.y)}}))),{id:e.id,data:t}}))}(r,f)}),[r]);return n?(0,i.jsx)(p.$j,{}):(0,i.jsx)(s.fH,x(x({},l.XB),{},{data:m,enableGridX:!1,layers:["grid","markers","axes","areas","crosshair","lines",function(e){return(0,i.jsx)(c,x(x({},e),{},{onHover:d}))},"mesh"],enableSlices:"x"},h))})),m=a.memo((function(e){return(0,i.jsx)(h,x({xScale:{type:"time",format:"%Y-%m-%dT%H:%M:%SZ",precision:"day",useUTC:!1},areaOpacity:1,xFormat:"time:%b %e",yFormat:d.Sf,axisBottom:{format:"%b %e",tickValues:7},axisLeft:{format:d.Sf,tickValues:5}},e))}))},19995:function(e,t,n){n.d(t,{Sf:function(){return i},uf:function(){return o},T3:function(){return a}});var r=["","k","M","B","T","P","E"];function i(e){return e&&"number"===typeof e?o(e):e.toString()}function o(e){var t=e<0?"-":"";e=Math.abs(e);var n=Math.log10(e)/3|0;if(n<=0)return t+parseFloat(e.toFixed(3*Math.abs(n)+2)).toString();var i=r[n];return t+(e/Math.pow(10,3*n)).toFixed(1)+i}var a=function(e){return e?" - ".concat(Math.round(100*e),"%"):""}},51712:function(e,t,n){n.d(t,{XB:function(){return i}});var r=n(98144),i={theme:{crosshair:{line:{stroke:"#919eab",strokeDasharray:"0"}},grid:{line:{stroke:"#dfe3e8",strokeWidth:1,strokeDasharray:2}},axis:{ticks:{text:{fontFamily:"Inter, sans-serif",fill:"#637381",fontSize:12}}}},crosshairType:"cross",margin:{right:50,left:50,bottom:40,top:40},colors:[r.r.colors.indigo,r.r.colors.teal,r.r.colors.purple,r.r.colors.orange,r.r.colors.ink]}},65055:function(e,t,n){n.d(t,{u:function(){return a}});var r=n(85893),i=(n(67294),n(79766)),o=n(94096),a=function(e){var t=e.backgroundColor,n=void 0===t?"#fefefe":t,a=e.onClose,s=e.width,l=void 0===s?500:s,u=e.padding,c=void 0===u?"15px":u,d=e.title,p=e.children,f=e.borderRadius,x=void 0===f?"5px":f,h=e.topRight;return(0,r.jsx)(i.W2,{sx:{position:"fixed",width:"100%",height:"100vh",background:"rgba(0,0,0,.4)",top:0,left:0,zIndex:1e3},children:(0,r.jsx)(o.k,{sx:{width:"100%",height:"100%",alignItems:"center",justifyContent:"center"},onClick:a,children:(0,r.jsxs)(o.k,{sx:{flexDirection:"column",width:l,padding:c,height:"auto",borderRadius:x,backgroundColor:n},onClick:function(e){return e.stopPropagation()},children:[d&&(0,r.jsxs)(o.k,{justifyContent:"space-between",alignItems:"center",children:[(0,r.jsx)(i.X6,{sx:{fontWeight:600,fontSize:"23px",width:"100%",padding:"0px 0px 10px 0px",height:"20px",lineHeight:"20px"},children:d}),h]}),(0,r.jsx)(i.xu,{sx:{width:"100%",padding:d?"20px 0":"0"},children:p})]})})})}}}]);