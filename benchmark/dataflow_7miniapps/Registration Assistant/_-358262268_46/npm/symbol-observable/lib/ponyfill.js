function symbolObservablePonyfill(e) {
    var b, l = e.Symbol;
    return "function" == typeof l ? l.observable ? b = l.observable : (b = l("observable"), 
    l.observable = b) : b = "@@observable", b;
}

Object.defineProperty(exports, "__esModule", {
    value: !0
}), exports.default = symbolObservablePonyfill;