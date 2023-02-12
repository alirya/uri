import Uri from '../uri.js';
import {PrefixParameters} from '@alirya/string/prefix.js';
import Path from '../path/path.js';
import JoinAuthority from '../authority/string/join.js';
import Authority from '../authority/authority.js';

export default function Join (
    uri :  Uri,
    authority : (authority:Authority)=>string = JoinAuthority
) : string {

    let result  = '';

    const scheme = uri.scheme ? uri.scheme.toString() : '';

    if(scheme) {

        result += scheme + ':';
    }

    const auth = uri.authority ? authority(uri.authority) : '';

    if(auth) {

        result = result + '//' + auth;
    }

    const path = uri.path ? uri.path.toString() : '';

    if(path) {

        result += PrefixParameters(path, (uri.path as Path).separator);
    }

    const query = uri.query ? uri.query.toString() : '';

    if(query) {

        result += PrefixParameters(query, '?');
    }

    const fragment = uri.fragment ? uri.fragment.toString() : '';

    if(fragment) {

        result += PrefixParameters(fragment, '#');
    }

    return result;
}
