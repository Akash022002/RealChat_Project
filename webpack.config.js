const path = require('path');

module.exports = {
  // Other webpack configurations...
  resolve: {
    fallback: {
      "querystring": false,
      "crypto": false,
      "http": false,
      "net": false
    }
  }  
};
