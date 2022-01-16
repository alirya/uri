import ToString from '@alirya/string/to-string';

export default interface User<UserType extends ToString = ToString> {
    user ?: UserType;
}
