const expect = require('chai').expect;
const sort = require('./sort');

describe('Array sort', () => {
	it('should sort array', () => {
		const input = sort([1, 3, 2, 3, 5]);
		const output = [1,2,3,5];
		expect(input).to.deep.equal(output);
	});
});

