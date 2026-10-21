InSales
============
[![Build Status](https://api.travis-ci.org/pomeo/node-insales.png)](http://travis-ci.org/pomeo/node-insales)
[![Coverage Status](https://img.shields.io/coveralls/pomeo/node-insales.svg)](https://coveralls.io/r/pomeo/node-insales)
[![Dependencies](https://david-dm.org/pomeo/node-insales.png)](https://david-dm.org/pomeo/node-insales)
[![NPM version](https://badge.fury.io/js/insales.svg)](http://badge.fury.io/js/insales)
[![ESDoc](https://pomeo.github.io/node-insales/badge.svg)](https://pomeo.github.io/node-insales)

InSales module that allows you to communicate with the [InSales API](http://api.insales.ru) from node.js

## Installation

```
npm install insales --save
```

## Usage

```js
// Import a module
import InSales from 'insales';
// Create an instance with your API credentials
const insales = InSales({
  id: 'your app id',
  secret: 'your app secret'
});

// Get things done
insales.getAccount({
  token: 'token for shop',
  url: 'shop-test.myinsales.ru'
}).then(output => {
  console.info(output.data);
}).catch(err => {
  console.error(err);
});
```

## API limits

```js
insales.getAccount({
  token: 'token for shop',
  url: 'shop-test.myinsales.ru'
}).then(output => {
  console.info(output.callLimits); //  { remaining: 498, current: 2, max: 500 } }
})
```

## Methods
#### Account
[getAccount](https://pomeo.github.io/node-insales/function/index.html#static-function-getAccount)  
#### Charge
[createCharge](https://pomeo.github.io/node-insales/function/index.html#static-function-createCharge)  
[getCharge](https://pomeo.github.io/node-insales/function/index.html#static-function-getCharge)  
[listCharge](https://pomeo.github.io/node-insales/function/index.html#static-function-listCharge)  
[removeCharge](https://pomeo.github.io/node-insales/function/index.html#static-function-removeCharge)  
#### Collection
[getCollection](https://pomeo.github.io/node-insales/function/index.html#static-function-getCollection)  
[listCollection](https://pomeo.github.io/node-insales/function/index.html#static-function-listCollection)  
#### Coupon
[createCoupon](https://pomeo.github.io/node-insales/function/index.html#static-function-createCoupon)  
[editCoupon](https://pomeo.github.io/node-insales/function/index.html#static-function-editCoupon)  
[getCoupon](https://pomeo.github.io/node-insales/function/index.html#static-function-getCoupon)  
[listCoupon](https://pomeo.github.io/node-insales/function/index.html#static-function-listCoupon)  
[removeCoupon](https://pomeo.github.io/node-insales/function/index.html#static-function-removeCoupon)  
#### File
[getFile](https://pomeo.github.io/node-insales/function/index.html#static-function-getFile)  
[listFile](https://pomeo.github.io/node-insales/function/index.html#static-function-listFile)  
[removeFile](https://pomeo.github.io/node-insales/function/index.html#static-function-removeFile)  
[uploadFile](https://pomeo.github.io/node-insales/function/index.html#static-function-uploadFile)  
#### JsTag
[createJsTag](https://pomeo.github.io/node-insales/function/index.html#static-function-createJsTag)  
[editJsTag](https://pomeo.github.io/node-insales/function/index.html#static-function-editJsTag)  
[getJsTag](https://pomeo.github.io/node-insales/function/index.html#static-function-getJsTag)  
[listJsTag](https://pomeo.github.io/node-insales/function/index.html#static-function-listJsTag)  
[removeJsTag](https://pomeo.github.io/node-insales/function/index.html#static-function-removeJsTag)  
#### Price Kind
[createPriceKind](https://pomeo.github.io/node-insales/function/index.html#static-function-createPriceKind)  
[editPriceKind](https://pomeo.github.io/node-insales/function/index.html#static-function-editPriceKind)  
[getPriceKind](https://pomeo.github.io/node-insales/function/index.html#static-function-getPriceKind)  
[listPriceKind](https://pomeo.github.io/node-insales/function/index.html#static-function-listPriceKind)  
[removePriceKind](https://pomeo.github.io/node-insales/function/index.html#static-function-removePriceKind)  
#### Product
[createProduct](https://pomeo.github.io/node-insales/function/index.html#static-function-createProduct)  
[getProduct](https://pomeo.github.io/node-insales/function/index.html#static-function-getProduct)  
[listProduct](https://pomeo.github.io/node-insales/function/index.html#static-function-listProduct)  
#### Recurring
[createRecurring](https://pomeo.github.io/node-insales/function/index.html#static-function-createRecurring)  
[getRecurring](https://pomeo.github.io/node-insales/function/index.html#static-function-getRecurring)  
[removeRecurring](https://pomeo.github.io/node-insales/function/index.html#static-function-removeRecurring)  
#### Token
[token](https://pomeo.github.io/node-insales/function/index.html#static-function-token)
#### Blog
[createBlog](https://pomeo.github.io/node-insales/function/index.html#static-function-createBlog)  
[editBlog](https://pomeo.github.io/node-insales/function/index.html#static-function-editBlog)  
[getBlog](https://pomeo.github.io/node-insales/function/index.html#static-function-getBlog)  
[listBlog](https://pomeo.github.io/node-insales/function/index.html#static-function-listBlog)  
[removeBlog](https://pomeo.github.io/node-insales/function/index.html#static-function-removeBlog)  
#### Article
[createArticle](https://pomeo.github.io/node-insales/function/index.html#static-function-createArticle)  
[editArticle](https://pomeo.github.io/node-insales/function/index.html#static-function-editArticle)  
[getArticle](https://pomeo.github.io/node-insales/function/index.html#static-function-getArticle)  
[listArticle](https://pomeo.github.io/node-insales/function/index.html#static-function-listArticle)  
[removeArticle](https://pomeo.github.io/node-insales/function/index.html#static-function-removeArticle)  
#### Page
[createPage](https://pomeo.github.io/node-insales/function/index.html#static-function-createPage)  
[editPage](https://pomeo.github.io/node-insales/function/index.html#static-function-editPage)  
[getPage](https://pomeo.github.io/node-insales/function/index.html#static-function-getPage)  
[listPage](https://pomeo.github.io/node-insales/function/index.html#static-function-listPage)  
[removePage](https://pomeo.github.io/node-insales/function/index.html#static-function-removePage)  
#### Menu
[createMenu](https://pomeo.github.io/node-insales/function/index.html#static-function-createMenu)  
[editMenu](https://pomeo.github.io/node-insales/function/index.html#static-function-editMenu)  
[getMenu](https://pomeo.github.io/node-insales/function/index.html#static-function-getMenu)  
[listMenu](https://pomeo.github.io/node-insales/function/index.html#static-function-listMenu)  
[removeMenu](https://pomeo.github.io/node-insales/function/index.html#static-function-removeMenu)  
#### Menu Item
[createMenuItem](https://pomeo.github.io/node-insales/function/index.html#static-function-createMenuItem)  
[editMenuItem](https://pomeo.github.io/node-insales/function/index.html#static-function-editMenuItem)  
[getMenuItem](https://pomeo.github.io/node-insales/function/index.html#static-function-getMenuItem)  
[listMenuItem](https://pomeo.github.io/node-insales/function/index.html#static-function-listMenuItem)  
[removeMenuItem](https://pomeo.github.io/node-insales/function/index.html#static-function-removeMenuItem)  
#### Redirect
[createRedirect](https://pomeo.github.io/node-insales/function/index.html#static-function-createRedirect)  
[getRedirect](https://pomeo.github.io/node-insales/function/index.html#static-function-getRedirect)  
[listRedirect](https://pomeo.github.io/node-insales/function/index.html#static-function-listRedirect)  
[removeRedirect](https://pomeo.github.io/node-insales/function/index.html#static-function-removeRedirect)  
#### Review
[createReview](https://pomeo.github.io/node-insales/function/index.html#static-function-createReview)  
[editReview](https://pomeo.github.io/node-insales/function/index.html#static-function-editReview)  
[getReview](https://pomeo.github.io/node-insales/function/index.html#static-function-getReview)  
[listReview](https://pomeo.github.io/node-insales/function/index.html#static-function-listReview)  
[removeReview](https://pomeo.github.io/node-insales/function/index.html#static-function-removeReview)  

## TODO
Add other APIs
