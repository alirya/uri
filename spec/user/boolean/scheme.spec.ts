import User from '../../../dist/user/boolean/user';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let list = new Map<string, boolean>();

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


for(let [user, valid] of list) {

    let validatable = User(user);

    it(user, ()=>{

        expect(validatable).toBe(valid);
    });

}
