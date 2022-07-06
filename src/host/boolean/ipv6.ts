import {v6} from 'is-ip.js';
import {RemovePrefixParameters} from '@alirya/string/remove-prefix.js';
import {RemoveSuffixParameters} from '@alirya/string/remove-suffix.js';

export default function Ipv6(string : string) : boolean {

    if(string[0] === '[' && string[string.length - 1] === ']') {

        string = RemovePrefixParameters(string,'[');
        string = RemoveSuffixParameters(string, ']');
    }

    return v6(string);
}
