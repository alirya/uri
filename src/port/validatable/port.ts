import Greater from "@alirya/number/validatable/greater";
import GreaterMessage from "@alirya/number/validatable/string/greater";
import Lower from "@alirya/number/validatable/lower";
import LowerMessage from "@alirya/number/validatable/string/lower";
import String from "@alirya/string/boolean/string";
import Numeric from "@alirya/string/validatable/numeric";
import NumericMessage from "@alirya/string/validatable/string/numeric";
import Value from "@alirya/value/value";
import Validatable from "@alirya/validatable/validatable";
import Message from "@alirya/message/message";
import ValueOf from "@alirya/value/value-of/value-of";

export default function Port(
    port : number|string,
    message ?: (result:Readonly<Value<number|string> & Validatable>)=>string
) : Readonly<Value<string|number> & Message<string> & Validatable> & ValueOf<number|string> {

    if(String(port)) {

        let digit = new Numeric(port, message ? message : NumericMessage);

        if(digit.valid) {

            port = parseInt(port);

        } else {

            return digit;
        }
    }

    let greater = new Greater(port, 0, true, message ? message : GreaterMessage);

    if(!greater.valid) {

        return greater;
    }

    return new Lower(port, 65535, true, message ? message : LowerMessage);
}
