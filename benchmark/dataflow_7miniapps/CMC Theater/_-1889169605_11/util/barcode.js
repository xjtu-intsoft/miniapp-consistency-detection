function t(t) {
    for (var r = [], i = 0; i < t.length; i++) r.push(t.charCodeAt(i));
    return r;
}

function r(r) {
    var p = {
        currcs: g.C
    }, A = t(r), B = A[0] == h ? 1 : 0, v = A.length > 0 ? s(A[B++]) : g.AB, w = A.length > 0 ? s(A[B++]) : g.AB;
    p.currcs = function(t, r) {
        var i = 0;
        return i += t == g.A ? 1 : 0, i += t == g.B ? -1 : 0, i += r == g.A ? 1 : 0, (i += r == g.B ? -1 : 0) > 0 ? g.A : g.B;
    }(v, w), p.currcs = function(t, r) {
        for (var i = 0; i < t.length; i++) {
            var e = t[i];
            if ((e < 48 || e > 57) && e != h) return r;
        }
        return t.length % 2 == 0 ? g.C : g.A;
    }(A, p.currcs);
    var C = new Array();
    switch (p.currcs) {
      case g.A:
        C.push(n);
        break;

      case g.B:
        C.push(c);
        break;

      default:
        C.push(a);
    }
    for (var _ = 0; _ < A.length; _++) {
        var b = A[_];
        b in d && (C.push(d[b]), b = A[++_]);
        var R = A.length > _ + 1 ? A[_ + 1] : -1;
        C = C.concat(function(t, r, s) {
            var h = [], n = -1;
            if (e(t, s)) s == g.C && (-1 == r ? (n = o, s = g.B) : -1 == r || e(r, s) || (e(r, g.A) ? (n = f, 
            s = g.A) : (n = o, s = g.B))); else if (-1 == r || e(r, s)) n = u; else switch (s) {
              case g.A:
                n = o, s = g.B;
                break;

              case g.B:
                n = f, s = g.A;
            }
            return -1 != n ? (h.push(n), h.push(i(t))) : s == g.C ? h.push(i(t, r)) : h.push(i(t)), 
            p.currcs = s, h;
        }(b, R, p.currcs)), p.currcs == g.C && _++;
    }
    for (var y = C[0], z = 1; z < C.length; z++) y += z * C[z];
    return C.push(y % 103), C.push(l), C;
}

function i(t, r) {
    return void 0 === r ? t >= 32 ? t - 32 : t + 64 : parseInt(String.fromCharCode(t) + String.fromCharCode(r));
}

function e(t, r) {
    var i = s(t);
    return i == g.ANY || (i == g.AB || (i == g.A && r == g.A || i == g.B && r == g.B));
}

function s(t) {
    return t >= 48 && t <= 57 ? g.ANY : t >= 32 && t <= 95 ? g.AB : t < 32 ? g.A : g.B;
}

var h = 126, n = 103, c = 104, a = 105, u = 98, f = 101, o = 100, l = 106, d = {
    CHAR_TILDE: 102
}, g = {
    ANY: 1,
    AB: 2,
    A: 3,
    B: 4,
    C: 5
};

exports.code128 = function(t, i, e, s) {
    e = parseInt(e), s = parseInt(s);
    for (var h = r(i), n = new p(t, e, s), c = n.area.width / (11 * (h.length - 3) + 35), a = n.area.left, u = n.area.top, f = 0; f < h.length; f++) for (var o = h[f], l = 0; l < 8; l += 2) {
        var d = A[o][l] * c, g = s - u, B = A[o][l + 1] * c;
        d > 0 && n.fillFgRect(a, u, d, g), a += d + B;
    }
    t.draw();
};

var p = function(t, r, i) {
    this.width = r, this.height = i, this.quiet = Math.round(this.width / 40), this.border_size = 0, 
    this.padding_width = 0, this.area = {
        width: r - 2 * this.padding_width - 2 * this.quiet,
        height: i - 2 * this.border_size,
        top: this.border_size - 4,
        left: this.padding_width + this.quiet
    }, this.ctx = t, this.fg = "#000000", this.bg = "#ffffff", this.fillBgRect(0, 0, r, i), 
    this.fillBgRect(0, this.border_size, r, i - 2 * this.border_size);
};

p.prototype._fillRect = function(t, r, i, e, s) {
    this.ctx.setFillStyle(s), this.ctx.fillRect(t, r, i, e);
}, p.prototype.fillFgRect = function(t, r, i, e) {
    this._fillRect(t, r, i, e, this.fg);
}, p.prototype.fillBgRect = function(t, r, i, e) {
    this._fillRect(t, r, i, e, this.bg);
};

var A = [ [ 2, 1, 2, 2, 2, 2, 0, 0 ], [ 2, 2, 2, 1, 2, 2, 0, 0 ], [ 2, 2, 2, 2, 2, 1, 0, 0 ], [ 1, 2, 1, 2, 2, 3, 0, 0 ], [ 1, 2, 1, 3, 2, 2, 0, 0 ], [ 1, 3, 1, 2, 2, 2, 0, 0 ], [ 1, 2, 2, 2, 1, 3, 0, 0 ], [ 1, 2, 2, 3, 1, 2, 0, 0 ], [ 1, 3, 2, 2, 1, 2, 0, 0 ], [ 2, 2, 1, 2, 1, 3, 0, 0 ], [ 2, 2, 1, 3, 1, 2, 0, 0 ], [ 2, 3, 1, 2, 1, 2, 0, 0 ], [ 1, 1, 2, 2, 3, 2, 0, 0 ], [ 1, 2, 2, 1, 3, 2, 0, 0 ], [ 1, 2, 2, 2, 3, 1, 0, 0 ], [ 1, 1, 3, 2, 2, 2, 0, 0 ], [ 1, 2, 3, 1, 2, 2, 0, 0 ], [ 1, 2, 3, 2, 2, 1, 0, 0 ], [ 2, 2, 3, 2, 1, 1, 0, 0 ], [ 2, 2, 1, 1, 3, 2, 0, 0 ], [ 2, 2, 1, 2, 3, 1, 0, 0 ], [ 2, 1, 3, 2, 1, 2, 0, 0 ], [ 2, 2, 3, 1, 1, 2, 0, 0 ], [ 3, 1, 2, 1, 3, 1, 0, 0 ], [ 3, 1, 1, 2, 2, 2, 0, 0 ], [ 3, 2, 1, 1, 2, 2, 0, 0 ], [ 3, 2, 1, 2, 2, 1, 0, 0 ], [ 3, 1, 2, 2, 1, 2, 0, 0 ], [ 3, 2, 2, 1, 1, 2, 0, 0 ], [ 3, 2, 2, 2, 1, 1, 0, 0 ], [ 2, 1, 2, 1, 2, 3, 0, 0 ], [ 2, 1, 2, 3, 2, 1, 0, 0 ], [ 2, 3, 2, 1, 2, 1, 0, 0 ], [ 1, 1, 1, 3, 2, 3, 0, 0 ], [ 1, 3, 1, 1, 2, 3, 0, 0 ], [ 1, 3, 1, 3, 2, 1, 0, 0 ], [ 1, 1, 2, 3, 1, 3, 0, 0 ], [ 1, 3, 2, 1, 1, 3, 0, 0 ], [ 1, 3, 2, 3, 1, 1, 0, 0 ], [ 2, 1, 1, 3, 1, 3, 0, 0 ], [ 2, 3, 1, 1, 1, 3, 0, 0 ], [ 2, 3, 1, 3, 1, 1, 0, 0 ], [ 1, 1, 2, 1, 3, 3, 0, 0 ], [ 1, 1, 2, 3, 3, 1, 0, 0 ], [ 1, 3, 2, 1, 3, 1, 0, 0 ], [ 1, 1, 3, 1, 2, 3, 0, 0 ], [ 1, 1, 3, 3, 2, 1, 0, 0 ], [ 1, 3, 3, 1, 2, 1, 0, 0 ], [ 3, 1, 3, 1, 2, 1, 0, 0 ], [ 2, 1, 1, 3, 3, 1, 0, 0 ], [ 2, 3, 1, 1, 3, 1, 0, 0 ], [ 2, 1, 3, 1, 1, 3, 0, 0 ], [ 2, 1, 3, 3, 1, 1, 0, 0 ], [ 2, 1, 3, 1, 3, 1, 0, 0 ], [ 3, 1, 1, 1, 2, 3, 0, 0 ], [ 3, 1, 1, 3, 2, 1, 0, 0 ], [ 3, 3, 1, 1, 2, 1, 0, 0 ], [ 3, 1, 2, 1, 1, 3, 0, 0 ], [ 3, 1, 2, 3, 1, 1, 0, 0 ], [ 3, 3, 2, 1, 1, 1, 0, 0 ], [ 3, 1, 4, 1, 1, 1, 0, 0 ], [ 2, 2, 1, 4, 1, 1, 0, 0 ], [ 4, 3, 1, 1, 1, 1, 0, 0 ], [ 1, 1, 1, 2, 2, 4, 0, 0 ], [ 1, 1, 1, 4, 2, 2, 0, 0 ], [ 1, 2, 1, 1, 2, 4, 0, 0 ], [ 1, 2, 1, 4, 2, 1, 0, 0 ], [ 1, 4, 1, 1, 2, 2, 0, 0 ], [ 1, 4, 1, 2, 2, 1, 0, 0 ], [ 1, 1, 2, 2, 1, 4, 0, 0 ], [ 1, 1, 2, 4, 1, 2, 0, 0 ], [ 1, 2, 2, 1, 1, 4, 0, 0 ], [ 1, 2, 2, 4, 1, 1, 0, 0 ], [ 1, 4, 2, 1, 1, 2, 0, 0 ], [ 1, 4, 2, 2, 1, 1, 0, 0 ], [ 2, 4, 1, 2, 1, 1, 0, 0 ], [ 2, 2, 1, 1, 1, 4, 0, 0 ], [ 4, 1, 3, 1, 1, 1, 0, 0 ], [ 2, 4, 1, 1, 1, 2, 0, 0 ], [ 1, 3, 4, 1, 1, 1, 0, 0 ], [ 1, 1, 1, 2, 4, 2, 0, 0 ], [ 1, 2, 1, 1, 4, 2, 0, 0 ], [ 1, 2, 1, 2, 4, 1, 0, 0 ], [ 1, 1, 4, 2, 1, 2, 0, 0 ], [ 1, 2, 4, 1, 1, 2, 0, 0 ], [ 1, 2, 4, 2, 1, 1, 0, 0 ], [ 4, 1, 1, 2, 1, 2, 0, 0 ], [ 4, 2, 1, 1, 1, 2, 0, 0 ], [ 4, 2, 1, 2, 1, 1, 0, 0 ], [ 2, 1, 2, 1, 4, 1, 0, 0 ], [ 2, 1, 4, 1, 2, 1, 0, 0 ], [ 4, 1, 2, 1, 2, 1, 0, 0 ], [ 1, 1, 1, 1, 4, 3, 0, 0 ], [ 1, 1, 1, 3, 4, 1, 0, 0 ], [ 1, 3, 1, 1, 4, 1, 0, 0 ], [ 1, 1, 4, 1, 1, 3, 0, 0 ], [ 1, 1, 4, 3, 1, 1, 0, 0 ], [ 4, 1, 1, 1, 1, 3, 0, 0 ], [ 4, 1, 1, 3, 1, 1, 0, 0 ], [ 1, 1, 3, 1, 4, 1, 0, 0 ], [ 1, 1, 4, 1, 3, 1, 0, 0 ], [ 3, 1, 1, 1, 4, 1, 0, 0 ], [ 4, 1, 1, 1, 3, 1, 0, 0 ], [ 2, 1, 1, 4, 1, 2, 0, 0 ], [ 2, 1, 1, 2, 1, 4, 0, 0 ], [ 2, 1, 1, 2, 3, 2, 0, 0 ], [ 2, 3, 3, 1, 1, 1, 2, 0 ] ];