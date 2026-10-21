import   opts               from './options';
import { token }            from './api/token';
import { getAccount }       from './api/account';
import { getProduct,
         createProduct,
         editProduct,
         removeProduct,
         listProduct,
         countProduct }     from './api/product';
import { getImage,
         listImage,
         createImage,
         removeImage,
         editImage }        from './api/image';
import { getVariant,
         listVariant,
         createVariant,
         removeVariant,
         editVariant,
         editVariantGroup } from './api/variant';
import { getCategory,
         listCategory,
         createCategory,
         removeCategory,
         editCategory }     from './api/category';
import { getCollection,
         listCollection }   from './api/collection';
import { listFile,
         getFile,
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
import { createJsTag,
         getJsTag,
         listJsTag,
         removeJsTag,
         editJsTag }        from './api/jstag';
import { getReview,
         listReview,
         createReview,
         removeReview,
         editReview }       from './api/review';
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
import { getBlog,
         listBlog,
         createBlog,
         removeBlog,
         editBlog }         from './api/blog';
import { getArticle,
         listArticle,
         createArticle,
         removeArticle,
         editArticle }      from './api/article';
import { getPage,
         listPage,
         createPage,
         removePage,
         editPage }         from './api/page';
import { getMenu,
         listMenu,
         createMenu,
         removeMenu,
         editMenu }         from './api/menu';
import { getMenuItem,
         listMenuItem,
         createMenuItem,
         removeMenuItem,
         editMenuItem }     from './api/menuitem';
import { getRedirect,
         listRedirect,
         createRedirect,
         removeRedirect }   from './api/redirect';
import { getProperty,
         listProperty,
         createProperty,
         removeProperty,
         editProperty }     from './api/property';
import { getCharacteristic,
         listCharacteristic,
         createCharacteristic,
         removeCharacteristic,
         editCharacteristic } from './api/characteristic';
import { getOptionName,
         listOptionName,
         createOptionName,
         removeOptionName,
         editOptionName }   from './api/optionname';
import { getOptionValue,
         listOptionValue,
         listAllOptionValue,
         createOptionValue,
         removeOptionValue,
         editOptionValue,
         getOptionValueDestroyStatus,
         removeOptionValueImage } from './api/optionvalue';

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

  countProduct(options) {
    return countProduct(options, this.id);
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

  getFile(options) {
    return getFile(options, this.id);
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

  getJsTag(options) {
    return getJsTag(options, this.id);
  }

  listJsTag(options) {
    return listJsTag(options, this.id);
  }

  removeJsTag(options) {
    return removeJsTag(options, this.id);
  }

  editJsTag(options) {
    return editJsTag(options, this.id);
  }

  getReview(options) {
    return getReview(options, this.id);
  }

  listReview(options) {
    return listReview(options, this.id);
  }

  createReview(options) {
    return createReview(options, this.id);
  }

  removeReview(options) {
    return removeReview(options, this.id);
  }

  editReview(options) {
    return editReview(options, this.id);
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

  getBlog(options) {
    return getBlog(options, this.id);
  }

  listBlog(options) {
    return listBlog(options, this.id);
  }

  createBlog(options) {
    return createBlog(options, this.id);
  }

  removeBlog(options) {
    return removeBlog(options, this.id);
  }

  editBlog(options) {
    return editBlog(options, this.id);
  }

  getArticle(options) {
    return getArticle(options, this.id);
  }

  listArticle(options) {
    return listArticle(options, this.id);
  }

  createArticle(options) {
    return createArticle(options, this.id);
  }

  removeArticle(options) {
    return removeArticle(options, this.id);
  }

  editArticle(options) {
    return editArticle(options, this.id);
  }

  getPage(options) {
    return getPage(options, this.id);
  }

  listPage(options) {
    return listPage(options, this.id);
  }

  createPage(options) {
    return createPage(options, this.id);
  }

  removePage(options) {
    return removePage(options, this.id);
  }

  editPage(options) {
    return editPage(options, this.id);
  }

  getMenu(options) {
    return getMenu(options, this.id);
  }

  listMenu(options) {
    return listMenu(options, this.id);
  }

  createMenu(options) {
    return createMenu(options, this.id);
  }

  removeMenu(options) {
    return removeMenu(options, this.id);
  }

  editMenu(options) {
    return editMenu(options, this.id);
  }

  getMenuItem(options) {
    return getMenuItem(options, this.id);
  }

  listMenuItem(options) {
    return listMenuItem(options, this.id);
  }

  createMenuItem(options) {
    return createMenuItem(options, this.id);
  }

  removeMenuItem(options) {
    return removeMenuItem(options, this.id);
  }

  editMenuItem(options) {
    return editMenuItem(options, this.id);
  }

  getRedirect(options) {
    return getRedirect(options, this.id);
  }

  listRedirect(options) {
    return listRedirect(options, this.id);
  }

  createRedirect(options) {
    return createRedirect(options, this.id);
  }

  removeRedirect(options) {
    return removeRedirect(options, this.id);
  getImage(options) {
    return getImage(options, this.id);
  }

  listImage(options) {
    return listImage(options, this.id);
  }

  createImage(options) {
    return createImage(options, this.id);
  }

  removeImage(options) {
    return removeImage(options, this.id);
  }

  editImage(options) {
    return editImage(options, this.id);
  }

  getVariant(options) {
    return getVariant(options, this.id);
  }

  listVariant(options) {
    return listVariant(options, this.id);
  }

  createVariant(options) {
    return createVariant(options, this.id);
  }

  removeVariant(options) {
    return removeVariant(options, this.id);
  }

  editVariant(options) {
    return editVariant(options, this.id);
  }

  editVariantGroup(options) {
    return editVariantGroup(options, this.id);
  }

  getCategory(options) {
    return getCategory(options, this.id);
  }

  listCategory(options) {
    return listCategory(options, this.id);
  }

  createCategory(options) {
    return createCategory(options, this.id);
  }

  removeCategory(options) {
    return removeCategory(options, this.id);
  }

  editCategory(options) {
    return editCategory(options, this.id);
  getProperty(options) {
    return getProperty(options, this.id);
  }

  listProperty(options) {
    return listProperty(options, this.id);
  }

  createProperty(options) {
    return createProperty(options, this.id);
  }

  removeProperty(options) {
    return removeProperty(options, this.id);
  }

  editProperty(options) {
    return editProperty(options, this.id);
  }

  getCharacteristic(options) {
    return getCharacteristic(options, this.id);
  }

  listCharacteristic(options) {
    return listCharacteristic(options, this.id);
  }

  createCharacteristic(options) {
    return createCharacteristic(options, this.id);
  }

  removeCharacteristic(options) {
    return removeCharacteristic(options, this.id);
  }

  editCharacteristic(options) {
    return editCharacteristic(options, this.id);
  }

  getOptionName(options) {
    return getOptionName(options, this.id);
  }

  listOptionName(options) {
    return listOptionName(options, this.id);
  }

  createOptionName(options) {
    return createOptionName(options, this.id);
  }

  removeOptionName(options) {
    return removeOptionName(options, this.id);
  }

  editOptionName(options) {
    return editOptionName(options, this.id);
  }

  getOptionValue(options) {
    return getOptionValue(options, this.id);
  }

  listOptionValue(options) {
    return listOptionValue(options, this.id);
  }

  listAllOptionValue(options) {
    return listAllOptionValue(options, this.id);
  }

  createOptionValue(options) {
    return createOptionValue(options, this.id);
  }

  removeOptionValue(options) {
    return removeOptionValue(options, this.id);
  }

  editOptionValue(options) {
    return editOptionValue(options, this.id);
  }

  getOptionValueDestroyStatus(options) {
    return getOptionValueDestroyStatus(options, this.id);
  }

  removeOptionValueImage(options) {
    return removeOptionValueImage(options, this.id);
  }
}

export default options => new InSales(options);
