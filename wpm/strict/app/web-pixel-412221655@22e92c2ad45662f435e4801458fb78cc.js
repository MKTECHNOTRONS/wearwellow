(() => {
    var a = "WebPixel::Render";
    var i = n => shopify.extend(a, n);
    i(n => {
        let l = n.analytics,
            c = n.settings,
            r = "ttq";
        self.TiktokAnalyticsObject = r;
        let t = self[r] = self[r] || [];
        t._sapi = n, self._sapi = n, t.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie", "holdConsent", "revokeConsent", "grantConsent"], t.setAndDefer = function(e, o) {
            e[o] = function() {
                e.push([o].concat(Array.prototype.slice.call(arguments, 0)))
            }
        };
        for (let e = 0; e < t.methods.length; e++) t.setAndDefer(t, t.methods[e]);
        t.instance = function(e) {
            let o = t._i[e] || [];
            for (let s = 0; s < t.methods.length; s++) t.setAndDefer(o, t.methods[s]);
            return o
        }, t.load = function(e, o) {
            let s = "https://analytics.tiktok.com/i18n/pixel/shopify.js",
                p = o && o.partner;
            t._i = t._i || {}, t._i[e] = [], t._i[e]._u = s, t._i[e]._partner = p || "Shopify", t._t = t._t || {}, t._t[e] = +new Date, t._o = t._o || {}, t._o[e] = o || {}, t._partner = t._partner || "Shopify", self.importScripts(s + "?sdkid=" + e + "&lib=" + r)
        }, t.load(c.pixelCode), l.subscribe("all_standard_events", e => {
            t.track(e.name, e)
        })
    });
})();