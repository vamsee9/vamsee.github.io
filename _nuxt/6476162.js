(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{255:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(32),n(47),n(129),n(26),n(40),{name:"About",data:function(){return{about:null}},computed:{description:function(){var t,e=this.about;return null!==e&&(t=e.description.split("\n")),t}},created:function(){this.getAbout()},methods:{getAbout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("about").fetch();case 2:n=e.sent,t.about=n;case 4:case"end":return e.stop()}}),e)})))()}}}),l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{attrs:{id:"about"}},[n("div",{staticClass:"container mx-auto px-8 py-4 md:px-20 md:py-10 max-w-6xl"},[t._m(0),t._v(" "),t.about?n("div",{staticClass:"lg:grid lg:grid-cols-2"},[n("div",t._l(t.description,(function(desc,e){return n("p",{key:(e+1)*Math.random(),staticClass:"mb-2"},[t._v("\n          "+t._s(desc)+"\n        ")])})),0),t._v(" "),n("div",{staticClass:"mt-6 lg:mt-0"},[n("div",{staticClass:"mx-auto relative h-72 w-full max-w-md lg:w-72 lg:max-w-full rounded-xl shadow-xl overflow-hidden"},[n("div",{staticClass:"absolute inset-0 bg-blue-500 dark:bg-cyan-400 bg-opacity-50 dark:bg-opacity-50 transition duration-300 hover:bg-opacity-0 dark:hover:bg-opacity-0"}),t._v(" "),n("img",{staticClass:"h-full w-full object-cover",attrs:{src:"/images/profile/"+t.about.image,alt:t.about.name}})])])]):t._e()])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mb-5 lg:mb-10 flex items-center"},[n("h1",{staticClass:"text-3xl md:text-4xl font-bold whitespace-nowrap"},[t._v("\n        About Me\n      ")]),t._v(" "),n("span",{staticClass:"ml-4 h-px w-64 bg-gray-300 dark:bg-gray-600"})])}],!1,null,null,null);e.default=component.exports}}]);