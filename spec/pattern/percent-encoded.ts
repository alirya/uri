import PadPrefix from "@dikac/t-string/pad-prefix";


export default function * PercentEncodedList() {

    for(let i = 0; i<=255; i++) {

        yield '%' + PadPrefix(i.toString(16), 2, '0');

    }
}
