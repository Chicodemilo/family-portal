(this["webpackJsonpfamily-portal"]=this["webpackJsonpfamily-portal"]||[]).push([[0],{21:function(t,e,a){t.exports=a(35)},26:function(t,e,a){},27:function(t,e,a){},35:function(t,e,a){"use strict";a.r(e);var n=a(0),r=a.n(n),c=a(9),o=a.n(c),s=(a(26),a(10)),i=a(11),u=a(13),h=a(12),p=a(14),l=(a(27),a(6)),f=a(8),m=a(20),d=a(4),w={test:"Billy",apiWeather:[],apiCalendar:[],apiTwitter:[],apiForecast:[],apiTodayInHistory:"",apiJoke:"",apiFact:"",apiQuote:"",funnyThing:"My dog used to chase people on a bike a lot. It got so bad I had to take his bike away."},y=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"CHANGE_TEST":var a=e.test;return Object(d.a)({},t,{test:a});case"GET_WEATHER":return Object(d.a)({},t,{apiWeather:e.newWeather});case"GET_CALENDAR":return Object(d.a)({},t,{apiCalendar:e.newCalendar});case"GET_TWITTER":var n=e.newTwitter.reduce((function(t,e){var a=e.summary.replace("#QZZXXWEE42"," ");return t+" \u203a\u203a\u203a\u203a "+e.date+":"+a+" "})," ");if(n!==e.apiTwitter)return Object(d.a)({},t,{apiTwitter:n});break;case"GET_FORECAST":return Object(d.a)({},t,{apiForecast:e.newForecast});case"GET_HISTORY":var r=e.newHistory.reduce((function(t,e){return e.summary})," ");return Object(d.a)({},t,{apiTodayInHistory:r});case"GET_JOKE":return Object(d.a)({},t,{apiJoke:e.newJoke.joke});case"GET_FACT":return Object(d.a)({},t,{apiFact:e.newFact.fact});case"GET_QUOTE":var c=e.newQuote.quote+" - "+e.newQuote.author;return Object(d.a)({},t,{apiQuote:c});default:return t}},v=Object(f.c)({portalData:y}),E=function(){return Object(f.d)(v,Object(f.a)(m.a))},T=a(1),g=a.n(T),O=a(3),b=function(){var t=Object(O.a)(g.a.mark((function t(){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.abrupt("return","Fred");case 3:t.next=9;break;case 5:return t.prev=5,t.t0=t.catch(0),console.log(t.t0),t.abrupt("return",!1);case 9:case"end":return t.stop()}}),t,null,[[0,5]])})));return function(){return t.apply(this,arguments)}}(),j=a(2),k=a.n(j),N=function(t){var e=t.calendarItems.map((function(t){var e=Math.random(),a=k()().format("YYYY"),n=k()(t.date).format("DD.MM.".concat(a,", HH:mm:ss")),c=k()().format("DD.MM.YYYY, HH:mm:ss"),o="calendarItem";n<c&&(o="calendarItemOld");var s=k.a.utc(k()(n,"DD/MM/YYYY HH:mm:ss").diff(k()(c,"DD/MM/YYYY HH:mm:ss"))).format("DD/MM/YYYY HH:mm:ss");s<"01/01/1970 00:30:00"&&(o="calendarItemSoon"),s<"01/01/1970 00:15:00"&&(o="calendarItemSooner");var i=t.date;if("00:00 am"===k()(t.date).format("HH:mm a")){var u=k()().format("YYYY"),h=k()(t.date).format("MM/DD/".concat(u,", HH:mm:ss"));i=k()(h).format("ddd MMM DD")+", All Day"}return r.a.createElement("p",{className:o,key:e},i," \u2022 ",t.summary)}));return r.a.createElement("div",{className:"calendarList"},e)},I=function(t){return r.a.createElement("div",{className:"twitterScroll"},r.a.createElement("p",null,t.tweetItems))},F=function(t){return r.a.createElement("div",{className:"forecastItem"},t.day,r.a.createElement("br",null),r.a.createElement("img",{src:t.icon,height:"30",width:"30"}),r.a.createElement("br",null),t.high,"/",t.low)},D=function(t){var e=Object(l.c)((function(t){return t.portalData.apiForecast})),a=null;return e.length>0&&(a=e.map((function(t){var e=Math.random();return r.a.createElement(F,{key:e,day:t.day,high:t.high,low:t.low,description:t.description,icon:t.icon})}))),r.a.createElement("div",{className:"forecastBox"},a)},G=function(t){return r.a.createElement("div",{className:"weatherBox"},t.currentWeather.temp,"\xb0\xa0\xa0\xa0",t.currentWeather.description,r.a.createElement("img",{src:t.currentWeather.icon,height:"40",width:"40",className:"weatherIcon"}),r.a.createElement("br",null),r.a.createElement(D,null))},Y=function(t){return r.a.createElement("div",{className:"funnyThingContainer"},t.funnyItem)},C=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,c=new Array(n),o=0;o<n;o++)c[o]=arguments[o];return(a=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(c)))).state={tweetItems:[],tweetString:"",dateString:"",timeString:"",newFunnyThing:""},a.showFunnyThing=function(){var t=Math.round(3*Math.random());switch(console.log(t),t){case 0:a.props.fetchNewHistory().then((function(){var t=Math.random();""!==a.props.historyItem&&a.setState({newFunnyThing:r.a.createElement(Y,{key:t,funnyItem:a.props.historyItem})})}));break;case 1:a.props.fetchNewJoke().then((function(){var t=Math.random();""!==a.props.historyItem&&a.setState({newFunnyThing:r.a.createElement(Y,{key:t,funnyItem:a.props.jokeItem})})}));break;case 2:a.props.fetchNewFact().then((function(){var t=Math.random();""!==a.props.historyItem&&a.setState({newFunnyThing:r.a.createElement(Y,{key:t,funnyItem:a.props.factItem})})}));break;case 3:a.props.fetchNewQuote().then((function(){var t=Math.random();""!==a.props.historyItem&&a.setState({newFunnyThing:r.a.createElement(Y,{key:t,funnyItem:a.props.quoteItem})})}))}},a.handleGetForecast=function(){a.props.fetchNewForecast()},a.handleGetWeather=function(){a.props.fetchNewWeather()},a.handleTimeChange=function(){var t=k()().format("LT"),e=k()().format("dddd, MMM Do YYYY");a.setState({dateString:e,timeString:t})},a.handleGetCalendar=function(){a.props.fetchNewCalendar()},a.handleGetTwitter=function(){a.props.fetchNewTwitter()},a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"componentDidMount",value:function(){this.handleGetCalendar(),this.handleGetTwitter(),this.handleTimeChange(),this.handleGetWeather(),this.handleGetForecast(),this.showFunnyThing(),this.props.fetchNewHistory(),this.props.fetchNewJoke(),this.props.fetchNewFact(),this.props.fetchNewQuote(),setInterval(this.showFunnyThing,144e4),setInterval(this.handleTimeChange,1e3),setInterval(this.handleGetCalendar,1e4),setInterval(this.handleGetTwitter,1e4),setInterval(this.handleGetWeather,3e5),setInterval(this.handleGetForecast,3e5)}},{key:"render",value:function(){return r.a.createElement("div",{className:"portalBody"},r.a.createElement("div",{className:"headerBlock"},r.a.createElement("div",{className:"timeBlock"},r.a.createElement("span",{className:"headerTime"},this.state.timeString),r.a.createElement("br",null),r.a.createElement("span",{className:"headerDate",onClick:this.props.testOnChange},this.state.dateString))),this.state.newFunnyThing,r.a.createElement(G,{currentWeather:this.props.apiWeather}),r.a.createElement(N,{calendarItems:this.props.apiCalendar}),r.a.createElement(I,{tweetItems:this.props.apiTwitter}))}}]),e}(n.Component),S=Object(l.b)((function(t){return{testName:t.portalData.test,apiWeather:t.portalData.apiWeather,apiCalendar:t.portalData.apiCalendar,apiTwitter:t.portalData.apiTwitter,apiForecast:t.portalData.apiForecast,funnyThing:t.portalData.funnyThing,historyItem:t.portalData.apiTodayInHistory,jokeItem:t.portalData.apiJoke,factItem:t.portalData.apiFact,quoteItem:t.portalData.apiQuote}}),(function(t){return{testOnChange:function(){return t(function(){var t=Object(O.a)(g.a.mark((function t(e){var a;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b();case 2:return a=t.sent,t.next=5,e({type:"CHANGE_TEST",test:a});case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},fetchNewWeather:function(){return t(function(){var t=Object(O.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{fetch("http://localhost:3003/weather.php",{method:"get",headers:{Accept:"application/json"}}).then((function(t){if(t.status>=200&&t.status<300)return t.text();throw new Error(t)})).then((function(t){var a=null;try{a=JSON.parse(t)}catch(n){a=[]}e({type:"GET_WEATHER",newWeather:a})}))}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},fetchNewCalendar:function(){return t(function(){var t=Object(O.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{fetch("http://localhost:3003/calendar.php",{method:"get",headers:{Accept:"application/json"}}).then((function(t){if(t.status>=200&&t.status<300)return t.text();throw new Error(t)})).then((function(t){var a=null;try{a=JSON.parse(t)}catch(n){a=[]}e({type:"GET_CALENDAR",newCalendar:a})}))}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},fetchNewTwitter:function(){return t(function(){var t=Object(O.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{fetch("http://localhost:3003/twitterTestTwo.php",{method:"get",headers:{Accept:"application/json"}}).then((function(t){if(t.status>=200&&t.status<300)return t.text()})).then((function(t){var a=null;try{a=JSON.parse(t),e({type:"GET_TWITTER",newTwitter:a})}catch(n){a=[]}}))}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},fetchNewForecast:function(){return t(function(){var t=Object(O.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{fetch("http://localhost:3003/forecast.php",{method:"get",headers:{Accept:"application/json"}}).then((function(t){if(t.status>=200&&t.status<300)return t.text();throw new Error(t)})).then((function(t){var a=null;try{a=JSON.parse(t)}catch(n){a=[]}e({type:"GET_FORECAST",newForecast:a})}))}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},fetchNewHistory:function(){return t(function(){var t=Object(O.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{fetch("http://localhost:3003/twitterTest.php",{method:"get",headers:{Accept:"application/json"}}).then((function(t){if(t.status>=200&&t.status<300)return t.text()})).then((function(t){var a=null;try{a=JSON.parse(t),e({type:"GET_HISTORY",newHistory:a})}catch(n){a=[]}}))}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},fetchNewJoke:function(){return t(function(){var t=Object(O.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{fetch("http://localhost:3003/joke.php",{method:"get",headers:{Accept:"application/json"}}).then((function(t){if(t.status>=200&&t.status<300)return t.text();throw new Error(t)})).then((function(t){var a=null;try{a=JSON.parse(t)}catch(n){a=[]}e({type:"GET_JOKE",newJoke:a})}))}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},fetchNewFact:function(){return t(function(){var t=Object(O.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{fetch("http://localhost:3003/fact.php",{method:"get",headers:{Accept:"application/json"}}).then((function(t){if(t.status>=200&&t.status<300)return t.text();throw new Error(t)})).then((function(t){var a=null;try{a=JSON.parse(t)}catch(n){a=[]}e({type:"GET_FACT",newFact:a})}))}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())},fetchNewQuote:function(){return t(function(){var t=Object(O.a)(g.a.mark((function t(e){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{fetch("http://localhost:3003/quote.php",{method:"get",headers:{Accept:"application/json"}}).then((function(t){if(t.status>=200&&t.status<300)return t.text();throw new Error(t)})).then((function(t){var a=null;try{a=JSON.parse(t)}catch(n){a=[]}e({type:"GET_QUOTE",newQuote:a})}))}catch(a){console.log(a)}case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())}}}))(C),H=function(t){function e(){var t,a;Object(s.a)(this,e);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(r)))).store=E(),a}return Object(p.a)(e,t),Object(i.a)(e,[{key:"render",value:function(){return r.a.createElement("html",{lang:"en"},r.a.createElement("head",null),r.a.createElement("body",null,r.a.createElement(l.a,{store:this.store},r.a.createElement(S,null))))}}]),e}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[21,1,2]]]);
//# sourceMappingURL=main.d7e94c4b.chunk.js.map