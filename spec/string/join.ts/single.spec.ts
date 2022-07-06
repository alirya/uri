import Uri from '../../../dist/uri.js';
import Join from '../../../dist/string/join.js';
import ToString from '@alirya/string/to-string.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let rootless : [string, Uri][] = [];

rootless.push(['scheme:', {
    scheme : 'scheme'
}]);

rootless.push(['//host', {
    authority : {
        host:'host',
    },
}]);

rootless.push(['', {
    authority : {
        port:1337 as ToString,
    },
}]);

rootless.push(['', {
    authority : {
        userInfo : {
            user : 'user',
        }
    },
}]);

rootless.push(['', {
    authority : {
        userInfo : {
            password : 'password'
        }
    },
}]);

rootless.push(['/path', {
    path : {
        separator : '/',
        toString(): string {return 'path';}
    }
}]);

rootless.push(['?query', {
    query : 'query'
}]);

rootless.push(['#fragment', {
    fragment : 'fragment'
}]);

for(let [index, [expectation, uri]] of rootless.entries()) {

    it(`[${index}] ${expectation}`, () => expect(Join(uri)).toBe(expectation));
}
