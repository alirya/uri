import ToString from "@dikac/t-string/to-string";
export default interface User<UserType extends ToString = ToString> {
    user?: UserType;
}
