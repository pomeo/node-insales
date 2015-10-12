'use strict';
const crypto = require('crypto');
const rest = require('restler');

class InSales {
  constructor(options) {
    if (!options.id) throw new Error('Missing app id');
    if (!options.token) throw new Error('Missing app token');

  }
}

module.exports = (options) => new InSales(options);

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
//Изначально выключено, включается через partners@insales.ru

//JsTag

//Темы

//Ассеты

//Периодическое списание

//Счета
