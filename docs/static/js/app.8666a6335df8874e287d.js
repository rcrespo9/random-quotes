webpackJsonp([1],{"4J6V":function(t,e,o){"use strict";var a=o("PKY1"),n=o.n(a);e.a={name:"RandomQuote",data:function(){return{quote:"",author:"",error:!1}},methods:{fetchQuote:function(){var t=this;n()("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en",{jsonpCallback:"jsonp"}).then(function(t){return t.json()}).then(function(e){var o=e.quoteText,a=e.quoteAuthor;t.quote=o,t.author=a||"Unknown"}).catch(function(e){throw t.error=!0,new Error("Parsing failed: "+e.message)})},fetchNextQuote:function(t){39===(t.which||t.keyCode)&&this.fetchQuote()}},mounted:function(){this.fetchQuote(),document.addEventListener("keyup",this.fetchNextQuote)}}},"6mMi":function(t,e,o){"use strict";function a(t){o("nd3j")}var n=o("4J6V"),r=o("gI2o"),s=o("VU/8"),i=a,u=s(n.a,r.a,!1,i,"data-v-2d14959f",null);e.a=u.exports},M93x:function(t,e,o){"use strict";function a(t){o("X0ga")}var n=o("xJD8"),r=o("vI0b"),s=o("VU/8"),i=a,u=s(n.a,r.a,!1,i,null,null);e.a=u.exports},NHnr:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=o("7+uW"),n=o("M93x");a.a.config.productionTip=!1,new a.a({el:"#app",template:"<App/>",components:{App:n.a}})},X0ga:function(t,e){},gI2o:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.error?o("div",{staticClass:"error"},[o("h1",{staticClass:"error__text"},[t._v("The random quotes generator is broken.")])]):o("div",{staticClass:"quote"},[o("svg",{staticStyle:{position:"absolute",width:"0",height:"0",overflow:"hidden"},attrs:{version:"1.1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink"}},[o("defs",[o("symbol",{attrs:{id:"next-arrow",viewBox:"0 0 49.12 40"}},[o("title",{attrs:{id:"next-arrow-title"}},[t._v("Next Arrow")]),t._v(" "),o("desc",{attrs:{id:"next-arrow-desc"}},[t._v("Arrow pointing to the right.")]),t._v(" "),o("polygon",{staticClass:"cls-1",attrs:{points:"24.88 0 43.38 18.5 0 18.5 0 21.5 43.38 21.5 24.88 40 29.12 40 49.12 20 29.12 0 24.88 0"}})])])]),t._v(" "),o("blockquote",{staticClass:"quote__block",attrs:{id:"random-quote","aria-live":"polite"}},[o("p",{staticClass:"quote__text"},[t._v(t._s(t.quote))]),t._v(" "),o("footer",{staticClass:"quote__footer"},[o("cite",{staticClass:"quote__author"},[o("span",{staticClass:"author__dash",attrs:{"aria-hidden":"true"}},[t._v("-")]),t._v(t._s(t.author))])])]),t._v(" "),o("button",{staticClass:"quote__btn",attrs:{type:"button","aria-label":"Next Quote"},on:{click:t.fetchQuote}},[o("svg",{staticClass:"btn__img",attrs:{role:"img","aria-labelledby":"next-arrow-title next-arrow-desc"}},[o("use",{attrs:{"xlink:href":"#next-arrow"}})])])])},n=[],r={render:a,staticRenderFns:n};e.a=r},nd3j:function(t,e){},vI0b:function(t,e,o){"use strict";var a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("a",{staticClass:"skip-to-quote",attrs:{href:"#random-quote"}},[t._v("Skip to quote")]),t._v(" "),o("main",{staticClass:"page-content",attrs:{id:"app"}},[o("RandomQuote")],1)])},n=[],r={render:a,staticRenderFns:n};e.a=r},xJD8:function(t,e,o){"use strict";var a=o("6mMi");e.a={name:"app",components:{RandomQuote:a.a}}}},["NHnr"]);
//# sourceMappingURL=app.8666a6335df8874e287d.js.map