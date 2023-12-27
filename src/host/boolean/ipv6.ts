import IsIp from 'is-ip';
import {RemovePrefixParameters} from '@axiona/string/remove-prefix.js';
import {RemoveSuffixParameters} from '@axiona/string/remove-suffix.js';

const {v6} = IsIp;

export default function Ipv6(string : string) : boolean {

    if(string[0] === '[' && string[string.length - 1] === ']') {

        string = RemovePrefixParameters(string,'[');
        string = RemoveSuffixParameters(string, ']');
    }

    return v6(string);
}
