import Ipv4 from '../../../dist/host/validatable/ipv4';
import Truncate from '@alirya/string/truncate-parameters';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


let list : [string, boolean][] = [];

list.push(['255.255.255.255', true]);
list.push(['0.0.0.0', true]);
list.push(['1.1.1.1', true]);
list.push(['255.0.255.0', true]);

list.push(['256.255.255.255', false]);
list.push(['255.255.255.255:70', false]);
list.push(['-1.255.255.255:70', false]);
list.push(['google', false]);



for(let [scheme, valid] of list) {

    let validatable = Ipv4(scheme);

    it(scheme, ()=>{

        expect(validatable.valid).toBe(valid);

        if(validatable.valid) {

            expect(validatable.message).toBe(`value is valid ipv4.`);

        } else {

            expect(validatable.message).toBe(`value is not valid ipv4, actual "${Truncate(scheme, 10)}".`);

        }

    });

}
