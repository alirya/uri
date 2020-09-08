export default function Trim(authority : string) : string {

    return authority.replace(/^[/]{2}/, '')
}