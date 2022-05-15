import AuthorityInterface from './validatable';
import AuthorityParameters from "./authority-parameters";

export default class AuthorityParameter<MessageType = unknown> extends AuthorityParameters<MessageType> {

    constructor(
        {
            value,
            message,
        } : {
            value : string,
            message : (result : Omit<AuthorityInterface<MessageType>, 'message'>) => MessageType
        }
    ) {

        super(value, message)
    }

}
