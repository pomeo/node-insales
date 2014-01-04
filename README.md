node-insales
============
В будущем node.js модуль для работы с [API insales.ru](https://wiki.insales.ru/wiki/%D0%9A%D0%BE%D0%BC%D0%B0%D0%BD%D0%B4%D1%8B_API).
Нужно оттестировать пару приложений в маркете, чтобы понять как лучше спроектировать модуль.

На данный момент имеем:
* Количество запросов к API ограничено 500 запросов за 5 минут. Нужна очередь, лучше всего подойдёт [kue](https://github.com/learnboost/kue).
* Из первого вытекает, что нужно два варианта использования очереди, запросы каждые ~0.6 секунды или все 500 раз в 5 минут, либо комбинация этих способов.
* На примере работы с купонами приоритеты в очереди должны быть такими: удаление самый низкий приоритет; создание средний приоритет; изменение высокий приоритет.
* Основная проблема на данный момент, как организовать отдачу данных из модуля в приложение.

Материал:  
http://nodejs.org/docs/latest/api/modules.html  
https://github.com/danwrong/restler  
https://github.com/learnboost/kue  
https://github.com/appsattic/node-coupon-code
