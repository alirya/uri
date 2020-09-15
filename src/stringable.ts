import Path from "./path/path";
import Authority from "./authority/authority";
import Uri from "./uri";
import ToString from "@dikac/t-string/to-string";
import Standard from "./standard";
import Join from "./string/join";

export default
    class Stringable<
        Scheme extends ToString = ToString,
        AuthorityTemplate extends Authority = Authority,
        PathTemplate extends Path = Path,
        Query extends ToString = ToString,
        Fragment extends ToString = ToString,
    > extends Standard<Scheme, AuthorityTemplate, PathTemplate, Query, Fragment>
        implements ToString
{
    constructor(
        scheme ?: Scheme,
        authority ?: AuthorityTemplate,
        path ?: PathTemplate,
        query ?: Query,
        fragment ?: Fragment,
        public converter : (uri : Uri) => string = Join
    ) {

        super(scheme, authority, path, query, fragment);
    }

    toString(): string {

        return this.converter(this);
    }

}
