import crypto from 'crypto';

/**
 * Generate access token for shop
 *
 * Examples:
 *
 *      insales.token('12345');
 *
 * Output:
 *
 *      8cfa2282b17de0a598c010f5f0109e7d
 * @param {String} token Required, token receive when install app
 * @param {String} secret Required, app secret
 * @returns {String} access token
 */
export function token(token, secret) {
  return crypto.createHash('md5')
    .update(token + secret)
    .digest('hex');
}
