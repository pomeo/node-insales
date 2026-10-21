import   opts               from './options';
import { token }            from './api/token';
import { getAccount,
         editAccount }       from './api/account';
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
         removeRecurring,
         addRecurringFreeDays } from './api/recurringcharge';
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
import { getDomain,
         listDomain,
         createDomain,
         removeDomain,
         editDomain }       from './api/domain';
import { getUserTask,
         listUserTask,
         createUserTask,
         removeUserTask,
         editUserTask }     from './api/usertask';
import { getMarketplace,
         listMarketplace,
         createMarketplace,
         removeMarketplace,
         editMarketplace }  from './api/marketplace';
import { getApplicationAction,
         listApplicationAction,
         createApplicationAction,
         removeApplicationAction,
         editApplicationAction } from './api/applicationaction';
import { getApplicationWidget,
         listApplicationWidget,
         createApplicationWidget,
         removeApplicationWidget,
         editApplicationWidget } from './api/applicationwidget';
import { getWebhook,
         listWebhook,
         createWebhook,
         removeWebhook,
         editWebhook }      from './api/webhook';
import { getOAuthApp,
         listOAuthApp,
         createOAuthApp,
         removeOAuthApp,
         editOAuthApp }     from './api/oauthapp';
import { createProviderToken } from './api/providertoken';

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

  editAccount(options) {
    return editAccount(options, this.id);
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

  addRecurringFreeDays(options) {
    return addRecurringFreeDays(options, this.id);
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

  getDomain(options) {
    return getDomain(options, this.id);
  }

  listDomain(options) {
    return listDomain(options, this.id);
  }

  createDomain(options) {
    return createDomain(options, this.id);
  }

  removeDomain(options) {
    return removeDomain(options, this.id);
  }

  editDomain(options) {
    return editDomain(options, this.id);
  }

  getUserTask(options) {
    return getUserTask(options, this.id);
  }

  listUserTask(options) {
    return listUserTask(options, this.id);
  }

  createUserTask(options) {
    return createUserTask(options, this.id);
  }

  removeUserTask(options) {
    return removeUserTask(options, this.id);
  }

  editUserTask(options) {
    return editUserTask(options, this.id);
  }

  getMarketplace(options) {
    return getMarketplace(options, this.id);
  }

  listMarketplace(options) {
    return listMarketplace(options, this.id);
  }

  createMarketplace(options) {
    return createMarketplace(options, this.id);
  }

  removeMarketplace(options) {
    return removeMarketplace(options, this.id);
  }

  editMarketplace(options) {
    return editMarketplace(options, this.id);
  }

  getApplicationAction(options) {
    return getApplicationAction(options, this.id);
  }

  listApplicationAction(options) {
    return listApplicationAction(options, this.id);
  }

  createApplicationAction(options) {
    return createApplicationAction(options, this.id);
  }

  removeApplicationAction(options) {
    return removeApplicationAction(options, this.id);
  }

  editApplicationAction(options) {
    return editApplicationAction(options, this.id);
  }

  getApplicationWidget(options) {
    return getApplicationWidget(options, this.id);
  }

  listApplicationWidget(options) {
    return listApplicationWidget(options, this.id);
  }

  createApplicationWidget(options) {
    return createApplicationWidget(options, this.id);
  }

  removeApplicationWidget(options) {
    return removeApplicationWidget(options, this.id);
  }

  editApplicationWidget(options) {
    return editApplicationWidget(options, this.id);
  }

  getWebhook(options) {
    return getWebhook(options, this.id);
  }

  listWebhook(options) {
    return listWebhook(options, this.id);
  }

  createWebhook(options) {
    return createWebhook(options, this.id);
  }

  removeWebhook(options) {
    return removeWebhook(options, this.id);
  }

  editWebhook(options) {
    return editWebhook(options, this.id);
  }

  getOAuthApp(options) {
    return getOAuthApp(options, this.id);
  }

  listOAuthApp(options) {
    return listOAuthApp(options, this.id);
  }

  createOAuthApp(options) {
    return createOAuthApp(options, this.id);
  }

  removeOAuthApp(options) {
    return removeOAuthApp(options, this.id);
  }

  editOAuthApp(options) {
    return editOAuthApp(options, this.id);
  }

  createProviderToken(options) {
    return createProviderToken(options, this.id);
  }
}

export default options => new InSales(options);
