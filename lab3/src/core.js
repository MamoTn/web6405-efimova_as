/**
 * Функция, которая проверяет, является ли число целым. Используются побитовые операторы
 * @param {*} n
 * @returns {Boolean} 
 */
function isInteger(n) {
  return (n | 0) === n;
}

/**
 * Функция, которая возвращает массив четных чисел от 2 до 20 включительно
 * @returns {[2, 4, 6, 8, 10, 12, 14, 16, 18, 20]}
*/
function even() {
  const result = [];
  for (let i = 2; i <= 20; i += 2) {
    result.push(i);
  }
  return result;
}

/**
 * Функция, считающая сумму чисел до заданного. Используется цикл
 * @param {*} n
 * @returns {Number}
 */
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

/**
 * Функция, считающая сумму чисел до заданного. Используется рекурсию
 * @param {*} n
 * @returns {Number}
 */
function recSumTo(n) {
  return n <= 1 ? n : n + recSumTo(n - 1);
}

/**
 * Функция, считающая факториал заданного числа
 * @param {*} n
 * @returns {Number}
 */
function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}

/**
 * Функция, которая определяет, является ли число двойкой, возведенной в степень
 * @param {*} n
 * @returns {Boolean} 
 */
function isBinary(n) {
  return n > 0 && (n & (n - 1)) === 0;
}

/**
 * Функция, которая находит N-е число Фибоначчи
 * @param {*} n
 * @returns {Number}
 */
function fibonacci(n) {
  let [a, b] = [0, 1];
  for (let i = 0; i < n; i++)
    [a,b] = [b, a + b];
  return a;
}

/** Функция, которая принимает начальное значение и функцию операции
 * и возвращает функцию - выполняющую эту операцию.
 * Если функция операции (operatorFn) не задана - по умолчанию всегда
 * возвращается начальное значение (initialValue)
 * @param initialValue
 * @param operatorFn - (storedValue, newValue) => {operation}
 * @example
 * const sumFn =  getOperationFn(10, (a,b) => a + b);
 * console.log(sumFn(5)) - 15
 * console.log(sumFn(3)) - 18
 */
function getOperationFn(initialValue, operatorFn) {
  let currentValue = initialValue;
    return function(newValue) {
    if (operatorFn) {
      currentValue = operatorFn(currentValue, newValue);
      return currentValue;
    }
    return initialValue;
  };
}

/**
 * Функция создания генератора арифметической последовательности.
 * При ее вызове, она возвращает новую функцию генератор - generator().
 * Каждый вызов функции генератора возвращает следующий элемент последовательности.
 * Если начальное значение не передано, то оно равно 0.
 * Если шаг не указан, то по дефолту он равен 1.
 * Генераторов можно создать сколько угодно - они все независимые.
 *
 * @param {number} start - число с которого начинается последовательность
 * @param {number} step  - число шаг последовательности
 * @example
 * const generator = sequence(5, 2);
 * console.log(generator()); // 5
 * console.log(generator()); // 7
 * console.log(generator()); // 9
 */
function sequence(start = 0, step = 1) {
  let value = start - step;
  return () => value += step;
}

/**
 * Функция deepEqual, которая принимает два значения
 * и возвращает true только в том случае, если они имеют одинаковое значение
 * или являются объектами с одинаковыми свойствами,
 * значения которых также равны при сравнении с рекурсивным вызовом deepEqual.
 * Учитывать специфичные объекты(такие как Date, RegExp и т.п.) не обязательно
 *
 * @param {object} firstObject - первый объект
 * @param {object} secondObject - второй объект
 * @returns {boolean} - true если объекты равны(по содержанию) иначе false
 * @example
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 33], text: 'text'}) // true
 * deepEqual({arr: [22, 33], text: 'text'}, {arr: [22, 3], text: 'text2'}) // false
 */
function deepEqual(firstObject, secondObject) {
  if (Number.isNaN(firstObject) && Number.isNaN(secondObject)) return true;
  if (firstObject === secondObject) return true;
  if (typeof firstObject != 'object' || typeof secondObject != 'object')
    return false;
  
  const keysFirst = Object.keys(firstObject);
  const keysSecond = Object.keys(secondObject);
  
  if (keysFirst.length !== keysSecond.length) return false;
  for (let key of keysFirst) {
    if (!keysSecond.includes(key) || !deepEqual(firstObject[key], secondObject[key])) {
      return false;
    }
  }
  return true;
}

module.exports = {
    isInteger,
    even,
    sumTo,
    recSumTo,
    factorial,
    isBinary,
    fibonacci,
    getOperationFn,
    sequence,
    deepEqual,
};
