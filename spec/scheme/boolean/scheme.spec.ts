import Scheme from '../../../dist/scheme/boolean/scheme.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


let list = new Map<string, boolean>();

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


for(let [scheme, valid] of list) {

    let validatable = Scheme(scheme);

    it(scheme, ()=>{

        expect(validatable).toBe(valid);
    });

}
