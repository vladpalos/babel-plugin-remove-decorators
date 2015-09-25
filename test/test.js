import fs                       from 'fs';
import assert                   from 'assert';
import { transformFileSync }    from 'babel';
import plugin                   from '../src';

function trim(str) {
    return str.replace(/ /g,'');
}

describe('Should remove decorators', () => {

    it('Should remove decorators from class and properties', () => {

        const actual = transformFileSync('test/fixture/actual.js', {
            blacklist: ['strict', 'es6.modules', 'es6.classes'],
            plugins: [{ transformer: plugin, position: 'before' }]
        }).code;

        const expected = fs.readFileSync('test/fixture/expected.js').toString();

        assert.equal(trim(actual), trim(expected));
    });
});

