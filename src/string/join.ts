import Uri from '../uri';
import {PrefixParameters} from '@alirya/string/prefix';
import Path from '../path/path';
import JoinAuthority from '../authority/string/join';
import Authority from '../authority/authority';

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
