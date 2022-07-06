import DomainName from './domain-name.js';
import Ipv4 from './ipv4.js';
import Ipv6 from './ipv6.js';

export default function Host(host : string) : boolean {

    return DomainName(host) || Ipv4(host) || Ipv6(host);

}
