import Uri from '../uri.js';
import {PrefixParameters} from '@alirya/string/prefix.js';
import Path from '../path/path.js';
import JoinAuthority from '../authority/string/join.js';
import Authority from '../authority/authority.js';

export default function Join (
    uri :  Uri,
    authority : (authority:Authority)=>string = JoinAuthority
) : string {

    let result : string = '';

    let scheme = uri.scheme ? uri.scheme.toString() : '';

    if(scheme) {

        result += scheme + ':';
    }

    let auth = uri.authority ? authority(uri.authority) : '';

    if(auth) {

        result = result + '//' + auth;
    }

    let path = uri.path ? uri.path.toString() : '';

    if(path) {

        result += PrefixParameters(path, (uri.path as Path).separator);
    }

    let query = uri.query ? uri.query.toString() : '';

    if(query) {

        result += PrefixParameters(query, '?');
    }

    let fragment = uri.fragment ? uri.fragment.toString() : '';

    if(fragment) {

        result += PrefixParameters(fragment, '#');
    }

    return result;
}
