import Greater from "@dikac/t-number/validatable/greater";
import GreaterMessage from "@dikac/t-number/validatable/string/greater";
import Lower from "@dikac/t-number/validatable/lower";
import LowerMessage from "@dikac/t-number/validatable/string/lower";
import String from "@dikac/t-string/boolean/string";
import Numeric from "@dikac/t-string/validatable/numeric";
import NumericMessage from "@dikac/t-string/validatable/string/numeric";
export default function Port(port, message) {
    if (String(port)) {
        let digit = new Numeric(port, message ? message : NumericMessage);
        if (digit.valid) {
            port = parseInt(port);
        }
        else {
            return digit;
        }
    }
    let greater = new Greater(port, 0, true, message ? message : GreaterMessage);
    if (!greater.valid) {
        return greater;
    }
    return new Lower(port, 65535, true, message ? message : LowerMessage);
}
//# sourceMappingURL=port.js.map