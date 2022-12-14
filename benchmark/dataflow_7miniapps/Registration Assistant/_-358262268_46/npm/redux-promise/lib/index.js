function isPromise(e) {
    return e && "function" == typeof e.then;
}

function promiseMiddleware(e) {
    var r = e.dispatch;
    return function(e) {
        return function(t) {
            return _fluxStandardAction.isFSA(t) ? isPromise(t.payload) ? t.payload.then(function(e) {
                return r(_extends({}, t, {
                    payload: e
                }));
            }, function(e) {
                return r(_extends({}, t, {
                    payload: e,
                    error: !0
                }));
            }) : e(t) : isPromise(t) ? t.then(r) : e(t);
        };
    };
}

exports.__esModule = !0;

var _extends = Object.assign || function(e) {
    for (var r = 1; r < arguments.length; r++) {
        var t = arguments[r];
        for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
};

exports.default = promiseMiddleware;

var _fluxStandardAction = require("./../../flux-standard-action/lib/index.js");

module.exports = exports.default;