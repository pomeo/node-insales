'use strict';
const request = require('./request');
const rest = require('restler');
const Js2Xml = require('js2xml').Js2Xml;
let opt = require('./options');

module.exports = function post(self) {
  const js2xml = new Js2Xml('product', self.obj);
  opt.data = js2xml.toString();
  const p = rest.post(`http://${self.id}:${self.token}@${self.url}/admin/${self.api}.xml`, opt);
  return new Promise((resolve, reject) => {
    request(p)
      .then(resolve)
      .catch(reject);
  });
};
