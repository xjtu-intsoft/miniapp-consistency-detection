function _classCallCheck(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

function _possibleConstructorReturn(t, e) {
    if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return !e || "object" != typeof e && "function" != typeof e ? t : e;
}

function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            enumerable: !1,
            writable: !0,
            configurable: !0
        }
    }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}

function connect(t, e) {
    return t = (0, _helpers.mapState)(t || {}), e = (0, _helpers.mapActions)(e || {}), 
    function(o) {
        var n = null, r = o.prototype.onLoad, s = o.prototype.onUnload, i = function() {
            var e = this, o = ((0, _store.getStore)(), !1);
            Object.keys(t).forEach(function(n) {
                var r = t[n].call(e);
                e[n] !== r && (e[n] = r, o = !0);
            }), o && this.$apply();
        };
        return function(o) {
            function c() {
                _classCallCheck(this, c);
                var n = _possibleConstructorReturn(this, o.call(this));
                return n.computed = Object.assign(n.computed || {}, t), n.methods = Object.assign(n.methods || {}, e), 
                n;
            }
            return _inherits(c, o), c.prototype.onLoad = function() {
                var t = (0, _store.getStore)();
                n = t.subscribe(i.bind(this)), i.call(this), r && r.apply(this, arguments);
            }, c.prototype.onUnload = function() {
                n && n(), n = null, s && s.apply(this, arguments);
            }, c;
        }(o);
    };
}

exports.__esModule = !0, exports.default = connect;

var _store = require("./../store.js"), _helpers = require("./../helpers/index.js");