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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/header */ \"(app-pages-browser)/./components/header.jsx\");\n/* harmony import */ var _data_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/data/data */ \"(app-pages-browser)/./data/data.jsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/dist/api/link.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n// This file is used to display the details of a product based on the ID passed in the URL.\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n// import { useRouter } from \"next/router\";\n\nfunction Id(param) {\n    let { params } = param;\n    var _selectedItem_, _selectedItem_1, _selectedItem__indoor, _selectedItem_2, _selectedItem_3, _selectedItem_4, _selectedItem_5, _selectedItem_6, _selectedItem_7, _selectedItem_8;\n    _s();\n    // const router = useRouter();\n    const useParams = useParams();\n    console.log(useParams);\n    // Filter the data array to find the item with matching ID\n    const selectedItem = _data_data__WEBPACK_IMPORTED_MODULE_4__.data.filter((item)=>item.id == params.id);\n    console.log(params);\n    // If no matching item is found, handle this case (e.g., show a message or redirect)\n    if (selectedItem.length === 0) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"h-80 bg-black bg-opacity-25 flex flex-col justify-center items-center font-cardo  text-6xl\",\n                    children: [\n                        \"Product not found\",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_link__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            href: \"/recent\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"transition-all duration-300 hover:opacity-50 text-4xl font-light font-sans\",\n                                children: \"Go to Recent Sales\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                                lineNumber: 27,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                            lineNumber: 26,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 9\n                }, this)\n            ]\n        }, void 0, true);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_header__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"pt-6 sm:pt-0 px-5 sm:px-0 sm:w-1/2 md:w-2/3 lg:w-1/2 mx-auto\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col items-center space-y-5 my-20\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-phoppin text-sm\",\n                            children: \"RECENTLY SOLD BY JESSICA BANSAL\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                            lineNumber: 44,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"font-cardo font-medium text-center sm:text-start text-4xl\",\n                            children: (_selectedItem_ = selectedItem[0]) === null || _selectedItem_ === void 0 ? void 0 : _selectedItem_.title\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                            lineNumber: 47,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"text-sm text-justify sm:text-start font-sans py-4 leading-6 text-gray-700\",\n                            children: (_selectedItem_1 = selectedItem[0]) === null || _selectedItem_1 === void 0 ? void 0 : _selectedItem_1.description\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                            lineNumber: 50,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex flex-wrap\",\n                            children: (_selectedItem_2 = selectedItem[0]) === null || _selectedItem_2 === void 0 ? void 0 : (_selectedItem__indoor = _selectedItem_2.indoor) === null || _selectedItem__indoor === void 0 ? void 0 : _selectedItem__indoor.map((image, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"sm:w-1/3 p-1\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                                        src: image,\n                                        className: \"w-full h-auto sm:h-36 cursor-pointer\",\n                                        width: 170,\n                                        height: 170,\n                                        alt: \"\"\n                                    }, void 0, false, {\n                                        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, this)\n                                }, index, false, {\n                                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                                    lineNumber: 55,\n                                    columnNumber: 15\n                                }, this))\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        ((_selectedItem_3 = selectedItem[0]) === null || _selectedItem_3 === void 0 ? void 0 : _selectedItem_3.mainPic) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            src: (_selectedItem_4 = selectedItem[0]) === null || _selectedItem_4 === void 0 ? void 0 : _selectedItem_4.mainPic,\n                            className: \"w-full  h-auto sm:h-[500px] p-1 cursor-pointer\",\n                            width: 0,\n                            height: 0,\n                            sizes: \"100vw\",\n                            alt: \"\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                            lineNumber: 67,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"font-light text-center sm:text-start text-sm py-12 flex flex-col space-y-4\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                children: \"Sold \".concat((_selectedItem_5 = selectedItem[0]) === null || _selectedItem_5 === void 0 ? void 0 : _selectedItem_5.soldYear, \". \").concat(((_selectedItem_6 = selectedItem[0]) === null || _selectedItem_6 === void 0 ? void 0 : _selectedItem_6.price) ? \"List price \".concat((_selectedItem_7 = selectedItem[0]) === null || _selectedItem_7 === void 0 ? void 0 : _selectedItem_7.price) : \"\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 13\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                            lineNumber: 76,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, (_selectedItem_8 = selectedItem[0]) === null || _selectedItem_8 === void 0 ? void 0 : _selectedItem_8.id, true, {\n                    fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\DELL\\\\Desktop\\\\Moiz\\\\Jess_Real-Estate\\\\app\\\\recent\\\\[id]\\\\page.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this);\n}\n_s(Id, \"edQaBJRWQ1XoRbMBXL30SUNr/Go=\", true);\n_c = Id;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Id);\nvar _c;\n$RefreshReg$(_c, \"Id\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9yZWNlbnQvW2lkXS9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSwyRkFBMkY7OztBQUVuRDtBQUNUO0FBRVU7QUFDTjtBQUNOO0FBQzdCLDJDQUEyQztBQUNDO0FBRTVDLFNBQVNPLEdBQUcsS0FBVTtRQUFWLEVBQUVDLE1BQU0sRUFBRSxHQUFWO1FBb0NDQyxnQkFHQUEsaUJBR0FBLHVCQUFBQSxpQkFZRkEsaUJBRVFBLGlCQVNLQSxpQkFDVkEsaUJBQ2tCQSxpQkF0Q2pCQTs7SUE1QmIsOEJBQThCO0lBQzlCLE1BQU1ILFlBQVlBO0lBQ2xCSSxRQUFRQyxHQUFHLENBQUNMO0lBQ1osMERBQTBEO0lBQzFELE1BQU1HLGVBQWVMLDRDQUFJQSxDQUFDUSxNQUFNLENBQUMsQ0FBQ0MsT0FBU0EsS0FBS0MsRUFBRSxJQUFJTixPQUFPTSxFQUFFO0lBQy9ESixRQUFRQyxHQUFHLENBQUNIO0lBQ1osb0ZBQW9GO0lBQ3BGLElBQUlDLGFBQWFNLE1BQU0sS0FBSyxHQUFHO1FBQzdCLHFCQUNFOzs4QkFDRSw4REFBQ1osMERBQU1BOzs7Ozs4QkFDUCw4REFBQ2E7b0JBQUlDLFdBQVU7O3dCQUE2RjtzQ0FFMUcsOERBQUNaLGlEQUFJQTs0QkFBQ2EsTUFBSztzQ0FDVCw0RUFBQ0M7Z0NBQUtGLFdBQVU7MENBQTZFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBT3ZHO0lBRUEscUJBQ0UsOERBQUNHOzswQkFDQyw4REFBQ2pCLDBEQUFNQTs7Ozs7MEJBQ1AsOERBQUNhO2dCQUFJQyxXQUFVOzBCQUNiLDRFQUFDRDtvQkFFQ0MsV0FBVTs7c0NBRVYsOERBQUNJOzRCQUFFSixXQUFVO3NDQUNWOzs7Ozs7c0NBRUgsOERBQUNFOzRCQUFLRixXQUFVO3VDQUNiUixpQkFBQUEsWUFBWSxDQUFDLEVBQUUsY0FBZkEscUNBQUFBLGVBQWlCYSxLQUFLOzs7Ozs7c0NBRXpCLDhEQUFDRDs0QkFBRUosV0FBVTt1Q0FDVlIsa0JBQUFBLFlBQVksQ0FBQyxFQUFFLGNBQWZBLHNDQUFBQSxnQkFBaUJjLFdBQVc7Ozs7OztzQ0FFL0IsOERBQUNQOzRCQUFJQyxXQUFVO3VDQUNaUixrQkFBQUEsWUFBWSxDQUFDLEVBQUUsY0FBZkEsdUNBQUFBLHdCQUFBQSxnQkFBaUJlLE1BQU0sY0FBdkJmLDRDQUFBQSxzQkFBeUJnQixHQUFHLENBQUMsQ0FBQ0MsT0FBT0Msc0JBQ3BDLDhEQUFDWDtvQ0FBZ0JDLFdBQVU7OENBQ3pCLDRFQUFDZixrREFBS0E7d0NBQ0owQixLQUFLRjt3Q0FDTFQsV0FBVTt3Q0FDVlksT0FBTzt3Q0FDUEMsUUFBUTt3Q0FDUkMsS0FBSTs7Ozs7O21DQU5FSjs7Ozs7Ozs7Ozt3QkFXYmxCLEVBQUFBLGtCQUFBQSxZQUFZLENBQUMsRUFBRSxjQUFmQSxzQ0FBQUEsZ0JBQWlCdUIsT0FBTyxtQkFDdkIsOERBQUM5QixrREFBS0E7NEJBQ0owQixHQUFHLEdBQUVuQixrQkFBQUEsWUFBWSxDQUFDLEVBQUUsY0FBZkEsc0NBQUFBLGdCQUFpQnVCLE9BQU87NEJBQzdCZixXQUFVOzRCQUNWWSxPQUFPOzRCQUNQQyxRQUFROzRCQUNSRyxPQUFNOzRCQUNORixLQUFJOzs7Ozs7c0NBR1IsOERBQUNmOzRCQUFJQyxXQUFVO3NDQUNiLDRFQUFDSTswQ0FBRyxRQUNGWixRQURVQSxrQkFBQUEsWUFBWSxDQUFDLEVBQUUsY0FBZkEsc0NBQUFBLGdCQUFpQnlCLFFBQVEsRUFBQyxNQUlyQyxPQUhDekIsRUFBQUEsa0JBQUFBLFlBQVksQ0FBQyxFQUFFLGNBQWZBLHNDQUFBQSxnQkFBaUIwQixLQUFLLElBQ2xCLGNBQXFDLFFBQXZCMUIsa0JBQUFBLFlBQVksQ0FBQyxFQUFFLGNBQWZBLHNDQUFBQSxnQkFBaUIwQixLQUFLLElBQ3BDOzs7Ozs7Ozs7Ozs7b0JBdkNIMUIsa0JBQUFBLFlBQVksQ0FBQyxFQUFFLGNBQWZBLHNDQUFBQSxnQkFBaUJLLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUE4Q2xDO0dBM0VTUDtLQUFBQTtBQTZFVCwrREFBZUEsRUFBRUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvcmVjZW50L1tpZF0vcGFnZS5qc3g/ODZhNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGlzIGZpbGUgaXMgdXNlZCB0byBkaXNwbGF5IHRoZSBkZXRhaWxzIG9mIGEgcHJvZHVjdCBiYXNlZCBvbiB0aGUgSUQgcGFzc2VkIGluIHRoZSBVUkwuXHJcblwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XHJcblxyXG5pbXBvcnQgSGVhZGVyIGZyb20gXCJAL2NvbXBvbmVudHMvaGVhZGVyXCI7XHJcbmltcG9ydCB7IGRhdGEgfSBmcm9tIFwiQC9kYXRhL2RhdGFcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG4vLyBpbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlUGFyYW1zIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5cclxuZnVuY3Rpb24gSWQoeyBwYXJhbXMgfSkge1xyXG4gIC8vIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IHVzZVBhcmFtcyA9IHVzZVBhcmFtcygpO1xyXG4gIGNvbnNvbGUubG9nKHVzZVBhcmFtcyk7XHJcbiAgLy8gRmlsdGVyIHRoZSBkYXRhIGFycmF5IHRvIGZpbmQgdGhlIGl0ZW0gd2l0aCBtYXRjaGluZyBJRFxyXG4gIGNvbnN0IHNlbGVjdGVkSXRlbSA9IGRhdGEuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkID09IHBhcmFtcy5pZCk7XHJcbiAgY29uc29sZS5sb2cocGFyYW1zKTtcclxuICAvLyBJZiBubyBtYXRjaGluZyBpdGVtIGlzIGZvdW5kLCBoYW5kbGUgdGhpcyBjYXNlIChlLmcuLCBzaG93IGEgbWVzc2FnZSBvciByZWRpcmVjdClcclxuICBpZiAoc2VsZWN0ZWRJdGVtLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPD5cclxuICAgICAgICA8SGVhZGVyIC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTgwIGJnLWJsYWNrIGJnLW9wYWNpdHktMjUgZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXIgZm9udC1jYXJkbyAgdGV4dC02eGxcIj5cclxuICAgICAgICAgIFByb2R1Y3Qgbm90IGZvdW5kXHJcbiAgICAgICAgICA8TGluayBocmVmPVwiL3JlY2VudFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgaG92ZXI6b3BhY2l0eS01MCB0ZXh0LTR4bCBmb250LWxpZ2h0IGZvbnQtc2Fuc1wiPlxyXG4gICAgICAgICAgICAgIEdvIHRvIFJlY2VudCBTYWxlc1xyXG4gICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvPlxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8bWFpbj5cclxuICAgICAgPEhlYWRlciAvPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB0LTYgc206cHQtMCBweC01IHNtOnB4LTAgc206dy0xLzIgbWQ6dy0yLzMgbGc6dy0xLzIgbXgtYXV0b1wiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGtleT17c2VsZWN0ZWRJdGVtWzBdPy5pZH1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIHNwYWNlLXktNSBteS0yMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1waG9wcGluIHRleHQtc21cIj5cclxuICAgICAgICAgICAge1wiUkVDRU5UTFkgU09MRCBCWSBKRVNTSUNBIEJBTlNBTFwifVxyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1jYXJkbyBmb250LW1lZGl1bSB0ZXh0LWNlbnRlciBzbTp0ZXh0LXN0YXJ0IHRleHQtNHhsXCI+XHJcbiAgICAgICAgICAgIHtzZWxlY3RlZEl0ZW1bMF0/LnRpdGxlfVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbSB0ZXh0LWp1c3RpZnkgc206dGV4dC1zdGFydCBmb250LXNhbnMgcHktNCBsZWFkaW5nLTYgdGV4dC1ncmF5LTcwMFwiPlxyXG4gICAgICAgICAgICB7c2VsZWN0ZWRJdGVtWzBdPy5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXdyYXBcIj5cclxuICAgICAgICAgICAge3NlbGVjdGVkSXRlbVswXT8uaW5kb29yPy5tYXAoKGltYWdlLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPVwic206dy0xLzMgcC0xXCI+XHJcbiAgICAgICAgICAgICAgICA8SW1hZ2VcclxuICAgICAgICAgICAgICAgICAgc3JjPXtpbWFnZX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0byBzbTpoLTM2IGN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgd2lkdGg9ezE3MH1cclxuICAgICAgICAgICAgICAgICAgaGVpZ2h0PXsxNzB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAge3NlbGVjdGVkSXRlbVswXT8ubWFpblBpYyAmJiAoXHJcbiAgICAgICAgICAgIDxJbWFnZVxyXG4gICAgICAgICAgICAgIHNyYz17c2VsZWN0ZWRJdGVtWzBdPy5tYWluUGljfVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCAgaC1hdXRvIHNtOmgtWzUwMHB4XSBwLTEgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgIHdpZHRoPXswfVxyXG4gICAgICAgICAgICAgIGhlaWdodD17MH1cclxuICAgICAgICAgICAgICBzaXplcz1cIjEwMHZ3XCJcclxuICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1saWdodCB0ZXh0LWNlbnRlciBzbTp0ZXh0LXN0YXJ0IHRleHQtc20gcHktMTIgZmxleCBmbGV4LWNvbCBzcGFjZS15LTRcIj5cclxuICAgICAgICAgICAgPHA+e2BTb2xkICR7c2VsZWN0ZWRJdGVtWzBdPy5zb2xkWWVhcn0uICR7XHJcbiAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtWzBdPy5wcmljZVxyXG4gICAgICAgICAgICAgICAgPyBgTGlzdCBwcmljZSAke3NlbGVjdGVkSXRlbVswXT8ucHJpY2V9YFxyXG4gICAgICAgICAgICAgICAgOiBcIlwiXHJcbiAgICAgICAgICAgIH1gfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvbWFpbj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJZDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbWFnZSIsIkhlYWRlciIsImRhdGEiLCJMaW5rIiwidXNlUGFyYW1zIiwiSWQiLCJwYXJhbXMiLCJzZWxlY3RlZEl0ZW0iLCJjb25zb2xlIiwibG9nIiwiZmlsdGVyIiwiaXRlbSIsImlkIiwibGVuZ3RoIiwiZGl2IiwiY2xhc3NOYW1lIiwiaHJlZiIsInNwYW4iLCJtYWluIiwicCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJpbmRvb3IiLCJtYXAiLCJpbWFnZSIsImluZGV4Iiwic3JjIiwid2lkdGgiLCJoZWlnaHQiLCJhbHQiLCJtYWluUGljIiwic2l6ZXMiLCJzb2xkWWVhciIsInByaWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/recent/[id]/page.jsx\n"));

/***/ })

});