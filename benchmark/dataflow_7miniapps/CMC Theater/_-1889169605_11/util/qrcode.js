!function() {
    function r(r, o) {
        var f;
        r > o && (f = r, r = o, o = f), f = o, f *= o, f += o, f >>= 1, R[f += r] = 1;
    }
    function o(o, f) {
        var e;
        for (M[o + l * f] = 1, e = -2; e < 2; e++) M[o + e + l * (f - 2)] = 1, M[o - 2 + l * (f + e + 1)] = 1, 
        M[o + 2 + l * (f + e)] = 1, M[o + e + 1 + l * (f + 2)] = 1;
        for (e = 0; e < 2; e++) r(o - 1, f + e), r(o + 1, f - e), r(o - e, f - 1), r(o + e, f + 1);
    }
    function f(r) {
        for (;r >= 255; ) r = ((r -= 255) >> 8) + (255 & r);
        return r;
    }
    function e(r, o, e, t) {
        var a, n, i;
        for (a = 0; a < t; a++) m[e + a] = 0;
        for (a = 0; a < o; a++) {
            if (255 != (i = p[m[r + a] ^ m[e]])) for (n = 1; n < t; n++) m[e + n - 1] = m[e + n] ^ z[f(i + y[t - n])]; else for (n = e; n < e + t; n++) m[n] = m[n + 1];
            m[e + t - 1] = 255 == i ? 0 : z[f(i + y[0])];
        }
    }
    function t(r, o) {
        var f;
        return r > o && (f = r, r = o, o = f), f = o, f += o * o, f >>= 1, f += r, R[f];
    }
    function a(r) {
        var o, f, e, a;
        switch (r) {
          case 0:
            for (f = 0; f < l; f++) for (o = 0; o < l; o++) o + f & 1 || t(o, f) || (M[o + f * l] ^= 1);
            break;

          case 1:
            for (f = 0; f < l; f++) for (o = 0; o < l; o++) 1 & f || t(o, f) || (M[o + f * l] ^= 1);
            break;

          case 2:
            for (f = 0; f < l; f++) for (e = 0, o = 0; o < l; o++, e++) 3 == e && (e = 0), e || t(o, f) || (M[o + f * l] ^= 1);
            break;

          case 3:
            for (a = 0, f = 0; f < l; f++, a++) for (3 == a && (a = 0), e = a, o = 0; o < l; o++, 
            e++) 3 == e && (e = 0), e || t(o, f) || (M[o + f * l] ^= 1);
            break;

          case 4:
            for (f = 0; f < l; f++) for (e = 0, a = f >> 1 & 1, o = 0; o < l; o++, e++) 3 == e && (e = 0, 
            a = !a), a || t(o, f) || (M[o + f * l] ^= 1);
            break;

          case 5:
            for (a = 0, f = 0; f < l; f++, a++) for (3 == a && (a = 0), e = 0, o = 0; o < l; o++, 
            e++) 3 == e && (e = 0), (o & f & 1) + !(!e | !a) || t(o, f) || (M[o + f * l] ^= 1);
            break;

          case 6:
            for (a = 0, f = 0; f < l; f++, a++) for (3 == a && (a = 0), e = 0, o = 0; o < l; o++, 
            e++) 3 == e && (e = 0), (o & f & 1) + (e && e == a) & 1 || t(o, f) || (M[o + f * l] ^= 1);
            break;

          case 7:
            for (a = 0, f = 0; f < l; f++, a++) for (3 == a && (a = 0), e = 0, o = 0; o < l; o++, 
            e++) 3 == e && (e = 0), (e && e == a) + (o + f & 1) & 1 || t(o, f) || (M[o + f * l] ^= 1);
        }
    }
    function n(r) {
        var o, f = 0;
        for (o = 0; o <= r; o++) F[o] >= 5 && (f += A + F[o] - 5);
        for (o = 3; o < r - 1; o += 2) F[o - 2] == F[o + 2] && F[o + 2] == F[o - 1] && F[o - 1] == F[o + 1] && 3 * F[o - 1] == F[o] && (0 == F[o - 3] || o + 3 > r || 3 * F[o - 3] >= 4 * F[o] || 3 * F[o + 3] >= 4 * F[o]) && (f += N);
        return f;
    }
    function i() {
        var r, o, f, e, t, a = 0, i = 0;
        for (o = 0; o < l - 1; o++) for (r = 0; r < l - 1; r++) (M[r + l * o] && M[r + 1 + l * o] && M[r + l * (o + 1)] && M[r + 1 + l * (o + 1)] || !(M[r + l * o] || M[r + 1 + l * o] || M[r + l * (o + 1)] || M[r + 1 + l * (o + 1)])) && (a += C);
        for (o = 0; o < l; o++) {
            for (F[0] = 0, f = e = r = 0; r < l; r++) (t = M[r + l * o]) == e ? F[f]++ : F[++f] = 1, 
            i += (e = t) ? 1 : -1;
            a += n(f);
        }
        i < 0 && (i = -i);
        var c = i, s = 0;
        for (c += c << 2, c <<= 1; c > l * l; ) c -= l * l, s++;
        for (a += s * Q, r = 0; r < l; r++) {
            for (F[0] = 0, f = e = o = 0; o < l; o++) (t = M[r + l * o]) == e ? F[f]++ : F[++f] = 1, 
            e = t;
            a += n(f);
        }
        return a;
    }
    function c(n) {
        var c, F, A, C, N, Q, j, q;
        C = n.length, s = 0;
        do {
            if (s++, A = 4 * (S - 1) + 16 * (s - 1), u = k[A++], v = k[A++], d = k[A++], h = k[A], 
            A = d * (u + v) + v - 3 + (s <= 9), C <= A) break;
        } while (s < 40);
        for (l = 17 + 4 * s, N = d + (d + h) * (u + v) + v, C = 0; C < N; C++) x[C] = 0;
        for (m = n.slice(0), C = 0; C < l * l; C++) M[C] = 0;
        for (C = 0; C < (l * (l + 1) + 1) / 2; C++) R[C] = 0;
        for (C = 0; C < 3; C++) {
            for (A = 0, F = 0, 1 == C && (A = l - 7), 2 == C && (F = l - 7), M[F + 3 + l * (A + 3)] = 1, 
            c = 0; c < 6; c++) M[F + c + l * A] = 1, M[F + l * (A + c + 1)] = 1, M[F + 6 + l * (A + c)] = 1, 
            M[F + c + 1 + l * (A + 6)] = 1;
            for (c = 1; c < 5; c++) r(F + c, A + 1), r(F + 1, A + c + 1), r(F + 5, A + c), r(F + c + 1, A + 5);
            for (c = 2; c < 4; c++) M[F + c + l * (A + 2)] = 1, M[F + 2 + l * (A + c + 1)] = 1, 
            M[F + 4 + l * (A + c)] = 1, M[F + c + 1 + l * (A + 4)] = 1;
        }
        if (s > 1) for (C = w[s], F = l - 7; ;) {
            for (c = l - 7; c > C - 3 && (o(c, F), !(c < C)); ) c -= C;
            if (F <= C + 9) break;
            o(6, F -= C), o(F, 6);
        }
        for (M[8 + l * (l - 8)] = 1, F = 0; F < 7; F++) r(7, F), r(l - 8, F), r(7, F + l - 7);
        for (c = 0; c < 8; c++) r(c, 7), r(c + l - 8, 7), r(c, l - 8);
        for (c = 0; c < 9; c++) r(c, 8);
        for (c = 0; c < 8; c++) r(c + l - 8, 8), r(8, c);
        for (F = 0; F < 7; F++) r(8, F + l - 7);
        for (c = 0; c < l - 14; c++) 1 & c ? (r(8 + c, 6), r(6, 8 + c)) : (M[8 + c + 6 * l] = 1, 
        M[6 + l * (8 + c)] = 1);
        if (s > 6) for (C = b[s - 7], A = 17, c = 0; c < 6; c++) for (F = 0; F < 3; F++, 
        A--) 1 & (A > 11 ? s >> A - 12 : C >> A) ? (M[5 - c + l * (2 - F + l - 11)] = 1, 
        M[2 - F + l - 11 + l * (5 - c)] = 1) : (r(5 - c, 2 - F + l - 11), r(2 - F + l - 11, 5 - c));
        for (F = 0; F < l; F++) for (c = 0; c <= F; c++) M[c + l * F] && r(c, F);
        for (N = m.length, Q = 0; Q < N; Q++) x[Q] = m.charCodeAt(Q);
        if (m = x.slice(0), c = d * (u + v) + v, N >= c - 2 && (N = c - 2, s > 9 && N--), 
        Q = N, s > 9) {
            for (m[Q + 2] = 0, m[Q + 3] = 0; Q--; ) C = m[Q], m[Q + 3] |= 255 & C << 4, m[Q + 2] = C >> 4;
            m[2] |= 255 & N << 4, m[1] = N >> 4, m[0] = 64 | N >> 12;
        } else {
            for (m[Q + 1] = 0, m[Q + 2] = 0; Q--; ) C = m[Q], m[Q + 2] |= 255 & C << 4, m[Q + 1] = C >> 4;
            m[1] |= 255 & N << 4, m[0] = 64 | N >> 4;
        }
        for (Q = N + 3 - (s < 10); Q < c; ) m[Q++] = 236, m[Q++] = 17;
        for (y[0] = 1, Q = 0; Q < h; Q++) {
            for (y[Q + 1] = 1, j = Q; j > 0; j--) y[j] = y[j] ? y[j - 1] ^ z[f(p[y[j]] + Q)] : y[j - 1];
            y[0] = z[f(p[y[0]] + Q)];
        }
        for (Q = 0; Q <= h; Q++) y[Q] = p[y[Q]];
        for (A = c, F = 0, Q = 0; Q < u; Q++) e(F, d, A, h), F += d, A += h;
        for (Q = 0; Q < v; Q++) e(F, d + 1, A, h), F += d + 1, A += h;
        for (F = 0, Q = 0; Q < d; Q++) {
            for (j = 0; j < u; j++) x[F++] = m[Q + j * d];
            for (j = 0; j < v; j++) x[F++] = m[u * d + Q + j * (d + 1)];
        }
        for (j = 0; j < v; j++) x[F++] = m[u * d + Q + j * (d + 1)];
        for (Q = 0; Q < h; Q++) for (j = 0; j < u + v; j++) x[F++] = m[c + Q + j * h];
        for (m = x, c = F = l - 1, A = N = 1, q = (d + h) * (u + v) + v, Q = 0; Q < q; Q++) for (C = m[Q], 
        j = 0; j < 8; j++, C <<= 1) {
            128 & C && (M[c + l * F] = 1);
            do {
                N ? c-- : (c++, A ? 0 != F ? F-- : (A = !A, 6 == (c -= 2) && (c--, F = 9)) : F != l - 1 ? F++ : (A = !A, 
                6 == (c -= 2) && (c--, F -= 8))), N = !N;
            } while (t(c, F));
        }
        for (m = M.slice(0), C = 0, F = 3e4, A = 0; A < 8 && (a(A), (c = i()) < F && (F = c, 
        C = A), 7 != C); A++) M = m.slice(0);
        for (C != A && a(C), F = g[C + (S - 1 << 3)], A = 0; A < 8; A++, F >>= 1) 1 & F && (M[l - 1 - A + 8 * l] = 1, 
        A < 6 ? M[8 + l * A] = 1 : M[8 + l * (A + 1)] = 1);
        for (A = 0; A < 7; A++, F >>= 1) 1 & F && (M[8 + l * (l - 7 + A)] = 1, A ? M[6 - A + 8 * l] = 1 : M[7 + 8 * l] = 1);
        return M;
    }
    var s, l, u, v, d, h, w = [ 0, 11, 15, 19, 23, 27, 31, 16, 18, 20, 22, 24, 26, 28, 20, 22, 24, 24, 26, 28, 28, 22, 24, 24, 26, 26, 28, 28, 24, 24, 26, 26, 26, 28, 28, 24, 26, 26, 26, 28, 28 ], b = [ 3220, 1468, 2713, 1235, 3062, 1890, 2119, 1549, 2344, 2936, 1117, 2583, 1330, 2470, 1667, 2249, 2028, 3780, 481, 4011, 142, 3098, 831, 3445, 592, 2517, 1776, 2234, 1951, 2827, 1070, 2660, 1345, 3177 ], g = [ 30660, 29427, 32170, 30877, 26159, 25368, 27713, 26998, 21522, 20773, 24188, 23371, 17913, 16590, 20375, 19104, 13663, 12392, 16177, 14854, 9396, 8579, 11994, 11245, 5769, 5054, 7399, 6608, 1890, 597, 3340, 2107 ], k = [ 1, 0, 19, 7, 1, 0, 16, 10, 1, 0, 13, 13, 1, 0, 9, 17, 1, 0, 34, 10, 1, 0, 28, 16, 1, 0, 22, 22, 1, 0, 16, 28, 1, 0, 55, 15, 1, 0, 44, 26, 2, 0, 17, 18, 2, 0, 13, 22, 1, 0, 80, 20, 2, 0, 32, 18, 2, 0, 24, 26, 4, 0, 9, 16, 1, 0, 108, 26, 2, 0, 43, 24, 2, 2, 15, 18, 2, 2, 11, 22, 2, 0, 68, 18, 4, 0, 27, 16, 4, 0, 19, 24, 4, 0, 15, 28, 2, 0, 78, 20, 4, 0, 31, 18, 2, 4, 14, 18, 4, 1, 13, 26, 2, 0, 97, 24, 2, 2, 38, 22, 4, 2, 18, 22, 4, 2, 14, 26, 2, 0, 116, 30, 3, 2, 36, 22, 4, 4, 16, 20, 4, 4, 12, 24, 2, 2, 68, 18, 4, 1, 43, 26, 6, 2, 19, 24, 6, 2, 15, 28, 4, 0, 81, 20, 1, 4, 50, 30, 4, 4, 22, 28, 3, 8, 12, 24, 2, 2, 92, 24, 6, 2, 36, 22, 4, 6, 20, 26, 7, 4, 14, 28, 4, 0, 107, 26, 8, 1, 37, 22, 8, 4, 20, 24, 12, 4, 11, 22, 3, 1, 115, 30, 4, 5, 40, 24, 11, 5, 16, 20, 11, 5, 12, 24, 5, 1, 87, 22, 5, 5, 41, 24, 5, 7, 24, 30, 11, 7, 12, 24, 5, 1, 98, 24, 7, 3, 45, 28, 15, 2, 19, 24, 3, 13, 15, 30, 1, 5, 107, 28, 10, 1, 46, 28, 1, 15, 22, 28, 2, 17, 14, 28, 5, 1, 120, 30, 9, 4, 43, 26, 17, 1, 22, 28, 2, 19, 14, 28, 3, 4, 113, 28, 3, 11, 44, 26, 17, 4, 21, 26, 9, 16, 13, 26, 3, 5, 107, 28, 3, 13, 41, 26, 15, 5, 24, 30, 15, 10, 15, 28, 4, 4, 116, 28, 17, 0, 42, 26, 17, 6, 22, 28, 19, 6, 16, 30, 2, 7, 111, 28, 17, 0, 46, 28, 7, 16, 24, 30, 34, 0, 13, 24, 4, 5, 121, 30, 4, 14, 47, 28, 11, 14, 24, 30, 16, 14, 15, 30, 6, 4, 117, 30, 6, 14, 45, 28, 11, 16, 24, 30, 30, 2, 16, 30, 8, 4, 106, 26, 8, 13, 47, 28, 7, 22, 24, 30, 22, 13, 15, 30, 10, 2, 114, 28, 19, 4, 46, 28, 28, 6, 22, 28, 33, 4, 16, 30, 8, 4, 122, 30, 22, 3, 45, 28, 8, 26, 23, 30, 12, 28, 15, 30, 3, 10, 117, 30, 3, 23, 45, 28, 4, 31, 24, 30, 11, 31, 15, 30, 7, 7, 116, 30, 21, 7, 45, 28, 1, 37, 23, 30, 19, 26, 15, 30, 5, 10, 115, 30, 19, 10, 47, 28, 15, 25, 24, 30, 23, 25, 15, 30, 13, 3, 115, 30, 2, 29, 46, 28, 42, 1, 24, 30, 23, 28, 15, 30, 17, 0, 115, 30, 10, 23, 46, 28, 10, 35, 24, 30, 19, 35, 15, 30, 17, 1, 115, 30, 14, 21, 46, 28, 29, 19, 24, 30, 11, 46, 15, 30, 13, 6, 115, 30, 14, 23, 46, 28, 44, 7, 24, 30, 59, 1, 16, 30, 12, 7, 121, 30, 12, 26, 47, 28, 39, 14, 24, 30, 22, 41, 15, 30, 6, 14, 121, 30, 6, 34, 47, 28, 46, 10, 24, 30, 2, 64, 15, 30, 17, 4, 122, 30, 29, 14, 46, 28, 49, 10, 24, 30, 24, 46, 15, 30, 4, 18, 122, 30, 13, 32, 46, 28, 48, 14, 24, 30, 42, 32, 15, 30, 20, 4, 117, 30, 40, 7, 47, 28, 43, 22, 24, 30, 10, 67, 15, 30, 19, 6, 118, 30, 18, 31, 47, 28, 34, 34, 24, 30, 20, 61, 15, 30 ], p = [ 255, 0, 1, 25, 2, 50, 26, 198, 3, 223, 51, 238, 27, 104, 199, 75, 4, 100, 224, 14, 52, 141, 239, 129, 28, 193, 105, 248, 200, 8, 76, 113, 5, 138, 101, 47, 225, 36, 15, 33, 53, 147, 142, 218, 240, 18, 130, 69, 29, 181, 194, 125, 106, 39, 249, 185, 201, 154, 9, 120, 77, 228, 114, 166, 6, 191, 139, 98, 102, 221, 48, 253, 226, 152, 37, 179, 16, 145, 34, 136, 54, 208, 148, 206, 143, 150, 219, 189, 241, 210, 19, 92, 131, 56, 70, 64, 30, 66, 182, 163, 195, 72, 126, 110, 107, 58, 40, 84, 250, 133, 186, 61, 202, 94, 155, 159, 10, 21, 121, 43, 78, 212, 229, 172, 115, 243, 167, 87, 7, 112, 192, 247, 140, 128, 99, 13, 103, 74, 222, 237, 49, 197, 254, 24, 227, 165, 153, 119, 38, 184, 180, 124, 17, 68, 146, 217, 35, 32, 137, 46, 55, 63, 209, 91, 149, 188, 207, 205, 144, 135, 151, 178, 220, 252, 190, 97, 242, 86, 211, 171, 20, 42, 93, 158, 132, 60, 57, 83, 71, 109, 65, 162, 31, 45, 67, 216, 183, 123, 164, 118, 196, 23, 73, 236, 127, 12, 111, 246, 108, 161, 59, 82, 41, 157, 85, 170, 251, 96, 134, 177, 187, 204, 62, 90, 203, 89, 95, 176, 156, 169, 160, 81, 11, 245, 22, 235, 122, 117, 44, 215, 79, 174, 213, 233, 230, 231, 173, 232, 116, 214, 244, 234, 168, 80, 88, 175 ], z = [ 1, 2, 4, 8, 16, 32, 64, 128, 29, 58, 116, 232, 205, 135, 19, 38, 76, 152, 45, 90, 180, 117, 234, 201, 143, 3, 6, 12, 24, 48, 96, 192, 157, 39, 78, 156, 37, 74, 148, 53, 106, 212, 181, 119, 238, 193, 159, 35, 70, 140, 5, 10, 20, 40, 80, 160, 93, 186, 105, 210, 185, 111, 222, 161, 95, 190, 97, 194, 153, 47, 94, 188, 101, 202, 137, 15, 30, 60, 120, 240, 253, 231, 211, 187, 107, 214, 177, 127, 254, 225, 223, 163, 91, 182, 113, 226, 217, 175, 67, 134, 17, 34, 68, 136, 13, 26, 52, 104, 208, 189, 103, 206, 129, 31, 62, 124, 248, 237, 199, 147, 59, 118, 236, 197, 151, 51, 102, 204, 133, 23, 46, 92, 184, 109, 218, 169, 79, 158, 33, 66, 132, 21, 42, 84, 168, 77, 154, 41, 82, 164, 85, 170, 73, 146, 57, 114, 228, 213, 183, 115, 230, 209, 191, 99, 198, 145, 63, 126, 252, 229, 215, 179, 123, 246, 241, 255, 227, 219, 171, 75, 150, 49, 98, 196, 149, 55, 110, 220, 165, 87, 174, 65, 130, 25, 50, 100, 200, 141, 7, 14, 28, 56, 112, 224, 221, 167, 83, 166, 81, 162, 89, 178, 121, 242, 249, 239, 195, 155, 43, 86, 172, 69, 138, 9, 18, 36, 72, 144, 61, 122, 244, 245, 247, 243, 251, 235, 203, 139, 11, 22, 44, 88, 176, 125, 250, 233, 207, 131, 27, 54, 108, 216, 173, 71, 142, 0 ], m = [], x = [], M = [], R = [], F = [], S = 2, y = [], A = 3, C = 3, N = 40, Q = 10, j = null, q = null, B = {
        get ecclevel() {
            return S;
        },
        set ecclevel(r) {
            S = r;
        },
        get size() {
            return q;
        },
        set size(r) {
            q = r;
        },
        get canvas() {
            return j;
        },
        set canvas(r) {
            j = r;
        },
        getFrame: function(r) {
            return c(r);
        },
        draw: function(r, o, f, e) {
            if (S = e || S, o = o || j) {
                f = f || q || Math.min(o.width, o.height);
                var t = c(r), a = o.ctx, n = Math.round(f / (l + 8)), i = n * (l + 12), s = Math.floor((f - i) / 2);
                console.log("px = " + n, "非画布宽度width = " + l, " 画布size =" + f, "roundedSize = " + i, "offset = " + s), 
                f = i, a.clearRect(0, 0, o.width, o.height), a.setFillStyle("#000000");
                for (var u = 0; u < l; u++) for (var v = 0; v < l; v++) t[v * l + u] && a.fillRect(n * (4 + u) + s, n * (4 + v) + s, n, n);
                a.draw();
            } else console.warn("No canvas provided to draw QR code in!");
        }
    };
    module.exports = {
        api: B
    };
}();