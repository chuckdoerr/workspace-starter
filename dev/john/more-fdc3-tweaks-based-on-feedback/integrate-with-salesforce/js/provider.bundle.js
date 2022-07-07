/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../node_modules/@openfin/salesforce/openfin.salesforce.js":
/*!********************************************************************!*\
  !*** ../../node_modules/@openfin/salesforce/openfin.salesforce.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ApiError": () => (/* binding */ r),
/* harmony export */   "AuthorizationError": () => (/* binding */ o),
/* harmony export */   "ConnectionError": () => (/* binding */ s),
/* harmony export */   "ObjectDataError": () => (/* binding */ a),
/* harmony export */   "ParameterError": () => (/* binding */ c),
/* harmony export */   "QueryError": () => (/* binding */ d),
/* harmony export */   "RestApiError": () => (/* binding */ h),
/* harmony export */   "SearchError": () => (/* binding */ l),
/* harmony export */   "WorkspaceError": () => (/* binding */ u),
/* harmony export */   "connect": () => (/* binding */ p),
/* harmony export */   "disableLogging": () => (/* binding */ w),
/* harmony export */   "enableLogging": () => (/* binding */ f),
/* harmony export */   "getConnection": () => (/* binding */ y)
/* harmony export */ });
var e={9421:(e,t,n)=>{e.exports=n(8448)},994:(e,t,n)=>{var i=n(8446),r=n(8322),o=n(2058),s=n(8982),a=n(5063),c=n(9541),d=n(6497),h=n(2751),l=n(8916),u=n(5142),p=n(5822);e.exports=function(e){return new Promise((function(t,n){var w,f=e.data,y=e.headers,g=e.responseType;function m(){e.cancelToken&&e.cancelToken.unsubscribe(w),e.signal&&e.signal.removeEventListener("abort",w)}i.isFormData(f)&&i.isStandardBrowserEnv()&&delete y["Content-Type"];var v=new XMLHttpRequest;if(e.auth){var C=e.auth.username||"",E=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";y.Authorization="Basic "+btoa(C+":"+E)}var x=a(e.baseURL,e.url);function A(){if(v){var i="getAllResponseHeaders"in v?c(v.getAllResponseHeaders()):null,o={data:g&&"text"!==g&&"json"!==g?v.response:v.responseText,status:v.status,statusText:v.statusText,headers:i,config:e,request:v};r((function(e){t(e),m()}),(function(e){n(e),m()}),o),v=null}}if(v.open(e.method.toUpperCase(),s(x,e.params,e.paramsSerializer),!0),v.timeout=e.timeout,"onloadend"in v?v.onloadend=A:v.onreadystatechange=function(){v&&4===v.readyState&&(0!==v.status||v.responseURL&&0===v.responseURL.indexOf("file:"))&&setTimeout(A)},v.onabort=function(){v&&(n(new l("Request aborted",l.ECONNABORTED,e,v)),v=null)},v.onerror=function(){n(new l("Network Error",l.ERR_NETWORK,e,v,v)),v=null},v.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",i=e.transitional||h;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new l(t,i.clarifyTimeoutError?l.ETIMEDOUT:l.ECONNABORTED,e,v)),v=null},i.isStandardBrowserEnv()){var I=(e.withCredentials||d(x))&&e.xsrfCookieName?o.read(e.xsrfCookieName):void 0;I&&(y[e.xsrfHeaderName]=I)}"setRequestHeader"in v&&i.forEach(y,(function(e,t){void 0===f&&"content-type"===t.toLowerCase()?delete y[t]:v.setRequestHeader(t,e)})),i.isUndefined(e.withCredentials)||(v.withCredentials=!!e.withCredentials),g&&"json"!==g&&(v.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&v.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&v.upload&&v.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(w=function(e){v&&(n(!e||e&&e.type?new u:e),v.abort(),v=null)},e.cancelToken&&e.cancelToken.subscribe(w),e.signal&&(e.signal.aborted?w():e.signal.addEventListener("abort",w))),f||(f=null);var b=p(x);b&&-1===["http","https","file"].indexOf(b)?n(new l("Unsupported protocol "+b+":",l.ERR_BAD_REQUEST,e)):v.send(f)}))}},8448:(e,t,n)=>{var i=n(8446),r=n(8962),o=n(5495),s=n(6149),a=function e(t){var n=new o(t),a=r(o.prototype.request,n);return i.extend(a,o.prototype,n),i.extend(a,n),a.create=function(n){return e(s(t,n))},a}(n(1586));a.Axios=o,a.CanceledError=n(5142),a.CancelToken=n(543),a.isCancel=n(3452),a.VERSION=n(4474).version,a.toFormData=n(7452),a.AxiosError=n(8916),a.Cancel=a.CanceledError,a.all=function(e){return Promise.all(e)},a.spread=n(9067),a.isAxiosError=n(1726),e.exports=a,e.exports.default=a},543:(e,t,n)=>{var i=n(5142);function r(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var n=this;this.promise.then((function(e){if(n._listeners){var t,i=n._listeners.length;for(t=0;t<i;t++)n._listeners[t](e);n._listeners=null}})),this.promise.then=function(e){var t,i=new Promise((function(e){n.subscribe(e),t=e})).then(e);return i.cancel=function(){n.unsubscribe(t)},i},e((function(e){n.reason||(n.reason=new i(e),t(n.reason))}))}r.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},r.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},r.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},r.source=function(){var e;return{token:new r((function(t){e=t})),cancel:e}},e.exports=r},5142:(e,t,n)=>{var i=n(8916);function r(e){i.call(this,null==e?"canceled":e,i.ERR_CANCELED),this.name="CanceledError"}n(8446).inherits(r,i,{__CANCEL__:!0}),e.exports=r},3452:e=>{e.exports=function(e){return!(!e||!e.__CANCEL__)}},5495:(e,t,n)=>{var i=n(8446),r=n(8982),o=n(9582),s=n(6862),a=n(6149),c=n(5063),d=n(1166),h=d.validators;function l(e){this.defaults=e,this.interceptors={request:new o,response:new o}}l.prototype.request=function(e,t){"string"==typeof e?(t=t||{}).url=e:t=e||{},(t=a(this.defaults,t)).method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var n=t.transitional;void 0!==n&&d.assertOptions(n,{silentJSONParsing:h.transitional(h.boolean),forcedJSONParsing:h.transitional(h.boolean),clarifyTimeoutError:h.transitional(h.boolean)},!1);var i=[],r=!0;this.interceptors.request.forEach((function(e){"function"==typeof e.runWhen&&!1===e.runWhen(t)||(r=r&&e.synchronous,i.unshift(e.fulfilled,e.rejected))}));var o,c=[];if(this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)})),!r){var l=[s,void 0];for(Array.prototype.unshift.apply(l,i),l=l.concat(c),o=Promise.resolve(t);l.length;)o=o.then(l.shift(),l.shift());return o}for(var u=t;i.length;){var p=i.shift(),w=i.shift();try{u=p(u)}catch(e){w(e);break}}try{o=s(u)}catch(e){return Promise.reject(e)}for(;c.length;)o=o.then(c.shift(),c.shift());return o},l.prototype.getUri=function(e){e=a(this.defaults,e);var t=c(e.baseURL,e.url);return r(t,e.params,e.paramsSerializer)},i.forEach(["delete","get","head","options"],(function(e){l.prototype[e]=function(t,n){return this.request(a(n||{},{method:e,url:t,data:(n||{}).data}))}})),i.forEach(["post","put","patch"],(function(e){function t(t){return function(n,i,r){return this.request(a(r||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:i}))}}l.prototype[e]=t(),l.prototype[e+"Form"]=t(!0)})),e.exports=l},8916:(e,t,n)=>{var i=n(8446);function r(e,t,n,i,r){Error.call(this),this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),i&&(this.request=i),r&&(this.response=r)}i.inherits(r,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var o=r.prototype,s={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach((function(e){s[e]={value:e}})),Object.defineProperties(r,s),Object.defineProperty(o,"isAxiosError",{value:!0}),r.from=function(e,t,n,s,a,c){var d=Object.create(o);return i.toFlatObject(e,d,(function(e){return e!==Error.prototype})),r.call(d,e.message,t,n,s,a),d.name=e.name,c&&Object.assign(d,c),d},e.exports=r},9582:(e,t,n)=>{var i=n(8446);function r(){this.handlers=[]}r.prototype.use=function(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1},r.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},r.prototype.forEach=function(e){i.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=r},5063:(e,t,n)=>{var i=n(6452),r=n(1123);e.exports=function(e,t){return e&&!i(t)?r(e,t):t}},6862:(e,t,n)=>{var i=n(8446),r=n(5255),o=n(3452),s=n(1586),a=n(5142);function c(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a}e.exports=function(e){return c(e),e.headers=e.headers||{},e.data=r.call(e,e.data,e.headers,e.transformRequest),e.headers=i.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),i.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return c(e),t.data=r.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return o(t)||(c(e),t&&t.response&&(t.response.data=r.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},6149:(e,t,n)=>{var i=n(8446);e.exports=function(e,t){t=t||{};var n={};function r(e,t){return i.isPlainObject(e)&&i.isPlainObject(t)?i.merge(e,t):i.isPlainObject(t)?i.merge({},t):i.isArray(t)?t.slice():t}function o(n){return i.isUndefined(t[n])?i.isUndefined(e[n])?void 0:r(void 0,e[n]):r(e[n],t[n])}function s(e){if(!i.isUndefined(t[e]))return r(void 0,t[e])}function a(n){return i.isUndefined(t[n])?i.isUndefined(e[n])?void 0:r(void 0,e[n]):r(void 0,t[n])}function c(n){return n in t?r(e[n],t[n]):n in e?r(void 0,e[n]):void 0}var d={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,beforeRedirect:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return i.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=d[e]||o,r=t(e);i.isUndefined(r)&&t!==c||(n[e]=r)})),n}},8322:(e,t,n)=>{var i=n(8916);e.exports=function(e,t,n){var r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new i("Request failed with status code "+n.status,[i.ERR_BAD_REQUEST,i.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}},5255:(e,t,n)=>{var i=n(8446),r=n(1586);e.exports=function(e,t,n){var o=this||r;return i.forEach(n,(function(n){e=n.call(o,e,t)})),e}},1586:(e,t,n)=>{var i=n(8446),r=n(1964),o=n(8916),s=n(2751),a=n(7452),c={"Content-Type":"application/x-www-form-urlencoded"};function d(e,t){!i.isUndefined(e)&&i.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var h,l={transitional:s,adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(h=n(994)),h),transformRequest:[function(e,t){if(r(t,"Accept"),r(t,"Content-Type"),i.isFormData(e)||i.isArrayBuffer(e)||i.isBuffer(e)||i.isStream(e)||i.isFile(e)||i.isBlob(e))return e;if(i.isArrayBufferView(e))return e.buffer;if(i.isURLSearchParams(e))return d(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var n,o=i.isObject(e),s=t&&t["Content-Type"];if((n=i.isFileList(e))||o&&"multipart/form-data"===s){var c=this.env&&this.env.FormData;return a(n?{"files[]":e}:e,c&&new c)}return o||"application/json"===s?(d(t,"application/json"),function(e,t,n){if(i.isString(e))try{return(0,JSON.parse)(e),i.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||l.transitional,n=t&&t.silentJSONParsing,r=t&&t.forcedJSONParsing,s=!n&&"json"===this.responseType;if(s||r&&i.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(s){if("SyntaxError"===e.name)throw o.from(e,o.ERR_BAD_RESPONSE,this,null,this.response);throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:n(3313)},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};i.forEach(["delete","get","head"],(function(e){l.headers[e]={}})),i.forEach(["post","put","patch"],(function(e){l.headers[e]=i.merge(c)})),e.exports=l},2751:e=>{e.exports={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1}},4474:e=>{e.exports={version:"0.27.2"}},8962:e=>{e.exports=function(e,t){return function(){for(var n=new Array(arguments.length),i=0;i<n.length;i++)n[i]=arguments[i];return e.apply(t,n)}}},8982:(e,t,n)=>{var i=n(8446);function r(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,n){if(!t)return e;var o;if(n)o=n(t);else if(i.isURLSearchParams(t))o=t.toString();else{var s=[];i.forEach(t,(function(e,t){null!=e&&(i.isArray(e)?t+="[]":e=[e],i.forEach(e,(function(e){i.isDate(e)?e=e.toISOString():i.isObject(e)&&(e=JSON.stringify(e)),s.push(r(t)+"="+r(e))})))})),o=s.join("&")}if(o){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+o}return e}},1123:e=>{e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},2058:(e,t,n)=>{var i=n(8446);e.exports=i.isStandardBrowserEnv()?{write:function(e,t,n,r,o,s){var a=[];a.push(e+"="+encodeURIComponent(t)),i.isNumber(n)&&a.push("expires="+new Date(n).toGMTString()),i.isString(r)&&a.push("path="+r),i.isString(o)&&a.push("domain="+o),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},6452:e=>{e.exports=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}},1726:(e,t,n)=>{var i=n(8446);e.exports=function(e){return i.isObject(e)&&!0===e.isAxiosError}},6497:(e,t,n)=>{var i=n(8446);e.exports=i.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");function r(e){var i=e;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:"/"===n.pathname.charAt(0)?n.pathname:"/"+n.pathname}}return e=r(window.location.href),function(t){var n=i.isString(t)?r(t):t;return n.protocol===e.protocol&&n.host===e.host}}():function(){return!0}},1964:(e,t,n)=>{var i=n(8446);e.exports=function(e,t){i.forEach(e,(function(n,i){i!==t&&i.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[i])}))}},3313:e=>{e.exports=null},9541:(e,t,n)=>{var i=n(8446),r=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,n,o,s={};return e?(i.forEach(e.split("\n"),(function(e){if(o=e.indexOf(":"),t=i.trim(e.substr(0,o)).toLowerCase(),n=i.trim(e.substr(o+1)),t){if(s[t]&&r.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([n]):s[t]?s[t]+", "+n:n}})),s):s}},5822:e=>{e.exports=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}},9067:e=>{e.exports=function(e){return function(t){return e.apply(null,t)}}},7452:(e,t,n)=>{var i=n(8446);e.exports=function(e,t){t=t||new FormData;var n=[];function r(e){return null===e?"":i.isDate(e)?e.toISOString():i.isArrayBuffer(e)||i.isTypedArray(e)?"function"==typeof Blob?new Blob([e]):Buffer.from(e):e}return function e(o,s){if(i.isPlainObject(o)||i.isArray(o)){if(-1!==n.indexOf(o))throw Error("Circular reference detected in "+s);n.push(o),i.forEach(o,(function(n,o){if(!i.isUndefined(n)){var a,c=s?s+"."+o:o;if(n&&!s&&"object"==typeof n)if(i.endsWith(o,"{}"))n=JSON.stringify(n);else if(i.endsWith(o,"[]")&&(a=i.toArray(n)))return void a.forEach((function(e){!i.isUndefined(e)&&t.append(c,r(e))}));e(n,c)}})),n.pop()}else t.append(s,r(o))}(e),t}},1166:(e,t,n)=>{var i=n(4474).version,r=n(8916),o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));var s={};o.transitional=function(e,t,n){function o(e,t){return"[Axios v"+i+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return function(n,i,a){if(!1===e)throw new r(o(i," has been removed"+(t?" in "+t:"")),r.ERR_DEPRECATED);return t&&!s[i]&&(s[i]=!0,console.warn(o(i," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,i,a)}},e.exports={assertOptions:function(e,t,n){if("object"!=typeof e)throw new r("options must be an object",r.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(e),o=i.length;o-- >0;){var s=i[o],a=t[s];if(a){var c=e[s],d=void 0===c||a(c,s,e);if(!0!==d)throw new r("option "+s+" must be "+d,r.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new r("Unknown option "+s,r.ERR_BAD_OPTION)}},validators:o}},8446:(e,t,n)=>{var i,r=n(8962),o=Object.prototype.toString,s=(i=Object.create(null),function(e){var t=o.call(e);return i[t]||(i[t]=t.slice(8,-1).toLowerCase())});function a(e){return e=e.toLowerCase(),function(t){return s(t)===e}}function c(e){return Array.isArray(e)}function d(e){return void 0===e}var h=a("ArrayBuffer");function l(e){return null!==e&&"object"==typeof e}function u(e){if("object"!==s(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}var p=a("Date"),w=a("File"),f=a("Blob"),y=a("FileList");function g(e){return"[object Function]"===o.call(e)}var m=a("URLSearchParams");function v(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),c(e))for(var n=0,i=e.length;n<i;n++)t.call(null,e[n],n,e);else for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.call(null,e[r],r,e)}var C,E=(C="undefined"!=typeof Uint8Array&&Object.getPrototypeOf(Uint8Array),function(e){return C&&e instanceof C});e.exports={isArray:c,isArrayBuffer:h,isBuffer:function(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){var t="[object FormData]";return e&&("function"==typeof FormData&&e instanceof FormData||o.call(e)===t||g(e.toString)&&e.toString()===t)},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&h(e.buffer)},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:l,isPlainObject:u,isUndefined:d,isDate:p,isFile:w,isBlob:f,isFunction:g,isStream:function(e){return l(e)&&g(e.pipe)},isURLSearchParams:m,isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:v,merge:function e(){var t={};function n(n,i){u(t[i])&&u(n)?t[i]=e(t[i],n):u(n)?t[i]=e({},n):c(n)?t[i]=n.slice():t[i]=n}for(var i=0,r=arguments.length;i<r;i++)v(arguments[i],n);return t},extend:function(e,t,n){return v(t,(function(t,i){e[i]=n&&"function"==typeof t?r(t,n):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e},inherits:function(e,t,n,i){e.prototype=Object.create(t.prototype,i),e.prototype.constructor=e,n&&Object.assign(e.prototype,n)},toFlatObject:function(e,t,n){var i,r,o,s={};t=t||{};do{for(r=(i=Object.getOwnPropertyNames(e)).length;r-- >0;)s[o=i[r]]||(t[o]=e[o],s[o]=!0);e=Object.getPrototypeOf(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},kindOf:s,kindOfTest:a,endsWith:function(e,t,n){e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;var i=e.indexOf(t,n);return-1!==i&&i===n},toArray:function(e){if(!e)return null;var t=e.length;if(d(t))return null;for(var n=new Array(t);t-- >0;)n[t]=e[t];return n},isTypedArray:E,isFileList:y}},3885:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(4999),o=n(4794);class s extends i.Base{async wrap(e){this.wire.sendAction("wrap-application").catch((e=>{}));const t=r.validateIdentity(e);if(t)throw new Error(t);return new o.Application(this.wire,e)}wrapSync(e){this.wire.sendAction("wrap-application-sync").catch((e=>{}));const t=r.validateIdentity(e);if(t)throw new Error(t);return new o.Application(this.wire,e)}async _create(e){return void 0===e.waitForPageLoad&&(e.waitForPageLoad=!1),void 0===e.autoShow&&void 0===e.isPlatformController&&(e.autoShow=!0),await this.wire.sendAction("create-application",e),this.wrap({uuid:e.uuid})}create(e){return console.warn("Deprecation Warning: fin.Application.create is deprecated. Please use fin.Application.start"),this.wire.sendAction("application-create").catch((e=>{})),this._create(e)}async start(e){this.wire.sendAction("start-application").catch((e=>{}));const t=await this._create(e);return await this.wire.sendAction("run-application",{uuid:e.uuid}),t}async startManyManifests(e){return this.wire.sendAction("run-applications",{applications:e}).then((()=>{}))}getCurrent(){return this.wire.sendAction("get-current-application").catch((e=>{})),this.wrap({uuid:this.wire.me.uuid})}getCurrentSync(){return this.wire.sendAction("get-current-application-sync").catch((e=>{})),this.wrapSync({uuid:this.wire.me.uuid})}async startFromManifest(e,t){this.wire.sendAction("application-start-from-manifest").catch((e=>{}));const n=await this._createFromManifest(e);return await n._run(t),n}createFromManifest(e){return console.warn("Deprecation Warning: fin.Application.createFromManifest is deprecated. Please use fin.Application.startFromManifest"),this.wire.sendAction("application-create-from-manifest").catch((e=>{})),this._createFromManifest(e)}_createFromManifest(e){return this.wire.sendAction("get-application-manifest",{manifestUrl:e}).then((({payload:e})=>{const t=e.data.platform?e.data.platform.uuid:e.data.startup_app.uuid;return this.wrap({uuid:t})})).then((t=>(t._manifestUrl=e,t)))}}t.default=s},4794:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Application=void 0;const i=n(9659),r=n(4997),o=n(4169);class s extends i.EmitterBase{constructor(e,t){super(e,"application",t.uuid),this.identity=t,this.window=new r._Window(this.wire,{uuid:this.identity.uuid,name:this.identity.uuid})}windowListFromIdentityList(e){const t=[];return e.forEach((e=>{t.push(new r._Window(this.wire,{uuid:e.uuid,name:e.name}))})),t}isRunning(){return this.wire.sendAction("is-application-running",this.identity).then((({payload:e})=>e.data))}async quit(e=!1){await this._close(e),await this.wire.sendAction("destroy-application",{force:e,...this.identity})}_close(e=!1){return this.wire.sendAction("close-application",{force:e,...this.identity}).then((()=>{}))}close(e=!1){return console.warn("Deprecation Warning: Application.close is deprecated Please use Application.quit"),this.wire.sendAction("application-close",this.identity).catch((e=>{})),this._close(e)}getChildWindows(){return this.wire.sendAction("get-child-windows",this.identity).then((({payload:e})=>{const t=[];return e.data.forEach((e=>{t.push({uuid:this.identity.uuid,name:e})})),this.windowListFromIdentityList(t)}))}getManifest(){return this.wire.sendAction("get-application-manifest",this.identity).then((({payload:e})=>e.data))}getParentUuid(){return this.wire.sendAction("get-parent-application",this.identity).then((({payload:e})=>e.data))}getShortcuts(){return this.wire.sendAction("get-shortcuts",this.identity).then((({payload:e})=>e.data))}async getViews(){const{payload:e}=await this.wire.sendAction("application-get-views",this.identity);return e.data.map((e=>new o.View(this.wire,e)))}getZoomLevel(){return this.wire.sendAction("get-application-zoom-level",this.identity).then((({payload:e})=>e.data))}getWindow(){return this.wire.sendAction("application-get-window",this.identity).catch((e=>{})),Promise.resolve(this.window)}registerUser(e,t){return this.wire.sendAction("register-user",{userName:e,appName:t,...this.identity}).then((()=>{}))}removeTrayIcon(){return this.wire.sendAction("remove-tray-icon",this.identity).then((()=>{}))}restart(){return this.wire.sendAction("restart-application",this.identity).then((()=>{}))}run(){return console.warn("Deprecation Warning: Application.run is deprecated Please use fin.Application.start"),this.wire.sendAction("application-run",this.identity).catch((e=>{})),this._run()}_run(e={}){return this.wire.sendAction("run-application",{manifestUrl:this._manifestUrl,opts:e,...this.identity}).then((()=>{}))}scheduleRestart(){return this.wire.sendAction("relaunch-on-close",this.identity).then((()=>{}))}async sendApplicationLog(){const{payload:e}=await this.wire.sendAction("send-application-log",this.identity);return e.data}async setJumpList(e){await this.wire.sendAction("set-jump-list",{config:e,...this.identity})}setTrayIcon(e){return this.wire.sendAction("set-tray-icon",{enabledIcon:e,...this.identity}).then((()=>{}))}setShortcuts(e){return this.wire.sendAction("set-shortcuts",{data:e,...this.identity}).then((()=>{}))}async setShortcutQueryParams(e){await this.wire.sendAction("set-shortcut-query-args",{data:e,...this.identity})}setZoomLevel(e){return this.wire.sendAction("set-application-zoom-level",{level:e,...this.identity}).then((()=>{}))}async setAppLogUsername(e){await this.wire.sendAction("set-app-log-username",{data:e,...this.identity})}getTrayIconInfo(){return this.wire.sendAction("get-tray-icon-info",this.identity).then((({payload:e})=>e.data))}terminate(){return this.wire.sendAction("terminate-application",this.identity).then((()=>{}))}wait(){return this.wire.sendAction("wait-for-hung-application",this.identity).then((()=>{}))}getInfo(){return this.wire.sendAction("get-info",this.identity).then((({payload:e})=>e.data))}async getProcessInfo(){const{payload:{data:e}}=await this.wire.sendAction("application-get-process-info",this.identity);return e}async setFileDownloadLocation(e){await this.wire.sendAction("set-file-download-location",{downloadLocation:e,...this.identity})}}t.Application=s},7264:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(3885);r(n(4794),t),t.default=o.default},9659:function(e,t,n){var i,r=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},o=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Reply=t.EmitterBase=t.Base=void 0;const s=n(3442),a=n(8068);class c{constructor(e){this.isNodeEnvironment=()=>"NodeEnvironment"===this.wire.environment.constructor.name,this.isOpenFinEnvironment=()=>"OpenFinEnvironment"===this.wire.environment.constructor.name,this.wire=e}get fin(){return a.getFin(this.wire)}get me(){return this.wire.me}}t.Base=c,t.EmitterBase=class extends c{constructor(e,t,...n){super(e),this.topic=t,i.set(this,void 0),this.eventNames=()=>this.hasEmitter()?this.getOrCreateEmitter().eventNames():[],this.emit=(e,t,...n)=>!!this.hasEmitter()&&this.getOrCreateEmitter().emit(e,t,...n),this.hasEmitter=()=>this.wire.eventAggregator.has(o(this,i)),this.getOrCreateEmitter=()=>this.wire.eventAggregator.getOrCreate(o(this,i)),this.listeners=e=>this.hasEmitter()?this.getOrCreateEmitter().listeners(e):[],this.listenerCount=e=>this.hasEmitter()?this.getOrCreateEmitter().listenerCount(e):0,this.registerEventListener=async(e,t={},n,i)=>{const r={...this.identity,timestamp:t.timestamp||Date.now(),topic:this.topic,type:e},o=this.getOrCreateEmitter();n(o);try{await this.wire.sendAction("subscribe-to-desktop-event",r)}catch(e){throw i(o),this.deleteEmitterIfNothingRegistered(o),e}},this.deregisterEventListener=async(e,t={})=>{if(this.hasEmitter()){const n={...this.identity,timestamp:t.timestamp||Date.now(),topic:this.topic,type:e};return await this.wire.sendAction("unsubscribe-to-desktop-event",n).catch((()=>null)),this.getOrCreateEmitter()}return Promise.resolve()},this.on=async(e,t,n)=>(await this.registerEventListener(e,n,(n=>{n.on(e,t)}),(n=>{n.removeListener(e,t)})),this),this.addListener=this.on,this.once=async(e,t,n)=>{const i=()=>this.deregisterEventListener(e);return await this.registerEventListener(e,n,(n=>{n.once(e,i),n.once(e,t)}),(n=>{n.removeListener(e,i),n.removeListener(e,t)})),this},this.prependListener=async(e,t,n)=>(await this.registerEventListener(e,n,(n=>{n.prependListener(e,t)}),(n=>{n.removeListener(e,t)})),this),this.prependOnceListener=async(e,t,n)=>{const i=()=>this.deregisterEventListener(e);return await this.registerEventListener(e,n,(n=>{n.prependOnceListener(e,t),n.once(e,i)}),(n=>{n.removeListener(e,t),n.removeListener(e,i)})),this},this.removeListener=async(e,t,n)=>{const i=await this.deregisterEventListener(e,n);return i&&(i.removeListener(e,t),this.deleteEmitterIfNothingRegistered(i)),this},this.deregisterAllListeners=async e=>{const t={...this.identity,type:e,topic:this.topic};if(this.hasEmitter()){const e=this.getOrCreateEmitter(),n=e.listenerCount(t.type),i=[];for(let e=0;e<n;e++)i.push(this.wire.sendAction("unsubscribe-to-desktop-event",t).catch((()=>null)));return await Promise.all(i),e}},this.removeAllListeners=async e=>{const t=async e=>{const t=await this.deregisterAllListeners(e);t&&(t.removeAllListeners(e),this.deleteEmitterIfNothingRegistered(t))};if(e)await t(e);else if(this.hasEmitter()){const e=this.getOrCreateEmitter().eventNames();await s.promiseMap(e,t)}return this},r(this,i,[t,...n]),this.listeners=e=>this.hasEmitter()?this.getOrCreateEmitter().listeners(e):[]}deleteEmitterIfNothingRegistered(e){0===e.eventNames().length&&this.wire.eventAggregator.delete(o(this,i))}},i=new WeakMap,t.Reply=class{}},3427:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659);class r extends i.Base{writeText(e){return this.wire.sendAction("clipboard-write-text",e).then((()=>{}))}readText(e){return this.wire.sendAction("clipboard-read-text",e).then((({payload:e})=>e.data))}writeHtml(e){return this.wire.sendAction("clipboard-write-html",e).then((()=>{}))}readHtml(e){return this.wire.sendAction("clipboard-read-html",e).then((({payload:e})=>e.data))}writeRtf(e){return this.wire.sendAction("clipboard-write-rtf",e).then((()=>{}))}readRtf(e){return this.wire.sendAction("clipboard-read-rtf",e).then((({payload:e})=>e.data))}write(e){return this.wire.sendAction("clipboard-write",e).then((()=>{}))}getAvailableFormats(e){return this.wire.sendAction("clipboard-read-formats",e).then((({payload:e})=>e.data))}}t.default=r},7813:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.EmitterMap=void 0;const i=n(6465);function r(e){return Buffer.from(e).toString("base64")}t.EmitterMap=class{constructor(){this.storage=new Map}hashKeys(e){return e.map(r).join("/")}getOrCreate(e){const t=this.hashKeys(e);return this.storage.has(t)||this.storage.set(t,new i.EventEmitter),this.storage.get(t)}has(e){return this.storage.has(this.hashKeys(e))}delete(e){const t=this.hashKeys(e);return this.storage.delete(t)}}},2734:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(7813);class r extends i.EmitterMap{constructor(){super(...arguments),this.dispatchEvent=e=>{if(function(e){return"process-desktop-event"===e.action}(e)){const{payload:t}=e,n=function(e){const{topic:t}=e;if("frame"===t){const{uuid:n,name:i}=e;return[t,n,i]}if("window"===t){const{uuid:n,name:i}=e;return[t,n,i]}if("application"===t){const{uuid:n}=e;return[t,n]}if("view"===t){const{uuid:n,name:i}=e;return[t,n,i]}return[t]}(t);if(this.has(n))return this.getOrCreate(n).emit(t.type,t),!0}return!1}}}t.default=r},7168:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(8298);class o extends i.Base{wrap(e){return this.wire.sendAction("external-application-wrap").catch((e=>{})),Promise.resolve(new r.ExternalApplication(this.wire,{uuid:e}))}wrapSync(e){return this.wire.sendAction("external-application-wrap-sync").catch((e=>{})),new r.ExternalApplication(this.wire,{uuid:e})}}t.default=o},8298:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ExternalApplication=void 0;const i=n(9659);class r extends i.EmitterBase{constructor(e,t){super(e,"external-application",t.uuid),this.identity=t}getInfo(){return this.wire.sendAction("get-external-application-info",this.identity).then((({payload:e})=>e.data))}}t.ExternalApplication=r},9021:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(7168);t.default=o.default,r(n(8298),t)},6545:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(6465),r=n(3641),o=n(4997),s=n(7264),a=n(8347),c=n(3427),d=n(9021),h=n(6720),l=n(9211),u=n(4169),p=n(609),w=n(9641),f=n(8068),y=n(8706),g=n(7153);class m extends i.EventEmitter{constructor(e){super(),f.registerFin(e,this),this.wire=e,this.System=new r.default(e),this.Window=new o.default(e),this.Application=new s.default(e),this.InterApplicationBus=new a.default(e),this.Clipboard=new c.default(e),this.ExternalApplication=new d.default(e),this.Frame=new h.default(e),this.GlobalHotkey=new l.default(e),this.Platform=new p.default(e,this.InterApplicationBus.Channel),this.View=new u.default(e),this.Interop=new y.default(e),this.SnapshotSource=new g.default(e),this.me=w.getMe(e),e.on("disconnected",(()=>{this.emit("disconnected")}))}}t.default=m},1778:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(4999),o=n(8161);class s extends i.Base{async wrap(e){this.wire.sendAction("frame-wrap").catch((e=>{}));const t=r.validateIdentity(e);if(t)throw new Error(t);return new o._Frame(this.wire,e)}wrapSync(e){this.wire.sendAction("frame-wrap-sync").catch((e=>{}));const t=r.validateIdentity(e);if(t)throw new Error(t);return new o._Frame(this.wire,e)}getCurrent(){return this.wire.sendAction("frame-get-current").catch((e=>{})),Promise.resolve(new o._Frame(this.wire,this.wire.environment.getCurrentEntityIdentity()))}getCurrentSync(){return this.wire.sendAction("frame-get-current-sync").catch((e=>{})),new o._Frame(this.wire,this.wire.environment.getCurrentEntityIdentity())}}t.default=s},8161:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t._Frame=void 0;const i=n(9659);class r extends i.EmitterBase{constructor(e,t){super(e,"frame",t.uuid,t.name),this.identity=t}getInfo(){return this.wire.sendAction("get-frame-info",this.identity).then((({payload:e})=>e.data))}getParentWindow(){return this.wire.sendAction("get-parent-window",this.identity).then((({payload:e})=>e.data))}}t._Frame=r},6720:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(1778);t.default=o.default,r(n(8161),t)},9211:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659);class r extends i.EmitterBase{constructor(e){super(e,"global-hotkey")}async register(e,t){await this.on(e,t),await this.wire.sendAction("global-hotkey-register",{hotkey:e})}async unregister(e){await this.removeAllListeners(e),await this.wire.sendAction("global-hotkey-unregister",{hotkey:e})}async unregisterAll(){await Promise.all(this.eventNames().filter((e=>!("registered"===e||"unregistered"===e))).map((e=>this.removeAllListeners(e)))),await this.wire.sendAction("global-hotkey-unregister-all",{})}async isRegistered(e){const{payload:{data:t}}=await this.wire.sendAction("global-hotkey-is-registered",{hotkey:e});return t}}t.default=r},7539:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ChannelBase=t.ProtectedItems=void 0;const n=e=>(t,n,i)=>{const r=e(t,n,i);return void 0===r?n:r};t.ProtectedItems=class{constructor(e,t){this.providerIdentity=e,this.wire=t}};class i{constructor(){this.subscriptions=new Map}static defaultAction(e){throw new Error(`No action registered at target for ${e}`)}async processAction(e,t,n){try{const r=this.subscriptions.has(e)?this.subscriptions.get(e):(t,n)=>{var r;return(null!==(r=this.defaultAction)&&void 0!==r?r:i.defaultAction)(e,t,n)},o=this.preAction?await this.preAction(e,t,n):t,s=await r(o,n);return this.postAction?await this.postAction(e,s,n):s}catch(t){if(this.errorMiddleware)return this.errorMiddleware(e,t,n);throw t}}beforeAction(e){if(this.preAction)throw new Error("Already registered beforeAction middleware");this.preAction=n(e)}onError(e){if(this.errorMiddleware)throw new Error("Already registered error middleware");this.errorMiddleware=e}afterAction(e){if(this.postAction)throw new Error("Already registered afterAction middleware");this.postAction=n(e)}remove(e){this.subscriptions.delete(e)}setDefaultAction(e){if(this.defaultAction)throw new Error("default action can only be set once");this.defaultAction=e}register(e,t){if(this.subscriptions.has(e))throw new Error(`Subscription already registered for action: ${e}. Unsubscribe before adding new subscription`);return this.subscriptions.set(e,t),!0}}t.ChannelBase=i},8378:function(e,t,n){var i,r,o,s=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},a=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0});const c=n(7539),d=new Map;class h extends c.ChannelBase{constructor(e,t,n){super(),i.set(this,void 0),r.set(this,void 0),this.processAction=(e,t,n)=>super.processAction(e,t,n),o.set(this,(()=>{d.delete(this.endpointId),a(this,r).close()})),s(this,i,new c.ProtectedItems(e,t)),this.disconnectListener=()=>{},this.endpointId=e.endpointId,s(this,r,n),d.set(this.endpointId,this),n.receive(this.processAction)}static closeChannelByEndpointId(e){const t=d.get(e);t&&a(t,o).call(t)}static handleProviderDisconnect(e,t){e.disconnectListener(t),a(e,o).call(e)}get providerIdentity(){return a(this,i).providerIdentity}async dispatch(e,t){if(a(this,r).isEndpointConnected(this.providerIdentity.channelId))return a(this,r).send(this.providerIdentity.channelId,e,t);throw new Error("The client you are trying to dispatch from is disconnected from the target provider.")}onDisconnection(e){this.disconnectListener=t=>{try{e(t)}catch(e){throw new Error(`Error while calling the onDisconnection callback: ${e.message}`)}finally{this.disconnectListener=()=>{}}}}async disconnect(){const e=a(this,i),{channelName:t,uuid:n,name:r}=e.providerIdentity;await e.wire.sendAction("disconnect-from-channel",{channelName:t,uuid:n,name:r,endpointId:this.endpointId}),a(this,o).call(this)}}t.default=h,i=new WeakMap,r=new WeakMap,o=new WeakMap},6711:function(e,t,n){var i,r,o=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},s=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.ConnectionManager=void 0;const a=n(3917),c=n(9659),d=n(1046),h=n(3870),l=n(569),u=n(2942),p=n(3749),w=n(3037),f=n(7113);class y extends c.Base{constructor(e){super(e),i.set(this,void 0),r.set(this,void 0),this.removeChannelFromProviderMap=e=>{this.providerMap.delete(e)},this.onmessage=e=>"process-channel-connection"===e.action&&(this.processChannelConnection(e),!0),this.providerMap=new Map,this.protocolManager=new w.ProtocolManager(this.isNodeEnvironment()?["classic"]:["rtc","classic"]),o(this,i,new p.MessageReceiver(e)),o(this,r,new l.RTCICEManager(e)),e.registerMessageHandler(this.onmessage.bind(this))}static getProtocolOptionsFromStrings(e){return e.map((e=>{switch(e){case"rtc":return h.RTCInfo;case"classic":return d.ClassicInfo;default:return a.exhaustiveCheck(e,["rtc","classic"])}}))}createProvider(e,t){const n=Object.assign(this.wire.environment.getDefaultChannelOptions().create,e||{}),r=this.protocolManager.getProviderProtocols(null==n?void 0:n.protocols),o=r.map((e=>{switch(e){case"rtc":return new h.RTCStrategy;case"classic":return new d.ClassicStrategy(this.wire,s(this,i),t.channelId,t);default:return a.exhaustiveCheck(e,["rtc","classic"])}}));let c;if(2===o.length){const[e,t]=o;c=f.default.combine(e,t)}else{if(1!==o.length)throw new Error("failed to combine strategies");[c]=o}const l=new u.ChannelProvider(t,this.wire,c),p=t.channelId;return this.providerMap.set(p,{provider:l,strategy:c,supportedProtocols:y.getProtocolOptionsFromStrings(r)}),u.ChannelProvider.setProviderRemoval(l,this.removeChannelFromProviderMap.bind(this)),l}async createClientOffer(e){const t=this.protocolManager.getClientProtocols(null==e?void 0:e.protocols);let n;return{offer:{supportedProtocols:await Promise.all(t.map((async e=>{switch(e){case"rtc":{const{rtcClient:e,channels:t,offer:i,rtcConnectionId:o,channelsOpened:a}=await s(this,r).startClientOffer();return n={rtcClient:e,channels:t,channelsOpened:a},{type:"rtc",version:h.RTCInfo.version,payload:{offer:i,rtcConnectionId:o}}}case"classic":return{type:"classic",version:d.ClassicInfo.version};default:return a.exhaustiveCheck(e,["rtc","classic"])}}))),maxProtocols:2},rtc:n}}async createClientStrategy(e,t){var n;t.endpointId||(t.endpointId=this.wire.environment.getNextMessageId(),s(this,i).checkForPreviousClientConnection(t.channelId));const o=null!==(n=t.answer)&&void 0!==n?n:{supportedProtocols:[{type:"classic",version:1}]},a=(await Promise.all(o.supportedProtocols.map((async n=>"rtc"===n.type&&e?(await s(this,r).finishClientOffer(e.rtcClient,n.payload.answer,e.channelsOpened),new h.RTCStrategy):"classic"===n.type?new d.ClassicStrategy(this.wire,s(this,i),t.endpointId,t):null)))).filter((e=>null!==e));let c;if(e&&!a.some((e=>e instanceof h.RTCStrategy))&&e&&e.rtcClient.close(),a.length>=2)c=f.default.combine(a[0],a[1]);else{if(!a.length)throw new Error("No compatible protocols");[c]=a}const l={endpointIdentity:t,rtc:e};return c.addEndpoint(t.channelId,l),c}async processChannelConnection(e){const{clientIdentity:t,providerIdentity:n,ackToSender:i,payload:o,offer:a}=e.payload;t.endpointId?t.isLocalEndpointId=!1:(t.endpointId=this.wire.environment.getNextMessageId(),t.isLocalEndpointId=!0);const c=n.channelId,l=this.providerMap.get(c);if(!l)return i.payload.success=!1,i.payload.reason=`Channel "${n.channelName}" has been destroyed.`,this.wire.sendRaw(i);const{provider:p,strategy:w,supportedProtocols:f}=l;try{if(!(p instanceof u.ChannelProvider))throw Error("Cannot connect to a channel client");const e=null!=a?a:{supportedProtocols:[{type:"classic",version:1}],maxProtocols:1},n=this.protocolManager.getCompatibleProtocols(f,e);if(!n.length)throw new Error("This provider does not support any of the offered protocols.");const c=await p.processConnection(t,o);i.payload.payload=i.payload.payload||{};let l={supportedProtocols:[],endpointPayloadPromise:Promise.resolve({endpointIdentity:t})};return l=await n.reduce((async(e,t)=>{const n=await e;if("rtc"===t.type){const{answer:e,rtcClient:i,channels:o}=await s(this,r).createProviderAnswer(t.payload.rtcConnectionId,t.payload.offer);n.supportedProtocols.push({type:"rtc",version:h.RTCInfo.version,payload:{answer:e}}),n.endpointPayloadPromise=n.endpointPayloadPromise.then((e=>o.then((t=>({...e,rtc:{rtcClient:i,channels:t}})))))}else n.supportedProtocols.push({type:"classic",version:d.ClassicInfo.version});return n}),Promise.resolve(l)),l.endpointPayloadPromise.then((e=>w.addEndpoint(t.endpointId,e))),i.payload.payload.result=c,i.payload.payload.answer=l,this.wire.sendRaw(i)}catch(e){return i.payload.success=!1,i.payload.reason=e.message,this.wire.sendRaw(i)}}}t.ConnectionManager=y,i=new WeakMap,r=new WeakMap},7722:function(e,t,n){var i,r=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},o=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Channel=void 0;const s=n(8378),a=n(2942),c=n(9659),d=n(6711),h=()=>{};class l extends c.EmitterBase{constructor(e){super(e,"channel"),i.set(this,void 0),r(this,i,new d.ConnectionManager(e))}async getAllChannels(){return this.wire.sendAction("get-all-channels").then((({payload:e})=>e.data))}async onChannelConnect(e){await this.on("connected",e)}async onChannelDisconnect(e){await this.on("disconnected",e)}async connect(e,t){if(!e||"string"!=typeof e)throw new Error("Please provide a channelName string to connect to a channel.");const n=Object.assign(this.wire.environment.getDefaultChannelOptions().connect,t||{});let r=h,a=h;const c=new Promise((t=>{r=t,a=i=>{e===i.channelName&&(this.removeListener("connected",a),t(this.connect(e,n)))},this.on("connected",a)}));try{const{offer:t,rtc:c}=await o(this,i).createClientOffer(n),d=await this.wire.sendAction("connect-to-channel",{channelName:e,...n,offer:t}),{payload:{data:h}}=d;r&&r(),this.removeListener("connected",a);const l=await o(this,i).createClientStrategy(c,h),u=new s.default(h,this.wire,l);return l.onEndpointDisconnect(h.channelId,(async()=>{try{await u.disconnect()}catch(e){console.warn(`Something went wrong during disconnect for client with uuid: ${h.uuid} / name: ${h.name} / endpointId: ${h.endpointId}.`)}finally{s.default.handleProviderDisconnect(u,h)}})),this.on("disconnected",(t=>{t.channelName===e&&s.default.handleProviderDisconnect(u,t)})),u}catch(t){const i="internal-nack";if({wait:!0,...n}.wait&&t.message&&t.message.includes(i))return console.warn(`Channel not found for channelName: ${e}, waiting for channel connection.`),c;throw t.message===i?new Error(`No channel found for channelName: ${e}`):new Error(t)}}async create(e,t){if(!e)throw new Error("Please provide a channelName to create a channel");const{payload:{data:n}}=await this.wire.sendAction("create-channel",{channelName:e}),r=o(this,i).createProvider(t,n);return this.on("client-disconnected",(t=>{t.channelName===e&&a.ChannelProvider.handleClientDisconnection(r,t)})),r}}t.Channel=l,i=new WeakMap},3749:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MessageReceiver=void 0;const i=n(8378),r=n(9659);class o extends r.Base{constructor(e){super(e),this.onmessage=e=>"process-channel-message"===e.action&&(this.processChannelMessage(e),!0),this.endpointMap=new Map,this.latestEndpointIdByChannelId=new Map,e.registerMessageHandler(this.onmessage.bind(this))}async processChannelMessage(e){var t,n;const{senderIdentity:i,providerIdentity:r,action:o,ackToSender:s,payload:a,intendedTargetIdentity:c}=e.payload,d=null!==(n=null!==(t=c.channelId)&&void 0!==t?t:c.endpointId)&&void 0!==n?n:this.latestEndpointIdByChannelId.get(r.channelId),h=this.endpointMap.get(d);if(!h)return s.payload.success=!1,s.payload.reason=`Client connection with identity uuid: ${this.wire.me.uuid} / name: ${this.wire.me.name} / endpointId: ${d} no longer connected.`,this.wire.sendRaw(s);try{const e=await h(o,a,i);return s.payload.payload=s.payload.payload||{},s.payload.payload.result=e,this.wire.sendRaw(s)}catch(e){return s.payload.success=!1,s.payload.reason=e.message,this.wire.sendRaw(s)}}addEndpoint(e,t,n){this.endpointMap.set(n,e),t!==n&&this.latestEndpointIdByChannelId.set(t,n)}removeEndpoint(e,t){this.endpointMap.delete(t),this.latestEndpointIdByChannelId.get(e)===t&&this.latestEndpointIdByChannelId.delete(e)}checkForPreviousClientConnection(e){const t=this.latestEndpointIdByChannelId.get(e);t&&(i.default.closeChannelByEndpointId(t),console.warn("You have created a second connection to an older provider. First connection has been removed from the clientMap"),console.warn("If the provider calls publish(), you may receive multiple messages."))}}t.MessageReceiver=o},1046:function(e,t){var n,i,r=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},o=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.ClassicInfo=t.ClassicStrategy=void 0,t.ClassicStrategy=class{constructor(e,t,s,a){this.messageReceiver=t,this.endpointId=s,this.providerIdentity=a,n.set(this,void 0),i.set(this,new Map),this.send=async(e,t,r)=>{const s=o(this,i).get(e);if(!s)throw new Error(`Could not locate routing info for endpoint ${e}`);const a={...s};return a.isLocalEndpointId&&delete a.endpointId,delete a.isLocalEndpointId,(await o(this,n).sendAction("send-channel-message",{...a,providerIdentity:this.providerIdentity,action:t,payload:r}).catch((e=>{throw new Error(e.message)}))).payload.data.result},this.close=async()=>{this.messageReceiver.removeEndpoint(this.providerIdentity.channelId,this.endpointId),r(this,i,new Map)},r(this,n,e)}onEndpointDisconnect(e,t){}receive(e){this.messageReceiver.addEndpoint(e,this.providerIdentity.channelId,this.endpointId)}async closeEndpoint(e){o(this,i).delete(e)}isEndpointConnected(e){return o(this,i).has(e)}addEndpoint(e,t){o(this,i).set(e,t.endpointIdentity)}isValidEndpointPayload(e){var t,n;return"string"==typeof(null===(t=null==e?void 0:e.endpointIdentity)||void 0===t?void 0:t.endpointId)||"string"==typeof(null===(n=null==e?void 0:e.endpointIdentity)||void 0===n?void 0:n.channelId)}},n=new WeakMap,i=new WeakMap,t.ClassicInfo={version:5,minimumVersion:0,type:"classic"}},7113:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(e,t){this.primary=e,this.secondary=t}static combine(e,t){return new n(e,t)}onEndpointDisconnect(e,t){this.primary.onEndpointDisconnect(e,(()=>{this.secondary.isEndpointConnected(e)||t()})),this.secondary.onEndpointDisconnect(e,(()=>{this.primary.isEndpointConnected(e)||t()}))}isValidEndpointPayload(e){return this.primary.isValidEndpointPayload(e)||this.secondary.isValidEndpointPayload(e)}async closeEndpoint(e){await this.primary.closeEndpoint(e),await this.secondary.closeEndpoint(e)}isEndpointConnected(e){return this.primary.isEndpointConnected(e)||this.secondary.isEndpointConnected(e)}async addEndpoint(e,t){this.primary.isValidEndpointPayload(t)&&await this.primary.addEndpoint(e,t),this.secondary.isValidEndpointPayload(t)&&await this.secondary.addEndpoint(e,t)}receive(e){this.primary.receive(e),this.secondary.receive(e)}send(e,t,n){return this.primary.isEndpointConnected(e)?this.primary.send(e,t,n):this.secondary.send(e,t,n)}async close(){await Promise.all([this.primary.close(),this.secondary.close()])}}t.default=n},3037:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ProtocolManager=void 0,t.ProtocolManager=class{constructor(e){this.ProtocolsInPreferenceOrder=e,this.DefaultClientProtocols=["classic"],this.DefaultProviderProtocols=["classic"],this.getClientProtocols=e=>{const t=e?this.ProtocolsInPreferenceOrder.filter((t=>e.includes(t))):this.DefaultClientProtocols;if(!t.length)throw new Error(`No valid protocols were passed in. Accepted values are: ${this.ProtocolsInPreferenceOrder.join(", ")}.`);return t},this.getProviderProtocols=e=>{const t=e?this.ProtocolsInPreferenceOrder.filter((t=>e.includes(t))):this.DefaultProviderProtocols;if(!t.length)throw new Error(`No valid protocols were passed in. Accepted values are: ${this.ProtocolsInPreferenceOrder.join(", ")}.`);return t},this.getCompatibleProtocols=(e,t)=>t.supportedProtocols.filter((t=>e.some((e=>{var n;return e.type===t.type&&t.version>=e.minimumVersion&&e.version>=(null!==(n=t.minimumVersion)&&void 0!==n?n:0)})))).slice(0,t.maxProtocols)}}},8776:function(e,t,n){var i,r,o=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},s=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n};Object.defineProperty(t,"__esModule",{value:!0}),t.RTCEndpoint=void 0;const a=n(2366);t.RTCEndpoint=class{constructor(e,t){this.rtc=e,this.endpointIdentity=t,this.responseMap=new Map,i.set(this,null),r.set(this,void 0),this.connectionStateChangeHandler=e=>{"connected"!==this.rtc.rtcClient.connectionState&&(this.rtc.rtcClient.removeEventListener("connectionstatechange",this.connectionStateChangeHandler),this.close(),o(this,r)&&o(this,r).call(this))},this.send=async(e,t)=>{const n=`message-${Math.random()}`,i=new Promise(((e,t)=>{this.responseMap.set(n,{resolve:e,reject:t})}));return this.rtc.channels.request.send(JSON.stringify({action:e,payload:t,messageId:n})),i},this.close=()=>{this.responseMap.forEach((e=>e.reject("Connection has closed."))),this.responseMap=new Map,this.rtc.channels.request.close(),this.rtc.channels.response.close(),this.rtc.rtcClient.close()},this.rtc.channels.response.addEventListener("message",(e=>{var t;const{messageId:n,payload:i,success:r,error:o}=JSON.parse(e.data),{resolve:s,reject:a}=null!==(t=this.responseMap.get(n))&&void 0!==t?t:{};s&&a?(this.responseMap.delete(n),r?s(i):a(o)):(console.log("Could not find id in responseMap."),console.log(e))})),this.rtc.channels.request.addEventListener("message",(async e=>{const{messageId:n,action:r,payload:s}=JSON.parse(e.data);if(o(this,i))try{const e=await o(this,i).call(this,r,s,t);this.rtc.channels.response.send(JSON.stringify({messageId:n,payload:e,success:!0}))}catch(e){"open"===this.rtc.channels.response.readyState&&this.rtc.channels.response.send(JSON.stringify({messageId:n,error:a.errorToPOJO(e),success:!1}))}else"open"===this.rtc.channels.response.readyState&&this.rtc.channels.response.send(JSON.stringify({messageId:n,success:!1,error:"Connection not ready."}))})),this.rtc.rtcClient.addEventListener("connectionstatechange",this.connectionStateChangeHandler),Object.values(this.rtc.channels).forEach((e=>{e.onclose=e=>{[...this.responseMap.values()].forEach((e=>e.reject(new Error("RTCDataChannel closed unexpectedly, this is most commonly caused by message size. Note: RTC Channels have a message size limit of ~255kB.")))),this.close(),o(this,r)&&o(this,r).call(this)}}))}onDisconnect(e){if(o(this,r))throw new Error("RTCEndpoint disconnectListener cannot be set twice.");s(this,r,e)}receive(e){if(o(this,i))throw new Error("You have already set a listener for this RTC Endpoint.");s(this,i,e)}get connected(){return"connected"===this.rtc.rtcClient.connectionState}},i=new WeakMap,r=new WeakMap},569:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RTCICEManager=void 0;const i=n(9659);class r extends i.EmitterBase{constructor(e){super(e,"channel"),this.ensureChannelOpened=e=>new Promise(((t,n)=>{if("open"===e.readyState)t();else if("connecting"===e.readyState){const n=()=>{e.removeEventListener("open",n),t()};e.addEventListener("open",n)}else n(new Error("This Channel has already closed"))}))}static createDataChannelPromise(e,t){let n;const i=new Promise((e=>{n=e})),r=i=>{const o=()=>{i.channel.removeEventListener("open",o),n(i.channel)};i.channel.label===e&&(i.channel.addEventListener("open",o),t.removeEventListener("datachannel",r))};return t.addEventListener("datachannel",r),i}async listenForProviderIce(e,t){await this.on(this.createProviderEventName(e),t,{timestamp:Date.now()})}async raiseProviderIce(e,t){await this.wire.environment.raiseEvent(this.createRouteString(this.createProviderEventName(e)),t)}async listenForClientIce(e,t){await this.on(this.createClientEventName(e),t,{timestamp:Date.now()})}async raiseClientIce(e,t){await this.wire.environment.raiseEvent(this.createRouteString(this.createClientEventName(e)),t)}cleanupIceListeners(e){this.removeAllListeners(this.createClientEventName(e)),this.removeAllListeners(this.createProviderEventName(e))}createClientEventName(e){return`ice-client-${e}`}createProviderEventName(e){return`ice-provider-${e}`}createRouteString(e){return`channel/${e}`}createRtcPeer(){return this.wire.environment.getRtcPeer()}async startClientOffer(){const e=Math.random().toString(),t=this.createRtcPeer();t.addEventListener("icecandidate",(async t=>{var n;t.candidate&&await this.raiseClientIce(e,{candidate:null===(n=t.candidate)||void 0===n?void 0:n.toJSON()})})),await this.listenForProviderIce(e,(async e=>{await t.addIceCandidate(e.candidate)}));const n={request:t.createDataChannel("request"),response:t.createDataChannel("response")},i=await t.createOffer();await t.setLocalDescription(i);const r=Promise.all([n.request,n.response].map(this.ensureChannelOpened)).then((()=>{}));return{rtcClient:t,channels:n,offer:i,rtcConnectionId:e,channelsOpened:r}}async finishClientOffer(e,t,n){return await e.setRemoteDescription(t),await n,!0}async createProviderAnswer(e,t){const n=this.createRtcPeer(),i=r.createDataChannelPromise("request",n),o=r.createDataChannelPromise("response",n);n.addEventListener("icecandidate",(async t=>{var n;t.candidate&&await this.raiseProviderIce(e,{candidate:null===(n=t.candidate)||void 0===n?void 0:n.toJSON()})})),await this.listenForClientIce(e,(async e=>{await n.addIceCandidate(e.candidate)})),await n.setRemoteDescription(t);const s=await n.createAnswer();await n.setLocalDescription(s);const a=Promise.all([i,o]).then((([t,n])=>(this.cleanupIceListeners(e),{request:t,response:n})));return{rtcClient:n,answer:s,channels:a}}}t.RTCICEManager=r},3870:function(e,t,n){var i,r,o,s=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},a=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n};Object.defineProperty(t,"__esModule",{value:!0}),t.RTCInfo=t.RTCStrategy=void 0;const c=n(8776);t.RTCStrategy=class{constructor(){i.set(this,null),r.set(this,new Map),o.set(this,!0),this.send=async(e,t,n)=>this.getEndpointById(e).send(t,n),this.close=async()=>{s(this,o)&&(s(this,r).forEach((e=>e.close())),a(this,r,new Map)),a(this,o,!1)}}onEndpointDisconnect(e,t){this.getEndpointById(e).onDisconnect(t)}receive(e){if(s(this,i))throw new Error("You have already set a listener for this RTC Strategy");a(this,i,e),s(this,r).forEach((e=>e.receive(s(this,i))))}getEndpointById(e){const t=s(this,r).get(e);if(!t)throw new Error(`Client with endpoint id ${e} is not connected`);return t}get connected(){return s(this,o)}isEndpointConnected(e){return s(this,r).has(e)}addEndpoint(e,t){if(!s(this,o))return void console.warn("Adding endpoint to disconnected RTC Strategy");const n=new c.RTCEndpoint(t.rtc,t.endpointIdentity);s(this,i)&&n.receive(s(this,i)),s(this,r).set(e,n)}async closeEndpoint(e){s(this,r).delete(e)}isValidEndpointPayload(e){const t=e=>"object"==typeof e&&null!==e;return t(e)&&t(e.endpointIdentity)&&t(e.rtc)&&"string"==typeof e.endpointIdentity.endpointId}},i=new WeakMap,r=new WeakMap,o=new WeakMap,t.RTCInfo={version:1,minimumVersion:0,type:"rtc"}},2942:function(e,t,n){var i=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},r=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.ChannelProvider=void 0;const o=n(7539),s=n(2300);let a=(()=>{var e,t,n,a,c;class d extends o.ChannelBase{constructor(h,l,u){super(),e.set(this,void 0),t.set(this,void 0),n.set(this,void 0),a.set(this,(t=>{const o=this.connections.filter((e=>e.endpointId!==t.endpointId));r(this,n).closeEndpoint(t.endpointId),i(this,e,o)})),this.processAction=async(e,t,n)=>(d.clientIsMultiRuntime(n)&&!s.runtimeUuidMeetsMinimumRuntimeVersion(n.runtimeUuid,"18.87.56.0")?this.handleMultiRuntimeLegacyClient(n):this.checkForClientConnection(n),super.processAction(e,t,n)),c.set(this,(()=>{r(this,n).close();const e=d.removalMap.get(this);e&&e()})),i(this,t,new o.ProtectedItems(h,l)),this.connectListener=()=>{},this.disconnectListener=()=>{},i(this,e,[]),i(this,n,u),u.receive(this.processAction)}get connections(){return[...r(this,e)]}static handleClientDisconnection(e,t){const n=e.connections.find((e=>e.endpointId===t.endpointId));n?r(e,a).call(e,n):e.connections.filter((e=>e.uuid===t.uuid&&e.name===t.name)).forEach(r(e,a)),e.disconnectListener(t)}static setProviderRemoval(e,t){d.removalMap.set(e,t)}dispatch(e,t,i){var o;const s=null!==(o=e.endpointId)&&void 0!==o?o:this.getEndpointIdForOpenFinId(e,t);return s&&r(this,n).isEndpointConnected(s)?r(this,n).send(s,t,i):Promise.reject(new Error(`Client connection with identity uuid: ${e.uuid} / name: ${e.name} / endpointId: ${s} no longer connected.`))}async processConnection(t,n){return r(this,e).push(t),this.connectListener(t,n)}publish(e,t){return this.connections.map((i=>r(this,n).send(i.endpointId,e,t)))}onConnection(e){this.connectListener=e}onDisconnection(e){this.disconnectListener=e}async destroy(){const n=r(this,t),{channelName:o}=n.providerIdentity;i(this,e,[]),await n.wire.sendAction("destroy-channel",{channelName:o}),r(this,c).call(this)}checkForClientConnection(e){if(!this.isClientConnected(e))throw new Error(`This action was sent from a client that is not connected to the provider.\n                    Client Identity: {uuid: ${e.uuid}, name: ${e.name}, endpointId: ${e.endpointId}}`)}isClientConnected(e){return d.clientIdentityIncludesEndpointId(e)?this.connections.some((t=>t.endpointId===e.endpointId&&t.uuid===e.uuid&&t.name===e.name)):this.isLegacyClientConnected(e)}isLegacyClientConnected(e){return this.connections.some((t=>t.uuid===e.uuid&&t.name===e.name))}handleMultiRuntimeLegacyClient(e){if(!this.isLegacyClientConnected(e))throw new Error(`This action was sent from a client that is not connected to the provider. Client Identity:\n                    {uuid: ${e.uuid}, name: ${e.name}, endpointId: ${e.endpointId}}`)}getEndpointIdForOpenFinId(e,n){var i;const o=this.connections.filter((t=>t.name===e.name&&t.uuid===e.uuid));if(o.length>=2){const i=r(this,t),{uuid:o,name:s}=e,a=null==i?void 0:i.providerIdentity.uuid,c=null==i?void 0:i.providerIdentity.name;console.warn(`WARNING: Dispatch call may have unintended results. The "to" argument of your dispatch call is missing the\n                "endpointId" parameter. The identity you are dispatching to ({uuid: ${o}, name: ${s}})\n                has multiple channelClients for this channel. Your dispatched action: (${n}) from the provider:\n                ({uuid: ${a}, name: ${c}}) will only be processed by the most recently-created client.`)}return null===(i=o.pop())||void 0===i?void 0:i.endpointId}static clientIdentityIncludesEndpointId(e){return void 0!==e.endpointId}static clientIsMultiRuntime(e){return void 0!==e.runtimeUuid}}return e=new WeakMap,t=new WeakMap,n=new WeakMap,a=new WeakMap,c=new WeakMap,d.removalMap=new WeakMap,d})();t.ChannelProvider=a},8347:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InterAppPayload=void 0;const i=n(6465),r=n(9659),o=n(3127),s=n(7722),a=n(4999);class c extends r.Base{constructor(e){super(e),this.events={subscriberAdded:"subscriber-added",subscriberRemoved:"subscriber-removed"},this.refCounter=new o.default,this.Channel=new s.Channel(e),this.emitter=new i.EventEmitter,e.registerMessageHandler(this.onmessage.bind(this)),this.on=this.emitter.on.bind(this.emitter),this.removeAllListeners=this.emitter.removeAllListeners.bind(this.emitter)}publish(e,t){return this.wire.sendAction("publish-message",{topic:e,message:t,sourceWindowName:this.me.name}).then((()=>{}))}async send(e,t,n){const i=a.validateIdentity(e);if(i)throw new Error(i);await this.wire.sendAction("send-message",{destinationUuid:e.uuid,destinationWindowName:e.name,topic:t,message:n,sourceWindowName:this.me.name})}subscribe(e,t,n){const i=this.createSubscriptionKey(e.uuid,e.name||"*",t);return this.emitter.on(i,n),this.refCounter.actOnFirst(i,(()=>this.wire.sendAction("subscribe",{sourceUuid:e.uuid,sourceWindowName:e.name||"*",topic:t,destinationWindowName:this.me.name})),(()=>Promise.resolve()))}unsubscribe(e,t,n){const i=e.name||"*",r=this.createSubscriptionKey(e.uuid,i,t);return this.emitter.removeListener(r,n),this.refCounter.actOnLast(r,(()=>this.wire.sendAction("unsubscribe",{sourceUuid:e.uuid,sourceWindowName:i,topic:t,destinationWindowName:this.me.name})),(()=>new Promise((e=>e)).then((()=>{}))))}processMessage(e){const{payload:{message:t,sourceWindowName:n,sourceUuid:i,topic:r}}=e,o=[this.createSubscriptionKey(i,n,r),this.createSubscriptionKey(i,"*",r),this.createSubscriptionKey("*","*",r)],s={uuid:i,name:n};o.forEach((e=>{this.emitter.emit(e,t,s)}))}emitSubscriverEvent(e,t){const{payload:{targetName:n,uuid:i,topic:r}}=t,o={name:n,uuid:i,topic:r};this.emitter.emit(e,o)}createSubscriptionKey(e,t,n){const i=t||"*";if(!(e&&i&&n))throw new Error("Missing uuid, name, or topic string");return function(...e){return e.map((e=>Buffer.from(`${e}`).toString("base64"))).join("/")}(e,i,n)}onmessage(e){const{action:t}=e;switch(t){case"process-message":this.processMessage(e);break;case this.events.subscriberAdded:this.emitSubscriverEvent(this.events.subscriberAdded,e);break;case this.events.subscriberRemoved:this.emitSubscriverEvent(this.events.subscriberRemoved,e)}return!0}}t.default=c,t.InterAppPayload=class{}},2977:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(2057),o=n(7138),s=(e,...t)=>new e(...t);class a extends i.Base{async init(e,t=s){this.wire.sendAction("interop-init").catch((e=>{}));const n=await this.fin.InterApplicationBus.Channel.create(`interop-broker-${e}`),i=await this.fin.Application.getCurrentSync().getInfo();return t(r.InteropBroker,this.wire,n,i.initialOptions.interopBrokerConfiguration||{})}connectSync(e,t){return this.wire.sendAction("interop-connect-sync").catch((e=>{})),new o.InteropClient(this.wire,e,t)}}t.default=a},2057:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.InteropBroker=void 0;const i=n(9659),r=n(7115),o=n(1787);let s=[{id:"green",displayMetadata:{color:"#00CC88",name:"green"}},{id:"purple",displayMetadata:{color:"#8C61FF",name:"purple"}},{id:"orange",displayMetadata:{color:"#FF8C4C",name:"orange"}},{id:"red",displayMetadata:{color:"#FF5E60",name:"red"}},{id:"pink",displayMetadata:{color:"#FF8FB8",name:"pink"}},{id:"yellow",displayMetadata:{color:"#E9FF8F",name:"yellow"}}];class a extends i.Base{constructor(e,t,n){super(e),this.channel=t,this.interopClients=new Map,this.contextGroupsById=new Map,n.contextGroups&&(s=n.contextGroups),this.intentClientMap=new Map,this.lastContextMap=new Map,this.sessionContextGroupMap=new Map,this.setContextGroupMap(),this.wireChannel(t)}setContext({context:e},t){this.wire.sendAction("interop-broker-set-context").catch((e=>{}));const n=this.getClientState(t);if(!n||!n.contextGroupId)throw n?new Error("You must join a context group before you can set context."):new Error(`Client with Identity: ${t.uuid} ${t.name} not in Client State Map`);{const{contextGroupId:t}=n;if(!this.contextGroupsById.has(t))throw new Error(`Client has a context group that isn't in the context group mapping: ${t}.`);const i=a.checkContextIntegrity(e);if(!1===i.isValid)throw new Error(`Failed to set Context - bad Context. Reason: ${i.reason}. Context: ${JSON.stringify(e)}`);const r=this.contextGroupsById.get(t),o=e.type;r.set(o,e),this.lastContextMap.set(t,o),Array.from(this.interopClients.values()).filter((e=>e.contextGroupId===t)).forEach((t=>{for(const[,n]of t.contextHandlers)a.isContextTypeCompatible(o,n.contextType)&&this.invokeContextHandler(t.clientIdentity,n.handlerId,e)}))}}getCurrentContext(e,t){var n;this.wire.sendAction("interop-broker-get-current-context").catch((e=>{}));const i=this.getClientState(t);if(!(null==i?void 0:i.contextGroupId))throw new Error("You must be a member of a context group to call getCurrentContext");const{contextGroupId:r}=i,o=this.contextGroupsById.get(r),s=this.lastContextMap.get(r),a=null!==(n=null==e?void 0:e.contextType)&&void 0!==n?n:s;return o&&a?o.get(a):void 0}async joinContextGroup({contextGroupId:e,target:t},n){if(this.wire.sendAction("interop-broker-join-context-group").catch((e=>{})),t){a.hasEndpointId(t)&&await this.addClientToContextGroup({contextGroupId:e},t);const n=this.channel.connections.filter((e=>e.uuid===t.uuid&&e.name===t.name));if(!n.length)throw new Error(`Given Identity ${t.uuid} ${t.name} is not connected to the Interop Broker.`);n.length>1&&console.warn(`More than one connection found for identity ${t.uuid} ${t.name}`);const i=[];for(const t of n)i.push(this.addClientToContextGroup({contextGroupId:e},t));await Promise.all(i)}else await this.addClientToContextGroup({contextGroupId:e},n)}async addClientToContextGroup({contextGroupId:e},t){this.wire.sendAction("interop-broker-add-client-to-context-group").catch((e=>{}));const n=this.getClientState(t);if(!n)throw new Error(`Client with Identity: ${t.uuid} ${t.name} not in Client State Map`);if(!this.getContextGroups().find((t=>t.id===e)))throw new Error(`Attempting to join a context group that does not exist: ${e}. You may only join existing context groups.`);if(n.contextGroupId!==e){n.contextGroupId=e,await a.setCurrentContextGroupInClientOptions(t,e);const i=this.contextGroupsById.get(e);for(const[,e]of n.contextHandlers){const{contextType:n,handlerId:r}=e;if(void 0===n)i.forEach(((e,n)=>{this.invokeContextHandler(t,r,e)}));else if(i.has(n)){const e=i.get(n);e&&this.invokeContextHandler(t,r,e)}}}}async removeFromContextGroup({target:e},t){if(this.wire.sendAction("interop-broker-remove-from-context-group").catch((e=>{})),e){a.hasEndpointId(e)&&await this.removeClientFromContextGroup(e);const t=this.channel.connections.filter((t=>t.uuid===e.uuid&&t.name===e.name));if(!t.length)throw new Error(`No connection found for given Identity ${e.uuid} ${e.name}`);t.length>1&&console.warn(`More than one connection found for identity ${e.uuid} ${e.name}`);const n=[];for(const e of t)n.push(this.removeClientFromContextGroup(e));await Promise.all(n)}else await this.removeClientFromContextGroup(t)}async removeClientFromContextGroup(e){this.wire.sendAction("interop-broker-remove-client-from-context-group").catch((e=>{}));const t=this.getClientState(e);t&&(t.contextGroupId=void 0),await a.setCurrentContextGroupInClientOptions(e,null)}getContextGroups(){return this.wire.sendAction("interop-broker-get-context-groups").catch((e=>{})),s.map((e=>({...e})))}getInfoForContextGroup({contextGroupId:e}){return this.wire.sendAction("interop-broker-get-info-for-context-group").catch((e=>{})),this.getContextGroups().find((t=>t.id===e))}getAllClientsInContextGroup({contextGroupId:e}){return this.wire.sendAction("interop-broker-get-all-clients-in-context-group").catch((e=>{})),Array.from(this.interopClients.values()).filter((t=>t.contextGroupId===e)).map((e=>e.clientIdentity))}async handleFiredIntent(e,t){const n=o.generateOverrideWarning("interopClient.fireIntent","fdc3.raiseIntent","InteropBroker.handleFiredIntent",t);throw console.warn(n),new Error(o.BROKER_ERRORS.fireIntent)}async setIntentTarget(e,t){this.wire.sendAction("interop-broker-set-intent-target").catch((e=>{}));const n=this.intentClientMap.get(t.name),i=`intent-handler-${e.name}`;if(n){const t=n.get(i);if(t){if(t.pendingIntents.push(e),t.clientIdentity&&t.isReady){const{clientIdentity:e,pendingIntents:n}=t;try{const r=n[n.length-1];await this.channel.dispatch(e,i,r),t.pendingIntents=[]}catch(n){console.error(`Error invoking intent handler for client ${e.uuid}/${e.name}/${e.endpointId}`),t.isReady=!1}}}else n.set(i,{isReady:!1,pendingIntents:[e]})}else{this.intentClientMap.set(t.name,new Map);const n=this.intentClientMap.get(t.name);n&&n.set(i,{isReady:!1,pendingIntents:[e]})}}async handleInfoForIntent(e,t){const n=o.generateOverrideWarning("interopClient.getInfoForIntent","fdc3.findIntent","InteropBroker.handleInfoForIntent",t);throw console.warn(n),new Error(o.BROKER_ERRORS.getInfoForIntent)}async handleInfoForIntentsByContext(e,t){const n=o.generateOverrideWarning("interopClient.getInfoForIntentsByContext","fdc3.findIntentsByContext","InteropBroker.handleInfoForIntentsByContext",t);throw console.warn(n),new Error(o.BROKER_ERRORS.getInfoForIntentsByContext)}async handleFiredIntentForContext(e,t){const n=o.generateOverrideWarning("interopClient.fireIntentForContext","fdc3.raiseIntentForContext","InteropBroker.handleFiredIntentForContext",t);throw console.warn(n),new Error(o.BROKER_ERRORS.fireIntentForContext)}decorateSnapshot(e){return{...e,interopSnapshotDetails:{contextGroupStates:this.getContextGroupStates()}}}applySnapshot(e,t){var n;const i=null===(n=null==e?void 0:e.interopSnapshotDetails)||void 0===n?void 0:n.contextGroupStates;i&&((null==t?void 0:t.closeExistingWindows)||this.updateExistingClients(i),this.rehydrateContextGroupStates(i))}updateExistingClients(e){this.interopClients.forEach((t=>{const{clientIdentity:n,contextGroupId:i,contextHandlers:r}=t;if(i){const t=e[i];for(const[,e]of Object.entries(t))r.forEach((t=>{const{handlerId:i,contextType:r}=t;a.isContextTypeCompatible(e.type,r)&&this.invokeContextHandler(n,i,e)}))}}))}getContextGroupStates(){return a.toObject(this.contextGroupsById)}rehydrateContextGroupStates(e){const t=Object.entries(e);for(const[e,n]of t){const t=Object.entries(n);for(const[n,i]of t)this.contextGroupsById.has(e)?this.contextGroupsById.get(e).set(n,i):console.warn(`Attempting to set a context group that isn't in the context group mapping. Skipping context group rehydration for: ${e}`)}}contextHandlerRegistered({contextType:e,handlerId:t},n){const i={contextType:e,handlerId:t},r=this.getClientState(n);if(null==r||r.contextHandlers.set(t,i),r&&r.contextGroupId){const{contextGroupId:i}=r,o=this.contextGroupsById.get(i);if(void 0===e)o.forEach(((e,i)=>{this.invokeContextHandler(n,t,e)}));else if(o.has(e)){const i=o.get(e);i&&this.invokeContextHandler(n,t,i)}}}async intentHandlerRegistered(e,t){const{handlerId:n}=e,i=this.intentClientMap.get(t.name),r=null==i?void 0:i.get(n);if(i)if(r){const{pendingIntents:e}=r;r.clientIdentity=t,r.isReady=!0;try{if(e.length>0){const i=e[e.length-1];await this.channel.dispatch(t,n,i),r.pendingIntents=[]}}catch(e){console.error(`Error invoking intent handler: ${n} for client ${t.uuid}/${t.name}/${t.endpointId}`)}}else i.set(n,{isReady:!0,pendingIntents:[],clientIdentity:t});else{this.intentClientMap.set(t.name,new Map);const e=this.intentClientMap.get(t.name);e&&e.set(n,{isReady:!0,pendingIntents:[],clientIdentity:t})}}invokeContextHandler(e,t,n){this.channel.dispatch(e,t,n).catch((i=>{console.error(`Error invoking context handler ${t} for context type ${n.type} in client ${e.uuid}/${e.name}/${e.endpointId}`,i)}))}removeContextHandler({handlerId:e},t){const n=this.getClientState(t);n&&n.contextHandlers.delete(e)}handleJoinSessionContextGroup({sessionContextGroupId:e},t){try{if(!e)throw new Error("Failed to join session context group: must specify group id.");const n=this.sessionContextGroupMap.get(e);if(n)n.registerNewClient(t);else{const n=new r.default(this.channel,e);n.registerNewClient(t),this.sessionContextGroupMap.set(e,n)}return{hasConflict:this.contextGroupsById.has(e)}}catch(e){throw new Error(e)}}getClientState(e){return this.interopClients.get(e.endpointId)}static toObject(e){const t=Object.fromEntries(e),n={};return Object.entries(t).forEach((([e,t])=>{const i=Object.fromEntries(t);n[e]=i})),n}static checkContextIntegrity(e){if(!e)return{isValid:!1,reason:"No context supplied"};if("object"!=typeof e)return{isValid:!1,reason:"Context must be an Object"};if(!e.type)return{isValid:!1,reason:"Context must have a type property"};if(e.id&&"object"!=typeof e.id)return{isValid:!1,reason:"Context id must be an Object populated with key-value identifiers (if set)"};if(e.id){const{id:t}=e,n=Object.keys(t);let i=!1;if(!n.length)return{isValid:!1,reason:"Context id must have at least one key-value identifier"};if(n.forEach((e=>{"string"==typeof e&&"string"==typeof t[e]||(i=!0)})),i)return{isValid:!1,reason:"Context id key-value identifiers must be of type string"}}return e.name&&"string"!=typeof e.name?{isValid:!1,reason:"Context name must be of string type (if set)"}:{isValid:!0}}static hasEndpointId(e){return void 0!==e.endpointId}static isContextTypeCompatible(e,t){return void 0===t||e===t}setContextGroupMap(){for(const e of this.getContextGroups())this.contextGroupsById.set(e.id,new Map)}static async setCurrentContextGroupInClientOptions(e,t){const n=await fin.System.getEntityInfo(e.uuid,e.name);let i;"view"===n.entityType?i=await fin.View.wrap(e):"window"===n.entityType&&(i=await fin.Window.wrap(e)),i?await i.updateOptions({interop:{currentContextGroup:t}}):console.warn(`Setting Current Context Group: Entity with identity ${e.uuid}, ${e.name} is not a window or view. It is a ${n.entityType} instead.`)}wireChannel(e){e.onConnection(((e,t)=>{if(!this.isConnectionAuthorized(e,t))throw new Error(`Connection not authorized for ${e.uuid}, ${e.name}`);if(!e.endpointId)throw new Error("Version too old to be compatible with Interop. Please upgrade your runtime to a more recent version.");const n={contextGroupId:void 0,contextHandlers:new Map,clientIdentity:e};(null==t?void 0:t.currentContextGroup)&&this.contextGroupsById.has(t.currentContextGroup)&&(n.contextGroupId=null==t?void 0:t.currentContextGroup),this.interopClients.set(e.endpointId,n)})),e.onDisconnection((e=>{this.interopClients.delete(e.endpointId);const t=this.intentClientMap.get(e.name);t&&e.uuid===fin.me.identity.uuid&&t.forEach((e=>{e.isReady=!1})),this.sessionContextGroupMap.forEach((t=>{t.onDisconnection(e)}))})),e.beforeAction(((e,t,n)=>{if(!this.isActionAuthorized(e,t,n))throw new Error(`Action (${e}) not authorized for ${n.uuid}, ${n.name}`);console.log(e,t,n)})),e.afterAction(console.log),e.register("setContext",this.setContext.bind(this)),e.register("fireIntent",this.handleFiredIntent.bind(this)),e.register("getCurrentContext",this.getCurrentContext.bind(this)),e.register("getInfoForIntent",this.handleInfoForIntent.bind(this)),e.register("getInfoForIntentsByContext",this.handleInfoForIntentsByContext.bind(this)),e.register("fireIntentForContext",this.handleFiredIntentForContext.bind(this)),e.register("getContextGroups",this.getContextGroups.bind(this)),e.register("joinContextGroup",this.joinContextGroup.bind(this)),e.register("removeFromContextGroup",this.removeFromContextGroup.bind(this)),e.register("getAllClientsInContextGroup",this.getAllClientsInContextGroup.bind(this)),e.register("getInfoForContextGroup",this.getInfoForContextGroup.bind(this)),e.register("contextHandlerRegistered",this.contextHandlerRegistered.bind(this)),e.register("intentHandlerRegistered",this.intentHandlerRegistered.bind(this)),e.register("removeContextHandler",this.removeContextHandler.bind(this)),e.register("sessionContextGroup:createIfNeeded",this.handleJoinSessionContextGroup.bind(this))}async isConnectionAuthorized(e,t){return this.wire.sendAction("interop-broker-is-connection-authorized").catch((e=>{})),!0}async isActionAuthorized(e,t,n){return this.wire.sendAction("interop-broker-is-action-authorized").catch((e=>{})),!0}}t.InteropBroker=a},7138:function(e,t,n){var i,r,o=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},s=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.InteropClient=void 0;const a=n(9659),c=n(822),d=n(1787);class h extends a.Base{constructor(e,t,n){super(e),i.set(this,void 0),r.set(this,void 0),o(this,r,new Map),o(this,i,this.wire.environment.whenReady().then((()=>this.fin.InterApplicationBus.Channel.connect(`interop-broker-${t}`,{payload:n}))))}async setContext(e){return this.wire.sendAction("interop-client-set-context").catch((e=>{})),(await s(this,i)).dispatch("setContext",{context:e})}async addContextHandler(e,t){this.wire.sendAction("interop-client-add-context-handler").catch((e=>{}));const n=await s(this,i);let r;t?(r=`invokeContextHandler-${t}-${d.generateId()}`,console.warn(`Warning: By providing a contextType (${t}), you are using the experimental addContextHandler. To avoid issues, make sure you are adding your context handlers at the top level in your application.`)):r="invokeContextHandler";const o=d.wrapContextHandler(e,r);return n.register(r,o),await n.dispatch("contextHandlerRegistered",{handlerId:r,contextType:t}),{unsubscribe:async()=>{n.remove(r),await n.dispatch("removeContextHandler",{handlerId:r})}}}async getContextGroups(){return this.wire.sendAction("interop-client-get-context-groups").catch((e=>{})),(await s(this,i)).dispatch("getContextGroups")}async joinContextGroup(e,t){this.wire.sendAction("interop-client-join-context-group").catch((e=>{}));const n=await s(this,i);if(!e)throw new Error("No contextGroupId specified for joinContextGroup.");return n.dispatch("joinContextGroup",{contextGroupId:e,target:t})}async removeFromContextGroup(e){return this.wire.sendAction("interop-client-remove-from-context-group").catch((e=>{})),(await s(this,i)).dispatch("removeFromContextGroup",{target:e})}async getAllClientsInContextGroup(e){this.wire.sendAction("interop-client-get-all-clients-in-context-group").catch((e=>{}));const t=await s(this,i);if(!e)throw new Error("No contextGroupId specified for getAllClientsInContextGroup.");return t.dispatch("getAllClientsInContextGroup",{contextGroupId:e})}async getInfoForContextGroup(e){this.wire.sendAction("interop-client-get-info-for-context-group").catch((e=>{}));const t=await s(this,i);if(!e)throw new Error("No contextGroupId specified for getInfoForContextGroup.");return t.dispatch("getInfoForContextGroup",{contextGroupId:e})}async fireIntent(e){return this.wire.sendAction("interop-client-fire-intent").catch((e=>{})),(await s(this,i)).dispatch("fireIntent",e)}async registerIntentHandler(e,t){this.wire.sendAction("interop-client-register-intent-handler").catch((e=>{}));const n=await s(this,i),r=`intent-handler-${t}`,o=this.wrapIntentHandler(e,r);try{await n.register(r,o),await n.dispatch("intentHandlerRegistered",{handlerId:r})}catch(e){throw new Error("Unable to register intent handler")}return{unsubscribe:async()=>{n.remove(r)}}}async getCurrentContext(e){return this.wire.sendAction("interop-client-get-current-context").catch((e=>{})),(await s(this,i)).dispatch("getCurrentContext",{contextType:e})}async getInfoForIntent(e){return this.wire.sendAction("interop-client-get-info-for-intent").catch((e=>{})),(await s(this,i)).dispatch("getInfoForIntent",e)}async getInfoForIntentsByContext(e){return this.wire.sendAction("interop-client-get-info-for-intents-by-context").catch((e=>{})),(await s(this,i)).dispatch("getInfoForIntentsByContext",e)}async fireIntentForContext(e){return this.wire.sendAction("interop-client-fire-intent-for-context").catch((e=>{})),(await s(this,i)).dispatch("fireIntentForContext",e)}async joinSessionContextGroup(e){try{const t=s(this,r).get(e);if(t)return t.getUserInstance();const n=await s(this,i),{hasConflict:o}=await n.dispatch("sessionContextGroup:createIfNeeded",{sessionContextGroupId:e});o&&console.warn(`A (non-session) context group with the name "${e}" already exists. If you are trying to join a Context Group, call joinContextGroup instead.`);const a=new c.default(this.wire,s(this,i),e);return s(this,r).set(e,a),a.getUserInstance()}catch(t){throw console.error(`Error thrown trying to create Session Context Group with id "${e}": ${t}`),t}}wrapIntentHandler(e,t){return async n=>{try{await e(n)}catch(e){throw console.error(`Error thrown by handler ${t}: ${e}`),e}}}}t.InteropClient=h,i=new WeakMap,r=new WeakMap},7115:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(8706);t.default=class{constructor(e,t){this.provider=e,this.id=t,this.lastContext=void 0,this.contextGroupMap=new Map,this.clients=new Map,this.registerListeners()}registerListeners(){this.provider.register(`sessionContextGroup:getContext-${this.id}`,this.getCurrentContext.bind(this)),this.provider.register(`sessionContextGroup:setContext-${this.id}`,this.setContext.bind(this)),this.provider.register(`sessionContextGroup:handlerAdded-${this.id}`,this.handlerAdded.bind(this)),this.provider.register(`sessionContextGroup:handlerRemoved-${this.id}`,this.handlerRemoved.bind(this))}getCurrentContext(e){return e.type?this.contextGroupMap.get(e.type):this.lastContext}setContext(e,t){const{context:n}=e,r=i.InteropBroker.checkContextIntegrity(n);if(!1===r.isValid)throw new Error(`Failed to set Context - bad Context. Reason: ${r.reason}. Context: ${JSON.stringify(n)}`);if(!this.getClientState(t))throw new Error(`Client with Identity: ${t.uuid} ${t.name} not in Session Client State Map`);this.contextGroupMap.set(n.type,n),this.lastContext=n,Array.from(this.clients.values()).forEach((e=>{var t;null===(t=e.contextHandlers.get(n.type))||void 0===t||t.forEach((t=>{this.provider.dispatch(e.clientIdentity,t,n)})),e.globalHandler&&this.provider.dispatch(e.clientIdentity,e.globalHandler,n)}))}getClientState(e){return this.clients.get(e.endpointId)}handlerAdded(e,t){const{handlerId:n,contextType:i}=e,r=this.getClientState(t);if(!r)throw new Error(`Client with Identity: ${t.uuid} ${t.name} not in Client State Map`);if(i){const e=r.contextHandlers.get(i)||[];r.contextHandlers.set(i,[...e,n]);const o=this.contextGroupMap.get(i);o&&this.provider.dispatch(t,n,o)}else r.globalHandler=n,[...this.contextGroupMap.keys()].forEach((e=>{const i=this.contextGroupMap.get(e);i&&this.provider.dispatch(t,n,i)}))}handlerRemoved(e,t){const{handlerId:n}=e,i=this.clients.get(t.endpointId);i?(Array.from(i.contextHandlers).forEach((([,e])=>{const t=e.indexOf(n);t>-1&&e.splice(t,1)})),i.globalHandler===n&&(i.globalHandler=void 0)):console.warn(`Trying to remove a handler from a client that isn't mapped. handlerId: ${n}. clientIdentity: ${t}`)}registerNewClient(e){if(!this.clients.has(e.endpointId)){const t={contextHandlers:new Map,clientIdentity:e,globalHandler:void 0};this.clients.set(e.endpointId,t)}}onDisconnection(e){this.clients.delete(e.endpointId)}}},822:function(e,t,n){var i,r=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},o=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0});const s=n(9659),a=n(1787);class c extends s.Base{constructor(e,t,n){super(e),i.set(this,void 0),this.id=n,r(this,i,t)}async setContext(e){return this.wire.sendAction("interop-session-context-group-set-context").catch((e=>{})),(await o(this,i)).dispatch(`sessionContextGroup:setContext-${this.id}`,{sessionContextGroupId:this.id,context:e})}async getCurrentContext(e){return this.wire.sendAction("interop-session-context-group-get-context").catch((e=>{})),(await o(this,i)).dispatch(`sessionContextGroup:getContext-${this.id}`,{sessionContextGroupId:this.id,type:e})}async addContextHandler(e,t){this.wire.sendAction("interop-session-context-group-add-handler").catch((e=>{}));const n=await o(this,i);let r;return r=t?`sessionContextHandler:invoke-${this.id}-${t}-${a.generateId()}`:`sessionContextHandler:invoke-${this.id}`,n.register(r,a.wrapContextHandler(e,r)),n.dispatch(`sessionContextGroup:handlerAdded-${this.id}`,{handlerId:r,contextType:t}),{unsubscribe:await this.createUnsubscribeCb(r)}}async createUnsubscribeCb(e){const t=await o(this,i);return async()=>{t.remove(e),await t.dispatch(`sessionContextGroup:handlerRemoved-${this.id}`,{handlerId:e})}}getUserInstance(){return{id:this.id,setContext:a.wrapInTryCatch(this.setContext.bind(this),"Failed to set context: "),getCurrentContext:a.wrapInTryCatch(this.getCurrentContext.bind(this),"Failed to get context: "),addContextHandler:a.wrapInTryCatch(this.addContextHandler.bind(this),"Failed to add context handler: ")}}}t.default=c,i=new WeakMap},8706:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(2977);t.default=o.default,r(n(7138),t),r(n(2057),t)},1787:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BROKER_ERRORS=t.generateOverrideWarning=t.generateOverrideError=t.wrapContextHandler=t.wrapInTryCatch=t.generateId=void 0,t.generateId=()=>`${Math.random()}${Date.now()}`,t.wrapInTryCatch=(e,t)=>(...n)=>{try{return e(...n)}catch(e){throw new Error((t||"")+e)}},t.wrapContextHandler=(e,t)=>async n=>{try{await e(n)}catch(e){throw console.error(`Error thrown by handler ${t} for context type ${n.type}: ${e}`),e}},t.generateOverrideError=(e,t)=>`You have tried to to use ${e} but ${t} has not been overridden in the Interop Broker. Please override this function. Refer to our documentation for more info.`,t.generateOverrideWarning=(e,t,n,i)=>{const{uuid:r,name:o}=i;return`Entity with identity: ${r}/${o} has called ${e} or ${t} but ${n} has not been overridden.`},t.BROKER_ERRORS={fireIntent:t.generateOverrideError("fireIntent","handleFiredIntent"),fireIntentForContext:t.generateOverrideError("fireIntentForContext","handleFiredIntentForContext"),getInfoForIntent:t.generateOverrideError("getInfoForIntent","handleInfoForIntent"),getInfoForIntentsByContext:t.generateOverrideError("getInfoForIntentsByContext","handleInfoForIntentsByContext")}},9641:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getMe=t.getBaseMe=t.environmentUnsupportedMessage=void 0;const i=n(4169),r=n(6720),o=n(4997);function s(e,t,n){return{isView:"view"===e,isWindow:"window"===e,isFrame:"iframe"===e,isExternal:"external connection"===e,uuid:t,name:n,entityType:e}}t.environmentUnsupportedMessage="You are not running in OpenFin.",t.getBaseMe=s,t.getMe=function(e){const{uuid:n,name:a,entityType:c}=e.me,d={setContext(){throw new Error(t.environmentUnsupportedMessage)},addContextHandler(){throw new Error(t.environmentUnsupportedMessage)},getContextGroups(){throw new Error(t.environmentUnsupportedMessage)},joinContextGroup(){throw new Error(t.environmentUnsupportedMessage)},removeFromContextGroup(){throw new Error(t.environmentUnsupportedMessage)},getAllClientsInContextGroup(){throw new Error(t.environmentUnsupportedMessage)},getInfoForContextGroup(){throw new Error(t.environmentUnsupportedMessage)}},h="Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.",l={setContext(){throw new Error(h)},addContextHandler(){throw new Error(h)},getContextGroups(){throw new Error(h)},joinContextGroup(){throw new Error(h)},removeFromContextGroup(){throw new Error(h)},getAllClientsInContextGroup(){throw new Error(h)},getInfoForContextGroup(){throw new Error(h)}},u={eventNames:()=>{throw new Error(t.environmentUnsupportedMessage)},emit:()=>{throw new Error(t.environmentUnsupportedMessage)},listeners:()=>{throw new Error(t.environmentUnsupportedMessage)},listenerCount:()=>{throw new Error(t.environmentUnsupportedMessage)},on:()=>{throw new Error(t.environmentUnsupportedMessage)},addListener:()=>{throw new Error(t.environmentUnsupportedMessage)},once:()=>{throw new Error(t.environmentUnsupportedMessage)},prependListener:()=>{throw new Error(t.environmentUnsupportedMessage)},prependOnceListener:()=>{throw new Error(t.environmentUnsupportedMessage)},removeListener:()=>{throw new Error(t.environmentUnsupportedMessage)},removeAllListeners:()=>{throw new Error(t.environmentUnsupportedMessage)}};switch(c){case"view":return Object.assign(new i.View(e,{uuid:n,name:a}),s(c,n,a),{interop:l,isOpenFin:!0});case"window":return Object.assign(new o._Window(e,{uuid:n,name:a}),s(c,n,a),{interop:l,isOpenFin:!0});case"iframe":return Object.assign(new r._Frame(e,{uuid:n,name:a}),s(c,n,a),{interop:l,isOpenFin:!0});default:return{...s(c,n,a),...u,interop:d,isOpenFin:!1}}}},7283:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(6394),o=n(9872);class s extends i.Base{constructor(e,t){super(e),this._channel=t,this._initializer=(...e)=>this.wire.environment.getProviderInitializer().then((t=>t(this.wire.environment)(...e))),this.Layout=new r.LayoutModule(this.wire)}async init(e){const t=null==e?void 0:e.overrideCallback,n=await this.fin.Interop.init(this.fin.me.uuid,null==e?void 0:e.interopOverride);return window.interopBroker=n,this._initializer(t,n)}async wrap(e){return this.wire.sendAction("platform-wrap").catch((e=>{})),new o.Platform({uuid:e.uuid},this._channel)}wrapSync(e){return this.wire.sendAction("platform-wrap-sync").catch((e=>{})),new o.Platform({uuid:e.uuid},this._channel)}async getCurrent(){return this.wire.sendAction("platform-get-current").catch((e=>{})),this.wrap({uuid:this.wire.me.uuid})}getCurrentSync(){return this.wire.sendAction("platform-get-current-sync").catch((e=>{})),this.wrapSync({uuid:this.wire.me.uuid})}start(e){return this.wire.sendAction("platform-start").catch((e=>{})),new Promise((async(t,n)=>{try{const{uuid:n}=e,i=await this.fin.Application._create({...e,isPlatformController:!0});i.once("platform-api-ready",(()=>t(this.wrapSync({uuid:n})))),i._run({uuid:n})}catch(e){n(e)}}))}startFromManifest(e,t){return this.wire.sendAction("platform-start-from-manifest").catch((e=>{})),new Promise((async(n,i)=>{try{const i=await this.fin.Application._createFromManifest(e);i.once("platform-api-ready",(()=>n(this.wrapSync({uuid:i.identity.uuid})))),i._run(t)}catch(e){i(e)}}))}}t.default=s},9872:function(e,t,n){var i,r=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.Platform=void 0;const o=n(9659),s=n(4999),a=new Map;class c extends o.EmitterBase{constructor(e,t){super(t.wire,"application",e.uuid),this.getClient=e=>{this.wire.sendAction("platform-get-client",this.identity).catch((e=>{}));const t=e||this.identity,{uuid:n}=t;if(!a.has(n)){const e=r(this,i).call(this,n);a.set(n,e)}return a.get(n)},i.set(this,(async e=>{try{const t=`custom-frame-${e}`,n=await this._channel.connect(t,{wait:!1});return n.onDisconnection((()=>{a.delete(e)})),n}catch(t){throw a.delete(e),new Error("The targeted Platform is not currently running. Listen for application-started event for the given Uuid.")}})),this.launchLegacyManifest=this.launchContentManifest;const n=s.validateIdentity(e);if(n)throw new Error(n);this._channel=t,this.identity={uuid:e.uuid},this.Layout=this.fin.Platform.Layout,this.Application=this.fin.Application.wrapSync(this.identity)}async createView(e,t,n){this.wire.sendAction("platform-create-view",this.identity).catch((e=>{}));const i=await this.getClient(),r=await i.dispatch("create-view",{target:t,opts:e,targetView:n});if(!r||s.validateIdentity(r.identity))throw new Error(`When overwriting the createView call, please return an object that has a valid 'identity' property: ${JSON.stringify(r)}`);return this.fin.View.wrapSync(r.identity)}async createWindow(e){this.wire.sendAction("platform-create-window",this.identity).catch((e=>{}));const t=await this.getClient();e.reason||(e.reason="api-call");const n=await t.dispatch("create-view-container",e);if(!n||s.validateIdentity(n.identity))throw new Error(`When overwriting the createWindow call, please return an object that has a valid 'identity' property: ${JSON.stringify(n)}`);const{identity:i}=n,r=this.fin.Window.wrapSync(i);return r.name=i.name,r.uuid=i.uuid,r}async quit(){return this.wire.sendAction("platform-quit",this.identity).catch((e=>{})),(await this.getClient()).dispatch("quit")}async closeView(e){this.wire.sendAction("platform-close-view",this.identity).catch((e=>{}));const t=await this.getClient();await t.dispatch("close-view",{view:e})}async reparentView(e,t){var n;console.warn("Platform.reparentView has been deprecated, please use Platform.createView"),this.wire.sendAction("platform-reparent-view",this.identity).catch((e=>{}));const i={...e,uuid:null!==(n=e.uuid)&&void 0!==n?n:this.identity.uuid},r=await this.fin.View.wrap(i),o=await r.getOptions();return this.createView(o,t)}async getSnapshot(){return this.wire.sendAction("platform-get-snapshot",this.identity).catch((e=>{})),(await this.getClient()).dispatch("get-snapshot")}async applySnapshot(e,t){this.wire.sendAction("platform-apply-snapshot",this.identity).catch((e=>{}));const n="Requested snapshot must be a valid Snapshot object, or a url or filepath to such an object.";let i;if("string"==typeof e)try{i=(await this._channel.wire.sendAction("get-application-manifest",{manifestUrl:e})).payload.data}catch(e){throw new Error(`${n}: ${e}`)}else i=e;if(!i.windows)throw new Error(n);const r=await this.getClient();return await r.dispatch("apply-snapshot",{snapshot:i,options:t}),this}async fetchManifest(e){return(await this.getClient()).dispatch("platform-fetch-manifest",{manifestUrl:e})}async launchContentManifest(e){this.wire.sendAction("platform-launch-content-manifest",this.identity).catch((e=>{}));const t=await this.getClient(),n=await this.fetchManifest(e);return t.dispatch("launch-into-platform",{manifest:n}),this}async setWindowContext(e={},t){if(this.wire.sendAction("platform-set-window-context",this.identity).catch((e=>{})),!e)throw new Error("Please provide a serializable object or string to set the context.");const n=await this.getClient(),{entityType:i}=t?await this.fin.System.getEntityInfo(t.uuid,t.name):this.fin.me;await n.dispatch("set-window-context",{context:e,entityType:i,target:t||{uuid:this.fin.me.uuid,name:this.fin.me.name}})}async getWindowContext(e){this.wire.sendAction("platform-get-window-context",this.identity).catch((e=>{}));const t=await this.getClient(),{entityType:n}=e?await this.fin.System.getEntityInfo(e.uuid,e.name):this.fin.me;return t.dispatch("get-window-context",{target:e||{uuid:this.fin.me.uuid,name:this.fin.me.name},entityType:n})}async closeWindow(e,t={skipBeforeUnload:!1}){return this.wire.sendAction("platform-close-window",this.identity).catch((e=>{})),(await this.getClient()).dispatch("close-window",{windowId:e,options:t})}}t.Platform=c,i=new WeakMap},4386:(e,t)=>{function n(e){switch(e){case"columns":case"grid":case"rows":case"tabs":return!0;default:return!1}}Object.defineProperty(t,"__esModule",{value:!0}),t.isValidPresetType=void 0,t.isValidPresetType=n,t.default={isValidPresetType:n}},609:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(7283);t.default=o.default,r(n(9872),t)},4210:function(e,t,n){var i,r=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)},o=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n};Object.defineProperty(t,"__esModule",{value:!0}),t.LayoutModule=void 0;const s=n(8111),a=n(9659);class c extends a.Base{constructor(){super(...arguments),i.set(this,void 0),this.init=async(e={})=>{if(this.wire.sendAction("layout-init").catch((e=>{})),!this.fin.me.isWindow)throw new Error("Layout.init can only be called from a Window context.");if(r(this,i))throw new Error("Layout for this window already initialized, please use Layout.replace call to replace the layout.");const t=await this.wire.environment.getManagerConstructor();o(this,i,new t);let{layout:n,containerId:s}=e;n&&console.warn("We recommend using a layout in window options.\n                This layout has not been sanitized and unexpected behavior can occur."),n=n||(await this.fin.Window.getCurrentSync().getOptions()).layout,s=s||"layout-container";const a=document.getElementById(s);return await r(this,i).initManager(),await r(this,i).createLayout(n,a),Object.assign(this.getCurrentSync(),{layoutManager:r(this,i)})}}async wrap(e){return this.wire.sendAction("layout-wrap").catch((e=>{})),new s.Layout(e,this.wire)}wrapSync(e){return this.wire.sendAction("layout-wrap-sync").catch((e=>{})),new s.Layout(e,this.wire)}async getCurrent(){if(this.wire.sendAction("layout-get-current").catch((e=>{})),!this.fin.me.isWindow)throw new Error("You are not in a Window context.  Only Windows can have a Layout.");const{uuid:e,name:t}=this.fin.me;return this.wrap({uuid:e,name:t})}getCurrentSync(){if(this.wire.sendAction("layout-get-current-sync").catch((e=>{})),!this.fin.me.isWindow)throw new Error("You are not in a Window context.  Only Windows can have a Layout.");const{uuid:e,name:t}=this.fin.me;return this.wrapSync({uuid:e,name:t})}}t.LayoutModule=c,i=new WeakMap},8111:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Layout=void 0;const i=n(4999),r=n(4386),o=n(9659);class s extends o.Base{constructor(e,t){super(t),this.replace=async e=>{this.wire.sendAction("layout-replace").catch((e=>{}));const t=await this.platform.getClient();await t.dispatch("replace-layout",{target:this.identity,opts:{layout:e}})},this.replaceView=async(e,t)=>{this.wire.sendAction("layout-replace-view").catch((e=>{}));const n=await this.platform.getClient();await n.dispatch("replace-view",{target:this.identity,opts:{viewToReplace:e,newView:t}})},this.applyPreset=async e=>{this.wire.sendAction("layout-apply-preset").catch((e=>{}));const t=await this.platform.getClient(),{presetType:n}=e;if(!n||!r.isValidPresetType(n))throw new Error("Cannot apply preset layout, please include an applicable presetType property in the PresetLayoutOptions.");await t.dispatch("apply-preset-layout",{target:this.identity,opts:{presetType:n}})};const n=i.validateIdentity(e);if(n)throw new Error(n);this.identity=e,this.platform=this.fin.Platform.wrapSync({uuid:e.uuid}),e.uuid===this.fin.me.uuid&&e.name===this.fin.me.name&&(this.init=this.fin.Platform.Layout.init)}async getConfig(){return this.wire.sendAction("layout-get-config").catch((e=>{})),(await this.platform.getClient()).dispatch("get-frame-snapshot",{target:this.identity})}}t.Layout=s},6394:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),r(n(4210),t),r(n(8111),t)},1746:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(2878),o=n(6215);class s extends i.Base{async init(e){if(this.wire.sendAction("snapshot-source-init").catch((e=>{})),"object"!=typeof e||"function"!=typeof e.getSnapshot||"function"!=typeof e.applySnapshot)throw new Error("you must pass in a valid SnapshotProvider");const t=await this.fin.InterApplicationBus.Channel.create(o.getSnapshotSourceChannelName(fin.me.identity));t.register("get-snapshot",(async()=>({snapshot:await e.getSnapshot()}))),t.register("apply-snapshot",(({snapshot:t})=>e.applySnapshot(t)))}wrapSync(e){return this.wire.sendAction("snapshot-source-wrap-sync").catch((e=>{})),new r.SnapshotSource(this.wire,e)}async wrap(e){return this.wire.sendAction("snapshot-source-wrap").catch((e=>{})),this.wrapSync(e)}}t.default=s},2878:function(e,t,n){var i,r,o,s,a,c=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},d=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0}),t.SnapshotSource=void 0;const h=n(9659),l=n(6215),u=new Map;class p extends h.Base{constructor(e,t){super(e),i.set(this,void 0),r.set(this,(()=>(u.has(this.identity.uuid)||u.set(this.identity.uuid,{eventFired:null,clientPromise:null}),u.get(this.identity.uuid)))),o.set(this,(()=>(d(this,r).call(this).clientPromise||(d(this,r).call(this).clientPromise=d(this,s).call(this)),d(this,r).call(this).clientPromise))),s.set(this,(async()=>{const e=l.getSnapshotSourceChannelName(this.identity);try{d(this,r).call(this).eventFired||await d(this,a).call(this);const t=await this.fin.InterApplicationBus.Channel.connect(e,{wait:!1});return t.onDisconnection((()=>{d(this,r).call(this).clientPromise=null,d(this,r).call(this).eventFired=null})),t}catch(e){throw d(this,r).call(this).clientPromise=null,new Error("The targeted SnapshotSource is not currently initialized. Await this object's ready() method.")}})),a.set(this,(async()=>{const e=l.getSnapshotSourceChannelName(this.identity);let t,n;const i=new Promise(((e,i)=>{t=e,n=i}));d(this,r).call(this).eventFired=i;const o=async i=>{try{i.channelName===e&&(t(),await this.fin.InterApplicationBus.Channel.removeListener("connected",o))}catch(e){n(e)}};await this.fin.InterApplicationBus.Channel.on("connected",o)})),c(this,i,t)}get identity(){return d(this,i)}async ready(){this.wire.sendAction("snapshot-source-ready").catch((e=>{}));try{await d(this,o).call(this)}catch(e){await d(this,r).call(this).eventFired}}async getSnapshot(){this.wire.sendAction("snapshot-source-get-snapshot").catch((e=>{}));const e=await d(this,o).call(this),t=await e.dispatch("get-snapshot");return(await t).snapshot}async applySnapshot(e){return this.wire.sendAction("snapshot-source-apply-snapshot").catch((e=>{})),(await d(this,o).call(this)).dispatch("apply-snapshot",{snapshot:e})}}t.SnapshotSource=p,i=new WeakMap,r=new WeakMap,o=new WeakMap,s=new WeakMap,a=new WeakMap},7153:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(1746);t.default=o.default,r(n(2878),t)},6215:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getSnapshotSourceChannelName=void 0,t.getSnapshotSourceChannelName=e=>`snapshot-source-provider-${e.uuid}`},3641:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(5007),o=n(4997);class s extends i.EmitterBase{constructor(e){super(e,"system")}sendExternalProcessRequest(e,t){return new Promise(((n,i)=>{const r="external-process-exited";let s,a,c,d;"function"==typeof t.listener&&(c=e=>{const n=e||{};a={topic:"exited",uuid:n.processUuid||"",exitCode:n.exitCode||0},s===e.processUuid&&(t.listener(a),d.removeListener(r,c))},this.wire.me.name||(this.wire.me.name=this.wire.me.uuid),d=new o._Window(this.wire,this.wire.me),d.on(r,c)),this.wire.sendAction(e,t).then((({payload:e})=>{s=e.data.uuid,n(e.data),a&&s===a.uuid&&(t.listener(a),d.removeListener(r,c))})).catch((e=>{d&&d.removeListener(r,c),i(e)}))}))}getVersion(){return this.wire.sendAction("get-version").then((({payload:e})=>e.data))}clearCache(e){return this.wire.sendAction("clear-cache",e).then((()=>{}))}deleteCacheOnExit(){return this.wire.sendAction("delete-cache-request").then((()=>{}))}exit(){return this.wire.sendAction("exit-desktop").then((()=>{}))}async fetchManifest(e){const{payload:{data:t}}=await this.wire.sendAction("fetch-manifest",{manifestUrl:e});return t}flushCookieStore(){return this.wire.sendAction("flush-cookie-store").then((()=>{}))}getAllWindows(){return this.wire.sendAction("get-all-windows").then((({payload:e})=>e.data))}getAllApplications(){return this.wire.sendAction("get-all-applications").then((({payload:e})=>e.data))}getCommandLineArguments(){return this.wire.sendAction("get-command-line-arguments").then((({payload:e})=>e.data))}async getCrashReporterState(){const{payload:{data:{diagnosticMode:e,isRunning:t}}}=await this.wire.sendAction("get-crash-reporter-state");return console.warn("diagnosticMode property is deprecated. It will be removed in a future version"),{diagnosticMode:e,diagnosticsMode:e,isRunning:t}}async startCrashReporter(e){const t=e,n={...t,diagnosticMode:t.diagnosticsMode||t.diagnosticMode},{payload:{data:{diagnosticMode:i,isRunning:r}}}=await this.wire.sendAction("start-crash-reporter",n);return{diagnosticMode:i,diagnosticsMode:i,isRunning:r}}getUniqueUserId(){return this.wire.sendAction("get-unique-user-id").then((({payload:e})=>e.data))}getEntityInfo(e,t){return this.wire.sendAction("get-entity-info",{uuid:e,name:t}).then((({payload:e})=>e.data))}getEnvironmentVariable(e){return this.wire.sendAction("get-environment-variable",{environmentVariables:e}).then((({payload:e})=>e.data))}getFocusedWindow(){return this.wire.sendAction("get-focused-window").then((({payload:e})=>e.data))}async isAppCertified(e){const{payload:{data:{certifiedInfo:t}}}=await this.wire.sendAction("is-app-certified",{manifestUrl:e});return t}getInstalledRuntimes(){return this.wire.sendAction("get-installed-runtimes").then((({payload:e})=>e.data.runtimes))}async getInstalledApps(){const{payload:{data:{installedApps:e}}}=await this.wire.sendAction("get-installed-apps");return e}getLog(e){return this.wire.sendAction("view-log",e).then((({payload:e})=>e.data))}getMachineId(){return this.wire.sendAction("get-machine-id").then((({payload:e})=>e.data))}getMinLogLevel(){return this.wire.sendAction("get-min-log-level").then((({payload:e})=>e.data))}getLogList(){return this.wire.sendAction("list-logs").then((({payload:e})=>e.data))}getMonitorInfo(){return this.wire.sendAction("get-monitor-info").then((({payload:e})=>e.data))}getMousePosition(){return this.wire.sendAction("get-mouse-position").then((({payload:e})=>e.data))}getProcessList(){return console.warn("System.getProcessList has been deprecated. Please consider using our new process APIs: Window.getProcessInfo, View.getProcessInfo, Application.getProcessInfo, System.getAllProcessInfo"),this.wire.sendAction("process-snapshot").then((({payload:e})=>e.data))}async getAllProcessInfo(){const{payload:{data:e}}=await this.wire.sendAction("get-all-process-info",this.identity);return e}getProxySettings(){return this.wire.sendAction("get-proxy-settings").then((({payload:e})=>e.data))}getRuntimeInfo(){return this.wire.sendAction("get-runtime-info").then((({payload:e})=>e.data))}getRvmInfo(){return this.wire.sendAction("get-rvm-info").then((({payload:e})=>e.data))}getHostSpecs(){return this.wire.sendAction("get-host-specs").then((({payload:e})=>e.data))}launchExternalProcess(e){return this.sendExternalProcessRequest("launch-external-process",e)}monitorExternalProcess(e){return this.sendExternalProcessRequest("monitor-external-process",e)}log(e,t){return this.wire.sendAction("write-to-log",{level:e,message:t}).then((()=>{}))}openUrlWithBrowser(e){return this.wire.sendAction("open-url-with-browser",{url:e}).then((()=>{}))}releaseExternalProcess(e){return this.wire.sendAction("release-external-process",{uuid:e}).then((()=>{}))}showDeveloperTools(e){return this.wire.sendAction("show-developer-tools",e).then((()=>{}))}terminateExternalProcess(e){return this.wire.sendAction("terminate-external-process",e).then((()=>{}))}updateProxySettings(e){return this.wire.sendAction("update-proxy",e).then((()=>{}))}downloadAsset(e,t){return new Promise(((n,i)=>{if("NodeEnvironment"===this.wire.environment.constructor.name)return void i(new r.NotSupportedError("downloadAsset only supported in an OpenFin Render process"));const o=this.wire.environment.getNextMessageId().toString(),s=`asset-download-progress-${o}`,a=`asset-download-error-${o}`,c=`asset-download-complete-${o}`,d=e=>{const n={downloadedBytes:e.downloadedBytes,totalBytes:e.totalBytes};t(n)},h=()=>{this.removeListener(s,d)};this.on(s,d),this.once(a,((e,t)=>{const n=t||e;h(),i(new r.RuntimeError(n))})),this.once(c,(()=>{h(),n()}));const l=Object.assign(e,{downloadId:o});this.wire.sendAction("download-asset",l).catch((e=>{h(),i(e)}))}))}downloadRuntime(e,t){return new Promise(((n,i)=>{if("NodeEnvironment"===this.wire.environment.constructor.name)return void i(new r.NotSupportedError("downloadRuntime only supported in an OpenFin Render process"));const o=this.wire.environment.getNextMessageId().toString(),s=`runtime-download-progress-${o}`,a=`runtime-download-error-${o}`,c=`runtime-download-complete-${o}`,d=e=>{const n={downloadedBytes:e.downloadedBytes,totalBytes:e.totalBytes};t(n)},h=()=>{this.removeListener(s,d)};this.on(s,d),this.once(a,((e,t)=>{const n=t||e;h(),i(new r.RuntimeError(n))})),this.once(c,(()=>{h(),n()}));const l=Object.assign(e,{downloadId:o});this.wire.sendAction("download-runtime",l).catch((e=>{h(),i(e)}))}))}downloadPreloadScripts(e){return this.wire.sendAction("download-preload-scripts",{scripts:e}).then((({payload:e})=>e.data))}getAllExternalApplications(){return this.wire.sendAction("get-all-external-applications").then((({payload:e})=>e.data))}getAppAssetInfo(e){return this.wire.sendAction("get-app-asset-info",e).then((({payload:e})=>e.data))}getCookies(e){const t=this.wire.environment.getUrl(),n=Object.assign(e,{url:t});return this.wire.sendAction("get-cookies",n).then((({payload:e})=>e.data))}setMinLogLevel(e){return this.wire.sendAction("set-min-log-level",{level:e}).then((()=>{}))}resolveUuid(e){return this.wire.sendAction("resolve-uuid",{entityKey:e}).then((({payload:e})=>e.data))}executeOnRemote(e,t){return t.requestingIdentity=e,this.wire.ferryAction(t)}readRegistryValue(e,t,n){return this.wire.sendAction("read-registry-value",{rootKey:e,subkey:t,value:n}).then((({payload:e})=>e.data))}registerExternalConnection(e){return this.wire.sendAction("register-external-connection",{uuid:e}).then((({payload:e})=>e.data))}async getServiceConfiguration(e){if("string"!=typeof e.name)throw new Error("Must provide an object with a `name` property having a string value");const{name:t}=e;return this.wire.sendAction("get-service-configuration",{name:t}).then((({payload:e})=>e.data))}async getSystemAppConfig(e){if("string"!=typeof e)throw new Error("Must provide a string value for name of system app");return this.wire.sendAction("get-system-app-configuration",{name:e}).then((({payload:e})=>e.data))}runRvmHealthCheck(){return this.wire.sendAction("run-rvm-health-check").then((({payload:e})=>e.data))}async launchManifest(e,t){return(await this.wire.sendAction("launch-manifest",{manifestUrl:e,opts:t})).payload.data.manifest}async queryPermissionForCurrentContext(e){const t={uuid:this.wire.me.uuid,name:this.wire.me.name};return(await this.wire.sendAction("query-permission-for-current-context",{apiName:e,identity:t})).payload.data}async enableNativeWindowIntegrationProvider(e){const{payload:t}=await this.wire.sendAction("enable-native-window-integration-provider",{permissions:e});return t.data}async registerUsage({data:e,type:t}){await this.wire.sendAction("register-usage",{data:e,type:t})}}t.default=s},240:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(4999),o=n(4169);class s extends i.Base{async create(e){const{uuid:t}=this.wire.me;if(!e.name||"string"!=typeof e.name)throw new Error("Please provide a name property as a string in order to create a View.");return this.wire.environment.childViews?await this.wire.environment.createChildContent({entityType:"view",options:{...e,uuid:t}}):await this.wire.sendAction("create-view",{...e,uuid:t}),this.wrapSync({uuid:t,name:e.name})}async wrap(e){this.wire.sendAction("view-wrap");const t=r.validateIdentity(e);if(t)throw new Error(t);return new o.View(this.wire,e)}wrapSync(e){this.wire.sendAction("view-wrap-sync").catch((e=>{}));const t=r.validateIdentity(e);if(t)throw new Error(t);return new o.View(this.wire,e)}getCurrent(){if(this.wire.sendAction("view-get-current").catch((e=>{})),!this.wire.me.isView)throw new Error("You are not in a View context");const{uuid:e,name:t}=this.wire.me;return this.wrap({uuid:e,name:t})}getCurrentSync(){if(this.wire.sendAction("view-get-current-sync").catch((e=>{})),!this.wire.me.isView)throw new Error("You are not in a View context");const{uuid:e,name:t}=this.wire.me;return this.wrapSync({uuid:e,name:t})}}t.default=s},3163:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.View=void 0;const i=n(4636),r=n(4997);class o extends i.WebContents{constructor(e,t){super(e,t,"view"),this.identity=t,this.attach=async e=>{await this.wire.sendAction("attach-view",{target:e,...this.identity})},this.destroy=async()=>{await this.wire.sendAction("destroy-view",{...this.identity})},this.show=async()=>{await this.wire.sendAction("show-view",{...this.identity})},this.hide=async()=>{await this.wire.sendAction("hide-view",{...this.identity})},this.setBounds=async e=>{await this.wire.sendAction("set-view-bounds",{bounds:e,...this.identity})},this.getBounds=async()=>(await this.wire.sendAction("get-view-bounds",{...this.identity})).payload.data,this.getInfo=async()=>(await this.wire.sendAction("get-view-info",{...this.identity})).payload.data,this.getParentLayout=async()=>(this.wire.sendAction("view-get-parent-layout",{...this.identity}).catch((()=>{})),(await this.getCurrentWindow()).getLayout()),this.getOptions=async()=>this.wire.sendAction("get-view-options",{...this.identity}).then((({payload:e})=>e.data)),this.updateOptions=async e=>this.wire.sendAction("update-view-options",{options:e,...this.identity}).then((()=>{})),this.getCurrentWindow=async()=>{const{payload:{data:e}}=await this.wire.sendAction("get-view-window",{...this.identity});return new r._Window(this.wire,e)},this.triggerBeforeUnload=async()=>(await this.wire.sendAction("trigger-before-unload",{...this.identity})).payload.data}async focus({emitSynthFocused:e}={emitSynthFocused:!0}){const t=await this.getCurrentWindow();await t.focusedWebViewWasChanged(),await super.focus({emitSynthFocused:e})}}t.View=o},4169:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(240);t.default=o.default,r(n(3163),t)},4636:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WebContents=void 0;const i=n(9659);class r extends i.EmitterBase{constructor(e,t,n){super(e,n,t.uuid,t.name),this.entityType=n}capturePage(e){return this.wire.sendAction("capture-page",{options:e,...this.identity}).then((({payload:e})=>e.data))}executeJavaScript(e){return this.wire.sendAction("execute-javascript-in-window",{...this.identity,code:e}).then((({payload:e})=>e.data))}getZoomLevel(){return this.wire.sendAction("get-zoom-level",this.identity).then((({payload:e})=>e.data))}setZoomLevel(e){return this.wire.sendAction("set-zoom-level",{...this.identity,level:e}).then((()=>{}))}navigate(e){return this.wire.sendAction("navigate-window",{...this.identity,url:e}).then((()=>{}))}navigateBack(){return this.wire.sendAction("navigate-window-back",{...this.identity}).then((()=>{}))}async navigateForward(){await this.wire.sendAction("navigate-window-forward",{...this.identity})}stopNavigation(){return this.wire.sendAction("stop-window-navigation",{...this.identity}).then((()=>{}))}reload(e=!1){return this.wire.sendAction("reload-window",{ignoreCache:e,...this.identity}).then((()=>{}))}print(e){return this.wire.sendAction("print",{...this.identity,options:e}).then((()=>{}))}findInPage(e,t){return this.wire.sendAction("find-in-page",{...this.identity,searchTerm:e,options:t}).then((({payload:e})=>e.data))}stopFindInPage(e){return this.wire.sendAction("stop-find-in-page",{...this.identity,action:e}).then((()=>{}))}getPrinters(){return this.wire.sendAction("get-printers",{...this.identity}).then((({payload:e})=>e.data))}async focus({emitSynthFocused:e}={emitSynthFocused:!0}){await this.wire.sendAction("focus-window",{emitSynthFocused:e,...this.identity})}async showDeveloperTools(){await this.wire.sendAction("show-developer-tools",this.identity)}async getProcessInfo(){const{payload:{data:e}}=await this.wire.sendAction("get-process-info",this.identity);return e}async getSharedWorkers(){return this.wire.sendAction("get-shared-workers",this.identity).then((({payload:e})=>e.data))}async inspectSharedWorker(){await this.wire.sendAction("inspect-shared-worker",{...this.identity})}async inspectSharedWorkerById(e){await this.wire.sendAction("inspect-shared-worker-by-id",{...this.identity,workerId:e})}async inspectServiceWorker(){await this.wire.sendAction("inspect-service-worker",{...this.identity})}async showPopupWindow(e){if(this.wire.sendAction(`${this.entityType}-show-popup-window`,this.identity).catch((()=>{})),null==e?void 0:e.onPopupReady){const t=async({popupName:t})=>{try{const n=this.fin.Window.wrapSync({uuid:this.fin.me.uuid,name:t});await e.onPopupReady(n)}catch(e){throw new Error(`Something went wrong during onPopupReady execution: ${e}`)}};await this.once("popup-ready",t)}const{payload:t}=await this.wire.sendAction("try-create-popup-window",{options:{...e,hasResultCallback:!!(null==e?void 0:e.onPopupResult),hasReadyCallback:!!(null==e?void 0:e.onPopupReady)},...this.identity}),{data:{willOpen:n,options:i}}=t;if(n&&await this.wire.environment.createChildContent({options:i.initialOptions,entityType:"window"}),null==e?void 0:e.onPopupResult){const t=async t=>{await e.onPopupResult((e=>{const{name:t,uuid:n,result:i,data:r}=e,o={identity:{name:t,uuid:n},result:i};return r&&(o.data=r),o})(t))},n=async()=>{await this.removeListener("popup-result",t)};await this.on("popup-result",t),await this.once("popup-teardown",n)}const{payload:r}=await this.wire.sendAction("show-popup-window",{options:i,...this.identity});return r.data}}t.WebContents=r},2163:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const i=n(9659),r=n(4999),o=n(5047);class s extends i.Base{async wrap(e){this.wire.sendAction("window-wrap").catch((e=>{}));const t=r.validateIdentity(e);if(t)throw new Error(t);return new o._Window(this.wire,e)}wrapSync(e){this.wire.sendAction("window-wrap-sync").catch((e=>{}));const t=r.validateIdentity(e);if(t)throw new Error(t);return new o._Window(this.wire,e)}create(e){return this.wire.sendAction("create-window").catch((e=>{})),new o._Window(this.wire,{uuid:this.me.uuid,name:e.name}).createWindow(e)}getCurrent(){if(this.wire.sendAction("get-current-window").catch((e=>{})),!this.wire.me.isWindow)throw new Error("You are not in a Window context");const{uuid:e,name:t}=this.wire.me;return this.wrap({uuid:e,name:t})}getCurrentSync(){if(this.wire.sendAction("get-current-window-sync").catch((e=>{})),!this.wire.me.isWindow)throw new Error("You are not in a Window context");const{uuid:e,name:t}=this.wire.me;return this.wrapSync({uuid:e,name:t})}}t.default=s},5047:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t._Window=void 0;const i=n(7264),r=n(4636),o=n(4169);class s extends r.WebContents{constructor(e,t){super(e,t,"window"),this.identity=t}createWindow(e){return this.wire.sendAction("window-create-window",this.identity).catch((e=>{})),new Promise(((t,n)=>{const i="fire-constructor-callback",r=new Promise((e=>{this.on(i,(function t(n){let r;const{success:o}=n,s=n.data,{message:a}=s;r=o?{httpResponseCode:s.httpResponseCode,apiInjected:s.apiInjected}:{message:s.message,networkErrorCode:s.networkErrorCode,stack:s.stack},this.removeListener(i,t),e({message:a,cbPayload:r,success:o})}))}));void 0===e.waitForPageLoad&&(e.waitForPageLoad=!1),void 0===e.autoShow&&(e.autoShow=!0);const o=this.wire.environment.createChildContent({entityType:"window",options:e});Promise.all([r,o]).then((e=>{const i=e[0];i.success?t(this):n(i);try{this.getWebWindow().fin.__internal_.openerSuccessCBCalled()}catch(e){}})).catch(n)}))}getAllFrames(){return this.wire.sendAction("get-all-frames",this.identity).then((({payload:e})=>e.data))}getBounds(){return this.wire.sendAction("get-window-bounds",this.identity).then((({payload:e})=>e.data))}center(){return this.wire.sendAction("center-window",this.identity).then((()=>{}))}blur(){return this.wire.sendAction("blur-window",this.identity).then((()=>{}))}bringToFront(){return this.wire.sendAction("bring-window-to-front",this.identity).then((()=>{}))}animate(e,t){return this.wire.sendAction("animate-window",{transitions:e,options:t,...this.identity}).then((()=>{}))}hide(){return this.wire.sendAction("hide-window",this.identity).then((()=>{}))}close(e=!1){return this.wire.sendAction("close-window",{force:e,...this.identity}).then((()=>{Object.setPrototypeOf(this,null)}))}focusedWebViewWasChanged(){return this.wire.sendAction("focused-webview-changed",this.identity).then((()=>{}))}getNativeId(){return this.wire.sendAction("get-window-native-id",this.identity).then((({payload:e})=>e.data))}async getCurrentViews(){const{payload:e}=await this.wire.sendAction("window-get-views",this.identity);return e.data.map((e=>new o.View(this.wire,e)))}disableFrame(){return console.warn("Function is deprecated; use disableUserMovement instead."),this.wire.sendAction("disable-window-frame",this.identity).then((()=>{}))}disableUserMovement(){return this.wire.sendAction("disable-window-frame",this.identity).then((()=>{}))}enableFrame(){return console.warn("Function is deprecated; use enableUserMovement instead."),this.wire.sendAction("enable-window-frame",this.identity).then((()=>{}))}enableUserMovement(){return this.wire.sendAction("enable-window-frame",this.identity).then((()=>{}))}flash(){return this.wire.sendAction("flash-window",this.identity).then((()=>{}))}stopFlashing(){return this.wire.sendAction("stop-flash-window",this.identity).then((()=>{}))}getInfo(){return this.wire.sendAction("get-window-info",this.identity).then((({payload:e})=>e.data))}async getLayout(){if(this.wire.sendAction("window-get-layout",this.identity).catch((e=>{})),!(await this.getOptions()).layout)throw new Error("Window does not have a Layout");return this.fin.Platform.Layout.wrap(this.identity)}getOptions(){return this.wire.sendAction("get-window-options",this.identity).then((({payload:e})=>e.data))}getParentApplication(){return this.wire.sendAction("window-get-parent-application",this.identity).catch((e=>{})),Promise.resolve(new i.Application(this.wire,this.identity))}getParentWindow(){return this.wire.sendAction("window-get-parent-window",this.identity).catch((e=>{})),Promise.resolve(new i.Application(this.wire,this.identity)).then((e=>e.getWindow()))}async getSnapshot(e){const t={area:e,...this.identity};return console.warn("Window.getSnapshot has been deprecated, please use Window.capturePage"),(await this.wire.sendAction("get-window-snapshot",t)).payload.data}getState(){return this.wire.sendAction("get-window-state",this.identity).then((({payload:e})=>e.data))}getWebWindow(){return this.wire.sendAction("window-get-web-window",this.identity).catch((e=>{})),this.wire.environment.getWebWindow(this.identity)}isMainWindow(){return this.wire.sendAction("window-is-main-window",this.identity).catch((e=>{})),this.me.uuid===this.me.name}isShowing(){return this.wire.sendAction("is-window-showing",this.identity).then((({payload:e})=>e.data))}maximize(){return this.wire.sendAction("maximize-window",this.identity).then((()=>{}))}minimize(){return this.wire.sendAction("minimize-window",this.identity).then((()=>{}))}moveBy(e,t){return this.wire.sendAction("move-window-by",{deltaLeft:e,deltaTop:t,...this.identity}).then((()=>{}))}moveTo(e,t){return this.wire.sendAction("move-window",{left:e,top:t,...this.identity}).then((()=>{}))}resizeBy(e,t,n){return this.wire.sendAction("resize-window-by",{deltaWidth:Math.floor(e),deltaHeight:Math.floor(t),anchor:n,...this.identity}).then((()=>{}))}resizeTo(e,t,n){return this.wire.sendAction("resize-window",{width:Math.floor(e),height:Math.floor(t),anchor:n,...this.identity}).then((()=>{}))}restore(){return this.wire.sendAction("restore-window",this.identity).then((()=>{}))}setAsForeground(){return this.wire.sendAction("set-foreground-window",this.identity).then((()=>{}))}setBounds(e){return this.wire.sendAction("set-window-bounds",{...e,...this.identity}).then((()=>{}))}show(e=!1){return this.wire.sendAction("show-window",{force:e,...this.identity}).then((()=>{}))}showAt(e,t,n=!1){return this.wire.sendAction("show-at-window",{force:n,left:Math.floor(e),top:Math.floor(t),...this.identity}).then((()=>{}))}updateOptions(e){return this.wire.sendAction("update-window-options",{options:e,...this.identity}).then((()=>{}))}authenticate(e,t){return this.wire.sendAction("window-authenticate",{userName:e,password:t,...this.identity}).then((()=>{}))}async showPopupMenu(e){const{payload:t}=await this.wire.sendAction("show-popup-menu",{options:e,...this.identity});return t.data}async closePopupMenu(){return this.wire.sendAction("close-popup-menu",{...this.identity}).then((()=>{}))}async dispatchPopupResult(e){this.wire.sendAction("window-dispatch-popup-result",this.identity).catch((e=>{})),await this.wire.sendAction("dispatch-popup-result",{data:e,...this.identity})}}t._Window=s},4997:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n),Object.defineProperty(e,i,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||t.hasOwnProperty(n)||i(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0});const o=n(2163);t.default=o.default,r(n(5047),t)},1681:(e,t,n)=>{var i;t.H=void 0;const r=n(6465),o=n(6545),s=n(9298),a=n(9641);class c extends r.EventEmitter{connect(e){throw new Error("You are not running in OpenFin.")}connectSync(){throw new Error("You are not running in OpenFin.")}send(e){throw new Error("You are not running in OpenFin.")}shutdown(){throw new Error("You are not running in OpenFin.")}constructor(){super()}}class d{constructor(){this.childViews=!0}getDefaultChannelOptions(){throw new Error(a.environmentUnsupportedMessage)}getRtcPeer(){throw new Error(a.environmentUnsupportedMessage)}getManagerConstructor(){throw new Error(a.environmentUnsupportedMessage)}getProviderInitializer(){throw new Error(a.environmentUnsupportedMessage)}writeToken(e,t){throw new Error(a.environmentUnsupportedMessage)}retrievePort(e){throw new Error(a.environmentUnsupportedMessage)}getNextMessageId(){throw new Error(a.environmentUnsupportedMessage)}getRandomId(){throw new Error(a.environmentUnsupportedMessage)}createChildContent(e){throw new Error(a.environmentUnsupportedMessage)}getWebWindow(e){throw new Error(a.environmentUnsupportedMessage)}getCurrentEntityIdentity(){throw new Error(a.environmentUnsupportedMessage)}getCurrentEntityType(){return"unknown"}raiseEvent(e,t){throw new Error(a.environmentUnsupportedMessage)}getUrl(){throw new Error(a.environmentUnsupportedMessage)}whenReady(){throw new Error(a.environmentUnsupportedMessage)}}t.H="undefined"!=typeof window&&(null===(i=window)||void 0===i?void 0:i.fin)||(()=>{const e=new d,t=new s.default(c,e,{uuid:"",name:""});return new o.default(t)})()},8068:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getFin=t.registerFin=void 0;const n=new WeakMap;t.registerFin=function(e,t){n.set(e,t)},t.getFin=function(e){const t=n.get(e);if(!t)throw new Error("Could not locate fin api for given transport");return t}},5007:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RuntimeError=t.NotSupportedError=t.NotImplementedError=t.NoAckError=t.DuplicateCorrelationError=t.UnexpectedActionError=t.DisconnectedError=void 0;class n extends Error{constructor(e){super(`Expected websocket state OPEN but found ${e}`),this.readyState=e}}t.DisconnectedError=n;class i extends Error{}t.UnexpectedActionError=i;class r extends Error{}t.DuplicateCorrelationError=r;class o extends Error{}t.NoAckError=o;class s extends Error{}t.NotImplementedError=s;class a extends Error{}t.NotSupportedError=a;class c extends Error{constructor(e){const t=e.payload||e,{reason:n,error:i}=t;super(n),this.name="RuntimeError",(null==i?void 0:i.stack)&&(this.stack=i.stack)}}t.RuntimeError=c},9298:function(e,t,n){var i,r=this&&this.__classPrivateFieldSet||function(e,t,n){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,n),n},o=this&&this.__classPrivateFieldGet||function(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)};Object.defineProperty(t,"__esModule",{value:!0});const s=n(6465),a=n(8624),c=n(5007),d=n(2734),h=n(9641);class l extends s.EventEmitter{constructor(e,t,n){super(),this.wireListeners=new Map,this.topicRefMap=new Map,this.eventAggregator=new d.default,this.messageHandlers=[this.eventAggregator.dispatchEvent],i.set(this,void 0),this.connectSync=()=>{o(this,i).connectSync()},this.getPort=()=>{if("NodeEnvironment"!==this.environment.constructor.name)throw new c.NotImplementedError("Not Implemented");return o(this,i).wire.url.split(":").slice(-1)[0]},r(this,i,new e(this.onmessage.bind(this))),this.environment=t,this.sendRaw=o(this,i).send.bind(o(this,i)),this.registerMessageHandler(this.handleMessage.bind(this)),o(this,i).on("disconnected",(()=>{for(const[,{reject:e}]of this.wireListeners)e("Remote connection has closed");this.wireListeners.clear(),this.emit("disconnected")}));const{uuid:s,name:a}=n,l=this.environment.getCurrentEntityType();this.me=h.getBaseMe(l,s,a)}shutdown(){return o(this,i).shutdown()}async connect(e){if(a.isExistingConnectConfig(e))return this.connectByPort(e);if(a.isNewConnectConfig(e)){const t=await this.environment.retrievePort(e);return this.connectByPort({...e,address:`ws://localhost:${t}`})}}async connectByPort(e){const{address:t,uuid:n}=e,r={...e,type:"file-token"},s=o(this,i);await s.connect(t);const a=await this.sendAction("request-external-authorization",{uuid:n,type:"file-token"},!0);if("external-authorization-response"!==a.action)throw new c.UnexpectedActionError(a.action);const{token:d}=a.payload;await this.environment.writeToken(a.payload.file,a.payload.token);const h=await this.sendAction("request-authorization",r,!0);if("authorization-response"!==h.action)throw new c.UnexpectedActionError(h.action);if(!0!==h.payload.success)throw new c.RuntimeError(h.payload);return d}sendAction(e,t={},n=!1){return new Promise(((r,s)=>{const a=this.environment.getNextMessageId(),c={action:e,payload:t,messageId:a},d=o(this,i);return this.addWireListener(a,r,s,n),d.send(c).catch(s)}))}ferryAction(e){return new Promise(((t,n)=>{const r=this.environment.getNextMessageId();e.messageId=r;const s=e=>{t(e.payload)};return o(this,i).send(e).then((()=>this.addWireListener(r,s,n,!1))).catch(n)}))}registerMessageHandler(e){this.messageHandlers.push(e)}addWireListener(e,t,n,i){i?this.uncorrelatedListener=t:this.wireListeners.has(e)?n(new c.DuplicateCorrelationError(String(e))):this.wireListeners.set(e,{resolve:t,reject:n})}onmessage(e){for(const t of this.messageHandlers)t.call(null,e)}handleMessage(e){const t=e.correlationId||NaN;if("correlationId"in e){if(!this.wireListeners.has(t))return!1;{const{resolve:n,reject:i}=this.wireListeners.get(t);"ack"!==e.action?i(new c.NoAckError(e.action)):"payload"in e?e.payload.success?n.call(null,e):i(new c.RuntimeError(e.payload)):i(new c.RuntimeError(e)),this.wireListeners.delete(t)}}else this.uncorrelatedListener&&this.uncorrelatedListener.call(null,e),this.uncorrelatedListener=()=>{};return!0}}i=new WeakMap,t.default=l},8624:(e,t)=>{function n(e){return"string"==typeof e.manifestUrl}function i(e){return r(e)&&"string"==typeof e.address}function r(e){return"string"==typeof e.uuid}function o(e){return e.runtime&&"string"==typeof e.runtime.version}function s(e){return r(e)&&o(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.isInternalConnectConfig=t.isPortDiscoveryConfig=t.isNewConnectConfig=t.isExistingConnectConfig=t.isExternalConfig=void 0,t.isExternalConfig=n,t.isExistingConnectConfig=i,t.isNewConnectConfig=s,t.isPortDiscoveryConfig=function(e){return n(e)&&o(e)||s(e)},t.isInternalConnectConfig=function(e){return i(e)||s(e)}},2366:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.errorToPOJO=void 0,t.errorToPOJO=function(e){return{stack:e.stack,message:e.message,toString:e.toString}}},3917:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.exhaustiveCheck=void 0,t.exhaustiveCheck=function(e,t){throw new Error(`Unsupported value: ${e}${t?`\n Supported values are: ${t.join("")}`:""}`)}},3442:(e,t)=>{async function n(e){const t=[];for(const n of e){const e=await n();t.push(e)}return t}Object.defineProperty(t,"__esModule",{value:!0}),t.promiseMapSerial=t.serial=t.promiseMap=t.promisify=void 0,t.promisify=function(e){return(...t)=>new Promise(((n,i)=>{e(...t,((e,t)=>e?i(e):n(t)))}))},t.promiseMap=async function(e,t){return Promise.all(e.map(t))},t.serial=n,t.promiseMapSerial=async function(e,t){return n(e.map(((e,n,i)=>()=>t(e,n,i))))}},3127:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default=class{constructor(){this.topicRefMap=new Map}incRefCount(e){const t=this.topicRefMap.get(e);let n;if(t){const i=t+1;n=i,this.topicRefMap.set(e,i)}else this.topicRefMap.set(e,1),n=1;return n}decRefCount(e){const t=this.topicRefMap.get(e);let n;if(t){const i=t-1;this.topicRefMap.set(e,i),n=i}else n=-1;return n}actOnFirst(e,t,n){return 1===this.incRefCount(e)?t():n()}actOnLast(e,t,n){return 0===this.decRefCount(e)?t():n()}}},2300:(e,t)=>{function n(e){return[...e.split(".").reverse().entries()].reduce(((e,[t,n])=>e+ +n*1e4**t),0)}function i(e,t){return n(e)>=n(t)}function r(e){return e.split("/")[0]}Object.defineProperty(t,"__esModule",{value:!0}),t.runtimeUuidMeetsMinimumRuntimeVersion=t.parseRuntimeUuid=t.meetsMinimumRuntimeVersion=void 0,t.meetsMinimumRuntimeVersion=i,t.parseRuntimeUuid=r,t.runtimeUuidMeetsMinimumRuntimeVersion=function(e,t){return i(r(e),t)}},4999:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.validateIdentity=void 0,t.validateIdentity=function(e){let t;return"object"==typeof e&&"string"==typeof e.uuid||(t="Not a valid identity object"),t}},6465:e=>{var t,n="object"==typeof Reflect?Reflect:null,i=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var r=Number.isNaN||function(e){return e!=e};function o(){o.init.call(this)}e.exports=o,e.exports.once=function(e,t){return new Promise((function(n,i){function r(n){e.removeListener(t,o),i(n)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",r),n([].slice.call(arguments))}f(e,t,o,{once:!0}),"error"!==t&&function(e,t,n){"function"==typeof e.on&&f(e,"error",t,{once:!0})}(e,r)}))},o.EventEmitter=o,o.prototype._events=void 0,o.prototype._eventsCount=0,o.prototype._maxListeners=void 0;var s=10;function a(e){if("function"!=typeof e)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function c(e){return void 0===e._maxListeners?o.defaultMaxListeners:e._maxListeners}function d(e,t,n,i){var r,o,s,d;if(a(n),void 0===(o=e._events)?(o=e._events=Object.create(null),e._eventsCount=0):(void 0!==o.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),o=e._events),s=o[t]),void 0===s)s=o[t]=n,++e._eventsCount;else if("function"==typeof s?s=o[t]=i?[n,s]:[s,n]:i?s.unshift(n):s.push(n),(r=c(e))>0&&s.length>r&&!s.warned){s.warned=!0;var h=new Error("Possible EventEmitter memory leak detected. "+s.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=e,h.type=t,h.count=s.length,d=h,console&&console.warn&&console.warn(d)}return e}function h(){if(!this.fired)return this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0===arguments.length?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function l(e,t,n){var i={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=h.bind(i);return r.listener=n,i.wrapFn=r,r}function u(e,t,n){var i=e._events;if(void 0===i)return[];var r=i[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=new Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):w(r,r.length)}function p(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function w(e,t){for(var n=new Array(t),i=0;i<t;++i)n[i]=e[i];return n}function f(e,t,n,i){if("function"==typeof e.on)i.once?e.once(t,n):e.on(t,n);else{if("function"!=typeof e.addEventListener)throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e);e.addEventListener(t,(function r(o){i.once&&e.removeEventListener(t,r),n(o)}))}}Object.defineProperty(o,"defaultMaxListeners",{enumerable:!0,get:function(){return s},set:function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");s=e}}),o.init=function(){void 0!==this._events&&this._events!==Object.getPrototypeOf(this)._events||(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},o.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||r(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},o.prototype.getMaxListeners=function(){return c(this)},o.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,o=this._events;if(void 0!==o)r=r&&void 0===o.error;else if(!r)return!1;if(r){var s;if(t.length>0&&(s=t[0]),s instanceof Error)throw s;var a=new Error("Unhandled error."+(s?" ("+s.message+")":""));throw a.context=s,a}var c=o[e];if(void 0===c)return!1;if("function"==typeof c)i(c,this,t);else{var d=c.length,h=w(c,d);for(n=0;n<d;++n)i(h[n],this,t)}return!0},o.prototype.addListener=function(e,t){return d(this,e,t,!1)},o.prototype.on=o.prototype.addListener,o.prototype.prependListener=function(e,t){return d(this,e,t,!0)},o.prototype.once=function(e,t){return a(t),this.on(e,l(this,e,t)),this},o.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,l(this,e,t)),this},o.prototype.removeListener=function(e,t){var n,i,r,o,s;if(a(t),void 0===(i=this._events))return this;if(void 0===(n=i[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete i[e],i.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,o=n.length-1;o>=0;o--)if(n[o]===t||n[o].listener===t){s=n[o].listener,r=o;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(i[e]=n[0]),void 0!==i.removeListener&&this.emit("removeListener",e,s||t)}return this},o.prototype.off=o.prototype.removeListener,o.prototype.removeAllListeners=function(e){var t,n,i;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0===arguments.length){var r,o=Object.keys(n);for(i=0;i<o.length;++i)"removeListener"!==(r=o[i])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(i=t.length-1;i>=0;i--)this.removeListener(e,t[i]);return this},o.prototype.listeners=function(e){return u(this,e,!0)},o.prototype.rawListeners=function(e){return u(this,e,!1)},o.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):p.call(e,t)},o.prototype.listenerCount=p,o.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}},t={};function n(i){var r=t[i];if(void 0!==r)return r.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t);var i={};(()=>{n.d(i,{MS:()=>o,M_:()=>s,hY:()=>a,G4:()=>c,_W:()=>d,o:()=>h,C3:()=>u,fB:()=>l,if:()=>p,$j:()=>_,U$:()=>y,U7:()=>g,B5:()=>T});var e=n(1681),t=n(9421),r=n.n(t);class o extends Error{constructor(e="An unexpected error has occurred",t){var n;super(e),t&&(this.innerError=t&&t),this.stack=null===(n=this.stack)||void 0===n?void 0:n.replace(/^(\w*Error)/,`${this.constructor.name}`)}}class s extends o{constructor(e="Unable to authorize connection to Salesforce",t){var n,i,r;super(e,t),t&&t.isAxiosError&&(t.message=null!==(r=null===(i=null===(n=t.response)||void 0===n?void 0:n.data)||void 0===i?void 0:i.error_description)&&void 0!==r?r:t.message)}}class a extends o{constructor(e="Not connected to Salesforce",t){super(e,t)}}class c extends o{constructor(e="Retrieve Salesforce object data failed",t){super(e,t)}}class d extends o{constructor(e="Invalid parameter detected",t){super(e,t)}}class h extends o{constructor(e="Execute Salesforce query failed",t){super(e,t)}}class l extends o{constructor(e="Unable to retrieve search results from Salesforce",t){super(e,t)}}class u extends o{constructor(e,t="Execute Salesforce REST API request failed"){var n,i,r,o,s;super(t,null!=e?e:void 0),this.restApiErrorCode="",this.restApiErrorDescription="",this.restApiResponseStatus=void 0;const a=e;if(null==a?void 0:a.isAxiosError){if(this.restApiResponseStatus=null===(n=a.response)||void 0===n?void 0:n.status,!(null===(r=null===(i=a.response)||void 0===i?void 0:i.data)||void 0===r?void 0:r.length))return;const e=null===(s=null===(o=a.response)||void 0===o?void 0:o.data)||void 0===s?void 0:s[0];if(e){const{errorCode:t,message:n}=e;this.restApiErrorCode=t,this.restApiErrorDescription=n}}}}class p extends o{constructor(e="An unexpected error occurred",t){super(e,t)}}let w=!1;const f="[@openfin/salesforce]",y=()=>{w=!1},g=()=>{w=!0,v("v2.1.4")},m=e=>{if(w&&(e.innerError?console.error(f,e,"\n\n(inner)",e.innerError):console.error(f,e),e instanceof u)){const{restApiErrorCode:t,restApiErrorDescription:n}=e;if(n){const e=n.replace(/\n/g," ").trim(),i=t?`${t}: ${e}`:e;console.warn(f,i)}}},v=(...e)=>{w&&console.log(f,...e)},C=(...e)=>{w&&console.warn(f,...e)};e.H||Object.assign(window,{fin:{}}),Object.assign(e.H,{Integrations:{Salesforce:{enableLogging:g,disableLogging:y}}});const E="54.0",x=/vXX\.X/i,A=e=>(Array.isArray(e)?e:Object.entries(e)).reduce(((e,t)=>{const n=Array.isArray(e)?t:t[1];let i;switch(!0){case null==n:i=n;break;case"string"==typeof n:i=n.replace(x,"v54.0");break;case Array.isArray(n):case"object"==typeof n:i=A(n);break;default:i=n}return Array.isArray(e)?e.push(i):e[t[0]]=i,e}),Array.isArray(e)?[]:{}),I="salesforce-auth",b="https://login.salesforce.com/services/oauth2/success",P=(e,t,n)=>{e.accessToken&&window.localStorage.setItem(k(t,n),e.accessToken),e.refreshToken&&window.localStorage.setItem(F(t,n),e.refreshToken)},_=async(t,n)=>{let i;try{i=new URL(t).origin}catch(e){throw new d("Invalid Salesforce URL")}if(!/salesforce.com$/i.test(i))throw new d("Invalid Salesforce URL");if(void 0===(null!=n?n:void 0)||""===n.trim())throw new d("Consumer key not provided");v(`Connecting to ${i} using key ${n}`);const r=await T(t,n);if(r)return r;v("No existing connection found, starting auth flow");const o=(await e.H.Application.getCurrentSync().getChildWindows()).find((e=>e.identity.name===I));o&&await o.close(!0);const c=(new Date).getTime().toString(),h=R(),l=await S(h),u=`${i}/services/oauth2/authorize?\n    client_id=${n}&\n    redirect_uri=${b}&\n    response_type=code&\n    scope=api+refresh_token&\n    state=${c}&\n    code_challenge=${l}&\n    display=popup&\n    prompt=select_account\n    `.replace(/\s/g,""),p=await e.H.Window.create({alwaysOnTop:!0,maximizable:!1,minimizable:!1,autoShow:!1,defaultCentered:!0,defaultHeight:700,defaultWidth:600,includeInSnapshots:!1,name:I,resizable:!1,saveWindowState:!1,showTaskbarIcon:!1,url:u}),w=await new Promise(((e,t)=>{let n;const i=window.setTimeout((()=>{window.clearInterval(n),window.clearTimeout(i),p.removeAllListeners(),p.close(!0);const e=new s("Authorization timed out");m(e),t(e)}),3e5);p.addListener("closing",(async()=>{v("User closed auth window"),window.clearInterval(n),window.clearTimeout(i),p.removeAllListeners();const e=new s("Failed to complete authorization");m(e),t(e)})),n=window.setInterval((()=>(async(e,t,n,i,r,o)=>{let a;try{a=await e.getInfo()}catch(e){window.clearInterval(t),window.clearTimeout(n);const i=new s("Could not locate oauth flow window");return m(i),o(i)}const c=new URL(a.url);if(0===new URL(a.url).href.toLowerCase().indexOf(b.toLowerCase())){if(window.clearInterval(t),window.clearTimeout(n),e.removeAllListeners(),e.close(!0),c.searchParams.get("state")!==i){const e=new s("State mismatch");return m(e),o(e)}const a=c.searchParams.get("code");if(!a){const e=new s("Authorization code missing");return m(e),o(e)}return v("Authorization code received"),r(a)}const d=await e.executeJavaScript("window.document.body.innerText"),h=new URLSearchParams(d).get("error_description");if(h){window.clearInterval(t),window.clearTimeout(n),e.removeAllListeners(),e.close(!0);const i=h[0].toUpperCase()+h.slice(1),r=new s(i);m(r),o(r)}else await e.isShowing()||(v("Showing auth window"),await e.show(!0),await e.focus())})(p,n,i,c,e,t)),500)})),f=await O(w,h,i,n);if(v("Checking connection with new access token"),!await U(f.accessToken,i)){const e=new a("Invalid Salesforce org URL or access token");throw m(e),e}return v("Connection established"),P(f,i,n),{consumerKey:n,disconnect:M(i,n),getAuthTokens:()=>L(i,n),orgUrl:i,executeApiRequest:j(i,n)}},M=(e,t)=>async()=>{v("Disconnecting from Salesforce");let n=window.localStorage.getItem(F(e,t));if(n)v("Revoking refresh token");else{if(n=window.localStorage.getItem(k(e,t)),!n)return void v("No tokens found in storage");v("Revoking access token")}try{await r().get(`${e}/services/oauth2/revoke?token=${n}`)}catch(e){C("Failed to revoke tokens",null==e?void 0:e.message)}N(e,t)},O=async(e,t,n,i)=>{v("Exchanging auth code for tokens");const o=`${n}/services/oauth2/token`,a=`\n    grant_type=authorization_code&\n    client_id=${i}&\n    code=${e}&\n    code_verifier=${t}&\n    redirect_uri=${b}\n    `.replace(/\s/g,"");let c;try{c=(await r().post(o,a,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})).data}catch(e){const t=new s("Failed to exchange authorization code for auth tokens",e);throw m(t),t}const{access_token:d,refresh_token:h}=c;if(!d||!h)throw new s("Missing access token or refresh token during code exchange");return v("Tokens received"),{accessToken:d,refreshToken:h}},S=async e=>{const t=(new TextEncoder).encode(e),n=await window.crypto.subtle.digest("SHA-256",t);return btoa(String.fromCharCode.apply(null,Array.from(new Uint8Array(n)))).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+\$/,"")},R=()=>{const e=new Uint32Array(64);return window.crypto.getRandomValues(e),Array.from(e,(e=>`0${e.toString(16)}`.substr(-2))).join("")},k=(e,t)=>`access-token_#_${new URL(e).hostname}_#_${t}`,L=(e,t)=>({accessToken:window.localStorage.getItem(k(e,t)),refreshToken:window.localStorage.getItem(F(e,t))}),T=async(e,t)=>{let n;if(v("Checking for existing connection"),!e||!t)return null;try{n=new URL(e).origin}catch(e){return null}const{accessToken:i}=L(n,t);if(!i)return null;if(!await U(i,n))try{await B(n,t)}catch(e){return null}return v(`Connection exists to ${e}`),{consumerKey:t,disconnect:M(n,t),getAuthTokens:()=>L(n,t),orgUrl:n,executeApiRequest:j(n,t)}},j=(e,t)=>async(n,i,o,s,c)=>{const{accessToken:h}=L(e,t);if(!h){const e=new a;throw m(e),e}const l=t=>(async(e,t,n,i="GET",o={},s={},a=!0)=>{var c,h;if(!n)throw new d("API endpoint not provided");let l;if(n=(h=n).startsWith("/")?h:`/${h}`,/^\/services\/data\//i.test(n)){const e=null===(c=/\/v(\w{2}\.\w)\//.exec(n))||void 0===c?void 0:c[1];if(!e)throw new u(null,"REST API version not specified");x.test(n)?n=n.replace(e,E):e!==E&&C(`Requested REST API version (${e}) is different to the current supported version (54.0). Using an API version other than current supported version may cause errors.`),l=new RegExp("/services/data/v54.0/composite","i").test(n)?A(o):o}else l=o;v(`Executing ${i.toUpperCase()} API request to ${n}`,l,s),a&&Object.assign(s,{Authorization:`Bearer ${t}`});try{let t;switch(i.toUpperCase()){case"DELETE":t=await r().delete(`${e}${n}`,{headers:s});break;case"GET":t=await r().get(`${e}${n}`,{headers:s});break;case"HEAD":t=await r().head(`${e}${n}`,{headers:s});break;case"PATCH":t=await r().patch(`${e}${n}`,o,{headers:s});break;case"POST":t=await r().post(`${e}${n}`,l,{headers:s});break;default:throw new u(null,"Invalid HTTP method")}return{data:t.data,status:t.status}}catch(e){if(e instanceof u)throw e;throw new u(e)}})(e,t,n,i,o,s,c);let p;try{p=await l(h)}catch(n){if(!(n instanceof u))throw m(n),n;return await $(n,e,t,h,l)}return p},F=(e,t)=>`refresh-token_#_${new URL(e).hostname}_#_${t}`,$=async(e,t,n,i,r)=>{if(m(e),await G(e,t,i))try{const e=await B(t,n);return v("Retrying request"),await r(e.accessToken)}catch(e){throw m(e),e}throw e},B=async(e,t)=>{var n,i;const{refreshToken:o}=L(e,t);if(!o)throw N(e,t),new a("No refresh token available");v("Refreshing access token");const s=`${e}/services/oauth2/token`,c=`\n    grant_type=refresh_token&\n    client_id=${t}&\n    refresh_token=${o}\n    `.replace(/\s/g,"");let d;try{d=(await r().post(s,c,{headers:{"Content-Type":"application/x-www-form-urlencoded"}})).data}catch(r){const o=null===(i=null===(n=r.response)||void 0===n?void 0:n.data)||void 0===i?void 0:i.error_description,s="Failed to refresh access token";throw v(o?`${s}: ${o}`:s),N(e,t),new a(s)}const{access_token:h}=d;if(!h)throw new a("Missing access token after refreshing");const l={accessToken:h,refreshToken:o};return P(l,e,t),l},N=(e,t)=>{window.localStorage.removeItem(k(e,t)),window.localStorage.removeItem(F(e,t))},G=async(e,t,n)=>{var i;return("Network Error"===(null===(i=e.innerError)||void 0===i?void 0:i.message)||"Network Error"===e.message)&&!await U(n,t)},U=async(e,t)=>{try{await r().get(`${t}/services/oauth2/userinfo?oauth_token=${e}`)}catch(e){return!1}return!0}})();var r=i.MS,o=i.M_,s=i.hY,a=i.G4,c=i._W,d=i.o,h=i.C3,l=i.fB,u=i.if,p=i.$j,w=i.U$,f=i.U7,y=i.B5;

/***/ }),

/***/ "../../node_modules/@openfin/workspace-platform/index.js":
/*!***************************************************************!*\
  !*** ../../node_modules/@openfin/workspace-platform/index.js ***!
  \***************************************************************/
/***/ ((module) => {

(()=>{"use strict";var e,t,a,n,o,i,r,s,c={d:(e,t)=>{for(var a in t)c.o(t,a)&&!c.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},d={};c.r(d),c.d(d,{AppManifestType:()=>r,BrowserButtonType:()=>g,CustomActionCallerType:()=>h,GlobalContextMenuOptionType:()=>l,PageTabContextMenuOptionType:()=>w,SaveButtonContextMenuOptionType:()=>y,SaveModalType:()=>f,ViewTabMenuOptionType:()=>u,getCurrentSync:()=>Et,init:()=>gn,wrapSync:()=>Mt}),function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(e||(e={})),function(e){e.UserAction="user-action",e.FocusChange="focus-change",e.Reload="reload"}(t||(t={})),function(e){e.Active="active",e.Default="default"}(a||(a={})),function(e){e.Suggestion="suggestion"}(n||(n={})),function(e){e.Contact="Contact",e.Custom="Custom",e.List="List",e.Plain="Plain",e.SimpleText="SimpleText",e.Loading="Loading",e.Error="Error"}(o||(o={})),function(e){e.MultiSelect="MultiSelect"}(i||(i={})),function(e){e.Snapshot="snapshot",e.Manifest="manifest",e.View="view",e.External="external"}(r||(r={})),function(e){e.LandingPage="landingPage",e.AppGrid="appGrid"}(s||(s={}));var p,l,w,u,g,y,h,f,m;!function(e){e.Primary="primary",e.Secondary="secondary",e.TextOnly="textOnly"}(p||(p={})),function(e){e.NewWindow="NewWindow",e.NewPage="NewPage",e.SavePage="SavePage",e.SavePageAs="SavePageAs",e.CloseWindow="CloseWindow",e.RestoreChanges="RestoreChanges",e.SaveWorkspace="SaveWorkspace",e.SaveWorkspaceAs="SaveWorkspaceAs",e.RenameWorkspace="RenameWorkspace",e.SwitchWorkspace="SwitchWorkspace",e.DeleteWorkspace="DeleteWorkspace",e.OpenStorefront="OpenStorefront",e.Quit="Quit",e.Custom="Custom"}(l||(l={})),function(e){e.Close="Close",e.Duplicate="Duplicate",e.Rename="Rename",e.Save="Save",e.SaveAs="Save As",e.Custom="Custom"}(w||(w={})),function(e){e.NewView="NewView",e.DuplicateViews="DuplicateView",e.OpenWithDefaultBrowser="OpenWithDefaultBrowser",e.ReloadViews="ReloadTab",e.CloseViews="CloseTab",e.AddToChannel="AddToChannel",e.RemoveFromChannel="RemoveFromChannel",e.Custom="Custom"}(u||(u={})),function(e){e.ShowHideTabs="ShowHideTabs",e.ColorLinking="ColorLinking",e.PresetLayouts="PresetLayouts",e.LockUnlockPage="LockUnlockPage",e.SaveMenu="SaveMenu",e.SavePage="SavePage",e.Minimise="Minimise",e.Maximise="Maximise",e.Close="Close",e.Custom="Custom"}(g||(g={})),function(e){e.SavePage="SavePage",e.SaveWorkspace="SaveWorkspace",e.SavePageAs="SavePageAs",e.SaveWorkspaceAs="SaveWorkspaceAs",e.Custom="Custom"}(y||(y={})),function(e){e.CustomButton="CustomButton",e.GlobalContextMenu="GlobalContextMenu",e.ViewTabContextMenu="ViewTabContextMenu",e.PageTabContextMenu="PageTabContextMenu",e.SaveButtonContextMenu="SaveButtonContextMenu",e.API="API"}(h||(h={})),function(e){e.SAVE_PAGE="SAVE_PAGE",e.SAVE_WORKSPACE="SAVE_WORKSPACE",e.SAVE_PAGE_AS="SAVE_PAGE_AS",e.SAVE_WORKSPACE_AS="SAVE_WORKSPACE_AS",e.RENAME_PAGE="RENAME_PAGE",e.RENAME_WORKSPACE="RENAME_WORKSPACE"}(f||(f={})),function(e){e.Local="local",e.Dev="dev",e.Staging="staging",e.Prod="prod"}(m||(m={}));const S="undefined"!=typeof window&&"undefined"!=typeof fin,v=("undefined"==typeof process||process.env?.JEST_WORKER_ID,"undefined"!=typeof window),P=v&&"undefined"!=typeof indexedDB,k=v?window.origin:m.Local,b=S&&fin.me.uuid,W=S&&fin.me.name,C=S&&fin.me.entityType,I=(m.Local,m.Dev,m.Staging,m.Prod,e=>e.startsWith("http://")||e.startsWith("https://")?e:k+e),A=(I("https://cdn.openfin.co/workspace/8.1.7"),I("https://cdn.openfin.co/workspace/8.1.7")),T=("undefined"!=typeof WORKSPACE_DOCS_PLATFORM_URL&&I(WORKSPACE_DOCS_PLATFORM_URL),"undefined"!=typeof WORKSPACE_DOCS_CLIENT_URL&&I(WORKSPACE_DOCS_CLIENT_URL),"26.102.70.16"),M="8.1.7";var E,O,B;!function(e){e.Workspace="openfin-browser"}(E||(E={})),function(e){e.RunRequested="run-requested",e.WindowOptionsChanged="window-options-changed",e.WindowClosed="window-closed",e.WindowCreated="window-created"}(O||(O={})),function(e){e.FinProtocol="fin-protocol"}(B||(B={}));const R={uuid:b,name:b},L=(E.Workspace,E.Workspace,e=>{if(!S)throw new Error("getApplication cannot be used in a non OpenFin env. Avoid using this during pre-rendering.");return fin.Application.wrapSync(e)}),x=()=>L(R);var V,U;!function(e){e.Home="openfin-home",e.Dock="openfin-dock",e.Storefront="openfin-storefront",e.HomeInternal="openfin-home-internal",e.BrowserMenu="openfin-browser-menu",e.BrowserIndicator="openfin-browser-indicator",e.BrowserWindow="internal-generated-window"}(V||(V={})),function(e){e.Shown="shown",e.BoundsChanged="bounds-changed",e.LayoutReady="layout-ready",e.EndUserBoundsChanging="end-user-bounds-changing",e.Blurred="blurred",e.CloseRequested="close-requested",e.Focused="focused",e.ShowRequested="show-requested",e.ViewCrashed="view-crashed",e.ViewAttached="view-attached",e.ViewDetached="view-detached",e.ViewPageTitleUpdated="view-page-title-updated",e.ViewDestroyed="view-destroyed",e.OptionsChanged="options-changed"}(U||(U={}));function D(e){if(!S)throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");return fin.Window.wrapSync(e)}const _={name:W,uuid:b};function F(){return D(_)}V.Home,E.Workspace,V.Dock,E.Workspace;const G={name:V.Storefront,uuid:E.Workspace};E.Workspace,E.Workspace;async function N(e){const t=D(e);"minimized"===await t.getState()&&await t.restore(),await t.show(),await t.bringToFront(),await t.focus()}const $=e=>e.startsWith(V.BrowserWindow);async function H(){return(await fin.Application.getCurrentSync().getChildWindows()).filter((e=>$(e.identity.name)))}const q=e=>D(e).getOptions().then((()=>!0)).catch((()=>!1)),K=()=>q(G);var j;!function(e){e.Browser="Browser",e.Home="Home",e.Notification="Notification",e.Storefront="Storefront",e.Platform="Platform",e.Theming="Theming"}(j||(j={}));const z=async(e,t)=>{const a={apiVersion:t.apiVersion||M,componentName:e,componentVersion:M,...t};fin.System.registerUsage({type:"workspace-licensing",data:a})};var Q;!function(e){e.CurrentWorkspaceId="currentWorkspaceId",e.LastFocusedBrowserWindow="lastFocusedBrowserWindow",e.MachineName="machineName",e.NewTabPageLayout="NewTabPageLayout",e.NewTabPageSort="NewTabPageSort"}(Q||(Q={}));const J=Q;var X;!function(e){e.LaunchApp="launchApp",e.SavePage="savePage",e.GetSavedPage="getSavedPage",e.CreateSavedPage="createSavedPage",e.UpdateSavedPage="updateSavedPage",e.DeleteSavedPage="deleteSavedPage",e.GetSavedPages="getSavedPages",e.CreateSavedPageInternal="createSavedPageInternal",e.UpdateSavedPageInternal="updateSavedPageInternal",e.DeleteSavedPageInternal="deleteSavedPageInternal",e.SharePage="sharePage",e.UpdatePageForWindow="updatePageForWindow",e.AttachPagesToWindow="attachPagesToWindow",e.DetachPagesFromWindow="detachPagesFromWindow",e.ReorderPagesForWindow="reorderPagesForWindow",e.SetActivePage="setActivePage",e.GetAllAttachedPages="getAllAttachedPages",e.GetActivePageIdForWindow="getActivePageIdForWindow",e.GetPagesForWindow="getPagesForWindow",e.GetPageForWindow="getPageForWindow",e.GetSavedPageMetadata="getSavedPageMetadata",e.GetUniquePageTitle="getUniquePageTitle",e.GetLastFocusedBrowserWindow="getLastFocusedBrowserWindow",e.GetThemes="getThemes",e.OpenGlobalContextMenuInternal="openGlobalContextMenuInternal",e.OpenViewTabContextMenuInternal="openViewTabContextMenuInternal",e.OpenPageTabContextMenuInternal="openPageTabContextMenuInternal",e.OpenSaveButtonContextMenuInternal="openSaveButtonContextMenuInternal",e.InvokeCustomActionInternal="invokeCustomActionInternal",e.GetSavedWorkspace="getSavedWorkspace",e.CreateSavedWorkspace="createSavedWorkspace",e.UpdateSavedWorkspace="updateSavedWorkspace",e.DeleteSavedWorkspace="deleteSavedWorkspace",e.GetSavedWorkspaces="getSavedWorkspaces",e.SaveWorkspace="saveWorkspace",e.GetCurrentWorkspace="getCurrentWorkspace",e.ApplyWorkspace="applyWorkspace",e.SetActiveWorkspace="setActiveWorkspace",e.IsBrowserInitialized="isBrowserInitialized"}(X||(X={}));const Y=async e=>{const t=fin.Platform.wrapSync(e),a=await t.getClient(),n="Target is not a Workspace Platform. Target must call WorkspacePlatform.init";try{const e=await a.dispatch("isWorkspacePlatform");if(!0===e||!0===e.isWorkspacePlatform)return a;throw new Error(n)}catch(e){throw new Error(n)}},Z=async e=>{const t=fin.Platform.wrapSync(e),a=await t.getClient(),n="Target is not a Workspace Platform. Target must call WorkspacePlatform.init";let o;try{o=await a.dispatch("isWorkspacePlatform")}catch(e){throw new Error(n)}if(!0!==o?.isWorkspacePlatform)throw new Error(n);if(!0!==o?.isBrowserInitialized)throw new Error("Target is not a Browser-enabled Workspace Platform.");return a},ee=(e,t)=>!t.find((t=>t===e)),te=(e,t)=>`${e} (${t})`,ae=(e,t)=>{let a=1;const n=e.replace(/ \(.+\)$/,"");for(;!ee(te(n,a),t);)a+=1;return te(n,a)};async function ne(e){try{const t=Et();await t.applySnapshot(e.snapshot,{closeExistingWindows:!0}),oe(e)}catch(e){}}function oe(e){if("undefined"!=typeof localStorage)try{const t=JSON.stringify(e);localStorage.setItem(J.CurrentWorkspaceId,t)}catch(e){}}async function ie(){if("undefined"==typeof localStorage)return;const e=Et(),t=await e.getSnapshot();return{workspaceId:crypto.randomUUID(),title:await ce(),metadata:{APIVersion:M},snapshot:t}}async function re(){if("undefined"==typeof localStorage)return;const e=localStorage.getItem(J.CurrentWorkspaceId);if(!e)return ie();const t=JSON.parse(e),a=Et(),n=await a.getSnapshot();return{...t,metadata:{APIVersion:M},snapshot:n}}const se=async e=>await(async e=>(await Y(_)).dispatch(X.GetSavedWorkspace,e))(e.workspaceId)?(async e=>(await Y(_)).dispatch(X.UpdateSavedWorkspace,e))({workspaceId:e.workspaceId,workspace:e}):(async e=>(await Y(_)).dispatch(X.CreateSavedWorkspace,e))({workspace:e});async function ce(e="Untitled Workspace"){const t=(await(async()=>(await Y(_)).dispatch(X.GetSavedWorkspaces,void 0))()).map((({title:e})=>e));return t.find((t=>t===e))?ae(e,t):e}async function de(){if("undefined"!=typeof localStorage)try{const e=localStorage.getItem(J.LastFocusedBrowserWindow),t=JSON.parse(e);if(await q(t))return t}catch(e){throw new Error(`failed to get last focused browser window: ${e}`)}}function pe(e=fin.me.identity){$(e.name)&&function(e){if("undefined"!=typeof localStorage)try{const t=JSON.stringify(e);localStorage.setItem(J.LastFocusedBrowserWindow,t)}catch(e){}}(e)}const le=(e,t=0)=>{let a,n,o=!1;const i=async n=>{const r=await e(...n);if(o){await new Promise((e=>setTimeout(e,t)));const e=a;return a=void 0,o=!1,i(e)}return r};return(...e)=>(n?(o=!0,a=e):n=i(e).then((e=>(n=void 0,e))),n)};var we;!function(e){e.TabCreated="tab-created",e.ContainerCreated="container-created",e.ContainerResized="container-resized"}(we||(we={}));const ue=(e,t)=>e.content?{...e,content:e.content.map((e=>ue(e,t)))}:{...e,componentState:t(e.componentState)},ge=e=>({...e,name:e.name?e.name:crypto.randomUUID()}),ye=e=>{const t=[];return(e&&Array.isArray(e)?e:[]).forEach((e=>{if("component"===e.type)return t.push(e.componentState);const a=ye(e.content);t.push(...a)})),t},he=async(e,t,a=_)=>{let n;if($(a.name)){n=(await D(a).getOptions()).layout||{settings:{}}}return{...n,content:[{type:"stack",content:[{type:"component",componentName:"view",componentState:{title:e,url:t}}]}]}};new Map;function fe(e,t){return async(a,...n)=>{e.has(a)&&e.get(a).forEach((e=>e(...n))),t&&await t({event:a,payload:n})}}function me(e,t){return t&&t((t=>{const{event:a,payload:n}=t;e.has(a)&&e.get(a).forEach((e=>e(...n)))})),(t,a)=>{e.has(t)||e.set(t,new Set),e.get(t).add(a)}}function Se(e){return(t,a)=>{e.has(t)||e.set(t,new Set);const n=e.get(t),o=(...e)=>{a(...e),n.delete(o)};n.add(o)}}function ve(e){return(t,a)=>{e.has(t)&&e.get(t).delete(a)}}const Pe=v&&"complete"!==document.readyState&&new Promise((e=>document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&e()}))));function ke(e){let t;return()=>{if(!S)throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");return t||(t=(async()=>{await Pe;const a=await fin.InterApplicationBus.Channel.connect(e);return a.onDisconnection((async()=>{t=void 0})),a})().then((e=>e)).catch((a=>{throw t=void 0,new Error(`failed to connect to channel provider ${e}: ${a}`)}))),t}}const be=e=>`__browser_window__-${e.uuid}-${e.name}`,We=new Map,Ce=e=>{const t=be(e);return We.has(t)||We.set(t,ke(t)),We.get(t)()};var Ie,Ae,Te;!function(e){e.CloseBrowserWindow="close-browser-window",e.QuitPlatform="quit-platform",e.ClosePage="close-page",e.AddToChannel="add-to-channel",e.RemoveFromChannel="remove-from-channel",e.OpenSaveModalInternal="open-save-modal-internal",e.DuplicatePage="duplicate-page"}(Ie||(Ie={})),function(e){e.GetPages="get-pages",e.GetActivePageForWindow="get-active-page-for-window",e.AttachPagesToWindow="attach-pages-to-window",e.DetachPagesFromWindow="detach-pages-from-window",e.SetActivePageForWindow="set-active-page-for-window",e.RenamePage="rename-page",e.ReorderPagesForWindow="reorder-pages-for-window",e.UpdatePageForWindow="update-page-for-window",e.UpdatePagesWindowOptions="update-pages-window-options",e.IsDetachingPages="is-detaching-pages",e.IsActivePageChanging="is-active-page-changing"}(Ae||(Ae={})),function(e){e.AttachedPagesToWindow="attached-pages-to-window",e.DetachedPagesFromWindow="detached-pages-from-window"}(Te||(Te={}));new Map;const Me=async e=>{const t=await Ce(e);return await t.dispatch(Ae.GetPages)},Ee=async e=>(await Ce(e.identity)).dispatch(Ae.UpdatePageForWindow,e),Oe=async()=>{const e=await H();return(await Promise.all(e.map((async({identity:e})=>Me(e))))).reduce(((e,t)=>e.concat(t)),[])},Be=async()=>(await Y(_)).dispatch(X.GetSavedPages,void 0),Re=async e=>(await Y(_)).dispatch(X.GetSavedPage,e),Le=async(e,t)=>{const a=await(async e=>(await Oe()).find((t=>t.pageId===e)))(e);return!a||a.title===t.title&&e===t.pageId||await Ee({identity:a.parentIdentity,pageId:e,page:{pageId:t.pageId,title:t.title}}),a},xe=async({page:e})=>{await Le(e.pageId,e),await(async e=>(await Y(_)).dispatch(X.CreateSavedPage,e))({page:e})},Ve=async e=>{await Re(e)&&await(async e=>(await Y(_)).dispatch(X.DeleteSavedPage,e))(e)},Ue=async({pageId:e,page:t})=>{await Le(e,t);return await(async e=>(await Y(_)).dispatch(X.UpdateSavedPage,e))({pageId:e,page:t})},De=async e=>await Re(e.pageId)?Ue({pageId:e.pageId,page:e}):xe({page:e}),_e=async e=>{await(async e=>(await Ce(e.identity)).dispatch(Ae.AttachPagesToWindow,e))(e)},Fe=async e=>{await Ee(e)},Ge=async e=>{await(async e=>(await Ce(e.identity)).dispatch(Ae.DetachPagesFromWindow,e))(e)},Ne=async e=>{await(async e=>(await Ce(e.identity)).dispatch(Ae.SetActivePageForWindow,e))(e)},$e=e=>Me(e),He=async({identity:e,pageId:t})=>(await $e(e)).find((e=>e.pageId===t)),qe=async e=>{await(async e=>(await Ce(e.identity)).dispatch(Ae.ReorderPagesForWindow,e))(e)};async function Ke(e="Untitled Page"){const[t,a]=await Promise.all([Be(),Oe()]),n=[...t,...a].map((({title:e})=>e));return n.find((t=>t===e))?ae(e,n):e}const je=new Map,ze=e=>`${e.uuid}-${e.name}`;const Qe=le((async function(){const e=await Oe(),t=new Set;e.forEach((e=>{ye(e.layout.content).forEach((e=>{if(e.name){const a=ze(e);t.add(a)}}))}));const a=F();(await a.getCurrentViews()).forEach((({identity:e})=>{const a=ze(e);if(t.has(a)||je.has(a))return;const n=setTimeout((()=>{fin.View.wrapSync(e).destroy(),je.delete(a)}),5e3);je.set(a,n)})),je.forEach(((e,a)=>{t.has(a)&&(clearTimeout(e),je.delete(a))}))}),2500),Je=({name:e})=>{$(e)&&Qe().catch((()=>{}))};let Xe={};const Ye=({actionId:e,payload:t})=>{if("function"!=typeof Xe[e])throw new Error(`Cannot find a configured function for the action '${e}'`);return Xe[e](t)};function Ze(){return localStorage.getItem(J.MachineName)}let et;async function tt(){return et||(et=await fin.System.getMachineId()),et}const at=e=>{if(e.layout&&Array.isArray(e.workspacePlatform?.pages)){const t=e.workspacePlatform.pages.find((e=>e.isActive));if(t)if(t.isLocked){const a=((e,t)=>{const a=ye(t.content);return{...ue(e,(e=>{const t=a.find((t=>t.name===e.name&&t.uuid===e.uuid)),n=t?t.isClosable:e.isClosable;return{...e,isClosable:n}})),settings:t.settings}})(e.layout,t.layout);t.layout=a,e.layout=a}else t.layout=e.layout}return e};async function nt(e){const t=e||await fin.Platform.getCurrentSync().getSnapshot();if(t.snapshotDetails?.machineId)return t;const a=Ze();return{...t,snapshotDetails:{...e.snapshotDetails,machineId:await tt(),machineName:a}}}function ot(e){return new Promise(((t,a)=>{e.oncomplete=e.onsuccess=()=>t(e.result),e.onabort=e.onerror=()=>a(e.error)}))}function it(e,t){const a=indexedDB.open(e);a.onupgradeneeded=()=>a.result.createObjectStore(t);const n=ot(a);return(e,a)=>n.then((n=>a(n.transaction(t,e).objectStore(t))))}let rt;function st(){return rt||(rt=it("keyval-store","keyval")),rt}function ct(e,t=st()){return t("readonly",(t=>ot(t.get(e))))}function dt(e,t,a=st()){return a("readwrite",(a=>(a.put(t,e),ot(a.transaction))))}function pt(e,t=st()){return t("readwrite",(t=>(t.delete(e),ot(t.transaction))))}function lt(e,t){return e("readonly",(e=>(e.openCursor().onsuccess=function(){this.result&&(t(this.result),this.result.continue())},ot(e.transaction))))}function wt(e=st()){const t=[];return lt(e,(e=>t.push(e.key))).then((()=>t))}const ut=(e,t="")=>e.toLowerCase().includes(t.toLowerCase()),gt=P&&it("openfin-home-pages","pages");async function yt(e){const t=await ct(e,gt);return t?(t.pageId=e.toString(),t.title=t.title||t.pageId,t):null}async function ht(e){const t=await wt(gt),a=await Promise.all(t.map((e=>yt(e.toString()))));return e?a.filter((t=>ut(t.title,e))):a}async function ft({page:e}){await dt(e.pageId,e,gt)}async function mt(e){await pt(e,gt)}async function St({pageId:e,page:t}){if(void 0===await yt(e))throw new Error("page not found");await ft({page:t}),e!==t.pageId&&await mt(e)}var vt;!function(e){e.Label="normal",e.Separator="separator",e.Submenu="submenu",e.Checkbox="checkbox"}(vt||(vt={}));const Pt={type:vt.Separator,data:void 0};var kt;!function(e){e.RegisterStorefrontProvider="register-storefront-provider",e.DeregisterStorefrontProvider="deregister-storefront-provider",e.GetStorefrontProviders="get-storefront-providers",e.HideStorefront="hide-storefront",e.GetStorefrontProviderApps="get-storefront-provider-apps",e.GetStorefrontProviderLandingPage="get-storefront-provider-landing-page",e.GetStorefrontProviderFooter="get-storefront-provider-footer",e.GetStorefrontProviderNavigation="get-storefront-provider-navigation",e.LaunchStorefrontProviderApp="launch-storefront-provider-app",e.ShowStorefront="show-storefront",e.CreateStorefrontWindow="create-storefront-window",e.ShowHome="show-home",e.HideHome="hide-home",e.AssignHomeSearchContext="assign-home-search-context",e.GetLegacyPages="get-legacy-pages",e.GetLegacyWorkspaces="get-legacy-workspaces",e.GetComputedPlatformTheme="get-computed-platform-theme"}(kt||(kt={}));ke("__of_workspace_protocol__");const bt=async(e,t)=>{const a=await(async e=>({...e,layoutDetails:{machineId:await tt(),machineName:Ze()}}))(t);return{pageId:crypto.randomUUID(),title:e,layout:a,isReadOnly:!1,hasUnsavedChanges:!0}},Wt=e=>({identity:e,openfinWindow:fin.Window.wrapSync(e),getPages:async()=>(await Z(e)).dispatch(X.GetPagesForWindow,e),getPage:async t=>(await Z(e)).dispatch(X.GetPageForWindow,{identity:e,pageId:t}),addPage:async t=>{const a=await Z(e);t?.title||(t.title=await a.dispatch(X.GetUniquePageTitle,void 0));const n=(await a.dispatch(X.GetAllAttachedPages,void 0)).find((e=>e.pageId===t.pageId||e.title===t.title));if(n)throw n.pageId===t.pageId?new Error(`page with id ${t.pageId} is already attached to a browser window ${n.parentIdentity.name}`):new Error(`page with title ${t.title} is already attached to a browser window ${n.parentIdentity.name}`);const o={identity:e,pages:[t]};return a.dispatch(X.AttachPagesToWindow,o)},removePage:async t=>(await Z(e)).dispatch(X.DetachPagesFromWindow,{identity:e,pageIds:[t]}),setActivePage:async t=>(await Z(e)).dispatch(X.SetActivePage,{identity:e,pageId:t}),updatePage:async t=>{const a=await Z(e);return t.identity=e,a.dispatch(X.UpdatePageForWindow,t)},reorderPages:async t=>{const a=await Z(e);return t.identity=e,a.dispatch(X.ReorderPagesForWindow,t)},_openGlobalContextMenu:async t=>{const a=await Z(e);return t.identity=e,a.dispatch(X.OpenGlobalContextMenuInternal,t)},replaceToolbarOptions:async t=>{await Z(e);const a=fin.Window.wrapSync(e);await a.updateOptions({workspacePlatform:{toolbarOptions:t}})},replaceWindowStateButtonOptions:async t=>{await Z(e);const a=fin.Window.wrapSync(e);await a.updateOptions({workspacePlatform:{windowStateButtonOptions:t}})},_openViewTabContextMenu:async t=>{const a=await Z(e);return t.identity=e,a.dispatch(X.OpenViewTabContextMenuInternal,t)},_openPageTabContextMenu:async t=>{const a=await Z(e);return t.identity=e,a.dispatch(X.OpenPageTabContextMenuInternal,t)},_openSaveModal:async t=>{await Z(e);return(await Ce(e)).dispatch(Ie.OpenSaveModalInternal,t)},_openSaveButtonContextMenu:async t=>{const a=await Z(e);return t.identity=e,a.dispatch(X.OpenSaveButtonContextMenuInternal,t)}});let Ct=!1;const It=e=>{const t=fin.Platform.wrapSync(e);return{wrapSync:e=>Wt(e),createWindow:async a=>{await Z(e),Ct||(Ct=!0,(async e=>{z(j.Browser,e)})({allowed:!0}));const n=await t.createWindow(a);return Wt(n.identity)},getAllAttachedPages:async()=>(await Z(e)).dispatch(X.GetAllAttachedPages,void 0),getAllWindows:async()=>{await Z(e);return(await fin.Application.wrapSync(e).getChildWindows()).filter((e=>e.identity.name.includes("internal-generated-window-"))).map((e=>Wt(e.identity)))},getUniquePageTitle:async t=>(await Z(e)).dispatch(X.GetUniquePageTitle,t),getLastFocusedWindow:async()=>(await Z(e)).dispatch(X.GetLastFocusedBrowserWindow,void 0)}},At=e=>({createPage:async t=>(await Z(e)).dispatch(X.CreateSavedPageInternal,t),deletePage:async t=>(await Z(e)).dispatch(X.DeleteSavedPageInternal,t),updatePage:async t=>(await Z(e)).dispatch(X.UpdateSavedPageInternal,t),getPage:async t=>(await Z(e)).dispatch(X.GetSavedPage,t),getPages:async t=>(await Z(e)).dispatch(X.GetSavedPages,t),savePage:async t=>(await Z(e)).dispatch(X.SavePage,t),createWorkspace:async t=>(await Y(e)).dispatch(X.CreateSavedWorkspace,t),deleteWorkspace:async t=>(await Y(e)).dispatch(X.DeleteSavedWorkspace,t),updateWorkspace:async t=>(await Y(e)).dispatch(X.UpdateSavedWorkspace,t),getWorkspace:async t=>(await Y(e)).dispatch(X.GetSavedWorkspace,t),getWorkspaces:async t=>(await Y(e)).dispatch(X.GetSavedWorkspaces,t),saveWorkspace:async t=>(await Y(e)).dispatch(X.SaveWorkspace,t)}),Tt=e=>({getThemes:async()=>(await Y(e)).dispatch(X.GetThemes,void 0)}),Mt=e=>{const t=fin.Platform.wrapSync(e);return Object.assign(t,{applySnapshot:async(t,a)=>{if("string"!=typeof t&&!t?.windows)throw new Error("Not a valid browser snapshot");return fin.Platform.wrapSync(e).applySnapshot(t,a)},getSnapshot:()=>fin.Platform.wrapSync(e).getSnapshot().then((e=>e)),launchApp:async t=>{t.target||(t.target={uuid:b,name:W,entityType:C||"unknown"});return(await Y(e)).dispatch(X.LaunchApp,t)},_invokeCustomAction:async(t,a)=>{const n=await Y(e),o={actionId:t,payload:{...a,callerType:a.callerType||h.API}};return n.dispatch(X.InvokeCustomActionInternal,o)},getCurrentWorkspace:async()=>(await Y(e)).dispatch(X.GetCurrentWorkspace,void 0),applyWorkspace:async t=>(await Y(e)).dispatch(X.ApplyWorkspace,t),setActiveWorkspace:async t=>(await Y(e)).dispatch(X.SetActiveWorkspace,t),Theme:Tt(e),Browser:It(e),Storage:At(e)})},Et=()=>Mt(fin.me.identity),Ot=async(e=_)=>{const{workspacePlatform:t}=await D(e).getOptions();return{newPageUrl:t?.newPageUrl,newTabUrl:t?.newTabUrl}},Bt=async(e=_)=>{const t=await Et().Browser.getUniquePageTitle("Untitled Page"),a=await(async(e=_)=>{const{newPageUrl:t}=await Ot(e);if(!t)throw new Error("Trying to create a new page without a newPageUrl set");return he("New Tab",t,e)})(e);return bt(t,a)},Rt={type:vt.Label,label:"Close Window",data:{type:l.CloseWindow}},Lt={type:vt.Label,label:"Open Storefront",data:{type:l.OpenStorefront}},xt={type:vt.Label,label:"Quit Platform",data:{type:l.Quit}},Vt={type:vt.Label,label:"New Window",data:{type:l.NewWindow}},Ut={type:vt.Label,label:"Save Page",data:{type:l.SavePage}},Dt={type:vt.Label,label:"Save Page As...",data:{type:l.SavePageAs}},_t={type:vt.Label,label:"Restore to Last Saved Changes",data:{type:l.RestoreChanges}},Ft={type:vt.Label,label:"Save Workspace",data:{type:l.SaveWorkspace}},Gt={type:vt.Label,label:"Save Workspace As...",data:{type:l.SaveWorkspaceAs}},Nt={type:vt.Label,label:"Rename Workspace",data:{type:l.RenameWorkspace}},$t="Switch Workspace",Ht="Delete Workspace",qt=[Rt,Pt,Lt,Pt,xt],Kt=[Pt,Rt,Pt,xt],jt=(e,t,a)=>t.map((t=>{const n=t.workspaceId===e.workspaceId;return{label:t.title,type:vt.Checkbox,enabled:!n,checked:n,data:{type:a,workspaceId:t.workspaceId}}})),zt=async e=>{const t=await K(),{newPageUrl:a}=await Ot(e),n=await(async e=>{const t=D(e),{workspacePlatform:a}=await t.getOptions();return a?.disableMultiplePages})(e),o=await(async e=>{const t=D(e),{workspacePlatform:a}=await t.getOptions();return a?.isLocked})(e),i=[];var r;a&&(i.push(Vt),n||i.push((r=!o,{type:vt.Label,label:"New Page",data:{type:l.NewPage},enabled:r}))),i.push(Pt);const s=Et(),c=await s.getCurrentWorkspace(),d=await s.Storage.getWorkspaces(),p=d.find((e=>e.workspaceId===c.workspaceId));return p?i.push(_t):i.push({label:_t.label,enabled:!1}),i.push(Ft,Gt),p?i.push(Nt):i.push({label:Nt.label,enabled:!1}),d.some((e=>e.workspaceId!==c.workspaceId))?i.push({label:$t,submenu:jt(c,d,l.SwitchWorkspace)},{label:Ht,submenu:jt(c,d,l.DeleteWorkspace)}):i.push({label:$t,enabled:!1},{label:Ht,enabled:!1}),i.push(Pt,Ut,Dt),t?[...i,...qt]:[...i,...Kt]};let Qt="Platform";const Jt=async()=>Qt;var Xt,Yt,Zt;!function(e){e.Home="/home/",e.HomeSearch="/home/?deeplink=search",e.HomePagesRename="/home/pages/rename/",e.Dock="/home/dock/",e.BrowserPagesLanding="/browser/pages/landing/",e.HomeIndicator="/home/indicator/",e.Browser="/browser/",e.BrowserPopupMenu="/browser/popup-menu/",e.Provider="/provider/",e.BrowserPopupMenuSharePage="/browser/popup-menu/share-page/",e.BrowserPopupMenuSaveModal="/browser/popup-menu/save-modal/",e.BrowserPopupMenuLayouts="/browser/popup-menu/layouts/layouts/",e.BrowserPopupMenuColorLinking="/browser/popup-menu/color-linking/color-linking/",e.BrowserIndicator="/browser/indicator/",e.ResponseModal="/browser/popup-menu/response-modal/",e.Docs="/provider/docs/",e.Storefront="/storefront/",e.DeprecatedAlert="/provider/deprecated-alert/"}(Xt||(Xt={})),function(e){e.IconOpenFinLogo="/icons/openfinlogo.svg",e.IconFilter="/icons/filter.svg"}(Yt||(Yt={})),function(e){e.Search="search"}(Zt||(Zt={}));const ea={...Yt,...Xt};var ta;!function(e){e.Home="/home",e.Browser="/browser",e.Provider="/provider",e.Storefront="/storefront"}(ta||(ta={}));const aa="/workspace/8.1.7";function na(){return aa.substring(0,aa.length-"".length)}function oa(e){if(!v)throw new Error("getAbsoluteRoutePath can only be used in a window");return function(){if(!window)throw new Error("getAbsoluteBasePath can only be used in a window");return`${window.origin}${na()}`}()+e}const ia={name:V.BrowserMenu,alwaysOnTop:!0,autoShow:!1,cornerRounding:{height:6,width:6},frame:!1,resizable:!1,backgroundColor:"#2f3136",smallWindow:!0,showTaskbarIcon:!1,backgroundThrottling:!0};function ra(e){const t={...ia,...e};return t.url=function(e){if(!v)throw new Error("resolveAbsolutePath can only be used in a window");return e.startsWith("http")?e:`${window.origin}${e}`}(t.url),t}var sa,ca;!function(e){e.Update="update",e.Response="response"}(sa||(sa={})),function(e){e.Canceled="canceled",e.Negative="negative",e.Affirmative="affirmative"}(ca||(ca={}));const da=function(e){const t=new Map;return{emit:fe(t,(t=>S&&fin.InterApplicationBus.publish(e,t))),addListener:me(t,(t=>S&&fin.InterApplicationBus.subscribe({uuid:fin.me.uuid},e,t))),removeListener:ve(t),once:Se(t)}}("window.menu"),pa=e=>da.emit(sa.Response,e),la=le((()=>x().getChildWindows()),500);const wa=new Map;async function ua({options:e,parameters:t}){const a=ra(e),{name:n}=a;let o=await async function(e){return(await la()).find((t=>t.identity.name===e))}(n);return o||(o=await async function(e){const t=ra(e);if(!wa.has(t.name)){const e=(async()=>{const e=await fin.Platform.getCurrentSync().createWindow(t);return e.once("closed",(()=>{wa.delete(t.name)})),e})();wa.set(t.name,e)}return wa.get(t.name)}(a)),await async function(e,t){const a=ra(e),{top:n,left:o,defaultWidth:i,defaultHeight:r}=a,s={top:n,left:o,width:i,height:r},c={parentName:fin.Window.getCurrentSync().identity.name};for(const[e,a]of Object.entries(c))t.set(e,a);const d=t.toString(),p=`${a.url}?${d}`;da.emit(sa.Update,a.name,s,p),await pa({name:a.name,data:ca.Canceled})}(e,t||new URLSearchParams),o}const ga=async(e,t)=>{const a=t?D(t):F();await(async(e=fin.me.identity)=>{const t=D(e),a=await t.getBounds();(a.right>screen.availLeft+screen.width||a.left<screen.availLeft||a.bottom>screen.availTop+screen.height||a.top<screen.availTop)&&await t.center()})(a.identity);const n=await a.getBounds(),o={left:((i=n).left+i.right)/2,top:(i.top+i.bottom)/2};var i;const{defaultHeight:r,defaultWidth:s}=e;return((e,t)=>{const{height:a,width:n}=t,o=n/2,i=a/2;return{left:e.left-o,top:e.top-i}})(o,{height:r,width:s})},ya=async({options:e,content:t})=>{const a=new URLSearchParams({...t});return await ua({options:e,parameters:a}),new Promise((t=>{da.once(sa.Response,(a=>{a.name===e.name&&t(a)}))}))},ha=async(e,t)=>{const{windowOptions:a,content:n}=await(async(e,t)=>({title:"Switch Workspace",windowOptions:{url:A+ea.ResponseModal,name:V.BrowserMenu,defaultHeight:112,defaultWidth:424,modalParentIdentity:e},content:{title:`Are you sure you want to switch to ${t}`,body:"Any unsaved changes will be discarded",affirmativeButton:"Confirm",negativeButton:"Cancel"}}))(e,t),{top:o,left:i}=await ga(a,e),r={...a,top:o,left:i};return(await ya({options:r,content:n})).data===ca.Affirmative},fa=async(e,t)=>{const{windowOptions:a,content:n}=await(async(e,t)=>({title:"Delete Workspace",windowOptions:{url:A+ea.ResponseModal,name:V.BrowserMenu,defaultHeight:144,defaultWidth:372,modalParentIdentity:e},content:{title:"Are you sure you want to permanently delete this workspace?",body:`${t}`,affirmativeButton:"Confirm",negativeButton:"Cancel"}}))(e,t),{top:o,left:i}=await ga(a,e),r={...a,top:o,left:i};return(await ya({options:r,content:n})).data===ca.Affirmative},ma=async(e,t)=>{const{windowOptions:a,content:n}=await(async(e,t)=>({title:"Platform Quit",windowOptions:{url:A+ea.ResponseModal,name:V.BrowserMenu,defaultHeight:134,defaultWidth:474,modalParentIdentity:e},content:{title:`Are you sure you want to quit ${"Platform"===t?"the platform":t}?`,body:"Any unsaved changes to the workspace will be discarded",affirmativeButton:"Confirm",negativeButton:"Cancel"}}))(e,t),{top:o,left:i}=await ga(a,e),r={...a,top:o,left:i};return(await ya({options:r,content:n})).data===ca.Affirmative},Sa=async e=>{const{windowOptions:t,content:a}=await(async e=>({title:"Restore Changes",windowOptions:{url:A+ea.ResponseModal,name:V.BrowserMenu,defaultHeight:112,defaultWidth:424,modalParentIdentity:e},content:{title:"Are you sure you want to restore to last saved changes?",body:"Any unsaved changes will be discarded",affirmativeButton:"Confirm",negativeButton:"Cancel"}}))(e),{top:n,left:o}=await ga(t,e),i={...t,top:n,left:o};return(await ya({options:i,content:a})).data===ca.Affirmative};var va;!function(e){e.ERROR="error",e.SUCCESS="success",e.INFO="info"}(va||(va={}));const Pa={alwaysOnTop:!0,autoShow:!1,cornerRounding:{height:5,width:5},frame:!1,resizable:!1,showTaskbarIcon:!1};var ka;!function(e){e.Locked="LockClosedIcon",e.Unlocked="LockOpen1Icon"}(ka||(ka={}));const ba=function(e=Pa){const t=new Map;return async(a,n,o,i)=>{if(t.has(a)){const{currentUrl:e,currentName:o}=t.get(a);if(e===n)return;const i=fin.Window.wrapSync({uuid:fin.me.uuid,name:o});await i.close()}const r=`${V.HomeInternal}-${Date.now()}${Math.random()}`;t.set(a,{currentUrl:n,currentName:r});const s=await fin.Platform.getCurrentSync().createWindow({...e,name:r,url:n});((e,t)=>{const a=document.createElement("div");a.setAttribute("aria-live",t||"polite"),(e=>{e.style.position="absolute",e.style.width="1px",e.style.height="1px",e.style.padding="0",e.style.margin="-1px",e.style.overflow="hidden",e.style.whiteSpace="nowrap",e.style.border="0"})(a),document.body.appendChild(a),setTimeout((()=>{a.innerHTML=e}),100),setTimeout((()=>{document.body.removeChild(a)}),1e3)})(`New ${i} indicator: ${o}`),s.once("closed",(()=>{t.delete(a)}))}}();async function Wa(e,t,a,n){const o=new URLSearchParams;o.append("type",e),o.append("message",t),o.append("parentName",a||""),o.append("icon",n||"");const i=`${oa(ea.BrowserIndicator)}?${o.toString()}`;return ba("browser"+a,i,t,e)}function Ca(e,t,a){return Wa(va.SUCCESS,e,t,a)}const Ia=async e=>{const t=Et(),a=await t.getCurrentWorkspace(),n=await t.Storage.getWorkspaces(),o=a.workspaceId;if(n.some((e=>e.workspaceId===o)))t.Storage.saveWorkspace(a),t.setActiveWorkspace(a),Ca("Workspace Saved",e.name);else{t.Browser.wrapSync(e)._openSaveModal({menuType:f.SAVE_WORKSPACE})}},Aa=e=>{Et().Browser.wrapSync(e)._openSaveModal({menuType:f.SAVE_WORKSPACE_AS})},Ta=async(e,t)=>{const a=Et().Browser.wrapSync(e),n=await Et().Storage.getPages(),o=(await a.getPages()).find((e=>t?e.pageId===t:e.isActive));if(n.some((e=>o.pageId===e.pageId)))try{await Et().Storage.savePage((c=o,{...c,hasUnsavedChanges:void 0,parentIdentity:void 0,isActive:void 0})),await a.updatePage({pageId:o.pageId,page:{hasUnsavedChanges:!1}}),Ca("Page saved",o.parentIdentity.name)}catch{i="Page failed to save",r=o.parentIdentity.name,Wa(va.ERROR,i,r,s)}else a._openSaveModal({id:o.pageId,menuType:f.SAVE_PAGE});var i,r,s,c},Ma=async(e,t)=>{const a=Et().Browser.wrapSync(e),n=(await a.getPages()).find((e=>t?e.pageId===t:e.isActive));a._openSaveModal({id:n.pageId,menuType:f.SAVE_PAGE_AS})},Ea=async(e,t)=>{if(!e)return;const a=t.identity,n=await Ce(a),o=Et().Browser.wrapSync(t.identity);switch(e.type){case l.NewWindow:const{newPageUrl:t}=await Ot(a);if(!t)throw new Error("Trying to create a new empty window without a newPageUrl set");Et().createView({target:void 0,url:t});break;case l.NewPage:await(async e=>{const t=Et().Browser.wrapSync(e),a=await Bt(e);await t.addPage(a),await t.setActivePage(a.pageId)})(a);break;case l.CloseWindow:n.dispatch(Ie.CloseBrowserWindow);break;case l.SaveWorkspace:await Ia(a);break;case l.SavePage:await Ta(a);break;case l.SavePageAs:await Ma(a);break;case l.SaveWorkspaceAs:await Aa(a);break;case l.RenameWorkspace:o._openSaveModal({menuType:f.RENAME_WORKSPACE});break;case l.SwitchWorkspace:await(async(e,t)=>{const a=Et(),n=(await a.Storage.getWorkspaces()).find((e=>e.workspaceId===t.workspaceId));n&&await ha(e,n.title)&&(await a.applyWorkspace(n),Ca("Workspace Switched!",null))})(a,e);break;case l.DeleteWorkspace:await(async(e,t)=>{const a=Et(),n=(await a.Storage.getWorkspaces()).find((e=>e.workspaceId===t.workspaceId));n&&await fa(e,n.title)&&(await a.Storage.deleteWorkspace(t.workspaceId),Ca("Workspace Deleted!",e.name))})(a,e);break;case l.Quit:const i=await Jt();await ma(a,i)&&fin.Platform.getCurrentSync().quit();break;case l.OpenStorefront:(async()=>{await K()&&N(G)})();break;case l.RestoreChanges:const r=await async function(){const e=Et(),t=await e.getCurrentWorkspace();return(await e.Storage.getWorkspaces()).find((e=>e.workspaceId===t.workspaceId))}();await Sa(a)&&await ne(r);break;case l.Custom:if(e.action){const t={callerType:h.GlobalContextMenu,windowIdentity:a,customData:e.action.customData};Et()._invokeCustomAction(e.action.id,t)}}},Oa=async(e,t)=>{const a=await Ce(t.identity),n=Et();switch(e.type){case w.Save:await Ta(t.identity,t.pageId);break;case w.SaveAs:await Ma(t.identity,t.pageId);break;case w.Rename:await n.Browser.wrapSync(t.identity)._openSaveModal({menuType:f.RENAME_PAGE,id:t.pageId});break;case w.Duplicate:a.dispatch(Ie.DuplicatePage,t.pageId);break;case w.Close:a.dispatch(Ie.ClosePage,t.pageId);break;case w.Custom:if(e.action){const a={callerType:h.PageTabContextMenu,windowIdentity:t.identity,pageId:t.pageId,customData:e.action.customData};Et()._invokeCustomAction(e.action.id,a)}}},Ba=async(e,t)=>{if(e?.type){const a=t.identity;switch(e.type){case y.SavePage:await Ta(a);break;case y.SaveWorkspace:await Ia(a);break;case y.SavePageAs:await Ma(a);break;case y.SaveWorkspaceAs:await Aa(a);break;case y.Custom:if(e.action){const a={callerType:h.SaveButtonContextMenu,windowIdentity:t.identity,pageId:t.pageId,customData:e.action.customData};Et()._invokeCustomAction(e.action.id,a)}}}},Ra=async(e,t)=>{const a=t.selectedViews[0],n=fin.View.wrapSync(a),o=await(async e=>{const{newTabUrl:t}=await Ot(e);if(!t)throw new Error("Trying to create a new page without a newTabUrl set");return{...he("New View",t),url:t,target:e}})(e);await Et().createView(o,e,n.identity)},La=async(e,t)=>{const a=await(e=>Promise.all(e.map((async e=>fin.View.wrapSync(e).getInfo()))))(t),{newPageUrl:n,newTabUrl:o}=await Ot(e);a.forEach((async e=>{e.url!==n&&e.url!==o&&await fin.System.openUrlWithBrowser(e.url)}))},xa=(e,t)=>{t.forEach((async t=>{const a=fin.View.wrapSync(t);await(async(e,t)=>{const{url:a}=await t.getInfo(),n={...await t.getOptions(),url:a,target:e,name:void 0};await Et().createView(n,e,t.identity)})(e,a)}))},Va=async(e,t)=>{if(!e)return;const a=t.identity;switch(e.type){case u.CloseViews:await(async(e,t)=>{if((await fin.Window.wrapSync(e).getCurrentViews()).length!==t.length)t.forEach((async e=>{const t=fin.View.wrapSync(e);await t.destroy()}));else{const t=(await Et().Browser.wrapSync(e).getPages()).find((e=>e.isActive));(await Ce(e)).dispatch(Ie.ClosePage,t?.pageId)}})(a,t.selectedViews);break;case u.OpenWithDefaultBrowser:await La(a,t.selectedViews);break;case u.ReloadViews:t.selectedViews.forEach((async e=>{const t=fin.View.wrapSync(e);await t.reload()}));break;case u.NewView:await Ra(a,t);break;case u.DuplicateViews:xa(a,t.selectedViews);break;case u.AddToChannel:(async(e,t,a)=>{const n={newChannelId:t,selectedViews:a};(await Ce(e)).dispatch(Ie.AddToChannel,n)})(a,e.option,t.selectedViews);break;case u.RemoveFromChannel:(async(e,t)=>{(await Ce(e)).dispatch(Ie.RemoveFromChannel,t)})(a,t.selectedViews);break;case u.Custom:if(e.action){const n={callerType:h.ViewTabContextMenu,windowIdentity:a,selectedViews:t.selectedViews,customData:e.action.customData};Et()._invokeCustomAction(e.action.id,n)}}};async function Ua(e,t){const a=await zt(e.identity),n=await Jt();a.find((e=>e.data?.type===l.Quit)).label=`Quit ${n}`;const o={...e,template:a,callback:Ea};await this.openGlobalContextMenu(o,t)}const Da=async(e,t)=>{const{x:a,y:n,identity:o,template:i,callback:r}=e,{data:s}=await function(e,t){if(!S)throw new Error("showContextMenu can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");if(!t&&!fin.me.isWindow)throw new Error("showContextMenu can only be used in an OpenFin window.");return(t||fin.Window.getCurrentSync()).showPopupMenu(e)}({x:a,y:n,template:i},fin.Window.wrapSync(o));r(s,e)};async function _a(e,t){const a={...e,callback:Va};await this.openViewTabContextMenu(a,t)}async function Fa(e,t){const a=await(async(e,t)=>{const a=await Et().Storage.getPage(e),n=(await Oe()).find((t=>t.pageId===e)),{workspacePlatform:o}=await D(t).getOptions(),i=!(o.isLocked||o.preventPageClose||n.closeButton?.disabled||n.closeButton?.hidden);return[{type:vt.Label,label:"Save Page",data:{type:w.Save}},{type:vt.Label,label:"Save Page As",data:{type:w.SaveAs}},Pt,{type:vt.Label,label:"Rename Page",data:{type:w.Rename},enabled:!!a},{type:vt.Label,label:"Duplicate Page",data:{type:w.Duplicate},enabled:!o.isLocked},Pt,{type:vt.Label,label:"Close Page",data:{type:w.Close},enabled:i}]})(e.pageId,e.identity),n={...e,template:a,callback:Oa};await this.openPageTabContextMenu(n,t)}async function Ga(e,t){const a={...e,template:await(async()=>[{type:vt.Label,label:"Save Workspace",data:{type:y.SaveWorkspace}},{type:vt.Label,label:"Save Workspace As",data:{type:y.SaveWorkspaceAs}},{type:vt.Separator,data:void 0},{type:vt.Label,label:"Save Page",data:{type:y.SavePage}},{type:vt.Label,label:"Save Page As",data:{type:y.SavePageAs}}])(),callback:Ba};await this.openSaveButtonContextMenu(a,t)}const Na=P&&it("openfin-workspace-platform-workspaces","workspaces");async function $a(e){const t=await ct(e,Na);return t?(t.workspaceId=e.toString(),t.title=t.title||t.workspaceId,t):null}async function Ha(e){const t=await wt(Na),a=await Promise.all(t.map((e=>$a(e.toString()))));return e?a.filter((t=>ut(t.title,e))):a}async function qa({workspace:e}){await dt(e.workspaceId,e,Na)}async function Ka(e){await pt(e,Na)}async function ja({workspaceId:e,workspace:t}){if(void 0===await $a(e))throw new Error("workspace not found");await qa({workspace:t}),e!==t.workspaceId&&await Ka(e)}async function za({app:e,target:t}){const a=fin.Platform.getCurrentSync();switch(e.manifestType){case r.Snapshot:return a.applySnapshot(e.manifest);case r.View:return async function(e,t){const a=fin.Platform.getCurrentSync();if("view"===t.entityType){const a=fin.View.wrapSync(t),n=await a.getParentLayout();return await n.replaceView(t,{manifestUrl:e.manifest,url:void 0,target:void 0}),a.destroy()}return a.createView({name:void 0,url:void 0,manifestUrl:e.manifest,target:void 0})}(e,t);case r.External:return fin.System.launchExternalProcess({path:e.manifest,uuid:e.appId});default:return fin.Application.startFromManifest(e.manifest)}}const Qa=e=>e&&"object"==typeof e&&!Array.isArray(e);function Ja(e,...t){if(!t.length)return e;const a=t.shift();return Qa(e)&&Qa(a)&&Object.entries(a).forEach((([t,a])=>{if(Qa(a))return e[t]||(e[t]={}),Ja(e[t],a);e[t]=a})),Ja(e,...t)}const Xa=A+ea.Browser;function Ya(e,t){const a=Ja({},t,e);return a.detachOnClose=!0,a}async function Za(e,t,a){const n=e.manifestUrl?await t({manifestUrl:e.manifestUrl},a):void 0;if(n?.interop&&e.interop){const t={...e,...n,interop:e.interop};return delete t.manifestUrl,t}return e}const en=e=>{const t=e.name===V.Home,a=e.name?.startsWith(V.HomeInternal),n=e.name?.startsWith(V.BrowserMenu);return!t&&!a&&!n},tn=e=>"workspacePlatform"in e?e:(({workstacks:e,pages:t,...a})=>({...a,workspacePlatform:{pages:t||e||null}}))(e),an={contextMenuSettings:{reload:!1},backgroundThrottling:!0,url:Xa,contextMenu:!0,closeOnLastViewRemoved:!1,experimental:{showFavicons:!0,defaultFaviconUrl:`${A}/icons/defaultFavicon.svg`},permissions:{System:{openUrlWithBrowser:{enabled:!0,protocols:["mailto"]}}}},nn={dimensions:{borderWidth:3,headerHeight:30}},on=async(e,t)=>{const a=await Et().Storage.getPages(),n=await Et().Browser.getAllAttachedPages();return e.map((e=>{let o=e.title;void 0===e.pageId&&(e.pageId=crypto.randomUUID());const i=a.find((e=>e.title===o));return(i&&i.pageId!==e.pageId||n.find((e=>e.title===o)))&&(o=ae(e.title,[...a,...n].map((e=>e.title)))),n.push(e),{...t,...e,title:o,layout:(r=e.layout,ue({...r},ge))};var r}))};const rn=e=>{const t=fin.Window.wrapSync(e);return Promise.all([t.bringToFront(),t.restore(),t.focus()])};async function sn(e){const t=await H();return await Promise.all(t.map((({identity:e})=>(async e=>(await Ce(e)).dispatch(Ae.UpdatePagesWindowOptions))(e)))),e?e():nt()}let cn=[];const dn=()=>cn;const pn=(e,t)=>async a=>{const n=null!==e;class o extends a{constructor(){super(),this.isWorkspacePlatform=()=>({isWorkspacePlatform:!0,isBrowserInitialized:!!e}),this.addPage=this.attachPagesToWindow,this.detachPagesFromWindow=Ge,this.getAllAttachedPages=Oe,this.getPagesForWindow=$e,this.getPageForWindow=He,this.setActivePage=Ne,this.launchApp=za,this.savePage=De,this.saveWorkspace=se,this.createSavedPageInternal=xe,this.updateSavedPageInternal=Ue,this.deleteSavedPageInternal=Ve,this.reorderPagesForWindow=qe,this.getUniquePageTitle=Ke,this.updatePageForWindow=Fe,this.getLastFocusedBrowserWindow=de,this.getThemes=dn,this.invokeCustomActionInternal=Ye,this.getCurrentWorkspace=re,this.applyWorkspace=ne,this.setActiveWorkspace=oe,this.openGlobalContextMenuInternal=this.openGlobalContextMenuInternal.bind(this),this.openGlobalContextMenu=this.openGlobalContextMenu.bind(this),this.getSavedPages=this.getSavedPages.bind(this),this.getSavedPage=this.getSavedPage.bind(this),this.createSavedPage=this.createSavedPage.bind(this),this.updateSavedPage=this.updateSavedPage.bind(this),this.deleteSavedPage=this.deleteSavedPage.bind(this),this.attachPagesToWindow=this.attachPagesToWindow.bind(this),this.openViewTabContextMenuInternal=this.openViewTabContextMenuInternal.bind(this),this.openViewTabContextMenu=this.openViewTabContextMenu.bind(this),this.openPageTabContextMenuInternal=this.openPageTabContextMenuInternal.bind(this),this.openPageTabContextMenu=this.openPageTabContextMenu.bind(this),this.getSavedWorkspaces=this.getSavedWorkspaces.bind(this),this.getSavedWorkspace=this.getSavedWorkspace.bind(this),this.createSavedWorkspace=this.createSavedWorkspace.bind(this),this.updateSavedWorkspace=this.updateSavedWorkspace.bind(this),this.deleteSavedWorkspace=this.deleteSavedWorkspace.bind(this),this.getCurrentWorkspace=this.getCurrentWorkspace.bind(this),this.applyWorkspace=this.applyWorkspace.bind(this),this.setActiveWorkspace=this.setActiveWorkspace.bind(this),this.openSaveButtonContextMenu=this.openSaveButtonContextMenu.bind(this),this.openSaveButtonContextMenuInternal=this.openSaveButtonContextMenuInternal.bind(this)}async getSnapshot(){const e=n?await sn((async()=>nt(await super.getSnapshot(void 0,fin.me.identity)))):await nt(await super.getSnapshot(void 0,fin.me.identity));return{...e,windows:e.windows.filter(en).map(at)}}async applySnapshot({snapshot:e,options:t}){const a=e=>super.applySnapshot({snapshot:e,options:{...t,closeExistingWindows:!1}});let o=e;if("string"==typeof o&&(o=await super.fetchManifest({manifestUrl:o},fin.me.identity)),!n&&function(e){for(const t of e.windows)if(t.workspacePlatform?.pages)return!0;return!1}(o))throw new Error("This snapshot cannot be applied as the platform has been initialized without the browser.");return t?.closeExistingWindows&&await async function(){const e=await H();await Promise.all(e.map((e=>e.close(!0).catch((()=>{})))))}(),n?async function(e,t){const a=await Oe(),n=e.snapshotDetails?.monitorInfo||await fin.System.getMonitorInfo(),o=(e.windows||[]).filter((({layout:e})=>!!e)),i=new Map;a.forEach((e=>i.set(e.pageId,e)));const r=[],s=o.map((async e=>{const t=tn(e),a=[],n=(e=>{let t=!1;const a=(e||[]).map((e=>{const a=function({id:e,name:t,...a}){return{pageId:e,title:t,...a}}(e);return t&&a.isActive&&(a.isActive=!1),a.isActive&&(t=!0),a}));return!t&&a.length&&(a[0].isActive=!0),a})(t?.workspacePlatform?.pages);if(!n?.length){const e=await Ke();a.push(await bt(e,t.layout))}let o;n.forEach((e=>{const t=i.get(e.pageId);t?o=t:a.push(e)})),o&&await Promise.all([Ne({identity:o.parentIdentity,pageId:o.pageId}),rn(o.parentIdentity)]),a.length&&r.push({...t,workspacePlatform:{...t.workspacePlatform,pages:a}})}));if(await Promise.all(s),!r.length)return;const c=fin.Platform.getCurrentSync();return(t||c.applySnapshot.bind(c))({...e,snapshotDetails:{...e.snapshotDetails,monitorInfo:n},windows:r})}(o,a):a(o)}async createWindow(t,a){t.workspacePlatform?.toolbarOptions?.buttons&&(e=>{const t=e.filter((e=>e.type!==g.Custom)),a=new Set;for(const e of t){if(a.has(e.type))throw new Error(`Encountered a duplicate of ${e.type} button. No more than one instance of a button type may be provided.`);a.add(e.type)}})(t.workspacePlatform.toolbarOptions.buttons);let o=tn(t);if(n){const t=this.getThemes();o=await(async(e,t,a)=>{let n=e;n.workspacePlatform?.pages&&(n.workspacePlatform.pages=await on(n.workspacePlatform.pages,t?.defaultPageOptions));const o=n?.workspacePlatform?.pages;if(o){const e=o.find((e=>e.isActive));e?n.layout=e.layout:(o[0].isActive=!0,n.layout=o[0].layout)}if(n.layout){if(n=Ja({},t.defaultWindowOptions,n,an),n.layout=Ja(n.layout,nn),(n.icon||n.taskbarIcon)&&(n.taskbarIconGroup=n.taskbarIconGroup||fin.me.identity.uuid),!n.backgroundColor){const e=a?.palette;n.backgroundColor=e?.background2||e?.backgroundPrimary}const e=n.workspacePlatform.newTabUrl;e&&(n.layout.settings||(n.layout.settings={}),n.layout.settings.newTabButton={url:e}),n=(e=>{const t=e;return t.workspacePlatform||(t.workspacePlatform={}),t.workspacePlatform._internalDeferShowEnabled=!0,t.workspacePlatform._internalAutoShow=t.workspacePlatform?._internalAutoShow||void 0===t.autoShow||t.autoShow,t.autoShow=!1,t})(n)}return n.cornerRounding&&delete n.cornerRounding,n})(o,e,t[0])}o=await(async e=>{const t=await fin.System.getMonitorInfo(),a=t.primaryMonitor.availableRect.bottom-t.primaryMonitor.availableRect.top,n=t.primaryMonitor.availableRect.right-t.primaryMonitor.availableRect.left;return e.defaultHeight=e.defaultHeight||"800",e.defaultWidth=e.defaultWidth||"800",a<e.defaultHeight&&(e.defaultHeight=a),n<e.defaultWidth&&(e.defaultWidth=n),e})(o);const i=(e,t)=>super.createWindow(e,t);return(n?(e=>async(t,a)=>{const n=await e(t,a);return t?.workspacePlatform?._internalDeferShowEnabled?(await n.addListener(U.ShowRequested,(()=>{})),n):n})(i):i)(o,a)}async createView(t,a){return t.opts=Ya(t.opts,e?.defaultViewOptions),t.opts=await Za(t.opts,this.fetchManifest,a),super.createView(t,a)}async replaceView(t,a){return t.opts.newView=await Ya(t.opts.newView,e?.defaultViewOptions),t.opts.newView=await Za(t.opts.newView,this.fetchManifest,a),super.replaceView(t,a)}async replaceLayout(e,t){return e.opts.layout?.dimensions,super.replaceLayout(e,t)}async closeView(e,t){const a=fin.View.wrapSync(e.view);await super.closeView(e,t),await a.destroy().catch((e=>e))}async getSavedPage(...e){return yt.apply(this,e)}async getSavedPages(...e){return ht.apply(this,e)}async createSavedPage(...e){return ft.apply(this,e)}async deleteSavedPage(...e){return mt.apply(this,e)}async updateSavedPage(...e){return St.apply(this,e)}async getSavedWorkspace(...e){return $a.apply(this,e)}async getSavedWorkspaces(...e){return Ha.apply(this,e)}async createSavedWorkspace(...e){return qa.apply(this,e)}async deleteSavedWorkspace(...e){return Ka.apply(this,e)}async updateSavedWorkspace(...e){return ja.apply(this,e)}async attachPagesToWindow(t){t.pages=await on(t.pages,e?.defaultPageOptions),await _e(t)}async openGlobalContextMenuInternal(...e){return Ua.apply(this,e)}async openGlobalContextMenu(...e){return Da.apply(this,e)}async openViewTabContextMenuInternal(...e){return _a.apply(this,e)}async openViewTabContextMenu(...e){return Da.apply(this,e)}async openPageTabContextMenuInternal(...e){return Fa.apply(this,e)}async openPageTabContextMenu(...e){return Da.apply(this,e)}async openSaveButtonContextMenu(...e){return Da.apply(this,e)}async openSaveButtonContextMenuInternal(...e){return Ga.apply(this,e)}}return"function"==typeof t?t(o):new o};async function ln(){!function(){const e=x();e.addListener(O.WindowOptionsChanged,Qe),e.addListener(O.WindowClosed,Je),e.addListener(O.WindowCreated,Je)}(),async function(){const e=fin.Application.getCurrentSync();await e.addListener("window-focused",pe)}();oe(await ie())}let wn;function un({overrideCallback:e,interopOverride:t,browser:a}){if(!S)throw new Error("Cannot be used outside an OpenFin env.");if(!wn){fin.Platform.getCurrentSync().once("platform-api-ready",(()=>ln())),a?.title&&(n=a.title,Qt=n),wn=fin.Platform.init({overrideCallback:pn(a,e||a?.overrideCallback),interopOverride:t||a?.interopOverride}),(async e=>{z(j.Platform,e)})({allowed:!0})}var n;return wn}const gn=async({theme:e,customActions:t,...a})=>{const n=T.split(".").map((e=>parseInt(e))),o=await(async e=>new Promise((async t=>{const a=(await fin.System.getVersion()).split(".").map((e=>parseInt(e)));t(e.every(((t,n)=>!(n<3)||a[n]===e[n])))})))(n);var i;if(e&&((i=e).forEach((e=>{const t=e.palette.backgroundPrimary;if(!t.includes("#")&&!t.includes("rgb")&&!t.includes("hsl"))throw new Error("Background primary color is not the right format.")})),cn=i,(async e=>{z(j.Theming,e)})({allowed:!0})),t&&(Xe=t),o)return un(a);throw new Error(`Runtime version is not supported.  ${n[0]}.${n[1]}.${n[2]}.* is required`)};module.exports=d})();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/@openfin/workspace/index.js":
/*!******************************************************!*\
  !*** ../../node_modules/@openfin/workspace/index.js ***!
  \******************************************************/
/***/ ((module) => {

(()=>{"use strict";var e={3133:(e,t,n)=>{n.r(t),n.d(t,{CLIAction:()=>ze.Pt,CLIFilterOptionType:()=>ze.el,CLITemplate:()=>ze.yW,deregister:()=>Ye,hide:()=>tt,register:()=>Qe,show:()=>et});var o={};n.r(o),n.d(o,{subscribe:()=>ie});var r={};n.r(r),n.d(r,{create:()=>Ge});var i=n(6532),s=n(7405);const a="home";var c;!function(e){e.Commands="home-commands"}(c||(c={}));var d,u=n(5806);n(7564);!function(e){e[e.Initial=0]="Initial",e[e.Open=1]="Open",e[e.Close=2]="Close"}(d||(d={}));var f=n(5316);const l="all",p="0",g="5",w="6",h=()=>{};function y(e,t){return e?`${e}-${t}`:t}function v(e){return`__search-${e}-topic__`}const m=new Map;function S(e,t){m.has(e)||m.set(e,new Set),m.get(e).add(t)}function C(e,t){const n=m.get(e);n&&n.delete(t)}const P=new Map;function R(e,t){P.has(e)||P.set(e,new Set),P.get(e).add(t)}function b(e,t){const n=P.get(e);n&&n.delete(t)}const T=new Map;async function I(e,t){T.has(e)||T.set(e,new Map),T.get(e).set(t.id,t);const n=m.get(e);if(!n)return;const o=[...n].map((e=>e()));await Promise.all(o)}async function L(e,t){const n=T.get(e);if(!n)return;n.delete(t);const o=P.get(e);if(!o)return;const r=[...o].map((e=>e()));await Promise.all(r)}function k(e){return T.get(e)?[...T.get(e).values()]:[]}function M(e){const t=T.get(e);t&&t.clear()}function B(e,t){const n=T.get(e);return n?n.get(t):null}function O(e,t,n){return{...e,action:n||{...e.actions[0],trigger:f.px.UserAction},dispatcherIdentity:t}}function x(e,t,n="ascending"){const o=e||[];if(!t?.length)return o;const r=[],i=new Map;t.forEach((e=>{if(e.key)return i.set(e.key,e);r.push(e)}));let s=o.map((e=>{const{key:t}=e;if(t&&i.has(t)){const e=i.get(t);return i.delete(t),e}return e}));return s.push(...i.values(),...r),s="ascending"===n?s.sort(((e,t)=>(null!==e.score&&void 0!==e.score?e.score:1/0)-(null!==t.score&&void 0!==t.score?t.score:1/0))):s.sort(((e,t)=>(null!==t.score&&void 0!==t.score?t.score:1/0)-(null!==e.score&&void 0!==e.score?e.score:1/0))),s}function A(e){const t={};let n=[];let o=[];let r=d.Initial;t.getStatus=()=>r,t.getResultBuffer=()=>n,t.setResultBuffer=e=>{n=e,n?.length&&t.onChange()},t.getRevokedBuffer=()=>o,t.setRevokedBuffer=e=>{o=e,o?.length&&t.onChange()},t.onChange=h;const i={};return t.res=i,i.close=()=>{r!==d.Close&&(r=d.Close,t.onChange())},i.open=()=>{r!==d.Open&&(r=d.Open,t.onChange())},i.respond=n=>{const o=x(t.getResultBuffer(),n,e);t.setResultBuffer(o)},i.revoke=(...e)=>{const n=new Set(e),o=t.getResultBuffer().filter((({key:e})=>{const t=n.has(e);return t&&n.delete(e),!t}));t.setResultBuffer(o),n.size&&(t.getRevokedBuffer().forEach((e=>n.add(e))),t.setRevokedBuffer([...n]))},t}function W(e,t,n){const o=new Set;let r=!1;return{close:()=>{r=!0;for(const e of o)e()},req:{id:t,topic:e,...n,context:n?.context||{},onClose:e=>{o.add(e),r&&e()},removeListener:e=>{o.delete(e)}}}}function D(){return{name:fin.me.name,uuid:fin.me.uuid}}function E(){let e;try{const t=fin.Platform.getCurrentSync();if(!t?.identity)return;e=t.identity.uuid}catch(e){}return e}const F="deregistered or does not exist",_=new Error(`provider ${F}`),$=new Error("provider with name already exists"),q=new Error("bad payload"),G=new Error("subscription rejected"),N=new Error(`channel ${F}`),H=new Map;function U(e){const t=V(e);if(t)return t;throw N}function V(e){const t=H.get(e);if(t)return t}function j(e,t){H.set(e,t)}const K=new Map;function X(e){K.has(e)||K.set(e,new Map);const t=K.get(e);return{getRequestsForIdentity:e=>{const n=function(e){return`${e.uuid}:${e.name}`}(e);return t.has(n)||t.set(n,new Map),t.get(n)}}}async function J(e,t){return(await U(e)).dispatch(p,t)}function Z({namespacedTopic:e,topic:t}){const n=B.bind(null,e),o=X(e),r=J.bind(null,e);return async(e,i)=>{if(!e||!e.id||!e.providerId){const e=q;return{error:e.message}}const{id:s,providerId:a}=e,c=n(a);if(!c){const e=_;return{error:e.message}}const d=o.getRequestsForIdentity(i);let u=d.get(e.id);u||(u=W(t,s,e),d.set(e.id,u));const f=A(),l=()=>{const e=f.getResultBuffer();f.setResultBuffer([]);const t=f.getRevokedBuffer();f.setRevokedBuffer([]);const n=f.getStatus();r({id:s,providerId:a,results:e,revoked:t,status:n})};let p=!0,g=!1;f.onChange=()=>{if(p)return p=!1,void l();g||(g=!0,setTimeout((()=>{g=!1,l()}),100))};try{const{results:e,context:t}=await c.onUserInput(u.req,f.res),n=f.getStatus();return{id:s,providerId:a,status:n,results:e,context:t}}catch(e){return{id:s,providerId:a,error:e.message}}}}async function z(e,t,n){const o=n||await U(e),r=D(),i={identity:r,...t,onUserInput:void 0,onResultDispatch:void 0};await o.dispatch("2",i),await I(e,{identity:r,...t})}async function Q(e,t){const n=await U(e);return await n.dispatch("3",t),L(e,t)}async function Y(e,t,n,o){const r=O(n,D(),o),i=B(e,t);if(i){const{onResultDispatch:e}=i;if(!e)return;return e(r)}const s={providerId:t,result:r};return(await U(e)).dispatch(g,s)}async function ee(e,t){const n={...t,context:t?.context||{}},o={},r=async function*(e,t,{setState:n}){const o=await U(e);for(;;){const e=await o.dispatch("1",t),r=e.error;if(r)throw new Error(r);const i=e;if(t.id=i.id,n(i.state),i.done)return i.value;yield i.value}}(e,n,{setState:e=>{o.state=e}});let i=await r.next();return o.id=n.id,o.close=()=>{!async function(e,t){(await U(e)).dispatch(w,{id:t})}(e,o.id)},o.next=()=>{if(i){const e=i;return i=void 0,e}return r.next()},o}async function te(e){return(await U(e)).dispatch("4",null)}async function ne(e){const t=await U(e);var n;n=e,H.delete(n),M(e),await t.disconnect()}function oe(e){const{namespacedTopic:t}=e,n=X(t);return async o=>{if(!V(t))return;const r=n.getRequestsForIdentity(o);for(const{req:e,close:t}of r.values())t(),r.delete(e.id);j(t,(async e=>{const{namespacedTopic:t}=e,n=await re(e);for(const e of k(t))await z(t,e,n);return n})(e))}}async function re(e){const{namespacedTopic:t}=e,n=v(t),o=await async function(e){for(let t=0;t<50;t++)try{return await fin.InterApplicationBus.Channel.connect(e,{wait:!1})}catch(e){if(49===t)throw e;await new Promise((e=>setTimeout(e,1e3)))}}(n);return o.register(p,Z(e)),o.register(w,function(e){const t=X(e);return(e,n)=>{const o=t.getRequestsForIdentity(n),r=o.get(e.id);r&&(r.close(),o.delete(e.id))}}(t)),o.register(g,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return;const o=B(e,t.providerId);if(!o)return;const{onResultDispatch:r}=o;return r?(t.result.dispatcherIdentity=n,r(t.result)):void 0}}(t)),o.onDisconnection(oe(e)),o}async function ie(e){const t=("string"==typeof e?e:e?.topic)||l,n=("string"==typeof e?null:e?.uuid)||E(),o=y(n,t),r={topic:t,namespace:n,namespacedTopic:o};let i=V(o);return i||(i=re(r),j(o,i),await i),{getAllProviders:te.bind(null,o),register:z.bind(null,o),search:ee.bind(null,o),deregister:Q.bind(null,o),dispatch:Y.bind(null,o),disconnect:ne.bind(null,o)}}const se=new Map;function ae(e){const t=ce(e);if(t)return t;throw N}function ce(e){const t=se.get(e);if(t)return t}const de=new Map;function ue(e,t){de.has(e)||de.set(e,new Set),de.get(e).add(t)}function fe(e,t){const n=de.get(e);n&&n.delete(t)}function le(e){return[...k(e)].map((e=>({...e,onUserInput:void 0,onResultDispatch:void 0})))}async function pe(e,t){if(B(e,t.id))throw new Error("provider with name already exists");const n=D();await I(e,{identity:n,...t})}function ge(e,t){L(e,t)}async function we(e,t,n,o){const r=B(e,t);if(!r)throw _;const{onResultDispatch:i}=r;if(!i)return;return i(O(n,D(),o))}async function*he(e,t,n){const o=function(e,t){const n=[],o=[],r=[],i=[];for(const s of e){const e=A(s.scoreOrder),a={results:[],provider:{id:s.id,identity:s.identity,title:s.title,scoreOrder:s.scoreOrder,icon:s.icon,dispatchFocusEvents:s.dispatchFocusEvents}};n.push(a),o.push(e);const c=(async()=>{try{const{results:n,context:o}=await s.onUserInput(t,e.res);a.results=x(a.results,n),a.context={...a.context,...o}}catch(e){a.error=e}})();c.finally((()=>{c.done=!0})),i.push(c),r.push(r.length)}return{providerResponses:n,listenerResponses:o,openListenerResponses:r,initialResponsePromises:i}}(t.targets?t.targets.map((t=>B(e,t))).filter((e=>!!e)):[...k(e).filter((e=>!e.hidden))],t),{providerResponses:r,listenerResponses:i}=o;let{openListenerResponses:s,initialResponsePromises:a}=o,c=f.De.Fetching;const u=e=>{c=e,n.setState(c)};let l,p=!1;t.onClose((()=>{p=!0,l&&l()}));do{let e=!1;if(a.length){const t=[];for(const n of a)n.done?e=!0:t.push(n);a=t,a.length||(u(f.De.Fetched),e=!0)}let t,n=!1;const o=()=>{n=!0,t&&t()},g=[];for(const t of s){const n=i[t],s=r[t],a=n.getStatus();(a===d.Open||c===f.De.Fetching&&a===d.Initial)&&(g.push(t),n.onChange=o);const u=n.getResultBuffer();u.length&&(n.setResultBuffer([]),s.results=x(s.results,u),e=!0);const l=n.getRevokedBuffer();if(l.length){n.setRevokedBuffer([]);const t=new Set(l);s.results=s.results.filter((({key:e})=>!t.has(e))),e=!0}}if(s=g,e&&(yield r),p)break;n||(s.length||a.length)&&await Promise.race([...a,new Promise((e=>{t=e})),new Promise((e=>{l=e}))])}while(s.length||a.length);return u(f.De.Complete),r}let ye=0;function ve({namespacedTopic:e,topic:t},n){ye+=1;const o=W(t,ye.toString(),n),r=he(e,o.req,{setState:e=>{r.state=e}});return r.id=ye.toString(),r.close=o.close,r.state=f.De.Fetching,r}const me=new Map;function Se(e,t){return`${e}:${t}`}function Ce(e){return async(t,...n)=>{if(!t)return{error:q.message};let o;if(t.id)o=Se(e.namespacedTopic,t.id);else{const n=ve(e,t);o=Se(e.namespacedTopic,n.id),t.id=n.id,me.set(o,{generator:n})}const r=me.get(o);clearTimeout(r.timeout);const i=await r.generator.next();return r.timeout=function(e){return window.setTimeout((()=>{me.delete(e)}),1e4)}(o),{...i,id:t.id,state:r.generator.state}}}function Pe(e,t,n){return ae(e).dispatch(t,w,{id:n})}function Re(e){return t=>function(e,t){const n=Se(e,t),o=me.get(n);o&&o.generator.close()}(e,t.id)}async function be(e,t,{id:n,query:o,context:r,targets:i}){const s=ae(e),a={id:n,query:o,context:r,targets:i,providerId:t.id},c=await s.dispatch(t.identity,p,a),d=c.error;if(d)throw new Error(d);return c}const Te=new Map;function Ie(e,t,n){return`${e}:${t.name}:${t.uuid}:${n}`}const Le=new Map;function ke(e,t,n){return`${e}:${t}:${n}`}function Me(e,t){const n=Ie.bind(null,e,t.identity),o=Pe.bind(null,e,t.identity),r=be.bind(null,e,t);return async(i,s)=>{const a=n(i.id);if(!Te.has(a)){const e=()=>{o(i.id),Te.delete(a)};Te.set(a,e),i.onClose(e)}const c=ke(e,t.id,i.id),u=()=>{Le.delete(c),s.close()};i.onClose(u),Le.set(c,(e=>{e.results?.length&&s.respond(e.results),e.revoked?.length&&s.revoke(...e.revoked),e.status===d.Open&&s.open(),e.status===d.Close&&u()}));const f=await r(i);return f.status===d.Open&&s.open(),f.status!==d.Close&&f.status!==d.Initial||u(),f}}function Be(e,t){return async n=>{const o=ae(e),r={providerId:t.id,result:n};return o.dispatch(t.identity,g,r)}}const Oe=new Map;function xe(e,t){return`${e}-${t.name}-${t.uuid}`}function Ae(e){return async(t,n)=>{if(!t||!t.id)return void new Error(JSON.stringify(t));if(B(e,t.id))throw $;t.identity=n,await async function(e,t){const n=xe(e,t.identity);Oe.has(n)||Oe.set(n,[]),Oe.get(n).push(t.id),await I(e,{...t,onUserInput:Me(e,t),onResultDispatch:Be(e,t)})}(e,t)}}function We(e){return t=>{t&&function(e,t){const n=B(e,t);if(!n)return;const o=xe(e,n.identity),r=Oe.get(o);if(r){const n=r.findIndex((e=>e===t));-1!==n&&(r.splice(n,1),L(e,t))}}(e,t)}}const De=new Map;function Ee(e,t){De.has(e)||De.set(e,new Set),De.get(e).add(t)}function Fe(e,t){const n=De.get(e);n&&n.delete(t)}function _e(e){return async t=>{!function(e,t){const n=xe(e,t),o=Oe.get(n);if(o){for(const t of o)L(e,t);Oe.delete(n)}}(e,t);const n=De.get(e);n&&n.forEach((e=>e(t)))}}async function $e(e){const{namespacedTopic:t}=e,n=v(e.namespacedTopic),o=await(r=n,fin.InterApplicationBus.Channel.create(r));var r;return o.onConnection(function({namespacedTopic:e}){return async t=>{const n=de.get(e);if(n)for(const e of n)if(!await e(t))throw G}}(e)),o.onDisconnection(_e(t)),o.register(w,Re(t)),o.register(p,function(e){return t=>{const n=ke(e,t.providerId,t.id),o=Le.get(n);o&&o(t)}}(t)),o.register("2",Ae(t)),o.register("3",We(t)),o.register("4",function(e){return async()=>le(e)}(t)),o.register("1",Ce(e)),o.register(g,function(e){return async(t,n)=>{if(!t||!t.providerId||!t.result)return;const o=B(e,t.providerId);if(!o)throw _;const{onResultDispatch:r}=o;return r?(t.result.dispatcherIdentity=n,r(t.result)):void 0}}(t)),o}async function qe(e){const t=ae(e);var n;n=e,se.delete(n),await t.destroy(),M(e)}async function Ge(e){const t=("string"==typeof e?e:e?.topic)||l,n=E(),o=y(n,t),r={topic:t,namespace:n,namespacedTopic:o};let i=ce(o);i||(i=await $e(r),function(e,t){se.set(e,t)}(o,i));const s=fe.bind(null,o),a=Fe.bind(null,o),c=C.bind(null,o),d=b.bind(null,o);return{getAllProviders:le.bind(null,o),search:ve.bind(null,r),register:pe.bind(null,o),deregister:ge.bind(null,o),onSubscription:ue.bind(null,o),onDisconnect:Ee.bind(null,o),onRegister:S.bind(null,o),onDeregister:R.bind(null,o),dispatch:we.bind(null,r),disconnect:qe.bind(null,o),removeListener:e=>{s(e),a(e),c(e),d(e)}}}const{create:Ne}=r,{subscribe:He}=o,Ue={create:Ne,subscribe:He,defaultTopic:"all"},Ve=()=>{const e=window;e.search=Ue,e.fin&&(e.fin.Search=Ue)},je=e=>{const t=()=>{Ve(),window.removeEventListener(e,t)};return t};if("undefined"!=typeof window){Ve();const e="load",t=je(e);window.addEventListener(e,t);const n="DOMContentLoaded",o=je(n);window.addEventListener(n,o)}const Ke=new Map;async function Xe(){await async function(e){Ke.set(e,await He({topic:e,uuid:u.q9.Workspace}))}(a)}let Je;async function Ze(e){return await async function(){return Je||(Je=Xe()),Je}(),Ke.get(e)}var ze=n(3758);const Qe=async e=>{if(!e.icon)throw new Error(`${e.id} provider needs to have icon property defined.`);await(0,s.aB)();const t=await Ze(a);try{const n=await t.register(e);return(0,i.ck)({allowed:!0}),n}catch(e){throw(0,i.ck)({allowed:!1,rejectionCode:e.message}),e}},Ye=async e=>{await(0,s.aB)();return(await Ze(a)).deregister(e)};async function et(){return(await(0,s.Xl)()).dispatch(s.Ml.ShowHome,void 0)}async function tt(){return(await(0,s.Xl)()).dispatch(s.Ml.HideHome,void 0)}},3298:(e,t,n)=>{n.d(t,{w:()=>o.wt});var o=n(5316)},3758:(e,t,n)=>{var o,r,i;n.d(t,{Pt:()=>o,yW:()=>r,el:()=>i}),function(e){e.Suggestion="suggestion"}(o||(o={})),function(e){e.Contact="Contact",e.Custom="Custom",e.List="List",e.Plain="Plain",e.SimpleText="SimpleText",e.Loading="Loading",e.Error="Error"}(r||(r={})),function(e){e.MultiSelect="MultiSelect"}(i||(i={}))},7564:(e,t,n)=>{n(3298),n(3758),n(6114),n(2109)},6114:(e,t,n)=>{var o,r;n.d(t,{L:()=>o,T:()=>r}),function(e){e.Snapshot="snapshot",e.Manifest="manifest",e.View="view",e.External="external"}(o||(o={})),function(e){e.LandingPage="landingPage",e.AppGrid="appGrid"}(r||(r={}))},2109:(e,t,n)=>{n.d(t,{p6:()=>o,Go:()=>r,bI:()=>i,ZJ:()=>s});const o={Container:"Container",Button:"Button"},r={Text:"Text",Image:"Image",List:"List"},i={...o,...r};var s;!function(e){e.Primary="primary",e.Secondary="secondary",e.TextOnly="textOnly"}(s||(s={}))},317:(e,t,n)=>{n.r(t),n.d(t,{AppManifestType:()=>i.L,StorefrontTemplate:()=>i.T,deregister:()=>f,hide:()=>l,register:()=>u,show:()=>p});var o=n(6532),r=n(7405);n(7564);var i=n(6114);let s;const a=new Map,c=e=>{if(!a.has(e))throw new Error(`Storefront Provider with id ${e} is not registered`);return a.get(e)},d=async e=>{const t=await(0,r.Xl)();if(a.has(e.id))throw new Error(`Storefront provider with id ${e.id} already registered`);return a.set(e.id,e),(e=>{e.isStorefrontActionsRegistered||(e.isStorefrontActionsRegistered=!0,e.register(r.Ml.GetStorefrontProviderApps,(e=>c(e).getApps())),e.register(r.Ml.GetStorefrontProviderFooter,(e=>c(e).getFooter())),e.register(r.Ml.GetStorefrontProviderLandingPage,(e=>c(e).getLandingPage())),e.register(r.Ml.GetStorefrontProviderNavigation,(e=>c(e).getNavigation())),e.register(r.Ml.LaunchStorefrontProviderApp,(({id:e,app:t})=>c(e).launchApp(t))))})(t),t.dispatch(r.Ml.RegisterStorefrontProvider,e)},u=e=>(s=d(e),(0,o.d9)({allowed:!0}),s),f=async e=>{await s,a.delete(e);return(await(0,r.Xl)()).dispatch(r.Ml.DeregisterStorefrontProvider,e)},l=async()=>{await s,await(0,r.aB)(),await(async()=>(await(0,r.Dm)()).dispatch(r.Ml.HideStorefront,void 0))()},p=async()=>{await s,await(0,r.aB)(),await(async()=>(await(0,r.Dm)()).dispatch(r.Ml.ShowStorefront,null))()}},7405:(e,t,n)=>{n.d(t,{Ml:()=>s,Dm:()=>a,Xl:()=>f,aB:()=>u});var o=n(6678);const r=o.Ax&&"complete"!==document.readyState&&new Promise((e=>document.addEventListener("readystatechange",(()=>{"complete"===document.readyState&&e()}))));var i=n(121);var s;!function(e){e.RegisterStorefrontProvider="register-storefront-provider",e.DeregisterStorefrontProvider="deregister-storefront-provider",e.GetStorefrontProviders="get-storefront-providers",e.HideStorefront="hide-storefront",e.GetStorefrontProviderApps="get-storefront-provider-apps",e.GetStorefrontProviderLandingPage="get-storefront-provider-landing-page",e.GetStorefrontProviderFooter="get-storefront-provider-footer",e.GetStorefrontProviderNavigation="get-storefront-provider-navigation",e.LaunchStorefrontProviderApp="launch-storefront-provider-app",e.ShowStorefront="show-storefront",e.CreateStorefrontWindow="create-storefront-window",e.ShowHome="show-home",e.HideHome="hide-home",e.AssignHomeSearchContext="assign-home-search-context",e.GetLegacyPages="get-legacy-pages",e.GetLegacyWorkspaces="get-legacy-workspaces",e.GetComputedPlatformTheme="get-computed-platform-theme"}(s||(s={}));const a=function(e){let t;return()=>{if(!o.sS)throw new Error("getChannelClient cannot be used outside an OpenFin env. Avoid using this method during pre-rendering.");return t||(t=(async()=>{await r;const n=await fin.InterApplicationBus.Channel.connect(e);return n.onDisconnection((async()=>{t=void 0})),n})().then((e=>e)).catch((n=>{throw t=void 0,new Error(`failed to connect to channel provider ${e}: ${n}`)}))),t}}("__of_workspace_protocol__"),c="isLaunchedViaLib",d=e=>{const t=new URL(e);return t.searchParams.append(c,"true"),t.toString()},u=async()=>{if(!await(0,i.JV)(i.iW))return(o.ZK||-1===navigator.userAgent.indexOf("Win"))&&await fin.Application.startFromManifest(d(o.aW)),fin.System.openUrlWithBrowser(d(o.GX))},f=async()=>(await u(),a())},5806:(e,t,n)=>{n.d(t,{q9:()=>o});var o,r,i,s=n(6678);!function(e){e.Workspace="openfin-browser"}(o||(o={})),function(e){e.RunRequested="run-requested",e.WindowOptionsChanged="window-options-changed",e.WindowClosed="window-closed",e.WindowCreated="window-created"}(r||(r={})),function(e){e.FinProtocol="fin-protocol"}(i||(i={}));s.AB,s.AB,o.Workspace,o.Workspace},6678:(e,t,n)=>{var o;n.d(t,{sS:()=>r,Ax:()=>i,AB:()=>a,oC:()=>c,ZK:()=>d,GX:()=>u,aW:()=>f,u0:()=>p}),function(e){e.Local="local",e.Dev="dev",e.Staging="staging",e.Prod="prod"}(o||(o={}));const r="undefined"!=typeof window&&"undefined"!=typeof fin,i=("undefined"==typeof process||process.env?.JEST_WORKER_ID,"undefined"!=typeof window),s=i?window.origin:o.Local,a=r&&fin.me.uuid,c=r&&fin.me.name,d=(r&&fin.me.entityType,"prod"===o.Local),u=(o.Dev,o.Staging,o.Prod,"fins://system-apps/workspace"),f="https://cdn.openfin.co/workspace/8.1.7/app.json",l=e=>e.startsWith("http://")||e.startsWith("https://")?e:s+e,p=(l("https://cdn.openfin.co/workspace/8.1.7"),l("https://cdn.openfin.co/workspace/8.1.7"),"undefined"!=typeof WORKSPACE_DOCS_PLATFORM_URL&&l(WORKSPACE_DOCS_PLATFORM_URL),"undefined"!=typeof WORKSPACE_DOCS_CLIENT_URL&&l(WORKSPACE_DOCS_CLIENT_URL),"8.1.7")},6532:(e,t,n)=>{n.d(t,{ck:()=>a,d9:()=>c});var o,r=n(6678),i=n(121);!function(e){e.Browser="Browser",e.Home="Home",e.Notification="Notification",e.Storefront="Storefront",e.Platform="Platform",e.Theming="Theming"}(o||(o={}));const s=async(e,t)=>{const n={apiVersion:t.apiVersion||r.u0,componentName:e,componentVersion:r.u0,...t};fin.System.registerUsage({type:"workspace-licensing",data:n})},a=async e=>{i.OI.uuid===i.Gi.uuid&&i.OI.name===i.Gi.name||s(o.Home,e)},c=async e=>{s(o.Storefront,e)}},121:(e,t,n)=>{n.d(t,{Gi:()=>c,OI:()=>d,iW:()=>u,JV:()=>f});var o,r,i=n(5806),s=n(6678);!function(e){e.Home="openfin-home",e.Dock="openfin-dock",e.Storefront="openfin-storefront",e.HomeInternal="openfin-home-internal",e.BrowserMenu="openfin-browser-menu",e.BrowserIndicator="openfin-browser-indicator",e.BrowserWindow="internal-generated-window"}(o||(o={})),function(e){e.Shown="shown",e.BoundsChanged="bounds-changed",e.LayoutReady="layout-ready",e.EndUserBoundsChanging="end-user-bounds-changing",e.Blurred="blurred",e.CloseRequested="close-requested",e.Focused="focused",e.ShowRequested="show-requested",e.ViewCrashed="view-crashed",e.ViewAttached="view-attached",e.ViewDetached="view-detached",e.ViewPageTitleUpdated="view-page-title-updated",e.ViewDestroyed="view-destroyed",e.OptionsChanged="options-changed"}(r||(r={}));function a(e){if(!s.sS)throw new Error("getOFWindow can only be used in an OpenFin env. Avoid calling this method during pre-rendering.");return fin.Window.wrapSync(e)}const c={name:s.oC,uuid:s.AB};const d={name:o.Home,uuid:i.q9.Workspace},u=(o.Dock,i.q9.Workspace,o.Storefront,i.q9.Workspace,{name:i.q9.Workspace,uuid:i.q9.Workspace});const f=e=>a(e).getOptions().then((()=>!0)).catch((()=>!1))},5316:(e,t,n)=>{var o,r,i;n.d(t,{De:()=>o,px:()=>r,wt:()=>i}),function(e){e.Fetching="fetching",e.Fetched="fetched",e.Complete="complete"}(o||(o={})),function(e){e.UserAction="user-action",e.FocusChange="focus-change",e.Reload="reload"}(r||(r={})),function(e){e.Active="active",e.Default="default"}(i||(i={}))}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={exports:{}};return e[o](i,i.exports,n),i.exports}n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var o={};(()=>{n.r(o),n.d(o,{AppManifestType:()=>p.L,ButtonStyle:()=>f.ZJ,CLIAction:()=>l.Pt,CLIFilterOptionType:()=>l.el,CLITemplate:()=>l.yW,ContainerTemplateFragmentNames:()=>f.p6,Home:()=>r,Legacy:()=>e,PresentationTemplateFragmentNames:()=>f.Go,SearchTagBackground:()=>u.w,Storefront:()=>d,StorefrontTemplate:()=>p.T,TemplateFragmentTypes:()=>f.bI});var e={};n.r(e),n.d(e,{getPages:()=>a,getWorkspaces:()=>c});var t,r=n(3133);n(6678),n(121);!function(e){e.TabCreated="tab-created",e.ContainerCreated="container-created",e.ContainerResized="container-resized"}(t||(t={}));new Map;var i;!function(e){e.CurrentWorkspaceId="currentWorkspaceId",e.LastFocusedBrowserWindow="lastFocusedBrowserWindow",e.MachineName="machineName",e.NewTabPageLayout="NewTabPageLayout",e.NewTabPageSort="NewTabPageSort"}(i||(i={}));var s=n(7405);const a=()=>async function(){return(await(0,s.Dm)()).dispatch(s.Ml.GetLegacyPages,void 0)}(),c=()=>(async()=>(await(0,s.Dm)()).dispatch(s.Ml.GetLegacyWorkspaces,void 0))();var d=n(317),u=n(3298),f=n(2109),l=n(3758),p=n(6114)})(),module.exports=o})();
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../node_modules/events/events.js":
/*!*******************************************!*\
  !*** ../../node_modules/events/events.js ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/application/Factory.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/application/Factory.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/openfin-adapter/src/util/validate.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/application/Instance.js");
/**
 * @typedef {object} ApplicationOption
 * @summary Application creation options.
 * @desc This is the options object required by {@link Application.start Application.start}.
 *
 * The following options are required:
 * * `uuid` is required in the app manifest as well as by {@link Application.start Application.start}
 * * `name` is optional in the app manifest but required by {@link Application.start Application.start}
 * * `url` is optional in both the app manifest {@link Application.start Application.start} and  but is usually given
 * (defaults to `"about:blank"` when omitted).
 *
 * _This jsdoc typedef mirrors the `ApplicationOption` TypeScript interface in `@types/openfin`._
 *
 * **IMPORTANT NOTE:**
 * This object inherits all the properties of the window creation {@link Window~options options} object,
 * which will take priority over those of the same name that may be provided in `mainWindowOptions`.
 *
 * @property {boolean} [disableIabSecureLogging=false]
 * When set to `true` it will disable IAB secure logging for the app.
 *
 * @property {string} [loadErrorMessage="There was an error loading the application."]
 * An error message to display when the application (launched via manifest) fails to load.
 * A dialog box will be launched with the error message just before the runtime exits.
 * Load fails such as failed DNS resolutions or aborted connections as well as cancellations, _e.g.,_ `window.stop()`,
 * will trigger this dialog.
 * Client response codes such as `404 Not Found` are not treated as fails as they are valid server responses.
 *
 * @property {Window~options} [mainWindowOptions]
 * The options of the main window of the application.
 * For a description of these options, click the link (in the Type column).
 *
 * @property {number} [maxViewPoolSize=1000]
 * Platforms Only.  The maximum number of "detached" or "pooled" Views that can exist in the Platform before being closed.
 * If you do not wish for views to be pooled on your platform, set this property to zero.
 *
 * @property {boolean} [preventQuitOnLastWindowClosed=false]
 * Platforms Only. Prevent the Platform Provider from quitting automatically when the last Platform Window is closed.
 * Note: if the Platform Provider is showing, it won't close automatically.
 * If you want a hidden Platform Provider to remain open after the last Platform Window has been closed, set this property to true.
 *
 * @property {string} [name]
 * The name of the application (and the application's main window).
 *
 * If provided, _must_ match `uuid`.
 *
 * @property {boolean} [nonPersistent=false]
 * A flag to configure the application as non-persistent.
 * Runtime exits when there are no persistent apps running.
 *
 * @property {boolean} [plugins=false]
 * Enable Flash at the application level.
 *
 * @property {boolean} [spellCheck=false]
 * Enable spell check at the application level.
 *
 * @property {string} [url="about:blank"]
 * The url to the application (specifically the application's main window).
 *
 * @property {string} uuid
 * The _Unique Universal Identifier_ (UUID) of the application, unique within the set of all other applications
 *  running in the OpenFin Runtime.
 *
 * Note that `name` and `uuid` must match.
 *
 * @property {boolean} [enableJumpList=false]
 * Enables the use of the Jumplists API and the 'pin to taskbar' functionality.
 * Only relevant in Windows.
 *
 * @property {boolean} [webSecurity=true]
 * When set to `false` it will disable the same-origin policy for the app.
 */
/**
 * @lends Application
 */
class ApplicationModule extends base_1.Base {
    /**
     * Asynchronously returns an Application object that represents an existing application.
     * @param { Identity } identity
     * @return {Promise.<Application>}
     * @tutorial Application.wrap
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('wrap-application').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1.Application(this.wire, identity);
    }
    /**
     * Synchronously returns an Application object that represents an existing application.
     * @param { Identity } identity
     * @return {Application}
     * @tutorial Application.wrapSync
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('wrap-application-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1.Application(this.wire, identity);
    }
    async _create(appOptions) {
        // set defaults:
        if (appOptions.waitForPageLoad === undefined) {
            appOptions.waitForPageLoad = false;
        }
        if (appOptions.autoShow === undefined && appOptions.isPlatformController === undefined) {
            appOptions.autoShow = true;
        }
        await this.wire.sendAction('create-application', appOptions);
        return this.wrap({ uuid: appOptions.uuid });
    }
    /**
     * DEPRECATED method to create a new Application. Use {@link Application.start} instead.
     * @param { ApplicationOption } appOptions
     * @return {Promise.<Application>}
     * @tutorial Application.create
     * @ignore
     */
    create(appOptions) {
        console.warn('Deprecation Warning: fin.Application.create is deprecated. Please use fin.Application.start');
        this.wire.sendAction('application-create').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this._create(appOptions);
    }
    /**
     * Creates and starts a new Application.
     * @param { ApplicationOption } appOptions
     * @return {Promise.<Application>}
     * @tutorial Application.start
     * @static
     */
    async start(appOptions) {
        this.wire.sendAction('start-application').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const app = await this._create(appOptions);
        await this.wire.sendAction('run-application', { uuid: appOptions.uuid });
        return app;
    }
    /**
     * Asynchronously starts a batch of applications given an array of application identifiers and manifestUrls.
     * Returns once the RVM is finished attempting to launch the applications.
     * @param { Array.<ManifestInfo> } applications
     * @return {Promise.<void>}
     * @static
     * @tutorial Application.startManyManifests
     * @experimental
     */
    async startManyManifests(applications) {
        return this.wire.sendAction('run-applications', { applications }).then(() => undefined);
    }
    /**
     * Asynchronously returns an Application object that represents the current application
     * @return {Promise.<Application>}
     * @tutorial Application.getCurrent
     * @static
     */
    getCurrent() {
        this.wire.sendAction('get-current-application').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this.wrap({ uuid: this.wire.me.uuid });
    }
    /**
     * Synchronously returns an Application object that represents the current application
     * @return {Application}
     * @tutorial Application.getCurrentSync
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('get-current-application-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this.wrapSync({ uuid: this.wire.me.uuid });
    }
    /**
     * Retrieves application's manifest and returns a running instance of the application.
     * @param {string} manifestUrl - The URL of app's manifest.
     * @param {RvmLaunchOptions} [opts] - Parameters that the RVM will use.
     * @return {Promise.<Application>}
     * @tutorial Application.startFromManifest
     * @static
     */
    async startFromManifest(manifestUrl, opts) {
        this.wire.sendAction('application-start-from-manifest').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const app = await this._createFromManifest(manifestUrl);
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore using private method without warning.
        await app._run(opts); // eslint-disable-line no-underscore-dangle
        return app;
    }
    createFromManifest(manifestUrl) {
        console.warn('Deprecation Warning: fin.Application.createFromManifest is deprecated. Please use fin.Application.startFromManifest');
        this.wire.sendAction('application-create-from-manifest').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this._createFromManifest(manifestUrl);
    }
    _createFromManifest(manifestUrl) {
        return this.wire
            .sendAction('get-application-manifest', { manifestUrl })
            .then(({ payload }) => {
            const uuid = payload.data.platform ? payload.data.platform.uuid : payload.data.startup_app.uuid;
            return this.wrap({ uuid });
        })
            .then((app) => {
            app._manifestUrl = manifestUrl; // eslint-disable-line no-underscore-dangle
            return app;
        });
    }
}
exports["default"] = ApplicationModule;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/application/Instance.js":
/*!**************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/application/Instance.js ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Application = void 0;
/* eslint-disable import/prefer-default-export */
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const window_1 = __webpack_require__(/*! ../window */ "../../node_modules/openfin-adapter/src/api/window/index.js");
const view_1 = __webpack_require__(/*! ../view */ "../../node_modules/openfin-adapter/src/api/view/index.js");
/**
 * @classdesc An object representing an application. Allows the developer to create,
 * execute, show/close an application as well as listen to <a href="tutorial-Application.EventEmitter.html">application events</a>.
 * @class
 * @hideconstructor
 */
class Application extends base_1.EmitterBase {
    constructor(wire, identity) {
        super(wire, ['application', identity.uuid]);
        this.identity = identity;
        this.window = new window_1._Window(this.wire, {
            uuid: this.identity.uuid,
            name: this.identity.uuid
        });
    }
    windowListFromIdentityList(identityList) {
        const windowList = [];
        identityList.forEach((identity) => {
            windowList.push(new window_1._Window(this.wire, {
                uuid: identity.uuid,
                name: identity.name
            }));
        });
        return windowList;
    }
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof Application
     * @instance
     * @tutorial Application.EventEmitter
     */
    /**
     * Determines if the application is currently running.
     * @return {Promise.<boolean>}
     * @tutorial Application.isRunning
     */
    /**
     * JumpListCategory interface
     * @typedef { object } JumpListCategory
     * @property { string } name The display title for the category. If omitted, items in this category will be placed into the standard 'Tasks' category. There can be only one such category, and it will always be displayed at the bottom of the JumpList.
     * @property { JumpListItem[] } items Array of JumpListItem objects
     */
    /**
     * JumpListItem interface
     * @typedef { object } JumpListItem
     * @property { string } type One of the following: "task" or "separator". Defaults to task.
     * @property { string } title The text to be displayed for the JumpList Item. Should only be set if type is "task".
     * @property { string } description Description of the task (displayed in a tooltip). Should only be set if type is "task".
     * @property { string } deepLink Deep link to a manifest, i.e: fins://path.to/manifest.json?$$param1=value1. See {@link https://developers.openfin.co/docs/deep-linking deep-linking} for more information.
     * @property { string } iconPath The absolute path to an icon to be displayed for the item, which can be an arbitrary resource file that contains an icon (e.g. .ico, .exe, .dll).
     * @property { number } iconIndex The index of the icon in the resource file. If a resource file contains multiple icons this value can be used to specify the zero-based index of the icon that should be displayed for this task. If a resource file contains only one icon, this property should be set to zero.
     */
    isRunning() {
        return this.wire.sendAction('is-application-running', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Closes the application and any child windows created by the application.
     * Cleans the application from state so it is no longer found in getAllApplications.
     * @param { boolean } [force = false] Close will be prevented from closing when force is false and
     *  ‘close-requested’ has been subscribed to for application’s main window.
     * @return {Promise.<boolean>}
     * @tutorial Application.quit
     */
    async quit(force = false) {
        await this._close(force);
        await this.wire.sendAction('destroy-application', { force, ...this.identity });
    }
    _close(force = false) {
        return this.wire.sendAction('close-application', { force, ...this.identity }).then(() => undefined);
    }
    close(force = false) {
        console.warn('Deprecation Warning: Application.close is deprecated Please use Application.quit');
        this.wire.sendAction('application-close', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this._close(force);
    }
    /**
     * Retrieves an array of wrapped fin.Windows for each of the application’s child windows.
     * @return {Promise.Array.<_Window>}
     * @tutorial Application.getChildWindows
     */
    getChildWindows() {
        return this.wire.sendAction('get-child-windows', this.identity).then(({ payload }) => {
            const identityList = [];
            payload.data.forEach((winName) => {
                identityList.push({ uuid: this.identity.uuid, name: winName });
            });
            return this.windowListFromIdentityList(identityList);
        });
    }
    /**
     * Retrieves the JSON manifest that was used to create the application. Invokes the error callback
     * if the application was not created from a manifest.
     * @return {Promise.<any>}
     * @tutorial Application.getManifest
     */
    getManifest() {
        return this.wire.sendAction('get-application-manifest', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves UUID of the application that launches this application. Invokes the error callback
     * if the application was created from a manifest.
     * @return {Promise.<string>}
     * @tutorial Application.getParentUuid
     */
    getParentUuid() {
        return this.wire.sendAction('get-parent-application', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves current application's shortcut configuration.
     * @return {Promise.<ShortCutConfig>}
     * @tutorial Application.getShortcuts
     */
    getShortcuts() {
        return this.wire.sendAction('get-shortcuts', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves current application's views.
     * @experimental
     * @return {Promise.Array.<View>}
     * @tutorial Application.getViews
     */
    async getViews() {
        const { payload } = await this.wire.sendAction('application-get-views', this.identity);
        return payload.data.map((id) => new view_1.View(this.wire, id));
    }
    /**
     * Returns the current zoom level of the application.
     * @return {Promise.<number>}
     * @tutorial Application.getZoomLevel
     */
    getZoomLevel() {
        return this.wire.sendAction('get-application-zoom-level', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Returns an instance of the main Window of the application
     * @return {Promise.<_Window>}
     * @tutorial Application.getWindow
     */
    getWindow() {
        this.wire.sendAction('application-get-window', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return Promise.resolve(this.window);
    }
    /**
     * Manually registers a user with the licensing service. The only data sent by this call is userName and appName.
     * @param { string } userName - username to be passed to the RVM.
     * @param { string } appName - app name to be passed to the RVM.
     * @return {Promise.<void>}
     * @tutorial Application.registerUser
     */
    registerUser(userName, appName) {
        return this.wire.sendAction('register-user', { userName, appName, ...this.identity }).then(() => undefined);
    }
    /**
     * Removes the application’s icon from the tray.
     * @return {Promise.<void>}
     * @tutorial Application.removeTrayIcon
     */
    removeTrayIcon() {
        return this.wire.sendAction('remove-tray-icon', this.identity).then(() => undefined);
    }
    /**
     * Restarts the application.
     * @return {Promise.<void>}
     * @tutorial Application.restart
     */
    restart() {
        return this.wire.sendAction('restart-application', this.identity).then(() => undefined);
    }
    /**
     * DEPRECATED method to run the application.
     * Needed when starting application via {@link Application.create}, but NOT needed when starting via {@link Application.start}.
     * @return {Promise.<void>}
     * @tutorial Application.run
     * @ignore
     */
    run() {
        console.warn('Deprecation Warning: Application.run is deprecated Please use fin.Application.start');
        this.wire.sendAction('application-run', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this._run();
    }
    _run(opts = {}) {
        return this.wire
            .sendAction('run-application', {
            manifestUrl: this._manifestUrl,
            opts,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Instructs the RVM to schedule one restart of the application.
     * @return {Promise.<void>}
     * @tutorial Application.scheduleRestart
     */
    scheduleRestart() {
        return this.wire.sendAction('relaunch-on-close', this.identity).then(() => undefined);
    }
    /**
     * Sends a message to the RVM to upload the application's logs. On success,
     * an object containing logId is returned.
     * @return {Promise.<LogInfo>}
     * @tutorial Application.sendApplicationLog
     */
    async sendApplicationLog() {
        const { payload } = await this.wire.sendAction('send-application-log', this.identity);
        return payload.data;
    }
    /**
     * Sets or removes a custom JumpList for the application. Only applicable in Windows OS.
     * If categories is null the previously set custom JumpList (if any) will be replaced by the standard JumpList for the app (managed by Windows).
     * Note: If the "name" property is omitted it defaults to "tasks".
     * @param { Array.<JumpListCategory> | null } jumpListCategories An array of JumpList Categories to populate. If null, remove any existing JumpList configuration and set to Windows default.
     * @return { Promise.<void> }
     * @tutorial Application.setJumpList
     */
    async setJumpList(jumpListCategories) {
        await this.wire.sendAction('set-jump-list', { config: jumpListCategories, ...this.identity });
    }
    /**
     * Adds a customizable icon in the system tray.  To listen for a click on the icon use the `tray-icon-clicked` event.
     * @param { string } icon Image URL or base64 encoded string to be used as the icon
     * @return {Promise.<void>}
     * @tutorial Application.setTrayIcon
     */
    setTrayIcon(icon) {
        return this.wire
            .sendAction('set-tray-icon', {
            enabledIcon: icon,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Sets new application's shortcut configuration. Windows only.
     * @param { ShortCutConfig } config New application's shortcut configuration.
     * @param { boolean } [config.desktop] - Enable/disable desktop shortcut.
     * @param { boolean } [config.startMenu] - Enable/disable start menu shortcut.
     * @param { boolean } [config.systemStartup] - Enable/disable system startup shortcut.
     * @return {Promise.<void>}
     * @tutorial Application.setShortcuts
     */
    setShortcuts(config) {
        return this.wire.sendAction('set-shortcuts', { data: config, ...this.identity }).then(() => undefined);
    }
    /**
     * Sets the query string in all shortcuts for this app. Requires RVM 5.5+.
     * @param { string } queryString The new query string for this app's shortcuts.
     * @return {Promise.<void>}
     * @tutorial Application.setShortcutQueryParams
     */
    async setShortcutQueryParams(queryString) {
        await this.wire.sendAction('set-shortcut-query-args', { data: queryString, ...this.identity });
    }
    /**
     * Sets the zoom level of the application. The original size is 0 and each increment above or below represents zooming 20%
     * larger or smaller to default limits of 300% and 50% of original size, respectively.
     * @param { number } level The zoom level
     * @return {Promise.<void>}
     * @tutorial Application.setZoomLevel
     */
    setZoomLevel(level) {
        return this.wire.sendAction('set-application-zoom-level', { level, ...this.identity }).then(() => undefined);
    }
    /**
     * Sets a username to correlate with App Log Management.
     * @param { string } username Username to correlate with App's Log.
     * @return {Promise.<void>}
     * @tutorial Application.setAppLogUsername
     */
    async setAppLogUsername(username) {
        await this.wire.sendAction('set-app-log-username', { data: username, ...this.identity });
    }
    /**
     * @summary Retrieves information about the system tray.
     * @desc The only information currently returned is the position and dimensions.
     * @return {Promise.<TrayInfo>}
     * @tutorial Application.getTrayIconInfo
     */
    getTrayIconInfo() {
        return this.wire.sendAction('get-tray-icon-info', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Closes the application by terminating its process.
     * @return {Promise.<void>}
     * @tutorial Application.terminate
     */
    terminate() {
        return this.wire.sendAction('terminate-application', this.identity).then(() => undefined);
    }
    /**
     * Waits for a hanging application. This method can be called in response to an application
     * "not-responding" to allow the application to continue and to generate another "not-responding"
     * message after a certain period of time.
     * @return {Promise.<void>}
     * @ignore
     */
    wait() {
        return this.wire.sendAction('wait-for-hung-application', this.identity).then(() => undefined);
    }
    /**
     * Retrieves information about the application.
     * @return {Promise.<ApplicationInfo>}
     * @tutorial Application.getInfo
     */
    getInfo() {
        return this.wire.sendAction('get-info', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves all process information for entities (windows and views) associated with an application.
     * @return {Promise.<AppProcessInfo>}
     * @tutorial Application.getProcessInfo
     * @experimental
     */
    async getProcessInfo() {
        const { payload: { data } } = await this.wire.sendAction('application-get-process-info', this.identity);
        return data;
    }
    /**
     * Sets file auto download location.
     * @param { string } downloadLocation file auto download location
     * @return {Promise.<void>}
     * @tutorial Application.setFileDownloadLocation
     */
    async setFileDownloadLocation(downloadLocation) {
        await this.wire.sendAction('set-file-download-location', { downloadLocation, ...this.identity });
    }
}
exports.Application = Application;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/application/index.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/application/index.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/application/Factory.js");
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/application/Instance.js"), exports);
exports["default"] = Factory_1.default;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/base.js":
/*!**********************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/base.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Reply = exports.EmitterBase = exports.Base = void 0;
const promises_1 = __webpack_require__(/*! ../util/promises */ "../../node_modules/openfin-adapter/src/util/promises.js");
const fin_store_1 = __webpack_require__(/*! ../transport/fin_store */ "../../node_modules/openfin-adapter/src/transport/fin_store.js");
class Base {
    constructor(wire) {
        this.isNodeEnvironment = () => {
            return this.wire.environment.constructor.name === 'NodeEnvironment';
        };
        this.isOpenFinEnvironment = () => {
            return this.wire.environment.constructor.name === 'OpenFinEnvironment';
        };
        this.wire = wire;
    }
    get fin() {
        return fin_store_1.getFin(this.wire);
    }
    get topic() {
        return this._topic || this.constructor.name.replace('_', '').toLowerCase();
    }
    set topic(t) {
        this._topic = t;
    }
    get me() {
        return this.wire.me;
    }
}
exports.Base = Base;
class EmitterBase extends Base {
    constructor(wire, emitterAccessor) {
        super(wire);
        this.emitterAccessor = emitterAccessor;
        this.eventNames = () => (this.hasEmitter() ? this.getOrCreateEmitter().eventNames() : []);
        this.emit = (eventName, payload, ...args) => {
            return this.hasEmitter() ? this.getOrCreateEmitter().emit(eventName, payload, ...args) : false;
        };
        this.hasEmitter = () => this.wire.eventAggregator.has(this.emitterAccessor);
        this.getOrCreateEmitter = () => this.wire.eventAggregator.getOrCreate(this.emitterAccessor);
        this.listeners = (type) => this.hasEmitter() ? this.getOrCreateEmitter().listeners(type) : [];
        this.listenerCount = (type) => this.hasEmitter() ? this.getOrCreateEmitter().listenerCount(type) : 0;
        this.registerEventListener = async (eventType, options = {}, applySubscription, undoSubscription) => {
            const runtimeEvent = {
                ...this.identity,
                timestamp: options.timestamp || Date.now(),
                topic: this.topic,
                type: eventType
            };
            const emitter = this.getOrCreateEmitter();
            // We apply the subscription and then undo if the async call fails to avoid
            // indeterminacy in subscription application order, which can break things elsewhere
            applySubscription(emitter);
            try {
                await this.wire.sendAction('subscribe-to-desktop-event', runtimeEvent);
            }
            catch (e) {
                undoSubscription(emitter);
                this.deleteEmitterIfNothingRegistered(emitter);
                throw e;
            }
        };
        this.deregisterEventListener = async (eventType, options = {}) => {
            if (this.hasEmitter()) {
                const runtimeEvent = {
                    ...this.identity,
                    timestamp: options.timestamp || Date.now(),
                    topic: this.topic,
                    type: eventType
                };
                await this.wire.sendAction('unsubscribe-to-desktop-event', runtimeEvent).catch(() => null);
                const emitter = this.getOrCreateEmitter();
                return emitter;
            }
            // This will only be reached if unsubscribe from event that does not exist but do not want to error here
            return Promise.resolve();
        };
        this.on = async (eventType, listener, options) => {
            await this.registerEventListener(eventType, options, (emitter) => {
                emitter.on(eventType, listener);
            }, (emitter) => {
                emitter.removeListener(eventType, listener);
            });
            return this;
        };
        this.addListener = this.on;
        this.once = async (eventType, listener, options) => {
            const deregister = () => this.deregisterEventListener(eventType);
            await this.registerEventListener(eventType, options, (emitter) => {
                emitter.once(eventType, deregister);
                emitter.once(eventType, listener);
            }, (emitter) => {
                emitter.removeListener(eventType, deregister);
                emitter.removeListener(eventType, listener);
            });
            return this;
        };
        this.prependListener = async (eventType, listener, options) => {
            await this.registerEventListener(eventType, options, (emitter) => {
                emitter.prependListener(eventType, listener);
            }, (emitter) => {
                emitter.removeListener(eventType, listener);
            });
            return this;
        };
        this.prependOnceListener = async (eventType, listener, options) => {
            const deregister = () => this.deregisterEventListener(eventType);
            await this.registerEventListener(eventType, options, (emitter) => {
                emitter.prependOnceListener(eventType, listener);
                emitter.once(eventType, deregister);
            }, (emitter) => {
                emitter.removeListener(eventType, listener);
                emitter.removeListener(eventType, deregister);
            });
            return this;
        };
        this.removeListener = async (eventType, listener, options) => {
            const emitter = await this.deregisterEventListener(eventType, options);
            if (emitter) {
                emitter.removeListener(eventType, listener);
                this.deleteEmitterIfNothingRegistered(emitter);
            }
            return this;
        };
        this.deregisterAllListeners = async (eventType) => {
            const runtimeEvent = { ...this.identity, type: eventType, topic: this.topic };
            if (this.hasEmitter()) {
                const emitter = this.getOrCreateEmitter();
                const refCount = emitter.listenerCount(runtimeEvent.type);
                const unsubscribePromises = [];
                for (let i = 0; i < refCount; i++) {
                    unsubscribePromises.push(this.wire.sendAction('unsubscribe-to-desktop-event', runtimeEvent).catch(() => null));
                }
                await Promise.all(unsubscribePromises);
                return emitter;
            }
            return undefined;
        };
        this.removeAllListeners = async (eventType) => {
            const removeByEvent = async (event) => {
                const emitter = await this.deregisterAllListeners(event);
                if (emitter) {
                    emitter.removeAllListeners(event);
                    this.deleteEmitterIfNothingRegistered(emitter);
                }
            };
            if (eventType) {
                await removeByEvent(eventType);
            }
            else if (this.hasEmitter()) {
                const events = this.getOrCreateEmitter().eventNames();
                await promises_1.promiseMap(events, removeByEvent);
            }
            return this;
        };
        this.listeners = (event) => this.hasEmitter() ? this.getOrCreateEmitter().listeners(event) : [];
    }
    deleteEmitterIfNothingRegistered(emitter) {
        if (emitter.eventNames().length === 0) {
            this.wire.eventAggregator.delete(this.emitterAccessor);
        }
    }
}
exports.EmitterBase = EmitterBase;
class Reply {
}
exports.Reply = Reply;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/clipboard/index.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/clipboard/index.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
/**
 * WriteRequestType interface
 * @typedef { object } WriteRequestType
 * @property { string } data Data to be written
 * @property { string } [type] Clipboard Type
 */
/**
 * The Clipboard API allows reading and writing to the clipboard in multiple formats.
 * @namespace
 */
class Clipboard extends base_1.Base {
    /**
     * Writes data into the clipboard as plain text
     * @param { WriteRequestType } writeObj This object is described in the WriteRequestType typeof
     * @return {Promise.<void>}
     * @tutorial Clipboard.writeText
     */
    writeText(writeObj) {
        return this.wire.sendAction('clipboard-write-text', writeObj).then(() => undefined);
    }
    /**
     * Read the content of the clipboard as plain text
     * @param { string } type Clipboard Type
     * @return {Promise.<string>}
     * @tutorial Clipboard.readText
     */
    readText(type) {
        return this.wire.sendAction('clipboard-read-text', type).then(({ payload }) => payload.data);
    }
    /**
     * Writes data into the clipboard as Html
     * @param { WriteRequestType } writeObj This object is described in the WriteRequestType typedef
     * @return {Promise.<void>}
     * @tutorial Clipboard.writeHtml
     */
    writeHtml(writeObj) {
        return this.wire.sendAction('clipboard-write-html', writeObj).then(() => undefined);
    }
    /**
     * Read the content of the clipboard as Html
     * @param { string } type Clipboard Type
     * @return {Promise.<string>}
     * @tutorial Clipboard.readHtml
     */
    readHtml(type) {
        return this.wire.sendAction('clipboard-read-html', type).then(({ payload }) => payload.data);
    }
    /**
     * Writes data into the clipboard as Rtf
     * @param { WriteRequestType } writeObj This object is described in the WriteRequestType typedef
     * @return {Promise.<void>}
     * @tutorial Clipboard.writeRtf
     */
    writeRtf(writeObj) {
        return this.wire.sendAction('clipboard-write-rtf', writeObj).then(() => undefined);
    }
    /**
     * Read the content of the clipboard as Rtf
     * @param { string } type Clipboard Type
     * @return {Promise.<string>}
     * @tutorial Clipboard.readRtf
     */
    readRtf(type) {
        return this.wire.sendAction('clipboard-read-rtf', type).then(({ payload }) => payload.data);
    }
    /**
     * Writes data into the clipboard
     * @param { WriteAnyRequestType } writeObj This object is described in the WriteAnyRequestType typedef
     * @return {Promise.<void>}
     * @tutorial Clipboard.write
     */
    write(writeObj) {
        return this.wire.sendAction('clipboard-write', writeObj).then(() => undefined);
    }
    /**
     * Reads available formats for the clipboard type
     * @param { string } type Clipboard Type
     * @return {Promise.Array.<string>}
     * @tutorial Clipboard.getAvailableFormats
     */
    getAvailableFormats(type) {
        return this.wire.sendAction('clipboard-read-formats', type).then(({ payload }) => payload.data);
    }
}
exports["default"] = Clipboard;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/events/emitterMap.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/events/emitterMap.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EmitterMap = void 0;
const events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
class EmitterMap {
    constructor() {
        this.storage = new Map();
    }
    // eslint-disable-next-line class-methods-use-this
    hashKeys(keys) {
        const hashed = keys.map(normalizeString);
        return hashed.join('/');
    }
    getOrCreate(keys) {
        const hash = this.hashKeys(keys);
        if (!this.storage.has(hash)) {
            this.storage.set(hash, new events_1.EventEmitter());
        }
        // We set it above
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        return this.storage.get(hash);
    }
    has(keys) {
        return this.storage.has(this.hashKeys(keys));
    }
    delete(keys) {
        const hash = this.hashKeys(keys);
        return this.storage.delete(hash);
    }
}
exports.EmitterMap = EmitterMap;
function normalizeString(s) {
    const b = Buffer.from(s);
    return b.toString('base64');
}


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/events/eventAggregator.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/events/eventAggregator.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const emitterMap_1 = __webpack_require__(/*! ./emitterMap */ "../../node_modules/openfin-adapter/src/api/events/emitterMap.js");
function isEventMessage(message) {
    return message.action === 'process-desktop-event';
}
function mapKeyFromEvent(event) {
    const { topic } = event;
    if (topic === 'frame') {
        const { uuid, name } = event;
        return [topic, uuid, name];
    }
    if (topic === 'window') {
        const { uuid, name } = event;
        return [topic, uuid, name];
    }
    if (topic === 'application') {
        const { uuid } = event;
        return [topic, uuid];
    }
    if (topic === 'view') {
        const { uuid, name } = event;
        return [topic, uuid, name];
    }
    return [topic];
}
class EventAggregator extends emitterMap_1.EmitterMap {
    constructor() {
        super(...arguments);
        this.dispatchEvent = (message) => {
            if (isEventMessage(message)) {
                const { payload } = message;
                const accessor = mapKeyFromEvent(payload);
                if (this.has(accessor)) {
                    this.getOrCreate(accessor).emit(payload.type, payload);
                    return true;
                }
            }
            return false;
        };
    }
}
exports["default"] = EventAggregator;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/external-application/Factory.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/external-application/Factory.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/external-application/Instance.js");
/**
 * @lends ExternalApplication
 */
class ExternalApplicationModule extends base_1.Base {
    /**
     * Asynchronously returns an External Application object that represents an external application.
     * <br>It is possible to wrap a process that does not yet exist, (for example, to listen for startup-related events)
     * provided its uuid is already known.
     * @param {string} uuid The UUID of the external application to be wrapped
     * @return {Promise.<ExternalApplication>}
     * @tutorial ExternalApplication.wrap
     * @static
     */
    wrap(uuid) {
        this.wire.sendAction('external-application-wrap').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return Promise.resolve(new Instance_1.ExternalApplication(this.wire, { uuid }));
    }
    /**
     * Synchronously returns an External Application object that represents an external application.
     * <br>It is possible to wrap a process that does not yet exist, (for example, to listen for startup-related events)
     * provided its uuid is already known.
     * @param {string} uuid The UUID of the external application to be wrapped
     * @return {ExternalApplication}
     * @tutorial ExternalApplication.wrapSync
     * @static
     */
    wrapSync(uuid) {
        this.wire.sendAction('external-application-wrap-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return new Instance_1.ExternalApplication(this.wire, { uuid });
    }
}
exports["default"] = ExternalApplicationModule;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/external-application/Instance.js":
/*!***********************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/external-application/Instance.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExternalApplication = void 0;
/* eslint-disable import/prefer-default-export */
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
/**
 * @classdesc An ExternalApplication object representing native language adapter connections to the runtime. Allows
 * the developer to listen to <a href="tutorial-ExternalApplication.EventEmitter.html">application events.</a>
 * Discovery of connections is provided by <a href="tutorial-System.getAllExternalApplications.html">getAllExternalApplications.</a>
 *
 * Processes that can be wrapped as `ExternalApplication`s include the following:
 * - Processes which have connected to an OpenFin runtime via an adapter
 * - Processes started via `System.launchExternalApplication`
 * - Processes monitored via `System.monitorExternalProcess`
 * @class
 * @hideconstructor
 */
class ExternalApplication extends base_1.EmitterBase {
    constructor(wire, identity) {
        super(wire, ['external-application', identity.uuid]);
        this.identity = identity;
    }
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof ExternalApplication
     * @instance
     * @tutorial ExternalApplication.EventEmitter
     */
    /**
     * Retrieves information about the external application.
     * @return {Promise.<ExternalApplicationInfo>}
     * @tutorial ExternalApplication.getInfo
     */
    getInfo() {
        return this.wire.sendAction('get-external-application-info', this.identity).then(({ payload }) => payload.data);
    }
}
exports.ExternalApplication = ExternalApplication;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/external-application/index.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/external-application/index.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/external-application/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/external-application/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/fin.js":
/*!*********************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/fin.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
// Import from the file rather than the directory in case someone consuming types is using module resolution other than "node"
const index_1 = __webpack_require__(/*! ./system/index */ "../../node_modules/openfin-adapter/src/api/system/index.js");
const index_2 = __webpack_require__(/*! ./window/index */ "../../node_modules/openfin-adapter/src/api/window/index.js");
const index_3 = __webpack_require__(/*! ./application/index */ "../../node_modules/openfin-adapter/src/api/application/index.js");
const index_4 = __webpack_require__(/*! ./interappbus/index */ "../../node_modules/openfin-adapter/src/api/interappbus/index.js");
const index_5 = __webpack_require__(/*! ./clipboard/index */ "../../node_modules/openfin-adapter/src/api/clipboard/index.js");
const index_6 = __webpack_require__(/*! ./external-application/index */ "../../node_modules/openfin-adapter/src/api/external-application/index.js");
const index_7 = __webpack_require__(/*! ./frame/index */ "../../node_modules/openfin-adapter/src/api/frame/index.js");
const index_8 = __webpack_require__(/*! ./global-hotkey/index */ "../../node_modules/openfin-adapter/src/api/global-hotkey/index.js");
const index_9 = __webpack_require__(/*! ./view/index */ "../../node_modules/openfin-adapter/src/api/view/index.js");
const index_10 = __webpack_require__(/*! ./platform/index */ "../../node_modules/openfin-adapter/src/api/platform/index.js");
const me_1 = __webpack_require__(/*! ./me */ "../../node_modules/openfin-adapter/src/api/me.js");
const fin_store_1 = __webpack_require__(/*! ../transport/fin_store */ "../../node_modules/openfin-adapter/src/transport/fin_store.js");
const interop_1 = __webpack_require__(/*! ./interop */ "../../node_modules/openfin-adapter/src/api/interop/index.js");
const snapshot_source_1 = __webpack_require__(/*! ./snapshot-source */ "../../node_modules/openfin-adapter/src/api/snapshot-source/index.js");
class Fin extends events_1.EventEmitter {
    constructor(wire) {
        super();
        fin_store_1.registerFin(wire, this);
        this.wire = wire;
        this.System = new index_1.default(wire);
        this.Window = new index_2.default(wire);
        this.Application = new index_3.default(wire);
        this.InterApplicationBus = new index_4.default(wire);
        this.Clipboard = new index_5.default(wire);
        this.ExternalApplication = new index_6.default(wire);
        this.Frame = new index_7.default(wire);
        this.GlobalHotkey = new index_8.default(wire);
        this.Platform = new index_10.default(wire, this.InterApplicationBus.Channel);
        this.View = new index_9.default(wire);
        this.Interop = new interop_1.default(wire);
        this.SnapshotSource = new snapshot_source_1.default(wire);
        this.me = me_1.getMe(wire);
        // Handle disconnect events
        wire.on('disconnected', () => {
            this.emit('disconnected');
        });
    }
}
exports["default"] = Fin;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/frame/Factory.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/frame/Factory.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/openfin-adapter/src/util/validate.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/frame/Instance.js");
/**
 * @lends Frame
 */
class _FrameModule extends base_1.Base {
    /**
     * Asynchronously returns a reference to the specified frame. The frame does not have to exist
     * @param {Identity} identity - the identity of the frame you want to wrap
     * @return {Promise.<_Frame>}
     * @tutorial Frame.wrap
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('frame-wrap').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1._Frame(this.wire, identity);
    }
    /**
     * Synchronously returns a reference to the specified frame. The frame does not have to exist
     * @param {Identity} identity - the identity of the frame you want to wrap
     * @return {_Frame}
     * @tutorial Frame.wrapSync
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('frame-wrap-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1._Frame(this.wire, identity);
    }
    /**
     * Asynchronously returns a reference to the current frame
     * @return {Promise.<_Frame>}
     * @tutorial Frame.getCurrent
     * @static
     */
    getCurrent() {
        this.wire.sendAction('frame-get-current').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return Promise.resolve(new Instance_1._Frame(this.wire, this.wire.environment.getCurrentEntityIdentity()));
    }
    /**
     * Synchronously returns a reference to the current frame
     * @return {_Frame}
     * @tutorial Frame.getCurrentSync
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('frame-get-current-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return new Instance_1._Frame(this.wire, this.wire.environment.getCurrentEntityIdentity());
    }
}
exports["default"] = _FrameModule;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/frame/Instance.js":
/*!********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/frame/Instance.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Frame = void 0;
/* eslint-disable import/prefer-default-export */
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
/**
 * @classdesc
 * An iframe represents an embedded HTML page within a parent HTML page. Because this embedded page
 * has its own DOM and global JS context (which may or may not be linked to that of the parent depending
 * on if it is considered out of the root domain or not), it represents a unique endpoint as an OpenFin
 * connection. Iframes may be generated dynamically, or be present on initial page load and each non-CORS
 * iframe has the OpenFin API injected by default. It is possible to opt into cross-origin iframes having
 * the API by setting api.iframe.crossOriginInjection to true in a window's options. To block all iframes
 * from getting the API injected you can set api.frame.sameOriginInjection
 * to false <a href="Window.html#~options" target="_blank">(see Window~options)</a>.
 *
 * To be able to directly address this context for eventing and messaging purposes, it needs a
 * unique uuid name pairing. For OpenFin applications and windows this is provided via a configuration
 * object in the form of a manifest URL or options object, but there is no configuration object for iframes.
 * Just as a call to window.open outside of our Window API returns a new window with a random GUID assigned
 * for the name, each iframe that has the API injected will be assigned a GUID as its name, the UUID will be
 * the same as the parent window's.
 *
 * The fin.Frame namespace represents a way to interact with `iframes` and facilitates the discovery of current context
 * (iframe or main window) as well as the ability to listen for <a href="tutorial-Frame.EventEmitter.html">frame-specific events</a>.
 * @class
 * @alias Frame
 * @hideconstructor
 */
class _Frame extends base_1.EmitterBase {
    constructor(wire, identity) {
        super(wire, ['frame', identity.uuid, identity.name]);
        this.identity = identity;
    }
    /**
     * Adds the listener function to the end of the listeners array for the specified event type.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof Frame
     * @instance
     * @tutorial Frame.EventEmitter
     */
    /**
     * Returns a frame info object for the represented frame
     * @return {Promise.<FrameInfo>}
     * @tutorial Frame.getInfo
     */
    getInfo() {
        return this.wire.sendAction('get-frame-info', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Returns a frame info object representing the window that the referenced iframe is
     * currently embedded in
     * @return {Promise.<FrameInfo>}
     * @tutorial Frame.getParentWindow
     */
    getParentWindow() {
        return this.wire.sendAction('get-parent-window', this.identity).then(({ payload }) => payload.data);
    }
}
exports._Frame = _Frame;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/frame/index.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/frame/index.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/frame/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/frame/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/global-hotkey/index.js":
/*!*************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/global-hotkey/index.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.nonHotkeyEvents = void 0;
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
var apiActions;
(function (apiActions) {
    apiActions["REGISTER"] = "global-hotkey-register";
    apiActions["UNREGISTER"] = "global-hotkey-unregister";
    apiActions["UNREGISTER_ALL"] = "global-hotkey-unregister-all";
    apiActions["IS_REGISTERED"] = "global-hotkey-is-registered";
})(apiActions || (apiActions = {}));
var nonHotkeyEvents;
(function (nonHotkeyEvents) {
    nonHotkeyEvents["REGISTERED"] = "registered";
    nonHotkeyEvents["UNREGISTERED"] = "unregistered";
})(nonHotkeyEvents = exports.nonHotkeyEvents || (exports.nonHotkeyEvents = {}));
/**
 * The GlobalHotkey module can register/unregister a global hotkeys.
 * @namespace
 */
class GlobalHotkey extends base_1.EmitterBase {
    constructor(wire) {
        super(wire, ['global-hotkey']);
        this.topic = 'global-hotkey';
    }
    /**
     * Registers a global hotkey with the operating system.
     * @param { string } hotkey a hotkey string
     * @param { Function } listener called when the registered hotkey is pressed by the user.
     * @return {Promise.<void>}
     * @tutorial GlobalHotkey.register
     */
    async register(hotkey, listener) {
        await this.on(hotkey, listener);
        await this.wire.sendAction("global-hotkey-register" /* REGISTER */, { hotkey });
        return undefined;
    }
    /**
     * Unregisters a global hotkey with the operating system.
     * @param { string } hotkey a hotkey string
     * @return {Promise.<void>}
     * @tutorial GlobalHotkey.unregister
     */
    async unregister(hotkey) {
        await this.removeAllListeners(hotkey);
        await this.wire.sendAction("global-hotkey-unregister" /* UNREGISTER */, { hotkey });
        return undefined;
    }
    /**
     * Unregisters all global hotkeys for the current application.
     * @return {Promise.<void>}
     * @tutorial GlobalHotkey.unregisterAll
     */
    async unregisterAll() {
        await Promise.all(this.eventNames()
            .filter((name) => !(name === "registered" /* REGISTERED */ || name === "unregistered" /* UNREGISTERED */))
            .map((name) => this.removeAllListeners(name)));
        await this.wire.sendAction("global-hotkey-unregister-all" /* UNREGISTER_ALL */, {});
        return undefined;
    }
    /**
     * Checks if a given hotkey has been registered
     * @param { string } hotkey a hotkey string
     * @return {Promise.<boolean>}
     * @tutorial GlobalHotkey.isRegistered
     */
    async isRegistered(hotkey) {
        const { payload: { data } } = await this.wire.sendAction("global-hotkey-is-registered" /* IS_REGISTERED */, { hotkey });
        return data;
    }
}
exports["default"] = GlobalHotkey;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interappbus/channel/channel.js":
/*!*********************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interappbus/channel/channel.js ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChannelBase = exports.ProtectedItems = void 0;
const idOrResult = (func) => (...args) => {
    const res = func(...args);
    return res === undefined ? args[1] : res;
};
class ProtectedItems {
    constructor(providerIdentity, send) {
        this.providerIdentity = providerIdentity;
        this.sendRaw = send;
        this.send = async (to, action, payload) => {
            const raw = await send('send-channel-message', {
                ...to,
                providerIdentity: this.providerIdentity,
                action,
                payload
            }).catch((reason) => {
                throw new Error(reason.message);
            });
            return raw.payload.data.result;
        };
    }
}
exports.ProtectedItems = ProtectedItems;
class ChannelBase {
    constructor(providerIdentity, send, channelProtectedMap) {
        this.defaultSet = false;
        this.subscriptions = new Map();
        this.defaultAction = (action, payload, id) => {
            throw new Error(`No action registered at target for ${action}`);
        };
        // The items in ProtectedItems are only used by subclass, but not exposed to public.
        // Use this way to avoid a malicious site to access them directly.
        channelProtectedMap.set(this, new ProtectedItems(providerIdentity, send));
    }
    async processAction(action, payload, senderIdentity) {
        try {
            const mainAction = this.subscriptions.has(action)
                ? this.subscriptions.get(action)
                : (currentPayload, id) => this.defaultAction(action, currentPayload, id);
            const preActionProcessed = this.preAction ? await this.preAction(action, payload, senderIdentity) : payload;
            const actionProcessed = await mainAction(preActionProcessed, senderIdentity);
            return this.postAction ? await this.postAction(action, actionProcessed, senderIdentity) : actionProcessed;
        }
        catch (e) {
            if (this.errorMiddleware) {
                return this.errorMiddleware(action, e, senderIdentity);
            }
            throw e;
        }
    }
    beforeAction(func) {
        if (this.preAction) {
            throw new Error('Already registered beforeAction middleware');
        }
        this.preAction = idOrResult(func);
    }
    onError(func) {
        if (this.errorMiddleware) {
            throw new Error('Already registered error middleware');
        }
        this.errorMiddleware = func;
    }
    afterAction(func) {
        if (this.postAction) {
            throw new Error('Already registered afterAction middleware');
        }
        this.postAction = idOrResult(func);
    }
    remove(action) {
        this.subscriptions.delete(action);
    }
    setDefaultAction(func) {
        if (this.defaultSet) {
            throw new Error('default action can only be set once');
        }
        else {
            this.defaultAction = func;
            this.defaultSet = true;
        }
    }
    register(topic, listener) {
        if (this.subscriptions.has(topic)) {
            throw new Error(`Subscription already registered for action: ${topic}. Unsubscribe before adding new subscription`);
        }
        else {
            this.subscriptions.set(topic, listener);
            return true;
        }
    }
}
exports.ChannelBase = ChannelBase;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interappbus/channel/client.js":
/*!********************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interappbus/channel/client.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const channel_1 = __webpack_require__(/*! ./channel */ "../../node_modules/openfin-adapter/src/api/interappbus/channel/channel.js");
const clientProtectedMap = new WeakMap();
class ChannelClient extends channel_1.ChannelBase {
    constructor(routingInfo, send, clientMap) {
        super(routingInfo, send, clientProtectedMap);
        this.disconnectListener = () => undefined;
        this.clientMap = clientMap;
        this.endpointId = routingInfo.endpointId;
    }
    get providerIdentity() {
        const protectedObj = clientProtectedMap.get(this);
        return protectedObj.providerIdentity;
    }
    async dispatch(action, payload) {
        const protectedObj = clientProtectedMap.get(this);
        if (this.clientMap.get(this.endpointId)) {
            return protectedObj.send(protectedObj.providerIdentity, action, payload);
        }
        throw new Error('The client you are trying to dispatch from is disconnected from the target provider.');
    }
    onDisconnection(listener) {
        this.disconnectListener = (payload) => {
            try {
                listener(payload);
            }
            catch (err) {
                throw new Error(`Error while calling the onDisconnection callback: ${err.message}`);
            }
            finally {
                this.disconnectListener = () => undefined;
            }
        };
    }
    async disconnect() {
        const protectedObj = clientProtectedMap.get(this);
        const { channelName, uuid, name, channelId } = protectedObj.providerIdentity;
        await protectedObj.sendRaw('disconnect-from-channel', { channelName, uuid, name, endpointId: this.endpointId });
        this.removeChannel(channelId, this.endpointId);
    }
}
exports["default"] = ChannelClient;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interappbus/channel/index.js":
/*!*******************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interappbus/channel/index.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Channel = void 0;
const client_1 = __webpack_require__(/*! ./client */ "../../node_modules/openfin-adapter/src/api/interappbus/channel/client.js");
const provider_1 = __webpack_require__(/*! ./provider */ "../../node_modules/openfin-adapter/src/api/interappbus/channel/provider.js");
const base_1 = __webpack_require__(/*! ../../base */ "../../node_modules/openfin-adapter/src/api/base.js");
class Channel extends base_1.EmitterBase {
    constructor(wire) {
        super(wire, ['channel']);
        this.onmessage = (msg) => {
            if (msg.action === 'process-channel-message') {
                this.processChannelMessage(msg);
                return true;
            }
            if (msg.action === 'process-channel-connection') {
                this.processChannelConnection(msg);
                return true;
            }
            return false;
        };
        this.topic = 'channel';
        this.providerMap = new Map();
        this.clientMap = new Map();
        this.endpointIdMap = new Map();
        wire.registerMessageHandler(this.onmessage.bind(this));
    }
    async getAllChannels() {
        return this.wire.sendAction('get-all-channels').then(({ payload }) => payload.data);
    }
    async onChannelConnect(listener) {
        await this.on('connected', listener);
    }
    async onChannelDisconnect(listener) {
        await this.on('disconnected', listener);
    }
    async connect(channelName, options) {
        if (!channelName || typeof channelName !== 'string') {
            throw new Error('Please provide a channelName string to connect to a channel.');
        }
        const opts = options || {};
        let resolver;
        let listener;
        const waitResponse = new Promise((resolve) => {
            resolver = resolve;
            listener = (payload) => {
                if (channelName === payload.channelName) {
                    this.removeListener('connected', listener);
                    resolve(this.connect(channelName, opts));
                }
            };
            this.on('connected', listener);
        });
        try {
            const { payload: { data: routingInfo } } = await this.wire.sendAction('connect-to-channel', { channelName, ...opts });
            // Required for backwards compatibility
            if (!routingInfo.endpointId) {
                routingInfo.endpointId = this.wire.environment.getNextMessageId();
                // For New Clients connecting to Old Providers. To prevent multi-dispatching and publishing, we delete previously-connected
                // clients that are in the same context as the newly-connected client.
                this.checkForPreviousClientConnection(routingInfo.channelId);
            }
            const { channelId, endpointId } = routingInfo;
            // If there isn't a matching channel, the above sendAction call will error out and go to catch, skipping the logic below
            if (resolver) {
                resolver();
            }
            this.removeListener('connected', listener);
            const channel = new client_1.default(routingInfo, this.wire.sendAction.bind(this.wire), this.clientMap);
            this.addChannelToClientMaps(channel, channelId, endpointId);
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore use of protected property
            channel.removeChannel = this.removeChannelFromClientMaps.bind(this);
            this.on('disconnected', (eventPayload) => {
                if (eventPayload.channelName === channelName) {
                    this.removeChannelFromClientMaps(channelId, endpointId);
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore use of private property
                    channel.disconnectListener(eventPayload);
                }
            });
            return channel;
        }
        catch (e) {
            const shouldWait = { wait: true, ...opts }.wait;
            const internalNackMessage = 'internal-nack';
            if (shouldWait && e.message && e.message.includes(internalNackMessage)) {
                console.warn(`Channel not found for channelName: ${channelName}, waiting for channel connection.`);
                return waitResponse;
            }
            if (e.message === internalNackMessage) {
                throw new Error(`No channel found for channelName: ${channelName}`);
            }
            else {
                throw new Error(e);
            }
        }
    }
    async create(channelName) {
        if (!channelName) {
            throw new Error('Please provide a channelName to create a channel');
        }
        const { payload: { data: providerIdentity } } = await this.wire.sendAction('create-channel', { channelName });
        const channel = new provider_1.ChannelProvider(providerIdentity, this.wire.sendAction.bind(this.wire));
        const key = providerIdentity.channelId;
        this.providerMap.set(key, channel);
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore use of protected property
        channel.removeChannel = this.removeChannelFromProviderMap.bind(this);
        this.on('client-disconnected', (eventPayload) => {
            if (eventPayload.channelName === channelName) {
                let remainingConnections = channel.connections.filter((identity) => {
                    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                    // @ts-ignore use of non-existed property
                    return identity.endpointId === undefined || identity.endpointId !== eventPayload.endpointId;
                });
                if (remainingConnections.length === channel.connections.length) {
                    remainingConnections = channel.connections.filter((identity) => {
                        return identity.uuid !== eventPayload.uuid || identity.name !== eventPayload.name;
                    });
                }
                channel.connections = remainingConnections;
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore use of private property
                channel.disconnectListener(eventPayload);
            }
        });
        return channel;
    }
    addChannelToClientMaps(channel, channelId, endpointId) {
        this.clientMap.set(endpointId, channel);
        this.endpointIdMap.set(`${channelId}/${this.wire.me.uuid}/${this.wire.me.name}`, endpointId);
    }
    removeChannelFromClientMaps(channelId, endpointId) {
        this.clientMap.delete(endpointId);
        this.endpointIdMap.delete(`${channelId}/${this.wire.me.uuid}/${this.wire.me.name}`);
    }
    removeChannelFromProviderMap(channelId) {
        this.providerMap.delete(channelId);
    }
    checkForPreviousClientConnection(channelId) {
        const endpointIdFromPreviousConnection = this.endpointIdMap.get(`${channelId}/${this.wire.me.uuid}/${this.wire.me.name}`);
        if (endpointIdFromPreviousConnection) {
            this.removeChannelFromClientMaps(channelId, endpointIdFromPreviousConnection);
            console.warn('You have created a second connection to an older provider. First connection has been removed from the clientMap');
            console.warn('If the provider calls publish(), you may receive multiple messages.');
        }
    }
    async processChannelMessage(msg) {
        const { senderIdentity, providerIdentity, action, ackToSender, payload, intendedTargetIdentity } = msg.payload;
        let key;
        let bus;
        // If the sender is the client
        if (intendedTargetIdentity.channelId) {
            key = intendedTargetIdentity.channelId;
            bus = this.providerMap.get(key);
        }
        else if (intendedTargetIdentity.endpointId) {
            // If the sender is the provider
            key = intendedTargetIdentity.endpointId;
            bus = this.clientMap.get(key);
        }
        else {
            key = this.endpointIdMap.get(`${providerIdentity.channelId}/${this.wire.me.uuid}/${this.wire.me.name}`);
            bus = this.clientMap.get(key);
        }
        if (!bus) {
            ackToSender.payload.success = false;
            ackToSender.payload.reason = `Client connection with identity uuid: ${this.wire.me.uuid} / name: ${this.wire.me.name} no longer connected.`;
            return this.wire.sendRaw(ackToSender);
        }
        try {
            const res = await bus.processAction(action, payload, senderIdentity);
            ackToSender.payload.payload = ackToSender.payload.payload || {};
            ackToSender.payload.payload.result = res;
            return this.wire.sendRaw(ackToSender);
        }
        catch (e) {
            ackToSender.payload.success = false;
            ackToSender.payload.reason = e.message;
            return this.wire.sendRaw(ackToSender);
        }
    }
    async processChannelConnection(msg) {
        const { clientIdentity, providerIdentity, ackToSender, payload } = msg.payload;
        const key = providerIdentity.channelId;
        const bus = this.providerMap.get(key);
        if (!bus) {
            ackToSender.payload.success = false;
            ackToSender.payload.reason = `Channel "${providerIdentity.channelName}" has been destroyed.`;
            return this.wire.sendRaw(ackToSender);
        }
        try {
            if (!(bus instanceof provider_1.ChannelProvider)) {
                throw Error('Cannot connect to a channel client');
            }
            const res = await bus.processConnection(clientIdentity, payload);
            ackToSender.payload.payload = ackToSender.payload.payload || {};
            ackToSender.payload.payload.result = res;
            return this.wire.sendRaw(ackToSender);
        }
        catch (e) {
            ackToSender.payload.success = false;
            ackToSender.payload.reason = e.message;
            return this.wire.sendRaw(ackToSender);
        }
    }
}
exports.Channel = Channel;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interappbus/channel/provider.js":
/*!**********************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interappbus/channel/provider.js ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChannelProvider = void 0;
const channel_1 = __webpack_require__(/*! ./channel */ "../../node_modules/openfin-adapter/src/api/interappbus/channel/channel.js");
const runtimeVersioning_1 = __webpack_require__(/*! ../../../util/runtimeVersioning */ "../../node_modules/openfin-adapter/src/util/runtimeVersioning.js");
const providerProtectedMap = new WeakMap();
class ChannelProvider extends channel_1.ChannelBase {
    constructor(providerIdentity, send) {
        super(providerIdentity, send, providerProtectedMap);
        this.connectListener = () => undefined;
        this.disconnectListener = () => undefined;
        this.connections = [];
    }
    dispatch(to, action, payload) {
        if (!ChannelProvider.clientIdentityIncludesEndpointId(to)) {
            this.checkForMultipleClients(to, action);
        }
        if (this.isClientConnected(to)) {
            return providerProtectedMap.get(this).send(to, action, payload);
        }
        return Promise.reject(new Error(`The client you are trying to dispatch to is disconnected from this provider.
                {uuid: ${to.uuid}, name: ${to.name}}`));
    }
    async processAction(action, payload, senderIdentity) {
        if (ChannelProvider.clientIsMultiRuntime(senderIdentity) &&
            !runtimeVersioning_1.runtimeUuidMeetsMinimumRuntimeVersion(senderIdentity.runtimeUuid, '18.87.56.0')) {
            this.handleMultiRuntimeLegacyClient(senderIdentity);
        }
        else {
            this.checkForClientConnection(senderIdentity);
        }
        return super.processAction(action, payload, senderIdentity);
    }
    async processConnection(senderId, payload) {
        this.connections.push(senderId);
        return this.connectListener(senderId, payload);
    }
    publish(action, payload) {
        return this.connections.map((to) => providerProtectedMap.get(this).send(to, action, payload));
    }
    onConnection(listener) {
        this.connectListener = listener;
    }
    onDisconnection(listener) {
        this.disconnectListener = listener;
    }
    async destroy() {
        const protectedObj = providerProtectedMap.get(this);
        const { channelName, channelId } = protectedObj.providerIdentity;
        this.connections = [];
        await protectedObj.sendRaw('destroy-channel', { channelName });
        this.removeChannel(channelId);
    }
    checkForClientConnection(clientIdentity) {
        if (!this.isClientConnected(clientIdentity)) {
            throw new Error(`This action was sent from a client that is not connected to the provider.
                    Client Identity: {uuid: ${clientIdentity.uuid}, name: ${clientIdentity.name}, endpointId: ${clientIdentity.endpointId}}`);
        }
    }
    isClientConnected(clientIdentity) {
        if (ChannelProvider.clientIdentityIncludesEndpointId(clientIdentity)) {
            return this.connections.some((identity) => {
                return (
                // Might be redundant to check for uuid and name here after we get an endpointId match, but just in case
                identity.endpointId === clientIdentity.endpointId &&
                    identity.uuid === clientIdentity.uuid &&
                    identity.name === clientIdentity.name);
            });
        }
        return this.isLegacyClientConnected(clientIdentity);
    }
    isLegacyClientConnected(clientIdentity) {
        return this.connections.some((identity) => {
            return identity.uuid === clientIdentity.uuid && identity.name === clientIdentity.name;
        });
    }
    handleMultiRuntimeLegacyClient(senderIdentity) {
        if (!this.isLegacyClientConnected(senderIdentity)) {
            throw new Error(`This action was sent from a client that is not connected to the provider. Client Identity:
                    {uuid: ${senderIdentity.uuid}, name: ${senderIdentity.name}, endpointId: ${senderIdentity.endpointId}}`);
        }
    }
    checkForMultipleClients(clientIdentity, action) {
        let count = 0;
        this.connections.forEach((c) => {
            if (c.name === clientIdentity.name && c.uuid === clientIdentity.uuid) {
                count += 1;
            }
        });
        if (count >= 2) {
            const protectedObj = providerProtectedMap.get(this);
            const { uuid, name } = clientIdentity;
            const providerUuid = protectedObj === null || protectedObj === void 0 ? void 0 : protectedObj.providerIdentity.uuid;
            const providerName = protectedObj === null || protectedObj === void 0 ? void 0 : protectedObj.providerIdentity.name;
            // eslint-disable-next-line no-console
            console.warn(`WARNING: Dispatch call may have unintended results. The "to" argument of your dispatch call is missing the
                "endpointId" parameter. The identity you are dispatching to ({uuid: ${uuid}, name: ${name}})
                has multiple channelClients for this channel. Your dispatched action: (${action}) from the provider:
                ({uuid: ${providerUuid}, name: ${providerName}}) will only be processed by the most recently-created client.`);
        }
    }
    // eslint-disable-next-line class-methods-use-this
    static clientIdentityIncludesEndpointId(subscriptionIdentity) {
        return subscriptionIdentity.endpointId !== undefined;
    }
    // eslint-disable-next-line class-methods-use-this
    static clientIsMultiRuntime(subscriptionIdentity) {
        return subscriptionIdentity.runtimeUuid !== undefined;
    }
}
exports.ChannelProvider = ChannelProvider;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interappbus/index.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interappbus/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InterAppPayload = void 0;
const events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const ref_counter_1 = __webpack_require__(/*! ../../util/ref-counter */ "../../node_modules/openfin-adapter/src/util/ref-counter.js");
const index_1 = __webpack_require__(/*! ./channel/index */ "../../node_modules/openfin-adapter/src/api/interappbus/channel/index.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/openfin-adapter/src/util/validate.js");
/**
 * A messaging bus that allows for pub/sub messaging between different applications.
 * @namespace
 */
class InterApplicationBus extends base_1.Base {
    constructor(wire) {
        super(wire);
        this.events = {
            subscriberAdded: 'subscriber-added',
            subscriberRemoved: 'subscriber-removed'
        };
        this.refCounter = new ref_counter_1.default();
        this.Channel = new index_1.Channel(wire);
        this.emitter = new events_1.EventEmitter();
        wire.registerMessageHandler(this.onmessage.bind(this));
        this.on = this.emitter.on.bind(this.emitter);
        this.removeAllListeners = this.emitter.removeAllListeners.bind(this.emitter);
    }
    /**
     * Publishes a message to all applications running on OpenFin Runtime that
     * are subscribed to the specified topic.
     * @param { string } topic The topic on which the message is sent
     * @param { any } message The message to be published. Can be either a primitive
     * data type (string, number, or boolean) or composite data type (object, array)
     * that is composed of other primitive or composite data types
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.publish
     */
    publish(topic, message) {
        return this.wire
            .sendAction('publish-message', {
            topic,
            message,
            sourceWindowName: this.me.name
        })
            .then(() => undefined);
    }
    /**
     * Sends a message to a specific application on a specific topic.
     * @param { Identity } destination The identity of the application to which the message is sent
     * @param { string } topic The topic on which the message is sent
     * @param { any } message The message to be sent. Can be either a primitive data
     * type (string, number, or boolean) or composite data type (object, array) that
     * is composed of other primitive or composite data types
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.send
     */
    async send(destination, topic, message) {
        const errorMsg = validate_1.validateIdentity(destination);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        await this.wire.sendAction('send-message', {
            destinationUuid: destination.uuid,
            destinationWindowName: destination.name,
            topic,
            message,
            sourceWindowName: this.me.name
        });
    }
    /**
     * Subscribes to messages from the specified application on the specified topic.
     * @param { Identity } source This object is described in the Identity in the typedef
     * @param { string } topic The topic on which the message is sent
     * @param { function } listener A function that is called when a message has
     * been received. It is passed the message, uuid and name of the sending application.
     * The message can be either a primitive data type (string, number, or boolean) or
     * composite data type (object, array) that is composed of other primitive or composite
     * data types
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.subscribe
     */
    subscribe(source, topic, listener) {
        const subKey = this.createSubscriptionKey(source.uuid, source.name || '*', topic);
        const sendSubscription = () => {
            return this.wire.sendAction('subscribe', {
                sourceUuid: source.uuid,
                sourceWindowName: source.name || '*',
                topic,
                destinationWindowName: this.me.name
            });
        };
        const alreadySubscribed = () => {
            return Promise.resolve();
        };
        this.emitter.on(subKey, listener);
        return this.refCounter.actOnFirst(subKey, sendSubscription, alreadySubscribed);
    }
    /**
     * Unsubscribes to messages from the specified application on the specified topic.
     * @param { Identity } source This object is described in the Identity in the typedef
     * @param { string } topic The topic on which the message is sent
     * @param { function } listener A callback previously registered with subscribe()
     * @return {Promise.<void>}
     * @tutorial InterApplicationBus.unsubscribe
     */
    unsubscribe(source, topic, listener) {
        const subKey = this.createSubscriptionKey(source.uuid, source.name || '*', topic);
        const sendUnsubscription = () => {
            return this.wire.sendAction('unsubscribe', {
                sourceUuid: source.uuid,
                sourceWindowName: source.name || '*',
                topic,
                destinationWindowName: this.me.name
            });
        };
        const dontSendUnsubscription = () => {
            return new Promise((r) => r).then(() => undefined);
        };
        this.emitter.removeListener(subKey, listener);
        return this.refCounter.actOnLast(subKey, sendUnsubscription, dontSendUnsubscription);
    }
    processMessage(message) {
        const { payload: { message: payloadMessage, sourceWindowName, sourceUuid, topic } } = message;
        const keys = [
            this.createSubscriptionKey(sourceUuid, sourceWindowName, topic),
            this.createSubscriptionKey(sourceUuid, '*', topic),
            this.createSubscriptionKey('*', '*', topic)
        ];
        const idOfSender = { uuid: sourceUuid, name: sourceWindowName };
        keys.forEach((key) => {
            this.emitter.emit(key, payloadMessage, idOfSender);
        });
    }
    emitSubscriverEvent(type, message) {
        const { payload: { targetName: name, uuid, topic } } = message;
        const payload = { name, uuid, topic };
        this.emitter.emit(type, payload);
    }
    // eslint-disable-next-line class-methods-use-this
    createSubscriptionKey(uuid, name, topic) {
        const n = name || '*';
        if (!(uuid && n && topic)) {
            throw new Error('Missing uuid, name, or topic string');
        }
        return createKey(uuid, n, topic);
    }
    onmessage(message) {
        const { action } = message;
        switch (action) {
            case 'process-message':
                this.processMessage(message);
                break;
            case this.events.subscriberAdded:
                this.emitSubscriverEvent(this.events.subscriberAdded, message);
                break;
            case this.events.subscriberRemoved:
                this.emitSubscriverEvent(this.events.subscriberRemoved, message);
                break;
            default:
                break;
        }
        return true;
    }
}
exports["default"] = InterApplicationBus;
class InterAppPayload {
}
exports.InterAppPayload = InterAppPayload;
function createKey(...toHash) {
    return toHash
        .map((item) => {
        return Buffer.from(`${item}`).toString('base64');
    })
        .join('/');
}


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interop/Factory.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interop/Factory.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const InteropBroker_1 = __webpack_require__(/*! ./InteropBroker */ "../../node_modules/openfin-adapter/src/api/interop/InteropBroker.js");
const InteropClient_1 = __webpack_require__(/*! ./InteropClient */ "../../node_modules/openfin-adapter/src/api/interop/InteropClient.js");
const defaultOverride = (Class, ...args) => new Class(...args);
/**
 * @typedef { object } InteropConfig
 * @summary Information relevant to the Interop Broker.
 * @property {string} [currentContextGroup] Context Group for the client. (green, yellow, red, etc.)
 * @property {string} [providerId] When provided, automatically connects the client to the specified provider uuid
 */
/**
 * Manages creation of Interop Brokers and Interop Clients. These APIs are called under-the-hood in Platforms.
 * @namespace
 * @alias Interop
 */
class InteropModule extends base_1.Base {
    /**
     * Initializes an Interop Broker. This is called under-the-hood for Platforms.
     * @param { string } name - Name of the Interop Broker.
     * @param { OverrideCallback<InteropBroker> } [override] - A callback function that can be used to extend or replace default Interop Broker behavior.
     * @return {Promise.<InteropBroker>}
     * @tutorial Interop.init
     * @experimental
     * @static
     */
    async init(name, override = defaultOverride) {
        this.wire.sendAction('interop-init').catch((e) => {
            // don't expose, analytics-only call
        });
        const provider = await this.fin.InterApplicationBus.Channel.create(`interop-broker-${name}`);
        // Allows for manifest-level configuration, without having to override. (e.g. specifying custom context groups)
        const options = await this.fin.Application.getCurrentSync().getInfo();
        return override(InteropBroker_1.InteropBroker, this.wire, provider, options.initialOptions.interopBrokerConfiguration || {});
    }
    /**
     * Connects a client to an Interop broker. This is called under-the-hood for Views in a Platform.
     * @param { string } name - The name of the Interop Broker to connect to. For Platforms, this will default to the uuid of the Platform.
     * @param { InteropConfig } [interopConfig] - Information relevant to the Interop Broker. Typically a declaration of
     * what context(s) the entity wants to subscribe to, and the current Context Group of the entity.
     * @return {InteropClient}
     * @tutorial Interop.connectSync
     * @experimental
     * @static
     */
    connectSync(name, interopConfig) {
        this.wire.sendAction('interop-connect-sync').catch((e) => {
            // don't expose, analytics-only call
        });
        return new InteropClient_1.InteropClient(this.wire, name, interopConfig);
    }
}
exports["default"] = InteropModule;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interop/InteropBroker.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interop/InteropBroker.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteropBroker = void 0;
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const SessionContextGroupBroker_1 = __webpack_require__(/*! ./SessionContextGroupBroker */ "../../node_modules/openfin-adapter/src/api/interop/SessionContextGroupBroker.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/openfin-adapter/src/api/interop/utils.js");
let contextGroups = [
    {
        id: 'green',
        displayMetadata: {
            color: '#00CC88',
            name: 'green'
        }
    },
    {
        id: 'purple',
        displayMetadata: {
            color: '#8C61FF',
            name: 'purple'
        }
    },
    {
        id: 'orange',
        displayMetadata: {
            color: '#FF8C4C',
            name: 'orange'
        }
    },
    {
        id: 'red',
        displayMetadata: {
            color: '#FF5E60',
            name: 'red'
        }
    },
    {
        id: 'pink',
        displayMetadata: {
            color: '#FF8FB8',
            name: 'pink'
        }
    },
    {
        id: 'yellow',
        displayMetadata: {
            color: '#E9FF8F',
            name: 'yellow'
        }
    }
];
/**
 * {@link https://developers.openfin.co/of-docs/docs/enable-color-linking **THE INTEROP API IS EXPERIMENTAL. IF YOU WOULD LIKE TO USE IT, PLEASE USE OUR DEFAULT IMPLEMENTATION IN BROWSER**}
 *
 * The Interop Broker is responsible for keeping track of the Interop state of the Platform, and for directing messages to the proper locations.
 *
 * ---
 *
 * There are 2 ways to inject custom functionality into the Interop Broker:
 *
 * **1. Configuration**
 *
 * At the moment, you can configure the default context groups for the Interop Broker without having to override it. To do so, include the `interopBrokerConfiguration` `contextGroups` option in your `platform` options in your manifest. This is the preferred method.
 * ```js
 * {
 *      "runtime": {
 *          "arguments": "--v=1 --inspect",
 *          "version": "alpha-v19"
 *      },
 *      "platform": {
 *          "uuid": "platform_customization_local",
 *          "applicationIcon": "https://openfin.github.io/golden-prototype/favicon.ico",
 *          "autoShow": false,
 *          "providerUrl": "http://localhost:5555/provider.html",
 *          "interopBrokerConfiguration": {
 *              "contextGroups": [
 *                  {
 *                      "id": "green",
 *                      "displayMetadata": {
 *                          "color": "#00CC88",
 *                          "name": "green"
 *                      }
 *                  },
 *                  {
 *                      "id": "purple",
 *                      "displayMetadata": {
 *                          "color": "#8C61FF",
 *                          "name": "purple"
 *                      }
 *                  },
 *              ]
 *          }
 *      }
 * }
 * ```
 *
 * ---
 * **2. Overriding**
 *
 * Similarly to how [Platform Overriding]{@link https://developers.openfin.co/docs/platform-customization#section-customizing-platform-behavior} works, you can override functions in the Interop Broker in `fin.Platform.init`. An example of that is shown below. Overriding `isConnectionAuthorized` and `isActionAuthorized` will allow you to control allowed connections and allowed actions.
 *
 * However, if there is custom functionality you wish to include in the Interop Broker, please let us know. We would like to provide better configuration options so that you don't have to continually maintain your own override code.
 *
 * ```js
 * fin.Platform.init({
 *     overrideCallback: async (Provider) => {
 *         class Override extends Provider {
 *             async getSnapshot() {
 *                 console.log('before getSnapshot')
 *                 const snapshot = await super.getSnapshot();
 *                 console.log('after getSnapshot')
 *                 return snapshot;
 *             }
 *
 *             async applySnapshot({ snapshot, options }) {
 *                 console.log('before applySnapshot')
 *                 const originalPromise = super.applySnapshot({ snapshot, options });
 *                 console.log('after applySnapshot')
 *
 *                 return originalPromise;
 *             }
 *         };
 *         return new Override();
 *     },
 *     interopOverride: async (InteropBroker, provider, options, ...args) => {
 *         class Override extends InteropBroker {
 *             async joinContextGroup(channelName = 'default', target) {
 *                 console.log('before super joinContextGroup')
 *                 super.joinContextGroup(channelName, target);
 *                 console.log('after super joinContextGroup')
 *             }
 *         }
 *
 *         options.systemChannels = [
 *             {
 *                 id: 'green',
 *                 displayMetadata: {
 *                     color: '#00CC88',
 *                     name: 'green'
 *                 }
 *             },
 *             {
 *                 id: 'purple',
 *                 displayMetadata: {
 *                     color: '#8C61FF',
 *                     name: 'purple'
 *                 }
 *             },
 *             {
 *                 id: 'orange',
 *                 displayMetadata: {
 *                     color: '#FF8C4C',
 *                     name: 'orange'
 *                 }
 *             },
 *             {
 *                 id: 'red',
 *                 displayMetadata: {
 *                     color: '#FF5E60',
 *                     name: 'red'
 *                 }
 *             }
 *         ];
 *       return new Override(provider, options, ...args);
 *   }
 * });
 * ```
 *
 * ---
 *
 * @hideconstructor
 * @class
 */
class InteropBroker extends base_1.Base {
    constructor(wire, channel, options) {
        super(wire);
        this.channel = channel;
        this.interopClients = new Map();
        this.contextGroupsById = new Map();
        if (options.contextGroups) {
            contextGroups = options.contextGroups;
        }
        this.intentClientMap = new Map();
        this.lastContextMap = new Map();
        this.sessionContextGroupMap = new Map();
        this.setContextGroupMap();
        this.wireChannel(channel);
    }
    /*
    Client API
    */
    /**
     * SetContextOptions interface
     * @typedef { object } SetContextOptions
     * @property { Context } {context} - New context to set.
     */
    /**
     * GetContextOptions interface
     * @typedef { object } GetContextOptions
     * @property { string } [contextType] - Context Type
     */
    /**
     * JoinContextGroupOptions interface
     * @typedef { object } JoinContextGroupOptions
     * @property { string } contextGroupId - Id of the context group.
     * @property { Identity | ClientIdentity } [target] - Identity of the entity you wish to join to a context group.
     */
    /**
     * AddClientToContextGroupOptions interface
     * @typedef { object } AddClientToContextGroupOptions
     * @property { string } contextGroupId - Name of the context group.
     */
    /**
     * RemoveFromContextGroupOptions interface
     * @typedef { object } RemoveFromContextGroupOptions
     * @property { Identity | ClientIdentity } target - Identity of the entity you wish to join to a context group.
     */
    /**
     * GetInfoForContextGroupOptions interface
     * @typedef { object } GetInfoForContextGroupOptions
     * @property { string } contextGroupId - Name of the context group to get info for.
     */
    /**
     * GetAllClientsInContextGroupOptions interface
     * @typedef { object } GetAllClientsInContextGroupOptions
     * @property { string } contextGroupId - Name of the context group to get info for.
     */
    /**
     * InfoForIntentOptions interface
     * @typedef { object } InfoForIntentOptions
     * @property { string } name Name of the intent to get info for.
     * @property { Context } [context] Optional context.
     */
    /**
     * Sets a context for the context group of the incoming current entity.
     * @param { SetContextOptions } setContextOptions - New context to set.
     * @param { ClientIdentity } clientIdentity - Identity of the client sender.
     * @return { void }
     * @experimental
     */
    setContext({ context }, clientIdentity) {
        this.wire.sendAction('interop-broker-set-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const clientState = this.getClientState(clientIdentity);
        if (clientState && clientState.contextGroupId) {
            const { contextGroupId } = clientState;
            if (!this.contextGroupsById.has(contextGroupId)) {
                // Theoretically not possible.
                throw new Error(`Client has a context group that isn't in the context group mapping: ${contextGroupId}.`);
            }
            const contextIntegrityCheckResult = InteropBroker.checkContextIntegrity(context);
            if (contextIntegrityCheckResult.isValid === false) {
                throw new Error(`Failed to set Context - bad Context. Reason: ${contextIntegrityCheckResult.reason}. Context: ${JSON.stringify(context)}`);
            }
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const contextGroupState = this.contextGroupsById.get(contextGroupId);
            const broadcastedContextType = context.type;
            contextGroupState.set(broadcastedContextType, context);
            this.lastContextMap.set(contextGroupId, broadcastedContextType);
            const clientsInSameContextGroup = Array.from(this.interopClients.values()).filter((connectedClient) => connectedClient.contextGroupId === contextGroupId);
            clientsInSameContextGroup.forEach((client) => {
                for (const [, handlerInfo] of client.contextHandlers) {
                    if (InteropBroker.isContextTypeCompatible(broadcastedContextType, handlerInfo.contextType)) {
                        this.invokeContextHandler(client.clientIdentity, handlerInfo.handlerId, context);
                    }
                }
            });
        }
        else if (clientState) {
            // Client has not joined any context group behavior.
            throw new Error('You must join a context group before you can set context.');
        }
        else {
            // This shouldn't get hit.
            throw new Error(`Client with Identity: ${clientIdentity.uuid} ${clientIdentity.name} not in Client State Map`);
        }
    }
    /**
     * Get current context for a client subscribed to a Context Group.
     * @param { GetContextOptions } getContextOptions - Options for getting context
     * @param { ClientIdentity } clientIdentity - Identity of the client sender.
     * @return { Context }
     */
    getCurrentContext(getCurrentContextOptions, clientIdentity) {
        var _a;
        this.wire.sendAction('interop-broker-get-current-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const clientState = this.getClientState(clientIdentity);
        if (!(clientState === null || clientState === void 0 ? void 0 : clientState.contextGroupId)) {
            throw new Error('You must be a member of a context group to call getCurrentContext');
        }
        const { contextGroupId } = clientState;
        const contextGroupState = this.contextGroupsById.get(contextGroupId);
        const lastContextType = this.lastContextMap.get(contextGroupId);
        const contextType = (_a = getCurrentContextOptions === null || getCurrentContextOptions === void 0 ? void 0 : getCurrentContextOptions.contextType) !== null && _a !== void 0 ? _a : lastContextType;
        return contextGroupState && contextType ? contextGroupState.get(contextType) : undefined;
    }
    /*
    Platform Window APIs
    */
    // joinContextGroup and addClientToContextGroup are separate functions here, for easier overrides and separation of concerns.
    // joinContextGroup checks all connections for matching identities, in case we have multiple connection from an entity.
    /**
     * Join all connections at the given identity (or just one if endpointId provided) to context group `contextGroupId`.
     * If no target is specified, it adds the sender to the context group.
     * joinContextGroup is responsible for checking connections at the incoming identity. It calls {@link InteropBroker#addClientToContextGroup InteropBroker.addClientToContextGroup} to actually group the client.
     * Used by Platform Windows.
     * @return { Promise<void> }
     * @param { JoinContextGroupOptions } joinContextGroupOptions - Id of the Context Group and identity of the entity to join to the group.
     * @param { ClientIdentity } senderIdentity - Identity of the client sender.
     * @experimental
     */
    async joinContextGroup({ contextGroupId, target }, senderIdentity) {
        this.wire.sendAction('interop-broker-join-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        if (target) {
            // If an endpointId is provided, use that. This will likely be used by external adapters.
            if (InteropBroker.hasEndpointId(target)) {
                await this.addClientToContextGroup({ contextGroupId }, target);
            }
            // Sanity check here in case a single app has multiple connections
            const allConnections = this.channel.connections.filter((x) => x.uuid === target.uuid && x.name === target.name);
            if (!allConnections.length) {
                throw new Error(`Given Identity ${target.uuid} ${target.name} is not connected to the Interop Broker.`);
            }
            if (allConnections.length > 1) {
                // Should figure out how we want to handle this situation. In the meantime, just change context group for all connections.
                console.warn(`More than one connection found for identity ${target.uuid} ${target.name}`);
            }
            const promises = [];
            for (const connection of allConnections) {
                promises.push(this.addClientToContextGroup({ contextGroupId }, connection));
            }
            await Promise.all(promises);
        }
        else {
            // No target provided, add the sender to the context group.
            await this.addClientToContextGroup({ contextGroupId }, senderIdentity);
        }
    }
    // addClientToContextGroup does the actual addition of the client to the Context Group
    /**
     * Helper function for {@link InteropBroker#joinContextGroup InteropBroker.joinContextGroup}. Does the work of actually adding the client to the Context Group.
     * Used by Platform Windows.
     * @return { Promise<void> }
     * @param { AddClientToContextGroupOptions } addClientToContextGroupOptions - Contains the contextGroupId
     * @param { ClientIdentity } clientIdentity - Identity of the client sender.
     * @experimental
     */
    async addClientToContextGroup({ contextGroupId }, clientIdentity) {
        this.wire.sendAction('interop-broker-add-client-to-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const clientSubscriptionState = this.getClientState(clientIdentity);
        if (!clientSubscriptionState) {
            throw new Error(`Client with Identity: ${clientIdentity.uuid} ${clientIdentity.name} not in Client State Map`);
        }
        if (!this.getContextGroups().find((contextGroupInfo) => contextGroupInfo.id === contextGroupId)) {
            throw new Error(`Attempting to join a context group that does not exist: ${contextGroupId}. You may only join existing context groups.`);
        }
        const oldContextGroupId = clientSubscriptionState.contextGroupId;
        if (oldContextGroupId !== contextGroupId) {
            clientSubscriptionState.contextGroupId = contextGroupId;
            await InteropBroker.setCurrentContextGroupInClientOptions(clientIdentity, contextGroupId);
            const contextGroupMap = this.contextGroupsById.get(contextGroupId);
            for (const [, handlerInfo] of clientSubscriptionState.contextHandlers) {
                const { contextType, handlerId } = handlerInfo;
                if (contextType === undefined) {
                    // Send this single handler all of the context, because it accepts all.
                    contextGroupMap.forEach((context, _) => {
                        this.invokeContextHandler(clientIdentity, handlerId, context);
                    });
                }
                else if (contextGroupMap.has(contextType)) {
                    const contextForType = contextGroupMap.get(contextType);
                    if (contextForType) {
                        this.invokeContextHandler(clientIdentity, handlerId, contextForType);
                    }
                }
            }
        }
    }
    // Removes the target from its context group. Similar structure to joinContextGroup.
    /**
     * Removes the specified target from a context group.
     * If no target is specified, it removes the sender from their context group.
     * removeFromContextGroup is responsible for checking connections at the incoming identity. It calls {@link InteropBroker#removeClientFromContextGroup InteropBroker.removeClientFromContextGroup} to actually ungroup the client.
     * Used by Platform Windows.
     * @return { Promise<void> }
     * @param { RemoveFromContextGroupOptions } removeFromContextGroupOptions - Contains the target identity to remove.
     * @param { ClientIdentity } senderIdentity - Identity of the client sender.
     * @experimental
     */
    async removeFromContextGroup({ target }, senderIdentity) {
        this.wire.sendAction('interop-broker-remove-from-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        if (target) {
            // If an endpointId is provided, use that. This will likely be used by external adapters.
            if (InteropBroker.hasEndpointId(target)) {
                await this.removeClientFromContextGroup(target);
            }
            // Sanity check here in case a single app has multiple connections
            const allConnections = this.channel.connections.filter((x) => x.uuid === target.uuid && x.name === target.name);
            if (!allConnections.length) {
                throw new Error(`No connection found for given Identity ${target.uuid} ${target.name}`);
            }
            if (allConnections.length > 1) {
                console.warn(`More than one connection found for identity ${target.uuid} ${target.name}`);
            }
            const promises = [];
            for (const connection of allConnections) {
                promises.push(this.removeClientFromContextGroup(connection));
            }
            await Promise.all(promises);
        }
        else {
            // No target provided, remove the sender from the context group.
            await this.removeClientFromContextGroup(senderIdentity);
        }
    }
    // removeClientFromContextGroup does the actual remove of the client from the Context Group
    /**
     * Helper function for {@link InteropBroker#removeFromContextGroup InteropBroker.removeFromContextGroup}. Does the work of actually removing the client from the Context Group.
     * Used by Platform Windows.
     * @return { Promise<void> }
     * @property { ClientIdentity } clientIdentity - Identity of the client sender.
     * @experimental
     */
    async removeClientFromContextGroup(clientIdentity) {
        this.wire.sendAction('interop-broker-remove-client-from-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const clientState = this.getClientState(clientIdentity);
        if (clientState) {
            clientState.contextGroupId = undefined;
        }
        await InteropBroker.setCurrentContextGroupInClientOptions(clientIdentity, null);
    }
    // Used by platform windows to know what client groups the provider has declared. Also used internally to access context groups. Overrideable so that the platform developer can modify it.
    /**
     * Returns the Interop-Broker-defined context groups available for an entity to join. Because this function is used in the rest of the Interop Broker to fetch the Context Groups, overriding this allows you to customize the Context Groups for the Interop Broker. However, we recommend customizing the context groups through configuration instead.
     * Used by Platform Windows.
     * @return { Promise<ContextGroupInfo[]>}
     * @experimental
     */
    // eslint-disable-next-line class-methods-use-this
    getContextGroups() {
        this.wire.sendAction('interop-broker-get-context-groups').catch((e) => {
            // don't expose, analytics-only call
        });
        // Create copy for immutability
        return contextGroups.map((contextGroup) => {
            return { ...contextGroup };
        });
    }
    // Used to by platform windows to get display metadata for a context group.
    /**
     * Gets display info for a context group
     * Used by Platform Windows.
     * @param { GetInfoForContextGroupOptions } getInfoForContextGroupOptions - Contains contextGroupId, the context group you wish to get display info for.
     * @return { Promise<ContextGroupInfo>}
     * @experimental
     */
    getInfoForContextGroup({ contextGroupId }) {
        this.wire.sendAction('interop-broker-get-info-for-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        return this.getContextGroups().find((contextGroup) => contextGroup.id === contextGroupId);
    }
    // Used by platform windows to get all clients for a context group.
    /**
     * Gets all clients for a context group.
     * Used by Platform Windows.
     * @param { GetAllClientsInContextGroupOptions } getAllClientsInContextGroupOptions - Contains contextGroupId, the context group you wish to get clients for.
     * @return { Promise<ClientIdentity[]>}
     * @experimental
     */
    getAllClientsInContextGroup({ contextGroupId }) {
        this.wire.sendAction('interop-broker-get-all-clients-in-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const clientsInContextGroup = Array.from(this.interopClients.values())
            .filter((connectedClient) => connectedClient.contextGroupId === contextGroupId)
            .map((subscriptionState) => {
            return subscriptionState.clientIdentity;
        });
        return clientsInContextGroup;
    }
    /**
     * Responsible for launching of applications that can handle a given intent, and delegation of intents to those applications.
     * Must be overridden.
     * @param { Intent } intent The combination of an action and a context that is passed to an application for resolution.
     * @param { ClientIdentity }  clientIdentity Identity of the Client making the request.
     * @return { Promise<unknown> }
     * @tutorial interop.handleFiredIntent
     * @experimental
     */
    // eslint-disable-next-line class-methods-use-this
    async handleFiredIntent(intent, clientIdentity) {
        const warning = utils_1.generateOverrideWarning('interopClient.fireIntent', 'fdc3.raiseIntent', 'InteropBroker.handleFiredIntent', clientIdentity);
        console.warn(warning);
        throw new Error(utils_1.BROKER_ERRORS.fireIntent);
    }
    /**
     * Should be called in {@link InteropBroker#handleFiredIntent InteropBroker.handleFiredIntent}.
     * While handleFiredIntent is responsible for launching applications, setIntentTarget is used to tell the InteropBroker which application should receive the intent when it is ready.
     * @param { Intent } intent The combination of an action and a context that is passed to an application for resolution.
     * @param { Identity } target - Identity of the target that will handle the intent.
     * @return { Promise<void> }
     * @experimental
     */
    async setIntentTarget(intent, target) {
        this.wire.sendAction('interop-broker-set-intent-target').catch((e) => {
            // don't expose, this is only for api analytics purposes
        });
        const targetInfo = this.intentClientMap.get(target.name);
        const handlerId = `intent-handler-${intent.name}`;
        if (!targetInfo) {
            this.intentClientMap.set(target.name, new Map());
            const newHandlerInfoMap = this.intentClientMap.get(target.name);
            if (newHandlerInfoMap) {
                newHandlerInfoMap.set(handlerId, { isReady: false, pendingIntents: [intent] });
            }
        }
        else {
            const handlerInfo = targetInfo.get(handlerId);
            if (!handlerInfo) {
                targetInfo.set(handlerId, { isReady: false, pendingIntents: [intent] });
            }
            else {
                handlerInfo.pendingIntents.push(intent);
                if (handlerInfo.clientIdentity && handlerInfo.isReady) {
                    const { clientIdentity, pendingIntents } = handlerInfo;
                    try {
                        const intentToSend = pendingIntents[pendingIntents.length - 1];
                        await this.channel.dispatch(clientIdentity, handlerId, intentToSend);
                        handlerInfo.pendingIntents = [];
                    }
                    catch (error) {
                        console.error(`Error invoking intent handler for client ${clientIdentity.uuid}/${clientIdentity.name}/${clientIdentity.endpointId}`);
                        handlerInfo.isReady = false;
                    }
                }
            }
        }
    }
    /**
     * Responsible for returning information on a particular Intent.
     * Must be overridden.
     * @param { InfoForIntentOptions } options
     * @param { ClientIdentity }  clientIdentity Identity of the Client making the request.
     * @return { Promise<unknown> }
     * @tutorial interop.handleInfoForIntent
     * @experimental
     */
    // eslint-disable-next-line class-methods-use-this
    async handleInfoForIntent(options, clientIdentity) {
        const warning = utils_1.generateOverrideWarning('interopClient.getInfoForIntent', 'fdc3.findIntent', 'InteropBroker.handleInfoForIntent', clientIdentity);
        console.warn(warning);
        throw new Error(utils_1.BROKER_ERRORS.getInfoForIntent);
    }
    /**
     * Responsible for returning information on which Intents are meant to handle a specific Context.
     * Must be overridden.
     * @param { Context } context Data passed between entities and applications.
     * @param { ClientIdentity } clientIdentity Identity of the Client making the request.
     * @return { Promise<unknown> }
     * @tutorial interop.handleInfoForIntentsByContext
     * @experimental
     */
    // eslint-disable-next-line class-methods-use-this
    async handleInfoForIntentsByContext(context, clientIdentity) {
        const warning = utils_1.generateOverrideWarning('interopClient.getInfoForIntentsByContext', 'fdc3.findIntentsByContext', 'InteropBroker.handleInfoForIntentsByContext', clientIdentity);
        console.warn(warning);
        throw new Error(utils_1.BROKER_ERRORS.getInfoForIntentsByContext);
    }
    /**
     * Responsible for resolving an Intent based on a specific Context.
     * Must be overridden.
     * @param { ContextForIntent } contextForIntent Data passed between entities and applications.
     * @param { ClientIdentity }  clientIdentity Identity of the Client making the request.
     * @return { Promise<unknown> }
     * @tutorial interop.handleFiredIntentForContext
     * @experimental
     */
    // eslint-disable-next-line class-methods-use-this
    async handleFiredIntentForContext(contextForIntent, clientIdentity) {
        const warning = utils_1.generateOverrideWarning('interopClient.fireIntentForContext', 'fdc3.raiseIntentForContext', 'InteropBroker.handleFiredIntentForContext', clientIdentity);
        console.warn(warning);
        throw new Error(utils_1.BROKER_ERRORS.fireIntentForContext);
    }
    /*
    Snapshot APIs
    */
    // Used to save interop broker state in snapshots
    decorateSnapshot(snapshot) {
        return { ...snapshot, interopSnapshotDetails: { contextGroupStates: this.getContextGroupStates() } };
    }
    // Used to restore interop broker state in snapshots.
    applySnapshot(snapshot, options) {
        var _a;
        const contextGroupStates = (_a = snapshot === null || snapshot === void 0 ? void 0 : snapshot.interopSnapshotDetails) === null || _a === void 0 ? void 0 : _a.contextGroupStates;
        if (contextGroupStates) {
            if (!(options === null || options === void 0 ? void 0 : options.closeExistingWindows)) {
                this.updateExistingClients(contextGroupStates);
            }
            this.rehydrateContextGroupStates(contextGroupStates);
        }
    }
    updateExistingClients(contextGroupStates) {
        const clients = this.interopClients;
        clients.forEach((subState) => {
            const { clientIdentity, contextGroupId, contextHandlers } = subState;
            if (contextGroupId) {
                const groupContexts = contextGroupStates[contextGroupId];
                for (const [, context] of Object.entries(groupContexts)) {
                    contextHandlers.forEach((contextHandler) => {
                        const { handlerId, contextType } = contextHandler;
                        if (InteropBroker.isContextTypeCompatible(context.type, contextType)) {
                            this.invokeContextHandler(clientIdentity, handlerId, context);
                        }
                    });
                }
            }
        });
    }
    // Used to store context group state in snapshots
    getContextGroupStates() {
        return InteropBroker.toObject(this.contextGroupsById);
    }
    // Used to rehydrate the context state from a snapshot
    rehydrateContextGroupStates(incomingContextGroupStates) {
        const contextGroupStates = Object.entries(incomingContextGroupStates);
        for (const [contextGroupId, contexts] of contextGroupStates) {
            const contextObjects = Object.entries(contexts);
            for (const [contextType, context] of contextObjects) {
                if (this.contextGroupsById.has(contextGroupId)) {
                    const currentContextGroupState = this.contextGroupsById.get(contextGroupId);
                    currentContextGroupState.set(contextType, context);
                }
                else {
                    // This logic will change when dynamic context group creation comes in.
                    console.warn(`Attempting to set a context group that isn't in the context group mapping. Skipping context group rehydration for: ${contextGroupId}`);
                }
            }
        }
    }
    /*
    Internal Context Handler APIs
    */
    // Used to give context to a client that has registered their context handler
    contextHandlerRegistered({ contextType, handlerId }, clientIdentity) {
        const handlerInfo = { contextType, handlerId };
        const clientState = this.getClientState(clientIdentity);
        clientState === null || clientState === void 0 ? void 0 : clientState.contextHandlers.set(handlerId, handlerInfo);
        if (clientState && clientState.contextGroupId) {
            const { contextGroupId } = clientState;
            const contextGroupMap = this.contextGroupsById.get(contextGroupId);
            if (contextType === undefined) {
                // Send this single handler all of the context, because it accepts all.
                contextGroupMap.forEach((context, _) => {
                    this.invokeContextHandler(clientIdentity, handlerId, context);
                });
            }
            else if (contextGroupMap.has(contextType)) {
                const contextForType = contextGroupMap.get(contextType);
                if (contextForType) {
                    this.invokeContextHandler(clientIdentity, handlerId, contextForType);
                }
            }
        }
    }
    // eslint-disable-next-line class-methods-use-this
    async intentHandlerRegistered(payload, clientIdentity) {
        const { handlerId } = payload;
        const clientIntentInfo = this.intentClientMap.get(clientIdentity.name);
        const handlerInfo = clientIntentInfo === null || clientIntentInfo === void 0 ? void 0 : clientIntentInfo.get(handlerId);
        if (!clientIntentInfo) {
            this.intentClientMap.set(clientIdentity.name, new Map());
            const newHandlerInfoMap = this.intentClientMap.get(clientIdentity.name);
            if (newHandlerInfoMap) {
                newHandlerInfoMap.set(handlerId, { isReady: true, pendingIntents: [], clientIdentity });
            }
        }
        else if (!handlerInfo) {
            clientIntentInfo.set(handlerId, { isReady: true, pendingIntents: [], clientIdentity });
        }
        else {
            const { pendingIntents } = handlerInfo;
            handlerInfo.clientIdentity = clientIdentity;
            handlerInfo.isReady = true;
            try {
                if (pendingIntents.length > 0) {
                    const intentToSend = pendingIntents[pendingIntents.length - 1];
                    await this.channel.dispatch(clientIdentity, handlerId, intentToSend);
                    handlerInfo.pendingIntents = [];
                }
            }
            catch (error) {
                console.error(`Error invoking intent handler: ${handlerId} for client ${clientIdentity.uuid}/${clientIdentity.name}/${clientIdentity.endpointId}`);
            }
        }
    }
    // Used to invoke a client's context handler
    invokeContextHandler(clientIdentity, handlerId, context) {
        this.channel.dispatch(clientIdentity, handlerId, context).catch((e) => {
            console.error(`Error invoking context handler ${handlerId} for context type ${context.type} in client ${clientIdentity.uuid}/${clientIdentity.name}/${clientIdentity.endpointId}`, e);
        });
    }
    // Used to remove a context handler for a client
    removeContextHandler({ handlerId }, clientIdentity) {
        const clientState = this.getClientState(clientIdentity);
        if (clientState) {
            clientState.contextHandlers.delete(handlerId);
        }
    }
    handleJoinSessionContextGroup({ sessionContextGroupId }, clientIdentity) {
        try {
            if (!sessionContextGroupId) {
                throw new Error('Failed to join session context group: must specify group id.');
            }
            const sessionContextGroup = this.sessionContextGroupMap.get(sessionContextGroupId);
            if (sessionContextGroup) {
                sessionContextGroup.registerNewClient(clientIdentity);
            }
            else {
                const newSessionContextGroupBroker = new SessionContextGroupBroker_1.default(this.channel, sessionContextGroupId);
                newSessionContextGroupBroker.registerNewClient(clientIdentity);
                this.sessionContextGroupMap.set(sessionContextGroupId, newSessionContextGroupBroker);
            }
            return { hasConflict: this.contextGroupsById.has(sessionContextGroupId) };
        }
        catch (error) {
            throw new Error(error);
        }
    }
    /*
    Internal Utilties
    */
    // Getter for interop info for a client.
    getClientState(id) {
        return this.interopClients.get(id.endpointId);
    }
    // Util for getContextGroupStates. Serializes the contextGroupStates object so we can store it.
    static toObject(map) {
        const objectFromMap = Object.fromEntries(map);
        const newObject = {};
        Object.entries(objectFromMap).forEach(([contextGroupId, contextMap]) => {
            const newContextObject = Object.fromEntries(contextMap);
            newObject[contextGroupId] = newContextObject;
        });
        return newObject;
    }
    static checkContextIntegrity(context) {
        if (!context) {
            return { isValid: false, reason: 'No context supplied' };
        }
        if (typeof context !== 'object') {
            return { isValid: false, reason: 'Context must be an Object' };
        }
        if (!context.type) {
            return { isValid: false, reason: 'Context must have a type property' };
        }
        if (context.id && typeof context.id !== 'object') {
            return {
                isValid: false,
                reason: 'Context id must be an Object populated with key-value identifiers (if set)'
            };
        }
        if (context.id) {
            const { id } = context;
            const keys = Object.keys(id);
            let foundBadIdentifier = false;
            if (!keys.length) {
                return { isValid: false, reason: 'Context id must have at least one key-value identifier' };
            }
            keys.forEach((key) => {
                if (typeof key !== 'string' || typeof id[key] !== 'string') {
                    foundBadIdentifier = true;
                }
            });
            if (foundBadIdentifier) {
                return { isValid: false, reason: 'Context id key-value identifiers must be of type string' };
            }
        }
        if (context.name && typeof context.name !== 'string') {
            return { isValid: false, reason: 'Context name must be of string type (if set)' };
        }
        return { isValid: true };
    }
    // Util to check a client identity.
    static hasEndpointId(target) {
        return target.endpointId !== undefined;
    }
    // Util to check if we should send a context to a handler.
    static isContextTypeCompatible(contextType, registeredContextType) {
        return typeof registeredContextType === 'undefined' || contextType === registeredContextType;
    }
    // Setup function for state mapping
    setContextGroupMap() {
        // This way, if a user overrides this.getContextGroups, it's reflected in the contextGroupMapping.
        for (const contextGroupInfo of this.getContextGroups()) {
            this.contextGroupsById.set(contextGroupInfo.id, new Map());
        }
    }
    static async setCurrentContextGroupInClientOptions(clientIdentity, contextGroupId) {
        const entityInfo = await fin.System.getEntityInfo(clientIdentity.uuid, clientIdentity.name);
        let entity;
        if (entityInfo.entityType === 'view') {
            entity = await fin.View.wrap(clientIdentity);
        }
        else if (entityInfo.entityType === 'window') {
            entity = await fin.Window.wrap(clientIdentity);
        }
        if (entity) {
            await entity.updateOptions({
                interop: {
                    currentContextGroup: contextGroupId
                }
            });
        }
        else {
            console.warn(`Setting Current Context Group: Entity with identity ${clientIdentity.uuid}, ${clientIdentity.name} is not a window or view. It is a ${entityInfo.entityType} instead.`);
        }
    }
    // Setup Channel Connection Logic
    wireChannel(channel) {
        channel.onConnection((clientIdentity, payload) => {
            if (!this.isConnectionAuthorized(clientIdentity, payload)) {
                throw new Error(`Connection not authorized for ${clientIdentity.uuid}, ${clientIdentity.name}`);
            }
            if (!clientIdentity.endpointId) {
                throw new Error('Version too old to be compatible with Interop. Please upgrade your runtime to a more recent version.');
            }
            const clientSubscriptionState = {
                contextGroupId: undefined,
                contextHandlers: new Map(),
                clientIdentity
            };
            // Only allow the client to join a contextGroup that actually exists.
            if ((payload === null || payload === void 0 ? void 0 : payload.currentContextGroup) && this.contextGroupsById.has(payload.currentContextGroup)) {
                clientSubscriptionState.contextGroupId = payload === null || payload === void 0 ? void 0 : payload.currentContextGroup;
            }
            this.interopClients.set(clientIdentity.endpointId, clientSubscriptionState);
        });
        channel.onDisconnection((clientIdentity) => {
            this.interopClients.delete(clientIdentity.endpointId);
            const targetInfo = this.intentClientMap.get(clientIdentity.name);
            if (targetInfo && clientIdentity.uuid === fin.me.identity.uuid) {
                targetInfo.forEach((handler) => {
                    handler.isReady = false;
                });
            }
            this.sessionContextGroupMap.forEach((sessionContextGroup) => {
                sessionContextGroup.onDisconnection(clientIdentity);
            });
        });
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        channel.beforeAction((action, payload, clientIdentity) => {
            if (!this.isActionAuthorized(action, payload, clientIdentity)) {
                throw new Error(`Action (${action}) not authorized for ${clientIdentity.uuid}, ${clientIdentity.name}`);
            }
            console.log(action, payload, clientIdentity);
        });
        channel.afterAction(console.log);
        // Client functions
        channel.register('setContext', this.setContext.bind(this));
        channel.register('fireIntent', this.handleFiredIntent.bind(this));
        channel.register('getCurrentContext', this.getCurrentContext.bind(this));
        channel.register('getInfoForIntent', this.handleInfoForIntent.bind(this));
        channel.register('getInfoForIntentsByContext', this.handleInfoForIntentsByContext.bind(this));
        channel.register('fireIntentForContext', this.handleFiredIntentForContext.bind(this));
        // Platform window functions
        channel.register('getContextGroups', this.getContextGroups.bind(this));
        channel.register('joinContextGroup', this.joinContextGroup.bind(this));
        channel.register('removeFromContextGroup', this.removeFromContextGroup.bind(this));
        channel.register('getAllClientsInContextGroup', this.getAllClientsInContextGroup.bind(this));
        channel.register('getInfoForContextGroup', this.getInfoForContextGroup.bind(this));
        // Internal methods
        channel.register('contextHandlerRegistered', this.contextHandlerRegistered.bind(this));
        channel.register('intentHandlerRegistered', this.intentHandlerRegistered.bind(this));
        channel.register('removeContextHandler', this.removeContextHandler.bind(this));
        channel.register('sessionContextGroup:createIfNeeded', this.handleJoinSessionContextGroup.bind(this));
    }
    /**
     * Can be used to completely prevent a connection. Return false to prevent connections. Allows all connections by default.
     * @param _id the identity tryinc to connect
     * @param _connectionPayload optional payload to use in custom implementations, will be undefined by default
     */
    async isConnectionAuthorized(_id, _connectionPayload) {
        this.wire.sendAction('interop-broker-is-connection-authorized').catch((e) => {
            // don't expose, analytics-only call
        });
        return true;
    }
    /**
     * Called before every action to check if this entity should be allowed to take the action.
     * Return false to prevent the action
     * @param _action the string action to authorize in camel case
     * @param _payload the data being sent for this action
     * @param _identity the connection attempting to dispatch this action
     */
    async isActionAuthorized(_action, _payload, _identity) {
        this.wire.sendAction('interop-broker-is-action-authorized').catch((e) => {
            // don't expose, analytics-only call
        });
        return true;
    }
}
exports.InteropBroker = InteropBroker;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interop/InteropClient.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interop/InteropClient.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _clientPromise, _sessionContextGroups;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InteropClient = void 0;
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const SessionContextGroupClient_1 = __webpack_require__(/*! ./SessionContextGroupClient */ "../../node_modules/openfin-adapter/src/api/interop/SessionContextGroupClient.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/openfin-adapter/src/api/interop/utils.js");
/**
 * @typedef { object } Intent
 * @summary The combination of an action and a context that is passed to an application for resolution.
 * @property { string } name Name of the intent.
 * @property { Context } context Data associated with the intent
 */
/**
 * @typedef { object } Subscription
 * @summary Object returned when subscribing a handler.
 * @property { function } unsubscribe Function to unsubscribe the handler.
 */
/**
 * @typedef { function } ContextHandler
 * @summary Subscription function for addContextHandler.
 */
/**
 * @typedef { function } IntentHandler
 * @summary Subscription function for registerIntentHandler
 */
/**
 * @typedef { object } ClientIdentity
 * @summary The Identity for a Channel Client. Includes endpointId to differentiate between different connections for an entity.
 * @property {string} uuid GUID of an application.
 * @property {string} name Name of an entity in an application.
 * @property {string} endpointId Unique differentiator for different Channel connections for an entity.
 */
/**
 * @typedef { object } ContextGroupInfo
 * @summary Information for a Context Group. Contains metadata for displaying the group properly.
 * @property {string} id Name of the context group
 * @property {DisplayMetadata} displayMetadata Metadata for the Context Group. Contains the group's human-readable name, color, and an image, as defined by the Interop Broker.
 */
/**
 * @typedef { object } DisplayMetadata
 * @summary The display data for a Context Group.
 * @property {string} name A user-readable name for this context group, e.g: `"Red"`
 * @property {string} [color] The color that should be associated within this context group when displaying this context group in a UI, e.g: `0xFF0000`.
 * @property {string} [glyph] A URL of an image that can be used to display this context group
 */
/**
 * @typedef { object } Context
 * @summary Data passed between entities and applications.
 * @property {object} [id] An object containing string key-value pairs for the bulk of the data for the context. Differs between context types.
 * @property {string} [name] User-readable name for the incoming context.
 * @property {string} type Conserved type for the context (e.g. `instrument` or `country`)
 */
/**
 * @typedef { object } ContextForIntent
 * @summary Data passed between entities and applications, including an optional metadata.
 * @property {object} [id] An object containing string key-value pairs for the bulk of the data for the context. Differs between context types.
 * @property {string} [name] User-readable name for the incoming context.
 * @property {string} type Conserved type for the context (e.g. `instrument` or `country`)
 * @property {any} [metadata]
 */
/**
 * @typedef { object } SessionContextGroup
 * @summary An instance of a SessionContextGroup
 * @property {string} id The SessionContextGroup's id.
 * @property {setContext} setContext Sets a context of a certain type
 * @property {getCurrentContext} getCurrentContext Gets the currently set context of a certain type
 * @property {addContextHandler} addContextHandler Adds a handler for context change.
 */
/**
 * @typedef {function} setContext
 * @summary A SessionContextGroup instance method for setting a context in the SessionContextGroup.
 * @param {Context} context The Context to be set.
 * @return {Promise<void>}
 */
/**
 * @typedef {function} getCurrentContext
 * @summary A SessionContextGroup instance method for getting the current context of a certain type.
 * @param {string} [contextType] The Context Type to get. If not specified the last contextType set would get used.
 * @return {Promise<Context>}
 */
/**
 * @typedef {function} addContextHandler
 * @summary A SessionContextGroup instance method for adding a handler for context change.
 * @param {ContextHandler} contextHandler The callback to be invoked. Is invoked when (a) the context changes or (b) immediately after getting created if the context is already set.
 * @param {string} [contextType] The context type this handler should listen to. If not specified, a global handler for all context types will get created. Only one global handler is allowed per SessionContextGroup.
 * @return {Promise<void>}
 */
/**
 * {@link https://developers.openfin.co/of-docs/docs/enable-color-linking **THE INTEROP API IS EXPERIMENTAL. IF YOU WOULD LIKE TO USE IT, PLEASE USE OUR DEFAULT IMPLEMENTATION IN BROWSER**}
 *
 * The Interop Client API is broken up into two groups:
 *
 * **Content Facing APIs** - For Application Developers putting Views into a Platform Window, who care about Context. These are APIs that send out and receive the Context data that flows between applications. Think of this as the Water in the Interop Pipes.
 *
 * **Context Grouping APIs** - For Platform Developers, to add and remove Views to and from Context Groups. These APIs are utilized under-the-hood in Platforms, so they don't need to be used to participate in Interop. These are the APIs that decide which entities the context data flows between. Think of these as the valves or pipes that control the flow of Context Data for Interop.
 *
 * ---
 *
 * All APIs are available at the `fin.me.interop` namespace.
 *
 * ---
 *
 * **You only need 2 things to participate in Interop Context Grouping:**
 * * A Context Handler for incoming context: {@link InteropClient#addContextHandler addContextHandler(handler, contextType?)}
 * * Call setContext on your context group when you want to share context with other group members: {@link InteropClient#setContext setContext(context)}
 *
 * ---
 *
 * ##### Constructor
 * Returned by {@link Interop.connectSync Interop.connectSync}.
 *
 * ---
 *
 * ##### Interop methods intended for Views
 *
 *
 * **Context Groups API**
 *  * {@link InteropClient#addContextHandler addContextHandler(handler, contextType?)}
 *  * {@link InteropClient#setContext setContext(context)}
 *  * {@link InteropClient#getCurrentContext getCurrentContext(contextType?)}
 *  * {@link InteropClient#joinSessionContextGroup joinSessionContextGroup(sessionContextGroupId)}
 *
 *
 * **Intents API**
 *  * {@link InteropClient#fireIntent fireIntent(intent)}
 *  * {@link InteropClient#registerIntentHandler registerIntentHandler(intentHandler, intentName)}
 *  * {@link InteropClient#getInfoForIntent getInfoForIntent(infoForIntentOptions)}
 *  * {@link InteropClient#getInfoForIntentsByContext getInfoForIntentsByContext(context)}
 *  * {@link InteropClient#fireIntentForContext fireIntentForContext(contextForIntent)}
 *
 * ##### Interop methods intended for Windows
 *  * {@link InteropClient#getContextGroups getContextGroups()}
 *  * {@link InteropClient#joinContextGroup joinContextGroup(contextGroupId, target?)}
 *  * {@link InteropClient#removeFromContextGroup removeFromContextGroup(target?)}
 *  * {@link InteropClient#getInfoForContextGroup getInfoForContextGroup(contextGroupId)}
 *  * {@link InteropClient#getAllClientsInContextGroup getAllClientsInContextGroup(contextGroupId)}
 *

 *
 * @hideconstructor
 * @class
 */
class InteropClient extends base_1.Base {
    constructor(wire, name, interopConfig) {
        super(wire);
        _clientPromise.set(this, void 0);
        _sessionContextGroups.set(this, void 0);
        __classPrivateFieldSet(this, _sessionContextGroups, new Map());
        __classPrivateFieldSet(this, _clientPromise, this.wire.environment.whenReady().then(() => {
            return this.fin.InterApplicationBus.Channel.connect(`interop-broker-${name}`, {
                payload: interopConfig
            });
        }));
    }
    /*
    Client APIs
    */
    /**
     * Sets a context for the context group of the current entity.
     * @param { Context } context - New context to set.
     * @return { Promise<void> }
     * @tutorial interop.setContext
     */
    async setContext(context) {
        this.wire.sendAction('interop-client-set-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('setContext', { context });
    }
    /**
     * Add a context handler for incoming context. If an entity is part of a context group, and then sets its context handler, it will receive all of its declared contexts.
     * @param { ContextHandler } handler - Handler for incoming context.
     * @param { string } [contextType] - The type of context you wish to handle.
     * @return { Promise<Subscription> }
     * @tutorial interop.addContextHandler
     */
    async addContextHandler(handler, contextType) {
        this.wire.sendAction('interop-client-add-context-handler').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        let handlerId;
        if (contextType) {
            handlerId = `invokeContextHandler-${contextType}-${utils_1.generateId()}`;
            console.warn(`Warning: By providing a contextType (${contextType}), you are using the experimental addContextHandler. To avoid issues, make sure you are adding your context handlers at the top level in your application.`);
        }
        else {
            handlerId = 'invokeContextHandler';
        }
        const wrappedHandler = utils_1.wrapContextHandler(handler, handlerId);
        client.register(handlerId, wrappedHandler);
        await client.dispatch('contextHandlerRegistered', { handlerId, contextType });
        return {
            unsubscribe: async () => {
                client.remove(handlerId);
                await client.dispatch('removeContextHandler', { handlerId });
            }
        };
    }
    /*
    Platform Window APIs
    */
    /**
     * Returns the Interop-Broker-defined context groups available for an entity to join.
     * Used by Platform Windows.
     * @return { Promise<ContextGroupInfo[]>}
     * @tutorial interop.getContextGroups
     */
    async getContextGroups() {
        this.wire.sendAction('interop-client-get-context-groups').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('getContextGroups');
    }
    /**
     * Join all Interop Clients at the given identity to context group `contextGroupId`.
     * If no target is specified, it adds the sender to the context group.
     * Because multiple Channel connections/Interop Clients can potentially exist at a `uuid`/`name` combo, we currently join all Channel connections/Interop Clients at the given identity to the context group.
     * If an `endpointId` is provided (which is unlikely, unless the call is coming from an external adapter), then we only join that single connection to the context group.
     * For all intents and purposes, there will only be 1 connection present in Platform and Browser implmentations, so this point is more-or-less moot.
     * Used by Platform Windows.
     * @param { string } contextGroupId - Id of the context group.
     * @param { Identity } [target] - Identity of the entity you wish to join to a context group.
     * @return { Promise<void>}
     * @tutorial interop.joinContextGroup
     */
    async joinContextGroup(contextGroupId, target) {
        this.wire.sendAction('interop-client-join-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        if (!contextGroupId) {
            throw new Error('No contextGroupId specified for joinContextGroup.');
        }
        return client.dispatch('joinContextGroup', { contextGroupId, target });
    }
    /**
     * Removes the specified target from a context group.
     * If no target is specified, it removes the sender from their context group.
     * Used by Platform Windows.
     * @param { Identity } [target] - Identity of the entity you wish to join to a context group.
     * @return { Promise<void>}
     * @tutorial interop.removeFromContextGroup
     */
    async removeFromContextGroup(target) {
        this.wire.sendAction('interop-client-remove-from-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('removeFromContextGroup', { target });
    }
    /**
     * Gets all clients for a context group.
     * Used by Platform Windows.
     * @param { string } contextGroupId - The id of context group you wish to get clients for.
     * @return { Promise<ClientIdentity[]>}
     * @tutorial interop.getAllClientsInContextGroup
     */
    async getAllClientsInContextGroup(contextGroupId) {
        this.wire.sendAction('interop-client-get-all-clients-in-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        if (!contextGroupId) {
            throw new Error('No contextGroupId specified for getAllClientsInContextGroup.');
        }
        return client.dispatch('getAllClientsInContextGroup', { contextGroupId });
    }
    /**
     * Gets display info for a context group
     * Used by Platform Windows.
     * @param { string } contextGroupId - The id of context group you wish to get display info for.
     * @return { Promise<ContextGroupInfo>}
     * @tutorial interop.getInfoForContextGroup
     */
    async getInfoForContextGroup(contextGroupId) {
        this.wire.sendAction('interop-client-get-info-for-context-group').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        if (!contextGroupId) {
            throw new Error('No contextGroupId specified for getInfoForContextGroup.');
        }
        return client.dispatch('getInfoForContextGroup', { contextGroupId });
    }
    /**
     * Sends an intent to the Interop Broker to resolve.
     * @param { Intent } intent - The combination of an action and a context that is passed to an application for resolution.
     * @return { Promise<unknown>}
     * @tutorial interop.fireIntent
     * @experimental
     */
    async fireIntent(intent) {
        this.wire.sendAction('interop-client-fire-intent').catch((e) => {
            // don't expose, this is only for api analytics purposes
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('fireIntent', intent);
    }
    /**
     * Adds an intent handler for incoming intents. The last intent sent of the name subscribed to will be received.
     * @param { IntentHandler } handler - Registered function meant to handle a specific intent type.
     * @param { string } intentName - The name of an intent.
     * @return { Promise<Subscription> }
     * @tutorial interop.registerIntentHandler
     * @experimental
     */
    async registerIntentHandler(handler, intentName) {
        this.wire.sendAction('interop-client-register-intent-handler').catch((e) => {
            // don't expose, this is only for api analytics purposes
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        const handlerId = `intent-handler-${intentName}`;
        const wrappedHandler = this.wrapIntentHandler(handler, handlerId);
        try {
            await client.register(handlerId, wrappedHandler);
            await client.dispatch('intentHandlerRegistered', { handlerId });
        }
        catch (error) {
            throw new Error('Unable to register intent handler');
        }
        return {
            unsubscribe: async () => {
                client.remove(handlerId);
            }
        };
    }
    /**
     * Gets the last context of the Context Group currently subscribed to. It takes an optional Context Type and returns the
     * last context of that type.
     * @param { string } [contextType]
     * @return { Promise<Context> }
     * @tutorial interop.getCurrentContext
     * @experimental
     */
    async getCurrentContext(contextType) {
        this.wire.sendAction('interop-client-get-current-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('getCurrentContext', { contextType });
    }
    /**
     * Get information for a particular Intent from the Interop Broker.
     * @param { InfoForIntentOptions } options
     * @return { Promise<unknown> }
     * @tutorial interop.getInfoForIntent
     * @experimental
     */
    async getInfoForIntent(options) {
        this.wire.sendAction('interop-client-get-info-for-intent').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('getInfoForIntent', options);
    }
    /**
     * Get information from the Interop Broker on all Intents that are meant to handle a particular context.
     * @param { Context } context
     * @return { Promise<unknown> }
     * @tutorial interop.getInfoForIntentsByContext
     * @experimental
     */
    async getInfoForIntentsByContext(context) {
        this.wire.sendAction('interop-client-get-info-for-intents-by-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('getInfoForIntentsByContext', context);
    }
    /**
     * Sends a Context that will be resolved to an Intent by the Interop Broker.
     * This context accepts a metadata property.
     * @param { ContextForIntent } context
     * @return { Promise<unknown> }
     * @tutorial interop.fireIntentForContext
     * @experimental
     */
    async fireIntentForContext(context) {
        this.wire.sendAction('interop-client-fire-intent-for-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch('fireIntentForContext', context);
    }
    /**
     * Join the current entity to session context group `sessionContextGroupId` and return a sessionContextGroup instance.
     * If the sessionContextGroup doesn't exist, one will get created.
     * Session Context Groups do not persist between runs and aren't present on snapshots.
     * @param { string } sessionContextGroupId - Id of the context group.
     * @return { Promise<SessionContextGroup>}
     * @tutorial interop.joinSessionContextGroup
     * @experimental
     */
    async joinSessionContextGroup(sessionContextGroupId) {
        try {
            const currentSessionContextGroup = __classPrivateFieldGet(this, _sessionContextGroups).get(sessionContextGroupId);
            if (currentSessionContextGroup) {
                return currentSessionContextGroup.getUserInstance();
            }
            const client = await __classPrivateFieldGet(this, _clientPromise);
            const { hasConflict } = await client.dispatch('sessionContextGroup:createIfNeeded', {
                sessionContextGroupId
            });
            if (hasConflict) {
                console.warn(`A (non-session) context group with the name "${sessionContextGroupId}" already exists. If you are trying to join a Context Group, call joinContextGroup instead.`);
            }
            const newSessionContextGroup = new SessionContextGroupClient_1.default(this.wire, __classPrivateFieldGet(this, _clientPromise), sessionContextGroupId);
            __classPrivateFieldGet(this, _sessionContextGroups).set(sessionContextGroupId, newSessionContextGroup);
            return newSessionContextGroup.getUserInstance();
        }
        catch (error) {
            console.error(`Error thrown trying to create Session Context Group with id "${sessionContextGroupId}": ${error}`);
            throw error;
        }
    }
    /*
    Internal Utilties
    */
    // eslint-disable-next-line class-methods-use-this
    wrapIntentHandler(handler, handlerId) {
        return async (intent) => {
            try {
                await handler(intent);
            }
            catch (error) {
                console.error(`Error thrown by handler ${handlerId}: ${error}`);
                throw error;
            }
        };
    }
}
exports.InteropClient = InteropClient;
_clientPromise = new WeakMap(), _sessionContextGroups = new WeakMap();


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interop/SessionContextGroupBroker.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interop/SessionContextGroupBroker.js ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const _1 = __webpack_require__(/*! . */ "../../node_modules/openfin-adapter/src/api/interop/index.js");
class SessionContextGroupBroker {
    constructor(provider, id) {
        this.provider = provider;
        this.id = id;
        this.lastContext = undefined;
        this.contextGroupMap = new Map();
        this.clients = new Map();
        this.registerListeners();
    }
    registerListeners() {
        this.provider.register(`sessionContextGroup:getContext-${this.id}`, this.getCurrentContext.bind(this));
        this.provider.register(`sessionContextGroup:setContext-${this.id}`, this.setContext.bind(this));
        this.provider.register(`sessionContextGroup:handlerAdded-${this.id}`, this.handlerAdded.bind(this));
        this.provider.register(`sessionContextGroup:handlerRemoved-${this.id}`, this.handlerRemoved.bind(this));
    }
    getCurrentContext(payload) {
        return payload.type ? this.contextGroupMap.get(payload.type) : this.lastContext;
    }
    setContext(payload, clientIdentity) {
        const { context } = payload;
        const contextIntegrityCheckResult = _1.InteropBroker.checkContextIntegrity(context);
        if (contextIntegrityCheckResult.isValid === false) {
            throw new Error(`Failed to set Context - bad Context. Reason: ${contextIntegrityCheckResult.reason}. Context: ${JSON.stringify(context)}`);
        }
        const clientState = this.getClientState(clientIdentity);
        if (!clientState) {
            // This shouldn't get hit.
            throw new Error(`Client with Identity: ${clientIdentity.uuid} ${clientIdentity.name} not in Session Client State Map`);
        }
        // set the context
        this.contextGroupMap.set(context.type, context);
        this.lastContext = context;
        const clientSubscriptionStates = Array.from(this.clients.values());
        clientSubscriptionStates.forEach((client) => {
            var _a;
            // eslint-disable-next-line no-unused-expressions
            (_a = client.contextHandlers.get(context.type)) === null || _a === void 0 ? void 0 : _a.forEach((handlerId) => {
                this.provider.dispatch(client.clientIdentity, handlerId, context);
            });
            if (client.globalHandler) {
                this.provider.dispatch(client.clientIdentity, client.globalHandler, context);
            }
        });
    }
    getClientState(id) {
        return this.clients.get(id.endpointId);
    }
    handlerAdded(payload, clientIdentity) {
        const { handlerId, contextType } = payload;
        const clientSubscriptionState = this.getClientState(clientIdentity);
        if (!clientSubscriptionState) {
            throw new Error(`Client with Identity: ${clientIdentity.uuid} ${clientIdentity.name} not in Client State Map`);
        }
        if (contextType) {
            const currentHandlerList = clientSubscriptionState.contextHandlers.get(contextType) || [];
            clientSubscriptionState.contextHandlers.set(contextType, [...currentHandlerList, handlerId]);
            const currentContext = this.contextGroupMap.get(contextType);
            if (currentContext) {
                this.provider.dispatch(clientIdentity, handlerId, currentContext);
            }
        }
        else {
            clientSubscriptionState.globalHandler = handlerId;
            [...this.contextGroupMap.keys()].forEach((currentContextType) => {
                const currentContext = this.contextGroupMap.get(currentContextType);
                if (currentContext) {
                    this.provider.dispatch(clientIdentity, handlerId, currentContext);
                }
            });
        }
    }
    handlerRemoved(payload, clientIdentity) {
        const { handlerId } = payload;
        const client = this.clients.get(clientIdentity.endpointId);
        if (client) {
            Array.from(client.contextHandlers).forEach(([, handlers]) => {
                const index = handlers.indexOf(handlerId);
                if (index > -1) {
                    handlers.splice(index, 1);
                }
            });
            if (client.globalHandler === handlerId) {
                client.globalHandler = undefined;
            }
        }
        else {
            console.warn(`Trying to remove a handler from a client that isn't mapped. handlerId: ${handlerId}. clientIdentity: ${clientIdentity}`);
        }
    }
    registerNewClient(clientIdentity) {
        if (!this.clients.has(clientIdentity.endpointId)) {
            const clientSubscriptionState = {
                contextHandlers: new Map(),
                clientIdentity,
                globalHandler: undefined
            };
            this.clients.set(clientIdentity.endpointId, clientSubscriptionState);
        }
    }
    onDisconnection(clientIdentity) {
        this.clients.delete(clientIdentity.endpointId);
    }
}
exports["default"] = SessionContextGroupBroker;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interop/SessionContextGroupClient.js":
/*!***************************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interop/SessionContextGroupClient.js ***!
  \***************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _clientPromise;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/openfin-adapter/src/api/interop/utils.js");
class SessionContextGroupClient extends base_1.Base {
    constructor(wire, client, id) {
        super(wire);
        _clientPromise.set(this, void 0);
        this.id = id;
        __classPrivateFieldSet(this, _clientPromise, client);
    }
    /**
     * Sets a context for the session context group.
     * @param { Context } context - New context to set.
     * @return { Promise<void> }
     * @tutorial interop.setContext
     */
    async setContext(context) {
        this.wire.sendAction('interop-session-context-group-set-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch(`sessionContextGroup:setContext-${this.id}`, {
            sessionContextGroupId: this.id,
            context
        });
    }
    async getCurrentContext(type) {
        this.wire.sendAction('interop-session-context-group-get-context').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return client.dispatch(`sessionContextGroup:getContext-${this.id}`, {
            sessionContextGroupId: this.id,
            type
        });
    }
    async addContextHandler(contextHandler, contextType) {
        this.wire.sendAction('interop-session-context-group-add-handler').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _clientPromise);
        let handlerId;
        if (contextType) {
            handlerId = `sessionContextHandler:invoke-${this.id}-${contextType}-${utils_1.generateId()}`;
        }
        else {
            handlerId = `sessionContextHandler:invoke-${this.id}`;
        }
        client.register(handlerId, utils_1.wrapContextHandler(contextHandler, handlerId));
        client.dispatch(`sessionContextGroup:handlerAdded-${this.id}`, { handlerId, contextType });
        return { unsubscribe: await this.createUnsubscribeCb(handlerId) };
    }
    async createUnsubscribeCb(handlerId) {
        const client = await __classPrivateFieldGet(this, _clientPromise);
        return async () => {
            client.remove(handlerId);
            await client.dispatch(`sessionContextGroup:handlerRemoved-${this.id}`, { handlerId });
        };
    }
    getUserInstance() {
        return {
            id: this.id,
            setContext: utils_1.wrapInTryCatch(this.setContext.bind(this), 'Failed to set context: '),
            getCurrentContext: utils_1.wrapInTryCatch(this.getCurrentContext.bind(this), 'Failed to get context: '),
            addContextHandler: utils_1.wrapInTryCatch(this.addContextHandler.bind(this), 'Failed to add context handler: ')
        };
    }
}
exports["default"] = SessionContextGroupClient;
_clientPromise = new WeakMap();


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interop/index.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interop/index.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/interop/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./InteropClient */ "../../node_modules/openfin-adapter/src/api/interop/InteropClient.js"), exports);
__exportStar(__webpack_require__(/*! ./InteropBroker */ "../../node_modules/openfin-adapter/src/api/interop/InteropBroker.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/interop/utils.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/interop/utils.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BROKER_ERRORS = exports.generateOverrideWarning = exports.generateOverrideError = exports.wrapContextHandler = exports.wrapInTryCatch = exports.generateId = void 0;
exports.generateId = () => `${Math.random()}${Date.now()}`;
exports.wrapInTryCatch = (f, prefix) => (...args) => {
    try {
        return f(...args);
    }
    catch (e) {
        throw new Error((prefix || '') + e);
    }
};
exports.wrapContextHandler = (handler, handlerId) => {
    return async (context) => {
        try {
            await handler(context);
        }
        catch (error) {
            console.error(`Error thrown by handler ${handlerId} for context type ${context.type}: ${error}`);
            throw error;
        }
    };
};
exports.generateOverrideError = (clientApi, brokerApi) => {
    return `You have tried to to use ${clientApi} but ${brokerApi} has not been overridden in the Interop Broker. Please override this function. Refer to our documentation for more info.`;
};
exports.generateOverrideWarning = (interopClientApi, fdc3ClientApi, brokerApi, identity) => {
    const { uuid, name } = identity;
    return `Entity with identity: ${uuid}/${name} has called ${interopClientApi} or ${fdc3ClientApi} but ${brokerApi} has not been overridden.`;
};
exports.BROKER_ERRORS = {
    fireIntent: exports.generateOverrideError('fireIntent', 'handleFiredIntent'),
    fireIntentForContext: exports.generateOverrideError('fireIntentForContext', 'handleFiredIntentForContext'),
    getInfoForIntent: exports.generateOverrideError('getInfoForIntent', 'handleInfoForIntent'),
    getInfoForIntentsByContext: exports.generateOverrideError('getInfoForIntentsByContext', 'handleInfoForIntentsByContext')
};


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/me.js":
/*!********************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/me.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getMe = exports.getBaseMe = void 0;
const EntityType_1 = __webpack_require__(/*! ../shapes/EntityType */ "../../node_modules/openfin-adapter/src/shapes/EntityType.js");
const view_1 = __webpack_require__(/*! ./view */ "../../node_modules/openfin-adapter/src/api/view/index.js");
const frame_1 = __webpack_require__(/*! ./frame */ "../../node_modules/openfin-adapter/src/api/frame/index.js");
const window_1 = __webpack_require__(/*! ./window */ "../../node_modules/openfin-adapter/src/api/window/index.js");
function getBaseMe(entityType, uuid, name) {
    const entityTypeHelpers = {
        isView: entityType === 'view',
        isWindow: entityType === 'window',
        isFrame: entityType === 'iframe',
        isExternal: entityType === 'external connection'
    };
    return { ...entityTypeHelpers, uuid, name, entityType };
}
exports.getBaseMe = getBaseMe;
// We need to do a lot of casting as unknown here because the compiler get's confused about matching types. What matters is that it works on the outside
function getMe(wire) {
    const { uuid, name, entityType } = wire.me;
    const interopObject = {
        setContext() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        addContextHandler() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        getContextGroups() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        joinContextGroup() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        removeFromContextGroup() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        getAllClientsInContextGroup() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        },
        getInfoForContextGroup() {
            throw new Error('Interop API has not been instantiated. Either connection has failed or you have not declared interop in your config.');
        }
    };
    switch (entityType) {
        case EntityType_1.default.VIEW:
            return Object.assign(new view_1.View(wire, { uuid, name }), getBaseMe(entityType, uuid, name), {
                interop: interopObject
            });
        case EntityType_1.default.WINDOW:
            return Object.assign(new window_1._Window(wire, { uuid, name }), getBaseMe(entityType, uuid, name), {
                interop: interopObject
            });
        case EntityType_1.default.IFRAME:
            return Object.assign(new frame_1._Frame(wire, { uuid, name }), getBaseMe(entityType, uuid, name), {
                interop: interopObject
            });
        default:
            return { ...getBaseMe(entityType, uuid, name) };
    }
}
exports.getMe = getMe;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/platform/Factory.js":
/*!**********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/Factory.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
/* eslint-disable no-undef, no-underscore-dangle */
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const index_1 = __webpack_require__(/*! ./layout/index */ "../../node_modules/openfin-adapter/src/api/platform/layout/index.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/platform/Instance.js");
/**
 * InitPlatformOptions interface
 * @typedef { object } InitPlatformOptions
 * @property { OverrideCallback } [overrideCallback] a callback function that can be used to extend or replace default Provider behavior.
 */
/**
 * @typedef { same | different } ProcessAffinityStrategy
 * @summary Strategy to place views that share a domain into different process affinities or the same process affinity.
 * @property { string } same views in the same domain will have the same process affinity.
 * @property { string } different views in the same domain will have different process affinities.
 */
/**
 * @typedef { object } PlatformOptions
 * @summary The options object required by {@link Platform#start Platform.start}
 * Any {@link ApplicationOption Application option} is also a valid platform option
 * @property {Array.<Object>} [commands] Configuration for keyboard commands.
 * For details and usage, see [Using Keyboard Commands]{@link https://developers.openfin.co/docs/platform-api#section-5-3-using-keyboard-commands}.
 * @property {DefaultWindowOptions} [defaultWindowOptions] Default window options apply to all platform windows.
 * @property {View~options} [defaultViewOptions] Default view options apply to all platform views.
 * @property {ProcessAffinityStrategy} [viewProcessAffinityStrategy] 'same' | 'different'.
 */
/**
 * @typedef { object } DefaultWindowOptions
 * @summary Default window options apply to all platform windows.
 * Any {@link Window~options Window option} is also a valid Default Window option
 * used by default in any window that is created in the current platform's scope.
 * Individual window options will override these defaults.
 * @property {string} [stylesheetUrl]
 * Specify a path of a custom CSS file to be injected to all of the platform's windows.
 * _note_: this option is only applied to windows that use the Default OpenFin Window.
 * Windows with a specified url (Custom Windows) will not be affected by this option.
 */
/**
 * Snapshot interface
 * @typedef { object } Snapshot
 * @property { WindowOption[] } windows The array of window options objects
 */
/**
 * @lends Platform
 */
class PlatformModule extends base_1.Base {
    constructor(wire, channel) {
        super(wire);
        this._channel = channel;
        this._initializer = (...args) => this.wire.environment
            .getProviderInitializer()
            .then((initConstructor) => initConstructor(this.wire.environment)(...args));
        /**
         * @namespace
         * @desc Layouts give app providers the ability to embed multiple views in a single window.  The Layout namespace
         * enables the initialization and manipulation of a window's Layout.  A Layout will
         * <a href="tutorial-Layout.DOMEvents.html">emit events locally</a> on the DOM element representing the layout-container.
         */
        this.Layout = new index_1.LayoutModule(this.wire);
    }
    /**
     * Initializes a Platform. Must be called from the Provider when using a custom provider.
     * @param { InitPlatformOptions } [options] - platform options including a callback function that can be used to extend or replace
     * default Provider behavior.
     * @return {Promise.<void>}
     * @tutorial Platform.init
     * @experimental
     * @static
     */
    async init(options) {
        const overrideCallback = options === null || options === void 0 ? void 0 : options.overrideCallback;
        const interopBroker = await this.fin.Interop.init(this.fin.me.uuid, options === null || options === void 0 ? void 0 : options.interopOverride);
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore debugging purposes
        window.interopBroker = interopBroker;
        return this._initializer(overrideCallback, interopBroker);
    }
    /**
     * Asynchronously returns a Platform object that represents an existing platform.
     * @param { Identity } identity
     * @return {Promise.<Platform>}
     * @tutorial Platform.wrap
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('platform-wrap').catch((e) => {
            // don't expose
        });
        return new Instance_1.Platform({ uuid: identity.uuid }, this._channel);
    }
    /**
     * Synchronously returns a Platform object that represents an existing platform.
     * @param { Identity } identity
     * @return {Platform}
     * @tutorial Platform.wrapSync
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('platform-wrap-sync').catch((e) => {
            // don't expose
        });
        return new Instance_1.Platform({ uuid: identity.uuid }, this._channel);
    }
    /**
     * Asynchronously returns a Platform object that represents the current platform.
     * @return {Promise.<Platform>}
     * @tutorial Platform.getCurrent
     * @static
     */
    async getCurrent() {
        this.wire.sendAction('platform-get-current').catch((e) => {
            // don't expose
        });
        return this.wrap({ uuid: this.wire.me.uuid });
    }
    /**
     * Synchronously returns a Platform object that represents the current platform.
     * @return {Platform}
     * @tutorial Platform.getCurrentSync
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('platform-get-current-sync').catch((e) => {
            // don't expose
        });
        return this.wrapSync({ uuid: this.wire.me.uuid });
    }
    /**
     * Creates and starts a Platform and returns a wrapped and running Platform instance. The wrapped Platform methods can
     * be used to launch content into the platform.  Promise will reject if the platform is already running.
     * @param { PlatformOptions } platformOptions
     * @return {Promise.<Platform>}
     * @tutorial Platform.start
     * @static
     */
    start(platformOptions) {
        this.wire.sendAction('platform-start').catch((e) => {
            // don't expose
        });
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                const { uuid } = platformOptions;
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore using private variable.
                const app = await this.fin.Application._create({ ...platformOptions, isPlatformController: true });
                app.once('platform-api-ready', () => resolve(this.wrapSync({ uuid })));
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore using private variable.
                app._run({ uuid });
            }
            catch (e) {
                reject(e);
            }
        });
    }
    /**
     * Retrieves platforms's manifest and returns a wrapped and running Platform.  If there is a snapshot in the manifest,
     * it will be launched into the platform.
     * @param {string} manifestUrl - The URL of platform's manifest.
     * @param {RvmLaunchOptions} [opts] - Parameters that the RVM will use.
     * @return {Promise.<Platform>}
     * @tutorial Platform.startFromManifest
     * @static
     */
    startFromManifest(manifestUrl, opts) {
        this.wire.sendAction('platform-start-from-manifest').catch((e) => {
            // don't expose
        });
        // eslint-disable-next-line no-async-promise-executor
        return new Promise(async (resolve, reject) => {
            try {
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore using private variable.
                const app = await this.fin.Application._createFromManifest(manifestUrl);
                app.once('platform-api-ready', () => resolve(this.wrapSync({ uuid: app.identity.uuid })));
                // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
                // @ts-ignore using private method without warning.
                app._run(opts);
            }
            catch (e) {
                reject(e);
            }
        });
    }
}
exports["default"] = PlatformModule;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/platform/Instance.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/Instance.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _connectToProvider;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Platform = void 0;
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/openfin-adapter/src/util/validate.js");
const Platform_1 = __webpack_require__(/*! ../../shapes/Platform */ "../../node_modules/openfin-adapter/src/shapes/Platform.js");
// Reuse clients to avoid overwriting already-registered client in provider
const clientMap = new Map();
/** Manages the life cycle of windows and views in the application.
 *
 * Enables taking snapshots of itself and applying them to restore a previous configuration
 * as well as listen to <a href="tutorial-Platform.EventEmitter.html">platform events</a>.
 * @namespace
 */
class Platform extends base_1.EmitterBase {
    // eslint-disable-next-line no-shadow
    constructor(identity, channel) {
        // we piggyback off of application event emitter because from the core's perspective platform is just an app.
        super(channel.wire, ['application', identity.uuid]);
        this.getClient = (identity) => {
            this.wire.sendAction('platform-get-client', this.identity).catch((e) => {
                // don't expose
            });
            const target = identity || this.identity;
            const { uuid } = target;
            if (!clientMap.has(uuid)) {
                const clientPromise = __classPrivateFieldGet(this, _connectToProvider).call(this, uuid);
                clientMap.set(uuid, clientPromise);
            }
            // we set it above
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            return clientMap.get(uuid);
        };
        _connectToProvider.set(this, async (uuid) => {
            try {
                const channelName = `custom-frame-${uuid}`;
                const client = await this._channel.connect(channelName, { wait: false });
                client.onDisconnection(() => {
                    clientMap.delete(uuid);
                });
                return client;
            }
            catch (e) {
                clientMap.delete(uuid);
                throw new Error('The targeted Platform is not currently running. Listen for application-started event for the given Uuid.');
            }
        });
        // Deprecated (renamed)
        this.launchLegacyManifest = this.launchContentManifest;
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        this._channel = channel;
        this.identity = { uuid: identity.uuid };
        this.topic = 'application';
        this.Layout = this.fin.Platform.Layout;
        this.Application = this.fin.Application.wrapSync(this.identity);
    }
    /**
     * Creates a new view and attaches it to a specified target window.
     * @param { View~options } viewOptions View creation options
     * @param { Identity } [target] The window to which the new view is to be attached. If no target, create a view in a new window.
     * @param { Identity } [targetView] If provided, the new view will be added to the same tabstrip as targetView.
     * @return { Promise<View> }
     * @tutorial Platform.createView
     */
    async createView(viewOptions, target, targetView) {
        this.wire.sendAction('platform-create-view', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        const response = await client.dispatch('create-view', {
            target,
            opts: viewOptions,
            targetView
        });
        if (!response || validate_1.validateIdentity(response.identity)) {
            throw new Error(`When overwriting the createView call, please return an object that has a valid 'identity' property: ${JSON.stringify(response)}`);
        }
        return this.fin.View.wrapSync(response.identity);
    }
    /**
     * Creates a new Window.
     * @param { Window~options } options Window creation options
     * @return { Promise<_Window> }
     * @tutorial Platform.createWindow
     */
    async createWindow(options) {
        this.wire.sendAction('platform-create-window', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        if (!options.reason) {
            options.reason = Platform_1.WindowCreationReason.APICall;
        }
        const response = await client.dispatch('create-view-container', options);
        if (!response || validate_1.validateIdentity(response.identity)) {
            throw new Error(`When overwriting the createWindow call, please return an object that has a valid 'identity' property: ${JSON.stringify(response)}`);
        }
        const { identity } = response;
        const res = this.fin.Window.wrapSync(identity);
        // we add the identity at the top level for backwards compatibility.
        res.name = identity.name;
        res.uuid = identity.uuid;
        return res;
    }
    /**
     * Closes current platform, all its windows, and their views.
     * @return { Promise<void> }
     * @tutorial Platform.quit
     */
    async quit() {
        this.wire.sendAction('platform-quit', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        return client.dispatch('quit');
    }
    /**
     * Closes a specified view in a target window.
     * @param { Identity } viewIdentity View identity
     * @return { Promise<void> }
     * @tutorial Platform.closeView
     */
    async closeView(viewIdentity) {
        this.wire.sendAction('platform-close-view', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        await client.dispatch('close-view', {
            view: viewIdentity
        });
    }
    /**
     * ***DEPRECATED - please use Platform.createView.***
     * Reparents a specified view in a new target window.
     * @param { Identity } viewIdentity View identity
     * @param { Identity } target new owner window identity
     * @return { Promise<View> }
     * @tutorial Platform.createView
     */
    async reparentView(viewIdentity, target) {
        var _a;
        // eslint-disable-next-line no-console
        console.warn('Platform.reparentView has been deprecated, please use Platform.createView');
        this.wire.sendAction('platform-reparent-view', this.identity).catch((e) => {
            // don't expose
        });
        const normalizedViewIdentity = {
            ...viewIdentity,
            uuid: (_a = viewIdentity.uuid) !== null && _a !== void 0 ? _a : this.identity.uuid
        };
        const view = await this.fin.View.wrap(normalizedViewIdentity);
        const viewOptions = await view.getOptions();
        return this.createView(viewOptions, target);
    }
    /**
     * Returns a snapshot of the platform in its current state.
     *
     * Can be used to restore an application to a previous state.
     * @return { Promise<Snapshot> }
     * @tutorial Platform.getSnapshot
     */
    async getSnapshot() {
        this.wire.sendAction('platform-get-snapshot', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        return client.dispatch('get-snapshot');
    }
    /**
     * Adds a snapshot to a running Platform.
     * Requested snapshot must be a valid Snapshot object, or a url or filepath to such an object.
     *
     * Can optionally close existing windows and overwrite current platform state with that of a snapshot.
     *
     * The function accepts either a snapshot taken using {@link Platform#getSnapshot getSnapshot},
     * or a url or filepath to a snapshot JSON object.
     * @param { Snapshot | string } requestedSnapshot Snapshot to apply, or a url or filepath.
     * @param { ApplySnapshotOptions } [options] Optional parameters to specify whether existing windows should be closed.
     * @return { Promise<Platform> }
     * @tutorial Platform.applySnapshot
     */
    async applySnapshot(requestedSnapshot, options) {
        this.wire.sendAction('platform-apply-snapshot', this.identity).catch((e) => {
            // don't expose
        });
        const errMsg = 'Requested snapshot must be a valid Snapshot object, or a url or filepath to such an object.';
        let snapshot;
        if (typeof requestedSnapshot === 'string') {
            // Fetch and parse snapshot
            try {
                const response = await this._channel.wire.sendAction('get-application-manifest', {
                    manifestUrl: requestedSnapshot
                });
                snapshot = response.payload.data;
            }
            catch (err) {
                throw new Error(`${errMsg}: ${err}`);
            }
        }
        else {
            snapshot = requestedSnapshot;
        }
        if (!snapshot.windows) {
            throw new Error(errMsg);
        }
        const client = await this.getClient();
        await client.dispatch('apply-snapshot', {
            snapshot,
            options
        });
        return this;
    }
    /**
     * Fetches a JSON manifest using the browser process and returns a Javascript object.
     * Can be overwritten using {@link Platform#init Platform.init}.
     * @param { string } manifestUrl The URL of the manifest to fetch.
     * @return { Promise<any> }
     * @tutorial Platform.fetchManifest
     */
    async fetchManifest(manifestUrl) {
        const client = await this.getClient();
        return client.dispatch('platform-fetch-manifest', { manifestUrl });
    }
    /**
     * Retrieves a manifest by url and launches a legacy application manifest or snapshot into the platform.  Returns a promise that
     * resolves to the wrapped Platform.
     * @param {string} manifestUrl - The URL of the manifest that will be launched into the platform.  If this app manifest
     * contains a snapshot, that will be launched into the platform.  If not, the application described in startup_app options
     * will be launched into the platform. The applicable startup_app options will become {@link View~options View Options}.
     * @return {Promise<Platform>}
     * @tutorial Platform.launchContentManifest
     * @experimental
     */
    async launchContentManifest(manifestUrl) {
        this.wire.sendAction('platform-launch-content-manifest', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        const manifest = await this.fetchManifest(manifestUrl);
        client.dispatch('launch-into-platform', { manifest });
        return this;
    }
    /**
     * Set the context of a host window. The context will be available to the window itself, and to its child Views. It will be saved in any platform snapshots.
     * It can be retrieved using {@link Platform#getWindowContext getWindowContext}.
     * @param {any} context - A field where serializable context data can be stored to be saved in platform snapshots.
     * @param {Identity} [target] - A target window or view may optionally be provided. If no target is provided, the update will be applied
     * to the current window (if called from a Window) or the current host window (if called from a View).
     * @return {Promise<void>}
     * @tutorial Platform.setWindowContext
     * @experimental
     */
    async setWindowContext(context = {}, target) {
        this.wire.sendAction('platform-set-window-context', this.identity).catch((e) => {
            // don't expose
        });
        if (!context) {
            throw new Error('Please provide a serializable object or string to set the context.');
        }
        const client = await this.getClient();
        const { entityType } = target ? await this.fin.System.getEntityInfo(target.uuid, target.name) : this.fin.me;
        await client.dispatch('set-window-context', {
            context,
            entityType,
            target: target || { uuid: this.fin.me.uuid, name: this.fin.me.name }
        });
    }
    /**
     * Get the context context of a host window that was previously set using {@link Platform#setWindowContext setWindowContext}.
     * The context will be saved in any platform snapshots.  Returns a promise that resolves to the context.
     * @param {Identity} [target] - A target window or view may optionally be provided. If no target is provided, target will be
     * the current window (if called from a Window) or the current host window (if called from a View).
     * @return {Promise<any>}
     * @tutorial Platform.getWindowContext
     * @experimental
     */
    async getWindowContext(target) {
        this.wire.sendAction('platform-get-window-context', this.identity).catch((e) => {
            // don't expose
        });
        const client = await this.getClient();
        const { entityType } = target ? await this.fin.System.getEntityInfo(target.uuid, target.name) : this.fin.me;
        return client.dispatch('get-window-context', {
            target: target || { uuid: this.fin.me.uuid, name: this.fin.me.name },
            entityType
        });
    }
}
exports.Platform = Platform;
_connectToProvider = new WeakMap();


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/platform/common-utils.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/common-utils.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isValidPresetType = void 0;
function isValidPresetType(type) {
    switch (type) {
        case "columns" /* columns */:
        case "grid" /* grid */:
        case "rows" /* rows */:
        case "tabs" /* tabs */:
            return true;
        default:
            return false;
    }
}
exports.isValidPresetType = isValidPresetType;
exports["default"] = { isValidPresetType };


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/platform/index.js":
/*!********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/index.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/platform/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/platform/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/platform/layout/Factory.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/layout/Factory.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var _layoutManager;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LayoutModule = void 0;
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/platform/layout/Instance.js");
const base_1 = __webpack_require__(/*! ../../base */ "../../node_modules/openfin-adapter/src/api/base.js");
/**
 * InitLayoutOptions interface
 * @typedef { object } InitLayoutOptions
 * @property { string } [containerId] The id attribute of the container where the window's Layout should be initialized.  If not provided
 * then an element with id `layout-container` is used. We recommend using a div element.
 */
/**
 * PresetLayoutOptions interface
 * @typedef { object } PresetLayoutOptions
 * @property { LayoutPresetTypes } presetType Which preset layout arrangement to use.
 * The preset options are `columns`, `grid`, `rows`, and `tabs`.
 */
/**
 * LayoutConfig interface
 * @typedef { object } LayoutConfig
 * @property { Array<LayoutItem> } content Content of the layout.  There can only be one top-level LayoutItem in the content array.
 * We do not recommend trying to build Layouts or LayoutItems by hand and instead use calls such as {@link Platform#getSnapshot getSnapshot}
 * or our {@link https://openfin.github.io/golden-prototype/config-gen Layout Config Generation Tool }.
 * @property { LayoutSettings } settings Configuration for certain Layout behaviors. See the LayoutSettings interface.
 */
/**
 * LayoutItem Interface
 * @typedef { object } LayoutItem Represents the arrangement of Views within a Platform window's Layout.  We do not recommend trying
 * to build Layouts or LayoutItems by hand and instead use calls such as {@link Platform#getSnapshot getSnapshot} or our
 * {@link https://openfin.github.io/golden-prototype/config-gen Layout Config Generation Tool }.
 * @property { string } type The type of the item. Possible values are 'row', 'column', 'stack', and 'component'.
 * @property { Array<LayoutItem> } [content] An array of configurations for items that will be created as children of this item.
 * @property { string } [componentName] Only a `component` type will have this property and it should be set to `view`.
 * @property { View~options } [componentState] Only a `component` type will have this property and it represents the view
 * options of a given component.
 */
/**
 * LayoutSettings Interface
 * @typedef { object } LayoutSettings Represents a potential ways to customize behavior of your Layout
 * @property { boolean } [constrainDragToHeaders=false] Limits the area to which tabs can be dragged.
 * If true, stack headers are the only areas where tabs can be dropped.
 * @property { boolean } [hasHeaders=true] Turns tab headers on or off.
 * If false, the layout will be displayed with splitters only.
 * @property {object} [newTabButton]
 * Configuration of the Plus button that appears on each tabstrip. Upon pressing, a new tab
 * will be added to the tabstrip with the specified url.
 * @property {string} [newTabButton.url] Specifies the url that opens in the tab created upon pressing the button.
 * @property { boolean } [popoutWholeStack=false] Whether the popout button will only act on the entire stack,
 * as opposed to only the active tab.
 * @property { boolean } [preventDragIn=false] If true, tabs can't be dragged into the window.
 * @property { boolean } [preventDragOut=false] If true, tabs can't be dragged out of the window.
 * @property { boolean } [reorderEnabled=true] If true, the user can re-arrange the layout by
 * dragging items by their tabs to the desired location.
 * @property { boolean } [showCloseIcon=false] Whether to show the close button on stack header
 * (not to be confused with close button on every tab).
 * @property { boolean } [showMaximiseIcon=false] Whether to show the maximize button on stack header.
 * The button will maximize the current tab to fill the entire window.
 * @property { boolean } [showPopoutIcon=false] Whether to show the popout button on stack header.
 * The button will create a new window with current tab as its content.
 * In case `popoutWholeStack` is set to true, all tabs in the stack will be in the new window.
 */
/**
 * @lends Platform#Layout
 */
class LayoutModule extends base_1.Base {
    constructor() {
        super(...arguments);
        _layoutManager.set(this, void 0);
        /**
         * Initialize the window's Layout.  Must be called from a custom window that has a 'layout' option set upon creation of that window.
         * If a containerId is not provided, this method attempts to find an element with the id `layout-container`.
         * A Layout will <a href="tutorial-Layout.DOMEvents.html">emit events locally</a> on the DOM element representing the layout-container.
         * In order to capture the relevant events during Layout initiation, set up the listeners on the DOM element prior to calling `init`.
         * @param { InitLayoutOptions } [options] - Layout init options.
         * @return { Promise<Layout> }
         * @static
         * @experimental
         * @tutorial Layout.init
         */
        this.init = async (options = {}) => {
            this.wire.sendAction('layout-init').catch((e) => {
                // don't expose
            });
            if (!this.fin.me.isWindow) {
                throw new Error('Layout.init can only be called from a Window context.');
            }
            else if (__classPrivateFieldGet(this, _layoutManager)) {
                throw new Error('Layout for this window already initialized, please use Layout.replace call to replace the layout.');
            }
            // We need to go through environment to make sure it is only imported/bundled in OpenFin.
            const ManagerConstructor = await this.wire.environment.getManagerConstructor();
            __classPrivateFieldSet(this, _layoutManager, new ManagerConstructor());
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore - layout warning here for backwards compatibility, can remove layout check in .52
            let { layout, containerId } = options;
            if (layout) {
                console.warn(`We recommend using a layout in window options.
                This layout has not been sanitized and unexpected behavior can occur.`);
            }
            layout = layout || (await this.fin.Window.getCurrentSync().getOptions()).layout;
            containerId = containerId || 'layout-container';
            const container = document.getElementById(containerId);
            // Should we error here if there is no container? Getting a typescript complaint on createLayout
            // override here
            // pull createChannelConnection out of LayoutManager and setup channel connections here using layoutmanager instance methods?
            await __classPrivateFieldGet(this, _layoutManager).initManager();
            await __classPrivateFieldGet(this, _layoutManager).createLayout(layout, container);
            // Adding this to the returned instance undocumented/typed for Browser.
            return Object.assign(this.getCurrentSync(), { layoutManager: __classPrivateFieldGet(this, _layoutManager) });
        };
    }
    /**
     * Asynchronously returns a Layout object that represents a Window's layout.
     * @param { Identity } identity
     * @return {Promise.<Layout>}
     * @tutorial Layout.wrap
     * @static
     */
    // eslint-disable-next-line class-methods-use-this
    async wrap(identity) {
        this.wire.sendAction('layout-wrap').catch((e) => {
            // don't expose
        });
        return new Instance_1.Layout(identity, this.wire);
    }
    /**
     * Synchronously returns a Layout object that represents a Window's layout.
     * @param { Identity } identity
     * @return {Layout}
     * @tutorial Layout.wrapSync
     * @static
     */
    // eslint-disable-next-line class-methods-use-this
    wrapSync(identity) {
        this.wire.sendAction('layout-wrap-sync').catch((e) => {
            // don't expose
        });
        return new Instance_1.Layout(identity, this.wire);
    }
    /**
     * Asynchronously returns a Layout object that represents a Window's layout.
     * @return {Promise.<Layout>}
     * @tutorial Layout.getCurrent
     * @static
     */
    async getCurrent() {
        this.wire.sendAction('layout-get-current').catch((e) => {
            // don't expose
        });
        if (!this.fin.me.isWindow) {
            throw new Error('You are not in a Window context.  Only Windows can have a Layout.');
        }
        const { uuid, name } = this.fin.me;
        return this.wrap({ uuid, name });
    }
    /**
     * Synchronously returns a Layout object that represents a Window's layout.
     * @return {Layout}
     * @tutorial Layout.getCurrentSync
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('layout-get-current-sync').catch((e) => {
            // don't expose
        });
        if (!this.fin.me.isWindow) {
            throw new Error('You are not in a Window context.  Only Windows can have a Layout.');
        }
        const { uuid, name } = this.fin.me;
        return this.wrapSync({ uuid, name });
    }
}
exports.LayoutModule = LayoutModule;
_layoutManager = new WeakMap();


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/platform/layout/Instance.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/layout/Instance.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

/* eslint-disable no-undef, import/prefer-default-export */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Layout = void 0;
const validate_1 = __webpack_require__(/*! ../../../util/validate */ "../../node_modules/openfin-adapter/src/util/validate.js");
const common_utils_1 = __webpack_require__(/*! ../common-utils */ "../../node_modules/openfin-adapter/src/api/platform/common-utils.js");
const base_1 = __webpack_require__(/*! ../../base */ "../../node_modules/openfin-adapter/src/api/base.js");
/**
 * @lends Platform#Layout
 */
class Layout extends base_1.Base {
    // eslint-disable-next-line no-shadow
    constructor(identity, wire) {
        super(wire);
        /**
         * Replaces a Platform window's layout with a new layout.  Any views that were in the old layout but not the new layout
         * will be destroyed.
         * @param { LayoutConfig } layout New layout to implement in the target window.
         * Please see explanation of a layout {@link https://developers.openfin.co/docs/platform-api#section-layout here}.
         * @return { Promise<void> }
         * @tutorial Layout.replace
         */
        this.replace = async (layout) => {
            this.wire.sendAction('layout-replace').catch((e) => {
                // don't expose
            });
            const client = await this.platform.getClient();
            await client.dispatch('replace-layout', {
                target: this.identity,
                opts: { layout }
            });
        };
        /**
         * Replaces the specified view with a view with the provided configuration.
         * The old view is stripped of its listeners and either closed or attached to the provider window
         * depending on `detachOnClose` view option.
         * @param { Identity } viewToReplace Identity of the view to be replaced
         * @param { View~options } newView Creation options of the new view.
         * @return { Promise<void> }
         * @tutorial Layout.replaceView
         */
        this.replaceView = async (viewToReplace, newView) => {
            this.wire.sendAction('layout-replace-view').catch((e) => {
                // don't expose
            });
            const client = await this.platform.getClient();
            await client.dispatch('replace-view', {
                target: this.identity,
                opts: { viewToReplace, newView }
            });
        };
        /**
         * Replaces a Platform window's layout with a preset layout arrangement using the existing Views attached to the window.
         * The preset options are `columns`, `grid`, `rows`, and `tabs`.
         * @param { PresetLayoutOptions } options Mandatory object with `presetType` property that sets which preset layout arrangement to use.
         * The preset options are `columns`, `grid`, `rows`, and `tabs`.
         * @return { Promise<void> }
         * @tutorial Layout.applyPreset
         */
        this.applyPreset = async (options) => {
            this.wire.sendAction('layout-apply-preset').catch((e) => {
                // don't expose
            });
            const client = await this.platform.getClient();
            const { presetType } = options;
            if (!presetType || !common_utils_1.isValidPresetType(presetType)) {
                throw new Error('Cannot apply preset layout, please include an applicable presetType property in the PresetLayoutOptions.');
            }
            await client.dispatch('apply-preset-layout', {
                target: this.identity,
                opts: { presetType }
            });
        };
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        this.identity = identity;
        this.platform = this.fin.Platform.wrapSync({ uuid: identity.uuid });
        if (identity.uuid === this.fin.me.uuid && identity.name === this.fin.me.name) {
            this.init = this.fin.Platform.Layout.init;
        }
    }
    /**
     * Returns the configuration of the window's layout.  Returns the same information that is returned for all windows in getSnapshot.
     * @return { Promise<LayoutConfig> }
     * @tutorial Layout.getConfig
     */
    async getConfig() {
        this.wire.sendAction('layout-get-config').catch((e) => {
            // don't expose
        });
        const client = await this.platform.getClient();
        return client.dispatch('get-frame-snapshot', {
            target: this.identity
        });
    }
}
exports.Layout = Layout;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/platform/layout/index.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/layout/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/platform/layout/Factory.js"), exports);
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/platform/layout/Instance.js"), exports);
__exportStar(__webpack_require__(/*! ./shapes */ "../../node_modules/openfin-adapter/src/api/platform/layout/shapes.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/platform/layout/shapes.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/platform/layout/shapes.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/snapshot-source/Factory.js":
/*!*****************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/snapshot-source/Factory.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/snapshot-source/Instance.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/openfin-adapter/src/api/snapshot-source/utils.js");
/**
 * @typedef { object } SnapshotProvider
 * @property {getSnapshot} [getSnapshot]
 * @property {applySnapshot} [applySnapshot]
 */
/**
 * @lends SnapshotSource
 */
class SnapshotSourceModule extends base_1.Base {
    /**
     * Initializes a SnapshotSource with the getSnapshot and applySnapshot methods defined.
     * @param { SnapshotProvider } provider
     * @return { Promise<void> }
     * @tutorial SnapshotSource.init
     * @static
     */
    async init(provider) {
        this.wire.sendAction('snapshot-source-init').catch((e) => {
            // don't expose, analytics-only call
        });
        if (typeof provider !== 'object' ||
            typeof provider.getSnapshot !== 'function' ||
            typeof provider.applySnapshot !== 'function') {
            throw new Error('you must pass in a valid SnapshotProvider');
        }
        const channel = await this.fin.InterApplicationBus.Channel.create(utils_1.getSnapshotSourceChannelName(fin.me.identity));
        channel.register("get-snapshot" /* GET_SNAPSHOT */, async () => {
            const snapshot = await provider.getSnapshot();
            return { snapshot };
        });
        channel.register("apply-snapshot" /* APPLY_SNAPSHOT */, ({ snapshot }) => provider.applySnapshot(snapshot));
    }
    /**
     * Synchronously returns a SnapshotSource object that represents the current SnapshotSource.
     * @param { Identity } identity
     * @return { SnapshotSource }
     * @tutorial SnapshotSource.wrapSync
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('snapshot-source-wrap-sync').catch((e) => {
            // don't expose, analytics-only call
        });
        return new Instance_1.SnapshotSource(this.wire, identity);
    }
    /**
     * Asynchronously returns a SnapshotSource object that represents the current SnapshotSource.
     * @param { Identity } identity
     * @return { Promise.<SnapshotSource> }
     * @tutorial SnapshotSource.wrap
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('snapshot-source-wrap').catch((e) => {
            // don't expose, analytics-only call
        });
        return this.wrapSync(identity);
    }
}
exports["default"] = SnapshotSourceModule;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/snapshot-source/Instance.js":
/*!******************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/snapshot-source/Instance.js ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _identity, _getConnection, _getClient, _startConnection, _setUpConnectionListener;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SnapshotSource = void 0;
/* eslint-disable @typescript-eslint/no-non-null-assertion */
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const utils_1 = __webpack_require__(/*! ./utils */ "../../node_modules/openfin-adapter/src/api/snapshot-source/utils.js");
const connectionMap = new Map();
/**
 * Enables configuring a SnapshotSource with custom getSnapshot and applySnapshot methods.
 * @namespace
 */
class SnapshotSource extends base_1.Base {
    constructor(wire, id) {
        super(wire);
        _identity.set(this, void 0);
        _getConnection.set(this, () => {
            if (!connectionMap.has(this.identity.uuid)) {
                connectionMap.set(this.identity.uuid, { eventFired: null, clientPromise: null });
            }
            return connectionMap.get(this.identity.uuid);
        });
        _getClient.set(this, () => {
            if (!__classPrivateFieldGet(this, _getConnection).call(this).clientPromise) {
                __classPrivateFieldGet(this, _getConnection).call(this).clientPromise = __classPrivateFieldGet(this, _startConnection).call(this);
            }
            return __classPrivateFieldGet(this, _getConnection).call(this).clientPromise;
        });
        _startConnection.set(this, async () => {
            const channelName = utils_1.getSnapshotSourceChannelName(this.identity);
            try {
                if (!__classPrivateFieldGet(this, _getConnection).call(this).eventFired) {
                    await __classPrivateFieldGet(this, _setUpConnectionListener).call(this);
                }
                const client = await this.fin.InterApplicationBus.Channel.connect(channelName, { wait: false });
                client.onDisconnection(() => {
                    __classPrivateFieldGet(this, _getConnection).call(this).clientPromise = null;
                    __classPrivateFieldGet(this, _getConnection).call(this).eventFired = null;
                });
                return client;
            }
            catch (e) {
                __classPrivateFieldGet(this, _getConnection).call(this).clientPromise = null;
                throw new Error("The targeted SnapshotSource is not currently initialized. Await this object's ready() method.");
            }
        });
        _setUpConnectionListener.set(this, async () => {
            const channelName = utils_1.getSnapshotSourceChannelName(this.identity);
            let resolve;
            let reject;
            const eventFired = new Promise((y, n) => {
                resolve = y;
                reject = n;
            });
            __classPrivateFieldGet(this, _getConnection).call(this).eventFired = eventFired;
            const listener = async (e) => {
                try {
                    if (e.channelName === channelName) {
                        resolve();
                        await this.fin.InterApplicationBus.Channel.removeListener('connected', listener);
                    }
                }
                catch (err) {
                    reject(err);
                }
            };
            await this.fin.InterApplicationBus.Channel.on('connected', listener);
        });
        __classPrivateFieldSet(this, _identity, id);
    }
    get identity() {
        return __classPrivateFieldGet(this, _identity);
    }
    /**
     * Method to determine if the SnapshotSource has been initialized.
     *
     * Use when the parent application is starting up to ensure the SnapshotSource is able to accept and
     * apply a snapshot using the {@link SnapshotSource#applySnapshot applySnapshot} method.
     * @return { Promise<void> }
     * @tutorial SnapshotSource.ready
     */
    async ready() {
        this.wire.sendAction('snapshot-source-ready').catch((e) => {
            // don't expose, analytics-only call
        });
        // eslint-disable-next-line no-async-promise-executor
        try {
            // If getClient was already called before this, do we have a timing issue where the channel might have been created but we missed the event but this still fails?
            await __classPrivateFieldGet(this, _getClient).call(this);
        }
        catch (e) {
            // it was not running.
            await __classPrivateFieldGet(this, _getConnection).call(this).eventFired;
        }
    }
    /**
     * Call the SnapshotSource's getSnapshot method defined by {@link SnapshotSource#init init}.
     * @return { Promise<any> }
     */
    async getSnapshot() {
        this.wire.sendAction('snapshot-source-get-snapshot').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _getClient).call(this);
        const response = (await client.dispatch("get-snapshot" /* GET_SNAPSHOT */));
        return (await response).snapshot;
    }
    /**
     * Call the SnapshotSource's applySnapshot method defined by {@link SnapshotSource#init init}.
     * @return { Promise<void> }
     */
    async applySnapshot(snapshot) {
        this.wire.sendAction('snapshot-source-apply-snapshot').catch((e) => {
            // don't expose, analytics-only call
        });
        const client = await __classPrivateFieldGet(this, _getClient).call(this);
        return client.dispatch("apply-snapshot" /* APPLY_SNAPSHOT */, { snapshot });
    }
}
exports.SnapshotSource = SnapshotSource;
_identity = new WeakMap(), _getConnection = new WeakMap(), _getClient = new WeakMap(), _startConnection = new WeakMap(), _setUpConnectionListener = new WeakMap();


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/snapshot-source/index.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/snapshot-source/index.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/snapshot-source/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/snapshot-source/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/snapshot-source/utils.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/snapshot-source/utils.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SnapshotSourceActions = exports.getSnapshotSourceChannelName = void 0;
const channelPrefix = 'snapshot-source-provider-';
exports.getSnapshotSourceChannelName = (id) => `${channelPrefix}${id.uuid}`;
var SnapshotSourceActions;
(function (SnapshotSourceActions) {
    SnapshotSourceActions["GET_SNAPSHOT"] = "get-snapshot";
    SnapshotSourceActions["APPLY_SNAPSHOT"] = "apply-snapshot";
})(SnapshotSourceActions = exports.SnapshotSourceActions || (exports.SnapshotSourceActions = {}));


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/system/index.js":
/*!******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/system/index.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const transport_errors_1 = __webpack_require__(/*! ../../transport/transport-errors */ "../../node_modules/openfin-adapter/src/transport/transport-errors.js");
const window_1 = __webpack_require__(/*! ../window */ "../../node_modules/openfin-adapter/src/api/window/index.js");
/**
 * AppAssetInfo interface
 * @typedef { object } AppAssetInfo
 * @property { string } src  The URL to a zip file containing the package files (executables, dlls, etc…)
 * @property { string } alias The name of the asset
 * @property { string } version The version of the package
 * @property { string } target Specify default executable to launch. This option can be overridden in launchExternalProcess
 * @property { string } args The default command line arguments for the aforementioned target.
 * @property { boolean } mandatory When set to true, the app will fail to load if the asset cannot be downloaded.
 * When set to false, the app will continue to load if the asset cannot be downloaded. (Default: true)
 */
/**
 * AppAssetRequest interface
 * @typedef { object } AppAssetRequest
 * @property { string } alias The name of the asset
 */
/**
 * ApplicationInfo interface
 * @typedef { object } ApplicationInfo
 * @property { boolean } isPlatform true when the application is a Platform controller
 * @property { boolean } isRunning  true when the application is running
 * @property { string } uuid uuid of the application
 * @property { string } parentUuid uuid of the application that launches this application
 */
/**
 * @typedef { object } ClearCacheOption
 * @summary Clear cache options.
 * @desc These are the options required by the clearCache function.
 *
 * @property {boolean} appcache html5 application cache
 * @property {boolean} cache browser data cache for html files and images
 * @property {boolean} cookies browser cookies
 * @property {boolean} localStorage browser data that can be used across sessions
 */
/**
 * CookieInfo interface
 * @typedef { object } CookieInfo
 * @property { string } name  The name of the cookie
 * @property { string } domain The domain of the cookie
 * @property { string } path The path of the cookie
 */
/**
 * CookieOption interface
 * @typedef { object } CookieOption
 * @property { string } name The name of the cookie
 */
/**
 * CpuInfo interface
 * @typedef { object } CpuInfo
 * @property { string } model The model of the cpu
 * @property { number } speed The number in MHz
 * @property { Time } times The numbers of milliseconds the CPU has spent in different modes.
 */
/**
 * CrashReporterState interface
 * @typedef { object } CrashReporterState
 * @property { boolean } diagnosticsMode In diagnostics mode the crash reporter will send diagnostic logs to
 *  the OpenFin reporting service on runtime shutdown
 * @property { boolean } isRunning check if it's running
 */
/**
 * CrashReporterOptions interface
 * @typedef { object } CrashReporterOptions
 * @property { boolean } diagnosticsMode In diagnostics mode the crash reporter will send diagnostic logs to
 *  the OpenFin reporting service on runtime shutdown
 */
/**
 * DipRect interface
 * @typedef { object } DipRect
 * @property { Rect } dipRect The DIP coordinates
 * @property { Rect } scaledRect The scale coordinates
 */
/**
 * DipScaleRects interface
 * @typedef { object } DipScaleRects
 * @property { Rect } dipRect The DIP coordinates
 * @property { Rect } scaledRect The scale coordinates
 */
/**
 * DownloadPreloadInfo interface
 * @typedef { object } DownloadPreloadInfo
 * @desc downloadPreloadScripts function return value
 * @property { string } url url to the preload script
 * @property { string } error error during preload script acquisition
 * @property { boolean } succeess download operation success
 */
/**
 * DownloadPreloadOption interface
 * @typedef { object } DownloadPreloadOption
 * @desc These are the options object required by the downloadPreloadScripts function
 * @property { string } url url to the preload script
 */
/**
 * Entity interface
 * @typedef { object } Entity
 * @property { string } type The type of the entity
 * @property { string } uuid The uuid of the entity
 */
/**
 * EntityInfo interface
 * @typedef { object } EntityInfo
 * @property { string } name The name of the entity
 * @property { string } uuid The uuid of the entity
 * @property { Identity } parent The parent of the entity
 * @property { string } entityType The type of the entity
 */
/**
 * ExternalApplicationInfo interface
 * @typedef { object } ExternalApplicationInfo
 * @property { Identity } parent The parent identity
 */
/**
 * ExternalConnection interface
 * @typedef { object } ExternalConnection
 * @property { string } token The token to broker an external connection
 * @property { string } uuid The uuid of the external connection
 */
/**
 * ExternalProcessRequestType interface
 * @typedef { object } ExternalProcessRequestType
 * @property { string } path The file path to where the running application resides
 * @property { string } arguments The argument passed to the running application
 * @property { LaunchExternalProcessListener } listener This is described in the {LaunchExternalProcessListner} type definition
 * @property { string } initialWindowState Initial window state after launching: 'normal' (default), 'minimized', 'maximized'
 * @property { string } cwd current working directory
 */
/**
 * FrameInfo interface
 * @typedef { object } FrameInfo
 * @property { string } name The name of the frame
 * @property { string } uuid The uuid of the frame
 * @property { EntityType } entityType The entity type, could be 'window', 'iframe', 'external connection' or 'unknown'
 * @property { Identity } parent The parent identity
 */
/**
 * GetLogRequestType interface
 * @typedef { object } GetLogRequestType
 * @property { string } name The name of the running application
 * @property { number } endFile The file length of the log file
 * @property { number } sizeLimit The set size limit of the log file
 */
/**
 * GpuInfo interface
 * @typedef { object } GpuInfo
 * @property { string } name The graphics card name
 */
/**
 * HostSpecs interface
 * @typedef { object } HostSpecs
 * @property { boolean } aeroGlassEnabled Value to check if Aero Glass theme is supported on Windows platforms
 * @property { string } arch "x86" for 32-bit or "x86_64" for 64-bit
 * @property { Array<CpuInfo> } cpus The same payload as Node's os.cpus()
 * @property { GpuInfo } gpu The graphics card name
 * @property { number } memory The same payload as Node's os.totalmem()
 * @property { string } name The OS name and version/edition
 * @property { boolean } screenSaver Value to check if screensaver is running. Supported on Windows only
 */
/**
 * Identity interface
 * @typedef { object } Identity
 * @property { string } name Optional - the name of the component
 * @property { string } uuid Universally unique identifier of the application
 */
/**
 * LogInfo interface
 * @typedef { object } LogInfo
 * @property { string } name The filename of the log
 * @property { number } size The size of the log in bytes
 * @property { string } date The unix time at which the log was created "Thu Jan 08 2015 14:40:30 GMT-0500 (Eastern Standard Time)"
 */
/**
 * ManifestInfo interface
 * @typedef { object } ManifestInfo
 * @property { string } uuid The uuid of the application
 * @property { string } manifestUrl The runtime manifest URL
 */
/**
 * MonitorDetails interface
 * @typedef { object } MonitorDetails
 * @property { DipScaleRects } available The available DIP scale coordinates
 * @property { Rect } availableRect The available monitor coordinates
 * @property { string } deviceId The device id of the display
 * @property { boolean } displayDeviceActive true if the display is active
 * @property { number } deviceScaleFactor The device scale factor
 * @property { Rect } monitorRect The monitor coordinates
 * @property { string } name The name of the display
 * @property { Point } dpi The dots per inch
 * @property { DipScaleRects } monitor The monitor coordinates
 */
/**
 * MonitorInfo interface
 * @typedef { object } MonitorInfo
 * @property { number } deviceScaleFactor The device scale factor
 * @property { Point } dpi The dots per inch
 * @property { Array<MonitorDetails> } nonPrimaryMonitors The array of monitor details
 * @property { MonitorDetails } primaryMonitor The monitor details
 * @property { string } reason always "api-query"
 * @property { TaskBar } taskBar The taskbar on monitor
 * @property { DipRect } virtualScreen The virtual display screen coordinates
 */
/**
 * @typedef { verbose | info | warning | error | fatal } LogLevel
 * @summary Log verbosity levels.
 * @desc Describes the minimum level (inclusive) above which logs will be written
 *
 * @property { string } verbose all logs written
 * @property { string } info info and above
 * @property { string } warning warning and above
 * @property { string } error error and above
 * @property { string } fatal fatal only, indicates a crash is imminent
 */
/**
 * PointTopLeft interface
 * @typedef { object } PointTopLeft
 * @property { number } top The mouse top position in virtual screen coordinates
 * @property { number } left The mouse left position in virtual screen coordinates
 */
/**
 * Point interface
 * @typedef { object } Point
 * @property { number } x The mouse x position
 * @property { number } y The mouse y position
 */
/**
 * ProcessInfo interface
 * @typedef { object } ProcessInfo
 * @property { number } cpuUsage The percentage of total CPU usage
 * @property { string } name The application name
 * @property { number } nonPagedPoolUsage The current nonpaged pool usage in bytes
 * @property { number } pageFaultCount The number of page faults
 * @property { number } pagedPoolUsage The current paged pool usage in bytes
 * @property { number } pagefileUsage The total amount of memory in bytes that the memory manager has committed
 * @property { number } peakNonPagedPoolUsage The peak nonpaged pool usage in bytes
 * @property { number } peakPagedPoolUsage The peak paged pool usage in bytes
 * @property { number } peakPagefileUsage The peak value in bytes of pagefileUsage during the lifetime of this process
 * @property { number } peakWorkingSetSize The peak working set size in bytes
 * @property { number } processId The native process identifier
 * @property { string } uuid The application UUID
 * @property { number } workingSetSize The current working set size (both shared and private data) in bytes
 */
/**
 * SystemProcessInfo interface
 * @typedef { object } SystemProcessInfo
 * @property { ProcessDetails } browserProcess Info on browser process
 * @property { Array<AppProcessInfo> } apps Array of apps and their process info
 */
/**
 * AppProcessInfo interface
 * @typedef { object } AppProcessInfo
 * @property { string } uuid The uuid of the application
 * @property { Array<EntityProcessDetails> } entities  Array of process info for each window and view for the application
 */
/**
 * EntityProcessDetails interface
 * @typedef { object } EntityProcessDetails
 * @property { string } uuid The uuid for the entity
 * @property { string } name The name for the entity
 * @property { string } url URL associated with the entity
 * @property { string } entityType Type for the entity: window or view
 * @property { number } cpuUsage The percentage of total CPU usage
 * @property { number } nonPagedPoolUsage The current nonpaged pool usage in bytes
 * @property { number } pageFaultCount The number of page faults
 * @property { number } pagedPoolUsage The current paged pool usage in bytes
 * @property { number } pagefileUsage The total amount of memory in bytes that the memory manager has committed
 * @property { number } peakNonPagedPoolUsage The peak nonpaged pool usage in bytes
 * @property { number } peakPagedPoolUsage The peak paged pool usage in bytes
 * @property { number } peakPagefileUsage The peak value in bytes of pagefileUsage during the lifetime of this process
 * @property { number } peakWorkingSetSize The peak working set size in bytes
 * @property { number } workingSetSize The current working set size (both shared and private data) in bytes
 * @property { number } pid The native process identifier
 * @property { Array<FrameProcessDetails> } frames Array of process info for each iframe corresponeding to the entity
 */
/**
 * FrameProcessDetails interface
 * @typedef { object } FrameProcessDetails
 * @property { string } url Current URL associated with the process
 * @property { string } entityType Type for the frame
 * @property { number } cpuUsage The percentage of total CPU usage
 * @property { number } nonPagedPoolUsage The current nonpaged pool usage in bytes
 * @property { number } pageFaultCount The number of page faults
 * @property { number } pagedPoolUsage The current paged pool usage in bytes
 * @property { number } pagefileUsage The total amount of memory in bytes that the memory manager has committed
 * @property { number } peakNonPagedPoolUsage The peak nonpaged pool usage in bytes
 * @property { number } peakPagedPoolUsage The peak paged pool usage in bytes
 * @property { number } peakPagefileUsage The peak value in bytes of pagefileUsage during the lifetime of this process
 * @property { number } peakWorkingSetSize The peak working set size in bytes
 * @property { number } workingSetSize The current working set size (both shared and private data) in bytes
 * @property { number } pid The native process identifier
 */
/**
 * ProcessDetails interface
 * @typedef { object } ProcessDetails
 * @property { number } cpuUsage The percentage of total CPU usage
 * @property { number } nonPagedPoolUsage The current nonpaged pool usage in bytes
 * @property { number } pageFaultCount The number of page faults
 * @property { number } pagedPoolUsage The current paged pool usage in bytes
 * @property { number } pagefileUsage The total amount of memory in bytes that the memory manager has committed
 * @property { number } peakNonPagedPoolUsage The peak nonpaged pool usage in bytes
 * @property { number } peakPagedPoolUsage The peak paged pool usage in bytes
 * @property { number } peakPagefileUsage The peak value in bytes of pagefileUsage during the lifetime of this process
 * @property { number } peakWorkingSetSize The peak working set size in bytes
 * @property { number } workingSetSize The current working set size (both shared and private data) in bytes
 * @property { number } pid The native process identifier
 */
/**
 * ProxyConfig interface
 * @typedef { object } ProxyConfig
 * @property { string } proxyAddress The configured proxy address
 * @property { number } proxyPort The configured proxy port
 * @property { string } type The proxy Type
 */
/**
 * ProxyInfo interface
 * @typedef { object } ProxyInfo
 * @property { ProxyConfig } config The proxy config
 * @property { ProxySystemInfo } system The proxy system info
 */
/**
 * QueryPermissionResult interface
 * @typedef { object } QueryPermissionResult
 * @property { string } permission The full name of a secured API
 * @property { string } state 'granted' | 'denied' | 'unavailable'
 * @property { boolean } granted true if permission is granted
 * @property { object } [rawValue] The value of permission
 */
/**
 * ProxySystemInfo interface
 * @typedef { object } ProxySystemInfo
 * @property { string } autoConfigUrl The auto configuration url
 * @property { string } bypass The proxy bypass info
 * @property { boolean } enabled Value to check if a proxy is enabled
 * @property { string } proxy The proxy info
 */
/**
 * Rect interface
 * @typedef { object } Rect
 * @property { number } bottom The bottom-most coordinate
 * @property { number } left The left-most coordinate
 * @property { number } right The right-most coordinate
 * @property { number } top The top-most coordinate
 */
/**
 * RegistryInfo interface
 * @typedef { object } RegistryInfo
 * @property { any } data The registry data
 * @property { string } rootKey The registry root key
 * @property { string } subkey The registry key
 * @property { string } type The registry type
 * @property { string } value The registry value name
 */
/**
 * RuntimeDownloadOptions interface
 * @typedef { object } RuntimeDownloadOptions
 * @desc These are the options object required by the downloadRuntime function.
 * @property { string } version The given version to download
 */
/**
 * RuntimeInfo interface
 * @typedef { object } RuntimeInfo
 * @property { string } architecture The runtime build architecture
 * @property { string } manifestUrl The runtime manifest URL
 * @property { number } port The runtime websocket port
 * @property { string } securityRealm The runtime security realm
 * @property { string } version The runtime version
 * @property { object } args the command line argument used to start the Runtime
 * @property { string } chromeVersion The chrome version
 * @property { string } electronVersion The electron version
 */
/**
 * RVMInfo interface
 * @typedef { object } RVMInfo
 * @property { string } action The name of action: "get-rvm-info"
 * @property { string } appLogDirectory The app log directory
 * @property { string } path The path of OpenfinRVM.exe
 * @property { string } 'start-time' The start time of RVM
 * @property { string } version The version of RVM
 * @property { string } 'working-dir' The working directory
 */
/**
 * RvmLaunchOptions interface
 * @typedef { object } RvmLaunchOptions
 * @property { boolean } [noUi] true if no UI when launching
 * @property { object } [userAppConfigArgs] The user app configuration args
 */
/**
 * ServiceIdentifier interface
 * @typedef { object } ServiceIdentifier
 * @property { string } name The name of the service
 */
/**
 * ServiceConfiguration interface
 * @typedef { object } ServiceConfiguration
 * @property { object } config The service configuration
 * @property { string } name The name of the service
 */
/**
 * ShortCutConfig interface
 * @typedef { object } ShortCutConfig
 * @property { boolean } desktop true if application has a shortcut on the desktop
 * @property { boolean } startMenu true if application has shortcut in the start menu
 * @property { boolean } systemStartup true if application will be launched on system startup
 */
/**
 * SubOptions interface
 * @typedef { Object } SubOptions
 * @property { number } timestamp The event timestamp
 */
/**
 * TaskBar interface
 * @typedef { object } TaskBar
 * @property { string } edge which edge of a monitor the taskbar is on
 * @property { Rect } rect The taskbar coordinates
 */
/**
 * TerminateExternalRequestType interface
 * @typedef { object } TerminateExternalRequestType
 * @property { string } uuid The uuid of the running application
 * @property { number } timeout Time out period before the running application terminates
 * @property { boolean } killtree Value to terminate the running application
 */
/**
 * Time interface
 * @typedef { object } Time
 * @property { number } user The number of milliseconds the CPU has spent in user mode
 * @property { number } nice The number of milliseconds the CPU has spent in nice mode
 * @property { number } sys The number of milliseconds the CPU has spent in sys mode
 * @property { number } idle The number of milliseconds the CPU has spent in idle mode
 * @property { number } irq The number of milliseconds the CPU has spent in irq mode
 */
/**
 * TrayInfo interface
 * @typedef { object } TrayInfo
 * @property { Bounds } bounds The bound of tray icon in virtual screen pixels
 * @property { MonitorInfo } monitorInfo Please see fin.System.getMonitorInfo for more information
 * @property { number } x copy of bounds.x
 * @property { number } y copy of bounds.y
 */
/**
 * WindowDetail interface
 * @typedef { object } WindowDetail
 * @property { number } bottom The bottom-most coordinate of the window
 * @property { number } height The height of the window
 * @property { boolean } isShowing Value to check if the window is showing
 * @property { number } left The left-most coordinate of the window
 * @property { string } name The name of the window
 * @property { number } right The right-most coordinate of the window
 * @property { string } state The window state
 * @property { number } top The top-most coordinate of the window
 * @property { number } width The width of the window
 */
/**
 * WindowInfo interface
 * @typedef { object } WindowInfo
 * @property { Array<WindowDetail> } childWindows The array of child windows details
 * @property { WindowDetail } mainWindow The main window detail
 * @property { string } uuid The uuid of the application
 */
/**
 * CertifiedAppInfo interface
 * @typedef { object } CertifiedAppInfo
 * @property { boolean } isRunning true if the app is running
 * @property { boolean } [isOptedIntoCertfiedApp] true if the app has opted into certification
 * @property { boolean } [isCertified] true if the app is certified
 * @property { boolean } [isSSLCertified] true if the app manifest's SSL certificate is valid
 * @property { boolean } [isPresentInAppDirectory] true if the app is present in the OpenFin app directory
 */
/**
 * An object representing the core of OpenFin Runtime. Allows the developer
 * to perform system-level actions, such as accessing logs, viewing processes,
 * clearing the cache and exiting the runtime as well as listen to <a href="tutorial-System.EventEmitter.html">system events</a>.
 * @namespace
 */
class System extends base_1.EmitterBase {
    constructor(wire) {
        super(wire, ['system']);
    }
    sendExternalProcessRequest(action, options) {
        return new Promise((resolve, reject) => {
            const exitEventKey = 'external-process-exited';
            let processUuid;
            let exitPayload;
            let externalProcessExitHandler;
            let ofWindow;
            if (typeof options.listener === 'function') {
                externalProcessExitHandler = (payload) => {
                    const data = payload || {};
                    exitPayload = {
                        topic: 'exited',
                        uuid: data.processUuid || '',
                        exitCode: data.exitCode || 0
                    };
                    if (processUuid === payload.processUuid) {
                        options.listener(exitPayload);
                        ofWindow.removeListener(exitEventKey, externalProcessExitHandler);
                    }
                };
                // window constructor expects the name is not undefined
                if (!this.wire.me.name) {
                    this.wire.me.name = this.wire.me.uuid;
                }
                ofWindow = new window_1._Window(this.wire, this.wire.me);
                ofWindow.on(exitEventKey, externalProcessExitHandler);
            }
            this.wire
                .sendAction(action, options)
                .then(({ payload }) => {
                processUuid = payload.data.uuid;
                resolve(payload.data);
                if (exitPayload && processUuid === exitPayload.uuid) {
                    options.listener(exitPayload);
                    ofWindow.removeListener(exitEventKey, externalProcessExitHandler);
                }
            })
                .catch((err) => {
                if (ofWindow) {
                    ofWindow.removeListener(exitEventKey, externalProcessExitHandler);
                }
                reject(err);
            });
        });
    }
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof System
     * @instance
     * @tutorial System.EventEmitter
     */
    /**
     * Returns the version of the runtime. The version contains the major, minor,
     * build and revision numbers.
     * @return {Promise.<string>}
     * @tutorial System.getVersion
     */
    getVersion() {
        return this.wire.sendAction('get-version').then(({ payload }) => payload.data);
    }
    /**
     * Clears cached data containing application resource
     * files (images, HTML, JavaScript files), cookies, and items stored in the
     * Local Storage.
     * @param { ClearCacheOption } options - See tutorial for more details.
     * @return {Promise.<void>}
     * @tutorial System.clearCache
     */
    clearCache(options) {
        return this.wire.sendAction('clear-cache', options).then(() => undefined);
    }
    /**
     * Clears all cached data when OpenFin Runtime exits.
     * @return {Promise.<void>}
     * @tutorial System.deleteCacheOnExit
     */
    deleteCacheOnExit() {
        return this.wire.sendAction('delete-cache-request').then(() => undefined);
    }
    /**
     * Exits the Runtime.
     * @return {Promise.<void>}
     * @tutorial System.exit
     */
    exit() {
        return this.wire.sendAction('exit-desktop').then(() => undefined);
    }
    /**
     * Fetches a JSON manifest using the browser process and returns a Javascript object.
     * @param { string } manifestUrl The URL of the manifest to fetch.
     * @return {Promise.<any>}
     * @tutorial System.fetchManifest
     */
    async fetchManifest(manifestUrl) {
        const { payload: { data } } = await this.wire.sendAction('fetch-manifest', { manifestUrl });
        return data;
    }
    /**
     * Writes any unwritten cookies data to disk.
     * @return {Promise.<void>}
     * @tutorial System.flushCookieStore
     */
    flushCookieStore() {
        return this.wire.sendAction('flush-cookie-store').then(() => undefined);
    }
    /**
     * Retrieves an array of data (name, ids, bounds) for all application windows.
     * @return {Promise.Array.<WindowInfo>}
     * @tutorial System.getAllWindows
     */
    getAllWindows() {
        return this.wire.sendAction('get-all-windows').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array of data for all applications.
     * @return {Promise.Array.<ApplicationInfo>}
     * @tutorial System.getAllApplications
     */
    getAllApplications() {
        return this.wire.sendAction('get-all-applications').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves the command line argument string that started OpenFin Runtime.
     * @return {Promise.<string>}
     * @tutorial System.getCommandLineArguments
     */
    getCommandLineArguments() {
        return this.wire.sendAction('get-command-line-arguments').then(({ payload }) => payload.data);
    }
    /**
     * Get the current state of the crash reporter.
     * @return {Promise.<CrashReporterOptions>}
     * @tutorial System.getCrashReporterState
     */
    async getCrashReporterState() {
        const { payload: { data: { diagnosticMode, isRunning } } } = await this.wire.sendAction('get-crash-reporter-state');
        console.warn('diagnosticMode property is deprecated. It will be removed in a future version');
        return {
            // diagnosticMode will be removed in a future version
            diagnosticMode,
            diagnosticsMode: diagnosticMode,
            isRunning
        };
    }
    /**
     * Start the crash reporter for the browser process if not already running.
     * @param { CrashReporterOptions } options - configure crash reporter
     * @return {Promise.<CrashReporterState>}
     * @tutorial System.startCrashReporter
     */
    async startCrashReporter(options) {
        const opts = options;
        const newOpts = { ...opts, diagnosticMode: opts.diagnosticsMode || opts.diagnosticMode };
        const { payload: { data: { diagnosticMode, isRunning } } } = await this.wire.sendAction('start-crash-reporter', newOpts);
        return {
            // diagnosticMode will be removed in a future version
            diagnosticMode,
            diagnosticsMode: diagnosticMode,
            isRunning
        };
    }
    /**
     * Returns a hex encoded hash of the machine id and the currently logged in user name.
     * This is the recommended way to uniquely identify a user / machine combination.
     * @return {Promise.<string>}
     * @tutorial System.getUniqueUserId
     * @static
     */
    getUniqueUserId() {
        return this.wire.sendAction('get-unique-user-id').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves a frame info object for the uuid and name passed in
     * @param { string } uuid - The UUID of the target.
     * @param { string } name - The name of the target.
     * @return {Promise.<EntityInfo>}
     * @tutorial System.getEntityInfo
     */
    getEntityInfo(uuid, name) {
        return this.wire.sendAction('get-entity-info', { uuid, name }).then(({ payload }) => payload.data);
    }
    /**
     * Gets the value of a given environment variable on the computer on which the runtime is installed
     * @return {Promise.<string>}
     * @tutorial System.getEnvironmentVariable
     */
    getEnvironmentVariable(envName) {
        return this.wire
            .sendAction('get-environment-variable', {
            environmentVariables: envName
        })
            .then(({ payload }) => payload.data);
    }
    /**
     * Get current focused window.
     * @return {Promise.<WindowInfo>}
     * @tutorial System.getFocusedWindow
     */
    getFocusedWindow() {
        return this.wire.sendAction('get-focused-window').then(({ payload }) => payload.data);
    }
    /**
     * Returns information about the given app's certification status
     * @return {Promise.<CertifiedAppInfo>}
     * @tutorial System.isAppCertified
     */
    async isAppCertified(manifestUrl) {
        const { payload: { data: { certifiedInfo } } } = await this.wire.sendAction('is-app-certified', { manifestUrl });
        return certifiedInfo;
    }
    /**
     * Returns an array of all the installed runtime versions in an object.
     * @return {Promise.<string[]>}
     * @tutorial System.getInstalledRuntimes
     */
    // incompatible with standalone node process.
    getInstalledRuntimes() {
        return this.wire.sendAction('get-installed-runtimes').then(({ payload }) => payload.data.runtimes);
    }
    // incompatible with standalone node process.
    async getInstalledApps() {
        const { payload: { data: { installedApps } } } = await this.wire.sendAction('get-installed-apps');
        return installedApps;
    }
    /**
     * Retrieves the contents of the log with the specified filename.
     * @param { GetLogRequestType } options A object that id defined by the GetLogRequestType interface
     * @return {Promise.<string>}
     * @tutorial System.getLog
     */
    getLog(options) {
        return this.wire.sendAction('view-log', options).then(({ payload }) => payload.data);
    }
    /**
     * Returns a unique identifier (UUID) provided by the machine.
     * @return {Promise.<string>}
     * @tutorial System.getMachineId
     */
    getMachineId() {
        return this.wire.sendAction('get-machine-id').then(({ payload }) => payload.data);
    }
    /**
     * Returns the minimum (inclusive) logging level that is currently being written to the log.
     * @return {Promise.<LogLevel>}
     * @tutorial System.getMinLogLevel
     */
    getMinLogLevel() {
        return this.wire.sendAction('get-min-log-level').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array containing information for each log file.
     * @return {Promise.Array<LogInfo>}
     * @tutorial System.getLogList
     */
    getLogList() {
        return this.wire.sendAction('list-logs').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an object that contains data about the monitor setup of the
     * computer that the runtime is running on.
     * @return {Promise.<MonitorInfo>}
     * @tutorial System.getMonitorInfo
     */
    getMonitorInfo() {
        return this.wire.sendAction('get-monitor-info').then(({ payload }) => payload.data);
    }
    /**
     * Returns the mouse in virtual screen coordinates (left, top).
     * @return {Promise.<PointTopLeft>}
     * @tutorial System.getMousePosition
     */
    getMousePosition() {
        return this.wire.sendAction('get-mouse-position').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array of all of the runtime processes that are currently
     * running. Each element in the array is an object containing the uuid
     * and the name of the application to which the process belongs.
     * @deprecated Please use our new set of process APIs:
     * [Window.getProcessInfo]{@link Window#getProcessInfo}
     * [View.getProcessInfo]{@link View#getProcessInfo}
     * [Application.getProcessInfo]{@link Application#getProcessInfo}
     * [System.getAllProcessInfo]{@link System#getAllProcessInfo}
     * @return {Promise.Array.<ProcessInfo>}
     * @tutorial System.getProcessList
     */
    getProcessList() {
        // eslint-disable-next-line no-console
        console.warn('System.getProcessList has been deprecated. Please consider using our new process APIs: Window.getProcessInfo, View.getProcessInfo, Application.getProcessInfo, System.getAllProcessInfo');
        return this.wire.sendAction('process-snapshot').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves all process information. This includes the browser process and every process associated to all entities (windows and views).
     * @return {Promise.<SystemProcessInfo>}
     * @tutorial System.getAllProcessInfo
     * @experimental
     */
    async getAllProcessInfo() {
        const { payload: { data } } = await this.wire.sendAction('get-all-process-info', this.identity);
        return data;
    }
    /**
     * Retrieves the Proxy settings.
     * @return {Promise.<ProxyInfo>}
     * @tutorial System.getProxySettings
     */
    getProxySettings() {
        return this.wire.sendAction('get-proxy-settings').then(({ payload }) => payload.data);
    }
    /**
     * Returns information about the running Runtime in an object.
     * @return {Promise.<RuntimeInfo>}
     * @tutorial System.getRuntimeInfo
     */
    getRuntimeInfo() {
        return this.wire.sendAction('get-runtime-info').then(({ payload }) => payload.data);
    }
    /**
     * Returns information about the running RVM in an object.
     * @return {Promise.<RVMInfo>}
     * @tutorial System.getRvmInfo
     */
    // incompatible with standalone node process.
    getRvmInfo() {
        return this.wire.sendAction('get-rvm-info').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves system information.
     * @return {Promise.<HostSpecs>}
     * @tutorial System.getHostSpecs
     */
    getHostSpecs() {
        return this.wire.sendAction('get-host-specs').then(({ payload }) => payload.data);
    }
    /**
     * Runs an executable or batch file. A path to the file must be included in options.
     * <br> A uuid may be optionally provided. If not provided, OpenFin will create a uuid for the new process.
     * <br> Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @param { ExternalProcessRequestType } options A object that is defined in the ExternalProcessRequestType interface
     * @return {Promise.<Identity>}
     * @tutorial System.launchExternalProcess
     */
    launchExternalProcess(options) {
        return this.sendExternalProcessRequest('launch-external-process', options);
    }
    /**
     * Monitors a running process. A pid for the process must be included in options.
     * <br> A uuid may be optionally provided. If not provided, OpenFin will create a uuid for the new process.
     * @param { ExternalProcessInfo } options See tutorial for more details
     * @return {Promise.<Identity>}
     * @tutorial System.monitorExternalProcess
     */
    monitorExternalProcess(options) {
        return this.sendExternalProcessRequest('monitor-external-process', options);
    }
    /**
     * Writes the passed message into both the log file and the console.
     * @param { string } level The log level for the entry. Can be either "info", "warning" or "error"
     * @param { string } message The log message text
     * @return {Promise.<void>}
     * @tutorial System.log
     */
    log(level, message) {
        return this.wire.sendAction('write-to-log', { level, message }).then(() => undefined);
    }
    /**
     * Opens the passed URL in the default web browser. It only supports http(s) and fin(s) protocols by default.
     * In order to use other custom protocols, they have to be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * File protocol and file path are not supported.
     * @param { string } url The URL to open
     * @return {Promise.<void>}
     * @tutorial System.openUrlWithBrowser
     */
    openUrlWithBrowser(url) {
        return this.wire.sendAction('open-url-with-browser', { url }).then(() => undefined);
    }
    /**
     * Removes the process entry for the passed UUID obtained from a prior call
     * of fin.System.launchExternalProcess().
     * @param { string } uuid The UUID for a process obtained from a prior call to fin.desktop.System.launchExternalProcess()
     * @return {Promise.<void>}
     * @tutorial System.releaseExternalProcess
     */
    releaseExternalProcess(uuid) {
        return this.wire.sendAction('release-external-process', { uuid }).then(() => undefined);
    }
    /**
     * Shows the Chromium Developer Tools for the specified window
     * @param { Identity } identity This is a object that is defined by the Identity interface
     * @return {Promise.<void>}
     * @tutorial System.showDeveloperTools
     */
    showDeveloperTools(identity) {
        return this.wire.sendAction('show-developer-tools', identity).then(() => undefined);
    }
    /**
     * Attempt to close an external process. The process will be terminated if it
     * has not closed after the elapsed timeout in milliseconds.<br>
     * Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @param { TerminateExternalRequestType } options A object defined in the TerminateExternalRequestType interface
     * @return {Promise.<void>}
     * @tutorial System.terminateExternalProcess
     */
    terminateExternalProcess(options) {
        return this.wire.sendAction('terminate-external-process', options).then(() => undefined);
    }
    /**
     * Update the OpenFin Runtime Proxy settings.
     * @param { ProxyConfig } options A config object defined in the ProxyConfig interface
     * @return {Promise.<void>}
     * @tutorial System.updateProxySettings
     */
    updateProxySettings(options) {
        return this.wire.sendAction('update-proxy', options).then(() => undefined);
    }
    /**
     * Downloads the given application asset<br>
     * Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @param { AppAssetInfo } appAsset App asset object
     * @return {Promise.<void>}
     * @tutorial System.downloadAsset
     */
    // incompatible with standalone node process.
    downloadAsset(appAsset, progressListener) {
        return new Promise((resolve, reject) => {
            // node.js environment not supported
            if (this.wire.environment.constructor.name === 'NodeEnvironment') {
                reject(new transport_errors_1.NotSupportedError('downloadAsset only supported in an OpenFin Render process'));
                return;
            }
            const downloadId = this.wire.environment.getNextMessageId().toString();
            const dlProgressKey = `asset-download-progress-${downloadId}`;
            const dlErrorKey = `asset-download-error-${downloadId}`;
            const dlCompleteKey = `asset-download-complete-${downloadId}`;
            const dlProgress = (progress) => {
                const p = {
                    downloadedBytes: progress.downloadedBytes,
                    totalBytes: progress.totalBytes
                };
                progressListener(p);
            };
            const cleanListeners = () => {
                this.removeListener(dlProgressKey, dlProgress);
            };
            const dlError = (r, err) => {
                const error = err || r;
                cleanListeners();
                reject(new transport_errors_1.RuntimeError(error));
            };
            const dlComplete = () => {
                cleanListeners();
                resolve();
            };
            this.on(dlProgressKey, dlProgress);
            this.once(dlErrorKey, dlError);
            this.once(dlCompleteKey, dlComplete);
            const downloadOptions = Object.assign(appAsset, { downloadId });
            this.wire.sendAction('download-asset', downloadOptions).catch((err) => {
                cleanListeners();
                reject(err);
            });
        });
    }
    /**
     * Downloads a version of the runtime.
     * @param { RuntimeDownloadOptions } options - Download options.
     * @param {Function} [progressListener] - called as the runtime is downloaded with progress information.
     * @return {Promise.<void>}
     * @tutorial System.downloadRuntime
     */
    downloadRuntime(options, progressListener) {
        return new Promise((resolve, reject) => {
            // node.js environment not supported
            if (this.wire.environment.constructor.name === 'NodeEnvironment') {
                reject(new transport_errors_1.NotSupportedError('downloadRuntime only supported in an OpenFin Render process'));
                return;
            }
            const downloadId = this.wire.environment.getNextMessageId().toString();
            const dlProgressKey = `runtime-download-progress-${downloadId}`;
            const dlErrorKey = `runtime-download-error-${downloadId}`;
            const dlCompleteKey = `runtime-download-complete-${downloadId}`;
            const dlProgress = (progress) => {
                const p = {
                    downloadedBytes: progress.downloadedBytes,
                    totalBytes: progress.totalBytes
                };
                progressListener(p);
            };
            const cleanListeners = () => {
                this.removeListener(dlProgressKey, dlProgress);
            };
            const dlError = (r, err) => {
                const error = err || r;
                cleanListeners();
                reject(new transport_errors_1.RuntimeError(error));
            };
            const dlComplete = () => {
                cleanListeners();
                resolve();
            };
            this.on(dlProgressKey, dlProgress);
            this.once(dlErrorKey, dlError);
            this.once(dlCompleteKey, dlComplete);
            const downloadOptions = Object.assign(options, { downloadId });
            this.wire.sendAction('download-runtime', downloadOptions).catch((err) => {
                cleanListeners();
                reject(err);
            });
        });
    }
    /**
     * Download preload scripts from given URLs
     * @param {DownloadPreloadOption[]} scripts - URLs of preload scripts. See tutorial for more details.
     * @return {Promise.Array<DownloadPreloadInfo>}
     * @tutorial System.downloadPreloadScripts
     */
    downloadPreloadScripts(scripts) {
        return this.wire.sendAction('download-preload-scripts', { scripts }).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array of data (name, ids, bounds) for all application windows.
     * @return {Promise.Array.<Identity>}
     * @tutorial System.getAllExternalApplications
     */
    getAllExternalApplications() {
        return this.wire.sendAction('get-all-external-applications').then(({ payload }) => payload.data);
    }
    /**
     * Retrieves app asset information.
     * @param { AppAssetRequest } options
     * @return {Promise.<AppAssetInfo>}
     * @tutorial System.getAppAssetInfo
     */
    getAppAssetInfo(options) {
        return this.wire.sendAction('get-app-asset-info', options).then(({ payload }) => payload.data);
    }
    /**
     * Get additional info of cookies.
     * @param { CookieOption } options - See tutorial for more details.
     * @return {Promise.Array.<CookieInfo>}
     * @tutorial System.getCookies
     */
    getCookies(options) {
        const url = this.wire.environment.getUrl();
        const newOptions = Object.assign(options, { url });
        return this.wire.sendAction('get-cookies', newOptions).then(({ payload }) => payload.data);
    }
    /**
     * Set the minimum log level above which logs will be written to the OpenFin log
     * @param { LogLevel } The minimum level (inclusive) above which all calls to log will be written
     * @return {Promise.<void>}
     * @tutorial System.setMinLogLevel
     */
    setMinLogLevel(level) {
        return this.wire.sendAction('set-min-log-level', { level }).then(() => undefined);
    }
    /**
     * Retrieves the UUID of the computer on which the runtime is installed
     * @param { string } uuid The uuid of the running application
     * @return {Promise.<Entity>}
     * @tutorial System.resolveUuid
     */
    resolveUuid(uuid) {
        return this.wire
            .sendAction('resolve-uuid', {
            entityKey: uuid
        })
            .then(({ payload }) => payload.data);
    }
    /**
     * Retrieves an array of data for all external applications
     * @param { Identity } requestingIdentity This object is described in the Identity typedef
     * @param { any } data Any data type to pass to the method
     * @return {Promise.<any>}
     * @ignore
     */
    executeOnRemote(requestingIdentity, data) {
        data.requestingIdentity = requestingIdentity;
        return this.wire.ferryAction(data);
    }
    /**
     * Reads the specifed value from the registry.<br>
     * Note: This method is restricted by default and must be enabled via
     * <a href="https://developers.openfin.co/docs/api-security">API security settings</a>.
     * @param { string } rootKey - The registry root key.
     * @param { string } subkey - The registry key.
     * @param { string } value - The registry value name.
     * @return {Promise.<RegistryInfo>}
     * @tutorial System.readRegistryValue
     */
    readRegistryValue(rootKey, subkey, value) {
        return this.wire
            .sendAction('read-registry-value', {
            rootKey,
            subkey,
            value
        })
            .then(({ payload }) => payload.data);
    }
    /**
     * This function call will register a unique id and produce a token.
     * The token can be used to broker an external connection.
     * @param { string } uuid - A UUID for the remote connection.
     * @return {Promise.<ExternalConnection>}
     * @tutorial System.registerExternalConnection
     */
    registerExternalConnection(uuid) {
        return this.wire.sendAction('register-external-connection', { uuid }).then(({ payload }) => payload.data);
    }
    /**
     * Returns the json blob found in the [desktop owner settings](https://openfin.co/documentation/desktop-owner-settings/)
     * for the specified service.
     * More information about desktop services can be found [here](https://developers.openfin.co/docs/desktop-services).
     * @param { ServiceIdentifier } serviceIdentifier An object containing a name key that identifies the service.
     * @return {Promise.<ServiceConfiguration>}
     * @tutorial System.getServiceConfiguration
     */
    async getServiceConfiguration(serviceIdentifier) {
        if (typeof serviceIdentifier.name !== 'string') {
            throw new Error('Must provide an object with a `name` property having a string value');
        }
        const { name } = serviceIdentifier;
        return this.wire.sendAction('get-service-configuration', { name }).then(({ payload }) => payload.data);
    }
    async getSystemAppConfig(name) {
        if (typeof name !== 'string') {
            throw new Error('Must provide a string value for name of system app');
        }
        return this.wire.sendAction('get-system-app-configuration', { name }).then(({ payload }) => payload.data);
    }
    /**
     * Signals the RVM to perform a health check and returns the results as json.
     * @return {Promise.<string[]>}
     * @tutorial System.runRvmHealthCheck
     */
    runRvmHealthCheck() {
        return this.wire.sendAction('run-rvm-health-check').then(({ payload }) => payload.data);
    }
    /**
     * Launch application using a manifest URL/path. It differs from Application.startFromManifest in that this API can accept a manifest using the fin protocol.
     * @param {string} manifestUrl - The manifest's URL or path.
     * @param {RvmLaunchOptions} [opts] - Parameters that the RVM will use.
     * @return {Promise.<Manifest>}
     * @experimental
     * @tutorial System.launchManifest
     * @static
     */
    async launchManifest(manifestUrl, opts) {
        const response = await this.wire.sendAction('launch-manifest', {
            manifestUrl,
            opts
        });
        return response.payload.data.manifest;
    }
    /**
     * Query permission of a secured api in current context.
     * @param {string} apiName - The full name of a secured API.
     * @return {Promise.<QueryPermissionResult>}
     * @tutorial System.queryPermissionForCurrentContext
     */
    async queryPermissionForCurrentContext(apiName) {
        const identity = { uuid: this.wire.me.uuid, name: this.wire.me.name };
        const response = await this.wire.sendAction('query-permission-for-current-context', {
            apiName,
            identity
        });
        return response.payload.data;
    }
    // Not documenting, internal use only.
    async enableNativeWindowIntegrationProvider(permissions) {
        const { payload } = await this.wire.sendAction('enable-native-window-integration-provider', { permissions });
        return payload.data;
    }
}
exports["default"] = System;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/view/Factory.js":
/*!******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/view/Factory.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/openfin-adapter/src/util/validate.js");
const EntityType_1 = __webpack_require__(/*! ../../shapes/EntityType */ "../../node_modules/openfin-adapter/src/shapes/EntityType.js");
const index_1 = __webpack_require__(/*! ./index */ "../../node_modules/openfin-adapter/src/api/view/index.js");
/**
 * @lends View
 */
class ViewModule extends base_1.Base {
    /**
     * Creates a new View.
     * @param { View~options } options - View creation options
     * @return {Promise.<View>}
     * @tutorial View.create
     * @experimental
     * @static
     */
    async create(options) {
        const { uuid } = this.wire.me;
        if (!options.name || typeof options.name !== 'string') {
            throw new Error('Please provide a name property as a string in order to create a View.');
        }
        if (this.wire.environment.childViews) {
            await this.wire.environment.createChildContent({
                entityType: EntityType_1.default.VIEW,
                options: { ...options, uuid }
            });
        }
        else {
            await this.wire.sendAction('create-view', { ...options, uuid });
        }
        return this.wrapSync({ uuid, name: options.name });
    }
    /**
     * Asynchronously returns a View object that represents an existing view.
     * @param { Identity } identity
     * @return {Promise.<View>}
     * @tutorial View.wrap
     * @experimental
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('view-wrap');
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new index_1.View(this.wire, identity);
    }
    /**
     * Synchronously returns a View object that represents an existing view.
     * @param { Identity } identity
     * @return {View}
     * @tutorial View.wrapSync
     * @experimental
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('view-wrap-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new index_1.View(this.wire, identity);
    }
    /**
     * Asynchronously returns a View object that represents the current view
     * @return {Promise.<View>}
     * @tutorial View.getCurrent
     * @experimental
     * @static
     */
    getCurrent() {
        this.wire.sendAction('view-get-current').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        if (!this.wire.me.isView) {
            throw new Error('You are not in a View context');
        }
        const { uuid, name } = this.wire.me;
        return this.wrap({ uuid, name });
    }
    /**
     * Synchronously returns a View object that represents the current view
     * @return {View}
     * @tutorial View.getCurrentSync
     * @experimental
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('view-get-current-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        if (!this.wire.me.isView) {
            throw new Error('You are not in a View context');
        }
        const { uuid, name } = this.wire.me;
        return this.wrapSync({ uuid, name });
    }
}
exports["default"] = ViewModule;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/view/Instance.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/view/Instance.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.View = void 0;
/* eslint-disable import/prefer-default-export */
const webcontents_1 = __webpack_require__(/*! ../webcontents */ "../../node_modules/openfin-adapter/src/api/webcontents/index.js");
const window_1 = __webpack_require__(/*! ../window */ "../../node_modules/openfin-adapter/src/api/window/index.js");
/**
 * @typedef {object} View~options
 * @summary View creation options.
 * @desc This is the options object required by {@link View.create View.create}.
 *
 * Note that `name` and `target` are the only required properties — albeit the `url` property is usually provided as well
 * (defaults to `"about:blank"` when omitted).
 *
 * @property {object} [experimental]
 * Configurations for API injection.
 *
 * @property {boolean} [experimental.childWindows] Configure if the runtime should enable child windows for views.
 *
 * @property {object} [api]
 * Configurations for API injection.
 *
 * @property {object} [api.iframe] Configure if the the API should be injected into iframes based on domain.
 *
 * @property {boolean} [api.iframe.crossOriginInjection=false] Controls if the `fin` API object is present for cross origin iframes.
 * @property {boolean} [api.iframe.sameOriginInjection=true] Controls if the `fin` API object is present for same origin iframes.
 *
 * @property {object} [autoResize] AutoResize options
 *
 * @property {object} [bounds] initial bounds given relative to the window.
 *
 * @property {string} [backgroundColor="#FFF"] - _Updatable._
 * The view’s _backfill_ color as a hexadecimal value. Not to be confused with the content background color
 * (`document.body.style.backgroundColor`),
 * this color briefly fills a view’s (a) content area before its content is loaded as well as (b) newly exposed
 * areas when growing a window. Setting
 * this value to the anticipated content background color can help improve user experience.
 * Default is white.
 *
 * @property {object} [contentNavigation]
 * Restrict navigation to URLs that match a whitelisted pattern.
 * In the lack of a whitelist, navigation to URLs that match a blacklisted pattern would be prohibited.
 * See [here](https://developer.chrome.com/extensions/match_patterns) for more details.
 * @property {string[]} [contentNavigation.whitelist=[]] List of whitelisted URLs.
 * @property {string[]} [contentNavigation.blacklist=[]] List of blacklisted URLs.
 *
 * @property {object} [contextMenuSettings] - _Updatable._
 * Configure the context menu when right-clicking on a view.
 * @property {boolean} [contextMenuSettings.enable=true] Should the context menu display on right click.
 * @property {boolean} [contextMenuSettings.devtools=true] Should the context menu contain a button for opening devtools.
 * @property {boolean} [contextMenuSettings.reload=true] Should the context menu contain a button for reloading the page.
 *
 * @property {any} [customData=""] - _Updatable._
 * A field that the user can attach serializable data to to be ferried around with the view options.
 * _When omitted, the default value of this property is the empty string (`""`)._
 *
 * When omitted, the default value of this property is the empty string (`""`).
 * As opposed to customData this is meant for frequent updates and sharing with other contexts. [Example]{@tutorial customContext}
 *
 * @property {object[]} [hotkeys=[]] - _Updatable._
 * Defines the list of hotkeys that will be emitted as a `hotkey` event on the view. For usage example see [example]{@tutorial hotkeys}.
 * Within Platform, OpenFin also implements a set of pre-defined actions called
 * [keyboard commands]{@link https://developers.openfin.co/docs/platform-api#section-5-3-using-keyboard-commands}
 * that can be assigned to a specific hotkey in the platform manifest.
 * @property {string} hotkeys.keys The key combination of the hotkey, i.e. "Ctrl+T"
 * @property {boolean} [hotkeys.preventDefault=false] preventDefault will prevent the page keydown/keyup events from being emitted.
 *
 * @property {boolean} [isClosable=true] **Platforms Only.** If false, the view will be persistent and can't be closed through
 * either UI or `Platform.closeView`. Note that the view will still be closed if the host window is closed or
 * if the view isn't part of the new layout when running `Layout.replace`.
 *
 * @property {string} name
 * The name of the view.
 *
 * @property {boolean} [detachOnClose=false] - _Updatable._
 * Platforms Only.  If true, will hide and detach the View from the window for later use instead of closing,
 * allowing the state of the View to be saved and the View to be immediately shown in a new Layout.
 *
 * @property {string} [manifestUrl] **Platforms Only.** Url to a manifest that contains View Options. Properties other than manifestUrl can still be used
 * but the properties in the manifest will take precedence if there is any collision.
 *
 * @property {preloadScript[]} [preloadScripts] - _Inheritable_
 * A list of scripts that are eval'ed before other scripts in the page. When omitted, _inherits_
 * from the parent application.
 *
 * @property {boolean} [preventDragOut=false] **Platforms Only.** If true, the tab of the view can't be dragged out of its host window.
 *
 * @property {string} [processAffinity=<application uuid>]
 * A string to attempt to group renderers together. Will only be used if pages are on the same origin.
 *
 * @property {Identity} [target]
 * The identity of the window this view should be attached to.
 *
 * @property {string} [url="about:blank"]
 * The URL of the view.
 *
 * @property {string} [uuid=<application uuid>]
 * The `uuid` of the application, unique within the set of all `Application`s running in OpenFin Runtime.
 * If omitted, defaults to the `uuid` of the application spawning the view.
 * If given, must match the `uuid` of the application spawning the view.
 * In other words, the application's `uuid` is the only acceptable value, but is the default, so there's
 * really no need to provide it.
 */
/**
 * @classdesc a View can be used to embed additional web content into a Window.
 * It is like a child window, except it is positioned relative to its owning window.
 * It has the ability to listen for <a href="tutorial-View.EventEmitter.html">View-specific events</a>.
 *
 * By default, a View will try to share the same renderer process as other Views owned by its parent Application.
 * To change that behavior, see the processAffinity {@link View~options view option}.
 *
 * A View's lifecycle is tied to its owning window and can be re-attached to a different window at any point during its lifecycle.
 * @class
 * @alias View
 * @hideconstructor
 */
class View extends webcontents_1.WebContents {
    constructor(wire, identity) {
        super(wire, identity, 'view');
        this.identity = identity;
        /**
         * Returns the zoom level of the view.
         * @function getZoomLevel
         * @memberOf View
         * @instance
         * @return {Promise.<number>}
         * @tutorial View.getZoomLevel
         */
        /**
         * Sets the zoom level of the view.
         * @param { number } level The zoom level
         * @function setZoomLevel
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.setZoomLevel
         */
        /**
         * Find and highlight text on a page.
         * @param { string } searchTerm Term to find in page
         * @param { FindInPageOptions } options Search options
         * @function findInPage
         * @memberOf View
         * @instance
         * @return {Promise.<number>}
         * @tutorial View.findInPage
         */
        /**
         * Stops any findInPage call with the provided action.
         * @param {string} action
         * Action to execute when stopping a find in page:<br>
         * "clearSelection" - Clear the selection.<br>
         * "keepSelection" - Translate the selection into a normal selection.<br>
         * "activateSelection" - Focus and click the selection node.<br>
         * @function stopFindInPage
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.stopFindInPage
         */
        /**
         * Navigates the view to a specified URL. The url must contain the protocol prefix such as http:// or https://.
         * @param { string } url - The URL to navigate the view to.
         * @return {Promise.<void>}
         * @function navigate
         * @memberof View
         * @instance
         * @tutorial View.navigate
         * @experimental
         */
        /**
         * Navigates the view back one page.
         * @function navigateBack
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.navigateBack
         */
        /**
         * Navigates the view forward one page.
         * @function navigateForward
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.navigateForward
         */
        /**
         * Stops any current navigation the view is performing.
         * @function stopNavigation
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.stopNavigation
         */
        /**
         * Reloads the view current page
         * @function reload
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.reload
         */
        /**
         * Prints the view's web page
         * @param { PrintOptions } [options] Printer Options
         * @function print
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.print
         */
        /**
         * Returns an array with all system printers
         * @function getPrinters
         * @memberOf View
         * @instance
         * @return { Promise.Array.<PrinterInfo> }
         * @tutorial View.getPrinters
         */
        /**
         * Shows the Chromium Developer Tools
         * @function showDeveloperTools
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.showDeveloperTools
         */
        /**
         * Retrieves the process information associated with a view.
         * @function getProcessInfo
         * @memberOf View
         * @instance
         * @return {Promise.<EntityProcessDetails>}
         * @tutorial View.getProcessInfo
         */
        /**
         * Retrieves information on all Shared Workers.
         * @function getSharedWorkers
         * @memberOf View
         * @instance
         * @return {Promise.Array.<SharedWorkerInfo>}
         * @tutorial View.getSharedWorkers
         */
        /**
         * Opens the developer tools for the shared worker context.
         * @function inspectSharedWorker
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.inspectSharedWorker
         */
        /**
         * Inspects the shared worker based on its ID.
         * @param { string } workerId - The id of the shared worker.
         * @function inspectSharedWorkerById
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.inspectSharedWorkerById
         */
        /**
         * Opens the developer tools for the service worker context.
         * @function inspectServiceWorker
         * @memberOf View
         * @instance
         * @return {Promise.<void>}
         * @tutorial View.inspectServiceWorker
         */
        /**
         * Attaches the current view to a the given window identity.
         * Identity must be the identity of a window in the same application.
         * This detaches the view from its current window, and sets the view to be destroyed when its new window closes.
         * @param target {Identity}
         * @return {Promise.<void>}
         * @tutorial View.attach
         * @experimental
         */
        this.attach = async (target) => {
            await this.wire.sendAction('attach-view', { target, ...this.identity });
        };
        /**
         * Destroys the current view
         * @return {Promise.<void>}
         * @tutorial View.destroy
         * @experimental
         */
        this.destroy = async () => {
            await this.wire.sendAction('destroy-view', { ...this.identity });
        };
        /**
         * Shows the current view if it is currently hidden.
         * @return {Promise.<void>}
         * @tutorial View.show
         * @experimental
         */
        this.show = async () => {
            await this.wire.sendAction('show-view', { ...this.identity });
        };
        /**
         * Hides the current view if it is currently visible.
         * @return {Promise.<void>}
         * @tutorial View.hide
         * @experimental
         */
        this.hide = async () => {
            await this.wire.sendAction('hide-view', { ...this.identity });
        };
        /**
         * Sets the bounds (top, left, width, height) of the view relative to its window.
         * @param bounds {ViewBounds}
         * @return {Promise.<void>}
         * @tutorial View.setBounds
         * @experimental
         */
        this.setBounds = async (bounds) => {
            await this.wire.sendAction('set-view-bounds', { bounds, ...this.identity });
        };
        /**
         * Gets the bounds (top, left, width, height) of the view relative to its window.
         * @return {Promise.<ViewBounds>}
         * @tutorial View.getBounds
         * @experimental
         */
        this.getBounds = async () => {
            const ack = await this.wire.sendAction('get-view-bounds', { ...this.identity });
            return ack.payload.data;
        };
        /**
         * Gets the View's info.
         * @return {Promise.<ViewInfo>}
         * @tutorial View.getInfo
         * @experimental
         */
        this.getInfo = async () => {
            const ack = await this.wire.sendAction('get-view-info', { ...this.identity });
            return ack.payload.data;
        };
        /**
         * Retrieves the layout for the window the view is attached to.
         * @return {Promise.<Layout>}
         * @tutorial View.getParentLayout
         * @experimental
         */
        this.getParentLayout = async () => {
            this.wire.sendAction('view-get-parent-layout', { ...this.identity }).catch((e) => {
                // don't expose
            });
            const currentWindow = await this.getCurrentWindow();
            return currentWindow.getLayout();
        };
        /**
         * Gets the View's options.
         * @return {Promise<ViewOptions>}
         * @tutorial View.getOptions
         * @experimental
         */
        this.getOptions = async () => {
            return this.wire.sendAction('get-view-options', { ...this.identity }).then(({ payload }) => payload.data);
        };
        /**
         * Updates the view's options.
         * @param { Partial<ViewOptions> } options
         * @return {Promise.<void>}
         * @tutorial View.updateOptions
         * @experimental
         */
        this.updateOptions = async (options) => {
            return this.wire.sendAction('update-view-options', { options, ...this.identity }).then(() => undefined);
        };
        /**
         * Retrieves the window the view is currently attached to.
         * @return {Promise.<_Window>}
         * @experimental
         */
        this.getCurrentWindow = async () => {
            const { payload: { data } } = await this.wire.sendAction('get-view-window', { ...this.identity });
            return new window_1._Window(this.wire, data);
        };
        this.topic = 'view';
    }
    /**
     * Gets a base64 encoded image of the view or a part of it.
     * @function capturePage
     * @param { CapturePageOptions } [options] Options for the capturePage call.
     * @memberOf View
     * @instance
     * @return {Promise.<string>}
     * @tutorial View.capturePage
     */
    /**
     * Executes Javascript on the view, restricted to contents you own or contents owned by
     * applications you have created.
     * @param { string } code JavaScript code to be executed on the view.
     * @function executeJavaScript
     * @memberOf View
     * @instance
     * @return {Promise.<void>}
     * @tutorial View.executeJavaScript
     */
    /**
     * Focuses the view
     * @return {Promise.<void>}
     * @function focus
     * @memberof View
     * @emits focused
     * @instance
     * @tutorial View.focus
     * @experimental
     */
    async focus({ emitSynthFocused } = { emitSynthFocused: true }) {
        const win = await this.getCurrentWindow();
        await win.focusedWebViewWasChanged();
        await super.focus({ emitSynthFocused });
    }
}
exports.View = View;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/view/index.js":
/*!****************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/view/index.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/view/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/view/Instance.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/webcontents/index.js":
/*!***********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/webcontents/index.js ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WebContents = void 0;
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
class WebContents extends base_1.EmitterBase {
    constructor(wire, identity, entityType) {
        super(wire, [entityType, identity.uuid, identity.name]);
        this.entityType = entityType;
    }
    capturePage(options) {
        return this.wire.sendAction('capture-page', { options, ...this.identity }).then(({ payload }) => payload.data);
    }
    executeJavaScript(code) {
        return this.wire
            .sendAction('execute-javascript-in-window', { ...this.identity, code })
            .then(({ payload }) => payload.data);
    }
    getZoomLevel() {
        return this.wire.sendAction('get-zoom-level', this.identity).then(({ payload }) => payload.data);
    }
    setZoomLevel(level) {
        return this.wire.sendAction('set-zoom-level', { ...this.identity, level }).then(() => undefined);
    }
    navigate(url) {
        return this.wire.sendAction('navigate-window', { ...this.identity, url }).then(() => undefined);
    }
    navigateBack() {
        return this.wire.sendAction('navigate-window-back', { ...this.identity }).then(() => undefined);
    }
    async navigateForward() {
        await this.wire.sendAction('navigate-window-forward', { ...this.identity });
    }
    stopNavigation() {
        return this.wire.sendAction('stop-window-navigation', { ...this.identity }).then(() => undefined);
    }
    reload(ignoreCache = false) {
        return this.wire
            .sendAction('reload-window', {
            ignoreCache,
            ...this.identity
        })
            .then(() => undefined);
    }
    print(options) {
        return this.wire.sendAction('print', { ...this.identity, options }).then(() => undefined);
    }
    findInPage(searchTerm, options) {
        return this.wire
            .sendAction('find-in-page', { ...this.identity, searchTerm, options })
            .then(({ payload }) => payload.data);
    }
    stopFindInPage(action) {
        return this.wire.sendAction('stop-find-in-page', { ...this.identity, action }).then(() => undefined);
    }
    getPrinters() {
        return this.wire.sendAction('get-printers', { ...this.identity }).then(({ payload }) => payload.data);
    }
    async focus({ emitSynthFocused } = { emitSynthFocused: true }) {
        await this.wire.sendAction('focus-window', { emitSynthFocused, ...this.identity });
    }
    async showDeveloperTools() {
        // Note this hits the system action map in core state for legacy reasons.
        await this.wire.sendAction('show-developer-tools', this.identity);
    }
    async getProcessInfo() {
        const { payload: { data } } = await this.wire.sendAction('get-process-info', this.identity);
        return data;
    }
    async getSharedWorkers() {
        return this.wire.sendAction('get-shared-workers', this.identity).then(({ payload }) => payload.data);
    }
    async inspectSharedWorker() {
        await this.wire.sendAction('inspect-shared-worker', { ...this.identity });
    }
    async inspectSharedWorkerById(workerId) {
        await this.wire.sendAction('inspect-shared-worker-by-id', { ...this.identity, workerId });
    }
    async inspectServiceWorker() {
        await this.wire.sendAction('inspect-service-worker', { ...this.identity });
    }
}
exports.WebContents = WebContents;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/window/Factory.js":
/*!********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/window/Factory.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
const validate_1 = __webpack_require__(/*! ../../util/validate */ "../../node_modules/openfin-adapter/src/util/validate.js");
const Instance_1 = __webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/window/Instance.js");
/**
 * @lends Window
 */
class _WindowModule extends base_1.Base {
    /**
     * Asynchronously returns a Window object that represents an existing window.
     * @param { Identity } identity
     * @return {Promise.<_Window>}
     * @tutorial Window.wrap
     * @static
     */
    async wrap(identity) {
        this.wire.sendAction('window-wrap').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1._Window(this.wire, identity);
    }
    /**
     * Synchronously returns a Window object that represents an existing window.
     * @param { Identity } identity
     * @return {_Window}
     * @tutorial Window.wrapSync
     * @static
     */
    wrapSync(identity) {
        this.wire.sendAction('window-wrap-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const errorMsg = validate_1.validateIdentity(identity);
        if (errorMsg) {
            throw new Error(errorMsg);
        }
        return new Instance_1._Window(this.wire, identity);
    }
    /**
     * Creates a new Window.
     * @param { Window~options } options - Window creation options
     * @return {Promise.<_Window>}
     * @tutorial Window.create
     * @static
     */
    create(options) {
        this.wire.sendAction('create-window').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        const win = new Instance_1._Window(this.wire, { uuid: this.me.uuid, name: options.name });
        return win.createWindow(options);
    }
    /**
     * Asynchronously returns a Window object that represents the current window
     * @return {Promise.<_Window>}
     * @tutorial Window.getCurrent
     * @static
     */
    getCurrent() {
        this.wire.sendAction('get-current-window').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        if (!this.wire.me.isWindow) {
            throw new Error('You are not in a Window context');
        }
        const { uuid, name } = this.wire.me;
        return this.wrap({ uuid, name });
    }
    /**
     * Synchronously returns a Window object that represents the current window
     * @return {_Window}
     * @tutorial Window.getCurrentSync
     * @static
     */
    getCurrentSync() {
        this.wire.sendAction('get-current-window-sync').catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        if (!this.wire.me.isWindow) {
            throw new Error('You are not in a Window context');
        }
        const { uuid, name } = this.wire.me;
        return this.wrapSync({ uuid, name });
    }
}
exports["default"] = _WindowModule;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/window/Instance.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/window/Instance.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports._Window = void 0;
/* eslint-disable import/prefer-default-export */
const application_1 = __webpack_require__(/*! ../application */ "../../node_modules/openfin-adapter/src/api/application/index.js");
const webcontents_1 = __webpack_require__(/*! ../webcontents */ "../../node_modules/openfin-adapter/src/api/webcontents/index.js");
const view_1 = __webpack_require__(/*! ../view */ "../../node_modules/openfin-adapter/src/api/view/index.js");
const EntityType_1 = __webpack_require__(/*! ../../shapes/EntityType */ "../../node_modules/openfin-adapter/src/shapes/EntityType.js");
/**
 * @typedef { object } Margins
 * @property { string } [marginType]
 * Can be `default`, `none`, `printableArea`, or `custom`. If `custom` is chosen,
 * you will also need to specify `top`, `bottom`, `left`, and `right`.
 *
 * @property { number } [top] The top margin of the printed web page, in pixels.
 * @property { number } [bottom] The bottom margin of the printed web page, in pixels.
 * @property { number } [left] The left margin of the printed web page, in pixels.
 * @property { number } [right] The right margin of the printed web page, in pixels.
 */
/**
 * @typedef { object } Dpi
 * @property { number } [horizontal] The horizontal dpi
 * @property { number } [vertical] The vertical dpi
 */
/**
 * @typedef { object } PrintOptions
 * @property { boolean } [silent=false] Don't ask user for print settings.
 * @property { boolean } [printBackground=false] Prints the background color and image of the web page.
 * @property { string } [deviceName=''] Set the printer device name to use.
 * @property { boolean } [color=true] Set whether the printed web page will be in color or grayscale.
 * @property { Margins } [margins] Set margins for the printed web page
 * @property { boolean } [landscape=false] Whether the web page should be printed in landscape mode.
 * @property { number } [scaleFactor] The scale factor of the web page.
 * @property { number } [pagesPerSheet] The number of pages to print per page sheet.
 * @property { boolean } [collate] Whether the web page should be collated.
 * @property { number } [copies] The number of copies of the web page to print.
 * @property { Record<string, number> } [pageRanges] The page range to print. Should have two keys: from and to.
 * @property { string } [duplexMode] Set the duplex mode of the printed web page. Can be simplex, shortEdge, or longEdge.
 * @property { Dpi } [dpi] Set dpi for the printed web page
 */
/**
 * PrinterInfo interface
 * @typedef { object } PrinterInfo
 * @property { string } name Printer Name
 * @property { string } description Printer Description
 * @property { number } status Printer Status
 * @property { boolean } isDefault Indicates that system's default printer
 */
/**
 * SharedWorkerInfo interface
 * @typedef { object } SharedWorkerInfo
 * @property { string } id The unique id of the shared worker.
 * @property { string } url The url of the shared worker.
 */
/**
 * ContentCreationRule interface
 * @typedef { object } ContentCreationRule
 * @property { string } behavior 'view' | 'window' | 'browser' | 'block'
 * @property { string[] } match List of [match patterns](https://developer.chrome.com/extensions/match_patterns).
 * @property { object } options Window creation options or View creation options.
 */
/**
 * @typedef {object} Window~options
 * @summary Window creation options.
 * @desc This is the options object required by {@link Window.create Window.create}.
 *
 * Note that `name` is the only required property — albeit the `url` property is usually provided as well
 * (defaults to `"about:blank"` when omitted).
 *
 * _This jsdoc typedef mirrors the `WindowOptions` TypeScript interface in `@types/openfin`._
 *
 * @property {object} [accelerator]
 * Enable keyboard shortcuts for devtools, zoom, reload, and reload ignoring cache.
 *
 * @property {boolean} [accelerator.devtools=false]
 * If `true`, enables the devtools keyboard shortcut:<br>
 * `Ctrl` + `Shift` + `I` _(Toggles Devtools)_
 *
 * @property {boolean} [accelerator.reload=false]
 * If `true`, enables the reload keyboard shortcuts:<br>
 * `Ctrl` + `R` _(Windows)_<br>
 * `F5` _(Windows)_<br>
 * `Command` + `R` _(Mac)_
 *
 * @property {boolean} [accelerator.reloadIgnoringCache=false]
 * If `true`, enables the reload-from-source keyboard shortcuts:<br>
 * `Ctrl` + `Shift` + `R` _(Windows)_<br>
 * `Shift` + `F5` _(Windows)_<br>
 * `Command` + `Shift` + `R` _(Mac)_
 *
 * @property {boolean} [accelerator.zoom=false]
 * If `true`, enables the zoom keyboard shortcuts:<br>
 * `Ctrl` + `+` _(Zoom In)_<br>
 * `Ctrl` + `Shift` + `+` _(Zoom In)_<br>
 * `Ctrl` + `NumPad+` _(Zoom In)_<br>
 * `Ctrl` + `-` _(Zoom Out)_<br>
 * `Ctrl` + `Shift` + `-` _(Zoom Out)_<br>
 * `Ctrl` + `NumPad-` _(Zoom Out)_<br>
 * `Ctrl` + `Scroll` _(Zoom In & Out)_<br>
 * `Ctrl` + `0` _(Restore to 100%)_
 *
 * @property {object} [alphaMask] - _Experimental._  _Updatable._
 * <br>
 * alphaMask turns anything of matching RGB value transparent.
 * <br>
 * Caveats:
 * * runtime key --disable-gpu is required. Note: Unclear behavior on remote Desktop support
 * * User cannot click-through transparent regions
 * * Not supported on Mac
 * * Windows Aero must be enabled
 * * Won't make visual sense on Pixel-pushed environments such as Citrix
 * * Not supported on rounded corner windows
 * @property {number} [alphaMask.red=-1] 0-255
 * @property {number} [alphaMask.green=-1] 0-255
 * @property {number} [alphaMask.blue=-1] 0-255
 *
 * @property {boolean} [alwaysOnTop=false] - _Updatable._
 * A flag to always position the window at the top of the window stack.
 *
 * @property {object} [api]
 * Configurations for API injection.
 *
 * @property {object} [api.iframe] Configure if the the API should be injected into iframes based on domain.
 *
 * @property {boolean} [api.iframe.crossOriginInjection=false] Controls if the `fin` API object is present for cross origin iframes.
 * @property {boolean} [api.iframe.sameOriginInjection=true] Controls if the `fin` API object is present for same origin iframes.
 *
 * @property {string} [applicationIcon = ""] - _Deprecated_ - use `icon` instead.
 *
 * @property {number} [aspectRatio=0] - _Updatable._
 * The aspect ratio of width to height to enforce for the window. If this value is equal to or less than zero,
 * an aspect ratio will not be enforced.
 *
 * @property {boolean} [autoShow=true]
 * A flag to automatically show the window when it is created.
 *
 * @property {string} [backgroundColor="#FFF"]
 * The window’s _backfill_ color as a hexadecimal value. Not to be confused with the content background color
 * (`document.body.style.backgroundColor`),
 * this color briefly fills a window’s (a) content area before its content is loaded as well as (b) newly exposed
 * areas when growing a window. Setting
 * this value to the anticipated content background color can help improve user experience.
 * Default is white.
 *
 * @property {object} [contentCreation]
 * Apply rules that determine how user interaction (`window.open` and links) creates content.
 * @property {ContentCreationRule[]} [contentCreation.rules = []] List of content creation rules.
 *
 * @property {object} [contentNavigation]
 * Restrict navigation to URLs that match a whitelisted pattern.
 * In the lack of a whitelist, navigation to URLs that match a blacklisted pattern would be prohibited.
 * See [here](https://developer.chrome.com/extensions/match_patterns) for more details.
 * @property {string[]} [contentNavigation.whitelist=[]] List of whitelisted URLs.
 * @property {string[]} [contentNavigation.blacklist=[]] List of blacklisted URLs.

 * @property {boolean} [contextMenu=true] - _Updatable._
 * A flag to show the context menu when right-clicking on a window.
 * Gives access to the devtools for the window.
 *
 * @property {object} [contextMenuSettings] - _Updatable._
 * Configure the context menu when right-clicking on a window.
 * @property {boolean} [contextMenuSettings.enable=true] Should the context menu display on right click.
 * @property {boolean} [contextMenuSettings.devtools=true] Should the context menu contain a button for opening devtools.
 * @property {boolean} [contextMenuSettings.reload=true] Should the context menu contain a button for reloading the page.
 *
 * @property {object} [cornerRounding] - _Updatable._
 * Defines and applies rounded corners for a frameless window. **NOTE:** On macOS corner is not ellipse but circle rounded by the
 *  average of _height_ and _width_.
 * @property {number} [cornerRounding.height=0] The height in pixels.
 * @property {number} [cornerRounding.width=0] The width in pixels.
 *
 * @property {any} [customContext=""] - _Updatable._
 * A field that the user can use to attach serializable data that will be saved when {@link Platform#getSnapshot Platform.getSnapshot}
 * is called.  If a window in a Platform is trying to update or retrieve its own context, it can use the
 * {@link Platform#setWindowContext Platform.setWindowContext} and {@link Platform#getWindowContext Platform.getWindowContext} calls.
 * When omitted, the default value of this property is the empty string (`""`).
 * As opposed to customData this is meant for frequent updates and sharing with other contexts. [Example]{@tutorial customContext}
 *
 * @property {any} [customData=""] - _Updatable._
 * A field that the user can attach serializable data to to be ferried around with the window options.
 * _When omitted, the default value of this property is the empty string (`""`)._
 *
 * @property {object[]} [customRequestHeaders]
 * Defines list of custom headers for requests sent by the window.
 * @property {string[]} [customRequestHeaders.urlPatterns=[]] The URL patterns for which the headers will be applied
 * @property {object[]} [customRequestHeaders.headers=[]] Objects representing headers and their values,
 * where the object key is the name of header and value at key is the value of the header
 *
 * @property {boolean} [closeOnLastViewRemoved=true] - _Experimental._  _Updatable._
 * Toggling off would keep the Window alive even if all its Views were closed.
 * This is meant for advanced users and should be used with caution.
 * Limitations - Once a Layout has been emptied out of all views it's not usable anymore, and certain API calls will fail.
 * Use `layout.replace` to create a fresh Layout instance in case you want to populate it with Views again.
 * ** note ** - This option is ignored in non-Platforms apps.
 *
 * @property {boolean} [defaultCentered=false]
 * Centers the window in the primary monitor. This option overrides `defaultLeft` and `defaultTop`. When `saveWindowState` is `true`,
 * this value will be ignored for subsequent launches in favor of the cached value. **NOTE:** On macOS _defaultCenter_ is
 * somewhat above center vertically.
 *
 * @property {number} [defaultHeight=500]
 * The default height of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent launches
 * in favor of the cached value.
 *
 * @property {number} [defaultLeft=100]
 * The default left position of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent
 * launches in favor of the cached value.
 *
 * @property {number} [defaultTop=100]
 * The default top position of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent
 * launches in favor of the cached value.
 *
 * @property {number} [defaultWidth=800]
 * The default width of the window. When `saveWindowState` is `true`, this value will be ignored for subsequent
 * launches in favor of the cached value.
 *
 * @property {boolean} [includeInSnapshots=true] - _Updatable._
 * When true, the window will be be included in snapshots returned by Platform.getSnapshot(). Turning this off may be desirable when dealing with
 * inherently temporary windows whose state shouldn't be preserved, such as modals, menus, or popups.
 *
 * @property {boolean} [frame=true] - _Updatable._
 * A flag to show the frame.
 *
 * @hidden-property {boolean} [hideOnClose=false] - A flag to allow a window to be hidden when the close button is clicked.
 *
 * @property {object[]} [hotkeys=[]] - _Updatable._
 * Defines the list of hotkeys that will be emitted as a `hotkey` event on the window. For usage example see [example]{@tutorial hotkeys}.
 * Within Platform, OpenFin also implements a set of pre-defined actions called
 * [keyboard commands]{@link https://developers.openfin.co/docs/platform-api#section-5-3-using-keyboard-commands}
 * that can be assigned to a specific hotkey in the platform manifest.
 * @property {string} hotkeys.keys The key combination of the hotkey, i.e. "Ctrl+T"
 * @property {boolean} [hotkeys.preventDefault=false] Whether or not to prevent default key handling before emitting the event
 *
 * @property {string} [icon] - _Updatable. Inheritable._
 * A URL for the icon to be shown in the window title bar and the taskbar.
 * _When omitted, inherits from the parent application._
 *  note: Window OS caches taskbar icons, therefore an icon change might only be visible after the cache is removed or the uuid is changed.
 *
 * @property {number} [maxHeight=-1] - _Updatable._
 * The maximum height of a window. Will default to the OS defined value if set to -1.
 *
 * @property {boolean} [maximizable=true] - _Updatable._
 * A flag that lets the window be maximized.
 *
 * @property {number} [maxWidth=-1] - _Updatable._
 * The maximum width of a window. Will default to the OS defined value if set to -1.
 *
 * @property {number} [minHeight=0] - _Updatable._
 * The minimum height of a window.
 *
 * @property {boolean} [minimizable=true] - _Updatable._
 * A flag that lets the window be minimized.
 *
 * @property {number} [minWidth=0] - _Updatable._
 * The minimum width of a window.
 *
 * @property {Identity} [modalParentIdentity]
 * Parent identity of a modal window. It will create a modal child window when this option is set.
 *
 * @property {string} name
 * The name of the window.
 *
 * @property {number} [opacity=1.0] - _Updatable._
 * A flag that specifies how transparent the window will be.
 * Changing opacity doesn't work on Windows 7 without Aero so setting this value will have no effect there.
 * This value is clamped between `0.0` and `1.0`.
 *
 * @property {preloadScript[]} [preloadScripts] - _Inheritable_
 * A list of scripts that are eval'ed before other scripts in the page. When omitted, _inherits_
 * from the parent application.
 *
 * @property {string} [processAffinity]
 * A string to attempt to group renderers together. Will only be used if pages are on the same origin.
 *
 * @property {boolean} [resizable=true] - _Updatable._
 * A flag to allow the user to resize the window.
 *
 * @property {object} [resizeRegion] - _Updatable._
 * Defines a region in pixels that will respond to user mouse interaction for resizing a frameless window.
 * @property {number} [resizeRegion.bottomRightCorner=9]
 * The size in pixels of an additional square resizable region located at the bottom right corner of a frameless window.
 * @property {number} [resizeRegion.size=7]
 * The size in pixels.
 * @property {object} [resizeRegion.sides={top:true,right:true,bottom:true,left:true}]
 * Sides that a window can be resized from.
 *
 * @property {boolean} [saveWindowState=true]
 * A flag to cache the location of the window.
 * ** note ** - This option is ignored in Platforms as it would cause inconsistent {@link Platform#applySnapshot applySnapshot} behavior.
 *
 * @property {boolean} [shadow=false]
 * A flag to display a shadow on frameless windows.
 * `shadow` and `cornerRounding` are mutually exclusive.
 * On Windows 7, Aero theme is required.
 *
 * @property {boolean} [showBackgroundImages=false] - _Updatable._
 * Platforms Only.  If true, will show background images in the layout when the Views are hidden.
 * This occurs when the window is resizing or a tab is being dragged within the layout.
 *
 * @property {boolean} [showTaskbarIcon=true] - _Updatable._ _Windows_.
 * A flag to show the window's icon in the taskbar.
 *
 * @property {boolean} [smallWindow=false]
 * A flag to specify a frameless window that can be be created and resized to less than 41x36 px (width x height).
 * _Note: Caveats of small windows are no Aero Snap and drag to/from maximize._
 * _Windows 10: Requires `maximizable` to be false. Resizing with the mouse is only possible down to 38x39 px._
 *
 * @property {string} [state="normal"]
 * The visible state of the window on creation.
 * One of:
 * * `"maximized"`
 * * `"minimized"`
 * * `"normal"`
 *
 * @property {string} [taskbarIcon=string] - Deprecated - use `icon` instead._Windows_.
 *
 * @property {string} [taskbarIconGroup=<application uuid>] - _Windows_.
 * Specify a taskbar group for the window.
 * _If omitted, defaults to app's uuid (`fin.Application.getCurrentSync().identity.uuid`)._
 *
 * @property {string} [url="about:blank"]
 * The URL of the window.
 *
 * @property {string} [uuid=<application uuid>]
 * The `uuid` of the application, unique within the set of all `Application`s running in OpenFin Runtime.
 * If omitted, defaults to the `uuid` of the application spawning the window.
 * If given, must match the `uuid` of the  application spawning the window.
 * In other words, the application's `uuid` is the only acceptable value, but is the default, so there's
 * really no need to provide it.
 *
 * @property {boolean} [waitForPageLoad=false]
 * When set to `true`, the window will not appear until the `window` object's `load` event fires.
 * When set to `false`, the window will appear immediately without waiting for content to be loaded.
 */
/**
 * @typedef {object} CapturePageOptions
 * @property { Area } [area] The area of the window to be captured.
 * @property { string } [format='png'] The format of the captured image.  Can be 'png', 'jpg', or 'bmp'.
 * @property { number } [quality=100] Number representing quality of JPEG image only. Between 0 - 100.
 */
/**
 * @typedef { object } Area
 * @property { number } height Area's height
 * @property { number } width Area's width
 * @property { number } x X coordinate of area's starting point
 * @property { number } y Y coordinate of area's starting point
 */
/**
 * @typedef {object} FindInPageOptions
 * @property {boolean} [forward=true] Whether to search forward or backward.
 * @property {boolean} [findNext=false] Whether to begin a new text finding session. Should be true for first requests, and false for subsequent requests. Defaults to false.
 * @property {boolean} [matchCase=false] Whether search should be case-sensitive.
 * @property {boolean} [wordStart=false] Whether to look only at the start of words.
 * @property {boolean} [medialCapitalAsWordStart=false]
 * When combined with wordStart, accepts a match in the middle of a word if the match begins with an uppercase letter followed by a<br>
 * lowercase or non-letter. Accepts several other intra-word matches.
 */
/**
 * @typedef {object} Transition
 * @property {Opacity} opacity - The Opacity transition
 * @property {Position} position - The Position transition
 * @property {Size} size - The Size transition
 */
/**
 * @typedef {object} TransitionOptions
 * @property {boolean} interrupt - This option interrupts the current animation. When false it pushes
this animation onto the end of the animation queue.
 * @property {boolean} relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 */
/**
 * @typedef {object} Size
 * @property {number} duration - The total time in milliseconds this transition should take.
 * @property {boolean} relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 * @property {number} width - Optional if height is present. Defaults to the window's current width.
 * @property {number} height - Optional if width is present. Defaults to the window's current height.
 */
/**
 * @typedef {object} Position
 * @property {number} duration - The total time in milliseconds this transition should take.
 * @property {boolean} relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 * @property {number} left - Defaults to the window's current left position in virtual screen coordinates.
 * @property {number} top - Defaults to the window's current top position in virtual screen coordinates.
 */
/**
 * @typedef {object} Opacity
 * @property {number} duration - The total time in milliseconds this transition should take.
 * @property {boolean} relative - Treat 'opacity' as absolute or as a delta. Defaults to false.
 * @property {number} opacity - This value is clamped from 0.0 to 1.0.
 */
/**
 * Bounds is a interface that has the properties of height,
 * width, left, top which are all numbers
 * @typedef { object } Bounds
 * @property { number } height Get the application height bound
 * @property { number } width Get the application width bound
 * @property { number } top Get the application top bound
 * @property { number } left Get the application left bound
 * @property { number } right Get the application right bound
 * @property { number } bottom Get the application bottom bound
 */
/**
 * @classdesc A basic window that wraps a native HTML window. Provides more fine-grained
 * control over the window state such as the ability to minimize, maximize, restore, etc.
 * By default a window does not show upon instantiation; instead the window's show() method
 * must be invoked manually. The new window appears in the same process as the parent window.
 * It has the ability to listen for <a href="tutorial-Window.EventEmitter.html">window specific events</a>.
 * @class
 * @alias Window
 * @hideconstructor
 */
// The window.Window name is taken
class _Window extends webcontents_1.WebContents {
    constructor(wire, identity) {
        super(wire, identity, 'window');
        this.identity = identity;
    }
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function addListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a listener to the end of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - Called whenever an event of the specified type occurs.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function on
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function once
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a listener to the beginning of the listeners array for the specified event.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Adds a one time listener for the event. The listener is invoked only the first time the event is fired, after which it is removed.
     * The listener is added to the beginning of the listeners array.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function prependOnceListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Remove a listener from the listener array for the specified event.
     * Caution: Calling this method changes the array indices in the listener array behind the listener.
     * @param { string | symbol } eventType  - The type of the event.
     * @param { Function } listener - The callback function.
     * @param { SubOptions } [options] - Option to support event timestamps.
     * @return {Promise.<this>}
     * @function removeListener
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Removes all listeners, or those of the specified event.
     * @param { string | symbol } [eventType]  - The type of the event.
     * @return {Promise.<this>}
     * @function removeAllListeners
     * @memberof Window
     * @instance
     * @tutorial Window.EventEmitter
     */
    /**
     * Gets a base64 encoded image of the window or a part of it.
     * @function capturePage
     * @param { CapturePageOptions } [options] options for capturePage call.
     * @return {Promise.<string>}
     * @memberof Window
     * @instance
     * @tutorial Window.capturePage
     */
    /**
     * Executes Javascript on the window, restricted to windows you own or windows owned by
     * applications you have created.
     * @param { string } code JavaScript code to be executed on the window.
     * @function executeJavaScript
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.executeJavaScript
     */
    /**
     * Gives focus to the window.
     * @return {Promise.<void>}
     * @function focus
     * @emits focused
     * @memberOf Window
     * @instance
     * @tutorial Window.focus
     */
    /**
     * Returns the zoom level of the window.
     * @function getZoomLevel
     * @memberOf Window
     * @instance
     * @return {Promise.<number>}
     * @tutorial Window.getZoomLevel
     */
    /**
     * Sets the zoom level of the window.
     * @param { number } level The zoom level
     * @function setZoomLevel
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.setZoomLevel
     */
    /**
     * Find and highlight text on a page.
     * @param { string } searchTerm Term to find in page
     * @param { FindInPageOptions } options Search options
     * @function findInPage
     * @memberOf Window
     * @instance
     * @return {Promise.<number>}
     * @tutorial Window.findInPage
     */
    /**
     * Stops any findInPage call with the provided action.
     * @param {string} action
     * Action to execute when stopping a find in page:<br>
     * "clearSelection" - Clear the selection.<br>
     * "keepSelection" - Translate the selection into a normal selection.<br>
     * "activateSelection" - Focus and click the selection node.<br>
     * @function stopFindInPage
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.stopFindInPage
     */
    /**
     * Navigates the window to a specified URL. The url must contain the protocol prefix such as http:// or https://.
     * @param {string} url - The URL to navigate the window to.
     * @function navigate
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.navigate
     */
    /**
     * Navigates the window back one page.
     * @function navigateBack
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.navigateBack
     */
    /**
     * Navigates the window forward one page.
     * @function navigateForward
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.navigateForward
     */
    /**
     * Stops any current navigation the window is performing.
     * @function stopNavigation
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.stopNavigation
     */
    /**
     * Reloads the window current page
     * @function reload
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.reload
     */
    /**
     * Prints the window's web page
     * @param { PrintOptions } [options] Printer Options
     * @function print
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.print
     */
    /**
     * Returns an array with all system printers
     * @function getPrinters
     * @memberOf Window
     * @instance
     * @return { Promise.Array.<PrinterInfo> }
     * @tutorial Window.getPrinters
     */
    /**
     * Retrieves the process information associated with a window.
     * @function getProcessInfo
     * @memberOf Window
     * @instance
     * @return {Promise.<EntityProcessDetails>}
     * @tutorial Window.getProcessInfo
     */
    /**
     * Retrieves information on all Shared Workers.
     * @function getSharedWorkers
     * @memberOf Window
     * @instance
     * @return {Promise.Array.<SharedWorkerInfo>}
     * @tutorial Window.getSharedWorkers
     */
    /**
     * Opens the developer tools for the shared worker context.
     * @function inspectSharedWorker
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.inspectSharedWorker
     */
    /**
     * Inspects the shared worker based on its ID.
     * @param { string } workerId - The id of the shared worker.
     * @function inspectSharedWorkerById
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.inspectSharedWorkerById
     */
    /**
     * Opens the developer tools for the service worker context.
     * @function inspectServiceWorker
     * @memberOf Window
     * @instance
     * @return {Promise.<void>}
     * @tutorial Window.inspectServiceWorker
     */
    // create a new window
    createWindow(options) {
        this.wire.sendAction('window-create-window', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return new Promise((resolve, reject) => {
            const CONSTRUCTOR_CB_TOPIC = 'fire-constructor-callback';
            // need to call pageResponse, otherwise when a child window is created, page is not loaded
            const pageResponse = new Promise((resolve) => {
                this.on(CONSTRUCTOR_CB_TOPIC, function fireConstructor(response) {
                    let cbPayload;
                    const { success } = response;
                    const responseData = response.data;
                    const { message } = responseData;
                    if (success) {
                        cbPayload = {
                            httpResponseCode: responseData.httpResponseCode,
                            apiInjected: responseData.apiInjected
                        };
                    }
                    else {
                        cbPayload = {
                            message: responseData.message,
                            networkErrorCode: responseData.networkErrorCode,
                            stack: responseData.stack
                        };
                    }
                    this.removeListener(CONSTRUCTOR_CB_TOPIC, fireConstructor);
                    resolve({
                        message,
                        cbPayload,
                        success
                    });
                });
            });
            // set defaults:
            if (options.waitForPageLoad === undefined) {
                options.waitForPageLoad = false;
            }
            if (options.autoShow === undefined) {
                options.autoShow = true;
            }
            const windowCreation = this.wire.environment.createChildContent({ entityType: EntityType_1.default.WINDOW, options });
            Promise.all([pageResponse, windowCreation])
                .then((resolvedArr) => {
                const pageResolve = resolvedArr[0];
                if (pageResolve.success) {
                    resolve(this);
                }
                else {
                    reject(pageResolve);
                }
                try {
                    // this is to enforce a 5.0 contract that the child's main function
                    // will not fire before the parent's success callback on creation.
                    // if the child window is not accessible (CORS) this contract does
                    // not hold.
                    const webWindow = this.getWebWindow();
                    webWindow.fin.__internal_.openerSuccessCBCalled();
                }
                catch (e) {
                    // common for main windows, we do not want to expose this error. here just to have a debug target.
                    // console.error(e);
                }
            })
                .catch(reject);
        });
    }
    /**
     * Retrieves an array of frame info objects representing the main frame and any
     * iframes that are currently on the page.
     * @return {Promise.<Array<FrameInfo>>}
     * @tutorial Window.getAllFrames
     */
    getAllFrames() {
        return this.wire.sendAction('get-all-frames', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Gets the current bounds (top, bottom, right, left, width, height) of the window.
     * @return {Promise.<Bounds>}
     * @tutorial Window.getBounds
     */
    getBounds() {
        return this.wire
            .sendAction('get-window-bounds', this.identity)
            .then(({ payload }) => payload.data);
    }
    /**
     * Centers the window on its current screen.
     * @return {Promise.<void>}
     * @tutorial Window.center
     */
    center() {
        return this.wire.sendAction('center-window', this.identity).then(() => undefined);
    }
    /**
     * Removes focus from the window.
     * @return {Promise.<void>}
     * @tutorial Window.blur
     */
    blur() {
        return this.wire.sendAction('blur-window', this.identity).then(() => undefined);
    }
    /**
     * Brings the window to the front of the window stack.
     * @return {Promise.<void>}
     * @tutorial Window.bringToFront
     */
    bringToFront() {
        return this.wire.sendAction('bring-window-to-front', this.identity).then(() => undefined);
    }
    /**
     * Performs the specified window transitions.
     * @param {Transition} transitions - Describes the animations to perform. See the tutorial.
     * @param {TransitionOptions} options - Options for the animation. See the tutorial.
     * @return {Promise.<void>}
     * @tutorial Window.animate
     */
    animate(transitions, options) {
        return this.wire
            .sendAction('animate-window', {
            transitions,
            options,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Hides the window.
     * @return {Promise.<void>}
     * @tutorial Window.hide
     */
    hide() {
        return this.wire.sendAction('hide-window', this.identity).then(() => undefined);
    }
    /**
     * closes the window application
     * @param { boolean } [force = false] Close will be prevented from closing when force is false and
     *  ‘close-requested’ has been subscribed to for application’s main window.
     * @return {Promise.<void>}
     * @tutorial Window.close
     */
    close(force = false) {
        return this.wire.sendAction('close-window', { force, ...this.identity }).then(() => {
            Object.setPrototypeOf(this, null);
            return undefined;
        });
    }
    focusedWebViewWasChanged() {
        return this.wire.sendAction('focused-webview-changed', this.identity).then(() => undefined);
    }
    /**
     * Returns the native OS level Id.
     * In Windows, it will return the Windows [handle](https://docs.microsoft.com/en-us/windows/desktop/WinProg/windows-data-types#HWND).
     * @return {Promise.<string>}
     * @tutorial Window.getNativeId
     */
    getNativeId() {
        return this.wire.sendAction('get-window-native-id', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves window's attached views.
     * @experimental
     * @return {Promise.Array.<View>}
     * @tutorial Window.getCurrentViews
     */
    async getCurrentViews() {
        const { payload } = await this.wire.sendAction('window-get-views', this.identity);
        return payload.data.map((id) => new view_1.View(this.wire, id));
    }
    /*
     * @deprecated Use {@link Window.disableUserMovement} instead.
     */
    disableFrame() {
        console.warn('Function is deprecated; use disableUserMovement instead.');
        return this.wire.sendAction('disable-window-frame', this.identity).then(() => undefined);
    }
    /**
     * Prevents a user from changing a window's size/position when using the window's frame.
     * @return {Promise.<void>}
     * @tutorial Window.disableUserMovement
     */
    disableUserMovement() {
        return this.wire.sendAction('disable-window-frame', this.identity).then(() => undefined);
    }
    /*
     * @deprecated Use {@link Window.enableUserMovement} instead.
     */
    enableFrame() {
        console.warn('Function is deprecated; use enableUserMovement instead.');
        return this.wire.sendAction('enable-window-frame', this.identity).then(() => undefined);
    }
    /**
     * Re-enables user changes to a window's size/position when using the window's frame.
     * @return {Promise.<void>}
     * @tutorial Window.enableUserMovement
     */
    enableUserMovement() {
        return this.wire.sendAction('enable-window-frame', this.identity).then(() => undefined);
    }
    /**
     * Flashes the window’s frame and taskbar icon until stopFlashing is called or until a focus event is fired.
     * @return {Promise.<void>}
     * @tutorial Window.flash
     */
    flash() {
        return this.wire.sendAction('flash-window', this.identity).then(() => undefined);
    }
    /**
     * Stops the taskbar icon from flashing.
     * @return {Promise.<void>}
     * @tutorial Window.stopFlashing
     */
    stopFlashing() {
        return this.wire.sendAction('stop-flash-window', this.identity).then(() => undefined);
    }
    /**
     * Gets an information object for the window.
     * @return {Promise.<WindowInfo>}
     * @tutorial Window.getInfo
     */
    getInfo() {
        return this.wire.sendAction('get-window-info', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Retrieves the window's Layout
     * @return {Promise.<Layout>}
     * @tutorial Window.getLayout
     * @experimental
     */
    async getLayout() {
        this.wire.sendAction('window-get-layout', this.identity).catch((e) => {
            // don't expose
        });
        const opts = await this.getOptions();
        if (!opts.layout) {
            throw new Error('Window does not have a Layout');
        }
        return this.fin.Platform.Layout.wrap(this.identity);
    }
    /**
     * Gets the current settings of the window.
     * @return {Promise.<any>}
     * @tutorial Window.getOptions
     */
    getOptions() {
        return this.wire.sendAction('get-window-options', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Gets the parent application.
     * @return {Promise.<Application>}
     * @tutorial Window.getParentApplication
     */
    getParentApplication() {
        this.wire.sendAction('window-get-parent-application', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return Promise.resolve(new application_1.Application(this.wire, this.identity));
    }
    /**
     * Gets the parent window.
     * @return {Promise.<_Window>}
     * @tutorial Window.getParentWindow
     */
    getParentWindow() {
        this.wire.sendAction('window-get-parent-window', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return Promise.resolve(new application_1.Application(this.wire, this.identity)).then((app) => app.getWindow());
    }
    /**
     * ***DEPRECATED - please use Window.capturePage.***
     * Gets a base64 encoded PNG image of the window or just part a of it.
     * @param { Area } [area] The area of the window to be captured.
     * Omitting it will capture the whole visible window.
     * @return {Promise.<string>}
     * @tutorial Window.capturePage
     */
    async getSnapshot(area) {
        const req = { area, ...this.identity };
        console.warn('Window.getSnapshot has been deprecated, please use Window.capturePage');
        const res = await this.wire.sendAction('get-window-snapshot', req);
        return res.payload.data;
    }
    /**
     * Gets the current state ("minimized", "maximized", or "restored") of the window.
     * @return {Promise.<string>}
     * @tutorial Window.getState
     */
    getState() {
        return this.wire.sendAction('get-window-state', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Previously called getNativeWindow.
     * Returns the [Window Object](https://developer.mozilla.org/en-US/docs/Web/API/Window)
     * that represents the web context of the target window. This is the same object that
     * you would get from calling [window.open()](https://developer.mozilla.org/en-US/docs/Web/API/Window/open) in a standard web context.
     * The target window needs to be in the same application as the requesting window
     * as well as comply with [same-origin](https://developer.mozilla.org/en-US/docs/Web/Security/Same-origin_policy) policy requirements.
     * @return {object}
     * @tutorial Window.getWebWindow
     */
    getWebWindow() {
        this.wire.sendAction('window-get-web-window', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this.wire.environment.getWebWindow(this.identity);
    }
    /**
     * Determines if the window is a main window.
     * @return {boolean}
     * @tutorial Window.isMainWindow
     */
    isMainWindow() {
        this.wire.sendAction('window-is-main-window', this.identity).catch((e) => {
            // we do not want to expose this error, just continue if this analytics-only call fails
        });
        return this.me.uuid === this.me.name;
    }
    /**
     * Determines if the window is currently showing.
     * @return {Promise.<boolean>}
     * @tutorial Window.isShowing
     */
    isShowing() {
        return this.wire.sendAction('is-window-showing', this.identity).then(({ payload }) => payload.data);
    }
    /**
     * Maximizes the window
     * @return {Promise.<void>}
     * @tutorial Window.maximize
     */
    maximize() {
        return this.wire.sendAction('maximize-window', this.identity).then(() => undefined);
    }
    /**
     * Minimizes the window.
     * @return {Promise.<void>}
     * @tutorial Window.minimize
     */
    minimize() {
        return this.wire.sendAction('minimize-window', this.identity).then(() => undefined);
    }
    /**
     * Moves the window by a specified amount.
     * @param { number } deltaLeft The change in the left position of the window
     * @param { number } deltaTop The change in the top position of the window
     * @return {Promise.<void>}
     * @tutorial Window.moveBy
     */
    moveBy(deltaLeft, deltaTop) {
        return this.wire
            .sendAction('move-window-by', {
            deltaLeft,
            deltaTop,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Moves the window to a specified location.
     * @param { number } left The left position of the window
     * @param { number } top The top position of the window
     * @return {Promise.<void>}
     * @tutorial Window.moveTo
     */
    moveTo(left, top) {
        return this.wire
            .sendAction('move-window', {
            left,
            top,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Resizes the window by a specified amount.
     * @param { number } deltaWidth The change in the width of the window
     * @param { number } deltaHeight The change in the height of the window
     * @param { AnchorType } anchor Specifies a corner to remain fixed during the resize.
     * Can take the values: "top-left", "top-right", "bottom-left", or "bottom-right".
     * If undefined, the default is "top-left"
     * @return {Promise.<void>}
     * @tutorial Window.resizeBy
     */
    resizeBy(deltaWidth, deltaHeight, anchor) {
        return this.wire
            .sendAction('resize-window-by', {
            deltaWidth: Math.floor(deltaWidth),
            deltaHeight: Math.floor(deltaHeight),
            anchor,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Resizes the window to the specified dimensions.
     * @param { number } width The change in the width of the window
     * @param { number } height The change in the height of the window
     * @param { AnchorType } anchor Specifies a corner to remain fixed during the resize.
     * Can take the values: "top-left", "top-right", "bottom-left", or "bottom-right".
     * If undefined, the default is "top-left"
     * @return {Promise.<void>}
     * @tutorial Window.resizeTo
     */
    resizeTo(width, height, anchor) {
        return this.wire
            .sendAction('resize-window', {
            width: Math.floor(width),
            height: Math.floor(height),
            anchor,
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Restores the window to its normal state (i.e., unminimized, unmaximized).
     * @return {Promise.<void>}
     * @tutorial Window.restore
     */
    restore() {
        return this.wire.sendAction('restore-window', this.identity).then(() => undefined);
    }
    /**
     * Will bring the window to the front of the entire stack and give it focus.
     * @return {Promise.<void>}
     * @tutorial Window.setAsForeground
     */
    setAsForeground() {
        return this.wire.sendAction('set-foreground-window', this.identity).then(() => undefined);
    }
    /**
     * Sets the window's size and position.
     * @property { Bounds } bounds This is a * @type {string} name - name of the window.object that holds the propertys of
     * @return {Promise.<void>}
     * @tutorial Window.setBounds
     */
    setBounds(bounds) {
        return this.wire.sendAction('set-window-bounds', { ...bounds, ...this.identity }).then(() => undefined);
    }
    /**
     * Shows the window if it is hidden.
     * @param { boolean } [force = false] Show will be prevented from showing when force is false and
     *  ‘show-requested’ has been subscribed to for application’s main window.
     * @return {Promise.<void>}
     * @tutorial Window.show
     */
    show(force = false) {
        return this.wire.sendAction('show-window', { force, ...this.identity }).then(() => undefined);
    }
    /**
     * Shows the window if it is hidden at the specified location.
     * If the toggle parameter is set to true, the window will
     * alternate between showing and hiding.
     * @param { number } left The left position of the window
     * @param { number } top The right position of the window
     * @param { boolean } force Show will be prevented from closing when force is false and
     * ‘show-requested’ has been subscribed to for application’s main window
     * @return {Promise.<void>}
     * @tutorial Window.showAt
     */
    showAt(left, top, force = false) {
        return this.wire
            .sendAction('show-at-window', {
            force,
            left: Math.floor(left),
            top: Math.floor(top),
            ...this.identity
        })
            .then(() => undefined);
    }
    /**
     * Shows the Chromium Developer Tools
     * @return {Promise.<void>}
     * @tutorial Window.showDeveloperTools
     */
    /**
     * Updates the window using the passed options.
     * Values that are objects are deep-merged, overwriting only the values that are provided.
     * @param {*} options Changes a window's options that were defined upon creation. See tutorial
     * @return {Promise.<void>}
     * @tutorial Window.updateOptions
     */
    updateOptions(options) {
        return this.wire.sendAction('update-window-options', { options, ...this.identity }).then(() => undefined);
    }
    /**
     * Provides credentials to authentication requests
     * @param { string } userName userName to provide to the authentication challenge
     * @param { string } password password to provide to the authentication challenge
     * @return {Promise.<void>}
     * @tutorial Window.authenticate
     */
    authenticate(userName, password) {
        return this.wire
            .sendAction('window-authenticate', { userName, password, ...this.identity })
            .then(() => undefined);
    }
    /**
     * @typedef {object} ShowPopupMenuOptions
     * @property {Array<MenuItemTemplate>} template - An array describing the menu to show.
     * @property {number} [x] - The window x coordinate where to show the menu. Defaults to mouse position. If using must also use `y`.
     * @property {number} [y] - The window y coordinate where to show the menu. Defaults to mouse position. If using must also use `x`
     */
    /**
     * @typedef {object} MenuItemTemplate
     * @property {*} data Data to be returned if the user selects the element. Must be serializable. Large objects can have a performance impact.
     * @property {'normal' | 'separator' | 'submenu' | 'checkbox'} [type] - Defaults to 'normal' unless a 'submenu' key exists
     * @property {string} [label] - The text to show on the menu item. Should be left undefined for `type: 'separator'`
     * @property {boolean} [enabled] - If false, the menu item will be greyed out and unclickable.
     * @property {boolean} [visible] - If false, the menu item will be entirely hidden.
     * @property {boolean} [checked] - Should only be specified for `checkbox` type menu items.
     * @property {Array<MenuItemTemplate>} [submenu] Should be specified for `submenu` type menu items. If `submenu` is specified, the `type: 'submenu'` can be omitted.
     */
    /**
     * @typedef {object} MenuResult
     * @property {'clicked' | 'closed'} result - Whether the user clicked on a menu item or the menu was closed (user clicked elsewhere).
     * @property {* | undefined} [data] - The data property of the menu item clicked by the user. Only defined if result was `clicked`.
     */
    /**
     * Shows a menu on the window. Returns a promise that resolves when the user has either selected an item or closed the menu. (This may take longer than other apis).
     * Resolves to an object with `{result: 'clicked', data }` where data is the data field on the menu item clicked, or `{result 'closed'}` when the user doesn't select anything.
     * Calling this method will close previously opened menus.
     * @experimental
     * @param {ShowPopupMenuOptions} options
     * @return {Promise<MenuResult>}
     * @tutorial Window.showPopupMenu
     */
    async showPopupMenu(options) {
        const { payload } = await this.wire.sendAction('show-popup-menu', { options, ...this.identity });
        return payload.data;
    }
    /**
     * Closes the window's popup menu, if one exists.
     * @experimental
     * @return {Promise<void>}
     * @tutorial Window.closePopupMenu
     */
    async closePopupMenu() {
        return this.wire.sendAction('close-popup-menu', { ...this.identity }).then(() => undefined);
    }
}
exports._Window = _Window;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/window/bounds-changed.js":
/*!***************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/window/bounds-changed.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoundsChangeType = void 0;
const base_1 = __webpack_require__(/*! ../base */ "../../node_modules/openfin-adapter/src/api/base.js");
class BoundsChangedReply extends base_1.Reply {
}
exports["default"] = BoundsChangedReply;
var BoundsChangeType;
(function (BoundsChangeType) {
    BoundsChangeType[BoundsChangeType["POSITION"] = 0] = "POSITION";
    BoundsChangeType[BoundsChangeType["SIZE"] = 1] = "SIZE";
    BoundsChangeType[BoundsChangeType["POSITION_AND_SIZE"] = 2] = "POSITION_AND_SIZE";
})(BoundsChangeType = exports.BoundsChangeType || (exports.BoundsChangeType = {}));


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/window/index.js":
/*!******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/window/index.js ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
}
Object.defineProperty(exports, "__esModule", ({ value: true }));
const Factory_1 = __webpack_require__(/*! ./Factory */ "../../node_modules/openfin-adapter/src/api/window/Factory.js");
exports["default"] = Factory_1.default;
__exportStar(__webpack_require__(/*! ./shapes */ "../../node_modules/openfin-adapter/src/api/window/shapes.js"), exports);
__exportStar(__webpack_require__(/*! ./Instance */ "../../node_modules/openfin-adapter/src/api/window/Instance.js"), exports);
__exportStar(__webpack_require__(/*! ./bounds-changed */ "../../node_modules/openfin-adapter/src/api/window/bounds-changed.js"), exports);


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/api/window/shapes.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/api/window/shapes.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/mock.js":
/*!******************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/mock.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.inOpenFin = exports.fin = void 0;
/* eslint-disable import/prefer-default-export */
/* eslint-disable spaced-comment */
/* eslint-disable @typescript-eslint/triple-slash-reference */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable class-methods-use-this */
/// <reference path="../OpenFin.d.ts"/>
const events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
const fin_1 = __webpack_require__(/*! ./api/fin */ "../../node_modules/openfin-adapter/src/api/fin.js");
const EntityType_1 = __webpack_require__(/*! ./shapes/EntityType */ "../../node_modules/openfin-adapter/src/shapes/EntityType.js");
const transport_1 = __webpack_require__(/*! ./transport/transport */ "../../node_modules/openfin-adapter/src/transport/transport.js");
class MockWire extends events_1.EventEmitter {
    connect(address) {
        throw new Error('You are not running in OpenFin.');
    }
    connectSync() {
        throw new Error('You are not running in OpenFin.');
    }
    send(data) {
        throw new Error('You are not running in OpenFin.');
    }
    shutdown() {
        throw new Error('You are not running in OpenFin.');
    }
    // eslint-disable-next-line no-useless-constructor
    constructor() {
        super();
    }
}
class MockEnvironment {
    constructor() {
        this.childViews = true;
    }
    getManagerConstructor() {
        throw new Error('Method not implemented.');
    }
    getProviderInitializer() {
        throw new Error('Method not implemented.');
    }
    writeToken(path, token) {
        throw new Error('Method not implemented.');
    }
    retrievePort(config) {
        throw new Error('Method not implemented.');
    }
    getNextMessageId() {
        throw new Error('Method not implemented.');
    }
    getRandomId() {
        throw new Error('Method not implemented.');
    }
    createChildContent(options) {
        throw new Error('Method not implemented.');
    }
    getWebWindow(identity) {
        throw new Error('Method not implemented.');
    }
    getCurrentEntityIdentity() {
        throw new Error('Method not implemented.');
    }
    getCurrentEntityType() {
        return EntityType_1.default.UNKNOWN;
    }
    raiseEvent(eventName, eventArgs) {
        throw new Error('Method not implemented.');
    }
    getUrl() {
        throw new Error('Method not implemented.');
    }
    whenReady() {
        throw new Error('Method not implemented.');
    }
}
exports.fin = ((typeof window !== 'undefined' && ((_a = window) === null || _a === void 0 ? void 0 : _a.fin)) ||
    (() => {
        const environment = new MockEnvironment();
        const transport = new transport_1.default(MockWire, environment, {
            uuid: '',
            name: ''
        });
        return new fin_1.default(transport);
    })());
exports.inOpenFin = typeof window !== 'undefined' && typeof window.fin === 'object';


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/shapes/EntityType.js":
/*!*******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/shapes/EntityType.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
var EntityType;
(function (EntityType) {
    EntityType["WINDOW"] = "window";
    EntityType["IFRAME"] = "iframe";
    EntityType["EXTERNAL"] = "external connection";
    EntityType["VIEW"] = "view";
    EntityType["UNKNOWN"] = "unknown";
})(EntityType || (EntityType = {}));
exports["default"] = EntityType;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/shapes/Platform.js":
/*!*****************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/shapes/Platform.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WindowCreationReason = exports.HostContextChangedReasons = void 0;
var HostContextChangedReasons;
(function (HostContextChangedReasons) {
    HostContextChangedReasons["updated"] = "updated";
    HostContextChangedReasons["reparented"] = "reparented";
})(HostContextChangedReasons = exports.HostContextChangedReasons || (exports.HostContextChangedReasons = {}));
var WindowCreationReason;
(function (WindowCreationReason) {
    WindowCreationReason["Tearout"] = "tearout";
    WindowCreationReason["CreateViewWithoutTarget"] = "create-view-without-target";
    WindowCreationReason["APICall"] = "api-call";
    WindowCreationReason["AppCreation"] = "app-creation";
    WindowCreationReason["Restore"] = "restore";
})(WindowCreationReason = exports.WindowCreationReason || (exports.WindowCreationReason = {}));


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/transport/fin_store.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/transport/fin_store.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getFin = exports.registerFin = void 0;
const finMap = new WeakMap();
function registerFin(wire, fin) {
    finMap.set(wire, fin);
}
exports.registerFin = registerFin;
function getFin(wire) {
    const fin = finMap.get(wire);
    if (!fin) {
        throw new Error('Could not locate fin api for given transport');
    }
    return fin;
}
exports.getFin = getFin;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/transport/transport-errors.js":
/*!****************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/transport/transport-errors.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RuntimeError = exports.NotSupportedError = exports.NotImplementedError = exports.NoAckError = exports.DuplicateCorrelationError = exports.UnexpectedActionError = exports.DisconnectedError = void 0;
/* eslint-disable max-classes-per-file */
const wire_1 = __webpack_require__(/*! ./wire */ "../../node_modules/openfin-adapter/src/transport/wire.js");
class DisconnectedError extends Error {
    constructor(readyState) {
        super(`Expected websocket state OPEN but found ${wire_1.READY_STATE[readyState]}`);
        this.readyState = readyState;
    }
}
exports.DisconnectedError = DisconnectedError;
class UnexpectedActionError extends Error {
}
exports.UnexpectedActionError = UnexpectedActionError;
class DuplicateCorrelationError extends Error {
}
exports.DuplicateCorrelationError = DuplicateCorrelationError;
class NoAckError extends Error {
}
exports.NoAckError = NoAckError;
class NotImplementedError extends Error {
}
exports.NotImplementedError = NotImplementedError;
class NotSupportedError extends Error {
}
exports.NotSupportedError = NotSupportedError;
class RuntimeError extends Error {
    constructor(data) {
        const payload = data.payload || data;
        const { reason, error } = payload;
        super(reason);
        this.name = 'RuntimeError';
        if (error === null || error === void 0 ? void 0 : error.stack) {
            this.stack = error.stack;
        }
    }
}
exports.RuntimeError = RuntimeError;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/transport/transport.js":
/*!*********************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/transport/transport.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _wire;
Object.defineProperty(exports, "__esModule", ({ value: true }));
const events_1 = __webpack_require__(/*! events */ "../../node_modules/events/events.js");
const wire_1 = __webpack_require__(/*! ./wire */ "../../node_modules/openfin-adapter/src/transport/wire.js");
const transport_errors_1 = __webpack_require__(/*! ./transport-errors */ "../../node_modules/openfin-adapter/src/transport/transport-errors.js");
const eventAggregator_1 = __webpack_require__(/*! ../api/events/eventAggregator */ "../../node_modules/openfin-adapter/src/api/events/eventAggregator.js");
const me_1 = __webpack_require__(/*! ../api/me */ "../../node_modules/openfin-adapter/src/api/me.js");
class Transport extends events_1.EventEmitter {
    constructor(WireType, environment, config) {
        super();
        this.wireListeners = new Map();
        this.topicRefMap = new Map();
        this.eventAggregator = new eventAggregator_1.default();
        this.messageHandlers = [this.eventAggregator.dispatchEvent];
        _wire.set(this, void 0);
        this.connectSync = () => {
            const wire = __classPrivateFieldGet(this, _wire);
            wire.connectSync();
        };
        // This function is only used in our tests.
        this.getPort = () => {
            if (this.environment.constructor.name !== 'NodeEnvironment') {
                throw new transport_errors_1.NotImplementedError('Not Implemented');
            }
            const wire = __classPrivateFieldGet(this, _wire);
            return wire.wire.url.split(':').slice(-1)[0];
        };
        /* `READY_STATE` is an instance var set by `constructor` to reference the `WebTransportSocket.READY_STATE` enum.
         * This is syntactic sugar that makes the enum accessible through the `wire` property of the various `fin` singletons.
         * For example, `fin.system.wire.READY_STATE` is a shortcut to `fin.system.wire.wire.constructor.READY_STATE`.
         * However it is accessed, the enum is useful for interrogating the state of the web socket on send failure.
         * The `err.readyState` value is passed to the `reject` handler of the promise returned by either of
         * `sendAction` or `ferryAction`, and hence all the API methods in the various `fin` singletons that call them.
         * The enum can be used in two distinct ways by the `reject` handler (using `fin.System.getVersion` by way of example):
         * 1. State name by state value:
         * fin.system.getVersion().catch(err => { console.log('State:', fin.system.wire.READY_STATE[err.readyState]); });
         * 2. State value by state name:
         * fin.system.getVersion().catch(err => { console.log('Closed:', err.readyState === fin.system.wire.READY_STATE.CLOSED); });
         * Note that `reject` is called when and only when `readyState` is not `OPEN`.
         */
        this.READY_STATE = wire_1.READY_STATE;
        __classPrivateFieldSet(this, _wire, new WireType(this.onmessage.bind(this)));
        this.environment = environment;
        this.sendRaw = __classPrivateFieldGet(this, _wire).send.bind(__classPrivateFieldGet(this, _wire));
        this.registerMessageHandler(this.handleMessage.bind(this));
        __classPrivateFieldGet(this, _wire).on('disconnected', () => {
            for (const [, { reject }] of this.wireListeners) {
                reject('Remote connection has closed');
            }
            this.wireListeners.clear();
            this.emit('disconnected');
        });
        const { uuid, name } = config;
        const entityType = this.environment.getCurrentEntityType();
        this.me = me_1.getBaseMe(entityType, uuid, name);
    }
    shutdown() {
        const wire = __classPrivateFieldGet(this, _wire);
        return wire.shutdown();
    }
    async connect(config) {
        if (wire_1.isExistingConnectConfig(config)) {
            return this.connectByPort(config);
        }
        if (wire_1.isNewConnectConfig(config)) {
            const port = await this.environment.retrievePort(config);
            return this.connectByPort({ ...config, address: `ws://localhost:${port}` });
        }
        return undefined;
    }
    async connectByPort(config) {
        const { address, uuid } = config;
        const reqAuthPayload = { ...config, type: 'file-token' };
        const wire = __classPrivateFieldGet(this, _wire);
        await wire.connect(address);
        const requestExtAuthRet = await this.sendAction('request-external-authorization', {
            uuid,
            type: 'file-token'
        }, true);
        if (requestExtAuthRet.action !== 'external-authorization-response') {
            throw new transport_errors_1.UnexpectedActionError(requestExtAuthRet.action);
        }
        const { token } = requestExtAuthRet.payload;
        await this.environment.writeToken(requestExtAuthRet.payload.file, requestExtAuthRet.payload.token);
        const requestAuthRet = await this.sendAction('request-authorization', reqAuthPayload, true);
        if (requestAuthRet.action !== 'authorization-response') {
            throw new transport_errors_1.UnexpectedActionError(requestAuthRet.action);
        }
        else if (requestAuthRet.payload.success !== true) {
            throw new transport_errors_1.RuntimeError(requestAuthRet.payload);
        }
        else {
            return token;
        }
    }
    sendAction(action, payload = {}, uncorrelated = false
    // specialResponse type is only used for 'requestAuthorization'
    ) {
        return new Promise((resolve, reject) => {
            const id = this.environment.getNextMessageId();
            const msg = {
                action,
                payload,
                messageId: id
            };
            const wire = __classPrivateFieldGet(this, _wire);
            this.addWireListener(id, resolve, reject, uncorrelated);
            return wire.send(msg).catch(reject);
        });
    }
    ferryAction(origData) {
        return new Promise((resolve, reject) => {
            const id = this.environment.getNextMessageId();
            origData.messageId = id;
            const resolver = (data) => {
                resolve(data.payload);
            };
            const wire = __classPrivateFieldGet(this, _wire);
            return wire
                .send(origData)
                .then(() => this.addWireListener(id, resolver, reject, false))
                .catch(reject);
        });
    }
    registerMessageHandler(handler) {
        this.messageHandlers.push(handler);
    }
    addWireListener(id, resolve, reject, uncorrelated) {
        if (uncorrelated) {
            this.uncorrelatedListener = resolve;
        }
        else if (this.wireListeners.has(id)) {
            reject(new transport_errors_1.DuplicateCorrelationError(String(id)));
        }
        else {
            this.wireListeners.set(id, { resolve, reject });
        }
        // Timeout and reject()?
    }
    // This method executes message handlers until the _one_ that handles the message (returns truthy) has run
    onmessage(data) {
        for (const h of this.messageHandlers) {
            h.call(null, data);
        }
    }
    handleMessage(data) {
        const id = data.correlationId || NaN;
        if (!('correlationId' in data)) {
            if (this.uncorrelatedListener) {
                this.uncorrelatedListener.call(null, data);
            }
            this.uncorrelatedListener = () => {
                // empty block
            };
        }
        else if (!this.wireListeners.has(id)) {
            return false;
        }
        else {
            // We just checked for existence above
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const { resolve, reject } = this.wireListeners.get(id);
            if (data.action !== 'ack') {
                reject(new transport_errors_1.NoAckError(data.action));
            }
            else if (!('payload' in data)) {
                reject(new transport_errors_1.RuntimeError(data));
            }
            else if (!data.payload.success) {
                reject(new transport_errors_1.RuntimeError(data.payload));
            }
            else {
                resolve.call(null, data);
            }
            this.wireListeners.delete(id);
        }
        return true;
    }
}
_wire = new WeakMap();
exports["default"] = Transport;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/transport/wire.js":
/*!****************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/transport/wire.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.READY_STATE = exports.isInternalConnectConfig = exports.isPortDiscoveryConfig = exports.isNewConnectConfig = exports.isExistingConnectConfig = exports.isExternalConfig = void 0;
function isExternalConfig(config) {
    if (typeof config.manifestUrl === 'string') {
        return true;
    }
    return false;
}
exports.isExternalConfig = isExternalConfig;
function isExistingConnectConfig(config) {
    return hasUuid(config) && typeof config.address === 'string';
}
exports.isExistingConnectConfig = isExistingConnectConfig;
function hasUuid(config) {
    return typeof config.uuid === 'string';
}
function hasRuntimeVersion(config) {
    return config.runtime && typeof config.runtime.version === 'string';
}
function isNewConnectConfig(config) {
    return hasUuid(config) && hasRuntimeVersion(config);
}
exports.isNewConnectConfig = isNewConnectConfig;
function isPortDiscoveryConfig(config) {
    return (isExternalConfig(config) && hasRuntimeVersion(config)) || isNewConnectConfig(config);
}
exports.isPortDiscoveryConfig = isPortDiscoveryConfig;
function isInternalConnectConfig(config) {
    return isExistingConnectConfig(config) || isNewConnectConfig(config);
}
exports.isInternalConnectConfig = isInternalConnectConfig;
var READY_STATE;
(function (READY_STATE) {
    READY_STATE[READY_STATE["CONNECTING"] = 0] = "CONNECTING";
    READY_STATE[READY_STATE["OPEN"] = 1] = "OPEN";
    READY_STATE[READY_STATE["CLOSING"] = 2] = "CLOSING";
    READY_STATE[READY_STATE["CLOSED"] = 3] = "CLOSED"; // The connection is closed.
})(READY_STATE = exports.READY_STATE || (exports.READY_STATE = {}));


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/util/promises.js":
/*!***************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/util/promises.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.promiseMapSerial = exports.serial = exports.promiseMap = exports.promisify = void 0;
function promisify(func) {
    return (...args) => new Promise((resolve, reject) => {
        func(...args, (err, val) => (err ? reject(err) : resolve(val)));
    });
}
exports.promisify = promisify;
async function promiseMap(arr, asyncF) {
    return Promise.all(arr.map(asyncF));
}
exports.promiseMap = promiseMap;
async function serial(arr) {
    const ret = [];
    for (const func of arr) {
        // eslint-disable-next-line no-await-in-loop
        const next = await func();
        ret.push(next);
    }
    return ret;
}
exports.serial = serial;
async function promiseMapSerial(arr, func) {
    return serial(arr.map((value, index, array) => () => func(value, index, array)));
}
exports.promiseMapSerial = promiseMapSerial;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/util/ref-counter.js":
/*!******************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/util/ref-counter.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
class RefCoutner {
    constructor() {
        this.topicRefMap = new Map();
    }
    // returns the ref count after incrementing
    incRefCount(key) {
        const refCount = this.topicRefMap.get(key);
        let returnCount;
        if (!refCount) {
            this.topicRefMap.set(key, 1);
            returnCount = 1;
        }
        else {
            const newRefCount = refCount + 1;
            returnCount = newRefCount;
            this.topicRefMap.set(key, newRefCount);
        }
        return returnCount;
    }
    // returns the ref count after decrementing, or -1 if the key already had no references
    decRefCount(key) {
        const refCount = this.topicRefMap.get(key);
        let returnCount;
        if (refCount) {
            const newRefCount = refCount - 1;
            this.topicRefMap.set(key, newRefCount);
            returnCount = newRefCount;
        }
        else {
            returnCount = -1;
        }
        return returnCount;
    }
    // Execute firstAction if it is the first such ref, else execute nonFirstAction.
    // In either case the return value is that of the action executed
    actOnFirst(key, firstAction, nonFirstAction) {
        const numRefs = this.incRefCount(key);
        const isFirstRef = numRefs === 1;
        return isFirstRef ? firstAction() : nonFirstAction();
    }
    // Execute lastAction if it is the first such ref, else execute nonLastAction.
    // In either case the return value is that of the action executed
    actOnLast(key, lastAction, nonLastAction) {
        const numRefs = this.decRefCount(key);
        const isLastRef = numRefs === 0;
        return isLastRef ? lastAction() : nonLastAction();
    }
}
exports["default"] = RefCoutner;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/util/runtimeVersioning.js":
/*!************************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/util/runtimeVersioning.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.runtimeUuidMeetsMinimumRuntimeVersion = exports.parseRuntimeUuid = exports.meetsMinimumRuntimeVersion = void 0;
function vNum(x) {
    return [...x.split('.').reverse().entries()].reduce((p, [i, v]) => p + +v * 10000 ** i, 0);
}
/*
  Compares runtime versions to see if the current runtime meets your desired minimum.
*/
function meetsMinimumRuntimeVersion(currentVersion, minVersion) {
    const currentVersionParsed = vNum(currentVersion);
    const minVersionParsed = vNum(minVersion);
    return currentVersionParsed >= minVersionParsed;
}
exports.meetsMinimumRuntimeVersion = meetsMinimumRuntimeVersion;
// Strips the port info from the runtimeUuid, leaving just the runtime version.
function parseRuntimeUuid(runtimeUuid) {
    return runtimeUuid.split('/')[0];
}
exports.parseRuntimeUuid = parseRuntimeUuid;
function runtimeUuidMeetsMinimumRuntimeVersion(runtimeUuid, minVersion) {
    const runtimeVersion = parseRuntimeUuid(runtimeUuid);
    return meetsMinimumRuntimeVersion(runtimeVersion, minVersion);
}
exports.runtimeUuidMeetsMinimumRuntimeVersion = runtimeUuidMeetsMinimumRuntimeVersion;


/***/ }),

/***/ "../../node_modules/openfin-adapter/src/util/validate.js":
/*!***************************************************************!*\
  !*** ../../node_modules/openfin-adapter/src/util/validate.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateIdentity = void 0;
function validateIdentity(identity) {
    let errorMsg;
    if (typeof identity !== 'object' || typeof identity.uuid !== 'string') {
        errorMsg = 'Not a valid identity object';
    }
    return errorMsg;
}
exports.validateIdentity = validateIdentity;
exports["default"] = { validateIdentity };


/***/ }),

/***/ "./client/src/bootstrapper.ts":
/*!************************************!*\
  !*** ./client/src/bootstrapper.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = void 0;
const mock_1 = __webpack_require__(/*! openfin-adapter/src/mock */ "../../node_modules/openfin-adapter/src/mock.js");
const home_1 = __webpack_require__(/*! ./home */ "./client/src/home.ts");
async function init() {
    // you can kick off your bootstrapping process here where you may decide to prompt for authentication,
    // gather reference data etc before starting workspace and interacting with it.
    console.log("Initialising the bootstrapper");
    // only register search logic once workspace is running
    await (0, home_1.register)();
    await (0, home_1.show)();
    const providerWindow = mock_1.fin.Window.getCurrentSync();
    await providerWindow.once("close-requested", async (event) => {
        await (0, home_1.deregister)();
        await mock_1.fin.Platform.getCurrentSync().quit();
    });
}
exports.init = init;


/***/ }),

/***/ "./client/src/browser.ts":
/*!*******************************!*\
  !*** ./client/src/browser.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.launchView = void 0;
const workspace_platform_1 = __webpack_require__(/*! @openfin/workspace-platform */ "../../node_modules/@openfin/workspace-platform/index.js");
const mock_1 = __webpack_require__(/*! openfin-adapter/src/mock */ "../../node_modules/openfin-adapter/src/mock.js");
let windowIdentity;
async function launchView(url) {
    const platform = (0, workspace_platform_1.getCurrentSync)();
    let createWindow = true;
    if (windowIdentity) {
        const childWindows = await mock_1.fin.Application.getCurrentSync().getChildWindows();
        const existingWindow = childWindows.find((window) => window.identity.name === windowIdentity.name);
        if (existingWindow) {
            createWindow = false;
        }
    }
    if (createWindow) {
        const win = await platform.createWindow({
            defaultHeight: 700,
            defaultWidth: 1200,
            layout: {
                content: [
                    {
                        type: "stack",
                        content: []
                    }
                ]
            }
        });
        windowIdentity = win.identity;
    }
    const salesforceLwcPreloadScript = {
        url: `${window.location.origin}/js/preload.js`
    };
    await platform.createView({ preloadScripts: [salesforceLwcPreloadScript], target: null, url }, windowIdentity);
}
exports.launchView = launchView;


/***/ }),

/***/ "./client/src/home.ts":
/*!****************************!*\
  !*** ./client/src/home.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.deregister = exports.hide = exports.show = exports.register = void 0;
const salesforce_1 = __webpack_require__(/*! @openfin/salesforce */ "../../node_modules/@openfin/salesforce/openfin.salesforce.js");
const workspace_1 = __webpack_require__(/*! @openfin/workspace */ "../../node_modules/@openfin/workspace/index.js");
const browser_1 = __webpack_require__(/*! ./browser */ "./client/src/browser.ts");
const salesforce_2 = __webpack_require__(/*! ./salesforce */ "./client/src/salesforce.ts");
const settings_1 = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");
const BROWSE_SEARCH_RESULT_KEY = "browse-salesforce";
const PROVIDER_ID = "integrate-with-salesforce";
const NOT_CONNECTED_SEARCH_RESULT_KEY = "not-connected-result";
const OBJECTS_FILTER_ID = "objects";
function getSearchFilters(objects) {
    if (Array.isArray(objects)) {
        const filters = [];
        const uniqueObjects = [...new Set(objects.sort())];
        const objectFilter = {
            id: OBJECTS_FILTER_ID,
            title: "Objects",
            type: workspace_1.CLIFilterOptionType.MultiSelect,
            options: []
        };
        for (const object of uniqueObjects) {
            if (Array.isArray(objectFilter.options)) {
                objectFilter.options.push({
                    value: object,
                    isSelected: false
                });
            }
        }
        filters.push(objectFilter);
        return filters;
    }
    return [];
}
async function getResults(query, queryMinLength = 3, filters) {
    // Define the default "browse" search result displayed when no query provided
    const salesforceConnection = (0, salesforce_2.getConnection)();
    const { orgUrl } = salesforceConnection;
    const { icon, iconMap } = await (0, settings_1.getSettings)();
    const browseResult = {
        actions: [{ name: "Browse", hotkey: "enter" }],
        data: {
            pageUrl: orgUrl
        },
        icon,
        key: BROWSE_SEARCH_RESULT_KEY,
        template: workspace_1.CLITemplate.Plain,
        templateContent: undefined,
        title: "Browse Salesforce"
    };
    // Return default browse result if query less than minimum char length or starts with /
    const searchQuery = query.trim();
    if (searchQuery.length < queryMinLength || searchQuery.startsWith("/")) {
        return { results: [browseResult] };
    }
    // Retrieve search results from Salesforce
    let searchResults;
    try {
        let selectedObjects = [];
        if (Array.isArray(filters) && filters.length > 0) {
            const objectsFilter = filters.find((x) => x.id === OBJECTS_FILTER_ID);
            if (objectsFilter) {
                selectedObjects = (Array.isArray(objectsFilter.options) ? objectsFilter.options : [objectsFilter.options])
                    .filter((x) => Boolean(x.isSelected))
                    .map((x) => (x.value === "Note" ? "ContentNote" : x.value));
            }
        }
        searchResults = await (0, salesforce_2.getSearchResults)(searchQuery, selectedObjects);
    }
    catch (err) {
        if (err instanceof salesforce_1.ConnectionError) {
            return {
                results: [
                    {
                        actions: [{ name: "Reconnect", hotkey: "enter" }],
                        key: NOT_CONNECTED_SEARCH_RESULT_KEY,
                        icon,
                        title: "Reconnect to Salesforce"
                    }
                ]
            };
        }
        return { results: [] };
    }
    const results = searchResults.map((searchResult) => {
        if ("Website" in searchResult) {
            return {
                actions: [{ name: "View", hotkey: "enter" }],
                label: searchResult.attributes.type,
                key: searchResult.Id,
                title: searchResult.Name,
                icon: iconMap.account,
                data: {
                    pageUrl: (0, salesforce_2.getObjectUrl)(searchResult.Id, orgUrl)
                },
                template: workspace_1.CLITemplate.Contact,
                templateContent: {
                    name: searchResult.Name,
                    title: searchResult.Industry,
                    details: [
                        [
                            ["Phone", searchResult.Phone],
                            ["Type", searchResult.Type],
                            ["Website", searchResult.Website]
                        ]
                    ]
                }
            };
        }
        else if ("Email" in searchResult) {
            return {
                actions: [{ name: "View", hotkey: "enter" }],
                label: searchResult.attributes.type,
                key: searchResult.Id,
                title: searchResult.Name,
                icon: iconMap.contact,
                data: {
                    pageUrl: (0, salesforce_2.getObjectUrl)(searchResult.Id, orgUrl)
                },
                template: workspace_1.CLITemplate.Contact,
                templateContent: {
                    name: searchResult.Name,
                    title: searchResult.Title,
                    useInitials: true,
                    details: [
                        [
                            ["Department", searchResult.Department],
                            ["Email", searchResult.Email],
                            ["Work #", searchResult.Phone]
                        ]
                    ]
                }
            };
        }
        else if ("Description" in searchResult) {
            return {
                actions: [{ name: "View", hotkey: "enter" }],
                label: searchResult.attributes.type,
                key: searchResult.Id,
                title: searchResult.Subject,
                icon: iconMap.task,
                data: {
                    pageUrl: (0, salesforce_2.getObjectUrl)(searchResult.Id, orgUrl)
                },
                template: workspace_1.CLITemplate.List,
                templateContent: [
                    ["Subject", searchResult.Subject],
                    ["Comments", searchResult.Description]
                ]
            };
        }
        else if ("TextPreview" in searchResult) {
            return {
                actions: [{ name: "View", hotkey: "enter" }],
                label: "Note",
                key: searchResult.Id,
                title: searchResult.Title,
                icon: iconMap.note,
                data: {
                    pageUrl: (0, salesforce_2.getObjectUrl)(searchResult.Id, orgUrl)
                },
                template: workspace_1.CLITemplate.List,
                templateContent: [
                    ["Title", searchResult.Title],
                    ["Content", searchResult?.TextPreview]
                ]
            };
        }
        else if ("actor" in searchResult &&
            (searchResult.type === "TextPost" || searchResult.type === "ContentPost")) {
            return {
                actions: [{ name: "View", hotkey: "enter" }],
                label: "Chatter",
                key: searchResult.id,
                title: searchResult.actor?.displayName,
                icon: iconMap.chatter,
                data: {
                    pageUrl: (0, salesforce_2.getObjectUrl)(searchResult.id, orgUrl)
                },
                template: workspace_1.CLITemplate.Contact,
                templateContent: {
                    name: searchResult.actor?.displayName,
                    useInitials: true,
                    details: [
                        [
                            ["Header", searchResult?.header?.text],
                            ["Note", searchResult?.body?.text]
                        ]
                    ]
                }
            };
        }
    });
    const filteredResults = results.filter(Boolean);
    const objects = searchResults.map((result) => getItemType(result));
    return {
        results: filteredResults,
        context: {
            filters: getSearchFilters(objects.map((c) => (c === "ContentNote" ? "Note" : c)))
        }
    };
}
function getItemType(item) {
    return "attributes" in item ? item.attributes.type : "Chatter";
}
async function register() {
    console.log("Initialising home");
    const settings = await (0, settings_1.getSettings)();
    const queryMinLength = settings.queryMinLength || 3;
    let lastResponse;
    let query;
    let filters;
    const onUserInput = async (request, response) => {
        query = request.query.toLowerCase();
        if (query.startsWith("/")) {
            return { results: [] };
        }
        filters = request?.context?.selectedFilters;
        if (lastResponse !== undefined) {
            lastResponse.close();
        }
        lastResponse = response;
        lastResponse.open();
        const results = await getResults(query, queryMinLength, filters);
        return results;
    };
    const onSelection = async (result) => {
        // if the user clicked the reconnect result, reconnect to salesforce and re-run query
        if (result.key === NOT_CONNECTED_SEARCH_RESULT_KEY) {
            await (0, salesforce_2.connectToSalesforce)();
            const results = await getResults(query, queryMinLength, filters);
            lastResponse.revoke(NOT_CONNECTED_SEARCH_RESULT_KEY);
            lastResponse.respond(results.results);
            await workspace_1.Home.show();
            return;
        }
        // otherwise open the result page url in browser
        const data = result.data;
        if (data !== undefined) {
            await (0, browser_1.launchView)(data.pageUrl);
        }
        else {
            console.warn("Unable to execute result without data being passed");
        }
    };
    const cliProvider = {
        title: settings.title,
        id: PROVIDER_ID,
        icon: settings.icon,
        onUserInput,
        onResultDispatch: onSelection
    };
    await workspace_1.Home.register(cliProvider);
    console.log("Home configured");
}
exports.register = register;
async function show() {
    await workspace_1.Home.show();
}
exports.show = show;
async function hide() {
    await workspace_1.Home.hide();
}
exports.hide = hide;
async function deregister() {
    return workspace_1.Home.deregister(PROVIDER_ID);
}
exports.deregister = deregister;


/***/ }),

/***/ "./client/src/platform.ts":
/*!********************************!*\
  !*** ./client/src/platform.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.init = void 0;
const workspace_platform_1 = __webpack_require__(/*! @openfin/workspace-platform */ "../../node_modules/@openfin/workspace-platform/index.js");
const salesforce_1 = __webpack_require__(/*! ./salesforce */ "./client/src/salesforce.ts");
const settings_1 = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");
async function init() {
    console.log("Initialising salesforce");
    await (0, salesforce_1.connectToSalesforce)();
    console.log("Initialising platform");
    const { icon, title } = await (0, settings_1.getSettings)();
    const browser = {};
    browser.defaultWindowOptions = {
        icon,
        workspacePlatform: {
            favicon: icon,
            pages: null,
            title
        }
    };
    console.log("Specifying following browser options:", browser);
    await (0, workspace_platform_1.init)({
        browser,
        theme: [
            {
                label: "Salesforce Theme",
                palette: {
                    brandPrimary: "#0070D2",
                    brandSecondary: "#0070D2",
                    backgroundPrimary: "#265A78",
                    background1: "#0C4362",
                    background2: "#105998",
                    background3: "#265A78",
                    background4: "#0070D2",
                    background5: "#0070D2",
                    background6: "#0070D2"
                }
            }
        ]
    });
}
exports.init = init;


/***/ }),

/***/ "./client/src/salesforce.ts":
/*!**********************************!*\
  !*** ./client/src/salesforce.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.connectToSalesforce = exports.getBatchedResults = exports.getSearchResults = exports.getObjectUrl = exports.getConnection = void 0;
const salesforce_1 = __webpack_require__(/*! @openfin/salesforce */ "../../node_modules/@openfin/salesforce/openfin.salesforce.js");
const settings_1 = __webpack_require__(/*! ./settings */ "./client/src/settings.ts");
let sfConn;
function getConnection() {
    return sfConn;
}
exports.getConnection = getConnection;
const getObjectUrl = (objectId, salesforceOrgOrigin) => `${salesforceOrgOrigin}/${objectId}`;
exports.getObjectUrl = getObjectUrl;
async function getSearchResults(query, selectedObjects) {
    const accountFieldSpec = "Account(Id, Industry, Name, Phone, Type, Website)";
    const contactFieldSpec = "Contact(Department, Email, Id, Name, Phone, Title)";
    const taskFieldSpec = "Task(Id, Subject, Description)";
    const contentNoteFieldSpec = "ContentNote(Id, Title, Content, TextPreview)";
    const fieldSpecMap = new Map([
        ["Account", accountFieldSpec],
        ["Contact", contactFieldSpec],
        ["Task", taskFieldSpec],
        ["ContentNote", contentNoteFieldSpec]
    ]);
    const fieldSpecs = [...fieldSpecMap]
        .filter((x) => {
        if (selectedObjects?.length > 0) {
            return selectedObjects.includes(x[0]);
        }
        return true;
    })
        .map((f) => f[1]);
    const batch = fieldSpecs.map((fieldSpec) => {
        const salesforceSearchQuery = `FIND {${escapeQuery(query)}} IN ALL FIELDS RETURNING ${fieldSpec} LIMIT 10`;
        return {
            method: "GET",
            url: `/services/data/vXX.X/search?q=${encodeURIComponent(salesforceSearchQuery)}`
        };
    });
    const includeChatter = !selectedObjects?.length || selectedObjects.includes("Chatter");
    if (includeChatter) {
        batch.push({
            method: "GET",
            url: `/services/data/vXX.X/chatter/feed-elements?q=${query}&pageSize=25&sort=LastModifiedDateDesc`
        });
    }
    const batchedResults = await getBatchedResults(batch);
    let results = [];
    if (batchedResults.length) {
        let idx = 0;
        for (; idx < fieldSpecs.length; idx++) {
            const searchResponse = batchedResults[idx];
            if (searchResponse?.searchRecords?.length) {
                results = results.concat(searchResponse.searchRecords);
            }
        }
        if (includeChatter) {
            const chatterResponse = batchedResults[idx++];
            if (chatterResponse?.elements?.length) {
                results = results.concat(chatterResponse.elements);
            }
        }
    }
    return results;
}
exports.getSearchResults = getSearchResults;
async function getBatchedResults(batchRequests) {
    if (batchRequests.length === 0) {
        return [];
    }
    const batch = { batchRequests, haltOnError: false };
    const response = await sfConn.executeApiRequest(`/services/data/vXX.X/composite/batch/`, "POST", batch, { "Content-Type": "application/json" });
    return response.data?.results.map((r) => r.result) ?? [];
}
exports.getBatchedResults = getBatchedResults;
async function connectToSalesforce() {
    (0, salesforce_1.enableLogging)();
    const { orgUrl, consumerKey } = await (0, settings_1.getSettings)();
    sfConn = await (0, salesforce_1.connect)(orgUrl, consumerKey);
}
exports.connectToSalesforce = connectToSalesforce;
function escapeQuery(query) {
    // There are some reserved characters for queries so we need to escape them
    // https://developer.salesforce.com/docs/atlas.en-us.soql_sosl.meta/soql_sosl/sforce_api_calls_sosl_find.htm#i1423105
    return query.replace(/[!"&'()*+:?[\\\]^{|}~-]/gm, "\\$&");
}


/***/ }),

/***/ "./client/src/settings.ts":
/*!********************************!*\
  !*** ./client/src/settings.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSettings = void 0;
const mock_1 = __webpack_require__(/*! openfin-adapter/src/mock */ "../../node_modules/openfin-adapter/src/mock.js");
let settings;
async function getConfiguredSettings() {
    const app = await mock_1.fin.Application.getCurrent();
    const manifest = await app.getManifest();
    if (manifest.customSettings !== undefined) {
        settings = manifest.customSettings;
    }
    else {
        settings = {};
    }
    return settings;
}
async function getSettings() {
    if (settings === undefined) {
        settings = await getConfiguredSettings();
    }
    return settings;
}
exports.getSettings = getSettings;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const mock_1 = __webpack_require__(/*! openfin-adapter/src/mock */ "../../node_modules/openfin-adapter/src/mock.js");
const bootstrapper_1 = __webpack_require__(/*! ./bootstrapper */ "./client/src/bootstrapper.ts");
const platform_1 = __webpack_require__(/*! ./platform */ "./client/src/platform.ts");
window.addEventListener("DOMContentLoaded", async () => {
    const platform = mock_1.fin.Platform.getCurrentSync();
    await platform.once("platform-api-ready", async () => (0, bootstrapper_1.init)());
    await (0, platform_1.init)();
});

})();

/******/ })()
;