import UserInfoMessage from './validatable/string/user-info-parameter';
import ReadonlyValidatable from "./validatable/readonly";
import {
    UserInfoClassParametersArgument as EnsureParameterArgument
} from "./validatable/user-info-class-parameter";
import EnsureParameters from "./ensure-parameters";

export {EnsureParameterArgument};

export default function EnsureParameter(
    {
        value
    } : Omit<EnsureParameterArgument<string>, 'message'>
) : ReadonlyValidatable<string>;

export default function EnsureParameter<MessageType>(
    {
        value,
        message,
    } : Required<EnsureParameterArgument<MessageType>>
) : ReadonlyValidatable<MessageType>;

export default function EnsureParameter<MessageType>(
    {
        value,
        message = UserInfoMessage,
    } : Required<EnsureParameterArgument<MessageType|string>>

) : ReadonlyValidatable<MessageType|string> {

    return EnsureParameters(value, (value, valid) => message({value, valid}));
}

