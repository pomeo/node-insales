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

InSales.prototype.getProduct = require('./api/product').get;
InSales.prototype.createProduct = require('./api/product').create;

module.exports = options => new InSales(options);
