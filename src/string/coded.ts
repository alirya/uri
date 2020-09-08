import Value from "@dikac/t-value/value";
import ValueOf from "@dikac/t-value/value-of/value-of";

export default class Coded implements Value<string>, ValueOf<string> {

    #value : string = '';

    constructor(
        value : string,
        readonly encoder : (decoded:string)=>string = encodeURIComponent,
        readonly decoder : (encoded:string)=>string = decodeURIComponent,
    ) {

        this.value = value;
    }

    set value (string : string) {

        this.#value = this.decoder(string);
    }

    get value () : string {

        return this.#value;
    }

    valueOf(): string {

        return this.toString();
    }

    toString() : string {

        return this.encoder(this.value);
    }
}
