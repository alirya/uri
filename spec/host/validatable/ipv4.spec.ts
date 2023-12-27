import {Ipv4Parameters} from '../../../dist/host/validatable/ipv4.js';
import {TruncateParameters} from '@axiona/string/truncate.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


const list : [string, boolean][] = [];

list.push(['255.255.255.255', true]);
list.push(['0.0.0.0', true]);
list.push(['1.1.1.1', true]);
list.push(['255.0.255.0', true]);

list.push(['256.255.255.255', false]);
list.push(['255.255.255.255:70', false]);
list.push(['-1.255.255.255:70', false]);
list.push(['google', false]);



for(const [scheme, valid] of list) {

    const validatable = Ipv4Parameters(scheme);

    it(scheme, ()=>{

        expect(validatable.valid).toBe(valid);

        if(validatable.valid) {

            expect(validatable.message).toBe(`value is valid ipv4.`);

        } else {

            expect(validatable.message).toBe(`value is not valid ipv4, actual "${TruncateParameters(scheme, 10)}".`);

        }

    });

}
