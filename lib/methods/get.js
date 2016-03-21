import { request } from '../request';
import rest from 'restler';
import options from '../options';
const opt = Object.create(options);

export function get(conn) {
  if (conn.query) opt.query = conn.query;

  const g = rest.get(`https://${conn.id}:${conn.token}@${conn.url}/admin/${conn.api}.xml`, opt);
  return new Promise((resolve, reject) => {
    request(g)
      .then(resolve)
      .catch(reject);
  });
}
