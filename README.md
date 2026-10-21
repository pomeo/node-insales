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
[editAccount](https://pomeo.github.io/node-insales/function/index.html#static-function-editAccount)  
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
[createFile](https://pomeo.github.io/node-insales/function/index.html#static-function-createFile)  
[getFile](https://pomeo.github.io/node-insales/function/index.html#static-function-getFile)  
[removeFile](https://pomeo.github.io/node-insales/function/index.html#static-function-removeFile)  
[uploadFile](https://pomeo.github.io/node-insales/function/index.html#static-function-uploadFile)  
#### JsTag
[createJsTag](https://pomeo.github.io/node-insales/function/index.html#static-function-createJsTag)  
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
[addRecurringFreeDays](https://pomeo.github.io/node-insales/function/index.html#static-function-addRecurringFreeDays)  
[createRecurring](https://pomeo.github.io/node-insales/function/index.html#static-function-createRecurring)  
[getRecurring](https://pomeo.github.io/node-insales/function/index.html#static-function-getRecurring)  
[removeRecurring](https://pomeo.github.io/node-insales/function/index.html#static-function-removeRecurring)  
#### Token
[token](https://pomeo.github.io/node-insales/function/index.html#static-function-token)
#### Domain
[createDomain](https://pomeo.github.io/node-insales/function/index.html#static-function-createDomain)  
[editDomain](https://pomeo.github.io/node-insales/function/index.html#static-function-editDomain)  
[getDomain](https://pomeo.github.io/node-insales/function/index.html#static-function-getDomain)  
[listDomain](https://pomeo.github.io/node-insales/function/index.html#static-function-listDomain)  
[removeDomain](https://pomeo.github.io/node-insales/function/index.html#static-function-removeDomain)  
#### User Task
[createUserTask](https://pomeo.github.io/node-insales/function/index.html#static-function-createUserTask)  
[editUserTask](https://pomeo.github.io/node-insales/function/index.html#static-function-editUserTask)  
[getUserTask](https://pomeo.github.io/node-insales/function/index.html#static-function-getUserTask)  
[listUserTask](https://pomeo.github.io/node-insales/function/index.html#static-function-listUserTask)  
[removeUserTask](https://pomeo.github.io/node-insales/function/index.html#static-function-removeUserTask)  
#### Marketplace
[createMarketplace](https://pomeo.github.io/node-insales/function/index.html#static-function-createMarketplace)  
[editMarketplace](https://pomeo.github.io/node-insales/function/index.html#static-function-editMarketplace)  
[getMarketplace](https://pomeo.github.io/node-insales/function/index.html#static-function-getMarketplace)  
[listMarketplace](https://pomeo.github.io/node-insales/function/index.html#static-function-listMarketplace)  
[removeMarketplace](https://pomeo.github.io/node-insales/function/index.html#static-function-removeMarketplace)  
#### Application Action
[createApplicationAction](https://pomeo.github.io/node-insales/function/index.html#static-function-createApplicationAction)  
[editApplicationAction](https://pomeo.github.io/node-insales/function/index.html#static-function-editApplicationAction)  
[getApplicationAction](https://pomeo.github.io/node-insales/function/index.html#static-function-getApplicationAction)  
[listApplicationAction](https://pomeo.github.io/node-insales/function/index.html#static-function-listApplicationAction)  
[removeApplicationAction](https://pomeo.github.io/node-insales/function/index.html#static-function-removeApplicationAction)  
#### Application Widget
[createApplicationWidget](https://pomeo.github.io/node-insales/function/index.html#static-function-createApplicationWidget)  
[editApplicationWidget](https://pomeo.github.io/node-insales/function/index.html#static-function-editApplicationWidget)  
[getApplicationWidget](https://pomeo.github.io/node-insales/function/index.html#static-function-getApplicationWidget)  
[listApplicationWidget](https://pomeo.github.io/node-insales/function/index.html#static-function-listApplicationWidget)  
[removeApplicationWidget](https://pomeo.github.io/node-insales/function/index.html#static-function-removeApplicationWidget)  
#### Webhook
[createWebhook](https://pomeo.github.io/node-insales/function/index.html#static-function-createWebhook)  
[editWebhook](https://pomeo.github.io/node-insales/function/index.html#static-function-editWebhook)  
[getWebhook](https://pomeo.github.io/node-insales/function/index.html#static-function-getWebhook)  
[listWebhook](https://pomeo.github.io/node-insales/function/index.html#static-function-listWebhook)  
[removeWebhook](https://pomeo.github.io/node-insales/function/index.html#static-function-removeWebhook)  
#### OAuth App
[createOAuthApp](https://pomeo.github.io/node-insales/function/index.html#static-function-createOAuthApp)  
[editOAuthApp](https://pomeo.github.io/node-insales/function/index.html#static-function-editOAuthApp)  
[getOAuthApp](https://pomeo.github.io/node-insales/function/index.html#static-function-getOAuthApp)  
[listOAuthApp](https://pomeo.github.io/node-insales/function/index.html#static-function-listOAuthApp)  
[removeOAuthApp](https://pomeo.github.io/node-insales/function/index.html#static-function-removeOAuthApp)  
#### Provider Token
[createProviderToken](https://pomeo.github.io/node-insales/function/index.html#static-function-createProviderToken)  

## TODO
Add other APIs
