import Path from './path/path';
import Authority from './authority/authority';
import Uri from './uri';
import ToString from '@alirya/string/to-string';
import Standard from './standard';
import Join from './string/join';
import AuthorityInterface from './authority/authority';

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
