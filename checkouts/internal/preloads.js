(function() {
    var baseURL = "https://cdn.shopify.com/shopifycloud/checkout-web/assets/";
    var scripts = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/polyfills.CPIGHvSH.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/app.DE5MNd1X.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/page-Information.BTWufEjw.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/ButtonWithRegisterWebPixel.BLOFpN3x.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/NoAddressLocationFullDetour.DlqQB1xc.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/DeliveryMethodSelectorSection.Bf0boBSi.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/useEditorShopPayNavigation.BHYSzY_s.js", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/VaultedPayment.DjeCn0w1.js"];
    var styles = ["https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/app.CXL-GAUL.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/ButtonWithRegisterWebPixel.9MjAB40w.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/NoAddressLocationFullDetour.CpG-8YkX.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/DeliveryMethodSelectorSection.DmqjTkNB.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/useEditorShopPayNavigation.DCOTvxC3.css", "https://cdn.shopify.com/shopifycloud/checkout-web/assets/c1.en/assets/VaultedPayment.OxMVm7u-.css"];
    var fontPreconnectUrls = [];
    var fontPrefetchUrls = [];
    var imgPrefetchUrls = ["https://cdn.shopify.com/s/files/1/0595/3096/9256/files/Wellow-Logo-Wordmark-Navy_x320.png?v=1685021442"];

    function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
    }

    function preconnectAssets() {
        var resources = [baseURL].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
            var res = resources[index++];
            if (res) preconnect(res, next);
        })();
    }

    function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
            link.rel = 'prefetch';
            link.fetchPriority = 'low';
            link.as = as;
            if (as === 'font') link.type = 'font/woff2';
            link.href = url;
            link.crossOrigin = '';
            link.onload = link.onerror = callback;
            document.head.appendChild(link);
        } else {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onloadend = callback;
            xhr.send();
        }
    }

    function prefetchAssets() {
        var resources = [].concat(
            scripts.map(function(url) {
                return [url, 'script'];
            }),
            styles.map(function(url) {
                return [url, 'style'];
            }),
            fontPrefetchUrls.map(function(url) {
                return [url, 'font'];
            }),
            imgPrefetchUrls.map(function(url) {
                return [url, 'image'];
            })
        );
        var index = 0;

        function run() {
            var res = resources[index++];
            if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
    }

    function onLoaded() {
        try {
            if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
                preconnectAssets();
                prefetchAssets();
            }
        } catch (e) {}
    }

    if (document.readyState === 'complete') {
        onLoaded();
    } else {
        addEventListener('load', onLoaded);
    }
})();