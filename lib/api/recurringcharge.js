'use strict';
const get = require('../methods/get');
const post = require('../methods/post');
const del = require('../methods/delete');

exports.get = function(self) {
  return new Promise((resolve, reject) => {
    get({
      id: this.id,
      token: self.token,
      url: self.url,
      api: `recurring_application_charge`
    }).then(resolve)
      .catch(reject);
  });
};

exports.create = function(self) {
  const charge = {
    'recurring-application-charge': {
      'monthly': self.price
    }
  };

  return new Promise((resolve, reject) => {
    post({
      id: this.id,
      token: self.token,
      url: self.url,
      api: 'recurring_application_charge',
      obj: charge
    }).then(resolve)
      .catch(reject);
  });
};

exports.remove = function(self) {
  return new Promise((resolve, reject) => {
    del({
      id: this.id,
      token: self.token,
      url: self.url,
      api: `recurring_application_charge`
    }).then(resolve)
      .catch(reject);
  });
};
