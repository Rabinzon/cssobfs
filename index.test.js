const expect = require('chai').expect;
const obfuscate = require('./index');

describe('CSS obfuscator',() => {
	it('obfuscate classes', () => {
		const input = obfuscate(['sss', 'seew', 'ebdadfsaf']);
		const output = { ebdadfsaf: 'a', seew: 'b', sss: 'c' };
		expect(input).to.deep.equal(output);
	});
});
