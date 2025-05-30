(() => {
    var P = Object.create;
    var h = Object.defineProperty;
    var x = Object.getOwnPropertyDescriptor;
    var T = Object.getOwnPropertyNames;
    var D = Object.getPrototypeOf,
        w = Object.prototype.hasOwnProperty;
    var c = (e, t) => () => (e && (t = e(e = 0)), t);
    var I = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t), t.exports);
    var N = (e, t, n, r) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let s of T(t)) !w.call(e, s) && s !== n && h(e, s, {
                get: () => t[s],
                enumerable: !(r = x(t, s)) || r.enumerable
            });
        return e
    };
    var C = (e, t, n) => (n = e != null ? P(D(e)) : {}, N(t || !e || !e.__esModule ? h(n, "default", {
        value: e,
        enumerable: !0
    }) : n, e));
    var d = (e, t, n) => new Promise((r, s) => {
        var p = o => {
                try {
                    i(n.next(o))
                } catch (a) {
                    s(a)
                }
            },
            y = o => {
                try {
                    i(n.throw(o))
                } catch (a) {
                    s(a)
                }
            },
            i = o => o.done ? r(o.value) : Promise.resolve(o.value).then(p, y);
        i((n = n.apply(e, t)).next())
    });
    var g, l = c(() => {
        g = "WebPixel::Render"
    });
    var u, k = c(() => {
        l();
        u = e => shopify.extend(g, e)
    });
    var m = c(() => {
        k()
    });
    var v = c(() => {
        m()
    });
    var E = I(_ => {
        "use strict";
        v();
        var O = "https://api.dttrk.com/api/shopify/visit";
        u(({
            analytics: e,
            browser: t,
            settings: n
        }) => {
            if (!n) return;
            let r = n.myshopifyDomain;
            e.subscribe("page_viewed", i => d(_, null, function*() {
                let o = i.context.window.location.href,
                    a = p(o);
                if (!a) return;
                yield y(a);
                let f = i.clientId || (yield t.cookie.get("_shopify_y"));
                yield s({
                    event: "visit",
                    shop: r,
                    dt_id: a,
                    shopify_uuid: f,
                    shopify_event_id: i.id,
                    page_url: o
                })
            })), e.subscribe("checkout_completed", i => d(_, null, function*() {
                let o = yield t.cookie.get("dt_id");
                if (o === "") return;
                let a = i.clientId || (yield t.cookie.get("_shopify_y"));
                yield s({
                    event: "checkout",
                    shop: r,
                    dt_id: o,
                    shopify_uuid: a,
                    shopify_event_id: i.id,
                    page_url: i.context.window.location.href,
                    checkout_token: i.data.checkout.token
                })
            }));

            function s(i) {
                return d(this, null, function*() {
                    return t.sendBeacon(O, JSON.stringify(i))
                })
            }

            function p(i) {
                return new URL(i).searchParams.get("dt_id")
            }

            function y(i) {
                let o = new Date,
                    a = new Date;
                a.setTime(o.getTime() + 90 * 24 * 60 * 60 * 1e3);
                let f = `dt_id=${i}; expires=${a.toUTCString()};`;
                return t.cookie.set(f)
            }
        })
    });
    var K = C(E());
})();