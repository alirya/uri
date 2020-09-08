import Validatable from "@dikac/t-validator/validatable/validatable";
import AuthorityValidatable from "../../validatable/validatable";
import UserInfoValidatable from "../../../user-info/validatable/validatable";
export default function UserInfo(result: Readonly<AuthorityValidatable<string, UserInfoValidatable<string>, Readonly<Validatable<string, string>>, Readonly<Validatable<string, string>>>>): string;
