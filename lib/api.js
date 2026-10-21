import   opts               from './options';
import { token }            from './api/token';
import { getAccount,
         editAccount }       from './api/account';
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
         listCollection,
         createCollection,
         removeCollection,
         editCollection }   from './api/collection';
import { listCollect,
         createCollect,
         removeCollect,
         editCollect }      from './api/collect';
import { getCollectionFilter,
         listCollectionFilter,
         createCollectionFilter,
         removeCollectionFilter,
         editCollectionFilter } from './api/collectionfilter';
import { getCollectionField,
         listCollectionField,
         createCollectionField,
         removeCollectionField,
         editCollectionField } from './api/collectionfield';
import { getCollectionFieldValue,
         listCollectionFieldValue,
         editCollectionFieldValue } from './api/collectionfieldvalue';
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
import { getProductField,
         listProductField,
         createProductField,
         removeProductField,
         editProductField } from './api/productfield';
import { getProductFieldValue,
         listProductFieldValue,
         createProductFieldValue,
         removeProductFieldValue,
         editProductFieldValue } from './api/productfieldvalue';
import { getVariantField,
         listVariantField,
         createVariantField,
         removeVariantField,
         editVariantField } from './api/variantfield';
import { getVariantFieldValue,
         listVariantFieldValue,
         createVariantFieldValue,
         removeVariantFieldValue,
         editVariantFieldValue } from './api/variantfieldvalue';
import { getWarehouse,
         listWarehouse,
         createWarehouse,
         removeWarehouse,
         editWarehouse }    from './api/warehouse';
import { getStockCurrency,
         listStockCurrency,
         createStockCurrency,
         editStockCurrency } from './api/stockcurrency';
import { listUnit }         from './api/unit';
import { getSalesChannel,
         listSalesChannel,
         createSalesChannel,
         removeSalesChannel } from './api/saleschannel';
import { getOrder,
         listOrder,
         countOrder,
         createOrder,
         editOrder }        from './api/order';
import { getCustomStatus,
         listCustomStatus,
         createCustomStatus,
         removeCustomStatus,
         editCustomStatus } from './api/customstatus';
import { getExternalDiscount,
         listExternalDiscount,
         createExternalDiscount,
         removeExternalDiscount,
         editExternalDiscount } from './api/externaldiscount';
import { getClient,
         listClient,
         createClient,
         removeClient,
         editClient }       from './api/client';
import { getClientGroup,
         listClientGroup,
         createClientGroup,
         removeClientGroup,
         editClientGroup }  from './api/clientgroup';
import { getBonusTransaction,
         listBonusTransaction,
         listClientBonusTransaction,
         createBonusTransaction } from './api/bonustransaction';
import { getField,
         listField,
         createField,
         removeField,
         editField }        from './api/field';
import { getDeliveryVariant,
         listDeliveryVariant,
         createDeliveryVariant,
         removeDeliveryVariant,
         editDeliveryVariant } from './api/deliveryvariant';
import { getPaymentGateway,
         listPaymentGateway,
         createPaymentGateway,
         removePaymentGateway,
         editPaymentGateway } from './api/paymentgateway';
import { getOutlet,
         listOutlet,
         createOutlet,
         removeOutlet,
         editOutlet }       from './api/outlet';
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

  countProduct(options) {
    return countProduct(options, this.id);
  }

  getCollection(options) {
    return getCollection(options, this.id);
  }

  listCollection(options) {
    return listCollection(options, this.id);
  }

  createCollection(options) {
    return createCollection(options, this.id);
  }

  removeCollection(options) {
    return removeCollection(options, this.id);
  }

  editCollection(options) {
    return editCollection(options, this.id);
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

  editAccount(options) {
    return editAccount(options, this.id);
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
  }

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
  }

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

  listCollect(options) {
    return listCollect(options, this.id);
  }

  createCollect(options) {
    return createCollect(options, this.id);
  }

  removeCollect(options) {
    return removeCollect(options, this.id);
  }

  editCollect(options) {
    return editCollect(options, this.id);
  }

  getCollectionFilter(options) {
    return getCollectionFilter(options, this.id);
  }

  listCollectionFilter(options) {
    return listCollectionFilter(options, this.id);
  }

  createCollectionFilter(options) {
    return createCollectionFilter(options, this.id);
  }

  removeCollectionFilter(options) {
    return removeCollectionFilter(options, this.id);
  }

  editCollectionFilter(options) {
    return editCollectionFilter(options, this.id);
  }

  getCollectionField(options) {
    return getCollectionField(options, this.id);
  }

  listCollectionField(options) {
    return listCollectionField(options, this.id);
  }

  createCollectionField(options) {
    return createCollectionField(options, this.id);
  }

  removeCollectionField(options) {
    return removeCollectionField(options, this.id);
  }

  editCollectionField(options) {
    return editCollectionField(options, this.id);
  }

  getCollectionFieldValue(options) {
    return getCollectionFieldValue(options, this.id);
  }

  listCollectionFieldValue(options) {
    return listCollectionFieldValue(options, this.id);
  }

  editCollectionFieldValue(options) {
    return editCollectionFieldValue(options, this.id);
  }

  getProductField(options) {
    return getProductField(options, this.id);
  }

  listProductField(options) {
    return listProductField(options, this.id);
  }

  createProductField(options) {
    return createProductField(options, this.id);
  }

  removeProductField(options) {
    return removeProductField(options, this.id);
  }

  editProductField(options) {
    return editProductField(options, this.id);
  }

  getProductFieldValue(options) {
    return getProductFieldValue(options, this.id);
  }

  listProductFieldValue(options) {
    return listProductFieldValue(options, this.id);
  }

  createProductFieldValue(options) {
    return createProductFieldValue(options, this.id);
  }

  removeProductFieldValue(options) {
    return removeProductFieldValue(options, this.id);
  }

  editProductFieldValue(options) {
    return editProductFieldValue(options, this.id);
  }

  getVariantField(options) {
    return getVariantField(options, this.id);
  }

  listVariantField(options) {
    return listVariantField(options, this.id);
  }

  createVariantField(options) {
    return createVariantField(options, this.id);
  }

  removeVariantField(options) {
    return removeVariantField(options, this.id);
  }

  editVariantField(options) {
    return editVariantField(options, this.id);
  }

  getVariantFieldValue(options) {
    return getVariantFieldValue(options, this.id);
  }

  listVariantFieldValue(options) {
    return listVariantFieldValue(options, this.id);
  }

  createVariantFieldValue(options) {
    return createVariantFieldValue(options, this.id);
  }

  removeVariantFieldValue(options) {
    return removeVariantFieldValue(options, this.id);
  }

  editVariantFieldValue(options) {
    return editVariantFieldValue(options, this.id);
  }

  getWarehouse(options) {
    return getWarehouse(options, this.id);
  }

  listWarehouse(options) {
    return listWarehouse(options, this.id);
  }

  createWarehouse(options) {
    return createWarehouse(options, this.id);
  }

  removeWarehouse(options) {
    return removeWarehouse(options, this.id);
  }

  editWarehouse(options) {
    return editWarehouse(options, this.id);
  }

  getStockCurrency(options) {
    return getStockCurrency(options, this.id);
  }

  listStockCurrency(options) {
    return listStockCurrency(options, this.id);
  }

  createStockCurrency(options) {
    return createStockCurrency(options, this.id);
  }

  editStockCurrency(options) {
    return editStockCurrency(options, this.id);
  }

  listUnit(options) {
    return listUnit(options, this.id);
  }

  getSalesChannel(options) {
    return getSalesChannel(options, this.id);
  }

  listSalesChannel(options) {
    return listSalesChannel(options, this.id);
  }

  createSalesChannel(options) {
    return createSalesChannel(options, this.id);
  }

  removeSalesChannel(options) {
    return removeSalesChannel(options, this.id);
  }

  getOrder(options) {
    return getOrder(options, this.id);
  }

  listOrder(options) {
    return listOrder(options, this.id);
  }

  countOrder(options) {
    return countOrder(options, this.id);
  }

  createOrder(options) {
    return createOrder(options, this.id);
  }

  editOrder(options) {
    return editOrder(options, this.id);
  }

  getCustomStatus(options) {
    return getCustomStatus(options, this.id);
  }

  listCustomStatus(options) {
    return listCustomStatus(options, this.id);
  }

  createCustomStatus(options) {
    return createCustomStatus(options, this.id);
  }

  removeCustomStatus(options) {
    return removeCustomStatus(options, this.id);
  }

  editCustomStatus(options) {
    return editCustomStatus(options, this.id);
  }

  getExternalDiscount(options) {
    return getExternalDiscount(options, this.id);
  }

  listExternalDiscount(options) {
    return listExternalDiscount(options, this.id);
  }

  createExternalDiscount(options) {
    return createExternalDiscount(options, this.id);
  }

  removeExternalDiscount(options) {
    return removeExternalDiscount(options, this.id);
  }

  editExternalDiscount(options) {
    return editExternalDiscount(options, this.id);
  }

  getClient(options) {
    return getClient(options, this.id);
  }

  listClient(options) {
    return listClient(options, this.id);
  }

  createClient(options) {
    return createClient(options, this.id);
  }

  removeClient(options) {
    return removeClient(options, this.id);
  }

  editClient(options) {
    return editClient(options, this.id);
  }

  getClientGroup(options) {
    return getClientGroup(options, this.id);
  }

  listClientGroup(options) {
    return listClientGroup(options, this.id);
  }

  createClientGroup(options) {
    return createClientGroup(options, this.id);
  }

  removeClientGroup(options) {
    return removeClientGroup(options, this.id);
  }

  editClientGroup(options) {
    return editClientGroup(options, this.id);
  }

  getBonusTransaction(options) {
    return getBonusTransaction(options, this.id);
  }

  listBonusTransaction(options) {
    return listBonusTransaction(options, this.id);
  }

  listClientBonusTransaction(options) {
    return listClientBonusTransaction(options, this.id);
  }

  createBonusTransaction(options) {
    return createBonusTransaction(options, this.id);
  }

  getField(options) {
    return getField(options, this.id);
  }

  listField(options) {
    return listField(options, this.id);
  }

  createField(options) {
    return createField(options, this.id);
  }

  removeField(options) {
    return removeField(options, this.id);
  }

  editField(options) {
    return editField(options, this.id);
  }

  getDeliveryVariant(options) {
    return getDeliveryVariant(options, this.id);
  }

  listDeliveryVariant(options) {
    return listDeliveryVariant(options, this.id);
  }

  createDeliveryVariant(options) {
    return createDeliveryVariant(options, this.id);
  }

  removeDeliveryVariant(options) {
    return removeDeliveryVariant(options, this.id);
  }

  editDeliveryVariant(options) {
    return editDeliveryVariant(options, this.id);
  }

  getPaymentGateway(options) {
    return getPaymentGateway(options, this.id);
  }

  listPaymentGateway(options) {
    return listPaymentGateway(options, this.id);
  }

  createPaymentGateway(options) {
    return createPaymentGateway(options, this.id);
  }

  removePaymentGateway(options) {
    return removePaymentGateway(options, this.id);
  }

  editPaymentGateway(options) {
    return editPaymentGateway(options, this.id);
  }

  getOutlet(options) {
    return getOutlet(options, this.id);
  }

  listOutlet(options) {
    return listOutlet(options, this.id);
  }

  createOutlet(options) {
    return createOutlet(options, this.id);
  }

  removeOutlet(options) {
    return removeOutlet(options, this.id);
  }

  editOutlet(options) {
    return editOutlet(options, this.id);
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
