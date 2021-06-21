(self["webpackChunk"] = self["webpackChunk"] || []).push([["AuthSignup"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/signup.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/signup.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************************************/
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
      username: '',
      password: '',
      loading: ''
    };
  },
  methods: {
    register: function register() {
      var _this = this;

      if (this.username != '' && this.password != '') {
        this.$root.routeIsLoading = true;
        axios.post('/register', {
          username: this.username,
          password: this.password
        }).then(function (response) {
          if (response.status == 201) {
            _this.$store.dispatch('login', {
              username: _this.username,
              password: _this.password
            }).then(function () {})["catch"](function (err) {});
          }
        })["catch"](function (error) {
          _this.$root.routeIsLoading = false;
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/signup.vue?vue&type=style&index=0&id=c79d0a78&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/signup.vue?vue&type=style&index=0&id=c79d0a78&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\n.inputStyle[data-v-c79d0a78]{\n border:1px solid #264653;\n width:100%;\n background: whitesmoke;\n border-radius:3px; \n font-family:BodyFont; \n font-size:13px;\n}  \n\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/signup.vue?vue&type=style&index=0&id=c79d0a78&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/signup.vue?vue&type=style&index=0&id=c79d0a78&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_c79d0a78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./signup.vue?vue&type=style&index=0&id=c79d0a78&scoped=true&lang=css& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/signup.vue?vue&type=style&index=0&id=c79d0a78&scoped=true&lang=css&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_c79d0a78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_c79d0a78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),

/***/ "./resources/js/components/Auth/signup.vue":
/*!*************************************************!*\
  !*** ./resources/js/components/Auth/signup.vue ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _signup_vue_vue_type_template_id_c79d0a78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup.vue?vue&type=template&id=c79d0a78&scoped=true& */ "./resources/js/components/Auth/signup.vue?vue&type=template&id=c79d0a78&scoped=true&");
/* harmony import */ var _signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.vue?vue&type=script&lang=js& */ "./resources/js/components/Auth/signup.vue?vue&type=script&lang=js&");
/* harmony import */ var _signup_vue_vue_type_style_index_0_id_c79d0a78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.vue?vue&type=style&index=0&id=c79d0a78&scoped=true&lang=css& */ "./resources/js/components/Auth/signup.vue?vue&type=style&index=0&id=c79d0a78&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__.default)(
  _signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__.default,
  _signup_vue_vue_type_template_id_c79d0a78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _signup_vue_vue_type_template_id_c79d0a78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c79d0a78",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/Auth/signup.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/Auth/signup.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/components/Auth/signup.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./signup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/signup.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__.default); 

/***/ }),

/***/ "./resources/js/components/Auth/signup.vue?vue&type=style&index=0&id=c79d0a78&scoped=true&lang=css&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/Auth/signup.vue?vue&type=style&index=0&id=c79d0a78&scoped=true&lang=css& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_8_0_rules_0_use_2_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_style_index_0_id_c79d0a78_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./signup.vue?vue&type=style&index=0&id=c79d0a78&scoped=true&lang=css& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-8[0].rules[0].use[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/signup.vue?vue&type=style&index=0&id=c79d0a78&scoped=true&lang=css&");


/***/ }),

/***/ "./resources/js/components/Auth/signup.vue?vue&type=template&id=c79d0a78&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/components/Auth/signup.vue?vue&type=template&id=c79d0a78&scoped=true& ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_template_id_c79d0a78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_template_id_c79d0a78_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_signup_vue_vue_type_template_id_c79d0a78_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./signup.vue?vue&type=template&id=c79d0a78&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/signup.vue?vue&type=template&id=c79d0a78&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/signup.vue?vue&type=template&id=c79d0a78&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/Auth/signup.vue?vue&type=template&id=c79d0a78&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
      staticStyle: {
        background: "#d8e2dc",
        position: "fixed",
        width: "100%",
        height: "100%",
        top: "0",
        left: "0",
        "overflow-y": "auto"
      }
    },
    [
      _vm._m(0),
      _vm._v(" "),
      _vm._m(1),
      _vm._v(" "),
      _c(
        "div",
        {
          staticClass:
            "col-lg-4 offset-lg-4 col-md-8 offset-md-2 d-flex flex-row text-center",
          staticStyle: { "align-items": "center" }
        },
        [
          _c(
            "div",
            {
              staticClass:
                "card text-left px-2  d-flex flex-row flex-wrap pb-4  pt-3",
              staticStyle: {
                height: "auto",
                width: "100%",
                "margin-top": "50px",
                "align-items": "center"
              }
            },
            [
              _vm._m(2),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-12 px-1 px-md-2 d-flex py-1  mt-3 flex-row flex-wrap",
                  staticStyle: { "align-items": "center" }
                },
                [
                  _vm._m(3),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "d-flex flex-row",
                      staticStyle: { "align-items": "center", width: "100%" }
                    },
                    [
                      _vm._m(4),
                      _vm._v(" "),
                      _c("div", { staticStyle: { width: "100%" } }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.username,
                              expression: "username"
                            }
                          ],
                          staticClass: "inputStyle py-2 px-2",
                          attrs: {
                            required: "required",
                            type: "text",
                            placeholder: "Elon"
                          },
                          domProps: { value: _vm.username },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.username = $event.target.value
                            }
                          }
                        })
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c(
                "div",
                {
                  staticClass:
                    "col-12 px-1 px-md-2 d-flex py-1  mt-3 flex-row flex-wrap",
                  staticStyle: { "align-items": "center" }
                },
                [
                  _vm._m(5),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "d-flex flex-row",
                      staticStyle: { "align-items": "center", width: "100%" }
                    },
                    [
                      _vm._m(6),
                      _vm._v(" "),
                      _c("div", { staticStyle: { width: "100%" } }, [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.password,
                              expression: "password"
                            }
                          ],
                          staticClass: "inputStyle py-2 px-2",
                          attrs: {
                            required: "required",
                            type: "password",
                            placeholder: "password"
                          },
                          domProps: { value: _vm.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.password = $event.target.value
                            }
                          }
                        })
                      ])
                    ]
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 text-center mt-4" }, [
                _c(
                  "button",
                  {
                    staticClass: "btn btn-sm btn-round",
                    staticStyle: {
                      "font-size": "13px",
                      color: "white",
                      background: "#264653"
                    },
                    on: { click: _vm.register }
                  },
                  [_vm._v("\n                Create\n             ")]
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "col-12 text-center mt-2" }, [
                _c(
                  "span",
                  { staticStyle: { "font-size": "13px" } },
                  [
                    _vm._v("Already have an account? "),
                    _c("router-link", { attrs: { to: "/login" } }, [
                      _vm._v("Login")
                    ])
                  ],
                  1
                )
              ]),
              _vm._v(" "),
              _vm.errorInfo
                ? _c("div", { staticClass: "col-12 text-center text-danger" }, [
                    _c("span", { staticStyle: { "font-size": "14px" } }, [
                      _vm._v(_vm._s(_vm.errorInfo))
                    ])
                  ])
                : _vm._e()
            ]
          )
        ]
      )
    ]
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "offset-lg-2 pr-3 pt-md-4   px-2 d-md-block d-none" },
      [_c("h3", [_vm._v("Matrix App")])]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center pt-3 d-md-none d-block" }, [
      _c("h3", [_vm._v("Matrix App")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "col-12 mt-2 px-1 px-md-2 text-center" }, [
      _c("h4", [_vm._v("Create Your Account")])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { width: "100%" } }, [
      _c(
        "div",
        {
          staticClass: "mb-2",
          staticStyle: { "font-size": "14px", "font-family": "MediumFont" }
        },
        [_vm._v("Username")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mr-2" }, [
      _c("i", {
        staticClass: "las la-user",
        staticStyle: { "font-size": "29px", color: "#264653" }
      })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticStyle: { width: "100%" } }, [
      _c(
        "div",
        {
          staticClass: "mb-2",
          staticStyle: { "font-size": "14px", "font-family": "MediumFont" }
        },
        [_vm._v("Password")]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mr-2" }, [
      _c("i", {
        staticClass: "las la-lock",
        staticStyle: { "font-size": "29px", color: "#264653" }
      })
    ])
  }
]
render._withStripped = true



/***/ })

}]);