webpackJsonp([1],{NHnr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});a("K3J8"),a("qb6w");var s=a("7+uW"),i=a("Gu7T"),r=a.n(i),n=a("mtWM"),o=a.n(n),c={name:"search",data:function(){return{title:"titulo",description:"desc",fullList:[],nResults:0}},mounted:function(){var t=this,e=document.getElementById("inputSearch").value;o.a.get("https://api.themoviedb.org/3/search/multi?api_key=e9d8b222a57983dac6baa7919533097e&language=en-EU&page=1&include_adult=false&query="+e).then(function(e){for(var a=[].concat(r()(e.data.results)),s=0;s<a.length;s++)void 0===a[s].title&&(a[s].title=a[s].name),void 0!==a[s].overview&&a[s].overview.length>100&&(a[s].overview=a[s].overview.slice(0,100)+" ..."),void 0===a[s].poster_path||null===a[s].poster_path?a[s].poster_path="https://www.ilv.com.mx/static/images/product_image_not_found.gif":a[s].poster_path="https://image.tmdb.org/t/p/original"+a[s].poster_path;t.fullList=a}).catch(new Error("Error de peticion"))}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h3",{staticClass:"text-success mt-3"},[t._v(" Sort by popularity ")]),t._v(" "),a("div",{staticClass:"row"},t._l(t.fullList,function(e){return a("div",{key:e.id},[a("div",{staticClass:"card border border-0 shadow-lg p-2 m-4",staticStyle:{width:"18rem"}},[a("img",{staticClass:"card-img-top border",attrs:{src:e.poster_path,alt:"Photo"}}),t._v(" "),a("div",{staticClass:"card-body"},[a("h5",{staticClass:"card-title"},[t._v(" "+t._s(e.title)+" ")]),t._v(" "),a("p",{staticClass:"card-text"},[t._v(" "+t._s(e.overview)+" ")]),t._v(" "),a("a",{staticClass:"btn btn-primary",attrs:{href:"#"}},[t._v("Show more")])])])])}),0)])},staticRenderFns:[]},d=a("VU/8")(c,l,!1,null,null,null).exports,v={name:"App",data:function(){return{inputSearch:""}},methods:{searchText:function(){this.$router.push("/search")},searchT:function(){"/search"!==this.$router.history.current.path&&this.$router.push("/search"),d.methods.search(document.getElementById("inputSearch").value)}}},u={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark sticky-top",staticStyle:{"background-color":"#25262B"}},[a("div",{staticClass:"container"},[a("a",{staticClass:"navbar-brand text-success",attrs:{href:"index.html"}},[t._v("wanna watch?")]),t._v(" "),a("form",{staticClass:"form-inline",on:{submit:function(e){return e.preventDefault(),t.searchT(e)}}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.inputSearch,expression:"inputSearch"}],staticClass:"form-control mr-sm-2",attrs:{id:"inputSearch",type:"search",placeholder:"Search","aria-label":"Search"},domProps:{value:t.inputSearch},on:{input:function(e){e.target.composing||(t.inputSearch=e.target.value)}}}),t._v(" "),a("button",{directives:[{name:"show",rawName:"v-show",value:t.inputSearch,expression:"inputSearch"}],staticClass:"btn btn-outline-success my-5 my-sm-0",attrs:{id:"buttonSearch",type:"submit"}},[t._v("\n                  Search\n                ")])])])]),t._v(" "),a("div",{staticClass:"container"},[a("router-view")],1)])},staticRenderFns:[]},h=a("VU/8")(v,u,!1,null,null,null).exports,p=a("/ocq"),m={name:"index",data:function(){return{movieName:"hola",movieList:[],firstMovie:"first",firstMovieImg:"img",tvList:[],firstTv:"first",firstTvImg:"img",genreList:[],genrePopular:[],showGenre:!1,pageOfItems:[],nameGender:"",nResults:0}},mounted:function(){var t=this;o.a.get("https://api.themoviedb.org/3/movie/popular?api_key=e9d8b222a57983dac6baa7919533097e&language=en-US&page=1").then(function(e){for(var a=[].concat(r()(e.data.results)),s=0;s<a.length;s++)void 0!==a[s].overview&&a[s].overview.length>100&&(a[s].overview=a[s].overview.slice(0,100)+" ..."),void 0!==a[s].title&&a[s].title.length>20&&(a[s].title=a[s].title.slice(0,20)+" ...");t.firstMovie=a[0].title,t.firstMovieImg=a[0].backdrop_path,t.movieList=a});o.a.get("https://api.themoviedb.org/3/tv/popular?api_key=e9d8b222a57983dac6baa7919533097e&language=en-US&page=1").then(function(e){for(var a=[].concat(r()(e.data.results)),s=0;s<a.length;s++)void 0!==a[s].overview&&a[s].overview.length>100&&(a[s].overview=a[s].overview.slice(0,100)+" ..."),void 0!==a[s].name&&a[s].name.length>20&&(a[s].name=a[s].name.slice(0,20)+" ...");t.firstTv=a[0].name,t.firstTvImg=a[0].backdrop_path,t.tvList=a});o.a.get("https://api.themoviedb.org/3/genre/movie/list?api_key=e9d8b222a57983dac6baa7919533097e&language=en-US").then(function(e){var a=[].concat(r()(e.data.genres));t.genreList=a})},methods:{click:function(t,e){var a=this,s=0;this.genrePopular=[];var i=[];this.showGenre=!1;for(var n=function(e){var n="https://api.themoviedb.org/3/movie/popular?api_key=e9d8b222a57983dac6baa7919533097e&language=en-US&page="+e;o.a.get(n).then(function(n){for(var o=[].concat(r()(n.data.results)),c=0;c<o.length;c++)for(var l=0;l<o[c].genre_ids.length;l++)o[c].genre_ids[l]===t&&(i[s]=o[c],s++,a.nResults=s);29===e&&(a.genrePopular=i,a.showGenre=!0)})},c=1;c<30;c++)n(c);this.nameGender=e},onChangePage:function(t){this.pageOfItems=t}}},g={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"mb-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-lg-6"},[a("h2",{staticClass:"text-white pt-4"},[t._v(" Popular Movies ")]),t._v(" "),a("div",{staticClass:"carousel slide shadow-lg pb-2 mb-0 bg-success rounded",attrs:{id:"carouselMovie","data-ride":"carousel"}},[a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"carousel-item active"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/original"+t.firstMovieImg,alt:""}}),t._v(" "),a("div",{staticClass:"carousel-caption d-none d-md-block"},[a("h5",{staticClass:"bg-light text-dark rounded p-1"},[t._v(" "+t._s(t.firstMovie)+" ")])])]),t._v(" "),t._l(t.movieList.slice(1),function(e){return a("div",{key:e.id,staticClass:"carousel-item"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/original"+e.backdrop_path,alt:""}}),t._v(" "),a("div",{staticClass:"carousel-caption d-md-block"},[a("h5",{staticClass:"bg-light text-dark rounded p-1"},[t._v(" "+t._s(e.title)+" ")])])])})],2),t._v(" "),t._m(0),t._v(" "),t._m(1)])]),t._v(" "),a("div",{staticClass:"col-lg-6"},[a("h2",{staticClass:"text-white pt-4"},[t._v(" Popular Tv-Shows ")]),t._v(" "),a("div",{staticClass:"carousel slide shadow-lg pb-2 mb-0 bg-success rounded",attrs:{id:"carouselTv","data-ride":"carousel"}},[a("div",{staticClass:"carousel-inner"},[a("div",{staticClass:"carousel-item active"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/original"+t.firstTvImg,alt:""}}),t._v(" "),a("div",{staticClass:"carousel-caption d-none d-md-block"},[a("h5",{staticClass:"bg-light text-dark rounded p-1"},[t._v(" "+t._s(t.firstTv)+" ")])])]),t._v(" "),t._l(t.tvList.slice(1),function(e){return a("div",{key:e.id,staticClass:"carousel-item"},[a("img",{staticClass:"d-block w-100",attrs:{src:"https://image.tmdb.org/t/p/original"+e.backdrop_path,alt:""}}),t._v(" "),a("div",{staticClass:"carousel-caption d-md-block"},[a("h5",{staticClass:"bg-light text-dark rounded p-1"},[t._v(" "+t._s(e.name)+" ")])])])})],2),t._v(" "),t._m(2),t._v(" "),t._m(3)])])])]),t._v(" "),a("div",{staticClass:"container mt-4 pt-2 bg-white rounded-lg"},[a("h3",{staticClass:"text-dark"},[t._v("Categories")]),t._v(" "),a("small",{staticClass:"text-muted"},[t._v("Media may belong to several categories")]),t._v(" "),a("div",{staticClass:"row pt-3"},t._l(t.genreList,function(e){return a("div",{key:e.id,staticClass:"col mb-3"},[a("button",{staticClass:"btn btn-outline-dark",on:{click:function(a){return t.click(e.id,e.name)}}},[t._v("\n              "+t._s(e.name)+"\n            ")])])}),0)]),t._v(" "),t.showGenre?a("div",{staticClass:"container mt-4"},[a("h5",{staticClass:"text-muted"},[t._v("Popular in categories")]),t._v(" "),a("h3",{staticClass:"text-success"},[t._v(t._s(t.nameGender)+" -  "+t._s(t.nResults)+" results found")]),t._v(" "),a("div",{staticClass:"row"},t._l(t.pageOfItems,function(e){return a("div",{key:e.id},[a("div",{staticClass:"col"},[a("div",{staticClass:"card mb-3",staticStyle:{"max-width":"32em","min-height":"21em"}},[a("div",{staticClass:"row no-gutters"},[a("div",{staticClass:"col-md-4"},[a("img",{staticClass:"card-img p-1",attrs:{src:"https://image.tmdb.org/t/p/original"+e.poster_path,alt:"image"}}),t._v(" "),a("p",{staticClass:"card-text align-bottom p-1"},[a("small",{staticClass:"text-muted"},[t._v("\n                    Release date: "+t._s(e.release_date)+" "),a("br"),t._v("\n                    Votes: "+t._s(e.vote_count)+"\n                  ")])])]),t._v(" "),a("div",{staticClass:"col-md-8"},[a("div",{staticClass:"card-header  text-center",staticStyle:{"max-height":"4em","overflow-y":"auto"}},[a("h5",[t._v(" "+t._s(e.title)+" ")])]),t._v(" "),a("div",{staticClass:"card-body"},[a("p",{staticClass:"card-text border rounded p-2",staticStyle:{height:"14em","overflow-y":"auto"}},[t._v(" "+t._s(e.overview)+" ")])])])])])])])}),0)]):t._e(),t._v(" "),a("div",{staticClass:"m-5 text-center"},[a("jw-pagination",{staticStyle:{"user-select":"none","text-align":"center"},attrs:{pageSize:4,maxPages:5,items:t.genrePopular},on:{changePage:t.onChangePage}})],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselMovie",role:"button","data-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Previous")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselMovie",role:"button","data-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Next")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselTv",role:"button","data-slide":"prev"}},[e("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Previous")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselTv",role:"button","data-slide":"next"}},[e("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),this._v(" "),e("span",{staticClass:"sr-only"},[this._v("Next")])])}]},_=a("VU/8")(m,g,!1,null,null,null).exports;s.a.use(p.a);var b=new p.a({routes:[{path:"/",name:"index",component:_},{path:"/search",name:"search",component:d}]}),f=a("YsDo"),C=a.n(f);s.a.component("jw-pagination",C.a),s.a.config.productionTip=!1,new s.a({el:"#app",router:b,components:{App:h},template:"<App/>"})},qb6w:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.ff4fed2c7b600fc04bab.js.map