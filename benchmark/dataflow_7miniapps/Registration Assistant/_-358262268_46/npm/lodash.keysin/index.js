function isIndex(r, t) {
    return r = "number" == typeof r || reIsUint.test(r) ? +r : -1, t = null == t ? MAX_SAFE_INTEGER : t, 
    r > -1 && r % 1 == 0 && r < t;
}

function isLength(r) {
    return "number" == typeof r && r > -1 && r % 1 == 0 && r <= MAX_SAFE_INTEGER;
}

function isObject(r) {
    var t = typeof r;
    return !!r && ("object" == t || "function" == t);
}

function keysIn(r) {
    if (null == r) return [];
    isObject(r) || (r = Object(r));
    var t = r.length;
    t = t && isLength(t) && (isArray(r) || isArguments(r)) && t || 0;
    for (var e = r.constructor, n = -1, o = "function" == typeof e && e.prototype === r, s = Array(t), i = t > 0; ++n < t; ) s[n] = n + "";
    for (var u in r) i && isIndex(u, t) || "constructor" == u && (o || !hasOwnProperty.call(r, u)) || s.push(u);
    return s;
}

var isArguments = require("./../lodash.isarguments/index.js"), isArray = require("./../lodash.isarray/index.js"), reIsUint = /^\d+$/, objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, MAX_SAFE_INTEGER = 9007199254740991;

module.exports = keysIn;