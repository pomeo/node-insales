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
[createRecurring](https://pomeo.github.io/node-insales/function/index.html#static-function-createRecurring)  
[getRecurring](https://pomeo.github.io/node-insales/function/index.html#static-function-getRecurring)  
[removeRecurring](https://pomeo.github.io/node-insales/function/index.html#static-function-removeRecurring)  
#### Token
[token](https://pomeo.github.io/node-insales/function/index.html#static-function-token)
#### Client
[createClient](https://pomeo.github.io/node-insales/function/index.html#static-function-createClient)  
[editClient](https://pomeo.github.io/node-insales/function/index.html#static-function-editClient)  
[getClient](https://pomeo.github.io/node-insales/function/index.html#static-function-getClient)  
[listClient](https://pomeo.github.io/node-insales/function/index.html#static-function-listClient)  
[removeClient](https://pomeo.github.io/node-insales/function/index.html#static-function-removeClient)  
#### Client Group
[createClientGroup](https://pomeo.github.io/node-insales/function/index.html#static-function-createClientGroup)  
[editClientGroup](https://pomeo.github.io/node-insales/function/index.html#static-function-editClientGroup)  
[getClientGroup](https://pomeo.github.io/node-insales/function/index.html#static-function-getClientGroup)  
[listClientGroup](https://pomeo.github.io/node-insales/function/index.html#static-function-listClientGroup)  
[removeClientGroup](https://pomeo.github.io/node-insales/function/index.html#static-function-removeClientGroup)  
#### Bonus Transaction
[createBonusTransaction](https://pomeo.github.io/node-insales/function/index.html#static-function-createBonusTransaction)  
[getBonusTransaction](https://pomeo.github.io/node-insales/function/index.html#static-function-getBonusTransaction)  
[listBonusTransaction](https://pomeo.github.io/node-insales/function/index.html#static-function-listBonusTransaction)  
[listClientBonusTransaction](https://pomeo.github.io/node-insales/function/index.html#static-function-listClientBonusTransaction)  
#### Field
[createField](https://pomeo.github.io/node-insales/function/index.html#static-function-createField)  
[editField](https://pomeo.github.io/node-insales/function/index.html#static-function-editField)  
[getField](https://pomeo.github.io/node-insales/function/index.html#static-function-getField)  
[listField](https://pomeo.github.io/node-insales/function/index.html#static-function-listField)  
[removeField](https://pomeo.github.io/node-insales/function/index.html#static-function-removeField)  

## TODO
Add other APIs
