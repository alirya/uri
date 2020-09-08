import PathInterface from "../path";
export default interface Path<PathType extends PathInterface = PathInterface> {
    path?: PathType;
}
