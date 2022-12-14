function normalizeMap(t) {
    return Array.isArray(t) ? t.map(function(t) {
        return {
            key: t,
            val: t
        };
    }) : Object.keys(t).map(function(r) {
        return {
            key: r,
            val: t[r]
        };
    });
}

exports.__esModule = !0, exports.mapActions = exports.mapState = void 0;

var _store = require("./../store.js"), mapState = exports.mapState = function(t) {
    var r = {};
    return normalizeMap(t).forEach(function(t) {
        var e = t.key, a = t.val;
        r[e] = function() {
            var t = (0, _store.getStore)(), r = t.getState();
            return "function" == typeof a ? a.call(this, r) : r[a];
        };
    }), r;
}, mapActions = exports.mapActions = function(t) {
    var r = {};
    return normalizeMap(t).forEach(function(t) {
        var e = t.key, a = t.val;
        r[e] = function() {
            for (var t = (0, _store.getStore)(), r = void 0, e = arguments.length, n = Array(e), o = 0; o < e; o++) n[o] = arguments[o];
            return r = "string" == typeof a ? {
                type: a,
                payload: n.length > 1 ? n : n[0]
            } : "function" == typeof a ? a.apply(t, n) : a, t.dispatch.call(t, r);
        };
    }), r;
};