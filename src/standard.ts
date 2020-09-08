import Path from "./path/path";
import Authority from "./authority/authority";
import Uri from "./uri";
import ToString from "@dikac/t-string/to-string";

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
