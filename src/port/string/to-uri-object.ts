import Port from '../port/port';
import ToUri from './to-uri';

export default function ToUriObject(port : Port) : string {

    if(port.port) {

        return ToUri(port);
    }

    return '';
}
