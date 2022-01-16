import Path from './path/path';
import Authority from './authority/authority';
import Uri from './uri';
import ToString from '@alirya/string/to-string';
import Standard from './standard';
export default class Stringable<Scheme extends ToString = ToString, AuthorityTemplate extends Authority = Authority, PathTemplate extends Path = Path, Query extends ToString = ToString, Fragment extends ToString = ToString> extends Standard<Scheme, AuthorityTemplate, PathTemplate, Query, Fragment> implements ToString {
    converter: (uri: Uri) => string;
    constructor(scheme?: Scheme, authority?: AuthorityTemplate, path?: PathTemplate, query?: Query, fragment?: Fragment, converter?: (uri: Uri) => string);
    toString(): string;
}
//# sourceMappingURL=stringable.d.ts.map