import {EnsureParameters} from '../../../dist/user/ensure';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let list : [string, boolean, string][] = [];

list.push(['ftp', true,  'ftp']);
list.push(['http', true,  'http']);
list.push(['https', true,  'https']);
list.push(['www' ,true,  'www']);
list.push(['ftp:' ,false,  'ftp']);
list.push(['http:' ,false, 'http']);
list.push(['https:' ,false , 'https']);
list.push(['www:' ,false,  'www']);
list.push(['A+.-' ,true,  'A+.-']);
list.push(['A123', true,  'A123']);
list.push(['h', true,  'h']);
list.push([':', false,  '']);
list.push(['-a', true,  '-a']);
list.push(['//', false,  '//']);
list.push(['://', false,  '://']);


for(let [user, valid, uri] of list) {

    it(user, ()=>{

        if(valid) {

            expect(EnsureParameters(user).toString()).toBe(uri);

        } else {

            try {

                expect(EnsureParameters(user).toString()).toBe(uri);
                fail('error should thrown');

            } catch (error) {

                expect(error).toBeInstanceOf(Error);
            }
        }

    });

}
