import ToString from '@alirya/string/to-string.js';

export default interface User<UserType extends ToString = ToString> {
    user ?: UserType;
}
