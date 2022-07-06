import AuthorityInterface from './authority/authority.js';
import ToString from '@alirya/string/to-string.js';
import Path from './path/path.js';
import Query from './query/query/query.js';
import Scheme from './scheme/scheme/scheme.js';
import Fragment from './fragment/fragment/fragment.js';
import Authority from './authority/authority/authority.js';
import PathContainer from './path/path/path.js';

export default interface Uri<
    SchemeType extends ToString  = ToString,
    AuthorityType extends AuthorityInterface = AuthorityInterface,
    PathType extends Path = Path,
    QueryType extends ToString  = ToString,
    FragmentType extends ToString  = ToString,
> extends
    Query<QueryType>,
    PathContainer<PathType>,
    Fragment<FragmentType>,
    Scheme<SchemeType>,
    Authority<AuthorityType> {}
