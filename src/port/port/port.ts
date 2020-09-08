import ToString from "@dikac/t-string/to-string";

export default interface Port<PortTemplate extends ToString = ToString> {
    port ?: PortTemplate;
}
