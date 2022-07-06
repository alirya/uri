import Path from '../path.js';

export default interface File extends Path {

    directory : string;
    extension : string;
    name : string;
    file : string;
}
