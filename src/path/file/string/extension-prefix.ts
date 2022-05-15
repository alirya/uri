export default function ExtensionPrefix (extension : string) : string {

    return extension.length !== 0 ? '.' + extension : '';
}
