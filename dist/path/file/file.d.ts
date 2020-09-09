import Path from "../path";
export default interface File extends Path {
    dir: string;
    extension: string;
    name: string;
    file: string;
}
