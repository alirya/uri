import UserInfo from "./validatable/user-info";
export default function String(value: string): UserInfo<string>;
export default function String<MessageType>(value: string, message: (result: Omit<UserInfo<MessageType>, 'message'>) => MessageType): UserInfo<MessageType>;
