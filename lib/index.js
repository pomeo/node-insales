'use strict';
const crypto = require('crypto');

class InSales {
  constructor(options) {
    options = options || {};
    if (!options.id) throw new Error('Missing app id');
    if (!options.secret) throw new Error('Missing app secret');

    this.id = options.id;
    this.secret = options.secret;
  }

  token(token) {
    return crypto.createHash('md5')
      .update(token + this.secret)
      .digest('hex');
  }
}

InSales.prototype.getProduct = require('./api/product').get;
InSales.prototype.createProduct = require('./api/product').create;
InSales.prototype.listProduct = require('./api/product').list;
InSales.prototype.getCollection = require('./api/collection').get;
InSales.prototype.listCollection = require('./api/collection').list;
InSales.prototype.getFile = require('./api/file').get;
InSales.prototype.listFile = require('./api/file').list;
InSales.prototype.removeFile = require('./api/file').remove;

module.exports = options => new InSales(options);
