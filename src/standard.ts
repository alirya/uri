import Path from './path/path.js';
import Authority from './authority/authority.js';
import Uri from './uri.js';
import ToString from '@alirya/string/to-string.js';

export default
    class Standard<
        Scheme extends ToString = ToString,
        AuthorityTemplate extends Authority = Authority,
        PathTemplate extends Path = Path,
        Query extends ToString = ToString,
        Fragment extends ToString = ToString,
    >
    implements Uri<Scheme, AuthorityTemplate, PathTemplate, Query, Fragment>
{
    constructor(
        public scheme ?: Scheme,
        public authority ?: AuthorityTemplate,
        public path ?: PathTemplate,
        public query ?: Query,
        public fragment ?: Fragment,
    ) {
    }
}
