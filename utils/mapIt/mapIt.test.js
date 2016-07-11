const expect = require('chai').expect;
const mapIt = require('./mapIt');

describe('Array to map', () => {
	it('should be map', () => {
		const keys = ['w2e', 'ase', 'dsa0'];
		const values = [1, 3, 4, 20, 23];
		const input = mapIt(keys, values);
		const output = {
			w2e: 1,
			ase: 3,
			dsa0: 4
		};

		expect(input).to.deep.equal(output);
	});
});

