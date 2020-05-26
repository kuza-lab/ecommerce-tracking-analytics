"use strict";
/* === DEFINE EVENT CONSTANTS */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
/**
 * Page Load Event - Use to track when a user visits a page
 */
var page_load = 'page_load';
// Browsing
/**
 * Product Searched Event - Use to track when a user searches for (a) product(s)
 */
var product_searched = 'product_searched';
/**
 * Product List Viewed Event - Use to track when a user views a list of products
 */
var product_list_viewed = "product_list_viewed";
/**
 * Product List Filtered Event - Use to track when a user filters the list of products
 */
var product_list_filtered = "product_list_filtered";
// Promotions
/**
 * Promotion Viewed Event - Use to track when a user views a promotion
 */
var promotion_viewed = "promotion_viewed";
/**
 * Promotion Clicked Event - Use to track when a user clicks on a promotion
 */
var promotion_clicked = "promotion_clicked";
// Orders
/**
 * Product Clicked Event - Use to track when a user clickes on a product
 */
var product_clicked = "product_clicked";
/**
 * Product Viewed Event - Use to track when a user views a product
 */
var product_viewed = "product_viewed";
/**
 * Product Added Event - Use to track when a user adds a product to a cart
 */
var product_added = "product_added";
/**
 * Product Removed Event - Use to track when a user removes a product from a cart
 */
var product_removed = "product_removed";
/**
 * Cart Viewed Event - Use to track when a user views a cart
 */
var cart_viewed = "cart_viewed";
/**
 * Checkout Started Event - Use to track when a user starts the checkout process
 */
var checkout_started = "checkout_started";
/**
 * Checkout Step Viewed Event - Use to track when a user views a specific step within the checkout process
 */
var checkout_step_viewed = "checkout_step_viewed";
/**
 * Checkout Step Completed Event - Use to track when a user completes a checkout step
 */
var checkout_step_completed = "checkout_step_completed";
/**
 * Payment Info Entered Event - Use to track when a user enters payment info
 */
var payment_info_entered = "payment_info_entered";
/**
 * Order Completed Event - Use to track when an order is completed
 */
var order_completed = "order_completed";
/**
 * Order Updated Event - Use to track when a user updates an order
 */
var order_updated = "order_updated";
/**
 * Order Refunded Event - Use to track when a user's order is refunded
 */
var order_refunded = "order_refunded";
/**
 * Order Cancelled Event - Use to track when an order is cancelled
 */
var order_cancelled = "order_cancelled";
// Coupons
/**
 * Coupon Entered Event - Use to track when a user enters a coupon
 */
var coupon_entered = "coupon_entered";
/**
 * Coupon Applied Event - Use to track when a user's coupon is applied
 */
var coupon_applied = "coupon_applied";
/**
 * Coupon Applied Event - Use to track when a coupon is denied
 */
var coupon_denied = "coupon_denied";
/**
 * Coupon Removed Event - Use to track when a coupon is removed
 */
var coupon_removed = "coupon_removed";
// wishlisting
/**
 * Product Added To Wish List Event - Use to track when a user adds a product to their wish list
 */
var product_added_to_wish_list = "product_added_to_wish_list";
/**
 * Product Removed From Wish List Event - Use to track when a user removes a product from their wish list
 */
var product_removed_from_wish_list = "product_removed_from_wish_list";
/**
 * Wish List Product Added To Cart Event - Use to track when a user adds a product in their wish list into their cart
 */
var wish_list_product_added_to_cart = "wish_list_product_added_to_cart";
// sharing
/**
 * Product Shared Event - Use to track a user sharing a product
 */
var product_shared = "product_shared";
/**
 * Cart Shared Event - Use to track a user sharing a cart
 */
var cart_shared = "cart_shared";
// reviewing
/**
 * Product Reviewed Event - Use to track a user reviewing/rating a product
 */
var product_reviewed = "product_reviewed";
// user info
/**
 * Logged In Event - Use to track a user logging in
 */
var logged_in = "logged_in";
/**
 * Signed Up Event - Use to track a user signing up
 */
var signed_up = "signed_up";
/**
 * Logged Out Event - Use to track a user logging out
 */
var logged_out = "logged_out";
/**
 * Error Event - Use to track an error
 */
var error = "error";
/* === DEFINE MODELS AND INTERFACES ====*/
var Meta = /** @class */ (function () {
    function Meta() {
        /**
         * unique id for the browsing session
         */
        this.session = "";
        /**
         * Whether the user is logged in or not
         */
        this.is_anon = true;
        /**
         * The id of the user. If not logged in, a randomly generated id is used
         */
        this.user_id = "";
        /**
         * Date and time for the event
         */
        this.datetime = "";
        /**
         * The page where the event occurred
         */
        this.page = "";
        /**
         * The url accessed
         */
        this.url = "";
        /**
         * The page url the user is coming from
         */
        this.referrer = "";
        /**
         * Identifies the browser, device and platform used to access this.
         */
        this.user_agent = "";
    }
    return Meta;
}());
var Campaign = /** @class */ (function () {
    function Campaign() {
        /**
         * Identifies which site sent the traffic, and is a required parameter.
         */
        this.utm_source = "";
        /**
         * Identifies what type of link was used, such as cost per click or email.
         */
        this.utm_medium = "";
        /**
         * Identifies what specifically was clicked to bring the user to the site, such as a banner ad or a text link.
         */
        this.utm_content = "";
        /**
         * Identifies a specific product promotion or strategic campaign.
         */
        this.utm_campaign = "";
        /**
         * Identifies search terms.
         */
        this.utm_term = "";
    }
    return Campaign;
}());
var Requests = /** @class */ (function () {
    function Requests(access_key) {
        /**
         * base url
         */
        this.base_url = "";
        this.instance = axios.create({
            baseURL: this.base_url,
            timeout: 5000,
            headers: {
                'Access-Key': access_key,
                'Content-Type': 'application/json'
            }
        });
    }
    /**
     * Submits the data onto the IDT data lake.
     * @param data
     *
     * @returns Promise
     */
    Requests.prototype.saveData = function (data) {
        console.log(data);
        return this.instance.post('/data-ingestion', data);
    };
    return Requests;
}());
/* ============== DEFINE THE ANALYTICS FUNCTION ================= */
var IDTECommerceAnalytics = /** @class */ (function () {
    /**
     * Class Constructor
     *
     * @param access_key - the access key from your insense portal
     * @param user_id - the id of a user, if there is a logged in user (or any other identity mechanism used). Can be empty.
     */
    function IDTECommerceAnalytics(access_key, user_id) {
        if (user_id === void 0) { user_id = ""; }
        this.user_id = "";
        this.event = "";
        this.request = new Requests(access_key);
        this.user_id = user_id;
        this.meta = new Meta();
        this.campaign = new Campaign();
        this.identify();
        this.sessionalize();
    }
    /**
     * Get JSON of the entire payload as well as the event and meta data
     */
    IDTECommerceAnalytics.prototype.toJson = function () {
        return { event: this.event, meta: this.meta, campaign: this.campaign, data: this.data };
    };
    /**
     * Set cookie
     * @param name
     * @param value
     * @param options
     */
    IDTECommerceAnalytics.prototype.setCookie = function (name, value, options) {
        if (options === void 0) { options = {}; }
        options = __assign({ path: '/' }, options);
        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }
        var updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
        for (var optionKey in options) {
            updatedCookie += "; " + optionKey;
            var optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }
        document.cookie = updatedCookie;
    };
    /**
     * Get a cookie
     * @param name
     */
    IDTECommerceAnalytics.prototype.getCookie = function (name) {
        var matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    };
    /**
     * Generate a random string
     *
     * @param length
     * @param chars
     *
     * @returns string
     */
    IDTECommerceAnalytics.prototype.randomString = function (length, chars) {
        var result = '';
        for (var i = length; i > 0; --i)
            result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    };
    /**
     * Get query param
     * @param name
     *
     * @returns string
     */
    IDTECommerceAnalytics.prototype.getRefQueryParam = function (name) {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        var results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };
    ;
    /**
     * Identify a user.
     * If user id is set, then we use it otherwise we set a user id
     */
    IDTECommerceAnalytics.prototype.identify = function () {
        if (this.user_id.length === 0) {
            this.meta.is_anon = true;
            // get a user id from cookies, if exists otherwise create one and persist in cookies.
            var user_id = localStorage.getItem("idt_user_id");
            if (user_id === null || user_id.length === 0) {
                // we create a new user id
                user_id = this.generateTrackingId();
                // set to local storage
                localStorage.setItem("idt_user_id", user_id);
            }
            this.meta.user_id = user_id;
        }
        else {
            this.meta.is_anon = false;
            this.meta.user_id = this.user_id;
        }
    };
    /**
     * Generate a tracking session id
     */
    IDTECommerceAnalytics.prototype.generateTrackingSessionId = function () {
        return "IDT-SESSION-" + this.randomString(32, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    };
    /**
     * Generate a tracking session id
     */
    IDTECommerceAnalytics.prototype.generateTrackingId = function () {
        return this.randomString(8, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ') + "-" +
            this.randomString(8, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ') + "-" +
            this.randomString(8, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ') + "-" +
            this.randomString(8, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    };
    /**
     * Get and/or set session.
     * If not available or has expired, create a new one
     * Sessions track a user throughout a specified journey.
     */
    IDTECommerceAnalytics.prototype.sessionalize = function () {
        // check if a cookie tracking id exists
        var idt_session = this.getCookie("idt_session");
        if (idt_session === undefined) {
            // we generate a new tracking id
            idt_session = this.generateTrackingSessionId();
            // add it as a cookie
            this.setCookie("idt_session", idt_session, { 'max-age': 3600 });
            // add it to th session
            this.meta.session = this.generateTrackingSessionId();
        }
        else {
            this.meta.session = idt_session;
        }
    };
    /**
     * Set campaign parameters
     */
    IDTECommerceAnalytics.prototype.setCampaign = function () {
        this.campaign.utm_source = this.getRefQueryParam("utm_source");
        this.campaign.utm_medium = this.getRefQueryParam("utm_medium");
        this.campaign.utm_content = this.getRefQueryParam("utm_content");
        this.campaign.utm_campaign = this.getRefQueryParam("utm_campaign");
        this.campaign.utm_term = this.getRefQueryParam("utm_term");
    };
    /**
     * Set the meta information
     */
    IDTECommerceAnalytics.prototype.setMeta = function () {
        var today = new Date();
        var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        var dateTime = date + ' ' + time;
        var page = document.body.getAttribute("data-idt-page");
        this.meta.referrer = document.referrer;
        this.meta.url = window.location.href;
        this.meta.page = page != null ? page : "";
        this.meta.datetime = dateTime;
        this.meta.user_agent = navigator.userAgent;
    };
    /**
     * Handle an event
     *
     * @param event
     * @param data
     * @param page
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.on = function (event, data, page) {
        if (page === void 0) { page = ""; }
        // set meta details
        this.setMeta();
        // set campaign details
        this.setCampaign();
        if (page.length > 0) {
            this.meta.page = page;
        }
        this.event = event;
        this.data = data;
        var payload = this.toJson();
        return this.request.saveData(payload);
    };
    /**
     * Attach event listeners to a set of document elements
     *
     * @param _class
     * @param event
     * @param callback
     *
     * @returns void
     */
    IDTECommerceAnalytics.prototype.listen = function (_class, event, callback) {
        var elements = document.getElementsByClassName(_class);
        for (var i = 0; i < elements.length; i++) {
            elements[i].addEventListener(event, callback);
        }
    };
    /**
     * Helper method to check if an element is in viewpoint
     *
     * @param el
     *
     * @returns boolean
     */
    IDTECommerceAnalytics.prototype.isInViewPoint = function (el) {
        var bounding = el.getBoundingClientRect();
        return (bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth));
    };
    IDTECommerceAnalytics.prototype.track = function () {
        var _this = this;
        // page load event
        window.addEventListener("load", function () {
            var page = document.body.getAttribute("data-idt-page");
            _this.on(page_load, { page: page });
        });
        // products searched event
        this.listen("idt-search", "keyup", function (element, event) {
            _this.on(product_searched, { query: element.valueOf() });
        });
        // product list viewed
        window.addEventListener("scroll", function (event) {
            var product_list_elements = document.getElementsByClassName("idt-products-list");
            for (var i = 0; i < product_list_elements.length; i++) {
                var el = product_list_elements[i];
                if (_this.isInViewPoint(el)) {
                    var payload = el.getAttribute("data-idt-payload");
                    _this.on(product_list_viewed, payload);
                }
            }
        });
    };
    /**
     * Page Load Event
     * Use this to track a user accessing a new page
     *
     * @param page - the page the user is viewing
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onPageLoaded = function (page) {
        return this.on(page_load, { page: page });
    };
    /**
     * Products Searched Event
     * Use this to track a user searching for a product
     *
     * @param keyword - the search phrase
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onProductSearched = function (keyword) {
        var payload = { query: keyword };
        return this.on(product_searched, payload);
    };
    /**
     * Product List Viewed Event
     * Use this to track a user viewing a list of products
     *
     * @param category - the category of the list eg home_page, recommendations, top_grossing et al
     * @param products - the list of products
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onProductListViewed = function (category, products) {
        if (products === void 0) { products = []; }
        var payload = { category: category, products: products };
        return this.on(product_list_viewed, payload);
    };
    /**
     * Products Filtered Event
     * Use this to track a user filtering the list of products
     *
     * @param category - the category of the list eg home_page, recommendations, top_grossing et al
     * @param filters - The filter parameters
     * @param sorts - the sort order parameters
     * @param products - the list of products
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onProductListFiltered = function (category, filters, sorts, products) {
        var payload = {
            category: category,
            filters: filters,
            sorts: sorts,
            products: products
        };
        return this.on(product_list_filtered, payload);
    };
    /**
     * Promotion Viewed Event
     * Use this to track a user viewing a promotion
     *
     * @param promotion_id - the unique identifier for the promotion
     * @param name - the name of the promotion
     * @param creative - the promotion's creative eg square_banner
     * @param position - the position of the promotion
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onPromotionViewed = function (promotion_id, name, creative, position) {
        var payload = { promotion_id: promotion_id, creative: creative, name: name, position: position };
        return this.on(promotion_viewed, payload);
    };
    /**
     * Promotion Clicked Event
     * Use this to track a user clicking on a promotion
     *
     * @param promotion_id - the unique identifier for the promotion
     * @param name - the name of the promotion
     * @param creative - the promotion's creative eg square_banner
     * @param position - the position of the promotion
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onPromotionClicked = function (promotion_id, name, creative, position) {
        var payload = { promotion_id: promotion_id, creative: creative, name: name, position: position };
        return this.on(promotion_clicked, payload);
    };
    /**
     * Product Clicked Event
     * Use this to track a user clicking on a product
     *
     * @param product - the product that has been clicked on
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onProductClicked = function (product) {
        return this.on(product_clicked, product);
    };
    /**
     * Product Viewed Event
     * Use this to track a user viewing a product
     *
     * @param product - the product being viewed
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onProductViewed = function (product) {
        return this.on(product_viewed, product);
    };
    /**
     * Product Added To Cart Event
     * Use this to track a user adding a product to their cart
     *
     * @param product - the product being added to cart
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onProductAdded = function (product) {
        return this.on(product_added, product);
    };
    /**
     * Product Removed From Cart Event
     * Use this to track a user removing a product from their shopping cart
     *
     * @param product - the product being removed from cart
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onProductRemoved = function (product) {
        return this.on(product_removed, product);
    };
    /**
     * Cart Viewed Event
     * Use this to track a user viewing their cart
     *
     * @param cart_id - the identifier for the cart
     * @param products - the list of products in the cart
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onCartViewed = function (cart_id, products) {
        var payload = { cart_id: cart_id, products: products };
        return this.on(cart_viewed, payload);
    };
    /**
     * Checkout Started Event
     * Use this to track a user starting the checkout process
     *
     * @param checkout - checkout details: includes order_id, value (Revenue with
     * discounts and coupons added in), revenue (Revenue associated with the transaction (excluding shipping and tax)),
     * shipping (shipping costs), tax, discount and currency
     * @param products - the list of products
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onCheckOutStarted = function (checkout, products) {
        var payload = {
            order_id: checkout.order_id,
            value: checkout.value,
            revenue: checkout.revenue,
            shipping: checkout.shipping,
            tax: checkout.tax,
            discount: checkout.discount,
            currency: checkout.currency,
            products: products
        };
        return this.on(checkout_started, payload);
    };
    /**
     * Checkout Step Viewed Event
     * Use this to track a user viewing a specified checkout step
     *
     * @param checkout_id - the id of the checkout
     * @param step - the checkout step
     * @param shipping_method - the shipping method selected by the user
     * @param payment_method - the payment method selected by the user
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onCheckOutStepViewed = function (checkout_id, step, shipping_method, payment_method) {
        var payload = {
            checkout_id: checkout_id,
            step: step,
            shipping_method: shipping_method,
            payment_method: payment_method
        };
        return this.on(checkout_step_viewed, payload);
    };
    /**
     * Checkout Step Completed Event
     * Use this to track a user completing a specified checkout step
     *
     * @param checkout_id - the id of the checkout
     * @param step - the checkout step
     * @param shipping_method - the shipping method selected by the user
     * @param payment_method - the payment method selected by the user
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onCheckOutStepCompleted = function (checkout_id, step, shipping_method, payment_method) {
        var payload = {
            checkout_id: checkout_id,
            step: step,
            shipping_method: shipping_method,
            payment_method: payment_method
        };
        return this.on(checkout_step_completed, payload);
    };
    /**
     * Payment Info Entered Event
     * Use this to track a user entering their payment info
     *
     * @param order_id - the identifier for the order.
     * @param checkout_id - the id of the checkout
     * @param step - the checkout step
     * @param shipping_method - the shipping method selected by the user
     * @param payment_method - the payment method selected by the user
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onPaymentInfoEntered = function (order_id, checkout_id, step, shipping_method, payment_method) {
        var payload = {
            order_id: order_id,
            checkout_id: checkout_id,
            step: step,
            shipping_method: shipping_method,
            payment_method: payment_method
        };
        return this.on(payment_info_entered, payload);
    };
    /**
     * Order Completed Event
     * Use this to track a user completing their order
     *
     * @param order - the details of the order eg order id, checkout id,subtotal (
     * Order total after discounts but before taxes and shipping), total (Revenue with discounts and coupons added in),
     * revenue (Revenue associated with the transaction (excluding shipping and tax)), shipping (Shipping cost associated
     * with the transaction), tax, discount, coupon, currency
     * @param products - the list of products
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onOrderCompleted = function (order, products) {
        var payload = {
            checkout_id: order.checkout_id,
            order_id: order.order_id,
            subtotal: order.subtotal,
            total: order.total,
            revenue: order.revenue,
            shipping: order.shipping,
            tax: order.tax,
            discount: order.discount,
            coupon: order.coupon,
            currency: order.currency,
            products: products
        };
        return this.on(order_completed, payload);
    };
    /**
     * Order Updated Event
     * Use this to track a user updating their order
     *
     * @param order - the details of the order eg order id, total (Revenue with
     *  discounts and coupons added in), revenue (Revenue associated with the transaction (excluding shipping and tax)),
     *  shipping (Shipping cost associated with the transaction), tax, discount, coupon, currency
     * @param products - the list of products
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onOrderUpdated = function (order, products) {
        var payload = {
            order_id: order.order_id,
            total: order.total,
            revenue: order.revenue,
            shipping: order.shipping,
            tax: order.tax,
            discount: order.discount,
            coupon: order.coupon,
            currency: order.currency,
            products: products
        };
        return this.on(order_updated, payload);
    };
    /**
     * Order Cancelled Event
     * Use this to track a user cancelling their order
     *
     * @param order - the details of the order eg order id, total (Revenue with
     *  discounts and coupons added in), revenue (Revenue associated with the transaction (excluding shipping and tax)),
     *  shipping (Shipping cost associated with the transaction), tax, discount, coupon, currency
     * @param products - the list of products
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onOrderCancelled = function (order, products) {
        var payload = {
            order_id: order.order_id,
            total: order.total,
            revenue: order.revenue,
            shipping: order.shipping,
            tax: order.tax,
            discount: order.discount,
            coupon: order.coupon,
            currency: order.currency,
            products: products
        };
        return this.on(order_cancelled, payload);
    };
    /**
     * Order Refunded Event
     * Use this to track a user being refunded an order
     *
     * @param order_id - the order identifier
     * @param total - the total cost of the order
     * @param currency - the currency
     * @param products - the list of products
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onOrderRefunded = function (order_id, total, currency, products) {
        var payload = {
            order_id: order_id,
            total: total,
            currency: currency,
            products: products
        };
        return this.on(order_refunded, payload);
    };
    /**
     * Coupon Entered Event
     * Use this to track a user entering their coupon
     *
     * @param order_id - the order identifier
     * @param cart_id - the cart identifier
     * @param coupon - the coupon identifier
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onCouponEntered = function (order_id, cart_id, coupon) {
        var payload = {
            order_id: order_id,
            cart_id: cart_id,
            coupon: coupon
        };
        return this.on(coupon_entered, payload);
    };
    /**
     * Coupon Applied Event
     * Use this to track a user's coupon being applied
     *
     * @param order_id - the order identifier
     * @param cart_id - the cart identifier
     * @param coupon - the coupon identifier
     * @param discount - the discount applied
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onCouponApplied = function (order_id, cart_id, coupon, discount) {
        var payload = {
            order_id: order_id,
            cart_id: cart_id,
            coupon: coupon,
            discount: discount
        };
        return this.on(coupon_applied, payload);
    };
    /**
     * Coupon Removed Event
     * Use this to track a user removing their coupon
     *
     * @param order_id - the order identifier
     * @param cart_id - the cart identifier
     * @param coupon - the coupon identifier
     * @param discount - the discount applied
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onCouponRemoved = function (order_id, cart_id, coupon, discount) {
        var payload = {
            order_id: order_id,
            cart_id: cart_id,
            coupon: coupon,
            discount: discount
        };
        return this.on(coupon_removed, payload);
    };
    /**
     * Coupon Denied event
     * Use this to track a user being denied a coupon
     *
     *  @param order_id - the order identifier
     * @param cart_id - the cart identifier
     * @param coupon - the coupon identifier
     * @param reason - the reason for the declination
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onCouponDenied = function (order_id, cart_id, coupon, reason) {
        var payload = {
            order_id: order_id,
            cart_id: cart_id,
            coupon: coupon,
            reason: reason
        };
        return this.on(coupon_denied, payload);
    };
    /**
     * Product Added To Wish List Event
     * Use this to track a user adding a product to their wish list
     *
     * @param product - the list of products
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onProductAddedToWishList = function (product) {
        return this.on(product_added_to_wish_list, product);
    };
    /**
     * Product Removed From Wish List Event
     * Use this to track a user removing a product from their wish list
     *
     * @param product - the product removed
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onProductRemovedFromWishList = function (product) {
        return this.on(product_removed_from_wish_list, product);
    };
    /**
     * Wish List Product Added to Cart Event
     * Use this to track a user adding their wish list product to their cart
     *
     * @param product - the product added to cart
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onWishListProductAddedToCart = function (product) {
        return this.on(wish_list_product_added_to_cart, product);
    };
    /**
     * Product Shared Event
     * Use this to track a user sharinf a product
     *
     * @param product - the product shared
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onProductShared = function (product) {
        return this.on(product_shared, product);
    };
    /**
     * Cart Shared Event
     * Use this to track a user sharing their cart
     *
     * @param cart_id - the id of the cart
     * @param share_via - the channel shared to
     * @param share_message - the message for share
     * @param recipient - the user shared to
     * @param products - list of products in the cart
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onCartShared = function (cart_id, share_via, share_message, recipient, products) {
        var payload = {
            cart_id: cart_id,
            share_via: share_via,
            share_message: share_message,
            recipient: recipient,
            products: products
        };
        return this.on(cart_shared, payload);
    };
    /**
     * Product Reviewed Event
     * Use this to track a user reviewing/rating a product
     *
     * @param product_id - id of the product
     * @param review_id - id of the review
     * @param review_body - review message
     * @param rating - rating value
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onProductReviewed = function (product_id, review_id, review_body, rating) {
        var payload = {
            product_id: product_id,
            review_id: review_id,
            review_body: review_body,
            rating: rating
        };
        return this.on(product_reviewed, payload);
    };
    /**
     * Login Event
     * Use to track a user logging in
     *
     * @param user - details of the user
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onLogIn = function (user) {
        return this.on(logged_in, user);
    };
    /**
     * Log Out Event
     * Use this to track a user logging out
     *
     * @param user_id - id of the user
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onLogOut = function (user_id) {
        return this.on(logged_out, { user_id: user_id });
    };
    /**
     * Sign Up Event
     * Use this to track a user signing up
     *
     * @param user - details of the user
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onSignUp = function (user) {
        return this.on(signed_up, user);
    };
    /**
     * Error Event
     * Use this to track an error
     *
     * @param type - error type eg 404,400,500, "incomplete form" et al
     * @param message - the error message
     * @param data - the data submitted when the error occurred
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onError = function (type, message, data) {
        var payload = {
            type: type,
            message: message,
            data: data
        };
        return this.on(error, payload);
    };
    /**
     * Custom Event
     * Use this to add any other event not included here
     *
     * @param event - the name of the event
     * @param payload - the payload/data for the event
     *
     * @returns Promise
     */
    IDTECommerceAnalytics.prototype.onEvent = function (event, payload) {
        return this.on(event, payload);
    };
    return IDTECommerceAnalytics;
}());
