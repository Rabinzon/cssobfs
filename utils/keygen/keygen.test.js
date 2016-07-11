const expect = require('chai').expect;
const keygen = require('./keygen');

describe('Keygen', () => {
	it('must generate keys', () => {
		const input = keygen(26);
		const output = 'abcdefghijklmnopqrstuvwxyz'.split('');
		expect(input).to.deep.equal(output);
	});
});

