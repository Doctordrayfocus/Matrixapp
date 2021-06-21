(self.webpackChunk=self.webpackChunk||[]).push([[268],{766:(t,e,i)=>{"use strict";i.d(e,{Z:()=>a});var s=i(645),r=i.n(s)()((function(t){return t[1]}));r.push([t.id,".inputStyle[data-v-17780755]{background:#f5f5f5;border:1px solid #264653;border-radius:3px;font-family:BodyFont;font-size:13px;width:100%}",""]);const a=r},650:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c});const s={data:function(){return{that:this,loading:!1,result:[],errorInfo:""}},mounted:function(){this.$root.checkIfLoggedin()},components:{MatrixCreator:function(){return i.e(182).then(i.bind(i,685))}},methods:{multiplyMatrices:function(){var t=this;this.$root.routeIsLoading=!0,this.errorInfo="",this.result=[],axios.post("/multiply_matrices",{first_matrix:this.$root.firstMatrix,second_matrix:this.$root.secondMatrix}).then((function(e){200==e.status&&(t.result=e.data,t.$root.routeIsLoading=!1)})).catch((function(e){t.errorInfo=e.response.data.status,t.$root.routeIsLoading=!1}))}}};var r=i(379),a=i.n(r),l=i(766),n={insert:"head",singleton:!1};a()(l.Z,n);l.Z.locals;const c=(0,i(900).Z)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{background:"#d8e2dc",position:"fixed",width:"100%",height:"100%",top:"0",left:"0","overflow-y":"auto"}},[t._m(0),t._v(" "),t._m(1),t._v(" "),i("div",{staticClass:"col-lg-8 offset-lg-2 col-md-10 offset-md-1 d-flex flex-row text-center",staticStyle:{"align-items":"center"}},[i("div",{staticClass:"card text-left px-2  d-flex flex-row flex-wrap pb-4  pt-3",staticStyle:{height:"auto",width:"100%","margin-top":"50px","align-items":"center"}},[t._m(2),t._v(" "),i("div",{staticClass:"col-12 d-flex flex-row flex-wrap mt-3"},[i("div",{staticClass:"col-md-4 px-0 py-md-0 py-2 ",staticStyle:{"align-items":"center","justify-content":"center"}},[i("matrix-creator",{attrs:{matrix:t.that.$root.firstMatrix,disabled:!1}})],1),t._v(" "),t._m(3),t._v(" "),i("div",{staticClass:"col-md-4 px-0 py-md-0 py-2",staticStyle:{"align-items":"center","justify-content":"center"}},[i("matrix-creator",{attrs:{matrix:t.that.$root.secondMatrix,disabled:!1}})],1)]),t._v(" "),i("div",{staticClass:" col-12 px-0 text-center  my-4"},[i("button",{staticClass:"btn btn-sm ",staticStyle:{"font-size":"13px",color:"white",background:"#264653","border-radius":"8px"},on:{click:t.multiplyMatrices}},[t._v("\n                Multiply\n             ")])]),t._v(" "),!t.loading&&t.result.number?[t._m(4),t._v(" "),i("div",{staticClass:"d-flex flex-row col-12 flex-wrap mt-3 "},[i("div",{staticClass:"col-md-6  d-flex flex-row flex-wrap",staticStyle:{"align-items":"center"}},[t._m(5),t._v(" "),i("div",{staticClass:"mt-3",staticStyle:{width:"100%"}},[i("matrix-creator",{attrs:{matrix:t.result.number,disabled:!0}})],1)]),t._v(" "),i("div",{staticClass:"col-md-6  d-flex flex-row flex-wrap",staticStyle:{"align-items":"center"}},[t._m(6),t._v(" "),i("div",{staticClass:"mt-3",staticStyle:{width:"100%"}},[i("matrix-creator",{attrs:{matrix:t.result.alpha,disabled:!0}})],1)])])]:[i("div",{staticClass:"col-12 text-center text-danger"},[i("span",{staticStyle:{"font-size":"14px"}},[t._v(t._s(t.errorInfo))])])]],2)])])}),[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"offset-lg-2 pr-3 px-2 pt-md-4 d-md-block d-none"},[i("h3",[t._v("Matrix App")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-center pt-3 d-md-none d-block"},[i("h3",[t._v("Matrix App")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-12 mt-2 px-1 px-md-2 text-center"},[i("h4",[t._v("Multiply Matrices")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-md-4 px-0 py-md-0 py-2 d-flex flex-row",staticStyle:{"align-items":"center","justify-content":"center"}},[e("div",[e("i",{staticClass:"las la-times",staticStyle:{"font-size":"30px",color:"#264653"}})])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"d-flex col-12 px-2 text-center "},[i("h5",[t._v("Result")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%"}},[i("h6",[t._v("In Number")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%"}},[i("h6",[t._v("In Alphabeth")])])}],!1,null,"17780755",null).exports}}]);