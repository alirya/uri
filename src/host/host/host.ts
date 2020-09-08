import ToString from "@dikac/t-string/to-string";

export default interface host<HostType extends ToString = ToString> {
    host ?: HostType;
}
