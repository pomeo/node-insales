module.exports = {
  headers: {
    'Content-Type': 'application/xml'
  },
  xml2js: {
    trim: false,
    explicitArray: false,
    ignoreAttrs: true
  },
  timeout: 10000
};
