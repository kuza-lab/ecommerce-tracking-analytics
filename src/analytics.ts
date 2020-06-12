/* === DEFINE EVENT CONSTANTS */

/**
 * Page Load Event - Use to track when a user visits a page
 */
const page_load = 'page_load';

// Browsing

/**
 * Product Searched Event - Use to track when a user searches for (a) product(s)
 */
const product_searched = 'product_searched';
/**
 * Product List Viewed Event - Use to track when a user views a list of products
 */
const product_list_viewed = "product_list_viewed";
/**
 * Product List Filtered Event - Use to track when a user filters the list of products
 */
const product_list_filtered = "product_list_filtered";

// Promotions
/**
 * Promotion Viewed Event - Use to track when a user views a promotion
 */
const promotion_viewed = "promotion_viewed";
/**
 * Promotion Clicked Event - Use to track when a user clicks on a promotion
 */
const promotion_clicked = "promotion_clicked";

// Orders
/**
 * Product Clicked Event - Use to track when a user clickes on a product
 */
const product_clicked = "product_clicked";
/**
 * Product Viewed Event - Use to track when a user views a product
 */
const product_viewed = "product_viewed";
/**
 * Product Added Event - Use to track when a user adds a product to a cart
 */
const product_added = "product_added";
/**
 * Product Removed Event - Use to track when a user removes a product from a cart
 */
const product_removed = "product_removed";
/**
 * Cart Viewed Event - Use to track when a user views a cart
 */
const cart_viewed = "cart_viewed";
/**
 * Checkout Started Event - Use to track when a user starts the checkout process
 */
const checkout_started = "checkout_started";
/**
 * Checkout Step Viewed Event - Use to track when a user views a specific step within the checkout process
 */
const checkout_step_viewed = "checkout_step_viewed";
/**
 * Checkout Step Completed Event - Use to track when a user completes a checkout step
 */
const checkout_step_completed = "checkout_step_completed";
/**
 * Payment Info Entered Event - Use to track when a user enters payment info
 */
const payment_info_entered = "payment_info_entered";
/**
 * Order Completed Event - Use to track when an order is completed
 */
const order_completed = "order_completed";
/**
 * Order Updated Event - Use to track when a user updates an order
 */
const order_updated = "order_updated";
/**
 * Order Refunded Event - Use to track when a user's order is refunded
 */
const order_refunded = "order_refunded";
/**
 * Order Cancelled Event - Use to track when an order is cancelled
 */
const order_cancelled = "order_cancelled";

// Coupons
/**
 * Coupon Entered Event - Use to track when a user enters a coupon
 */
const coupon_entered = "coupon_entered";
/**
 * Coupon Applied Event - Use to track when a user's coupon is applied
 */
const coupon_applied = "coupon_applied";
/**
 * Coupon Applied Event - Use to track when a coupon is denied
 */
const coupon_denied = "coupon_denied";
/**
 * Coupon Removed Event - Use to track when a coupon is removed
 */
const coupon_removed = "coupon_removed";

// wishlisting
/**
 * Product Added To Wish List Event - Use to track when a user adds a product to their wish list
 */
const product_added_to_wish_list = "product_added_to_wish_list";
/**
 * Product Removed From Wish List Event - Use to track when a user removes a product from their wish list
 */
const product_removed_from_wish_list = "product_removed_from_wish_list";
/**
 * Wish List Product Added To Cart Event - Use to track when a user adds a product in their wish list into their cart
 */
const wish_list_product_added_to_cart = "wish_list_product_added_to_cart";

// sharing
/**
 * Product Shared Event - Use to track a user sharing a product
 */
const product_shared = "product_shared";
/**
 * Cart Shared Event - Use to track a user sharing a cart
 */
const cart_shared = "cart_shared";

// reviewing
/**
 * Product Reviewed Event - Use to track a user reviewing/rating a product
 */
const product_reviewed = "product_reviewed";


// user info
/**
 * Logged In Event - Use to track a user logging in
 */
const logged_in = "logged_in";
/**
 * Signed Up Event - Use to track a user signing up
 */
const signed_up = "signed_up";
/**
 * Logged Out Event - Use to track a user logging out
 */
const logged_out = "logged_out";
/**
 * Error Event - Use to track an error
 */
const error = "error";


/* === DEFINE MODELS AND INTERFACES ====*/
class Meta {
    /**
     * unique id for the browsing session
     */
    session: string = "";
    /**
     * Whether the user is logged in or not
     */
    is_anon: boolean = true;
    /**
     * The user
     */
    user: User = {user_id: "", user_name: "", user_email: "", user_phone: ""};
    /**
     * Date and time for the event
     */
    datetime: string = "";
    /**
     * The page where the event occurred
     */
    page: string = "";
    /**
     * The url accessed
     */
    url: string = "";
    /**
     * The page url the user is coming from
     */
    referrer: string = "";
    /**
     * Identifies the browser, device and platform used to access this.
     */
    user_agent: string = "";
    /**
     * Client IP Address
     */
    ip_address: string = "";
}

class Campaign {
    /**
     * Identifies which site sent the traffic, and is a required parameter.
     */
    utm_source: string = "";
    /**
     * Identifies what type of link was used, such as cost per click or email.
     */
    utm_medium: string = "";
    /**
     * Identifies what specifically was clicked to bring the user to the site, such as a banner ad or a text link.
     */
    utm_content: string = "";
    /**
     * Identifies a specific product promotion or strategic campaign.
     */
    utm_campaign: string = "";
    /**
     * Identifies search terms.
     */
    utm_term: string = "";
}

/**
 * List of interfaces defining the structure of the data to accompany each of the events
 */
interface Product {
    /**
     * Id of the product
     */
    product_id: string;
    /**
     * Stock keeping unit
     */
    sku: string;
    /**
     * product category
     */
    category: string;
    /**
     * Name of the product
     */
    name: string;
    /**
     * Product brand
     */
    brand: string;
    /**
     * Product variant eg black
     */
    variant:string;
    /**
     * The price for the prduct
     */
    price: string;
    /**
     * Where in cart, quentity being purchased of the product
     */
    quantity: string;
    /**
     * The coupon code applied for the purchase
     */
    coupon: string;
    /**
     * The position on the page where the product is located
     */
    position: string;
    /**
     * url to access the product
     */
    url: string;
    /**
     * Link to the product image
     */
    image_url: string;
}

interface Filter {
    /**
     * Id of the filter type that the customer is using eg price
     */
    type: string;
    /**
     * Id of the selection that the customer chose eg Under 100
     */
    value: string;
}

interface Sort {
    /**
     * Id of the sort type that the customer is using eg price
     */
    type: string;
    /**
     * Id of the selection type the the customer is using (ascending, descending) eg desc
     */
    value: string;
}

interface ProductsSearched {
    /**
     * Search keyword
     */
    query: string;
}

interface ProductListViewed {
    /**
     * Identifies the type of list eg home page products, recommendations, top grossing et al
     */
    category: string;
    /**
     * List of products
     */
    products: Product[];
}

interface ProductListFiltered {
    /**
     * Identifies the type of list eg home page products, recommendations, top grossing et al
     */
    category: string;
    /**
     * List of filter parameters
     */
    filters: Filter[];
    /**
     * List of sort parameters
     */
    sorts: Sort[];
    /**
     * List of products
     */
    products: Product[];
}

interface PromotionViewed {
    /**
     * id of the promotion
     */
    promotion_id: string;
    /**
     * Design creative type for the promotion eg eg top_banner_2
     */
    creative: string;
    /**
     * Name of the promotion
     */
    name: string;
    /**
     * Where the promotion is eg eg home_banner_top
     */
    position: string;
}

interface PromotionClicked {
    /**
     * id of the promotion
     */
    promotion_id: string;
    /**
     * Design creative type for the promotion eg eg top_banner_2
     */
    creative: string;
    /**
     * Name of the promotion
     */
    name: string;
    /**
     * Where the promotion is eg eg home_banner_top
     */
    position: string;
}

interface ProductAdded {
    /**
     * id of the cart
     */
    cart_id: string;
    /**
     * id of the product
     */
    product_id: string;
    /**
     * product sku
     */
    sku: string;
    /**
     * category of the product
     */
    category: string;
    /**
     * name of the product
     */
    name: string;
    /**
     * product brand
     */
    brand: string;
    /**
     * product variant eg black
     */
    variant:string;
    /**
     * prodct price
     */
    price: string;
    /**
     * product quantity
     */
    quantity: string;
    /**
     * Product coupon
     */
    coupon: string;
    /**
     * Product position
     */
    position: string;
    /**
     * Product url
     */
    url: string;
    /**
     * link to the product image
     */
    image_url: string;
}

interface ProductRemoved {
    /**
     * id of the cart
     */
    cart_id: string;
    /**
     * id of the product
     */
    product_id: string;
    /**
     * product sku
     */
    sku: string;
    /**
     * category of the product
     */
    category: string;
    /**
     * name of the product
     */
    name: string;
    /**
     * product brand
     */
    brand: string;
    /**
     * product variant eg black
     */
    variant:string;
    /**
     * prodct price
     */
    price: string;
    /**
     * product quantity
     */
    quantity: string;
    /**
     * Product coupon
     */
    coupon: string;
    /**
     * Product position
     */
    position: string;
    /**
     * Product url
     */
    url: string;
    /**
     * link to the product image
     */
    image_url: string;
}

interface Cart {
    /**
     * id of the cart
     */
    cart_id: string;
    /**
     * List of products in the cart
     */
    products: Product[]
}

interface CheckoutStarted {
    /**
     * id of the order
     */
    order_id: string;
    /**
     * Revenue with discounts and coupons added in.
     */
    value: number;
    /**
     * Revenue associated with the transaction (excluding shipping and tax)
     */
    revenue: number;
    /**
     * Shipping cost associated with the transaction
     */
    shipping: number;
    /**
     * tax amount
     */
    tax: number;
    /**
     * discount amount
     */
    discount: number;
    /**
     * currency of the transaction
     */
    currency: string;
    /**
     * List of products
     */
    products: Product[]
}

interface CheckoutStepViewed {
    /**
     * Checkout transaction ID
     */
    checkout_id: string;
    /**
     * The checkout step eg step 1
     */
    step: number;
    /**
     * shipping method selected by the user
     */
    shipping_method: string;
    /**
     * payment method selected by the user
     */
    payment_method: string;
}

interface CheckoutStepCompleted {
    /**
     * Checkout transaction ID
     */
    checkout_id: string;
    /**
     * The checkout step eg step 1
     */
    step: number;
    /**
     * shipping method selected by the user
     */
    shipping_method: string;
    /**
     * payment method selected by the user
     */
    payment_method: string;
}

interface PaymentInfoEntered {
    /**
     * Checkout transaction ID
     */
    checkout_id: string;
    /**
     * id of the order
     */
    order_id: string;
    /**
     * The checkout step eg step 1
     */
    step: number;
    /**
     * shipping method selected by the user
     */
    shipping_method: string;
    /**
     * payment method selected by the user
     */
    payment_method: string;
}

interface OrdersUpdated {
    /**
     * id of the order
     */
    order_id: string;
    /**
     * Revenue with discounts and coupons added in
     */
    total: number;
    /**
     * Revenue associated with the transaction (excluding shipping and tax)
     */
    revenue: number;
    /**
     * Shipping cost associated with the transaction
     */
    shipping: number;
    /**
     * tax amount
     */
    tax: number;
    /**
     * discount amount
     */
    discount: number;
    /**
     * coupon amount
     */
    coupon: string;
    /**
     * currency of the transaction
     */
    currency: string;
    /**
     * List of products
     */
    products: Product[]
}

interface OrderCompleted {
    /**
     * id of the checkout process
     */
    checkout_id: string;
    /**
     * id of the order
     */
    order_id: string;
    /**
     * Order total after discounts but before taxes and shipping
     */
    subtotal: number;
    /**
     * Revenue with discounts and coupons added in
     */
    total: number;
    /**
     * Revenue associated with the transaction (excluding shipping and tax)
     */
    revenue: number;
    /**
     * Shipping cost associated with the transaction
     */
    shipping: number;
    /**
     * tax amount
     */
    tax: number;
    /**
     * discount amount
     */
    discount: number;
    /**
     * coupon value
     */
    coupon: string;
    /**
     * currency of the transaction
     */
    currency: string;
    /**
     * List of products
     */
    products: Product[]
}

interface OrderRefunded {
    /**
     * id of the order
     */
    order_id: string,
    /**
     * total amount refunded
     */
    total: number,
    /**
     * currency of the transaction
     */
    currency: string,
    /**
     * List of products in the order
     */
    products: Product[]
}

interface OrderCancelled {
    /**
     * id of the order
     */
    order_id: string;
    /**
     * Revenue with discounts and coupons added in
     */
    total: number;
    /**
     * Revenue associated with the transaction (excluding shipping and tax)
     */
    revenue: number;
    /**
     * Shipping cost associated with the transaction
     */
    shipping: number;
    /**
     * tax amount
     */
    tax: number;
    /**
     * discount amount
     */
    discount: number;
    /**
     * coupon value
     */
    coupon: string;
    /**
     * currency of the transaction
     */
    currency: string;
    /**
     * List of products
     */
    products: Product[]
}

interface CouponEntered {
    /**
     * id of the order
     */
    order_id: string;
    /**
     * id of the cart
     */
    cart_id: string;
    /**
     * coupon code/id/name
     */
    coupon: string;
}

interface CouponApplied {
    /**
     * id of the order
     */
    order_id: string;
    /**
     * id of the cart
     */
    cart_id: string;
    /**
     * coupon code/id/name
     */
    coupon: string;
    /**
     * discount value
     */
    discount: number;
}

interface CouponRemoved {
    /**
     * id of the order
     */
    order_id: string;
    /**
     * id of the cart
     */
    cart_id: string;
    /**
     * coupon code/id/name
     */
    coupon: string;
    /**
     * discount value
     */
    discount: number;
}

interface CouponDenied {
    /**
     * id of the order
     */
    order_id: string;
    /**
     * id of the cart
     */
    cart_id: string;
    /**
     * coupon code/id/name
     */
    coupon: string;
    /**
     * reason for denial
     */
    reason: string
}

interface ProductWishlist {
    /**
     * id of the wishlist
     */
    wishlist_id: string;
    /**
     * id of the product
     */
    product_id: string;
    /**
     * product sku
     */
    sku: string;
    /**
     * product category
     */
    category: string;
    /**
     * name of the product
     */
    name: string;
    /**
     * product brand
     */
    brand: string;
    /**
     * product variant eg black
     */
    variant:string;
    /**
     * product price
     */
    price: string;
    /**
     * Quantity of the product
     */
    quantity: string;
    /**
     * coupon value
     */
    coupon: string;
    /**
     * Position of the product
     */
    position: string;
    /**
     * url to the product
     */
    url: string;
    /**
     * link to product image
     */
    image_url: string;
}

interface ProductWishlistToCart {
    /**
     * id of the wish list
     */
    wishlist_id: string;
    /**
     * id of the cart
     */
    cart_id: string;
    /**
     * id of the product
     */
    product_id: string;
    /**
     * product sku
     */
    sku: string;
    /**
     * product category
     */
    category: string;
    /**
     * name of the product
     */
    name: string;
    /**
     * product brand
     */
    brand: string;
    /**
     * product variant e black
     */
    variant:string;
    /**
     * price of the product
     */
    price: string;
    /**
     * quantity of the product
     */
    quantity: string;
    /**
     * product coupon used
     */
    coupon: string;
    /**
     * position of the product
     */
    position: string;
    /**
     * url to the product
     */
    url: string;
    /**
     * link to product image
     */
    image_url: string;
}

interface ProductShared {
    /**
     * medium shared to/by
     */
    share_via: string;
    /**
     * the message for the share
     */
    share_message: string;
    /**
     * recipients
     */
    recipient: string;
    /**
     * id of the product
     */
    product_id: string;
    /**
     * product sku
     */
    sku: string;
    /**
     * product category
     */
    category: string;
    /**
     * name of the product
     */
    name: string;
    /**
     * product brand
     */
    brand: string;
    /**
     * product variant eg color
     */
    variant:string;
    /**
     * price of the product
     */
    price: string;
    /**
     * url of the product
     */
    url: string;
    /**
     * link to product image
     */
    image_url: string;
}

interface CartProductId {
    /**
     * id of the product
     */
    product_id: string
}

interface CartShared {
    /**
     * medium shared to/by
     */
    share_via: string;
    /**
     * the message for the share
     */
    share_message: string;
    /**
     * recipients
     */
    recipient: string;
    /**
     * id of the cart
     */
    cart_id: string;
    /**
     * list of products
     */
    products: CartProductId[]
}

interface ProductReviewed {
    /**
     * id of the product
     */
    product_id: string;
    /**
     * id of the review
     */
    review_id: string;
    /**
     * review message/content
     */
    review_body: string;
    /**
     * rating value
     */
    rating: number;
}

interface User {
    /**
     * id of the user
     */
    user_id: string;
    /**
     * email of the user
     */
    user_email: string;
    /**
     * phone number of the user
     */
    user_phone: string;
    /**
     * name of the user
     */
    user_name: string;
}

interface EventError {
    /**
     * error type eg "Missing form fields" 404 not found, 500 intenrnal server error et al
     */
    type: string;
    /**
     * the error message
     */
    message: string;
    /**
     * data accompanying the error
     */
    data: any;
}

/* ======== SET REQUESTS ======= */

declare var axios:any;

class Requests {

    /**
     * base url
     */
    private base_url: string = document.location.protocol + "//portal.insensedata.com/";
    /**
     * axios instance
     */
    private instance: any;

    constructor(access_key: string) {

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
    saveData(data: any) {
        console.log(data);
        return this.instance.post('retail/api/clickstream', data)
    }

    /**
     * Make a get request
     *
     * @param url
     */
    getData(url: string) {
        return this.instance.get(url)
    }
}

/* ============== DEFINE THE ANALYTICS FUNCTION ================= */

class IDTECommerceAnalytics {

    private request: any;

    private user_id: string = "";

    private event: string = "";
    private data: any;
    private meta: Meta;
    private campaign: Campaign;

    /**
     * Class Constructor
     *
     * @param access_key - the access key from your insense portal
     */
    constructor(access_key: string) {

        this.request = new Requests(access_key);

        this.meta = new Meta();

        this.campaign = new Campaign();

        this.sessionalize();
    }

    /**
     * Identify a user.
     * If user id is set, then we use it otherwise we set a user id
     * @param user_id - the id of a user, if there is a logged in user (or any other identity mechanism used). Can be empty.
     * @param user_name - the name of the user
     * @param user_email - the email of the user
     * @param user_phone - the phone of the user
     */
    identify(user_id: string = "", user_name: string = "", user_email: string = "", user_phone: string = ""): IDTECommerceAnalytics {

        if (user_id === "") {

            this.meta.is_anon = true;

            // get a user id from cookies, if exists otherwise create one and persist in cookies.
            let user_id = localStorage.getItem("idt_user_id");

            if (user_id === null || user_id.length  === 0) {

                // we create a new user id
                user_id = this.generateTrackingId();

                // set to local storage
                localStorage.setItem("idt_user_id", user_id);
            }
            this.meta.user.user_id = user_id
        } else {
            this.meta.is_anon = false;
            this.meta.user.user_id = user_id;
            this.meta.user.user_name = user_name;
            this.meta.user.user_email = user_email;
            this.meta.user.user_phone = user_phone;
        }

        return this
    }

    /**
     * Get JSON of the entire payload as well as the event and meta data
     */
    private toJson() {
        return {event: this.event, meta: this.meta, campaign: this.campaign, data: this.data};
    }

    /**
     * Set cookie
     * @param name
     * @param value
     * @param options
     */
    private setCookie(name: string, value: string, options:any = {}) {

        options = {
            path: '/',
            // add other defaults here if necessary
            ...options
        };

        if (options.expires instanceof Date) {
            options.expires = options.expires.toUTCString();
        }

        let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

        for (let optionKey in options) {
            updatedCookie += "; " + optionKey;
            let optionValue = options[optionKey];
            if (optionValue !== true) {
                updatedCookie += "=" + optionValue;
            }
        }

        document.cookie = updatedCookie;
    }

    /**
     * Get a cookie
     * @param name
     */
    private getCookie(name: string) {
        let matches = document.cookie.match(new RegExp(
            "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
        ));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    /**
     * Generate a random string
     *
     * @param length
     * @param chars
     *
     * @returns string
     */
    private randomString(length: number, chars:string): string {
        let result = '';
        for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
        return result;
    }

    /**
     * Get query param
     * @param name
     *
     * @returns string
     */
    private getRefQueryParam(name: string): string {
        name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
        let regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
        let results = regex.exec(location.search);
        return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
    };

    /**
     * Generate a tracking session id
     */
    private generateTrackingSessionId() {
        return  "IDT-SESSION-" + this.randomString(32, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    /**
     * Generate a tracking session id
     */
    private generateTrackingId() {
        return  this.randomString(8, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ') + "-" +
            this.randomString(8, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ') + "-" +
            this.randomString(8, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ') + "-" +
            this.randomString(8, '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    }

    /**
     * Get and/or set session.
     * If not available or has expired, create a new one
     * Sessions track a user throughout a specified journey.
     */
    private sessionalize() {
        // check if a cookie tracking id exists
        let idt_session = this.getCookie("idt_session");

        if (idt_session === undefined) {
            // we generate a new tracking id
            idt_session = this.generateTrackingSessionId();
            // add it as a cookie
            this.setCookie("idt_session", idt_session, {'max-age': 600});
            // add it to th session
            this.meta.session = this.generateTrackingSessionId();
        } else {
            this.meta.session = idt_session;
        }
    }

    /**
     * Set campaign parameters
     */
    private setCampaign(): void {
        this.campaign.utm_source = this.getRefQueryParam("utm_source");
        this.campaign.utm_medium = this.getRefQueryParam("utm_medium");
        this.campaign.utm_content = this.getRefQueryParam("utm_content");
        this.campaign.utm_campaign = this.getRefQueryParam("utm_campaign");
        this.campaign.utm_term = this.getRefQueryParam("utm_term");
    }

    /**
     * Set the meta information
     */
    private setMeta() {

        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = date+' '+time;

        let page = location.pathname.substr(1).split("/")[0];
        page = page.length == 0 ? "home" : page;

        this.meta.referrer = document.referrer;
        this.meta.url = window.location.href;
        this.meta.page = page != null ? page  :"";
        this.meta.datetime = dateTime;
        this.meta.user_agent = navigator.userAgent;
    }

    /**
     * Get the IP address of the client
     */
    private async getIP() {

        let protocol = document.location.protocol;

        let response = await this.request.getData(protocol + "//api.ipify.org?format=json");

        return response.ip
    }

    /**
     * Execute an event data saving
     *
     * @param event
     * @param data
     * @param page
     */
    private execute(event: string, data: any, page: string = "") {

        // set campaign details
        this.setCampaign();

        if (page.length > 0) {
            this.meta.page = page;
        }

        this.event = event;
        this.data = data;

        let payload = this.toJson();

        return this.request.saveData(payload);
    }

    /**
     * Handle an event
     *
     * @param event
     * @param data
     * @param page
     *
     * @returns Promise
     */
    private async on(event: string, data: any, page: string = ""): Promise<any> {

        // set meta details
        this.setMeta();

        // if ip is retrieved, we set it and send request otherwise we just send the request
        this.getIP().then((response: any) => {
            this.meta.ip_address = response;

            this.execute(event, data, page);

        }).catch((error) => {

            console.log(error);

            this.execute(event, data, page);
        });
    }

    /**
     * Attach event listeners to a set of document elements
     *
     * @param _class
     * @param event
     * @param callback
     *
     * @returns void
     */
    listen(_class: string, event: string, callback: any): void {
        let elements =  document.getElementsByClassName(_class);

        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener(event, callback)
        }
    }

    /**
     * Helper method to check if an element is in viewpoint
     *
     * @param el
     *
     * @returns boolean
     */
    isInViewPoint(el: Element) {
        let bounding = el.getBoundingClientRect();

        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        )
    }

    private track() {

        // page load event
        window.addEventListener("load", () => {

            let page = location.pathname.substr(1).split("/")[0];
            page = page.length == 0 ? "home" : page;

            this.on(page_load, {page: page})
        });

        // products searched event
        this.listen("idt-search", "keyup", (element: any, event: any) => {
            this.on(product_searched, {query: element.valueOf()})
        });

        // product list viewed
        window.addEventListener("scroll", (event) => {

            let product_list_elements = document.getElementsByClassName("idt-products-list");

            for (let i = 0; i < product_list_elements.length; i++) {
                let el: Element = product_list_elements[i];

                if (this.isInViewPoint(el)) {
                    let payload = el.getAttribute("data-idt-payload");
                    this.on(product_list_viewed, payload);
                }
            }
        });
    }

    /**
     * Page Load Event
     * Use this to track a user accessing a new page
     *
     * @param page - the page the user is viewing
     *
     * @returns Promise
     */
    async onPageLoaded(page: string): Promise<any> {
        return this.on(page_load, {page: page})
    }

    /**
     * Products Searched Event
     * Use this to track a user searching for a product
     *
     * @param keyword - the search phrase
     *
     * @returns Promise
     */
    async onProductSearched(keyword: string): Promise<any> {
        let payload: ProductsSearched = {query: keyword};
        return this.on(product_searched, payload)
    }

    /**
     * Product List Viewed Event
     * Use this to track a user viewing a list of products
     *
     * @param category - the category of the list eg home_page, recommendations, top_grossing et al
     * @param products - the list of products
     *
     * @returns Promise
     */
    async onProductListViewed(category: string, products: Product[] = []): Promise<any> {
        let payload: ProductListViewed = {category: category, products: products};

        return this.on(product_list_viewed, payload)
    }

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
    async onProductListFiltered(category: string, filters: Filter[], sorts: Sort[], products: Product[]): Promise<any> {
        let payload: ProductListFiltered = {
            category: category,
            filters: filters,
            sorts: sorts,
            products: products
        };
        return this.on(product_list_filtered, payload);
    }

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
    async onPromotionViewed(promotion_id: string, name: string, creative: string, position: string): Promise<any> {

        let payload: PromotionViewed = {promotion_id: promotion_id, creative: creative, name: name, position: position};

        return this.on(promotion_viewed, payload)
    }

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
    async onPromotionClicked(promotion_id: string, name: string, creative: string, position: string): Promise<any> {

        let payload: PromotionClicked = {promotion_id: promotion_id, creative: creative, name: name, position: position};

        return this.on(promotion_clicked, payload);
    }

    /**
     * Product Clicked Event
     * Use this to track a user clicking on a product
     *
     * @param product - the product that has been clicked on
     *
     * @returns Promise
     */
    async onProductClicked(product: Product): Promise<any> {

        return this.on(product_clicked, product);
    }

    /**
     * Product Viewed Event
     * Use this to track a user viewing a product
     *
     * @param product - the product being viewed
     *
     * @returns Promise
     */
    async onProductViewed(product: Product): Promise<any> {
        return this.on(product_viewed, product);
    }

    /**
     * Product Added To Cart Event
     * Use this to track a user adding a product to their cart
     *
     * @param product - the product being added to cart
     *
     * @returns Promise
     */
    async onProductAdded(product: ProductAdded): Promise<any> {
        return this.on(product_added, product)
    }

    /**
     * Product Removed From Cart Event
     * Use this to track a user removing a product from their shopping cart
     *
     * @param product - the product being removed from cart
     *
     * @returns Promise
     */
    async onProductRemoved(product: ProductRemoved): Promise<any> {
        return this.on(product_removed, product)
    }

    /**
     * Cart Viewed Event
     * Use this to track a user viewing their cart
     *
     * @param cart_id - the identifier for the cart
     * @param products - the list of products in the cart
     *
     * @returns Promise
     */
    async onCartViewed(cart_id: string, products: Product[]): Promise<any> {

        let payload: Cart = {cart_id: cart_id, products: products};

        return this.on(cart_viewed, payload);
    }

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
    async onCheckOutStarted(checkout:
                          {order_id: string, value: number, revenue: number, shipping: number,
                              tax: number, discount: number, currency: string},
                      products: Product[]): Promise<any> {

        let payload: CheckoutStarted = {
            order_id: checkout !== undefined && checkout.order_id !== undefined ? checkout.order_id : "",
            value: checkout !== undefined && checkout.value !== undefined ? checkout.value : 0,
            revenue: checkout !== undefined && checkout.revenue !== undefined ? checkout.revenue : 0,
            shipping: checkout !== undefined && checkout.shipping !== undefined ? checkout.shipping : 0,
            tax: checkout !== undefined && checkout.tax !== undefined ? checkout.tax : 0,
            discount: checkout !== undefined && checkout.discount !== undefined ? checkout.discount : 0,
            currency: checkout !== undefined && checkout.currency !== undefined ? checkout.currency : "",
            products: products
        };

        return this.on(checkout_started, payload);
    }

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
    async onCheckOutStepViewed(checkout_id: string, step: number, shipping_method: string, payment_method: string): Promise<any> {

        let payload: CheckoutStepViewed = {
            checkout_id: checkout_id,
            step: step,
            shipping_method: shipping_method,
            payment_method: payment_method
        };

        return this.on(checkout_step_viewed, payload);
    }

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
    async onCheckOutStepCompleted(checkout_id: string, step: number, shipping_method: string, payment_method: string): Promise<any> {

        let payload: CheckoutStepCompleted = {
            checkout_id: checkout_id,
            step: step,
            shipping_method: shipping_method,
            payment_method: payment_method
        };

        return this.on(checkout_step_completed, payload);
    }

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
    async onPaymentInfoEntered(order_id: string, checkout_id: string, step: number, shipping_method: string, payment_method: string): Promise<any> {

        let payload: PaymentInfoEntered = {
            order_id: order_id,
            checkout_id: checkout_id,
            step: step,
            shipping_method: shipping_method,
            payment_method: payment_method
        };

        return this.on(payment_info_entered, payload);
    }

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
    async onOrderCompleted(order:
                         {checkout_id: string, order_id: string,subtotal: number, total: number,
                             revenue: number, shipping: number, tax: number, discount: number, coupon: string,
                             currency: string},
                     products: Product[]): Promise<any> {

        let payload: OrderCompleted = {

            checkout_id: order !== undefined && order.checkout_id !== undefined ? order.checkout_id : "",
            order_id: order !== undefined && order.order_id !== undefined ? order.order_id : "",
            subtotal: order !== undefined && order.subtotal !== undefined ? order.subtotal : 0,
            total: order !== undefined && order.total !== undefined ? order.total : 0,
            revenue: order !== undefined && order.revenue !== undefined ? order.revenue : 0,
            shipping: order !== undefined && order.shipping !== undefined ? order.shipping : 0,
            tax: order !== undefined && order.tax !== undefined ? order.tax : 0,
            discount: order !== undefined && order.discount !== undefined ? order.discount : 0,
            coupon: order !== undefined && order.coupon !== undefined ? order.coupon : "",
            currency: order !== undefined && order.currency !== undefined ? order.currency : "",
            products: products
        };

        return this.on(order_completed, payload);
    }

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
    async onOrderUpdated(order:
                       {order_id: string, total: number, revenue: number, shipping: number,
                           tax: number, discount: number, coupon: string, currency: string},
                   products: Product[]): Promise<any> {

        let payload: OrdersUpdated = {
            order_id: order !== undefined && order.order_id !== undefined ? order.order_id : "",
            total: order !== undefined && order.total !== undefined ? order.total : 0,
            revenue: order !== undefined && order.revenue !== undefined ? order.revenue : 0,
            shipping: order !== undefined && order.shipping !== undefined ? order.shipping : 0,
            tax: order !== undefined && order.tax !== undefined ? order.tax : 0,
            discount: order !== undefined && order.discount !== undefined ? order.discount : 0,
            coupon: order !== undefined && order.coupon !== undefined ? order.coupon : "",
            currency: order !== undefined && order.currency !== undefined ? order.currency : "",
            products: products
        };

        return this.on(order_updated, payload);
    }

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
    async onOrderCancelled(order:
                         {order_id: string, total: number, revenue: number, shipping: number,
                             tax: number, discount: number, coupon: string, currency: string},
                     products: Product[]): Promise<any> {

        let payload: OrderCancelled = {
            order_id: order !== undefined && order.order_id !== undefined ? order.order_id : "",
            total: order !== undefined && order.total !== undefined ? order.total : 0,
            revenue: order !== undefined && order.revenue !== undefined ? order.revenue : 0,
            shipping: order !== undefined && order.shipping !== undefined ? order.shipping : 0,
            tax: order !== undefined && order.tax !== undefined ? order.tax : 0,
            discount: order !== undefined && order.discount !== undefined ? order.discount : 0,
            coupon: order !== undefined && order.coupon !== undefined ? order.coupon : "",
            currency: order !== undefined && order.currency !== undefined ? order.currency : "",
            products: products
        };

        return this.on(order_cancelled, payload)
    }

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
    async onOrderRefunded(order_id: string, total: number, currency: string, products: Product[]): Promise<any> {

        let payload: OrderRefunded = {
            order_id: order_id,
            total: total,
            currency: currency,
            products: products
        };

        return this.on(order_refunded, payload);
    }

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
    async onCouponEntered(order_id: string, cart_id: string, coupon: string): Promise<any> {

        let payload: CouponEntered = {
            order_id: order_id,
            cart_id: cart_id,
            coupon: coupon
        };

        return this.on(coupon_entered, payload);
    }

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
    async onCouponApplied(order_id: string, cart_id: string, coupon: string, discount: number): Promise<any> {

        let payload: CouponApplied = {
            order_id: order_id,
            cart_id: cart_id,
            coupon: coupon,
            discount: discount
        };

        return this.on(coupon_applied, payload);
    }

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
    async onCouponRemoved(order_id: string, cart_id: string, coupon: string, discount: number): Promise<any> {

        let payload: CouponRemoved = {
            order_id: order_id,
            cart_id: cart_id,
            coupon: coupon,
            discount: discount
        };

        return this.on(coupon_removed, payload);
    }

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
    async onCouponDenied(order_id: string, cart_id: string, coupon: string, reason: string): Promise<any> {

        let payload: CouponDenied = {
            order_id: order_id,
            cart_id: cart_id,
            coupon: coupon,
            reason: reason
        };

        return this.on(coupon_denied, payload)
    }

    /**
     * Product Added To Wish List Event
     * Use this to track a user adding a product to their wish list
     *
     * @param product - the list of products
     *
     * @returns Promise
     */
    async onProductAddedToWishList(product: ProductWishlist): Promise<any> {

        return this.on(product_added_to_wish_list, product);
    }

    /**
     * Product Removed From Wish List Event
     * Use this to track a user removing a product from their wish list
     *
     * @param product - the product removed
     *
     * @returns Promise
     */
    async onProductRemovedFromWishList(product: ProductWishlist): Promise<any> {
        return this.on(product_removed_from_wish_list, product)
    }

    /**
     * Wish List Product Added to Cart Event
     * Use this to track a user adding their wish list product to their cart
     *
     * @param product - the product added to cart
     *
     * @returns Promise
     */
    async onWishListProductAddedToCart(product: ProductWishlistToCart): Promise<any> {
        return this.on(wish_list_product_added_to_cart, product)
    }

    /**
     * Product Shared Event
     * Use this to track a user sharinf a product
     *
     * @param product - the product shared
     *
     * @returns Promise
     */
    async onProductShared(product: ProductShared): Promise<any> {
        return this.on(product_shared, product)
    }

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
    async onCartShared(cart_id: string, share_via: string, share_message: string, recipient: string, products: Product[]): Promise<any> {

        let payload: CartShared = {
            cart_id: cart_id,
            share_via: share_via,
            share_message: share_message,
            recipient: recipient,
            products: products
        };

        return this.on(cart_shared, payload);
    }

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
    async onProductReviewed(product_id: string, review_id: string, review_body: string, rating: number): Promise<any> {

        let payload: ProductReviewed = {
            product_id: product_id,
            review_id: review_id,
            review_body: review_body,
            rating: rating
        };

        return this.on(product_reviewed, payload)
    }

    /**
     * Login Event
     * Use to track a user logging in
     *
     * @param user - details of the user
     *
     * @returns Promise
     */
    async onLogIn(user: User): Promise<any> {
        return this.on(logged_in, user);
    }

    /**
     * Log Out Event
     * Use this to track a user logging out
     *
     * @param user_id - id of the user
     *
     * @returns Promise
     */
    async onLogOut(user_id: string): Promise<any> {
        return this.on(logged_out, {user_id: user_id})
    }

    /**
     * Sign Up Event
     * Use this to track a user signing up
     *
     * @param user - details of the user
     *
     * @returns Promise
     */
    async onSignUp(user: User): Promise<any> {
        return this.on(signed_up, user);
    }

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
    async onError(type: string, message: string, data: any): Promise<any> {

        let payload: EventError = {
            type: type,
            message: message,
            data: data
        };

        return this.on(error, payload);
    }

    /**
     * Custom Event
     * Use this to add any other event not included here
     *
     * @param event - the name of the event
     * @param payload - the payload/data for the event
     *
     * @returns Promise
     */
    onEvent(event:string, payload: any): Promise<any> {
        return this.on(event, payload)
    }

}