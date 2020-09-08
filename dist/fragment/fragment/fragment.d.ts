import ToString from "@dikac/t-string/to-string";
export default interface Fragment<FragmentType extends ToString = ToString> {
    fragment?: FragmentType;
}
