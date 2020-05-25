# Insense E-Commerce Clickstream Analytics

## Introduction

Welcome to Insense Clickstream Analysis JavaScript SDK. 

Clickstream data allows you to see what actions customers are taking on your website. 
Given how commerce is shifting more and more online, this data is becoming essential for your business to 
stay competitive.

## Why this SDK ? 

This JavaScript SDK makes it easy for you to track the key events of importance to your business.
The collected clickstream data is submitted to your Insense portal for analysis and machine learning.

## Why Should I Track ? 

The data collected by tracking is rich in insights that can turn your business around. If using the Insense Tracking SDKs, the data is submitted to the data lake tied to your account details on Insense. 

At Insense, we call this "Clickstream data". Clickstream data allows you to see what actions customers are taking on your website. Given how commerce is shifting more and more online, this data is becoming essential for your business to stay competitive.

Insense uses the clickstram data to show the following insights:

- Traffic Analysis: 
    - get to know where traffic is coming from, 
    - popular key words, 
    - conversion rates from different sites, 
    - cohort analysis, 
    - marketing campaigns performance
- Sales Funnel analysis: 
    - understand drop off percentage or conversion at every stage, 
    - identify general health and which stages contribute to drop offs, 
    - identify reasons for drop offs
- Cart abandonment and recovery: 
    - understand cart abandonment metrics and possible reasons/causes
- Personalization: 
    - personalize products shown to the user based on their viewing, search and ordering history. 
    - Great for recommendations. 
- Tracking Experiments (A/B Testing): 
    - Test every modification to a page with a segment of users to understand if it provides an improvement or not before rolling out the update to all users
- Identity Stitching: 
    - Be able to identify all users whether logged in or not. 

## What Events Should I Track ? 

The best approach towards specifying out analytics is to identify what exactly you want to learn (or conversely, what you don’t know) about your business or product. Asking these questions encourages a more targeted and structured approach to determining which events to include.
 
A common starting place is to look at your funnel. What are the key steps? These key steps are the discrete steps a user takes towards conversion. It might vary from business to business but generally, in an e-commerce platform, it will revolve around the following:

- When a user views a product
- When a user adds the product to their shopping cart
- When a user initiates the checkout process
- When the user completes and submits the order
 
Of course, every business is different! Figure out which events are critical pieces of your funnel and start there.


## Code Examples

### Include the files

You first need to include the scripts in order. 
The library only depends on axios. No jquery or any other library is needed.

```html
<script type="text/javascript" src="/path/to/axios.min.js"></script>
<script type="text/javascript" src="/path/to/insense/analytics.js"></script>
```

### Initialize the analytics library

```javascript
let user_id = someFunctionToGetLoggedInUser(); // get id of a logged in user, should be empty string if no user is logged in

let access_key = "ABCDEFGHYUIP"; // access key (from your Insense portal) 

idt_analytics = new IDTEcommerceAnalytics(access_key, user_id);
```
If it doesn't work, confirm that you have whitelisted your domain in the portal. By defauly,. all domains are blacklisted

### Sample code to track a user 
```javascript

//1.  page load event
window.addEventListener("load", () => {
    let page = document.body.getAttribute("data-idt-page");
    idt_analytics.onPageLoad(page);
});

//2. product list viewed in home page
window.addEventListener("scroll", (event) => {

    let element = document.getElementById("home_page_products");

    if (idt_analytics.isInViewPoint(element)) {
        let category = "home_page_products";
        let products = [];// set this array wit list of products in view
        idt_analytics.onProductListViewed(category, products)
    }
});

// 3. Promotion clicked
document.getElementById("top_banner").addEventListener("click", (event) => {
    let promotion_id = ""; // set the promotion id
    let promotion_name = ""; // set the promotion name
    let creative = ""; // set the creative
    let position = ""; // set the position
    idt_analytics.onPromotionClicked(promotion_id, promotion_name, creative, position)
});
```

