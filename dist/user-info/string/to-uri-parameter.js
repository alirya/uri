import SafeCast from '@alirya/string/safe-cast';
export default function ToUriParameter(user, password) {
    let result = SafeCast(user);
    let _password = SafeCast(password);
    if (_password.length !== 0) {
        result = result + ':' + _password;
    }
    return result;
}
//# sourceMappingURL=to-uri-parameter.js.map