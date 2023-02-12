import {FragmentParameters} from '../../../dist/fragment/validatable/fragment.js';

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
list.set('-a', true);
list.set('//', true);
list.set('://', false);


for(const [fragment, valid] of list) {

    const validatable = FragmentParameters(fragment);

    it(fragment, ()=>{

        expect(validatable.valid).toBe(valid);

        if(validatable.valid) {

            expect(validatable.message).toBe(`value is valid fragment.`);

        } else {

            expect(validatable.message).toBe(`value is not valid fragment, actual "${fragment}".`);

        }

    });

}
