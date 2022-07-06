import ToString from '@alirya/string/to-string.js';

export default interface Fragment<FragmentType extends ToString = ToString> {
    fragment ?: FragmentType;
}
