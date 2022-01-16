import Path from './path/path';
import Authority from './authority/authority';
import Uri from './uri';
import ToString from '@alirya/string/to-string';
export default class Standard<Scheme extends ToString = ToString, AuthorityTemplate extends Authority = Authority, PathTemplate extends Path = Path, Query extends ToString = ToString, Fragment extends ToString = ToString> implements Uri<Scheme, AuthorityTemplate, PathTemplate, Query, Fragment> {
    scheme?: Scheme | undefined;
    authority?: AuthorityTemplate | undefined;
    path?: PathTemplate | undefined;
    query?: Query | undefined;
    fragment?: Fragment | undefined;
    constructor(scheme?: Scheme | undefined, authority?: AuthorityTemplate | undefined, path?: PathTemplate | undefined, query?: Query | undefined, fragment?: Fragment | undefined);
}
//# sourceMappingURL=standard.d.ts.map