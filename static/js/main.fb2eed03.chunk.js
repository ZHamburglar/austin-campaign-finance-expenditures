(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{329:function(e){e.exports={"District 1":[78653,78701,78702,78721,78722,78723,78724,78725,78752,78753,78754],"District 2":[78617,78744,78745,78747,78748],"District 3":[78702,78704,78721,78725,78741,78742,78745],"District 4":[78723,78751,78753,78758],"District 5":[78652,78704,78745,78747,78748],"District 6":[78664,78717,78726,78727,78728,78729,78730,78732,78750],"District 7":[78660,78727,78728,78753,78756,78757,78758,78759],"District 8":[78652,78735,78736,78737,78746,78748,78749],"District 9":[78701,78703,78704,78705,78722,78723,78751],"District 10":[78703,78730,78731,78746,78750,78759],Austin:[78653,78701,78702,78721,78722,78723,78724,78725,78752,78753,78754,78617,78744,78745,78747,78748,78704,78741,78742,78751,78758,78652,78664,78717,78726,78727,78728,78729,78730,78732,78750,78660,78756,78757,78759,78735,78736,78737,78746,78749,78703,78705,78731]}},376:function(e,t,a){e.exports=a(642)},640:function(e,t,a){},642:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(65),i=a(51),o=a(67),c=a(44),s=a(341),u=a(342),m=a.n(u),d=a(53),p={count:0,isIncrementing:!1,isDecrementing:!1},h={open:!0},g=function(){return function(e){e({type:"modal/CHANGE_MODAL"})}},f={filterDates:null},v=function(e){var t=e.dates;return console.log("change filter",t),function(e){e({type:"dates/CHANGE_FILTER_DATES",payload:t})}},E=Object(c.c)({counter:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p;switch((arguments.length>1?arguments[1]:void 0).type){case"counter/INCREMENT_REQUESTED":return Object(d.a)({},e,{isIncrementing:!0});case"counter/INCREMENT":return Object(d.a)({},e,{count:e.count+1,isIncrementing:!e.isIncrementing});case"counter/DECREMENT_REQUESTED":return Object(d.a)({},e,{isDecrementing:!0});case"counter/DECREMENT":return Object(d.a)({},e,{count:e.count-1,isDecrementing:!e.isDecrementing});default:return e}},modal:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h;switch((arguments.length>1?arguments[1]:void 0).type){case"modal/CHANGE_MODAL":return Object(d.a)({},e,{open:!1});default:return e}},dates:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"dates/CHANGE_FILTER_DATES":return console.log("hello"),Object(d.a)({},e,{filterDates:t.payload});default:return e}}}),b=m()({basename:"/austin-campaign-finance-expenditures/"}),y=[s.a,Object(o.routerMiddleware)(b)],O=c.d.apply(void 0,[c.a.apply(void 0,y)].concat([])),C=Object(c.e)(Object(o.connectRouter)(b)(E),{},O),j=a(22),D=a(23),_=a(25),k=a(24),P=a(26),S=a(644),w=a(187),A=a.n(w),z=a(196);z.a.initialize("UA-131186037-1");var x=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=function(e){z.a.set(Object(d.a)({page:e},t)),z.a.pageview(e)};return function(t){function n(){return Object(j.a)(this,n),Object(_.a)(this,Object(k.a)(n).apply(this,arguments))}return Object(P.a)(n,t),Object(D.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.location.pathname+this.props.location.search;a(e)}},{key:"componentDidUpdate",value:function(e){var t=e.location.pathname+e.location.search,n=this.props.location.pathname+this.props.location.search;t!==n&&a(n)}},{key:"render",value:function(){return r.a.createElement(e,this.props)}}]),n}(n.Component)},N=a(249),I=a(313),M=a(225),R=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(_.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={open:!0,notes:null},a.getData=function(){A.a.get("https://raw.githubusercontent.com/ZHamburglar/austin-campaign-finance-expenditures/master/RELEASENOTES.md").then(function(e){var t,n,r=e.data.replace(/(\r\n|\n|\r)/g,"").split("### "),l=[];for(t=1;t<r.length;t++){var i=r[t].split("* "),o=Object.assign({});o.version=i[0];var c=[];for(n=1;n<i.length;n++)c.push(i[n]);o.notes=c,l.push(o)}a.setState({notes:l}),console.log("response",e.data,r)}).catch(function(e){console.error(e)})},a.show=function(){a.setState({open:!0})},a.close=function(){a.setState({open:!1})},a}return Object(P.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"render",value:function(){var e=this.props.open;return this.state.notes?r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{dimmer:"blurring",open:e,onClose:this.props.changeModal},r.a.createElement(N.a.Header,null,"Update Notes"),r.a.createElement(N.a.Content,null,this.state.notes.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement(N.a.Description,null,r.a.createElement(I.a,null,"Version ",e.version),e.notes.map(function(t,a){return r.a.createElement("div",{key:e.version+a},r.a.createElement("p",null,"\u2022 ",t))}),r.a.createElement("br",null)))})),r.a.createElement(N.a.Actions,null,r.a.createElement(M.a,{positive:!0,icon:"checkmark",labelPosition:"right",content:"Good to know",onClick:this.close})))):r.a.createElement(r.a.Fragment,null,r.a.createElement(N.a,{dimmer:"blurring",open:e,onClose:this.props.changeModal},r.a.createElement(N.a.Header,null,"Update Notes"),"Update Notes",r.a.createElement(N.a.Actions,null,r.a.createElement(M.a,{positive:!0,icon:"checkmark",labelPosition:"right",content:"Good to know",onClick:this.close}))))}}]),t}(n.Component),F=Object(i.connect)(function(e){return{open:e.modal.open}},function(e){return Object(c.b)({changeModal:g},e)})(R),T=a(54),L=a.n(T),H=a(28),G=a.n(H),Y=a(42),$=a(43);function B(){var e=Object(Y.a)(["\n\tfont-size: 80%\n\tbackground-color: white;\n\tcolor: red;\n\n\t&:hover {\n    background: blue;\n  \t}\n"]);return B=function(){return e},e}function U(){var e=Object(Y.a)(["\n\tfont-size: 50%;\n\tcolor: grey;\n"]);return U=function(){return e},e}function J(){var e=Object(Y.a)(["\n\tfont-size: 250%;\n\tcolor: white;\n"]);return J=function(){return e},e}function Q(){var e=Object(Y.a)(["\n"]);return Q=function(){return e},e}function Z(){var e=Object(Y.a)(["\n\tline-height: 250%;\n"]);return Z=function(){return e},e}function q(){var e=Object(Y.a)(["\n\tdisplay: flex;\n\ttext-align: center;\n\tjustify-content: center;\n"]);return q=function(){return e},e}function V(){var e=Object(Y.a)(["\n\tcolor: blue;\n\twidth: calc(100% / 3);\n"]);return V=function(){return e},e}function W(){var e=Object(Y.a)(["\n    display: flex;\n\theight: 50%;\n\toverflow: hidden;\n\tline-height: normal;\n"]);return W=function(){return e},e}var K=$.a.div(W()),X=$.a.div(V()),ee=$.a.div(q()),te=$.a.div(Z()),ae=$.a.div(Q()),ne=$.a.div(J()),re=$.a.span(U()),le=$.a.a(B()),ie=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(_.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={months:null,monthsString:null,days:null,daysString:null},a}return Object(P.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){this.getTime()}},{key:"getTime",value:function(){var e,t,a,n=G()("2019-11-05").diff(G()(),"milliseconds"),r=G.a.duration(n);r._data.years>0?(e=12*r._data.years+r._data.months,t="Months"):1===r._data.months?(e=r._data.months,t="Month"):(e=r._data.months,t="Months"),a=1===r._data.days?"Day":"Days",this.setState({months:e,monthsString:t,days:r._data.days,daysString:a})}},{key:"render",value:function(){var e=this.props,t=e.contributions,a=e.expenditures,n=e.loans,l=e.pledges,i=e.credit,o=e.council,c=e.PACS,s=e.individuals,u=e.entities,m=this.state,d=m.months,p=m.monthsString,h=m.days,g=m.daysString;return r.a.createElement(r.a.Fragment,null,r.a.createElement(K,null,r.a.createElement(X,null,r.a.createElement(ee,null,r.a.createElement(ae,null,r.a.createElement("div",null,"Add"),r.a.createElement("div",null,"Something"),r.a.createElement("div",null,"Here")))),r.a.createElement(X,null,r.a.createElement(te,null,r.a.createElement(ne,null,r.a.createElement(L.a,{end:a,delay:.3,duration:2.75}),r.a.createElement(re,null,"Expenditures"))),r.a.createElement(te,null,r.a.createElement(ne,null,r.a.createElement(L.a,{end:t,delay:.3,duration:2.75}),r.a.createElement(re,null,"Contributions"))),r.a.createElement(te,null,r.a.createElement(ne,null,r.a.createElement(L.a,{end:n,delay:.3,duration:2.75}),r.a.createElement(re,null,"Loans"))),r.a.createElement(te,null,r.a.createElement(ne,null,r.a.createElement(L.a,{end:l,delay:.3,duration:2.75}),r.a.createElement(re,null,"Pledges"))),r.a.createElement(te,null,r.a.createElement(ne,null,r.a.createElement(L.a,{end:i,delay:.3,duration:2.75}),r.a.createElement(re,null,"Credit")))),r.a.createElement(X,null,r.a.createElement(ne,null,r.a.createElement(L.a,{end:o,delay:.3,duration:2.75}),r.a.createElement(re,null,"Council")))),r.a.createElement(K,null,r.a.createElement(X,null,r.a.createElement(ne,null,r.a.createElement(L.a,{end:o,delay:.3,duration:2.75}),r.a.createElement(re,null,"Council")),r.a.createElement(ne,null,r.a.createElement(L.a,{end:c,delay:.3,duration:2.75}),r.a.createElement(re,null,"PACS"))),r.a.createElement(X,null,r.a.createElement(ne,null,r.a.createElement(L.a,{end:s,delay:.3,duration:2.75}),r.a.createElement(re,null,"Individuals")),r.a.createElement(ne,null,r.a.createElement(L.a,{end:u,delay:.3,duration:2.75}),r.a.createElement(re,null,"Entities"))),r.a.createElement(X,null,r.a.createElement("div",null,r.a.createElement(ne,null,d,r.a.createElement(re,null,p)),r.a.createElement(ne,null,h,r.a.createElement(re,null,g)),r.a.createElement("br",null),"until the next election."),r.a.createElement("div",null,r.a.createElement(le,{href:"https://www.votetexas.gov/register-to-vote/"},"Registered to vote?")))))}}]),t}(n.Component),oe=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(_.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,contributions:null,expenditures:null,loans:null,pledges:null,credit:null,council:null,PACS:null,individuals:null,entities:null},a}return Object(P.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){this.filterData(this.props.data,this.props.organizations)}},{key:"filterData",value:function(e,t){var a,n=0,r=0,l=0,i=0,o=0,c=t.Council.length,s=t.Organizations.length,u=new Set,m=new Set;for(a=0;a<e.length;a++)"Contribution"===e[a].transaction_type?n++:"Expenditure"===e[a].transaction_type?r++:"Loan"===e[a].transaction_type?l++:"Pledged Contribution"===e[a].transaction_type?i++:"Credit"===e[a].transaction_type&&o++,"Individual"===e[a].entity?u.add(e[a].transactor_name):"Entity"===e[a].entity&&m.add(e[a].transactor_name);var d=Array.from(u),p=Array.from(m);this.setState({contributions:n,expenditures:r,loans:l,pledges:i,credit:o,council:c,PACS:s,individuals:d.length,entities:p.length})}},{key:"render",value:function(){var e=this.props.open,t=this.state,a=t.contributions,n=t.expenditures,l=t.loans,i=t.pledges,o=t.credit,c=t.council,s=t.PACS,u=t.individuals,m=t.entities;return e?r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,{contributions:a,expenditures:n,loans:l,pledges:i,credit:o,council:c,PACS:s,individuals:u,entities:m}))}}]),t}(n.Component),ce=Object(i.connect)(function(e){return{open:e.modal.open}},null)(oe),se=function(e){function t(){return Object(j.a)(this,t),Object(_.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Settings Page"),r.a.createElement("p",null,"Change to settings Page"))}}]),t}(n.Component),ue=a(355),me=a.n(ue),de=function(e){function t(){return Object(j.a)(this,t),Object(_.a)(this,Object(k.a)(t).apply(this,arguments))}return Object(P.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App-header"},r.a.createElement("div",null,"Loading",r.a.createElement(me.a,{type:"cubes",color:"blue",height:100,width:200})))}}]),t}(n.Component),pe=a(227),he=a(325),ge=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(_.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,name:null,dataRange:null,reports:null,pages:null,activePage:null,pageSize:3},a.handlePaginationChange=function(e,t){var n=t.activePage;return a.setState({activePage:n})},a}return Object(P.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){this.filterData()}},{key:"filterData",value:function(){var e=[],t=new Set;this.props.data.filter(function(e){return t.add(e.report_type+" '"+G()(e.transaction_date).format("YY")),null});var a=this.props.data.map(function(e){return G()(e.transaction_date)}),n=G.a.min(a).format("MM-DD-YYYY"),r=G.a.max(a).format("MM-DD-YYYY");e.push(n,r);var l=Array.from(t),i=Math.ceil(l.length/3),o=this.getNameFormat(this.props.name);this.setState({loading:!1,dataRange:e,reports:l,pages:i,activePage:1,name:o})}},{key:"getNameFormat",value:function(e){var t=e.split(", ");return t.length>1?(console.log("name",t),t[1]+" "+t[0]):e}},{key:"createReportsList",value:function(){var e,t=this.state.pageSize,a=[],n=this.state.activePage*t-t;if(e=this.state.activePage===this.state.pages?this.state.reports.length:this.state.activePage*t,console.log("x",e,"i",n),0===this.state.reports.length)a.push(r.a.createElement(pe.a,{key:0},r.a.createElement("p",null,"None")));else if(this.state.activePage===this.state.pages){var l=e-n;for(console.log("j",l);n<e;n++)a.push(r.a.createElement(pe.a,{key:n},r.a.createElement("p",null,this.state.reports[n])));for(;l<t;l++)a.push(r.a.createElement(pe.a,{key:l},r.a.createElement("p",null," ")))}else for(;n<e;n++)a.push(r.a.createElement(pe.a,{key:n},r.a.createElement("p",null,this.state.reports[n])));return r.a.createElement(pe.a.Group,null,a)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.name,n=e.dataRange,l=e.pages,i=e.activePage;return t?r.a.createElement("div",null,"Loading"):t?r.a.createElement("div",null,"Not Loading"):r.a.createElement("div",{style:{color:"black"}},r.a.createElement("div",null,"Name: ",a),r.a.createElement(pe.a.Group,{raised:!0},r.a.createElement(pe.a,null,r.a.createElement("p",null,"Date Range:")),r.a.createElement(pe.a.Group,{horizontal:!0},r.a.createElement(pe.a,null,"First: ",n[0]),r.a.createElement(pe.a,null,"Last: ",n[1]))),r.a.createElement(pe.a.Group,{raised:!0},r.a.createElement(pe.a,null,r.a.createElement("p",null,"Reports Included:")),this.createReportsList(),r.a.createElement(he.a,{activePage:i,onPageChange:this.handlePaginationChange,firstItem:null,lastItem:null,pointing:!0,secondary:!0,totalPages:l})))}}]),t}(n.Component),fe=a(191),ve=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(_.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,filteredData:null,total:null,mean:null,median:null},a}return Object(P.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){this.filterPie(this.props.data)}},{key:"filterPie",value:function(){var e=[0,0,0,0,0],t=0;this.props.data.filter(function(a){return a.transaction_amount>0&&a.transaction_amount<=100?(t+=parseInt(a.transaction_amount,10),e[0]++):a.transaction_amount>100&&a.transaction_amount<=200?(t+=parseInt(a.transaction_amount,10),e[1]++):a.transaction_amount>200&&a.transaction_amount<349?(t+=parseInt(a.transaction_amount,10),e[2]++):a.transaction_amount>349&&a.transaction_amount<=350?(t+=parseInt(a.transaction_amount,10),e[3]++):a.transaction_amount>350&&(t+=parseInt(a.transaction_amount,10),e[4]++),null});var a=parseFloat(t/this.props.data.length).toFixed(2);this.setState({loading:!1,filteredData:e,total:t,mean:a})}},{key:"render",value:function(){var e=this.state,t=e.filteredData,a=e.total,n=e.mean,l={labels:["$0-$100","$101-$200","$201-$349","$350","$350+"],datasets:[{data:t,backgroundColor:["#FF6384","#36A2EB","#FFCE56","purple","tomato"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","purple","tomato"]}]};return r.a.createElement("div",{style:{color:"black"}},r.a.createElement(pe.a.Group,{raised:!0},r.a.createElement(pe.a,null,r.a.createElement("p",null,"Contribution Amount")),r.a.createElement(pe.a.Group,{horizontal:!0},r.a.createElement(pe.a,null,"Total: $",a),r.a.createElement(pe.a,null,"Mean: $",n))),r.a.createElement(fe.a,{data:l,width:80,height:80,options:{legend:{display:!0,position:"bottom",labels:{fontColor:"red"}},tooltips:{enabled:!0}}}))}}]),t}(n.Component),Ee=a(329),be=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(_.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,noData:null,filteredData:null},a}return Object(P.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){this.props.data.length?this.filterPie(this.props.data):this.noDataPie(this.props.data)}},{key:"noDataPie",value:function(){this.setState({loading:!1,noData:"There isn't any data"})}},{key:"filterPie",value:function(){var e=[];this.props.data.filter(function(t){var a;if(void 0===t.transactor_zip_code)if(t.transactor_city.length>1){var n=t.transactor_city.split(", ");a=3===n.length?n[2].slice(0,5):2===n.length?n[1].slice(0,5):"Not Categorized"}else a="Not Categorized";else a=t.transactor_zip_code.slice(0,5);if(e.some(function(e){return e.zipCode===a})){var r=e.findIndex(function(e){return e.zipCode===a});e[r].count+=1,e[r].amount=e[r].amount+parseInt(t.transaction_amount,10)}else{var l;l=t.office_sought?t.office_sought:t.office_held?t.office_held:"Austin";var i=Object.assign({});i.zipCode=a,i.count=1,i.amount=parseInt(t.transaction_amount,10),i.district=l,e.push(i)}return null}),e.sort(function(e,t){return e.amount>t.amount?-1:e.amount<t.amount?1:0}),console.log("This?:",this),this.setState({loading:!1,filteredData:e})}},{key:"render",value:function(){var e=this.state,t=e.filteredData,a=e.noData,n=[],l=[],i=[];if(t){var o,c;for(c=t.length<8?t.length:8,o=0;o<c;o++)"undefined"==typeof Ee[t[o].district]?(l.push(t[o].zipCode),i.push(t[o].amount),n.push("red")):Ee[t[o].district].includes(parseInt(t[o].zipCode,10))?(l.push(t[o].zipCode),i.push(t[o].amount),n.push("green")):(l.push(t[o].zipCode),i.push(t[o].amount),n.push("red"));var s={labels:l,datasets:[{data:i,backgroundColor:n,hoverBackgroundColor:n}]};return r.a.createElement("div",{ref:this.myDiv,style:{color:"black"}},r.a.createElement(fe.b,{data:s,width:50,height:300,options:{legend:{display:!1},tooltips:{enabled:!0},maintainAspectRatio:!1}}))}return a?r.a.createElement("div",null,"There is no data"):r.a.createElement("div",null,"Loading")}}]),t}(n.Component),ye=a(321);function Oe(){var e=Object(Y.a)(["\n    font-size: 18px;\n"]);return Oe=function(){return e},e}var Ce=$.a.div(Oe()),je=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(_.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,name:null,pages:null,activePage:null,topContributors:null,pageSize:5},a.handlePaginationChange=function(e,t){var n=t.activePage;return a.setState({activePage:n})},a}return Object(P.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){this.filterData()}},{key:"filterData",value:function(){var e=this.state.pageSize,t=this.props.entity,a=[];this.props.data.filter(function(e){return"Individual"===e.entity&&"Individuals"===t?(a.push(e),!0):"Entity"===e.entity&&"Organizations"===t&&void a.push(e)});var n=a.sort(function(e,t){return t.transaction_amount-e.transaction_amount}).slice(0,20),r=Math.ceil(n.length/e);this.setState({loading:!1,activePage:1,pages:r,topContributors:n})}},{key:"createContributionList",value:function(){var e,t=this.state.pageSize,a=[],n=this.state.activePage*t-t;if(e=this.state.activePage===this.state.pages?this.state.topContributors.length:this.state.activePage*t,0===this.state.topContributors.length)a.push(r.a.createElement(ye.a.Row,{key:0},r.a.createElement(ye.a.Cell,null),r.a.createElement(ye.a.Cell,{textAlign:"right"},"None")));else if(this.state.activePage===this.state.pages){for(var l=e-n;n<e;n++){var i=parseInt(this.state.topContributors[n].transaction_amount,10).toFixed(2);a.push(r.a.createElement(ye.a.Row,{key:n},r.a.createElement(ye.a.Cell,null,this.state.topContributors[n].transactor_name),r.a.createElement(ye.a.Cell,{textAlign:"right"},"$",i)))}for(;l<t;l++)a.push(r.a.createElement(ye.a.Row,{key:l},r.a.createElement(ye.a.Cell,null),r.a.createElement(ye.a.Cell,{textAlign:"right"},"None")))}else for(;n<e;n++){var o=parseInt(this.state.topContributors[n].transaction_amount,10).toFixed(2);a.push(r.a.createElement(ye.a.Row,{key:n},r.a.createElement(ye.a.Cell,null,this.state.topContributors[n].transactor_name),r.a.createElement(ye.a.Cell,{textAlign:"right"},"$",o)))}return r.a.createElement(ye.a.Body,null,a)}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.pages,n=e.activePage,l=this.props.entity;return t?r.a.createElement("div",null,"Loading"):t?r.a.createElement("div",null,"Not Loading"):r.a.createElement("div",{style:{color:"black"}},r.a.createElement(pe.a.Group,{raised:!0},r.a.createElement(pe.a,null,r.a.createElement("p",null,"Top Contributing ",l)),r.a.createElement(pe.a.Group,null,r.a.createElement(Ce,null,r.a.createElement(ye.a,{stackable:!0,selectable:!0,fixed:!0,singleLine:!0},r.a.createElement(ye.a.Header,null,r.a.createElement(ye.a.Row,null,r.a.createElement(ye.a.HeaderCell,{className:"twelve wide"},"Contributor"),r.a.createElement(ye.a.HeaderCell,{textAlign:"right"},"Amount"))),this.createContributionList()))),r.a.createElement(he.a,{activePage:n,onPageChange:this.handlePaginationChange,firstItem:null,lastItem:null,pointing:!0,secondary:!0,totalPages:a})))}}]),t}(n.Component),De=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(_.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,filteredData:null,zipCodes:null,name:null},a}return Object(P.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){this.filterData(this.props.match.params.org)}},{key:"componentWillReceiveProps",value:function(e){console.log("props change??",e.selectedOrganization)}},{key:"filterData",value:function(e){var t=this.props.filterDates,a=[];a.Contributions=[],a.Expenditures=[],this.props.data.filter(function(t){return t.filer_name===e&&"Contribution"===t.transaction_type?a.Contributions.push(t):t.filer_name===e&&"Expenditure"===t.transaction_type&&a.Expenditures.push(t),null}),t?this.setState({name:this.props.match.params.org},this.filterByDate(a)):this.setState({name:this.props.match.params.org,loading:!1,filteredData:a.Contributions})}},{key:"filterByDate",value:function(e){console.log("huh?");var t=this.props.filterDates,a=[];e.Contributions.filter(function(e){return G()(e.transaction_date).isSameOrAfter(t[0])&&G()(e.transaction_date).isSameOrBefore(t[1])&&a.push(e),null}),this.setState({loading:!1,filteredData:a})}},{key:"createZipCodeList",value:function(e){var t=[];this.props.data.filter(function(a){var n;if(a.filer_name===e&&"Contribution"===a.transaction_type)if(n=void 0===a.transactor_zip_code?"Not Categorized":a.transactor_zip_code.slice(0,5),t.some(function(e){return e.zipCode===n})){var r=t.findIndex(function(e){return e.zipCode===n});t[r].count+=1,t[r].amount=t[r].amount+parseInt(a.transaction_amount,10)}else{var l=Object.assign({});l.zipCode=n,l.count=1,l.amount=parseInt(a.transaction_amount,10),t.push(l)}return null}),this.setState({loading:!1,zipCodes:t})}},{key:"render",value:function(){var e=this.state,t=e.filteredData,a=e.name;return this.state.loading?r.a.createElement("div",{className:"App"},r.a.createElement(de,null)):t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"one-third column"},r.a.createElement(ge,{data:this.state.filteredData,name:a})),r.a.createElement("div",{className:"one-third column"},r.a.createElement(ve,{data:this.state.filteredData})),r.a.createElement("div",{className:"one-third column"},r.a.createElement(ve,{data:this.state.filteredData}))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"one-third column"},r.a.createElement(je,{data:this.state.filteredData,entity:"Individuals"})),r.a.createElement("div",{className:"one-third column"},r.a.createElement(je,{data:this.state.filteredData,entity:"Organizations"})),r.a.createElement("div",{className:"one-third column"},r.a.createElement(be,{data:this.state.filteredData})))):r.a.createElement(r.a.Fragment,null,"Something has gone wrong.")}}]),t}(n.Component),_e=Object(i.connect)(function(e){return{filterDates:e.dates.filterDates}},null)(De),ke=a(186),Pe=a(358),Se=a.n(Pe),we=a(228),Ae=a(322),ze=a(359),xe=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(_.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,searchinput:"",selectedOrganization:"",datesRange:""},a.handleSearchChange=function(e){a.setState({searchinput:e.target.value})},a.handleOrgChange=function(e,t){var n,r=a.state.datesRange.split(" - ");r.length>0&&r[0].length>0&&(n=Se.a.stringify({from:r[0],to:r[1]})),a.props.changeOrgPage(t.value,n)},a.handleChange=function(e,t){var n=t.name,r=t.value,l=r.split(" - ");a.state.hasOwnProperty(n)&&a.setState(Object(ke.a)({},n,r)),a.props.changeFilterDate({dates:l})},a}return Object(P.a)(t,e),Object(D.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement(we.a,{fixed:"top",borderless:!0,inverted:!0,className:"Navbar"},r.a.createElement(we.a.Item,{as:"a",header:!0},"Austin Political Tracker"),r.a.createElement(we.a.Item,{as:"a",onClick:this.props.changeHomePage},"Home"),r.a.createElement(Ae.a,{item:!0,simple:!0,text:"Council/PACS"},r.a.createElement(Ae.a.Menu,null,r.a.createElement(Ae.a.Item,null,r.a.createElement("i",{className:"dropdown icon"}),r.a.createElement("span",{className:"text"},"Office Holders"),r.a.createElement(Ae.a.Menu,null,this.props.organizations.Council.map(function(t){return r.a.createElement(Ae.a.Item,{onClick:e.handleOrgChange,key:t.filer_name,value:t.filer_name},t.filer_name)}))),r.a.createElement(Ae.a.Item,null,r.a.createElement("i",{className:"dropdown icon"}),r.a.createElement("span",{className:"text"},"PACS"),r.a.createElement(Ae.a.Menu,null,this.props.organizations.Organizations.map(function(t){return r.a.createElement(Ae.a.Item,{onClick:e.handleOrgChange,key:t.filer_name,value:t.filer_name},t.filer_name)}))))),r.a.createElement(we.a.Item,null,r.a.createElement(ze.DatesRangeInput,{name:"datesRange",placeholder:"From - To",dateFormat:"MM-DD-YYYY",minDate:"01-10-2016",value:this.state.datesRange,iconPosition:"left",onChange:this.handleChange})),r.a.createElement(we.a.Item,{as:"a",position:"right",onClick:this.props.changeSettingPage},"Settings")))}}]),t}(n.Component),Ne=Object(i.connect)(null,function(e){return Object(c.b)({changeHomePage:function(){return Object(o.push)({pathname:"/",search:"?filter=homepagefilter"})},changeSettingPage:function(){return Object(o.push)("/settings")},changeOrgPage:function(e,t){return Object(o.push)({pathname:"/council/"+e,search:t,state:{hello:"state value"}})},changeFilterDate:v},e)})(xe);function Ie(){var e=Object(Y.a)(["\n    background-color: rgba(66,87,102, .8);\n\theight: 95%;\n    width: 95%;\n"]);return Ie=function(){return e},e}function Me(){var e=Object(Y.a)(["\n\tposition: absolute;\n\tmargin-top: 5vh;\n\twidth: 100%;\n    height: 95%;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    font-size: calc(10px + 2vmin);\n    color: white;\n"]);return Me=function(){return e},e}var Re=$.a.div(Me()),Fe=$.a.div(Ie()),Te=function(e){function t(){var e,a;Object(j.a)(this,t);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(a=Object(_.a)(this,(e=Object(k.a)(t)).call.apply(e,[this].concat(r)))).state={loading:!0,data:null,organizations:null},a}return Object(P.a)(t,e),Object(D.a)(t,[{key:"componentDidMount",value:function(){this.getData()}},{key:"getData",value:function(){var e=this;A.a.get("https://data.austintexas.gov/resource/asyh-u6ja.json?$limit=9000").then(function(t){var a=[],n=[];n.Council=[],n.Organizations=[],t.data.filter(function(e){return a.findIndex(function(t){return t.filer_name===e.filer_name})<=-1&&a.push({filer_name:e.filer_name,form:e.form}),null}),a.sort(function(e,t){return e.filer_name<t.filer_name?-1:e.filer_name>t.filer_name?1:0}),a.filter(function(e){return"C/OH - Candidate/Officeholder Campaign Finance Report"===e.form?n.Council.push(e):n.Organizations.push(e),null}),e.setState({loading:!1,data:t.data,organizations:n})}).catch(function(e){console.error(e)})}},{key:"render",value:function(){var e=this;return this.state.loading?r.a.createElement("div",null,r.a.createElement(de,null)):this.state.data?r.a.createElement(r.a.Fragment,null,r.a.createElement(Ne,{organizations:this.state.organizations}),r.a.createElement(Re,null,r.a.createElement(Fe,null,r.a.createElement(S.a,{exact:!0,path:"/",component:x(function(t){return r.a.createElement(ce,Object.assign({},t,{data:e.state.data,organizations:e.state.organizations}))})}),r.a.createElement(S.a,{exact:!0,path:"/council/:org",component:x(function(t){return r.a.createElement(_e,Object.assign({},t,{data:e.state.data}))})}),r.a.createElement(S.a,{exact:!0,path:"/settings",component:x(se)})))):r.a.createElement("div",null,"This is Broken! Please Refresh!")}}]),t}(n.Component),Le=(a(638),a(640),document.querySelector("#root"));Object(l.render)(r.a.createElement(i.Provider,{store:C},r.a.createElement(o.ConnectedRouter,{history:b},r.a.createElement("div",{className:"App"},r.a.createElement(Te,null)))),Le)}},[[376,2,1]]]);
//# sourceMappingURL=main.fb2eed03.chunk.js.map