import Path from './path/path.js';
import Authority from './authority/authority.js';
import Uri from './uri.js';
import ToString from '@alirya/string/to-string.js';
import Standard from './standard.js';
import Join from './string/join.js';
import AuthorityInterface from './authority/authority.js';

export class StringableParameters<
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



export interface StringableArgument<
    Scheme extends ToString  = ToString,
    Authority extends AuthorityInterface = AuthorityInterface,
    PathType extends Path = Path,
    Query extends ToString  = ToString,
    Fragment extends ToString  = ToString,
> extends Uri<Scheme, Authority, PathType, Query, Fragment> {

    converter ?: (uri : Uri) => string;
}

export
    class StringableParameter<
        Scheme extends ToString = ToString,
        AuthorityTemplate extends Authority = Authority,
        PathTemplate extends Path = Path,
        Query extends ToString = ToString,
        Fragment extends ToString = ToString,
    > extends StringableParameters<Scheme, AuthorityTemplate, PathTemplate, Query, Fragment>
{
    constructor(
        {
            scheme,
            authority,
            path,
            query,
            fragment,
            converter = Join
        } : StringableArgument<Scheme, AuthorityTemplate, PathTemplate, Query, Fragment>
    ) {

        super(scheme, authority, path, query, fragment, converter);
    }

}


namespace Stringable {
    export const Parameters = StringableParameters;
    export const Parameter = StringableParameter;
}
export default Stringable;
