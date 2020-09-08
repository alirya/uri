import Path from "../path";

export default interface File extends Path {

    extension : string;
    name : string;
    file : string;
}
