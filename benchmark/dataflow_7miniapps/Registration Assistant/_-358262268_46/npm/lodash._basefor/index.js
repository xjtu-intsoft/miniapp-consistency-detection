function createBaseFor(r) {
    return function(e, a, o) {
        for (var t = -1, n = Object(e), c = o(e), s = c.length; s--; ) {
            var u = c[r ? s : ++t];
            if (!1 === a(n[u], u, n)) break;
        }
        return e;
    };
}

var baseFor = createBaseFor();

module.exports = baseFor;