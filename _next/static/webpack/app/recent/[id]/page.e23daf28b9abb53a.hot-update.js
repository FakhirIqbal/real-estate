"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/recent/[id]/page",{

/***/ "(app-pages-browser)/./app/recent/[id]/page.jsx":
/*!**********************************!*\
  !*** ./app/recent/[id]/page.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/header */ \"(app-pages-browser)/./components/header.jsx\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/data */ \"(app-pages-browser)/./data/data.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"(app-pages-browser)/./node_modules/next/dist/api/router.js\");\n// This file is used to display the details of a product based on the ID passed in the URL.\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\nfunction Id(param) {\n    let { params } = param;\n    var _selectedItem_, _selectedItem_1, _selectedItem__indoor, _selectedItem_2, _selectedItem_3, _selectedItem_4, _selectedItem_5, _selectedItem_6, _selectedItem_7, _selectedItem_8;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    // Filter the data array to find the item with matching ID\n    const selectedItem = _data_data__WEBPACK_IMPORTED_MODULE_4__.data.filter((item)=>item.id == params.id);\n    console.log(params);\n    // If no matching item is found, handle this case (e.g., show a message or redirect)\n    if (selectedItem.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                    lineNumber: 21,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-80 bg-black bg-opacity-25 flex flex-col justify-center items-center font-cardo  text-6xl\",\n                    children: [\n                        \"Product not found\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            href: \"/recent\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transition-all duration-300 hover:opacity-50 text-4xl font-light font-sans\",\n                                children: \"Go to Recent Sales\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                                lineNumber: 25,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                    lineNumber: 22,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6 sm:pt-0 px-5 sm:px-0 sm:w-1/2 md:w-2/3 lg:w-1/2 mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center space-y-5 my-20\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-phoppin text-sm\",\n                            children: \"RECENTLY SOLD BY JESSICA BANSAL\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                            lineNumber: 42,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-cardo font-medium text-center sm:text-start text-4xl\",\n                            children: (_selectedItem_ = selectedItem[0]) === null || _selectedItem_ === void 0 ? void 0 : _selectedItem_.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-justify sm:text-start font-sans py-4 leading-6 text-gray-700\",\n                            children: (_selectedItem_1 = selectedItem[0]) === null || _selectedItem_1 === void 0 ? void 0 : _selectedItem_1.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap\",\n                            children: (_selectedItem_2 = selectedItem[0]) === null || _selectedItem_2 === void 0 ? void 0 : (_selectedItem__indoor = _selectedItem_2.indoor) === null || _selectedItem__indoor === void 0 ? void 0 : _selectedItem__indoor.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"sm:w-1/3 p-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: image,\n                                        className: \"w-full h-auto sm:h-36 cursor-pointer\",\n                                        width: 170,\n                                        height: 170,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 54,\n                                        columnNumber: 17\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 53,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this),\n                        ((_selectedItem_3 = selectedItem[0]) === null || _selectedItem_3 === void 0 ? void 0 : _selectedItem_3.mainPic) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: (_selectedItem_4 = selectedItem[0]) === null || _selectedItem_4 === void 0 ? void 0 : _selectedItem_4.mainPic,\n                            className: \"w-full  h-auto sm:h-[500px] p-1 cursor-pointer\",\n                            width: 0,\n                            height: 0,\n                            sizes: \"100vw\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                            lineNumber: 65,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"font-light text-center sm:text-start text-sm py-12 flex flex-col space-y-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Sold \".concat((_selectedItem_5 = selectedItem[0]) === null || _selectedItem_5 === void 0 ? void 0 : _selectedItem_5.soldYear, \". \").concat(((_selectedItem_6 = selectedItem[0]) === null || _selectedItem_6 === void 0 ? void 0 : _selectedItem_6.price) ? \"List price \".concat((_selectedItem_7 = selectedItem[0]) === null || _selectedItem_7 === void 0 ? void 0 : _selectedItem_7.price) : \"\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, (_selectedItem_8 = selectedItem[0]) === null || _selectedItem_8 === void 0 ? void 0 : _selectedItem_8.id, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this);\n}\n_s(Id, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = Id;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Id);\nvar _c;\n$RefreshReg$(_c, \"Id\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZWNlbnQvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyRkFBMkY7OztBQUVuRDtBQUNUO0FBRVU7QUFDTjtBQUNOO0FBQ1c7QUFFeEMsU0FBU08sR0FBRyxLQUFVO1FBQVYsRUFBRUMsTUFBTSxFQUFFLEdBQVY7UUFtQ0NDLGdCQUdBQSxpQkFHQUEsdUJBQUFBLGlCQVlGQSxpQkFFUUEsaUJBU0tBLGlCQUNWQSxpQkFDa0JBLGlCQXRDakJBOztJQTNCYixNQUFNQyxTQUFTSixzREFBU0E7SUFFeEIsMERBQTBEO0lBQzFELE1BQU1HLGVBQWVMLDRDQUFJQSxDQUFDTyxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsRUFBRSxJQUFJTCxPQUFPSyxFQUFFO0lBQ2pFQyxRQUFRQyxHQUFHLENBQUNQO0lBQ1Ysb0ZBQW9GO0lBQ3BGLElBQUlDLGFBQWFPLE1BQU0sS0FBSyxHQUFHO1FBQzdCLHFCQUNFOzs4QkFDRSw4REFBQ2IsMERBQU1BOzs7Ozs4QkFDUCw4REFBQ2M7b0JBQUlDLFdBQVU7O3dCQUE2RjtzQ0FFMUcsOERBQUNiLGlEQUFJQTs0QkFBQ2MsTUFBSztzQ0FDVCw0RUFBQ0M7Z0NBQUtGLFdBQVU7MENBQTZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT3ZHO0lBRUEscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ2xCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNjO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFFQ0MsV0FBVTs7c0NBRVYsOERBQUNJOzRCQUFFSixXQUFVO3NDQUNWOzs7Ozs7c0NBRUgsOERBQUNFOzRCQUFLRixXQUFVO3VDQUNiVCxpQkFBQUEsWUFBWSxDQUFDLEVBQUUsY0FBZkEscUNBQUFBLGVBQWlCYyxLQUFLOzs7Ozs7c0NBRXpCLDhEQUFDRDs0QkFBRUosV0FBVTt1Q0FDVlQsa0JBQUFBLFlBQVksQ0FBQyxFQUFFLGNBQWZBLHNDQUFBQSxnQkFBaUJlLFdBQVc7Ozs7OztzQ0FFL0IsOERBQUNQOzRCQUFJQyxXQUFVO3VDQUNaVCxrQkFBQUEsWUFBWSxDQUFDLEVBQUUsY0FBZkEsdUNBQUFBLHdCQUFBQSxnQkFBaUJnQixNQUFNLGNBQXZCaEIsNENBQUFBLHNCQUF5QmlCLEdBQUcsQ0FBQyxDQUFDQyxPQUFPQyxzQkFDcEMsOERBQUNYO29DQUFnQkMsV0FBVTs4Q0FDekIsNEVBQUNoQixrREFBS0E7d0NBQ0oyQixLQUFLRjt3Q0FDTFQsV0FBVTt3Q0FDVlksT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUkMsS0FBSTs7Ozs7O21DQU5FSjs7Ozs7Ozs7Ozt3QkFXYm5CLEVBQUFBLGtCQUFBQSxZQUFZLENBQUMsRUFBRSxjQUFmQSxzQ0FBQUEsZ0JBQWlCd0IsT0FBTyxtQkFDdkIsOERBQUMvQixrREFBS0E7NEJBQ0oyQixHQUFHLEdBQUVwQixrQkFBQUEsWUFBWSxDQUFDLEVBQUUsY0FBZkEsc0NBQUFBLGdCQUFpQndCLE9BQU87NEJBQzdCZixXQUFVOzRCQUNWWSxPQUFPOzRCQUNQQyxRQUFROzRCQUNSRyxPQUFNOzRCQUNORixLQUFJOzs7Ozs7c0NBR1IsOERBQUNmOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDSTswQ0FBRyxRQUNGYixRQURVQSxrQkFBQUEsWUFBWSxDQUFDLEVBQUUsY0FBZkEsc0NBQUFBLGdCQUFpQjBCLFFBQVEsRUFBQyxNQUlyQyxPQUhDMUIsRUFBQUEsa0JBQUFBLFlBQVksQ0FBQyxFQUFFLGNBQWZBLHNDQUFBQSxnQkFBaUIyQixLQUFLLElBQ2xCLGNBQXFDLFFBQXZCM0Isa0JBQUFBLFlBQVksQ0FBQyxFQUFFLGNBQWZBLHNDQUFBQSxnQkFBaUIyQixLQUFLLElBQ3BDOzs7Ozs7Ozs7Ozs7b0JBdkNIM0Isa0JBQUFBLFlBQVksQ0FBQyxFQUFFLGNBQWZBLHNDQUFBQSxnQkFBaUJJLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q2xDO0dBMUVTTjs7UUFDUUQsa0RBQVNBOzs7S0FEakJDO0FBNEVULCtEQUFlQSxFQUFFQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9yZWNlbnQvW2lkXS9wYWdlLmpzeD84NmE1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgZmlsZSBpcyB1c2VkIHRvIGRpc3BsYXkgdGhlIGRldGFpbHMgb2YgYSBwcm9kdWN0IGJhc2VkIG9uIHRoZSBJRCBwYXNzZWQgaW4gdGhlIFVSTC5cclxuXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuXHJcbmltcG9ydCBIZWFkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9oZWFkZXJcIjtcclxuaW1wb3J0IHsgZGF0YSB9IGZyb20gXCJAL2RhdGEvZGF0YVwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuZnVuY3Rpb24gSWQoeyBwYXJhbXMgfSkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIFxyXG4gIC8vIEZpbHRlciB0aGUgZGF0YSBhcnJheSB0byBmaW5kIHRoZSBpdGVtIHdpdGggbWF0Y2hpbmcgSURcclxuICBjb25zdCBzZWxlY3RlZEl0ZW0gPSBkYXRhLmZpbHRlcigoaXRlbSkgPT4gaXRlbS5pZCA9PSBwYXJhbXMuaWQpO1xyXG5jb25zb2xlLmxvZyhwYXJhbXMpXHJcbiAgLy8gSWYgbm8gbWF0Y2hpbmcgaXRlbSBpcyBmb3VuZCwgaGFuZGxlIHRoaXMgY2FzZSAoZS5nLiwgc2hvdyBhIG1lc3NhZ2Ugb3IgcmVkaXJlY3QpXHJcbiAgaWYgKHNlbGVjdGVkSXRlbS5sZW5ndGggPT09IDApIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPEhlYWRlciAvPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC04MCBiZy1ibGFjayBiZy1vcGFjaXR5LTI1IGZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGZvbnQtY2FyZG8gIHRleHQtNnhsXCI+XHJcbiAgICAgICAgICBQcm9kdWN0IG5vdCBmb3VuZFxyXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9yZWNlbnRcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGhvdmVyOm9wYWNpdHktNTAgdGV4dC00eGwgZm9udC1saWdodCBmb250LXNhbnNcIj5cclxuICAgICAgICAgICAgICBHbyB0byBSZWNlbnQgU2FsZXNcclxuICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8Lz5cclxuICAgICk7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4+XHJcbiAgICAgIDxIZWFkZXIgLz5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwdC02IHNtOnB0LTAgcHgtNSBzbTpweC0wIHNtOnctMS8yIG1kOnctMi8zIGxnOnctMS8yIG14LWF1dG9cIj5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBrZXk9e3NlbGVjdGVkSXRlbVswXT8uaWR9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBzcGFjZS15LTUgbXktMjBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtcGhvcHBpbiB0ZXh0LXNtXCI+XHJcbiAgICAgICAgICAgIHtcIlJFQ0VOVExZIFNPTEQgQlkgSkVTU0lDQSBCQU5TQUxcIn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZvbnQtY2FyZG8gZm9udC1tZWRpdW0gdGV4dC1jZW50ZXIgc206dGV4dC1zdGFydCB0ZXh0LTR4bFwiPlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRJdGVtWzBdPy50aXRsZX1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc20gdGV4dC1qdXN0aWZ5IHNtOnRleHQtc3RhcnQgZm9udC1zYW5zIHB5LTQgbGVhZGluZy02IHRleHQtZ3JheS03MDBcIj5cclxuICAgICAgICAgICAge3NlbGVjdGVkSXRlbVswXT8uZGVzY3JpcHRpb259XHJcbiAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC13cmFwXCI+XHJcbiAgICAgICAgICAgIHtzZWxlY3RlZEl0ZW1bMF0/LmluZG9vcj8ubWFwKChpbWFnZSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInNtOnctMS8zIHAtMVwiPlxyXG4gICAgICAgICAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17aW1hZ2V9XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG8gc206aC0zNiBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgIHdpZHRoPXsxNzB9XHJcbiAgICAgICAgICAgICAgICAgIGhlaWdodD17MTcwfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHtzZWxlY3RlZEl0ZW1bMF0/Lm1haW5QaWMgJiYgKFxyXG4gICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICBzcmM9e3NlbGVjdGVkSXRlbVswXT8ubWFpblBpY31cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgIGgtYXV0byBzbTpoLVs1MDBweF0gcC0xIGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICB3aWR0aD17MH1cclxuICAgICAgICAgICAgICBoZWlnaHQ9ezB9XHJcbiAgICAgICAgICAgICAgc2l6ZXM9XCIxMDB2d1wiXHJcbiAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtbGlnaHQgdGV4dC1jZW50ZXIgc206dGV4dC1zdGFydCB0ZXh0LXNtIHB5LTEyIGZsZXggZmxleC1jb2wgc3BhY2UteS00XCI+XHJcbiAgICAgICAgICAgIDxwPntgU29sZCAke3NlbGVjdGVkSXRlbVswXT8uc29sZFllYXJ9LiAke1xyXG4gICAgICAgICAgICAgIHNlbGVjdGVkSXRlbVswXT8ucHJpY2VcclxuICAgICAgICAgICAgICAgID8gYExpc3QgcHJpY2UgJHtzZWxlY3RlZEl0ZW1bMF0/LnByaWNlfWBcclxuICAgICAgICAgICAgICAgIDogXCJcIlxyXG4gICAgICAgICAgICB9YH08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSWQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJIZWFkZXIiLCJkYXRhIiwiTGluayIsInVzZVJvdXRlciIsIklkIiwicGFyYW1zIiwic2VsZWN0ZWRJdGVtIiwicm91dGVyIiwiZmlsdGVyIiwiaXRlbSIsImlkIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsImRpdiIsImNsYXNzTmFtZSIsImhyZWYiLCJzcGFuIiwibWFpbiIsInAiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW5kb29yIiwibWFwIiwiaW1hZ2UiLCJpbmRleCIsInNyYyIsIndpZHRoIiwiaGVpZ2h0IiwiYWx0IiwibWFpblBpYyIsInNpemVzIiwic29sZFllYXIiLCJwcmljZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/recent/[id]/page.jsx\n"));

/***/ })

});