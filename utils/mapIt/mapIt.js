/**
 * @module MapIt
 * @description Заполняет объект на основе аргументов.
 * @param {Array} keys - массив ключей
 * @param {Array} values - массив значений
 * @returns {Object} result
 */
module.exports = (keys, values) => {
	const result = {};

	keys.forEach((key, i) => {
		result[key] = values[i];
	});

	return result;
};
