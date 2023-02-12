import PercentEncoded from '../../dist/pattern/percent-encoded.js';
import {PadParameters} from '@alirya/string/pad.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

for(let i = 0; i<=255; i++) {

    const string = '%' + PadParameters(i.toString(16), 2, '0');

    it(string, ()=>{
        expect(string.match(PercentEncoded)).toBeTruthy();
    });

}
