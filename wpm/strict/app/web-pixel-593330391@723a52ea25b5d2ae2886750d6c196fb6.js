(() => {
    var oe = Object.create;
    var V = Object.defineProperty;
    var te = Object.getOwnPropertyDescriptor;
    var re = Object.getOwnPropertyNames;
    var ie = Object.getPrototypeOf,
        ne = Object.prototype.hasOwnProperty;
    var d = (o, e) => () => (o && (e = o(o = 0)), e);
    var ae = (o, e) => () => (e || o((e = {
        exports: {}
    }).exports, e), e.exports);
    var se = (o, e, t, r) => {
        if (e && typeof e == "object" || typeof e == "function")
            for (let i of re(e)) !ne.call(o, i) && i !== t && V(o, i, {
                get: () => e[i],
                enumerable: !(r = te(e, i)) || r.enumerable
            });
        return o
    };
    var ce = (o, e, t) => (t = o != null ? oe(ie(o)) : {}, se(e || !o || !o.__esModule ? V(t, "default", {
        value: o,
        enumerable: !0
    }) : t, o));
    var c = (o, e, t) => new Promise((r, i) => {
        var a = s => {
                try {
                    u(t.next(s))
                } catch (l) {
                    i(l)
                }
            },
            n = s => {
                try {
                    u(t.throw(s))
                } catch (l) {
                    i(l)
                }
            },
            u = s => s.done ? r(s.value) : Promise.resolve(s.value).then(a, n);
        u((t = t.apply(o, e)).next())
    });
    var R, b = d(() => {
        R = "WebPixel::Render"
    });
    var k, v = d(() => {
        b();
        k = o => shopify.extend(R, o)
    });
    var U = d(() => {
        v()
    });
    var M = d(() => {
        U()
    });
    var g, D, B = d(() => {
        "use strict";
        g = class o {
            constructor() {}
            static calculateAmount(e) {
                let t = 0;
                var r = this.getPreparedItemDetails(e.lineItems);
                for (let i of r) t += i.itemNetPrice * i.quantity;
                return o.roundToFixedCommercially(t).toFixed(2)
            }
            static roundToFixedCommercially(e) {
                return Math.round(e * 100) / 100
            }
            static getPreparedItemDetails(e) {
                if (!e) return [];
                for (var t = [], r = 0; r < e.length; r++) {
                    var i = Number(e[r].variant.price.amount),
                        a = i * e[r].quantity;
                    if (e[r].discountAllocations && e[r].discountAllocations.length > 0) {
                        for (var n = 0, u = 0; u < e[r].discountAllocations.length; u++) n += Number(e[r].discountAllocations[u].amount.amount);
                        a -= n, i -= n / e[r].quantity
                    }
                    t.push({
                        productId: e[r].variant.product.id,
                        title: e[r].variant.product.title,
                        itemNetPrice: o.roundToFixedCommercially(i),
                        lineNetPrice: o.roundToFixedCommercially(a),
                        quantity: e[r].quantity,
                        sku: e[r].variant.sku
                    })
                }
                return t
            }
        }, D = g
    });
    var ue, P, q, F = d(() => {
        "use strict";
        ue = "DISCOUNT_CODE", P = class {
            constructor() {}
            static getVoucherFromCheckout(e) {
                if (e.discountApplications && e.discountApplications.length > 0) {
                    for (let t of e.discountApplications)
                        if (t.type === ue && t.title) return t.title
                }
                return ""
            }
        }, q = P
    });
    var $ = d(() => {
        "use strict"
    });
    var m, E = d(() => {
        "use strict";
        m = class {
            constructor(e) {
                this.browser = e
            }
            refreshCookies(i, a) {
                return c(this, arguments, function*(e, t, r = new Date) {
                    let u = (yield this.browser.cookie.get()).split("; ");
                    for (let s of u) {
                        let l = s.split("=")[0];
                        t.some(h => l.startsWith(h)) && (yield this.refreshCookie(l, e, r))
                    }
                })
            }
            getAllAwcCookieValues(e) {
                return c(this, null, function*() {
                    let t = yield this.browser.cookie.get();
                    if (!t) return "";
                    let r = t.split("; "),
                        i = [];
                    return e.forEach(a => {
                        i = i.concat(r.filter(n => n.startsWith(a)))
                    }), i.map(a => a.split("=")[1]).join(",")
                })
            }
            getCookieValue(e) {
                return c(this, null, function*() {
                    return yield this.browser.cookie.get(e)
                })
            }
            setCookie(a, n, u) {
                return c(this, arguments, function*(e, t, r, i = new Date) {
                    let s = new Date;
                    s.setTime(i.getTime() + 365 * 24 * 60 * 60 * 1e3);
                    let l = t + `;expires=${s.toUTCString()};path=/;domain=${r}`;
                    l && (yield this.browser.cookie.set(e, l))
                })
            }
            refreshCookie(i, a) {
                return c(this, arguments, function*(e, t, r = new Date) {
                    let n = yield this.getCookieValue(e);
                    n && (yield this.setCookie(e, n, t, r))
                })
            }
        }
    });
    var L = d(() => {
        "use strict"
    });
    var f, W, p, G = d(() => {
        "use strict";
        E();
        L();
        f = "_aw_ca", W = "returning=1", p = class o {
            static setCookie(e, t) {
                return c(this, null, function*() {
                    let r = new Date;
                    yield new m(e).setCookie(f, W, t, r)
                })
            }
            static isCookieSet(e) {
                return c(this, null, function*() {
                    return (yield new m(e).getCookieValue(f)) === W
                })
            }
            static getCustomerAcquisition(e, t, r) {
                return c(this, null, function*() {
                    var i, a;
                    try {
                        return (r == null ? void 0 : r.isFirstOrder) != null ? r.isFirstOrder ? "NEW" : "RETURNING" : (yield o.isCookieSet(e)) ? "RETURNING" : ((a = (i = t.data) == null ? void 0 : i.customer) == null ? void 0 : a.ordersCount) != null ? t.data.customer.ordersCount === 0 ? "NEW" : t.data.customer.ordersCount > 0 ? "RETURNING" : "" : ""
                    } catch (n) {
                        return ""
                    }
                })
            }
        }
    });

    function Q(o, e, t) {
        return c(this, null, function*() {
            let r = new m(e),
                i = K(o.context.document.location.search, "awc");
            if (i) {
                let n = i.split("_");
                if (n.length === 3) {
                    let u = `${x}${n[0]}`;
                    yield r.setCookie(u, i, o.context.document.location.hostname, t)
                }
            } else yield r.refreshCookies(o.context.document.location.hostname, [x, Y], t);
            let a = K(o.context.document.location.search, "source");
            if (a) {
                let n = `${a}|${(t.getTime()+31536e6)/1e3|0}`;
                yield r.setCookie(w, n, o.context.document.location.hostname, t)
            } else yield r.refreshCookie(w, o.context.document.location.hostname, t);
            yield r.refreshCookie(f, o.context.document.location.hostname, t)
        })
    }

    function X(o, e, t, r) {
        return c(this, null, function*() {
            var i, a, n, u;
            try {
                let s = (n = (a = (i = o.context) == null ? void 0 : i.document) == null ? void 0 : a.location) == null ? void 0 : n.hostname,
                    l = we(o);
                ((u = l.data.checkout.order) == null ? void 0 : u.id) !== void 0 ? yield pe(l, t, e, r): console.warn("checkout-event", "order.id is undefined"), yield p.setCookie(t, s), yield fe(t, l, e, r)
            } catch (s) {}
        })
    }

    function pe(o, e, t, r) {
        return c(this, null, function*() {
            let i = yield he(o, e, t, r), a = `${le}?${new URLSearchParams(i)}`;
            if (yield fetch(a, {
                    method: "POST",
                    keepalive: !0,
                    credentials: "include"
                }), t.originalNetwork === "sas") {
                let n = `${de}?${new URLSearchParams(i)}`;
                yield fetch(n, {
                    method: "POST",
                    keepalive: !0,
                    credentials: "include"
                })
            }
        })
    }

    function he(o, e, t, r) {
        return c(this, null, function*() {
            var S, y, T, N, _, O, I;
            let i = new m(e),
                n = ((S = yield i.getCookieValue(w)) != null ? S : "").split("|")[0],
                u = (yield i.getAllAwcCookieValues([x, Y])) || "",
                s = o.data.checkout,
                l = (T = (y = s.order) == null ? void 0 : y.id) != null ? T : "";
            l.match(/[^0-9]/) && (l = l.replace(/[^0-9]/g, ""));
            let h = D.calculateAmount(s),
                z = (_ = (N = s.subtotalPrice) == null ? void 0 : N.currencyCode) != null ? _ : "",
                Z = q.getVoucherFromCheckout(s),
                ee = yield p.getCustomerAcquisition(e, r, (I = (O = s.order) == null ? void 0 : O.customer) != null ? I : void 0), A = {
                    tt: "ns",
                    tv: "2",
                    ch: n,
                    cks: u,
                    merchant: t.advertiserId.toString(),
                    amount: h,
                    parts: `DEFAULT:${h}`,
                    ref: l,
                    vc: Z,
                    cr: z,
                    customeracquisition: ee,
                    p1: t.appVersion.toString(),
                    p2: l,
                    p3: "px",
                    cons: "1"
                };
            return typeof t.customTransactionTag != "undefined" && t.customTransactionTag !== null && (A.p6 = t.customTransactionTag.toString()), A
        })
    }

    function fe(o, e, t, r) {
        return c(this, null, function*() {
            var n, u;
            e.data.advertiserId = t == null ? void 0 : t.advertiserId, e.data.shopDomain = t == null ? void 0 : t.shopDomain, e.data.appVersion = t == null ? void 0 : t.appVersion, e.data.pixelVersion = t.appVersion.toString(), e.data.customeracquisition = yield p.getCustomerAcquisition(o, r, (u = (n = e.data.checkout.order) == null ? void 0 : n.customer) != null ? u : void 0);
            let a = yield new m(o).getCookieValue(w);
            e.data.sourceChannel = a, yield Ce(JSON.stringify(e))
        })
    }

    function j(o) {
        return !(!o || !o.advertiserId || !o.appVersion || !o.shopDomain)
    }

    function we(o) {
        if (o.context && delete o.context, o.data && o.data.checkout) {
            let e = o.data.checkout;
            e.billingAddress = null, e.phone = null, e.email = null, e.shippingAddress = null
        }
        return o
    }

    function Ce(o) {
        return c(this, null, function*() {
            yield fetch(me, {
                method: "POST",
                keepalive: !0,
                headers: {
                    "Content-Type": "application/json"
                },
                body: o
            })
        })
    }

    function K(o, e) {
        return new URLSearchParams(o).get(e) || void 0
    }
    var w, x, Y, le, de, me, H = d(() => {
        "use strict";
        B();
        F();
        $();
        G();
        E();
        w = "_aw_channel", x = "_awc_", Y = "_aw_m_", le = "https://www.awin1.com/sread.img", de = "https://www.shareasale.com/sread.php", me = "https://www.wepowerconnections.com/dbg"
    });
    var J = ae(C => {
        "use strict";
        M();
        H();
        k(o => c(C, null, function*() {
            if (j(o.settings)) o.analytics.subscribe("page_viewed", e => c(C, null, function*() {
                let t = new Date;
                yield Q(e, o.browser, t)
            })), o.analytics.subscribe("checkout_completed", e => c(C, null, function*() {
                yield X(e, o.settings, o.browser, o.init)
            }));
            else return
        }))
    });
    var He = ce(J());
})();