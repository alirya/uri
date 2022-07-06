import PercentEncoded from '../../dist/pattern/percent-encoded.js';
import PercentEncodedList from './percent-encoded.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

for(let percent of PercentEncodedList()) {

    it(percent, ()=>{
        expect(percent.match(PercentEncoded)).toBeTruthy();
    });

}
