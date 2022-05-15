import Path from './path/path';
import Authority from './authority/authority';
import Uri from './uri';
import ToString from '@alirya/string/to-string';
import Join from './string/join';
import StringableParameters from "./stringable-parameters";
import AuthorityInterface from "./authority/authority";


export interface StringableParameterArgument<
    Scheme extends ToString  = ToString,
    Authority extends AuthorityInterface = AuthorityInterface,
    PathType extends Path = Path,
    Query extends ToString  = ToString,
    Fragment extends ToString  = ToString,
> extends Uri<Scheme, Authority, PathType, Query, Fragment> {

    converter ?: (uri : Uri) => string
}

export default
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
        } : StringableParameterArgument<Scheme, AuthorityTemplate, PathTemplate, Query, Fragment>
    ) {

        super(scheme, authority, path, query, fragment, converter);
    }

}
