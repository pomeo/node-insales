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
  console.info(output.response.headers['api-usage-limit'].split('/')[0]); // 1
})
```

## Methods

[getAccount](https://pomeo.github.io/node-insales/function/index.html#static-function-getAccount)  
[createCharge](https://pomeo.github.io/node-insales/function/index.html#static-function-createCharge)  
[getCharge](https://pomeo.github.io/node-insales/function/index.html#static-function-getCharge)  
[listCharge](https://pomeo.github.io/node-insales/function/index.html#static-function-listCharge)  
[removeCharge](https://pomeo.github.io/node-insales/function/index.html#static-function-removeCharge)  
[getCollection](https://pomeo.github.io/node-insales/function/index.html#static-function-getCollection)  
[listCollection](https://pomeo.github.io/node-insales/function/index.html#static-function-listCollection)  
[createCoupon](https://pomeo.github.io/node-insales/function/index.html#static-function-createCoupon)  
[editCoupon](https://pomeo.github.io/node-insales/function/index.html#static-function-editCoupon)  
[getCoupon](https://pomeo.github.io/node-insales/function/index.html#static-function-getCoupon)  
[listCoupon](https://pomeo.github.io/node-insales/function/index.html#static-function-listCoupon)  
[removeCoupon](https://pomeo.github.io/node-insales/function/index.html#static-function-removeCoupon)  
[createFile](https://pomeo.github.io/node-insales/function/index.html#static-function-createFile)  
[getFile](https://pomeo.github.io/node-insales/function/index.html#static-function-getFile)  
[removeFile](https://pomeo.github.io/node-insales/function/index.html#static-function-removeFile)  
[uploadFile](https://pomeo.github.io/node-insales/function/index.html#static-function-uploadFile)  
[createJsTag](https://pomeo.github.io/node-insales/function/index.html#static-function-createJsTag)  
[createProduct](https://pomeo.github.io/node-insales/function/index.html#static-function-createProduct)  
[getProduct](https://pomeo.github.io/node-insales/function/index.html#static-function-getProduct)  
[listProduct](https://pomeo.github.io/node-insales/function/index.html#static-function-listProduct)  
[createRecurring](https://pomeo.github.io/node-insales/function/index.html#static-function-createRecurring)  
[getRecurring](https://pomeo.github.io/node-insales/function/index.html#static-function-getRecurring)  
[removeRecurring](https://pomeo.github.io/node-insales/function/index.html#static-function-removeRecurring)  
[token](https://pomeo.github.io/node-insales/function/index.html#static-function-token)

## TODO
Add other APIs
