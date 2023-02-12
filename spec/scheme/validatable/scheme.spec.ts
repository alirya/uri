import {SchemeParameters} from '../../../dist/scheme/validatable/scheme.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


const list = new Map<string, boolean>();

list.set('ftp', true);
list.set('http', true);
list.set('https', true);
list.set('www', true);
list.set('A+.-', true);
list.set('A123', true);
list.set('h', true);

list.set(':', false);
list.set('-a', false);
list.set('//', false);
list.set('://', false);


for(const [scheme, valid] of list) {

    const validatable = SchemeParameters(scheme);

    it(scheme, ()=>{

        expect(validatable.valid).toBe(valid);

        if(validatable.valid) {

            expect(validatable.message).toBe(`value is valid scheme.`);

        } else {

            expect(validatable.message).toBe(`value is not valid scheme, actual "${scheme}".`);

        }

    });

}
