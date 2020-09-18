import ToUri from "./to-uri";
export default function ToUriObject(port) {
    if (port.port) {
        return ToUri(port);
    }
    return '';
}
//# sourceMappingURL=to-uri-object.js.map