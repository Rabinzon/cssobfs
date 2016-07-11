/**
 * @private
 * @description Фильтрует полученный массив.
 * @param {Array} data - массив
 * @returns {Array} фильтрованный массив
 */
const filterData = data => {
	return data.filter((x, i) => data.indexOf(x) === i);
};

/**
 * @module Sort
 * @description Сортирует и фильтрует полученный массив.
 * @param {Array} data - массив
 * @returns {Array} фильтрованный, отсортированный массив
 */
module.exports = data => {
	return filterData(data.sort());
};
