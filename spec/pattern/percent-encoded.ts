import {PadParameters} from '@alirya/string/pad';


export default function * PercentEncodedList() {

    for(let i = 0; i<=255; i++) {

        yield '%' + PadParameters(i.toString(16), 2, '0');

    }
}
