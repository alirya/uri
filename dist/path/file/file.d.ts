import Path from "../path";
export default interface File extends Path {
    directory: string;
    extension: string;
    name: string;
    file: string;
}
