import User from "../../user/validatable/user";
import Password from "../../password/validatable/password";
import NotEmpty from "@dikac/t-string/boolean/not-empty";
import SetGetter from "@dikac/t-object/value/value/set-getter";
export default class UserInfo {
    constructor(value, messageFactory) {
        this.value = value;
        this.messageFactory = messageFactory;
        if (NotEmpty(value)) {
            let [user, password] = value.split(':', 2);
            this.user = User(user);
            if (password !== undefined) {
                this.password = Password(password);
            }
        }
    }
    get message() {
        return SetGetter(this, 'message', this.messageFactory(this));
    }
    get valid() {
        if (this.user) {
            if (!this.user.valid) {
                return false;
            }
        }
        if (this.password) {
            if (!this.password.valid) {
                return false;
            }
        }
        return true;
    }
}
//# sourceMappingURL=user-info.js.map