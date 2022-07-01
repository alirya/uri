import PercentEncoded from '../../dist/pattern/percent-encoded';
import {PadParameters} from '@alirya/string/pad';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

for(let i = 0; i<=255; i++) {

    let string = '%' + PadParameters(i.toString(16), 2, '0');

    it(string, ()=>{
        expect(string.match(PercentEncoded)).toBeTruthy();
    });

}
