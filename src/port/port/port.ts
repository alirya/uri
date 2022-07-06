import ToString from '@alirya/string/to-string.js';

export default interface Port<PortTemplate extends ToString = ToString> {
    port ?: PortTemplate;
}
