import AuthorityInterface from '../authority.js';

export default interface Authority<AuthorityType extends AuthorityInterface = AuthorityInterface> {
    authority ?: AuthorityType;
}
