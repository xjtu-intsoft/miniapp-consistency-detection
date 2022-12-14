function isObjectLike(e) {
    return !!e && "object" == typeof e;
}

function baseForIn(e, o) {
    return baseFor(e, o, keysIn);
}

function isPlainObject(e) {
    var o;
    if (!isObjectLike(e) || objToString.call(e) != objectTag || isArguments(e) || !hasOwnProperty.call(e, "constructor") && "function" == typeof (o = e.constructor) && !(o instanceof o)) return !1;
    var t;
    return baseForIn(e, function(e, o) {
        t = o;
    }), void 0 === t || hasOwnProperty.call(e, t);
}

var baseFor = require("./../lodash._basefor/index.js"), isArguments = require("./../lodash.isarguments/index.js"), keysIn = require("./../lodash.keysin/index.js"), objectTag = "[object Object]", objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, objToString = objectProto.toString;

module.exports = isPlainObject;