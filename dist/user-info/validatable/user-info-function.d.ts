import UserInfo from './user-info';
export default function UserInfoFunction(value: string): UserInfo<string>;
export default function UserInfoFunction<MessageType>(value: string, message: (result: Omit<UserInfo<MessageType>, 'message'>) => MessageType): UserInfo<MessageType>;
//# sourceMappingURL=user-info-function.d.ts.map