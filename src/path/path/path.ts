import PathInterface from '../path.js';

export default interface Path<PathType extends PathInterface = PathInterface> {
    path ?: PathType;
}
