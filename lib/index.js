var xml2js   = require('xml2js'),
    rest     = require('restler'),
    crypto   = require('crypto'),
    mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    moment   = require('moment'),
    kue      = require('kue'),
    debugOn  = true;

exports = module.exports = insales;

var appid,
    appsecret,
    mongodburi,
    kueuri;

//Процедура установки
exports.install = function(req, callback){
  log(req.query);
  var pass = crypto.createHash('md5').update(req.query.token + appsecret).digest('hex');
  log(pass);

  Shop.findOne({ 'insales_id': req.query.insales_id }, function (err, shop) {
    if (err) {
      log(err)
    } else {
      if (shop) {
        shop.pass = pass;
        shop.updated_at = moment().format();
        shop.enabled = true;
        shop.save();
        callback(req.query.insales_id);
      } else {
        shop = new Shop({
          insales_id : req.query.insales_id,
          url        : req.query.shop,
          pass       : pass,
          created_at : moment().format(),
          updated_at : moment().format(),
          enabled    : true
        });

        shop.save(function (err) {
          if (err) {
            log(err);
          } else {
            callback(req.query.insales_id);
          }
        });
      }
    }
  });
};

//Процедура удаления

//Категории на складе

//Товары

//Изображения товара

//Модификации товара

//Свойства товара

//Значения свойств

//Дополнительные поля товара

//Значения дополнительных полей товара

//Сопутствующие товары

//Аналогичные товары

//Категории на сайте

//Размещение товаров на сайте

//Заказы

//Скидки по купонам

//Способы доставки

//Способы оплаты

//Домены

//Дополнительные поля адреса и покупателя

//Блоги

//Статьи

//Файлы

//Webhooks

//Widgets

//Уведомления
//Изначально выключено, включается только через partners@insales.ru

//JsTag

//Темы

//Ассеты

//Периодическое списание

//Счета

//Логгер в одном месте, для упрощения перезда на любой логгер.
function log(logMsg) {
  if (logMsg instanceof Error) console.log(logMsg.stack);
  if (debugOn) {
	  if (typeof logMsg == 'object') {
		  console.dir(logMsg);
	  } else {
		  console.log(logMsg);
	  }
  }
}

function insales(options){
  if (!options.id) log(new Error('Отсутствует идентификатор приложения'));
  if (!options.secret) log(new Error('Отсутствует секрет приложения'));
  if (!options.mongodb) log(new Error('Отсутствует адрес mongodb сервера'));
  if (!options.kue) log(new Error('Отсутствует адрес сервера очередей kue'));

  appid      = options.id;
  appsecret  = options.secret;
  mongodburi = options.mongodb;
  kueuri     = options.kue;

  mongoose.connect(mongodburi);

  return function(req, res, next) {
    next();
  }
}

//mongodb
var ShopsSchema = new Schema();

ShopsSchema.add({
    insales_id  : { type: Number, index: true }
  , url         : { type: String, lowercase: true }
  , pass        : String
  , created_at  : Date
  , updated_at  : Date
  , enabled     : Boolean
});

var Shop = mongoose.model('Shop', ShopsSchema);
