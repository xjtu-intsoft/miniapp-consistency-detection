function t(t, e) {
    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function");
}

var e = function() {
    function t(t, e) {
        for (var i = 0; i < e.length; i++) {
            var s = e[i];
            s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), 
            Object.defineProperty(t, s.key, s);
        }
    }
    return function(e, i, s) {
        return i && t(e.prototype, i), s && t(e, s), e;
    };
}(), i = {
    KEY_ERR: 311,
    KEY_ERR_MSG: "key格式错误",
    PARAM_ERR: 310,
    PARAM_ERR_MSG: "请求参数信息有误",
    SYSTEM_ERR: 600,
    SYSTEM_ERR_MSG: "系统错误",
    WX_ERR_CODE: 1e3,
    WX_OK_CODE: 200
}, s = "https://apis.map.qq.com/ws/", o = s + "place/v1/suggestion", n = {
    driving: "driving",
    transit: "transit"
}, r = {
    safeAdd: function(t, e) {
        var i = (65535 & t) + (65535 & e);
        return (t >> 16) + (e >> 16) + (i >> 16) << 16 | 65535 & i;
    },
    bitRotateLeft: function(t, e) {
        return t << e | t >>> 32 - e;
    },
    md5cmn: function(t, e, i, s, o, n) {
        return this.safeAdd(this.bitRotateLeft(this.safeAdd(this.safeAdd(e, t), this.safeAdd(s, n)), o), i);
    },
    md5ff: function(t, e, i, s, o, n, r) {
        return this.md5cmn(e & i | ~e & s, t, e, o, n, r);
    },
    md5gg: function(t, e, i, s, o, n, r) {
        return this.md5cmn(e & s | i & ~s, t, e, o, n, r);
    },
    md5hh: function(t, e, i, s, o, n, r) {
        return this.md5cmn(e ^ i ^ s, t, e, o, n, r);
    },
    md5ii: function(t, e, i, s, o, n, r) {
        return this.md5cmn(i ^ (e | ~s), t, e, o, n, r);
    },
    binlMD5: function(t, e) {
        t[e >> 5] |= 128 << e % 32, t[14 + (e + 64 >>> 9 << 4)] = e;
        var i, s, o, n, r, a = 1732584193, l = -271733879, d = -1732584194, c = 271733878;
        for (i = 0; i < t.length; i += 16) s = a, o = l, n = d, r = c, a = this.md5ff(a, l, d, c, t[i], 7, -680876936), 
        c = this.md5ff(c, a, l, d, t[i + 1], 12, -389564586), d = this.md5ff(d, c, a, l, t[i + 2], 17, 606105819), 
        l = this.md5ff(l, d, c, a, t[i + 3], 22, -1044525330), a = this.md5ff(a, l, d, c, t[i + 4], 7, -176418897), 
        c = this.md5ff(c, a, l, d, t[i + 5], 12, 1200080426), d = this.md5ff(d, c, a, l, t[i + 6], 17, -1473231341), 
        l = this.md5ff(l, d, c, a, t[i + 7], 22, -45705983), a = this.md5ff(a, l, d, c, t[i + 8], 7, 1770035416), 
        c = this.md5ff(c, a, l, d, t[i + 9], 12, -1958414417), d = this.md5ff(d, c, a, l, t[i + 10], 17, -42063), 
        l = this.md5ff(l, d, c, a, t[i + 11], 22, -1990404162), a = this.md5ff(a, l, d, c, t[i + 12], 7, 1804603682), 
        c = this.md5ff(c, a, l, d, t[i + 13], 12, -40341101), d = this.md5ff(d, c, a, l, t[i + 14], 17, -1502002290), 
        l = this.md5ff(l, d, c, a, t[i + 15], 22, 1236535329), a = this.md5gg(a, l, d, c, t[i + 1], 5, -165796510), 
        c = this.md5gg(c, a, l, d, t[i + 6], 9, -1069501632), d = this.md5gg(d, c, a, l, t[i + 11], 14, 643717713), 
        l = this.md5gg(l, d, c, a, t[i], 20, -373897302), a = this.md5gg(a, l, d, c, t[i + 5], 5, -701558691), 
        c = this.md5gg(c, a, l, d, t[i + 10], 9, 38016083), d = this.md5gg(d, c, a, l, t[i + 15], 14, -660478335), 
        l = this.md5gg(l, d, c, a, t[i + 4], 20, -405537848), a = this.md5gg(a, l, d, c, t[i + 9], 5, 568446438), 
        c = this.md5gg(c, a, l, d, t[i + 14], 9, -1019803690), d = this.md5gg(d, c, a, l, t[i + 3], 14, -187363961), 
        l = this.md5gg(l, d, c, a, t[i + 8], 20, 1163531501), a = this.md5gg(a, l, d, c, t[i + 13], 5, -1444681467), 
        c = this.md5gg(c, a, l, d, t[i + 2], 9, -51403784), d = this.md5gg(d, c, a, l, t[i + 7], 14, 1735328473), 
        l = this.md5gg(l, d, c, a, t[i + 12], 20, -1926607734), a = this.md5hh(a, l, d, c, t[i + 5], 4, -378558), 
        c = this.md5hh(c, a, l, d, t[i + 8], 11, -2022574463), d = this.md5hh(d, c, a, l, t[i + 11], 16, 1839030562), 
        l = this.md5hh(l, d, c, a, t[i + 14], 23, -35309556), a = this.md5hh(a, l, d, c, t[i + 1], 4, -1530992060), 
        c = this.md5hh(c, a, l, d, t[i + 4], 11, 1272893353), d = this.md5hh(d, c, a, l, t[i + 7], 16, -155497632), 
        l = this.md5hh(l, d, c, a, t[i + 10], 23, -1094730640), a = this.md5hh(a, l, d, c, t[i + 13], 4, 681279174), 
        c = this.md5hh(c, a, l, d, t[i], 11, -358537222), d = this.md5hh(d, c, a, l, t[i + 3], 16, -722521979), 
        l = this.md5hh(l, d, c, a, t[i + 6], 23, 76029189), a = this.md5hh(a, l, d, c, t[i + 9], 4, -640364487), 
        c = this.md5hh(c, a, l, d, t[i + 12], 11, -421815835), d = this.md5hh(d, c, a, l, t[i + 15], 16, 530742520), 
        l = this.md5hh(l, d, c, a, t[i + 2], 23, -995338651), a = this.md5ii(a, l, d, c, t[i], 6, -198630844), 
        c = this.md5ii(c, a, l, d, t[i + 7], 10, 1126891415), d = this.md5ii(d, c, a, l, t[i + 14], 15, -1416354905), 
        l = this.md5ii(l, d, c, a, t[i + 5], 21, -57434055), a = this.md5ii(a, l, d, c, t[i + 12], 6, 1700485571), 
        c = this.md5ii(c, a, l, d, t[i + 3], 10, -1894986606), d = this.md5ii(d, c, a, l, t[i + 10], 15, -1051523), 
        l = this.md5ii(l, d, c, a, t[i + 1], 21, -2054922799), a = this.md5ii(a, l, d, c, t[i + 8], 6, 1873313359), 
        c = this.md5ii(c, a, l, d, t[i + 15], 10, -30611744), d = this.md5ii(d, c, a, l, t[i + 6], 15, -1560198380), 
        l = this.md5ii(l, d, c, a, t[i + 13], 21, 1309151649), a = this.md5ii(a, l, d, c, t[i + 4], 6, -145523070), 
        c = this.md5ii(c, a, l, d, t[i + 11], 10, -1120210379), d = this.md5ii(d, c, a, l, t[i + 2], 15, 718787259), 
        l = this.md5ii(l, d, c, a, t[i + 9], 21, -343485551), a = this.safeAdd(a, s), l = this.safeAdd(l, o), 
        d = this.safeAdd(d, n), c = this.safeAdd(c, r);
        return [ a, l, d, c ];
    },
    binl2rstr: function(t) {
        var e, i = "", s = 32 * t.length;
        for (e = 0; e < s; e += 8) i += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
        return i;
    },
    rstr2binl: function(t) {
        var e, i = [];
        for (i[(t.length >> 2) - 1] = void 0, e = 0; e < i.length; e += 1) i[e] = 0;
        var s = 8 * t.length;
        for (e = 0; e < s; e += 8) i[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
        return i;
    },
    rstrMD5: function(t) {
        return this.binl2rstr(this.binlMD5(this.rstr2binl(t), 8 * t.length));
    },
    rstrHMACMD5: function(t, e) {
        var i, s, o = this.rstr2binl(t), n = [], r = [];
        for (n[15] = r[15] = void 0, o.length > 16 && (o = this.binlMD5(o, 8 * t.length)), 
        i = 0; i < 16; i += 1) n[i] = 909522486 ^ o[i], r[i] = 1549556828 ^ o[i];
        return s = this.binlMD5(n.concat(this.rstr2binl(e)), 512 + 8 * e.length), this.binl2rstr(this.binlMD5(r.concat(s), 640));
    },
    rstr2hex: function(t) {
        var e, i, s = "";
        for (i = 0; i < t.length; i += 1) e = t.charCodeAt(i), s += "0123456789abcdef".charAt(e >>> 4 & 15) + "0123456789abcdef".charAt(15 & e);
        return s;
    },
    str2rstrUTF8: function(t) {
        return unescape(encodeURIComponent(t));
    },
    rawMD5: function(t) {
        return this.rstrMD5(this.str2rstrUTF8(t));
    },
    hexMD5: function(t) {
        return this.rstr2hex(this.rawMD5(t));
    },
    rawHMACMD5: function(t, e) {
        return this.rstrHMACMD5(this.str2rstrUTF8(t), str2rstrUTF8(e));
    },
    hexHMACMD5: function(t, e) {
        return this.rstr2hex(this.rawHMACMD5(t, e));
    },
    md5: function(t, e, i) {
        return e ? i ? this.rawHMACMD5(e, t) : this.hexHMACMD5(e, t) : i ? this.rawMD5(t) : this.hexMD5(t);
    },
    getSig: function(t, e, i, s) {
        var o = null, n = [];
        return Object.keys(t).sort().forEach(function(e) {
            n.push(e + "=" + t[e]);
        }), "search" == i && (o = "/ws/place/v1/search?" + n.join("&") + e), "suggest" == i && (o = "/ws/place/v1/suggestion?" + n.join("&") + e), 
        "reverseGeocoder" == i && (o = "/ws/geocoder/v1/?" + n.join("&") + e), "geocoder" == i && (o = "/ws/geocoder/v1/?" + n.join("&") + e), 
        "getCityList" == i && (o = "/ws/district/v1/list?" + n.join("&") + e), "getDistrictByCityId" == i && (o = "/ws/district/v1/getchildren?" + n.join("&") + e), 
        "calculateDistance" == i && (o = "/ws/distance/v1/?" + n.join("&") + e), "direction" == i && (o = "/ws/direction/v1/" + s + "?" + n.join("&") + e), 
        o = this.md5(o);
    },
    location2query: function(t) {
        if ("string" == typeof t) return t;
        for (var e = "", i = 0; i < t.length; i++) {
            var s = t[i];
            e && (e += ";"), s.location && (e = e + s.location.lat + "," + s.location.lng), 
            s.latitude && s.longitude && (e = e + s.latitude + "," + s.longitude);
        }
        return e;
    },
    rad: function(t) {
        return t * Math.PI / 180;
    },
    getEndLocation: function(t) {
        for (var e = t.split(";"), i = [], s = 0; s < e.length; s++) i.push({
            lat: parseFloat(e[s].split(",")[0]),
            lng: parseFloat(e[s].split(",")[1])
        });
        return i;
    },
    getDistance: function(t, e, i, s) {
        var o = this.rad(t), n = this.rad(i), r = o - n, a = this.rad(e) - this.rad(s), l = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(r / 2), 2) + Math.cos(o) * Math.cos(n) * Math.pow(Math.sin(a / 2), 2)));
        return l *= 6378136.49, l = Math.round(1e4 * l) / 1e4, parseFloat(l.toFixed(0));
    },
    getWXLocation: function(t, e, i) {
        wx.getLocation({
            type: "gcj02",
            success: t,
            fail: e,
            complete: i
        });
    },
    getLocationParam: function(t) {
        return "string" == typeof t && (t = 2 === t.split(",").length ? {
            latitude: t.split(",")[0],
            longitude: t.split(",")[1]
        } : {}), t;
    },
    polyfillParam: function(t) {
        t.success = t.success || function() {}, t.fail = t.fail || function() {}, t.complete = t.complete || function() {};
    },
    checkParamKeyEmpty: function(t, e) {
        if (!t[e]) {
            var s = this.buildErrorConfig(i.PARAM_ERR, i.PARAM_ERR_MSG + e + "参数格式有误");
            return t.fail(s), t.complete(s), !0;
        }
        return !1;
    },
    checkKeyword: function(t) {
        return !this.checkParamKeyEmpty(t, "keyword");
    },
    checkLocation: function(t) {
        var e = this.getLocationParam(t.location);
        if (!e || !e.latitude || !e.longitude) {
            var s = this.buildErrorConfig(i.PARAM_ERR, i.PARAM_ERR_MSG + " location参数格式有误");
            return t.fail(s), t.complete(s), !1;
        }
        return !0;
    },
    buildErrorConfig: function(t, e) {
        return {
            status: t,
            message: e
        };
    },
    handleData: function(t, e, i) {
        if ("search" == i) {
            for (var s = e.data, o = [], n = 0; n < s.length; n++) o.push({
                id: s[n].id || null,
                title: s[n].title || null,
                latitude: s[n].location && s[n].location.lat || null,
                longitude: s[n].location && s[n].location.lng || null,
                address: s[n].address || null,
                category: s[n].category || null,
                tel: s[n].tel || null,
                adcode: s[n].ad_info && s[n].ad_info.adcode || null,
                city: s[n].ad_info && s[n].ad_info.city || null,
                district: s[n].ad_info && s[n].ad_info.district || null,
                province: s[n].ad_info && s[n].ad_info.province || null
            });
            t.success(e, {
                searchResult: s,
                searchSimplify: o
            });
        } else if ("suggest" == i) {
            for (var r = e.data, a = [], n = 0; n < r.length; n++) a.push({
                adcode: r[n].adcode || null,
                address: r[n].address || null,
                category: r[n].category || null,
                city: r[n].city || null,
                district: r[n].district || null,
                id: r[n].id || null,
                latitude: r[n].location && r[n].location.lat || null,
                longitude: r[n].location && r[n].location.lng || null,
                province: r[n].province || null,
                title: r[n].title || null,
                type: r[n].type || null
            });
            t.success(e, {
                suggestResult: r,
                suggestSimplify: a
            });
        } else if ("reverseGeocoder" == i) {
            var l = e.result, d = {
                address: l.address || null,
                latitude: l.location && l.location.lat || null,
                longitude: l.location && l.location.lng || null,
                adcode: l.ad_info && l.ad_info.adcode || null,
                city: l.address_component && l.address_component.city || null,
                district: l.address_component && l.address_component.district || null,
                nation: l.address_component && l.address_component.nation || null,
                province: l.address_component && l.address_component.province || null,
                street: l.address_component && l.address_component.street || null,
                street_number: l.address_component && l.address_component.street_number || null,
                recommend: l.formatted_addresses && l.formatted_addresses.recommend || null,
                rough: l.formatted_addresses && l.formatted_addresses.rough || null
            };
            if (l.pois) {
                for (var c = l.pois, u = [], n = 0; n < c.length; n++) u.push({
                    id: c[n].id || null,
                    title: c[n].title || null,
                    latitude: c[n].location && c[n].location.lat || null,
                    longitude: c[n].location && c[n].location.lng || null,
                    address: c[n].address || null,
                    category: c[n].category || null,
                    adcode: c[n].ad_info && c[n].ad_info.adcode || null,
                    city: c[n].ad_info && c[n].ad_info.city || null,
                    district: c[n].ad_info && c[n].ad_info.district || null,
                    province: c[n].ad_info && c[n].ad_info.province || null
                });
                t.success(e, {
                    reverseGeocoderResult: l,
                    reverseGeocoderSimplify: d,
                    pois: c,
                    poisSimplify: u
                });
            } else t.success(e, {
                reverseGeocoderResult: l,
                reverseGeocoderSimplify: d
            });
        } else if ("geocoder" == i) {
            var g = e.result, f = {
                title: g.title || null,
                latitude: g.location && g.location.lat || null,
                longitude: g.location && g.location.lng || null,
                adcode: g.ad_info && g.ad_info.adcode || null,
                province: g.address_components && g.address_components.province || null,
                city: g.address_components && g.address_components.city || null,
                district: g.address_components && g.address_components.district || null,
                street: g.address_components && g.address_components.street || null,
                street_number: g.address_components && g.address_components.street_number || null,
                level: g.level || null
            };
            t.success(e, {
                geocoderResult: g,
                geocoderSimplify: f
            });
        } else if ("getCityList" == i) {
            var h = e.result[0], m = e.result[1], p = e.result[2];
            t.success(e, {
                provinceResult: h,
                cityResult: m,
                districtResult: p
            });
        } else if ("getDistrictByCityId" == i) {
            var y = e.result[0];
            t.success(e, y);
        } else if ("calculateDistance" == i) {
            for (var _ = e.result.elements, v = [], n = 0; n < _.length; n++) v.push(_[n].distance);
            t.success(e, {
                calculateDistanceResult: _,
                distance: v
            });
        } else if ("direction" == i) {
            var R = e.result.routes;
            t.success(e, R);
        } else t.success(e);
    },
    buildWxRequestConfig: function(t, e, s) {
        var o = this;
        return e.header = {
            "content-type": "application/json"
        }, e.method = "GET", e.success = function(e) {
            var i = e.data;
            0 === i.status ? o.handleData(t, i, s) : t.fail(i);
        }, e.fail = function(e) {
            e.statusCode = i.WX_ERR_CODE, t.fail(o.buildErrorConfig(i.WX_ERR_CODE, e.errMsg));
        }, e.complete = function(e) {
            switch (+e.statusCode) {
              case i.WX_ERR_CODE:
                t.complete(o.buildErrorConfig(i.WX_ERR_CODE, e.errMsg));
                break;

              case i.WX_OK_CODE:
                var s = e.data;
                0 === s.status ? t.complete(s) : t.complete(o.buildErrorConfig(s.status, s.message));
                break;

              default:
                t.complete(o.buildErrorConfig(i.SYSTEM_ERR, i.SYSTEM_ERR_MSG));
            }
        }, e;
    },
    locationProcess: function(t, e, s, o) {
        var n = this;
        s = s || function(e) {
            e.statusCode = i.WX_ERR_CODE, t.fail(n.buildErrorConfig(i.WX_ERR_CODE, e.errMsg));
        }, o = o || function(e) {
            e.statusCode == i.WX_ERR_CODE && t.complete(n.buildErrorConfig(i.WX_ERR_CODE, e.errMsg));
        }, t.location ? n.checkLocation(t) && e(r.getLocationParam(t.location)) : n.getWXLocation(e, s, o);
    }
}, a = function() {
    function i(e) {
        if (t(this, i), !e.key) throw Error("key值不能为空");
        this.key = e.key;
    }
    return e(i, [ {
        key: "search",
        value: function(t) {
            var e = this;
            if (t = t || {}, r.polyfillParam(t), r.checkKeyword(t)) {
                var i = {
                    keyword: t.keyword,
                    orderby: t.orderby || "_distance",
                    page_size: t.page_size || 10,
                    page_index: t.page_index || 1,
                    output: "json",
                    key: e.key
                };
                t.address_format && (i.address_format = t.address_format), t.filter && (i.filter = t.filter);
                var s = t.distance || "1000", o = t.auto_extend || 1, n = null, a = null;
                t.region && (n = t.region), t.rectangle && (a = t.rectangle);
                r.locationProcess(t, function(e) {
                    n && !a ? (i.boundary = "region(" + n + "," + o + "," + e.latitude + "," + e.longitude + ")", 
                    t.sig && (i.sig = r.getSig(i, t.sig, "search"))) : a && !n ? (i.boundary = "rectangle(" + a + ")", 
                    t.sig && (i.sig = r.getSig(i, t.sig, "search"))) : (i.boundary = "nearby(" + e.latitude + "," + e.longitude + "," + s + "," + o + ")", 
                    t.sig && (i.sig = r.getSig(i, t.sig, "search"))), wx.request(r.buildWxRequestConfig(t, {
                        url: "https://apis.map.qq.com/ws/place/v1/search",
                        data: i
                    }, "search"));
                });
            }
        }
    }, {
        key: "getSuggestion",
        value: function(t) {
            var e = this;
            if (t = t || {}, r.polyfillParam(t), r.checkKeyword(t)) {
                var i = {
                    keyword: t.keyword,
                    region: t.region || "全国",
                    region_fix: t.region_fix || 0,
                    policy: t.policy || 0,
                    page_size: t.page_size || 10,
                    page_index: t.page_index || 1,
                    get_subpois: t.get_subpois || 0,
                    output: "json",
                    key: e.key
                };
                if (t.address_format && (i.address_format = t.address_format), t.filter && (i.filter = t.filter), 
                t.location) {
                    r.locationProcess(t, function(e) {
                        i.location = e.latitude + "," + e.longitude, t.sig && (i.sig = r.getSig(i, t.sig, "suggest")), 
                        wx.request(r.buildWxRequestConfig(t, {
                            url: o,
                            data: i
                        }, "suggest"));
                    });
                } else t.sig && (i.sig = r.getSig(i, t.sig, "suggest")), wx.request(r.buildWxRequestConfig(t, {
                    url: o,
                    data: i
                }, "suggest"));
            }
        }
    }, {
        key: "reverseGeocoder",
        value: function(t) {
            var e = this;
            t = t || {}, r.polyfillParam(t);
            var i = {
                coord_type: t.coord_type || 5,
                get_poi: t.get_poi || 0,
                output: "json",
                key: e.key
            };
            t.poi_options && (i.poi_options = t.poi_options);
            r.locationProcess(t, function(e) {
                i.location = e.latitude + "," + e.longitude, t.sig && (i.sig = r.getSig(i, t.sig, "reverseGeocoder")), 
                wx.request(r.buildWxRequestConfig(t, {
                    url: "https://apis.map.qq.com/ws/geocoder/v1/",
                    data: i
                }, "reverseGeocoder"));
            });
        }
    }, {
        key: "geocoder",
        value: function(t) {
            var e = this;
            if (t = t || {}, r.polyfillParam(t), !r.checkParamKeyEmpty(t, "address")) {
                var i = {
                    address: t.address,
                    output: "json",
                    key: e.key
                };
                t.region && (i.region = t.region), t.sig && (i.sig = r.getSig(i, t.sig, "geocoder")), 
                wx.request(r.buildWxRequestConfig(t, {
                    url: "https://apis.map.qq.com/ws/geocoder/v1/",
                    data: i
                }, "geocoder"));
            }
        }
    }, {
        key: "getCityList",
        value: function(t) {
            var e = this;
            t = t || {}, r.polyfillParam(t);
            var i = {
                output: "json",
                key: e.key
            };
            t.sig && (i.sig = r.getSig(i, t.sig, "getCityList")), wx.request(r.buildWxRequestConfig(t, {
                url: "https://apis.map.qq.com/ws/district/v1/list",
                data: i
            }, "getCityList"));
        }
    }, {
        key: "getDistrictByCityId",
        value: function(t) {
            var e = this;
            if (t = t || {}, r.polyfillParam(t), !r.checkParamKeyEmpty(t, "id")) {
                var i = {
                    id: t.id || "",
                    output: "json",
                    key: e.key
                };
                t.sig && (i.sig = r.getSig(i, t.sig, "getDistrictByCityId")), wx.request(r.buildWxRequestConfig(t, {
                    url: "https://apis.map.qq.com/ws/district/v1/getchildren",
                    data: i
                }, "getDistrictByCityId"));
            }
        }
    }, {
        key: "calculateDistance",
        value: function(t) {
            var e = this;
            if (t = t || {}, r.polyfillParam(t), !r.checkParamKeyEmpty(t, "to")) {
                var i = {
                    mode: t.mode || "walking",
                    to: r.location2query(t.to),
                    output: "json",
                    key: e.key
                };
                if (t.from && (t.location = t.from), "straight" == i.mode) {
                    s = function(e) {
                        for (var s = r.getEndLocation(i.to), o = {
                            message: "query ok",
                            result: {
                                elements: []
                            },
                            status: 0
                        }, n = 0; n < s.length; n++) o.result.elements.push({
                            distance: r.getDistance(e.latitude, e.longitude, s[n].lat, s[n].lng),
                            duration: 0,
                            from: {
                                lat: e.latitude,
                                lng: e.longitude
                            },
                            to: {
                                lat: s[n].lat,
                                lng: s[n].lng
                            }
                        });
                        for (var a = o.result.elements, l = [], n = 0; n < a.length; n++) l.push(a[n].distance);
                        return t.success(o, {
                            calculateResult: a,
                            distanceResult: l
                        });
                    };
                    r.locationProcess(t, s);
                } else {
                    var s = function(e) {
                        i.from = e.latitude + "," + e.longitude, t.sig && (i.sig = r.getSig(i, t.sig, "calculateDistance")), 
                        wx.request(r.buildWxRequestConfig(t, {
                            url: "https://apis.map.qq.com/ws/distance/v1/",
                            data: i
                        }, "calculateDistance"));
                    };
                    r.locationProcess(t, s);
                }
            }
        }
    }, {
        key: "direction",
        value: function(t) {
            var e = this;
            if (t = t || {}, r.polyfillParam(t), !r.checkParamKeyEmpty(t, "to")) {
                var i = {
                    output: "json",
                    key: e.key
                };
                "string" == typeof t.to ? i.to = t.to : i.to = t.to.latitude + "," + t.to.longitude;
                var s = null;
                t.mode = t.mode || n.driving, s = "https://apis.map.qq.com/ws/direction/v1/" + t.mode, 
                t.from && (t.location = t.from), t.mode == n.driving && (t.from_poi && (i.from_poi = t.from_poi), 
                t.heading && (i.heading = t.heading), t.speed && (i.speed = t.speed), t.accuracy && (i.accuracy = t.accuracy), 
                t.road_type && (i.road_type = t.road_type), t.to_poi && (i.to_poi = t.to_poi), t.from_track && (i.from_track = t.from_track), 
                t.waypoints && (i.waypoints = t.waypoints), t.policy && (i.policy = t.policy), t.plate_number && (i.plate_number = t.plate_number)), 
                t.mode == n.transit && (t.departure_time && (i.departure_time = t.departure_time), 
                t.policy && (i.policy = t.policy));
                r.locationProcess(t, function(e) {
                    i.from = e.latitude + "," + e.longitude, t.sig && (i.sig = r.getSig(i, t.sig, "direction", t.mode)), 
                    wx.request(r.buildWxRequestConfig(t, {
                        url: s,
                        data: i
                    }, "direction"));
                });
            }
        }
    } ]), i;
}();

module.exports = a;