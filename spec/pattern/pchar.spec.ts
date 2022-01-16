import PercentEncoded from '../../dist/pattern/percent-encoded';
import PadPrefix from '@alirya/string/pad-prefix';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

for(let i = 0; i<=255; i++) {

    let string = '%' + PadPrefix(i.toString(16), 2, '0');

    it(string, ()=>{
        expect(string.match(PercentEncoded)).toBeTruthy();
    });

}
