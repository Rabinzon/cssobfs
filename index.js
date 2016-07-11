/**
 * @file Обфускатор строк(CSS классов)
 * @author Gilfanov Ildar <ildarrazin@gmail.com>
 * @description Обфусцирует и минифицирует, CSS классы.
 * @param {Array} data - массив CSS классов
 * @returns {Object} объект с ключами в виде
 * имён входных классов, значения - обфусцированные
 * и минифицированные CSS классы.
 */
const sort = require('./utils/sort/sort');
const mapIt = require('./utils/mapIt/mapIt');
const keygen = require('./utils/keygen/keygen');

module.exports = data => {
	const clearData = sort(data);
	const max = clearData.length;
	return mapIt(clearData, keygen(max));
};
