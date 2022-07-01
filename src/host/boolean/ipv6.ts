import {v6} from 'is-ip';
import {RemovePrefixParameters} from '@alirya/string/remove-prefix';
import {RemoveSuffixParameters} from '@alirya/string/remove-suffix';

export default function Ipv6(string : string) : boolean {

    if(string[0] === '[' && string[string.length - 1] === ']') {

        string = RemovePrefixParameters(string,'[');
        string = RemoveSuffixParameters(string, ']');
    }

    return v6(string);
}
