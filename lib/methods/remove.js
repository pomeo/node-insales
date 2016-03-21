import { request } from '../request';
import rest from 'restler';
import options from '../options';
const opt = Object.create(options);

export function remove(conn) {
  const d = rest.del(`https://${conn.id}:${conn.token}@${conn.url}/admin/${conn.api}.xml`, opt);
  return new Promise((resolve, reject) => {
    request(d)
      .then(resolve)
      .catch(reject);
  });
}
