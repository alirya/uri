import ToString from '@axiona/string/to-string.js';

export default interface Port<PortTemplate extends ToString = ToString> {
    port ?: PortTemplate;
}
