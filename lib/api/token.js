import { crypto } from 'crypto';

export function token(token, secret) {
  return crypto.createHash('md5')
    .update(token + secret)
    .digest('hex');
}
