var WeixinPrefetcher=function(){"use strict";function e(e,t){return void 0===t&&(t=""),function(){for(var n=[],r=arguments.length;r--;)n[r]=arguments[r];var o=n;o[0]&&(o[0]=t+o[0]),console&&console[e]&&console[e].apply(console,o)}}var t,n=wxPrefetcherClient.getId(),r={log:e("log",t="[WP-MANIFEST]["+n+"] "),debug:e("debug",t),info:e("info",t),warn:e("warn",t),error:e("error",t)}.info,o="install",i="fetch";function f(e,t,n,r){var o,i,f;e&&t&&(Array.isArray(n)?(i=(o=n)[0],f=o[1]):i=f=n,"function"==typeof t[f]?e[i]=function(){for(var e=[],n=arguments.length;n--;)e[n]=arguments[n];return"function"==typeof r?t[f].apply(t,r.apply(void 0,e)):t[f].apply(t,e)}:e[i]=t[f])}function c(e){return e&&e.Math==Math&&e}var a=c("object"==typeof globalThis&&globalThis)||c("object"==typeof self&&self)||Function("return this")(),l=null,u=new Set,s={addCaches:function(e){e.forEach((function(e){u.add(e)}))}},g={on:function(e,t){if(r("on "+e+": "+(t&&t.toString())),e!==i){if(e===o)try{t({caches:s})}catch(e){}}else l=t},off:function(e){e!==i||(l=null)},config:function(e){for(var t in e)NativeCore.extend(n,t,e[t])}};return g.config({getId:function(){return null},fetch:function(e,t){var n=0;return wxPrefetcherClient.getUserHash&&(n=wxPrefetcherClient.getUserHash()),r("client.invoke fetch, url: "+e+", extInfo: "+t),r("typeof fetchEventHandler: "+typeof l),r("userhash: "+n),"function"!=typeof l||l({url:e,userHash:n,extInfo:t&&JSON.parse(t)||{},caches:s})},getAllCaches:function(){return JSON.stringify(Array.from(u))}}),a.wxVideoPrefetcher&&(f(g,NativeCore,"getNetWorkType"),f(g,NativeCore,["getUa","userAgent"]),f(g,wxJsEngineClient,"getLocalData"),f(g,wxJsEngineClient,"setLocalData"),f(g,wxJsEngineClient,"commonCgi",(function(e,t){return[JSON.stringify(e),NativeCore.callbackWrapper((function(e){t(JSON.stringify(Object.assign({},e,{data:JSON.stringify(e.data)})))}))]})),f(g,wxVideoPrefetcher,"getVideoUrlFromMpUrlComplete"),f(g,wxVideoPrefetcher,["addVideoCaches","cacheVideo"],(function(e){return[JSON.stringify(e)]}))),Object.freeze(g)}();