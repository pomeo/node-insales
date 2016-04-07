import { token }           from './api/token';
import { getAccount }      from './api/account';
import { getProduct,
         createProduct,
         listProduct }     from './api/product';
import { getCollection,
         listCollection }  from './api/collection';
import { listFile,
         removeFile,
         uploadFile }      from './api/file';
import { createJsTag }     from './api/jstag';
import { getRecurring,
         createRecurring,
         changeRecurring,
         removeRecurring } from './api/recurringcharge';
import { getCharge,
         createCharge,
         declineCharge,
         listCharge }      from './api/charge';
import { getCoupon,
         createCoupon,
         removeCoupon,
         listCoupon,
         editCoupon }      from './api/coupon';

class InSales {
  constructor(options) {
    const _options = options || {};
    if (!_options.id) throw new Error('Missing app id');
    if (!_options.secret) throw new Error('Missing app secret');

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
}

export default options => new InSales(options);
