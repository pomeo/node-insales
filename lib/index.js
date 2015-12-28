'use strict';

class InSales {
  constructor(options) {
    options = options || {};
    if (!options.id) throw new Error('Missing app id');
    if (!options.secret) throw new Error('Missing app secret');

    this.id = options.id;
    this.secret = options.secret;
  }
}

InSales.prototype.token = require('./api/token');
InSales.prototype.getProduct = require('./api/product').get;
InSales.prototype.createProduct = require('./api/product').create;
InSales.prototype.listProduct = require('./api/product').list;
InSales.prototype.getCollection = require('./api/collection').get;
InSales.prototype.listCollection = require('./api/collection').list;
InSales.prototype.getFile = require('./api/file').get;
InSales.prototype.listFile = require('./api/file').list;
InSales.prototype.removeFile = require('./api/file').remove;
InSales.prototype.getAccount = require('./api/account').get;

module.exports = options => new InSales(options);
