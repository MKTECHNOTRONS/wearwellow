(() => {
    var se = Object.create;
    var P = Object.defineProperty,
        fe = Object.defineProperties,
        me = Object.getOwnPropertyDescriptor,
        ue = Object.getOwnPropertyDescriptors,
        le = Object.getOwnPropertyNames,
        D = Object.getOwnPropertySymbols,
        ce = Object.getPrototypeOf,
        B = Object.prototype.hasOwnProperty,
        pe = Object.prototype.propertyIsEnumerable;
    var R = (e, t, r) => t in e ? P(e, t, {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: r
        }) : e[t] = r,
        v = (e, t) => {
            for (var r in t || (t = {})) B.call(t, r) && R(e, r, t[r]);
            if (D)
                for (var r of D(t)) pe.call(t, r) && R(e, r, t[r]);
            return e
        },
        h = (e, t) => fe(e, ue(t));
    var m = (e, t) => () => (e && (t = e(e = 0)), t);
    var xe = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var ge = (e, t, r, o) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let n of le(t)) !B.call(e, n) && n !== r && P(e, n, {
                get: () => t[n],
                enumerable: !(o = me(t, n)) || o.enumerable
            });
        return e
    };
    var ve = (e, t, r) => (r = e != null ? se(ce(e)) : {}, ge(t || !e || !e.__esModule ? P(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e));
    var p = (e, t, r) => new Promise((o, n) => {
        var d = a => {
                try {
                    s(r.next(a))
                } catch (i) {
                    n(i)
                }
            },
            u = a => {
                try {
                    s(r.throw(a))
                } catch (i) {
                    n(i)
                }
            },
            s = a => a.done ? o(a.value) : Promise.resolve(a.value).then(d, u);
        s((r = r.apply(e, t)).next())
    });
    var F, V = m(() => {
        F = "WebPixel::Render"
    });
    var C, N = m(() => {
        V();
        C = e => shopify.extend(F, e)
    });
    var L = m(() => {
        N()
    });
    var H = m(() => {
        L()
    });
    var b, Oe, O, he, x, Me, c, je, _e, ye, j, Ee, Pe, Ce, be, M, q, z = m(() => {
        b = typeof Buffer == "function", Oe = typeof TextDecoder == "function" ? new TextDecoder : void 0, O = typeof TextEncoder == "function" ? new TextEncoder : void 0, he = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", x = Array.prototype.slice.call(he), Me = (e => {
            let t = {};
            return e.forEach((r, o) => t[r] = o), t
        })(x), c = String.fromCharCode.bind(String), je = typeof Uint8Array.from == "function" ? Uint8Array.from.bind(Uint8Array) : e => new Uint8Array(Array.prototype.slice.call(e, 0)), _e = e => e.replace(/=/g, "").replace(/[+\/]/g, t => t == "+" ? "-" : "_"), ye = e => {
            let t, r, o, n, d = "",
                u = e.length % 3;
            for (let s = 0; s < e.length;) {
                if ((r = e.charCodeAt(s++)) > 255 || (o = e.charCodeAt(s++)) > 255 || (n = e.charCodeAt(s++)) > 255) throw new TypeError("invalid character found");
                t = r << 16 | o << 8 | n, d += x[t >> 18 & 63] + x[t >> 12 & 63] + x[t >> 6 & 63] + x[t & 63]
            }
            return u ? d.slice(0, u - 3) + "===".substring(u) : d
        }, j = typeof btoa == "function" ? e => btoa(e) : b ? e => Buffer.from(e, "binary").toString("base64") : ye, Ee = b ? e => Buffer.from(e).toString("base64") : e => {
            let r = [];
            for (let o = 0, n = e.length; o < n; o += 4096) r.push(c.apply(null, e.subarray(o, o + 4096)));
            return j(r.join(""))
        }, Pe = e => {
            if (e.length < 2) {
                var t = e.charCodeAt(0);
                return t < 128 ? e : t < 2048 ? c(192 | t >>> 6) + c(128 | t & 63) : c(224 | t >>> 12 & 15) + c(128 | t >>> 6 & 63) + c(128 | t & 63)
            } else {
                var t = 65536 + (e.charCodeAt(0) - 55296) * 1024 + (e.charCodeAt(1) - 56320);
                return c(240 | t >>> 18 & 7) + c(128 | t >>> 12 & 63) + c(128 | t >>> 6 & 63) + c(128 | t & 63)
            }
        }, Ce = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g, be = e => e.replace(Ce, Pe), M = b ? e => Buffer.from(e, "utf8").toString("base64") : O ? e => Ee(O.encode(e)) : e => j(be(e)), q = (e, t = !1) => t ? _e(M(e)) : M(e)
    });

    function Z(e, t) {
        return p(this, null, function*() {
            let r = q(JSON.stringify(e), !0);
            fetch(`${we}/t?event=${r}`, {
                mode: "no-cors"
            })
        })
    }
    var we, X = m(() => {
        "use strict";
        z();
        we = "https://d1ce7ar9ygqaw4.cloudfront.net"
    });

    function y(e, t = 0) {
        return (f[e[t + 0]] + f[e[t + 1]] + f[e[t + 2]] + f[e[t + 3]] + "-" + f[e[t + 4]] + f[e[t + 5]] + "-" + f[e[t + 6]] + f[e[t + 7]] + "-" + f[e[t + 8]] + f[e[t + 9]] + "-" + f[e[t + 10]] + f[e[t + 11]] + f[e[t + 12]] + f[e[t + 13]] + f[e[t + 14]] + f[e[t + 15]]).toLowerCase()
    }
    var f, _, w = m(() => {
        f = [];
        for (_ = 0; _ < 256; ++_) f.push((_ + 256).toString(16).slice(1))
    });

    function g() {
        if (!E && (E = typeof crypto != "undefined" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !E)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return E(Ae)
    }
    var E, Ae, A = m(() => {
        Ae = new Uint8Array(16)
    });
    var ke, k, G = m(() => {
        ke = typeof crypto != "undefined" && crypto.randomUUID && crypto.randomUUID.bind(crypto), k = {
            randomUUID: ke
        }
    });

    function Ue(e, t, r) {
        if (k.randomUUID && !t && !e) return k.randomUUID();
        e = e || {};
        var o = e.random || (e.rng || g)();
        if (o[6] = o[6] & 15 | 64, o[8] = o[8] & 63 | 128, t) {
            r = r || 0;
            for (var n = 0; n < 16; ++n) t[r + n] = o[n];
            return t
        }
        return y(o)
    }
    var U, $ = m(() => {
        G();
        A();
        w();
        U = Ue
    });

    function Se(e, t, r) {
        e = e || {};
        var o = t && r || 0,
            n = t || new Uint8Array(16),
            d = e.random || (e.rng || g)(),
            u = e.msecs !== void 0 ? e.msecs : Date.now(),
            s = e.seq !== void 0 ? e.seq : null,
            a = J,
            i = W;
        return u > l && e.msecs === void 0 && (l = u, s !== null && (a = null, i = null)), s !== null && (s > 2147483647 && (s = 2147483647), a = s >>> 19 & 4095, i = s & 524287), (a === null || i === null) && (a = d[6] & 127, a = a << 8 | d[7], i = d[8] & 63, i = i << 8 | d[9], i = i << 5 | d[10] >>> 3), u + 1e4 > l && s === null ? ++i > 524287 && (i = 0, ++a > 4095 && (a = 0, l++)) : l = u, J = a, W = i, n[o++] = l / 1099511627776 & 255, n[o++] = l / 4294967296 & 255, n[o++] = l / 16777216 & 255, n[o++] = l / 65536 & 255, n[o++] = l / 256 & 255, n[o++] = l & 255, n[o++] = a >>> 4 & 15 | 112, n[o++] = a & 255, n[o++] = i >>> 13 & 63 | 128, n[o++] = i >>> 5 & 255, n[o++] = i << 3 & 255 | d[10] & 7, n[o++] = d[11], n[o++] = d[12], n[o++] = d[13], n[o++] = d[14], n[o++] = d[15], t || y(n)
    }
    var W, J, l, S, Y = m(() => {
        A();
        w();
        W = null, J = null, l = 0;
        S = Se
    });
    var I = m(() => {
        $();
        Y()
    });
    var Ie, K, Q, T = m(() => {
        "use strict";
        X();
        I();
        Ie = "gid://partners/App/2436932", K = e => Object.fromEntries(Object.entries(e).filter(([t, r]) => r != null)), Q = (e, t) => {
            Object.keys(e).forEach(r => {
                t.api.analytics.subscribe(r, o => {
                    let n = e[r];
                    if (!n) return;
                    let d = s => p(void 0, null, function*() {
                        var a, i;
                        Z(h(v({}, s), {
                            shopDomain: t.shopDomain,
                            suid: o.clientId,
                            scid: (a = yield t.api.browser.localStorage.getItem("AMP_T_CUSTOMER_ID")) != null ? a : "",
                            auid: (i = yield t.api.browser.localStorage.getItem("AMP_T_FINGERPRINT")) != null ? i : "",
                            eventid: S(),
                            appid: Ie
                        }), t.api)
                    });
                    if (Array.isArray(n)) {
                        n.forEach(s => {
                            let a = s(o);
                            a && d(a)
                        });
                        return
                    }
                    let u = n(o);
                    u && d(u)
                })
            })
        }
    });

    function Te(e) {
        let t = {
            utm_source: e.get("utm_source"),
            utm_medium: e.get("utm_medium"),
            utm_campaign: e.get("utm_campaign"),
            utm_term: e.get("utm_term"),
            utm_content: e.get("utm_content"),
            utm_id: e.get("utm_id"),
            gclid: e.get("gclid"),
            fbclid: e.get("fbclid"),
            msclkid: e.get("msclkid"),
            campaign_id: e.get("campaign_id")
        };
        return K(t)
    }

    function ee(e) {
        let t = new URLSearchParams(e.context.document.location.search),
            r = Te(t);
        if (Object.keys(r).length !== 0) return {
            event: "marketing_link_followed",
            time: e.timestamp,
            data: h(v({}, r), {
                referrer: e.context.document.referrer
            })
        }
    }
    var te = m(() => {
        "use strict";
        T()
    });

    function re(e) {
        return {
            event: e.name,
            time: e.timestamp,
            data: {
                pathname: e.context.document.location.pathname
            }
        }
    }
    var oe = m(() => {
        "use strict"
    });

    function ne(e) {
        var t, r, o;
        return {
            event: e.name,
            time: e.timestamp,
            data: {
                token: e.data.checkout.token,
                totalPrice: {
                    amount: e.data.checkout.totalPrice.amount,
                    currencyCode: e.data.checkout.totalPrice.currencyCode
                },
                orderId: (r = (t = e.data.checkout.order) == null ? void 0 : t.id) != null ? r : "",
                email: (o = e.data.checkout.email) != null ? o : ""
            }
        }
    }
    var ae = m(() => {
        "use strict"
    });
    var de = xe(ie => {
        "use strict";
        H();
        te();
        oe();
        ae();
        I();
        T();
        C(e => p(ie, null, function*() {
            var r;
            let t = e.settings.shopDomain;
            (r = e.init.data.customer) != null && r.email && (yield e.browser.localStorage.setItem("AMP_T_CUSTOMER_ID", e.init.data.customer.id)), (yield e.browser.localStorage.getItem("AMP_T_FINGERPRINT")) || (yield e.browser.localStorage.setItem("AMP_T_FINGERPRINT", U())), Q({
                page_viewed: [re, ee],
                checkout_completed: ne
            }, {
                shopDomain: t,
                api: e
            })
        }))
    });
    var bt = ve(de());
})();