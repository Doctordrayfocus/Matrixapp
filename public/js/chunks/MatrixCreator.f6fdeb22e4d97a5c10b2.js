(self["webpackChunk"] = self["webpackChunk"] || []).push([["MatrixCreator"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/MatrixCreator.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/MatrixCreator.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  data: function data() {
    return {
      matrix: [[2, 3], [3, 5]],
      focusedMapper: []
    };
  },
  methods: {
    handleAction: function handleAction(type) {
      var newValue = [0];

      if (type == 'add_column') {
        this.matrix.forEach(function (row) {
          row.push(newValue);
        });
      } else if (true) {
        var matrixRowlength = this.matrix[0].length;
        var newRow = [];
        var counter = new Array(matrixRowlength);

        for (var i = 0; i < counter.length; i++) {
          newRow.push(newValue);
        }

        this.matrix.push(newRow);
      }
    },
    updateValue: function updateValue(e) {
      var input = e.target.value;
      this.matrix[this.focusedMapper[0]][this.focusedMapper[1]] = input;
    },
    handleFocus: function handleFocus(parentIndex, childIndex) {
      this.focusedMapper = [];
      this.focusedMapper.push(parentIndex);
      this.focusedMapper.push(childIndex);
      console.log(this.focusedMapper);
    }
  }
});

/***/ }),

/***/ "./resources/js/components/Pages/MatrixCreator.vue":
/*!*********************************************************!*\
  !*** ./resources/js/components/Pages/MatrixCreator.vue ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _MatrixCreator_vue_vue_type_template_id_fbcbe036_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MatrixCreator.vue?vue&type=template&id=fbcbe036&scoped=true& */ "./resources/js/components/Pages/MatrixCreator.vue?vue&type=template&id=fbcbe036&scoped=true&");
/* harmony import */ var _MatrixCreator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MatrixCreator.vue?vue&type=script&lang=js& */ "./resources/js/components/Pages/MatrixCreator.vue?vue&type=script&lang=js&");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './MatrixCreator.vue?vue&type=style&index=0&id=fbcbe036&scoped=true&lang=css&'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _MatrixCreator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _MatrixCreator_vue_vue_type_template_id_fbcbe036_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _MatrixCreator_vue_vue_type_template_id_fbcbe036_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fbcbe036",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Pages/MatrixCreator.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Pages/MatrixCreator.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/components/Pages/MatrixCreator.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrixCreator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatrixCreator.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/MatrixCreator.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrixCreator_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Pages/MatrixCreator.vue?vue&type=template&id=fbcbe036&scoped=true&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/components/Pages/MatrixCreator.vue?vue&type=template&id=fbcbe036&scoped=true& ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrixCreator_vue_vue_type_template_id_fbcbe036_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrixCreator_vue_vue_type_template_id_fbcbe036_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MatrixCreator_vue_vue_type_template_id_fbcbe036_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./MatrixCreator.vue?vue&type=template&id=fbcbe036&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/MatrixCreator.vue?vue&type=template&id=fbcbe036&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/MatrixCreator.vue?vue&type=template&id=fbcbe036&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Pages/MatrixCreator.vue?vue&type=template&id=fbcbe036&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "d-flex flex-row flex-wrap col-12 py-0 px-0",
      staticStyle: { "align-items": "center" }
    },
    [
      _c(
        "div",
        { staticClass: "d-flex flex-row mb-2", staticStyle: { width: "100%" } },
        [
          _c("div", { staticClass: "mr-1" }, [
            _c(
              "button",
              {
                staticClass: "iconWrapper px-1 px-1",
                on: {
                  click: function($event) {
                    return _vm.handleAction("add_row")
                  }
                }
              },
              [_vm._v("+ row")]
            )
          ]),
          _vm._v(" "),
          _c("div", [
            _c(
              "button",
              {
                staticClass: "iconWrapper px-1 px-1",
                on: {
                  click: function($event) {
                    return _vm.handleAction("add_column")
                  }
                }
              },
              [_vm._v("+ Column")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass: "d-flex flex-row flex-wrap",
          staticStyle: { width: "100%" }
        },
        _vm._l(_vm.matrix, function(row, indexParent) {
          return _c(
            "div",
            {
              key: indexParent + "first",
              staticClass: "px-1 d-flex flex-row mb-2 ",
              staticStyle: { "align-items": "center", width: "100%" }
            },
            _vm._l(row, function(column, index) {
              return _c("input", {
                key: index + "firstIDColumn",
                staticClass: "inputStyle py-1 px-1  mr-1 text-center",
                staticStyle: { width: "33px" },
                attrs: { type: "tel" },
                domProps: { value: column },
                on: {
                  focus: function($event) {
                    return _vm.handleFocus(indexParent, index)
                  },
                  input: _vm.updateValue
                }
              })
            }),
            0
          )
        }),
        0
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);