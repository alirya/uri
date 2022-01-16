import Path from "./path";
import Value from "@alirya/value/value";
import Escape from "@alirya/string/pattern/escape";

export default class Standard implements Path, Value<string> {
    constructor(
        public value : string,
        public delimiter : string = '/',
        public delimiters : string = '/\\:'
    ) {
    }

    get splitter() : string {

        return this.delimiters + this.delimiter;
    }

    toString(): string {

        const escaped = Escape(this.splitter)

        const pattern = new RegExp(`[${escaped}]+`, 'g');

        return this.value.replace(pattern, this.delimiter[0]);
    }
}
