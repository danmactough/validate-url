/**
 * Validates a url
 */
var URL = require('url');

function validate (url) {
  if (!url) return false;

  if ('string' === typeof url) url = URL.parse(url);

  if ('object' !== typeof url) return false;

  if (!url.host || !url.pathname) return false;

  return true;
}

module.exports = validate;