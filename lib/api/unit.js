import { get } from '../methods/get';

/**
 * GET /admin/units.json?lang=ru
 *
 * Examples:
 *
 *      insales.listUnit({
 *        token: '1234567890',
 *        url: 'shop-test.myinsales.ru',
 *        lang: 'ru'
 *      }).then(response => {
 *        console.info(response.data);
 *      }).catch(err => {
 *        console.error(err);
 *      });
 * Output:
 *
 *      {
 *        "mmt": "мм",
 *        "cmt": "см",
 *        "dmt": "дм",
 *        "mtr": "м",
 *        "kmt": "км",
 *        "inh": "дюйм",
 *        "fot": "фут",
 *        "yrd": "ярд",
 *        "mtk": "м2",
 *        "dmk": "дм2",
 *        "mlt": "мл",
 *        "cmq": "см3",
 *        "ltr": "л",
 *        "dmq": "дм3",
 *        "mtq": "м3",
 *        "mgm": "мг",
 *        "grm": "г",
 *        "kgm": "кг",
 *        "tne": "т",
 *        "hur": "ч",
 *        "nbb": "боб",
 *        "lef": "л.",
 *        "set": "набор",
 *        "npr": "пар",
 *        "npl": "рул",
 *        "nmp": "упак",
 *        "dzp": "дюжина упак",
 *        "cnp": "100 упак",
 *        "pce": "шт",
 *        "cen": "100 шт",
 *        "mil": "тыс. шт",
 *        "box": "ящ",
 *        "sct": "секц",
 *        "btl": "флак",
 *        "lmt": "пог. м",
 *        "com": "компл",
 *        "pct": "кор",
 *        "day": "сут",
 *        "mth": "мес"
 *      }
 * @param {Object} options
 * @param {string} options.token Required, access token for shop
 * @param {string} options.url Required, shop url
 * @param {string} options.lang Required, locale, for example ru
 * @param {Number|String} id Required, app id
 * @returns {Promise}
 */
export function listUnit(options, id) {
  const query = {};
  if (options.lang) {
    query.lang = options.lang;
  }
  return get({
    id,
    token: options.token,
    url: options.url,
    api: `units`,
    query
  });
}
