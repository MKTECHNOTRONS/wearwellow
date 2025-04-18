(function(shopify) {
    (() => {
        var B = "WebPixel::Render";
        var w = o => shopify.extend(B, o);
        var K = "https://connect.facebook.net/en_US/fbevents.js",
            G = ["default", "title", "default title", ""];

        function J() {
            window.fbq && typeof window.fbq == "function" || (window.fbq = function() {
                window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments)
            }, window._fbq || (window._fbq = window.fbq), window.fbq.push = window.fbq, window.fbq.loaded = !0, window.fbq.version = "2.0", window.fbq.queue = [])
        }

        function M() {
            let o = document.createElement("script");
            return o.setAttribute("async", "true"), o.setAttribute("src", K), o
        }

        function Q() {
            var _;
            let o = document.getElementsByTagName("script")[0];
            o === void 0 ? document.head.appendChild(M()) : (_ = o.parentNode) == null || _.insertBefore(M(), o)
        }
        J();
        Q();
        w(({
            analytics: o,
            browser: _,
            settings: W,
            init: X,
            customerPrivacy: H
        }) => {
            let y = W.pixel_id;

            function s(t, c, a = {}, n = {}) {
                window.fbq("trackShopify", y, t, a, {
                    eventID: c
                }, n)
            }

            function k(t) {
                let c = [],
                    a = t.data.checkout.lineItems;
                if (a != null)
                    for (let n of a) {
                        let r = n.variant.product.id || n.variant.id || n.variant.sku;
                        r != null && c.push(parseInt(r))
                    }
                return c
            }

            function q(t) {
                let c = t.data.checkout.lineItems;
                if (c != null) {
                    for (let a of c)
                        if (a.variant.product.id) return "product_group"
                }
                return "product"
            }

            function C(t) {
                let c = [],
                    a = t.data.checkout.lineItems;
                if (a != null)
                    for (let n of a) {
                        let r = n.variant.id || n.variant.sku || n.variant.product.id;
                        r != null && c.push(parseInt(r))
                    }
                return c
            }

            function A(t) {
                let c = t.data.checkout.lineItems;
                if (c != null) {
                    for (let a of c)
                        if (a.variant.id || a.variant.sku) return "product"
                }
                return "product_group"
            }

            function I(t) {
                let c = 0,
                    a = t.data.checkout.lineItems;
                if (a != null)
                    for (let n of a) c += n.quantity || 1;
                return c
            }

            function L(t, c) {
                return c == null || G.includes(c.toLowerCase()) ? t || "" : t + " - " + c
            }

            function b(t) {
                var a, n, r, i, e, d, u, p, f, h, l, m;
                let c = {};
                c.ct = ((a = t.data.checkout.billingAddress) == null ? void 0 : a.city) || ((n = t.data.checkout.shippingAddress) == null ? void 0 : n.city), c.country = ((r = t.data.checkout.billingAddress) == null ? void 0 : r.countryCode) || ((i = t.data.checkout.shippingAddress) == null ? void 0 : i.countryCode), c.fn = ((e = t.data.checkout.billingAddress) == null ? void 0 : e.firstName) || ((d = t.data.checkout.shippingAddress) == null ? void 0 : d.firstName), c.ln = ((u = t.data.checkout.billingAddress) == null ? void 0 : u.lastName) || ((p = t.data.checkout.shippingAddress) == null ? void 0 : p.lastName), c.ph = t.data.checkout.phone, c.st = ((f = t.data.checkout.billingAddress) == null ? void 0 : f.provinceCode) || ((h = t.data.checkout.shippingAddress) == null ? void 0 : h.provinceCode), c.zp = ((l = t.data.checkout.billingAddress) == null ? void 0 : l.zip) || ((m = t.data.checkout.shippingAddress) == null ? void 0 : m.zip), c.em = t.data.checkout.email, window.fbq("set", "userData", c)
            }

            function V(t) {
                t ? window.fbq("dataProcessingOptions", []) : window.fbq("dataProcessingOptions", ["LDU"], 0, 0)
            }
            let g = X.customerPrivacy.saleOfDataAllowed;
            V(g), window.fbq("init", y, {}, {
                agent: "shopify_web_pixel"
            }), H.subscribe("visitorConsentCollected", t => {
                g = t.customerPrivacy.saleOfDataAllowed, V(g)
            }), o.subscribe("page_viewed", t => {
                s("PageView", t.id)
            }), o.subscribe("search_submitted", t => {
                let c = t.data.searchResult.query || "";
                s("Search", t.id, {
                    search_string: c
                })
            }), o.subscribe("product_viewed", t => {
                let c = t.data.productVariant.product.id || t.data.productVariant.id || t.data.productVariant.sku,
                    a = c ? [parseInt(c)] : [],
                    n = t.data.productVariant.product.id ? "product_group" : "product",
                    r = L(t.data.productVariant.product.title, t.data.productVariant.title),
                    i = t.data.productVariant.product.type || "",
                    e = t.data.productVariant.price.currencyCode || "USD",
                    d = t.data.productVariant.price.amount,
                    u = t.data.productVariant.id || t.data.productVariant.sku || t.data.productVariant.product.id,
                    p = u ? [parseInt(u)] : [],
                    f = t.data.productVariant.id || t.data.productVariant.sku ? "product" : "product_group";
                s("ViewContent", t.id, {
                    content_ids: a,
                    content_type: n,
                    content_name: r,
                    content_category: i,
                    currency: e,
                    value: d
                }, {
                    product_variant_ids: p,
                    content_type_favor_variant: f
                })
            }), o.subscribe("product_added_to_cart", t => {
                var l, m, P, D, S, N, O, x, T, E, U, F, R, j, z;
                let c = ((l = t.data.cartLine) == null ? void 0 : l.merchandise.product.id) || ((m = t.data.cartLine) == null ? void 0 : m.merchandise.id) || ((P = t.data.cartLine) == null ? void 0 : P.merchandise.sku),
                    a = c ? [parseInt(c)] : [],
                    n = (D = t.data.cartLine) != null && D.merchandise.product.id ? "product_group" : "product",
                    r = L((S = t.data.cartLine) == null ? void 0 : S.merchandise.product.title, (N = t.data.cartLine) == null ? void 0 : N.merchandise.title),
                    i = ((O = t.data.cartLine) == null ? void 0 : O.merchandise.product.type) || "",
                    e = ((x = t.data.cartLine) == null ? void 0 : x.merchandise.price.currencyCode) || "USD",
                    d = (T = t.data.cartLine) == null ? void 0 : T.merchandise.price.amount,
                    u = ((E = t.data.cartLine) == null ? void 0 : E.quantity) || 1,
                    p = ((U = t.data.cartLine) == null ? void 0 : U.merchandise.id) || ((F = t.data.cartLine) == null ? void 0 : F.merchandise.sku) || ((R = t.data.cartLine) == null ? void 0 : R.merchandise.product.id),
                    f = p ? [parseInt(p)] : [],
                    h = (j = t.data.cartLine) != null && j.merchandise.id || (z = t.data.cartLine) != null && z.merchandise.sku ? "product" : "product_group";
                s("AddToCart", t.id, {
                    content_ids: a,
                    content_type: n,
                    content_name: r,
                    content_category: i,
                    currency: e,
                    value: d,
                    num_items: u
                }, {
                    product_variant_ids: f,
                    content_type_favor_variant: h
                })
            }), o.subscribe("checkout_started", t => {
                b(t);
                let c = k(t),
                    a = q(t),
                    n = t.data.checkout.currencyCode || "USD",
                    r = t.data.checkout.subtotalPrice.amount,
                    i = I(t),
                    e = C(t),
                    d = A(t);
                s("InitiateCheckout", t.id, {
                    content_ids: c,
                    content_type: a,
                    currency: n,
                    value: r,
                    num_items: i
                }, {
                    product_variant_ids: e,
                    content_type_favor_variant: d
                })
            }), o.subscribe("checkout_completed", t => {
                b(t);
                let c = k(t),
                    a = q(t),
                    n = t.data.checkout.currencyCode || "USD",
                    r = t.data.checkout.totalPrice.amount,
                    i = I(t),
                    e = C(t),
                    d = A(t);
                s("Purchase", t.id, {
                    content_ids: c,
                    content_type: a,
                    currency: n,
                    value: r,
                    num_items: i
                }, {
                    product_variant_ids: e,
                    content_type_favor_variant: d
                })
            }), o.subscribe("payment_info_submitted", t => {
                b(t);
                let c = t.data.checkout.currencyCode || "USD",
                    a = t.data.checkout.totalPrice.amount;
                s("AddPaymentInfo", t.id, {
                    currency: c,
                    value: a
                })
            })
        });
    })();

})(self.webPixelsManager.createShopifyExtend('197918935', 'app'));