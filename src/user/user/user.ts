import ToString from '@axiona/string/to-string.js';

export default interface User<UserType extends ToString = ToString> {
    user ?: UserType;
}
