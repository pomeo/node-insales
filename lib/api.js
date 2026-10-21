import   opts               from './options';
import { token }            from './api/token';
import { getAccount }       from './api/account';
import { getProduct,
         createProduct,
         editProduct,
         removeProduct,
         listProduct }      from './api/product';
import { getCollection,
         listCollection }   from './api/collection';
import { listFile,
         removeFile,
         uploadFile }       from './api/file';
import { listAsset,
         getAsset,
         getAssetRaw,
         editAsset,
         renameAsset,
         removeAsset,
         uploadAsset }      from './api/asset';
import { listWidgetTypes,
         getWidgetType,
         editWidgetType,
         uploadWidgetType,
         removeWidgetType } from './api/widget_types';
import { createJsTag }      from './api/jstag';
import { listThemes }       from './api/themes';
import { getRecurring,
         createRecurring,
         changeRecurring,
         removeRecurring }  from './api/recurringcharge';
import { getCharge,
         createCharge,
         declineCharge,
         listCharge }       from './api/charge';
import { getCoupon,
         createCoupon,
         removeCoupon,
         listCoupon,
         editCoupon }       from './api/coupon';
import { getPriceKind,
         createPriceKind,
         removePriceKind,
         listPriceKind,
         editPriceKind }    from './api/pricekind';
import { listSimilar,
         createSimilar,
         removeSimilar }    from './api/similar';
import { listSupplementary,
         createSupplementary,
         removeSupplementary } from './api/supplementary';
import { getAccessory,
         listAccessory,
         createAccessory,
         removeAccessory,
         editAccessory }    from './api/accessory';
import { getAccessoryValue,
         listAccessoryValue,
         createAccessoryValue,
         removeAccessoryValue,
         editAccessoryValue,
         listAccessoryLink,
         createAccessoryLink,
         removeAccessoryLink } from './api/accessoryvalue';

class InSales {
  constructor(options) {
    const _options = options || {};
    if (!_options.id) throw new Error('Missing app id');
    if (!_options.secret) throw new Error('Missing app secret');
    if (_options.http) opts.scheme = 'http';

    this.id = _options.id;
    this.secret = _options.secret;
  }

  token(tok) {
    return token(tok, this.secret);
  }

  getProduct(options) {
    return getProduct(options, this.id);
  }

  createProduct(options) {
    return createProduct(options, this.id);
  }

  editProduct(options) {
    return editProduct(options, this.id);
  }

  removeProduct(options) {
    return removeProduct(options, this.id);
  }

  listProduct(options) {
    return listProduct(options, this.id);
  }

  getCollection(options) {
    return getCollection(options, this.id);
  }

  listCollection(options) {
    return listCollection(options, this.id);
  }

  listFile(options) {
    return listFile(options, this.id);
  }

  removeFile(options) {
    return removeFile(options, this.id);
  }

  uploadFile(options) {
    return uploadFile(options, this.id);
  }

  listAsset(options) {
    return listAsset(options, this.id);
  }

  getAsset(options) {
    return getAsset(options, this.id);
  }

  getAssetRaw(options) {
    return getAssetRaw(options, this.id);
  }

  editAsset(options) {
    return editAsset(options, this.id);
  }

  renameAsset(options) {
    return renameAsset(options, this.id);
  }

  removeAsset(options) {
    return removeAsset(options, this.id);
  }

  uploadAsset(options) {
    return uploadAsset(options, this.id);
  }

  listWidgetTypes(options) {
    return listWidgetTypes(options, this.id);
  }

  getWidgetType(options) {
    return getWidgetType(options, this.id);
  }

  editWidgetType(options) {
    return editWidgetType(options, this.id);
  }

  removeWidgetType(options) {
    return removeWidgetType(options, this.id);
  }

  uploadWidgetType(options) {
    return uploadWidgetType(options, this.id);
  }

  listThemes(options) {
    return listThemes(options, this.id);
  }

  getAccount(options) {
    return getAccount(options, this.id);
  }

  createJsTag(options) {
    return createJsTag(options, this.id);
  }

  getRecurring(options) {
    return getRecurring(options, this.id);
  }

  createRecurring(options) {
    return createRecurring(options, this.id);
  }

  changeRecurring(options) {
    return changeRecurring(options, this.id);
  }

  removeRecurring(options) {
    return removeRecurring(options, this.id);
  }

  getCharge(options) {
    return getCharge(options, this.id);
  }

  createCharge(options) {
    return createCharge(options, this.id);
  }

  declineCharge(options) {
    return declineCharge(options, this.id);
  }

  listCharge(options) {
    return listCharge(options, this.id);
  }

  getCoupon(options) {
    return getCoupon(options, this.id);
  }

  createCoupon(options) {
    return createCoupon(options, this.id);
  }

  removeCoupon(options) {
    return removeCoupon(options, this.id);
  }

  listCoupon(options) {
    return listCoupon(options, this.id);
  }

  editCoupon(options) {
    return editCoupon(options, this.id);
  }

  getPriceKind(options) {
    return getPriceKind(options, this.id);
  }

  createPriceKind(options) {
    return createPriceKind(options, this.id);
  }

  removePriceKind(options) {
    return removePriceKind(options, this.id);
  }

  listPriceKind(options) {
    return listPriceKind(options, this.id);
  }

  editPriceKind(options) {
    return editPriceKind(options, this.id);
  }

  listSimilar(options) {
    return listSimilar(options, this.id);
  }

  createSimilar(options) {
    return createSimilar(options, this.id);
  }

  removeSimilar(options) {
    return removeSimilar(options, this.id);
  }

  listSupplementary(options) {
    return listSupplementary(options, this.id);
  }

  createSupplementary(options) {
    return createSupplementary(options, this.id);
  }

  removeSupplementary(options) {
    return removeSupplementary(options, this.id);
  }

  getAccessory(options) {
    return getAccessory(options, this.id);
  }

  listAccessory(options) {
    return listAccessory(options, this.id);
  }

  createAccessory(options) {
    return createAccessory(options, this.id);
  }

  removeAccessory(options) {
    return removeAccessory(options, this.id);
  }

  editAccessory(options) {
    return editAccessory(options, this.id);
  }

  getAccessoryValue(options) {
    return getAccessoryValue(options, this.id);
  }

  listAccessoryValue(options) {
    return listAccessoryValue(options, this.id);
  }

  createAccessoryValue(options) {
    return createAccessoryValue(options, this.id);
  }

  removeAccessoryValue(options) {
    return removeAccessoryValue(options, this.id);
  }

  editAccessoryValue(options) {
    return editAccessoryValue(options, this.id);
  }

  listAccessoryLink(options) {
    return listAccessoryLink(options, this.id);
  }

  createAccessoryLink(options) {
    return createAccessoryLink(options, this.id);
  }

  removeAccessoryLink(options) {
    return removeAccessoryLink(options, this.id);
  }
}

export default options => new InSales(options);
