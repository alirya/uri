import ToString from "@alirya/string/to-string";

export default interface Port<PortTemplate extends ToString = ToString> {
    port ?: PortTemplate;
}
