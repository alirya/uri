import ToUri from "../../../dist/scheme/string/to-uri";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

let list = new Map<string, string>();

list.set('ftp', 'ftp:');
list.set('http', 'http:');
list.set('https', 'https:');
list.set('www', 'www:');
list.set('ftp:', 'ftp:');
list.set('http:', 'http:');
list.set('https:', 'https:');
list.set('www:', 'www:');
list.set('A+.-', 'A+.-:');
list.set('A123', 'A123:');
list.set('h', 'h:');
list.set(':', ':');
list.set('-a', '-a:');
list.set('//', '//:');
list.set('://', '://:');


for(let [scheme, uri] of list) {

    it(scheme, ()=>{

        expect(ToUri(scheme)).toBe(uri);

    });

}
