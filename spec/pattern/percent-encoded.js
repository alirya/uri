import PadPrefix from '@axiona/string/pad-parameters';
export default function* PercentEncodedList() {
    for (let i = 0; i <= 255; i++) {
        yield '%' + PadPrefix(i.toString(16), 2, '0');
    }
}
//# sourceMappingURL=percent-encoded.js.map
