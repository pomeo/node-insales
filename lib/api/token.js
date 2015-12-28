'use strict';
const crypto = require('crypto');

module.exports = function(token) {
  return crypto.createHash('md5')
    .update(token + this.secret)
    .digest('hex');
};
