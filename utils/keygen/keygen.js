/**
 * @private
 * @description Массив символов, из алфавита английского языка.
 * @type {Array}
 * @const CHARS
 */

const CHARS = 'abcdefghijklmnopqrstuvwxyz'.split('');

/**
 * @private
 * @description Длинная массива CHARS
 * @see {@link CHARS}
 * @type {Number}
 * @const
 */
const CHARS_COUNT = 26;

/**
 * @private
 * @description Расширяет полученный массив срок, до требуемой длины.
 * @param {Number} max - требуемая длина массива
 * @param {Array} keys - расширяемый массив
 * @returns {Array} result - расширенный массив строк
 */
const extendKeys = (max, keys) => {
	const result = [];
	for (let i = 0; i < CHARS_COUNT; i++) {
		for (let j = 0; j < keys.length; j++) {
			if ((result.length + keys.length) === max) {
				return keys.concat(result);
			}
			result.push(keys[j] + keys[i]);
		}
	}

	return keys.concat(result);
};

/**
 * @private
 * @description Генерирует массив строк(ключей), на основе алфавита английского языка.
 * @see {@link CHARS}
 * @param {Number} max - максимальное количество строк в массиве
 * @returns {Array} keys - массив строк
 */
const generateKeys = (max, keys) => {
	let result = [];

	result = extendKeys(max, keys);

	if ((result.length + keys.length) < max) {
		return generateKeys(max, result);
	}

	return result;
};

/**
 * @module Keygen
 * @description Возвращает массив строк, нужной длины.
 * @param {Number} max - максимальное количество строк в массиве
 * @returns {Array} массив строк длинной max
 */
module.exports = max => {
	if (max <= CHARS_COUNT) {
		return CHARS.slice(0, max);
	}
	return generateKeys(max, CHARS);
};

