var invariant = function(e, n, r, i, o, a, t, f) {
    if (!e) {
        var s;
        if (void 0 === n) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."); else {
            var d = [ r, i, o, a, t, f ], l = 0;
            s = new Error(n.replace(/%s/g, function() {
                return d[l++];
            })), s.name = "Invariant Violation";
        }
        throw s.framesToPop = 1, s;
    }
};

module.exports = invariant;