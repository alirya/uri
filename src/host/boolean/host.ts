import DomainName from "./domain-name";
import Ipv4 from "./ipv4";
import Ipv6 from "./ipv6";

export default function Host(host : string) : boolean {

    return DomainName(host) || Ipv4(host) || Ipv6(host);

}
