import ToString from '@axiona/string/to-string.js';

export default interface host<HostType extends ToString = ToString> {
    host ?: HostType;
}
