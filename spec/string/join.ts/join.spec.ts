import Uri from "../../../dist/uri";
import Join from "../../../dist/string/join";
import ToString from "@alirya/string/to-string";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

let rootless : [string, Uri][] = [];

rootless.push(['scheme:', {
    scheme : 'scheme'
}]);

rootless.push(['scheme://host', {
    scheme : 'scheme',
    authority : {
        host:'host'
    }
}]);

rootless.push(['scheme://host:1337', {
    scheme : 'scheme',
    authority : {
        host:'host',
        port:1337 as ToString
    }
}]);


rootless.push(['scheme://user@host:1337', {
    scheme : 'scheme',
    authority : {
        host:'host',
        port:1337 as ToString,
        userInfo : {
            user : 'user'
        }
    }
}]);

rootless.push(['scheme://user:password@host:1337', {
    scheme : 'scheme',
    authority : {
        host:'host',
        port:1337 as ToString,
        userInfo : {
            user : 'user',
            password : 'password'
        }
    },
}]);

rootless.push(['scheme://user:password@host:1337/path', {
    scheme : 'scheme',
    authority : {
        host:'host',
        port:1337 as ToString,
        userInfo : {
            user : 'user',
            password : 'password'
        }
    },
    path : {
        delimiter : '/',
        toString(): string {return 'path'}
    }
}]);

rootless.push(['scheme://user:password@host:1337/path?query', {
    scheme : 'scheme',
    authority : {
        host:'host',
        port:1337 as ToString,
        userInfo : {
            user : 'user',
            password : 'password'
        }
    },
    path : {
        delimiter : '/',
        toString(): string {return 'path'}
    },
    query : 'query'
}]);


rootless.push(['scheme://user:password@host:1337/path?query#fragment', {
    scheme : 'scheme',
    authority : {
        host:'host',
        port:1337 as ToString,
        userInfo : {
            user : 'user',
            password : 'password'
        }
    },
    path : {
        delimiter : '/',
        toString(): string {return 'path'}
    },
    query : 'query',
    fragment : 'fragment'
}]);

rootless.push(['//user:password@host:1337/path?query#fragment', {
    authority : {
        host:'host',
        port:1337 as ToString,
        userInfo : {
            user : 'user',
            password : 'password'
        }
    },
    path : {
        delimiter : '/',
        toString(): string {return 'path'}
    },
    query : 'query',
    fragment : 'fragment'
}]);

rootless.push(['/path?query#fragment', {
    authority : {
        port:1337 as ToString,
        userInfo : {
            user : 'user',
            password : 'password'
        }
    },
    path : {
        delimiter : '/',
        toString(): string {return 'path'}
    },
    query : 'query',
    fragment : 'fragment'
}]);

rootless.push(['/path?query#fragment', {
    path : {
        delimiter : '/',
        toString(): string {return 'path'}
    },
    query : 'query',
    fragment : 'fragment'
}]);

rootless.push(['?query#fragment', {
    query : 'query',
    fragment : 'fragment'
}]);

rootless.push(['#fragment', {
    fragment : 'fragment'
}]);

for(let [index, [expectation, uri]] of rootless.entries()) {

    it(`[${index}] ${expectation}`, () => expect(Join(uri)).toBe(expectation));
}
