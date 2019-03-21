(function(t){function e(e){for(var a,i,c=e[0],s=e[1],u=e[2],d=0,h=[];d<c.length;d++)i=c[d],r[i]&&h.push(r[i][0]),r[i]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,c=1;c<n.length;c++){var s=n[c];0!==r[s]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/<weather-travel>/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],s=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"10d0":function(t,e,n){"use strict";var a=n("fbac"),r=n.n(a);r.a},"18f3":function(t,e,n){"use strict";var a=n("ee26"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("7f7f"),n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark custom-navbar-style"},[n("div",{staticClass:"container"},[n("ul",{staticClass:"navbar-nav"},[n("li",{staticClass:"nav-item active"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/"}},[t._v("home")])],1),n("li",{staticClass:"nav-item"},[n("router-link",{staticClass:"nav-link",attrs:{to:"/about"}},[t._v("About")])],1)]),n("a",{staticClass:"btn btn-primary",on:{click:function(e){return t.setFahrenheit()}}},[t._v("test")])])]),n("router-view")],1)},o=[],i={name:"app",methods:{setFahrenheit:function(){this.$store.commit("changeToFahrenheit",!0)}}},c=i,s=n("2877"),u=Object(s["a"])(c,r,o,!1,null,"473d2e66",null),l=u.exports,d=n("9f7b"),h=n.n(d),f=n("8c4f"),m=n("ecee"),v=n("c074"),p=n("ad3d"),_=n("2f62");a["a"].use(_["a"]);var b=new _["a"].Store({state:{cityName:"",clickedId:"",fahrenheit:!1},mutations:{changeCityName:function(t,e){t.cityName=e},changeClickedId:function(t,e){t.clickedId=e},changeToFahrenheit:function(t,e){t.fahrenheit=e}},getters:{fahrenheit:function(t){return t.fahrenheit}}}),g=n("323e"),w=n.n(g),y=(n("f9e3"),n("2dd8"),n("a5d8"),n("fb98"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"home"}},[n("CurrentLocation"),n("List"),n("SearchLocation")],1)}),C=[],k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"current_location",attrs:{id:"CurrentLocation"}},[n("div",{staticClass:"fluid-container orange-background"},[t.errored?n("section",[n("p",[t._v("We're sorry, we're not able to retrieve this information at the moment, please try again later.")])]):t._e(),n("h2",[t._v("Current weather forecast for current city")]),n("h3",{staticClass:"current_location__title"},[t._v("\n          "+t._s(t.currentLocation.name)+"\n        ")]),n("div",{staticClass:"current_location__information"},[t._v("\n          "+t._s(t.currentLocation.main&&t.currentLocation.main.temp)+"°C\n          "+t._s(t.currentLocation.weather&&t.currentLocation.weather[0].main)+"\n        ")]),n("div",{directives:[{name:"show",rawName:"v-show",value:t.geolocationError,expression:"geolocationError"}]},[t._v("\n            "+t._s(t.geolocationError)+"\n\n        ")])])])},x=[],W=n("bc3a"),D=n.n(W),E={name:"CurrentLocation",data:function(){return{geolocationError:"",currentLocation:"",errored:!1}},methods:{geolocation:function(){var t=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(function(e){D.a.get("https://api.openweathermap.org/data/2.5/weather?lat="+e.coords.latitude+"&lon="+e.coords.longitude+"&units=metric&appid=442885e71a45358b44c91f4c3f89be34").then(function(e){t.currentLocation=e.data}).catch(function(e){console.log(e),t.errored=!0})},function(e){e.code==e.PERMISSION_DENIED?t.geolocationError="Gelocation permission wasn't given":t.geolocationError="Geolocation couldn't be retreived"+e})}},beforeMount:function(){this.geolocation()}},L=E,O=(n("10d0"),Object(s["a"])(L,k,x,!1,null,"14d54fa5",null)),$=O.exports,j=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"list"}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[t.errored?n("section",[n("p",[t._v("We're sorry, we're not able to retrieve this information at the moment, please try again later.")])]):t._e()])]),n("div",{staticClass:"row custom_row_margin"},t._l(t.weatherData,function(e){return n("div",{key:e.id,staticClass:"col-md-3 weather_block"},[n("div",{staticClass:"card custom_card"},[n("div",{staticClass:"card-header card_header_custom"},[n("h3",{staticClass:"card_header_custom__title"},[t._v(t._s(e.name))])]),n("div",{staticClass:"card-body card_custom_body "},[n("h4",[t._v(t._s(e.weather[0].main))]),n("img",{attrs:{src:"http://openweathermap.org/img/w/"+e.weather[0].icon+".png"}}),n("div",{staticClass:"card_custom_body__temperature"},[n("font-awesome-icon",{attrs:{icon:"thermometer-half"}}),n("span",{staticClass:"temperature_number"},[t._v(t._s(t._f("round")(e.main.temp)))]),t._v(" ℃\n                ")],1),n("div",{staticClass:"card_custom_body__additional"},[t._v("\n                  min "),n("font-awesome-icon",{attrs:{icon:"temperature-low","fixed-width":""}}),t._v(t._s(e.main.temp_min)+"\n                  max "),n("font-awesome-icon",{attrs:{icon:"temperature-high","fixed-width":""}}),t._v(" "+t._s(e.main.temp_max)+"\n                  humid "),n("font-awesome-icon",{attrs:{icon:"tint","fixed-width":""}}),t._v(t._s(e.main.humidity)+"\n                ")],1),t._v("\n\nhere"+t._s(t.$store.getters.fahrenheit)+"\n\n\n                "),n("a",{staticClass:"btn btn-primary",on:{click:function(n){return t.setWidgetData(e.id,e.name)}}},[t._v("test")])])])])}),0),n("DetailView")],1)])},S=[],I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"list"}},[n("div",{staticClass:"container"},[t.errored?n("section",[n("p",[t._v("We're sorry, we're not able to retrieve this information at the moment, please try again later.")])]):t._e(),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("div",{directives:[{name:"show",rawName:"v-show",value:t.singleWeatherData,expression:"singleWeatherData"}],key:"one"},[t._v("\n        test\n       "+t._s(t.clickedCity)+"\n\n\n\n      "),t._l(t.singleWeatherData.list,function(e){return n("div",{key:e.id},[t._v("\n        "+t._s(e.weather[0].main)+"\n\n        "+t._s(e.dt_txt)+"\n      ")])})],2)])],1)])},N=[],P={name:"DetailView",data:function(){return{singleWeatherData:"",singleWeatherArray:[],errored:!1}},computed:{clickedId:function(){return this.$store.state.clickedId},clickedCity:function(){return this.$store.state.cityName}},watch:{clickedId:function(t){this.openWidget(t,this.clickedCity)}},methods:{openWidget:function(t,e){var n=this;void 0!==this.singleWeatherArray[e]?(console.log("here"),this.singleWeatherData=this.singleWeatherArray[e]):D.a.get("https://api.openweathermap.org/data/2.5/forecast?id="+t+"&appid=442885e71a45358b44c91f4c3f89be34").then(function(t){console.log("here 2"),n.singleWeatherArray[t.data.city.name]=t.data,n.singleWeatherData=t.data}).catch(function(t){console.log(t),n.errored=!0})}}},F=P,M=(n("18f3"),Object(s["a"])(F,I,N,!1,null,"7d7e783d",null)),T=M.exports,A={name:"List",data:function(){return{weatherData:"",errored:!1}},components:{DetailView:T},filters:{round:function(t){return t?Math.round(t):""}},methods:{setWidgetData:function(t,e){this.$store.commit("changeClickedId",t),this.$store.commit("changeCityName",e)},getCurrentWeather:function(){var t=this;D.a.get("https://api.openweathermap.org/data/2.5/group?id=1850147,1848354,1857910,1853909,1856057,2130404&units=metric&appid=442885e71a45358b44c91f4c3f89be34").then(function(e){t.weatherData=e.data.list}).catch(function(e){console.log(e),t.errored=!0})}},mounted:function(){this.getCurrentWeather()}},V=A,G=(n("76b6"),Object(s["a"])(V,j,S,!1,null,"faf18106",null)),J=G.exports,R=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"current_location",attrs:{id:"CurrentLocation"}},[n("div",{staticClass:"container"},[n("form",{staticClass:"form-styles",on:{submit:function(e){return e.preventDefault(),t.processForm(e)}}},[n("div",{staticClass:"form-row"},[n("div",{staticClass:"col"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],staticClass:"form-control",attrs:{type:"text",name:"prefecture",placeholder:"Prefecture"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}})]),t._m(0)])]),t.errored?n("section",[n("p",[t._v("We're sorry, we're not able to retrieve this information at the moment, please try again later.")])]):t._e(),t._v("\n\n     "+t._s(this.weatherData)+"\n\n    ")])])},q=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col"},[n("button",{staticClass:"btn btn-primary",attrs:{type:"submit"}},[t._v("Search")])])}],z=(n("386d"),{name:"CurrentLocation",data:function(){return{search:"",weatherData:"",errored:!1}},methods:{processForm:function(){this.getWeather(this.search)},getWeather:function(t){var e=this;D.a.get("http://api.openweathermap.org/data/2.5/weather?q="+t+"&?units=metric&appid=442885e71a45358b44c91f4c3f89be34").then(function(t){e.weatherData=t.data,e.errored=!1}).catch(function(t){console.log(t),e.errored=!0})}}}),B=z,H=(n("bbfd"),Object(s["a"])(B,R,q,!1,null,"036917a9",null)),K=H.exports,Q={name:"home",data:function(){return{}},components:{CurrentLocation:$,List:J,SearchLocation:K},methods:{setFahrenheit:function(){this.$store.commit("changeToFahrenheit",!0)}}},U=Q,X=Object(s["a"])(U,y,C,!1,null,"d2679ec8",null),Y=X.exports,Z=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},tt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"about"}},[n("h1",[t._v("about")])])}],et={name:"about"},nt=et,at=Object(s["a"])(nt,Z,tt,!1,null,"09a56ba5",null),rt=at.exports,ot=[{path:"/",name:"home",component:Y},{path:"/about",name:"about",component:rt}],it=ot;a["a"].use(h.a),a["a"].use(f["a"]),a["a"].use(w.a),m["c"].add(v["c"],v["b"],v["a"],v["d"]),a["a"].component("font-awesome-icon",p["a"]),a["a"].config.productionTip=!1;var ct=new f["a"]({mode:"history",routes:it});ct.beforeResolve(function(t,e,n){t.name&&w.a.start(),n()}),ct.afterEach(function(t,e){w.a.done()}),new a["a"]({store:b,router:ct,render:function(t){return t(l)}}).$mount("#app")},"76b6":function(t,e,n){"use strict";var a=n("81f6"),r=n.n(a);r.a},"81f6":function(t,e,n){},"99bb":function(t,e,n){},bbfd:function(t,e,n){"use strict";var a=n("99bb"),r=n.n(a);r.a},ee26:function(t,e,n){},fb98:function(t,e,n){},fbac:function(t,e,n){}});
//# sourceMappingURL=app.7b927a9f.js.map