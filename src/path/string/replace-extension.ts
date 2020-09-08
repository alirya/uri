import Escape from "@dikac/t-string/pattern/escape";

export default function ReplaceExtension(
    path : string,
    extension : string,
    delimiter : string = ':/\\'
) : string {

    if(extension.length) {

        extension = '.' + extension;
    }

    let escaped = Escape(delimiter);

    // determine if replaced or not, in case file without extension
    // replace operation will not work
    let replaced : boolean = false;

    path = path.replace(new RegExp(`\\.[^${escaped}.]+$`), (substring, args) => {

        replaced = true;
        //console.log([0, substring, args]);
        return extension;
    });

    if(replaced) {
        //console.log([1, path]);
        return path;
    }

    // bare file
    if(path.match(new RegExp(`[^${escaped}]+$`))) {

        //console.log([2, path]);
        return path + extension;
    }

    //console.log([3, path]);
    return path;
}
