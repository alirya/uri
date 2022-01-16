import ToString from '@alirya/string/to-string';

export default interface host<HostType extends ToString = ToString> {
    host ?: HostType;
}
