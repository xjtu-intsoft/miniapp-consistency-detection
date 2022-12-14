function isObjectLike(t) {
    return !!t && "object" == typeof t;
}

function getNative(t, r) {
    var e = null == t ? void 0 : t[r];
    return isNative(e) ? e : void 0;
}

function isLength(t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= MAX_SAFE_INTEGER;
}

function isFunction(t) {
    return isObject(t) && objToString.call(t) == funcTag;
}

function isObject(t) {
    var r = typeof t;
    return !!t && ("object" == r || "function" == r);
}

function isNative(t) {
    return null != t && (isFunction(t) ? reIsNative.test(fnToString.call(t)) : isObjectLike(t) && reIsHostCtor.test(t));
}

var arrayTag = "[object Array]", funcTag = "[object Function]", reIsHostCtor = /^\[object .+?Constructor\]$/, objectProto = Object.prototype, fnToString = Function.prototype.toString, hasOwnProperty = objectProto.hasOwnProperty, objToString = objectProto.toString, reIsNative = RegExp("^" + fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"), nativeIsArray = getNative(Array, "isArray"), MAX_SAFE_INTEGER = 9007199254740991, isArray = nativeIsArray || function(t) {
    return isObjectLike(t) && isLength(t.length) && objToString.call(t) == arrayTag;
};

module.exports = isArray;