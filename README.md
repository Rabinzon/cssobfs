## Обфускатор строк(CSS классов)
#### ШРИ 2016 Яндекс
#### Задание №2
**Author:** Gilfanov Ildar ildarrazin@gmail.com


### exports(data) 

Обфусцирует и минифицирует, CSS классы.

**Parameters**

**data**: `Array`, массив CSS классов

**Returns**: `Object`, объект с ключами в виде
имён входных классов, значения - обфусцированные
и минифицированные CSS классы.
```javascript
const obfuscate = require('./index');     
obfuscate(array); // [{key: value}]
```

## Utils

### keygen(max) 

Возвращает массив строк, нужной длины.

**Parameters**

**max**: `Number`, максимальное количество строк в массиве

**Returns**: `Array`, массив строк длинной max


### sort(data) 

Сортирует и фильтрует полученный массив.

**Parameters**

**data**: `Array`, массив

**Returns**: `Array`, фильтрованный, отсортированный массив


### mapIt(keys, values) 

Заполняет объект на основе аргументов.

**Parameters**

**keys**: `Array`, массив ключей

**values**: `Array`, массив значений

**Returns**: `Object`, result

