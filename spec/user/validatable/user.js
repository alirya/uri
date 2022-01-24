import User from '../../../dist/user/validatable/user';
it('enable console log', () => { spyOn(console, 'log').and.callThrough(); });
let list = new Map();
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
for (let [user, valid] of list) {
    let validatable = User(user);
    it(user, () => {
        expect(validatable.valid).toBe(valid);
        if (validatable.valid) {
            expect(validatable.message).toBe(`value is valid user.`);
        }
        else {
            expect(validatable.message).toBe(`value must valid user, actual "${user}".`);
        }
    });
}
//# sourceMappingURL=user.js.map