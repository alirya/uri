import AuthorityInterface from "./authority/authority";
import ToString from "@alirya/string/to-string";
import Path from "./path/path";
import Query from "./query/query/query";
import Scheme from "./scheme/scheme/scheme";
import Fragment from "./fragment/fragment/fragment";
import Authority from "./authority/authority/authority";
import PathContainer from "./path/path/path";

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
