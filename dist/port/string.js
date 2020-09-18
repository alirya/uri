import PortMessage from "./validatable/string/port";
import Port from "./validatable/port";
export default function String(value, message = PortMessage) {
    return Port(value, message);
}
//# sourceMappingURL=string.js.map