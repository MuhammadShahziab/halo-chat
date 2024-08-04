"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "./action-async-storage.external?8dda":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "./request-async-storage.external?3d59":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "./static-generation-async-storage.external?16bc":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Chalochat%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Chalochat&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Chalochat%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Chalochat&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_shahzaib_Desktop_halochat_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/auth/[...nextauth]/route.js */ \"(rsc)/./app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\shahzaib\\\\Desktop\\\\halochat\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_shahzaib_Desktop_halochat_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNzaGFoemFpYiU1Q0Rlc2t0b3AlNUNoYWxvY2hhdCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDc2hhaHphaWIlNUNEZXNrdG9wJTVDaGFsb2NoYXQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRztBQUN2QztBQUNjO0FBQytCO0FBQzVHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnSEFBbUI7QUFDM0M7QUFDQSxjQUFjLHlFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsaUVBQWlFO0FBQ3pFO0FBQ0E7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDdUg7O0FBRXZIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFsb2NoYXQvPzc3MGQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2Z1dHVyZS9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcc2hhaHphaWJcXFxcRGVza3RvcFxcXFxoYWxvY2hhdFxcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxzaGFoemFpYlxcXFxEZXNrdG9wXFxcXGhhbG9jaGF0XFxcXGFwcFxcXFxhcGlcXFxcYXV0aFxcXFxbLi4ubmV4dGF1dGhdXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgcmVxdWVzdEFzeW5jU3RvcmFnZSwgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuY29uc3Qgb3JpZ2luYWxQYXRobmFtZSA9IFwiL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIjtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgc2VydmVySG9va3MsXG4gICAgICAgIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgb3JpZ2luYWxQYXRobmFtZSwgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Chalochat%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Chalochat&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./app/api/auth/[...nextauth]/route.js":
/*!*********************************************!*\
  !*** ./app/api/auth/[...nextauth]/route.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @models/User */ \"(rsc)/./models/User.js\");\n/* harmony import */ var _mongodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mongodb */ \"(rsc)/./mongodb/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bcryptjs */ \"(rsc)/./node_modules/bcryptjs/index.js\");\n/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/credentials */ \"(rsc)/./node_modules/next-auth/providers/credentials.js\");\n\n\n\n\n\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_3___default()({\n    providers: [\n        (0,next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_4__[\"default\"])({\n            name: \"Credentials\",\n            async authorize (credentials) {\n                try {\n                    if (!credentials.email || !credentials.password) {\n                        throw new Error(\"Invalid Email and Password\");\n                    }\n                    await (0,_mongodb__WEBPACK_IMPORTED_MODULE_1__.ConnectToDB)();\n                    const user = await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n                        email: credentials.email\n                    });\n                    if (!user || !user.password) {\n                        throw new Error(\"Email is not exist\");\n                    }\n                    const isMatchPassword = await (0,bcryptjs__WEBPACK_IMPORTED_MODULE_2__.compare)(credentials.password, user.password);\n                    if (!isMatchPassword) {\n                        throw new Error(\"Password does not match\");\n                    }\n                    return user;\n                } catch (error) {\n                    console.error(\"Error during authorization\", error.message);\n                    throw new Error(error.message);\n                }\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    callbacks: {\n        async session ({ session }) {\n            const mongoUser = await _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n                email: session?.user.email\n            });\n            session.user = {\n                id: mongoUser._id.toString(),\n                username: mongoUser.username,\n                email: mongoUser.email,\n                profileImage: mongoUser.profileImage,\n                phone: mongoUser.phone,\n                about: mongoUser.about\n            };\n            return session;\n        }\n    }\n});\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDTztBQUNKO0FBQ0Y7QUFFaUM7QUFFbEUsTUFBTUssVUFBVUYsZ0RBQVFBLENBQUM7SUFDdkJHLFdBQVc7UUFDVEYsMkVBQW1CQSxDQUFDO1lBQ2xCRyxNQUFNO1lBRU4sTUFBTUMsV0FBVUMsV0FBVztnQkFDekIsSUFBSTtvQkFDRixJQUFJLENBQUNBLFlBQVlDLEtBQUssSUFBSSxDQUFDRCxZQUFZRSxRQUFRLEVBQUU7d0JBQy9DLE1BQU0sSUFBSUMsTUFBTTtvQkFDbEI7b0JBRUEsTUFBTVgscURBQVdBO29CQUNqQixNQUFNWSxPQUFPLE1BQU1iLG9EQUFJQSxDQUFDYyxPQUFPLENBQUM7d0JBQUVKLE9BQU9ELFlBQVlDLEtBQUs7b0JBQUM7b0JBQzNELElBQUksQ0FBQ0csUUFBUSxDQUFDQSxLQUFLRixRQUFRLEVBQUU7d0JBQzNCLE1BQU0sSUFBSUMsTUFBTTtvQkFDbEI7b0JBRUEsTUFBTUcsa0JBQWtCLE1BQU1iLGlEQUFPQSxDQUNuQ08sWUFBWUUsUUFBUSxFQUNwQkUsS0FBS0YsUUFBUTtvQkFFZixJQUFJLENBQUNJLGlCQUFpQjt3QkFDcEIsTUFBTSxJQUFJSCxNQUFNO29CQUNsQjtvQkFFQSxPQUFPQztnQkFDVCxFQUFFLE9BQU9HLE9BQU87b0JBQ2RDLFFBQVFELEtBQUssQ0FBQyw4QkFBOEJBLE1BQU1FLE9BQU87b0JBQ3pELE1BQU0sSUFBSU4sTUFBTUksTUFBTUUsT0FBTztnQkFDL0I7WUFDRjtRQUNGO0tBQ0Q7SUFFREMsUUFBUUMsUUFBUUMsR0FBRyxDQUFDQyxlQUFlO0lBQ25DQyxXQUFXO1FBQ1QsTUFBTUMsU0FBUSxFQUFFQSxPQUFPLEVBQUU7WUFDdkIsTUFBTUMsWUFBWSxNQUFNekIsb0RBQUlBLENBQUNjLE9BQU8sQ0FBQztnQkFBRUosT0FBT2MsU0FBU1gsS0FBS0g7WUFBTTtZQUVsRWMsUUFBUVgsSUFBSSxHQUFHO2dCQUNiYSxJQUFJRCxVQUFVRSxHQUFHLENBQUNDLFFBQVE7Z0JBQzFCQyxVQUFVSixVQUFVSSxRQUFRO2dCQUM1Qm5CLE9BQU9lLFVBQVVmLEtBQUs7Z0JBQ3RCb0IsY0FBY0wsVUFBVUssWUFBWTtnQkFDcENDLE9BQU9OLFVBQVVNLEtBQUs7Z0JBQ3RCQyxPQUFPUCxVQUFVTyxLQUFLO1lBQ3hCO1lBRUEsT0FBT1I7UUFDVDtJQUNGO0FBQ0Y7QUFFMkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9oYWxvY2hhdC8uL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzP2RhMWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVzZXIgZnJvbSBcIkBtb2RlbHMvVXNlclwiO1xyXG5pbXBvcnQgeyBDb25uZWN0VG9EQiB9IGZyb20gXCJAbW9uZ29kYlwiO1xyXG5pbXBvcnQgeyBjb21wYXJlIH0gZnJvbSBcImJjcnlwdGpzXCI7XHJcbmltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoXCI7XHJcblxyXG5pbXBvcnQgQ3JlZGVudGlhbHNQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9jcmVkZW50aWFsc1wiO1xyXG5cclxuY29uc3QgaGFuZGxlciA9IE5leHRBdXRoKHtcclxuICBwcm92aWRlcnM6IFtcclxuICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICBuYW1lOiBcIkNyZWRlbnRpYWxzXCIsXHJcblxyXG4gICAgICBhc3luYyBhdXRob3JpemUoY3JlZGVudGlhbHMpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgaWYgKCFjcmVkZW50aWFscy5lbWFpbCB8fCAhY3JlZGVudGlhbHMucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW52YWxpZCBFbWFpbCBhbmQgUGFzc3dvcmRcIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgYXdhaXQgQ29ubmVjdFRvREIoKTtcclxuICAgICAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogY3JlZGVudGlhbHMuZW1haWwgfSk7XHJcbiAgICAgICAgICBpZiAoIXVzZXIgfHwgIXVzZXIucGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRW1haWwgaXMgbm90IGV4aXN0XCIpO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGNvbnN0IGlzTWF0Y2hQYXNzd29yZCA9IGF3YWl0IGNvbXBhcmUoXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzLnBhc3N3b3JkLFxyXG4gICAgICAgICAgICB1c2VyLnBhc3N3b3JkXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgICAgaWYgKCFpc01hdGNoUGFzc3dvcmQpIHtcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiUGFzc3dvcmQgZG9lcyBub3QgbWF0Y2hcIik7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgcmV0dXJuIHVzZXI7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBkdXJpbmcgYXV0aG9yaXphdGlvblwiLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sXHJcbiAgICB9KSxcclxuICBdLFxyXG5cclxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcclxuICBjYWxsYmFja3M6IHtcclxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uIH0pIHtcclxuICAgICAgY29uc3QgbW9uZ29Vc2VyID0gYXdhaXQgVXNlci5maW5kT25lKHsgZW1haWw6IHNlc3Npb24/LnVzZXIuZW1haWwgfSk7XHJcblxyXG4gICAgICBzZXNzaW9uLnVzZXIgPSB7XHJcbiAgICAgICAgaWQ6IG1vbmdvVXNlci5faWQudG9TdHJpbmcoKSxcclxuICAgICAgICB1c2VybmFtZTogbW9uZ29Vc2VyLnVzZXJuYW1lLFxyXG4gICAgICAgIGVtYWlsOiBtb25nb1VzZXIuZW1haWwsXHJcbiAgICAgICAgcHJvZmlsZUltYWdlOiBtb25nb1VzZXIucHJvZmlsZUltYWdlLFxyXG4gICAgICAgIHBob25lOiBtb25nb1VzZXIucGhvbmUsXHJcbiAgICAgICAgYWJvdXQ6IG1vbmdvVXNlci5hYm91dCxcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHJldHVybiBzZXNzaW9uO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmV4cG9ydCB7IGhhbmRsZXIgYXMgR0VULCBoYW5kbGVyIGFzIFBPU1QgfTtcclxuIl0sIm5hbWVzIjpbIlVzZXIiLCJDb25uZWN0VG9EQiIsImNvbXBhcmUiLCJOZXh0QXV0aCIsIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJoYW5kbGVyIiwicHJvdmlkZXJzIiwibmFtZSIsImF1dGhvcml6ZSIsImNyZWRlbnRpYWxzIiwiZW1haWwiLCJwYXNzd29yZCIsIkVycm9yIiwidXNlciIsImZpbmRPbmUiLCJpc01hdGNoUGFzc3dvcmQiLCJlcnJvciIsImNvbnNvbGUiLCJtZXNzYWdlIiwic2VjcmV0IiwicHJvY2VzcyIsImVudiIsIk5FWFRBVVRIX1NFQ1JFVCIsImNhbGxiYWNrcyIsInNlc3Npb24iLCJtb25nb1VzZXIiLCJpZCIsIl9pZCIsInRvU3RyaW5nIiwidXNlcm5hbWUiLCJwcm9maWxlSW1hZ2UiLCJwaG9uZSIsImFib3V0IiwiR0VUIiwiUE9TVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./models/User.js":
/*!************************!*\
  !*** ./models/User.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    username: {\n        type: String,\n        required: true\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    password: {\n        type: String,\n        required: true\n    },\n    phone: {\n        type: String,\n        default: \"\"\n    },\n    about: {\n        type: String,\n        default: \"\"\n    },\n    profileImage: {\n        type: String,\n        default: \"\"\n    },\n    chats: {\n        type: [\n            {\n                type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,\n                ref: \"Chat\"\n            }\n        ]\n    }\n});\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", UserSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb2RlbHMvVXNlci5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBZ0M7QUFFaEMsTUFBTUMsYUFBYSxJQUFJRCx3REFBZSxDQUFDO0lBQ3JDRyxVQUFVO1FBQ1JDLE1BQU1DO1FBQ05DLFVBQVU7SUFDWjtJQUNBQyxPQUFPO1FBQ0xILE1BQU1DO1FBQ05DLFVBQVU7UUFDVkUsUUFBUTtJQUNWO0lBQ0FDLFVBQVU7UUFDUkwsTUFBTUM7UUFDTkMsVUFBVTtJQUNaO0lBQ0FJLE9BQU87UUFDTE4sTUFBTUM7UUFDTk0sU0FBUztJQUNYO0lBQ0FDLE9BQU87UUFDTFIsTUFBTUM7UUFDTk0sU0FBUztJQUNYO0lBQ0FFLGNBQWM7UUFDWlQsTUFBTUM7UUFDTk0sU0FBUztJQUNYO0lBQ0FHLE9BQU87UUFBRVYsTUFBTTtZQUFDO2dCQUFFQSxNQUFNSix3REFBZSxDQUFDZSxLQUFLLENBQUNDLFFBQVE7Z0JBQUVDLEtBQUs7WUFBTztTQUFFO0lBQUM7QUFDekU7QUFFQSxNQUFNQyxPQUFPbEIsd0RBQWUsQ0FBQ2tCLElBQUksSUFBSWxCLHFEQUFjLENBQUMsUUFBUUM7QUFDNUQsaUVBQWVpQixJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFsb2NoYXQvLi9tb2RlbHMvVXNlci5qcz83MzY3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb25nb29zZSBmcm9tIFwibW9uZ29vc2VcIjtcclxuXHJcbmNvbnN0IFVzZXJTY2hlbWEgPSBuZXcgbW9uZ29vc2UuU2NoZW1hKHtcclxuICB1c2VybmFtZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBlbWFpbDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgICB1bmlxdWU6IHRydWUsXHJcbiAgfSxcclxuICBwYXNzd29yZDoge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgcmVxdWlyZWQ6IHRydWUsXHJcbiAgfSxcclxuICBwaG9uZToge1xyXG4gICAgdHlwZTogU3RyaW5nLFxyXG4gICAgZGVmYXVsdDogXCJcIixcclxuICB9LFxyXG4gIGFib3V0OiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiBcIlwiLFxyXG4gIH0sXHJcbiAgcHJvZmlsZUltYWdlOiB7XHJcbiAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICBkZWZhdWx0OiBcIlwiLFxyXG4gIH0sXHJcbiAgY2hhdHM6IHsgdHlwZTogW3sgdHlwZTogbW9uZ29vc2UuU2NoZW1hLlR5cGVzLk9iamVjdElkLCByZWY6IFwiQ2hhdFwiIH1dIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgVXNlciA9IG1vbmdvb3NlLm1vZGVscy5Vc2VyIHx8IG1vbmdvb3NlLm1vZGVsKFwiVXNlclwiLCBVc2VyU2NoZW1hKTtcclxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcclxuIl0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiVXNlclNjaGVtYSIsIlNjaGVtYSIsInVzZXJuYW1lIiwidHlwZSIsIlN0cmluZyIsInJlcXVpcmVkIiwiZW1haWwiLCJ1bmlxdWUiLCJwYXNzd29yZCIsInBob25lIiwiZGVmYXVsdCIsImFib3V0IiwicHJvZmlsZUltYWdlIiwiY2hhdHMiLCJUeXBlcyIsIk9iamVjdElkIiwicmVmIiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./models/User.js\n");

/***/ }),

/***/ "(rsc)/./mongodb/index.js":
/*!**************************!*\
  !*** ./mongodb/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ConnectToDB: () => (/* binding */ ConnectToDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nlet isConnected = false;\nconst ConnectToDB = async ()=>{\n    mongoose__WEBPACK_IMPORTED_MODULE_0___default().set(\"strictQuery\", true);\n    if (isConnected) {\n        console.log(\"MongoDB is already Connected\");\n        return;\n    }\n    try {\n        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODBURL, {\n            dbName: \"Cluster0\"\n        });\n        isConnected = true;\n        console.log(\"MongoDB is connected!\");\n    } catch (error) {\n        console.log(error);\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9tb25nb2RiL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxJQUFJQyxjQUFjO0FBRVgsTUFBTUMsY0FBYztJQUN6QkYsbURBQVksQ0FBQyxlQUFlO0lBQzVCLElBQUlDLGFBQWE7UUFDZkcsUUFBUUMsR0FBRyxDQUFDO1FBQ1o7SUFDRjtJQUVBLElBQUk7UUFDRixNQUFNTCx1REFBZ0IsQ0FBQ08sUUFBUUMsR0FBRyxDQUFDQyxVQUFVLEVBQUU7WUFDN0NDLFFBQVE7UUFDVjtRQUVBVCxjQUFjO1FBRWRHLFFBQVFDLEdBQUcsQ0FBQztJQUNkLEVBQUUsT0FBT00sT0FBTztRQUNkUCxRQUFRQyxHQUFHLENBQUNNO0lBQ2Q7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaGFsb2NoYXQvLi9tb25nb2RiL2luZGV4LmpzPzMyMDMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiO1xyXG5cclxubGV0IGlzQ29ubmVjdGVkID0gZmFsc2U7XHJcblxyXG5leHBvcnQgY29uc3QgQ29ubmVjdFRvREIgPSBhc3luYyAoKSA9PiB7XHJcbiAgbW9uZ29vc2Uuc2V0KFwic3RyaWN0UXVlcnlcIiwgdHJ1ZSk7XHJcbiAgaWYgKGlzQ29ubmVjdGVkKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcIk1vbmdvREIgaXMgYWxyZWFkeSBDb25uZWN0ZWRcIik7XHJcbiAgICByZXR1cm47XHJcbiAgfVxyXG5cclxuICB0cnkge1xyXG4gICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCVVJMLCB7XHJcbiAgICAgIGRiTmFtZTogXCJDbHVzdGVyMFwiLFxyXG4gICAgfSk7XHJcblxyXG4gICAgaXNDb25uZWN0ZWQgPSB0cnVlO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKFwiTW9uZ29EQiBpcyBjb25uZWN0ZWQhXCIpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmxvZyhlcnJvcik7XHJcbiAgfVxyXG59O1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJpc0Nvbm5lY3RlZCIsIkNvbm5lY3RUb0RCIiwic2V0IiwiY29uc29sZSIsImxvZyIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQlVSTCIsImRiTmFtZSIsImVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./mongodb/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/bcryptjs","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Chalochat%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5Cshahzaib%5CDesktop%5Chalochat&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();