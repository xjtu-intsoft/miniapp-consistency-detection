function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}

function isValidKey(e) {
    return validKeys.indexOf(e) > -1;
}

function isFSA(e) {
    return _lodashIsplainobject2.default(e) && void 0 !== e.type && Object.keys(e).every(isValidKey);
}

function isError(e) {
    return !0 === e.error;
}

exports.__esModule = !0, exports.isFSA = isFSA, exports.isError = isError;

var _lodashIsplainobject = require("./../../lodash.isplainobject/index.js"), _lodashIsplainobject2 = _interopRequireDefault(_lodashIsplainobject), validKeys = [ "type", "payload", "error", "meta" ];