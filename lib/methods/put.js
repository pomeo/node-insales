'use strict';
const request = require('../request');
const rest = require('restler');
const Js2Xml = require('js2xml').Js2Xml;
const opt = Object.create(require('../options'));

module.exports = function put(self) {
  if (self.obj !== undefined) {
    const js2xml = new Js2Xml(Object.keys(self.obj)[0], self.obj[Object.keys(self.obj)[0]]);
    opt.data = js2xml.toString();
  }
  const p = rest.put(`http://${self.id}:${self.token}@${self.url}/admin/${self.api}.xml`, opt);
  return new Promise((resolve, reject) => {
    request(p)
      .then(resolve)
      .catch(reject);
  });
};
