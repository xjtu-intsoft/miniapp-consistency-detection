function isArguments(t) {
    return isArrayLikeObject(t) && hasOwnProperty.call(t, "callee") && (!propertyIsEnumerable.call(t, "callee") || objectToString.call(t) == argsTag);
}

function isArrayLike(t) {
    return null != t && isLength(t.length) && !isFunction(t);
}

function isArrayLikeObject(t) {
    return isObjectLike(t) && isArrayLike(t);
}

function isFunction(t) {
    var e = isObject(t) ? objectToString.call(t) : "";
    return e == funcTag || e == genTag;
}

function isLength(t) {
    return "number" == typeof t && t > -1 && t % 1 == 0 && t <= MAX_SAFE_INTEGER;
}

function isObject(t) {
    var e = typeof t;
    return !!t && ("object" == e || "function" == e);
}

function isObjectLike(t) {
    return !!t && "object" == typeof t;
}

var MAX_SAFE_INTEGER = 9007199254740991, argsTag = "[object Arguments]", funcTag = "[object Function]", genTag = "[object GeneratorFunction]", objectProto = Object.prototype, hasOwnProperty = objectProto.hasOwnProperty, objectToString = objectProto.toString, propertyIsEnumerable = objectProto.propertyIsEnumerable;

module.exports = isArguments;