import ToString from '@axiona/string/to-string.js';

export default interface Fragment<FragmentType extends ToString = ToString> {
    fragment ?: FragmentType;
}
