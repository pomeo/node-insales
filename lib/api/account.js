'use strict';
const get = require('../methods/get');

exports.get = function(self) {
  return new Promise((resolve, reject) => {
    get({
      id: this.id,
      token: self.token,
      url: self.url,
      api: `account`,
    }).then(resolve)
      .catch(reject);
  });
};
