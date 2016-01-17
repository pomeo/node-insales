'use strict';
const request = require('../request');
const rest = require('restler');
const opt = Object.create(require('../options'));

module.exports = function remove(self) {
  const d = rest.del(`http://${self.id}:${self.token}@${self.url}/admin/${self.api}.xml`, opt);
  return new Promise((resolve, reject) => {
    request(d)
      .then(resolve)
      .catch(reject);
  });
};
