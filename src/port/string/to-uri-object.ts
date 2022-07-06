import Port from '../port/port.js';
import ToUri from './to-uri.js';

export default function ToUriObject(port : Port) : string {

    if(port.port) {

        return ToUri(port);
    }

    return '';
}
