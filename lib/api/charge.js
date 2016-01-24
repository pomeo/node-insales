'use strict';
const get = require('../methods/get');
const post = require('../methods/post');

exports.get = function(self) {
  return new Promise((resolve, reject) => {
    get({
      id: this.id,
      token: self.token,
      url: self.url,
      api: `application_charges/${self.chargeid}`
    }).then(resolve)
      .catch(reject);
  });
};

exports.list = function(self) {
  return new Promise((resolve, reject) => {
    get({
      id: this.id,
      token: self.token,
      url: self.url,
      api: `application_charges`
    }).then(resolve)
      .catch(reject);
  });
};

exports.create = function(self) {
  return new Promise((resolve, reject) => {
    post({
      id: this.id,
      token: self.token,
      url: self.url,
      api: 'application_charges',
      obj: self.charge
    }).then(resolve)
      .catch(reject);
  });
};

exports.remove = function(self) {
  return new Promise((resolve, reject) => {
    post({
      id: this.id,
      token: self.token,
      url: self.url,
      api: `application_charges/${self.chargeid}/decline`
    }).then(resolve)
      .catch(reject);
  });
};
