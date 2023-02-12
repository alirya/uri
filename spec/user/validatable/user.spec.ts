import {UserParameters} from '../../../dist/user/validatable/user.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


const list = new Map<string, boolean>();

list.set('ftp', true);
list.set('http', true);
list.set('https', true);
list.set('www', true);
list.set('A+.-', true);
list.set('A123', true);
list.set('h', true);
list.set('-a', true);

list.set(':', false);
list.set('//', false);
list.set('://', false);


for(const [user, valid] of list) {

    const validatable = UserParameters(user);

    it(user, ()=>{

        expect(validatable.valid).toBe(valid);

        if(validatable.valid) {

            expect(validatable.message).toBe(`value is valid user.`);

        } else {

            expect(validatable.message).toBe(`value is not valid user, actual "${user}".`);

        }

    });

}
