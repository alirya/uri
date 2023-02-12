import User from '../../../dist/user/boolean/user.js';

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

    const validatable = User(user);

    it(user, ()=>{

        expect(validatable).toBe(valid);
    });

}
