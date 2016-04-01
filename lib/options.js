export default {
  headers: {
    'Content-Type': 'application/xml'
  },
  xml2js: {
    trim: false,
    explicitArray: false,
    ignoreAttrs: true
  },
  timeout: 30000
};
