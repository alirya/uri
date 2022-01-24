import Unreserved from '../../dist/pattern/unreserved';
import Shuffle from '@alirya/array/shuffle-parameters';
import AlphabetLowercase from '@alirya/string/alphabet-lowercase';
import AlphabetUppercase from '@alirya/string/alphabet-uppercase';
import Digit from '@alirya/string/digit';
import PercentEncodedList from './percent-encoded';

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

for(let percent of PercentEncodedList()) {

    it('all', ()=>{

        let all = Shuffle([symbol, percent, AlphabetLowercase, AlphabetUppercase, Digit]).join('');

        expect(all.match(Unreserved)).toBeTruthy();
    });

}

