import { request } from '../request';
import rest from 'restler';
import { Js2Xml } from 'js2xml';
import options from '../options';
const opt = Object.create(options);

export function put(conn) {
  if (conn.obj !== undefined) {
    const js2xml = new Js2Xml(Object.keys(conn.obj)[0], conn.obj[Object.keys(conn.obj)[0]]);
    opt.data = js2xml.toString();
  }
  const p = rest.put(`https://${conn.id}:${conn.token}@${conn.url}/admin/${conn.api}.xml`, opt);
  return new Promise((resolve, reject) => {
    request(p)
      .then(resolve)
      .catch(reject);
  });
}
