import Unreserved from '../../dist/pattern/unreserved.js';
import {ShuffleParameters} from '@axiona/array/shuffle.js';
import AlphabetLowercase from '@axiona/string/alphabet-lowercase.js';
import AlphabetUppercase from '@axiona/string/alphabet-uppercase.js';
import Digit from '@axiona/string/digit.js';
import PercentEncodedList from './percent-encoded.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const symbol = '_-.~';

it('symbol', ()=>{

    expect(symbol.match(Unreserved)).toBeTruthy();
});

it('lower', ()=>{

    expect(AlphabetLowercase.match(Unreserved)).toBeTruthy();
});

it('upper', ()=>{

    expect(AlphabetUppercase.match(Unreserved)).toBeTruthy();
});

it('digit', ()=>{

    expect(Digit.match(Unreserved)).toBeTruthy();
});

for(const percent of PercentEncodedList()) {

    it('all', ()=>{

        const all = ShuffleParameters([symbol, percent, AlphabetLowercase, AlphabetUppercase, Digit]).join('');

        expect(all.match(Unreserved)).toBeTruthy();
    });

}

