function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

Object.defineProperty(exports, "__esModule", {
    value: !0
});

var _ponyfill = require("./ponyfill.js"), _ponyfill2 = _interopRequireDefault(_ponyfill), root;

root = "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof module ? module : Function("return this")();

var result = (0, _ponyfill2.default)(root);

exports.default = result;