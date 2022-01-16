import ToString from '@alirya/string/to-string';

export default interface Fragment<FragmentType extends ToString = ToString> {
    fragment ?: FragmentType;
}
