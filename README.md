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
[createCollection](https://pomeo.github.io/node-insales/function/index.html#static-function-createCollection)  
[editCollection](https://pomeo.github.io/node-insales/function/index.html#static-function-editCollection)  
[getCollection](https://pomeo.github.io/node-insales/function/index.html#static-function-getCollection)  
[listCollection](https://pomeo.github.io/node-insales/function/index.html#static-function-listCollection)  
[removeCollection](https://pomeo.github.io/node-insales/function/index.html#static-function-removeCollection)  
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
[countProduct](https://pomeo.github.io/node-insales/function/index.html#static-function-countProduct)  
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
#### Image
[createImage](https://pomeo.github.io/node-insales/function/index.html#static-function-createImage)  
[editImage](https://pomeo.github.io/node-insales/function/index.html#static-function-editImage)  
[getImage](https://pomeo.github.io/node-insales/function/index.html#static-function-getImage)  
[listImage](https://pomeo.github.io/node-insales/function/index.html#static-function-listImage)  
[removeImage](https://pomeo.github.io/node-insales/function/index.html#static-function-removeImage)  
#### Variant
[createVariant](https://pomeo.github.io/node-insales/function/index.html#static-function-createVariant)  
[editVariant](https://pomeo.github.io/node-insales/function/index.html#static-function-editVariant)  
[editVariantGroup](https://pomeo.github.io/node-insales/function/index.html#static-function-editVariantGroup)  
[getVariant](https://pomeo.github.io/node-insales/function/index.html#static-function-getVariant)  
[listVariant](https://pomeo.github.io/node-insales/function/index.html#static-function-listVariant)  
[removeVariant](https://pomeo.github.io/node-insales/function/index.html#static-function-removeVariant)  
#### Category
[createCategory](https://pomeo.github.io/node-insales/function/index.html#static-function-createCategory)  
[editCategory](https://pomeo.github.io/node-insales/function/index.html#static-function-editCategory)  
[getCategory](https://pomeo.github.io/node-insales/function/index.html#static-function-getCategory)  
[listCategory](https://pomeo.github.io/node-insales/function/index.html#static-function-listCategory)  
[removeCategory](https://pomeo.github.io/node-insales/function/index.html#static-function-removeCategory)  
#### Property
[createProperty](https://pomeo.github.io/node-insales/function/index.html#static-function-createProperty)  
[editProperty](https://pomeo.github.io/node-insales/function/index.html#static-function-editProperty)  
[getProperty](https://pomeo.github.io/node-insales/function/index.html#static-function-getProperty)  
[listProperty](https://pomeo.github.io/node-insales/function/index.html#static-function-listProperty)  
[removeProperty](https://pomeo.github.io/node-insales/function/index.html#static-function-removeProperty)  
#### Characteristic
[createCharacteristic](https://pomeo.github.io/node-insales/function/index.html#static-function-createCharacteristic)  
[editCharacteristic](https://pomeo.github.io/node-insales/function/index.html#static-function-editCharacteristic)  
[getCharacteristic](https://pomeo.github.io/node-insales/function/index.html#static-function-getCharacteristic)  
[listCharacteristic](https://pomeo.github.io/node-insales/function/index.html#static-function-listCharacteristic)  
[removeCharacteristic](https://pomeo.github.io/node-insales/function/index.html#static-function-removeCharacteristic)  
#### Option Name
[createOptionName](https://pomeo.github.io/node-insales/function/index.html#static-function-createOptionName)  
[editOptionName](https://pomeo.github.io/node-insales/function/index.html#static-function-editOptionName)  
[getOptionName](https://pomeo.github.io/node-insales/function/index.html#static-function-getOptionName)  
[listOptionName](https://pomeo.github.io/node-insales/function/index.html#static-function-listOptionName)  
[removeOptionName](https://pomeo.github.io/node-insales/function/index.html#static-function-removeOptionName)  
#### Option Value
[createOptionValue](https://pomeo.github.io/node-insales/function/index.html#static-function-createOptionValue)  
[editOptionValue](https://pomeo.github.io/node-insales/function/index.html#static-function-editOptionValue)  
[getOptionValue](https://pomeo.github.io/node-insales/function/index.html#static-function-getOptionValue)  
[getOptionValueDestroyStatus](https://pomeo.github.io/node-insales/function/index.html#static-function-getOptionValueDestroyStatus)  
[listAllOptionValue](https://pomeo.github.io/node-insales/function/index.html#static-function-listAllOptionValue)  
[listOptionValue](https://pomeo.github.io/node-insales/function/index.html#static-function-listOptionValue)  
[removeOptionValue](https://pomeo.github.io/node-insales/function/index.html#static-function-removeOptionValue)  
[removeOptionValueImage](https://pomeo.github.io/node-insales/function/index.html#static-function-removeOptionValueImage)  
#### Similar
[createSimilar](https://pomeo.github.io/node-insales/function/index.html#static-function-createSimilar)  
[listSimilar](https://pomeo.github.io/node-insales/function/index.html#static-function-listSimilar)  
[removeSimilar](https://pomeo.github.io/node-insales/function/index.html#static-function-removeSimilar)  
#### Supplementary
[createSupplementary](https://pomeo.github.io/node-insales/function/index.html#static-function-createSupplementary)  
[listSupplementary](https://pomeo.github.io/node-insales/function/index.html#static-function-listSupplementary)  
[removeSupplementary](https://pomeo.github.io/node-insales/function/index.html#static-function-removeSupplementary)  
#### Accessory
[createAccessory](https://pomeo.github.io/node-insales/function/index.html#static-function-createAccessory)  
[editAccessory](https://pomeo.github.io/node-insales/function/index.html#static-function-editAccessory)  
[getAccessory](https://pomeo.github.io/node-insales/function/index.html#static-function-getAccessory)  
[listAccessory](https://pomeo.github.io/node-insales/function/index.html#static-function-listAccessory)  
[removeAccessory](https://pomeo.github.io/node-insales/function/index.html#static-function-removeAccessory)  
#### Accessory Value
[createAccessoryValue](https://pomeo.github.io/node-insales/function/index.html#static-function-createAccessoryValue)  
[editAccessoryValue](https://pomeo.github.io/node-insales/function/index.html#static-function-editAccessoryValue)  
[getAccessoryValue](https://pomeo.github.io/node-insales/function/index.html#static-function-getAccessoryValue)  
[listAccessoryValue](https://pomeo.github.io/node-insales/function/index.html#static-function-listAccessoryValue)  
[removeAccessoryValue](https://pomeo.github.io/node-insales/function/index.html#static-function-removeAccessoryValue)  
[createAccessoryLink](https://pomeo.github.io/node-insales/function/index.html#static-function-createAccessoryLink)  
[listAccessoryLink](https://pomeo.github.io/node-insales/function/index.html#static-function-listAccessoryLink)  
[removeAccessoryLink](https://pomeo.github.io/node-insales/function/index.html#static-function-removeAccessoryLink)  
#### Collect
[createCollect](https://pomeo.github.io/node-insales/function/index.html#static-function-createCollect)  
[editCollect](https://pomeo.github.io/node-insales/function/index.html#static-function-editCollect)  
[listCollect](https://pomeo.github.io/node-insales/function/index.html#static-function-listCollect)  
[removeCollect](https://pomeo.github.io/node-insales/function/index.html#static-function-removeCollect)  
#### Collection Filter
[createCollectionFilter](https://pomeo.github.io/node-insales/function/index.html#static-function-createCollectionFilter)  
[editCollectionFilter](https://pomeo.github.io/node-insales/function/index.html#static-function-editCollectionFilter)  
[getCollectionFilter](https://pomeo.github.io/node-insales/function/index.html#static-function-getCollectionFilter)  
[listCollectionFilter](https://pomeo.github.io/node-insales/function/index.html#static-function-listCollectionFilter)  
[removeCollectionFilter](https://pomeo.github.io/node-insales/function/index.html#static-function-removeCollectionFilter)  
#### Collection Field
[createCollectionField](https://pomeo.github.io/node-insales/function/index.html#static-function-createCollectionField)  
[editCollectionField](https://pomeo.github.io/node-insales/function/index.html#static-function-editCollectionField)  
[getCollectionField](https://pomeo.github.io/node-insales/function/index.html#static-function-getCollectionField)  
[listCollectionField](https://pomeo.github.io/node-insales/function/index.html#static-function-listCollectionField)  
[removeCollectionField](https://pomeo.github.io/node-insales/function/index.html#static-function-removeCollectionField)  
#### Collection Field Value
[editCollectionFieldValue](https://pomeo.github.io/node-insales/function/index.html#static-function-editCollectionFieldValue)  
[getCollectionFieldValue](https://pomeo.github.io/node-insales/function/index.html#static-function-getCollectionFieldValue)  
[listCollectionFieldValue](https://pomeo.github.io/node-insales/function/index.html#static-function-listCollectionFieldValue)  
#### Product Field
[createProductField](https://pomeo.github.io/node-insales/function/index.html#static-function-createProductField)  
[editProductField](https://pomeo.github.io/node-insales/function/index.html#static-function-editProductField)  
[getProductField](https://pomeo.github.io/node-insales/function/index.html#static-function-getProductField)  
[listProductField](https://pomeo.github.io/node-insales/function/index.html#static-function-listProductField)  
[removeProductField](https://pomeo.github.io/node-insales/function/index.html#static-function-removeProductField)  
#### Product Field Value
[createProductFieldValue](https://pomeo.github.io/node-insales/function/index.html#static-function-createProductFieldValue)  
[editProductFieldValue](https://pomeo.github.io/node-insales/function/index.html#static-function-editProductFieldValue)  
[getProductFieldValue](https://pomeo.github.io/node-insales/function/index.html#static-function-getProductFieldValue)  
[listProductFieldValue](https://pomeo.github.io/node-insales/function/index.html#static-function-listProductFieldValue)  
[removeProductFieldValue](https://pomeo.github.io/node-insales/function/index.html#static-function-removeProductFieldValue)  
#### Variant Field
[createVariantField](https://pomeo.github.io/node-insales/function/index.html#static-function-createVariantField)  
[editVariantField](https://pomeo.github.io/node-insales/function/index.html#static-function-editVariantField)  
[getVariantField](https://pomeo.github.io/node-insales/function/index.html#static-function-getVariantField)  
[listVariantField](https://pomeo.github.io/node-insales/function/index.html#static-function-listVariantField)  
[removeVariantField](https://pomeo.github.io/node-insales/function/index.html#static-function-removeVariantField)  
#### Variant Field Value
[createVariantFieldValue](https://pomeo.github.io/node-insales/function/index.html#static-function-createVariantFieldValue)  
[editVariantFieldValue](https://pomeo.github.io/node-insales/function/index.html#static-function-editVariantFieldValue)  
[getVariantFieldValue](https://pomeo.github.io/node-insales/function/index.html#static-function-getVariantFieldValue)  
[listVariantFieldValue](https://pomeo.github.io/node-insales/function/index.html#static-function-listVariantFieldValue)  
[removeVariantFieldValue](https://pomeo.github.io/node-insales/function/index.html#static-function-removeVariantFieldValue)  
#### Warehouse
[createWarehouse](https://pomeo.github.io/node-insales/function/index.html#static-function-createWarehouse)  
[editWarehouse](https://pomeo.github.io/node-insales/function/index.html#static-function-editWarehouse)  
[getWarehouse](https://pomeo.github.io/node-insales/function/index.html#static-function-getWarehouse)  
[listWarehouse](https://pomeo.github.io/node-insales/function/index.html#static-function-listWarehouse)  
[removeWarehouse](https://pomeo.github.io/node-insales/function/index.html#static-function-removeWarehouse)  
#### Stock Currency
[createStockCurrency](https://pomeo.github.io/node-insales/function/index.html#static-function-createStockCurrency)  
[editStockCurrency](https://pomeo.github.io/node-insales/function/index.html#static-function-editStockCurrency)  
[getStockCurrency](https://pomeo.github.io/node-insales/function/index.html#static-function-getStockCurrency)  
[listStockCurrency](https://pomeo.github.io/node-insales/function/index.html#static-function-listStockCurrency)  
#### Unit
[listUnit](https://pomeo.github.io/node-insales/function/index.html#static-function-listUnit)  
#### Sales Channel
[createSalesChannel](https://pomeo.github.io/node-insales/function/index.html#static-function-createSalesChannel)  
[getSalesChannel](https://pomeo.github.io/node-insales/function/index.html#static-function-getSalesChannel)  
[listSalesChannel](https://pomeo.github.io/node-insales/function/index.html#static-function-listSalesChannel)  
[removeSalesChannel](https://pomeo.github.io/node-insales/function/index.html#static-function-removeSalesChannel)  
#### Order
[countOrder](https://pomeo.github.io/node-insales/function/index.html#static-function-countOrder)  
[createOrder](https://pomeo.github.io/node-insales/function/index.html#static-function-createOrder)  
[editOrder](https://pomeo.github.io/node-insales/function/index.html#static-function-editOrder)  
[getOrder](https://pomeo.github.io/node-insales/function/index.html#static-function-getOrder)  
[listOrder](https://pomeo.github.io/node-insales/function/index.html#static-function-listOrder)  
#### Custom Status
[createCustomStatus](https://pomeo.github.io/node-insales/function/index.html#static-function-createCustomStatus)  
[editCustomStatus](https://pomeo.github.io/node-insales/function/index.html#static-function-editCustomStatus)  
[getCustomStatus](https://pomeo.github.io/node-insales/function/index.html#static-function-getCustomStatus)  
[listCustomStatus](https://pomeo.github.io/node-insales/function/index.html#static-function-listCustomStatus)  
[removeCustomStatus](https://pomeo.github.io/node-insales/function/index.html#static-function-removeCustomStatus)  
#### External Discount
[createExternalDiscount](https://pomeo.github.io/node-insales/function/index.html#static-function-createExternalDiscount)  
[editExternalDiscount](https://pomeo.github.io/node-insales/function/index.html#static-function-editExternalDiscount)  
[getExternalDiscount](https://pomeo.github.io/node-insales/function/index.html#static-function-getExternalDiscount)  
[listExternalDiscount](https://pomeo.github.io/node-insales/function/index.html#static-function-listExternalDiscount)  
[removeExternalDiscount](https://pomeo.github.io/node-insales/function/index.html#static-function-removeExternalDiscount)  
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
