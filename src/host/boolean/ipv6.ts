import {v6} from 'is-ip';
import RemovePrefix from '@alirya/string/remove-prefix-parameters';
import RemoveSuffix from '@alirya/string/remove-suffix-parameters';

export default function Ipv6(string : string) : boolean {

    if(string[0] === '[' && string[string.length - 1] === ']') {

        string = RemovePrefix(string,'[');
        string = RemoveSuffix(string, ']');
    }

    return v6(string);
}
