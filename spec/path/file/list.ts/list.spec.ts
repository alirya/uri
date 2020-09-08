import FileList from "../../../../dist/path/file/list";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

let map : {
    delimiter:string,
    delimiters:string,
    file:string,
    name:string,
    extension:string,
    expectation:string,
    value:string[]
}[] = [];

map.push({
    value:['root','parent','child','file.ext'],
    delimiter:'/',
    delimiters:'/\\:',
    file:'file.ext',
    name:'file',
    extension:'ext',
    expectation :'root/parent/child/file.ext',
});

map.push({
    value:['root','parent','child','file.ext'],
    delimiter:':',
    delimiters:'/\\:',
    file:'file.ext',
    name:'file',
    extension:'ext',
    expectation :'root:parent:child:file.ext'
});

map.push({
    value:['root','parent','child','file.ext'],
    delimiter:'\\',
    delimiters:'/\\:',
    file:'file.ext',
    name:'file',
    extension:'ext',
    expectation :'root\\parent\\child\\file.ext'
});

map.push({
    value:['root/\\:parent','child/:\\file.ext'],
    delimiter:'/',
    delimiters:'/\\:',
    file:'file.ext',
    name:'file',
    extension:'ext',
    expectation :'root/parent/child/file.ext'

});

map.push({
    value:['root/\\:parent','child/:\\file.ext'],
    delimiter:':',
    delimiters:'/\\:',
    file:'file.ext',
    name:'file',
    extension:'ext',
    expectation :'root:parent:child:file.ext'
});

map.push({
    value:['root/\\:parent','child/:\\file.ext'],
    delimiter:'\\',
    delimiters:'/\\:',
    file:'file.ext',
    name:'file',
    extension:'ext',
    expectation :'root\\parent\\child\\file.ext'
});

map.push({
    value:['','root/\\:parent:/\\child/:\\file.ext'],
    delimiter:'/',
    delimiters:'/\\:',
    file:'file.ext',
    name:'file',
    extension:'ext',
    expectation :'/root/parent/child/file.ext'
});
map.push({
    value:['','root/\\:parent:/\\child/:\\file.ext'],
    delimiter:':',
    delimiters:'/\\:',
    file:'file.ext',
    name:'file',
    extension:'ext',
    expectation : ':root:parent:child:file.ext'
});
map.push({
    value:['','root/\\:parent:/\\child/:\\file.ext'],
    delimiter:'\\',
    delimiters:'/\\:',
    file:'file.ext',
    name:'file',
    extension:'ext',
    expectation : '\\root\\parent\\child\\file.ext'
});

map.push({
    value:['root/parent/child/file.ext'],
    delimiter:'//',
    delimiters:'/\\:',
    file:'file.ext',
    name:'file',
    extension:'ext',
    expectation : 'root/parent/child/file.ext'
});

describe('constructor', ()=>{

    let i = 0;
    for(let value of map) {

        describe(`[${i}]` + JSON.stringify(value.value), ()=>{

            let standard = new FileList(value.value, value.delimiter, value.delimiters)

            it('delimiter', ()=>{
                expect(standard.delimiter).toBe(value.delimiter);
            });

            it('delimiters', ()=>{
                expect(standard.delimiters).toBe(value.delimiters);
            });

            it('file', ()=>{
                expect(standard.file).toBe(value.file);
            });

            it('name', ()=>{
                expect(standard.name).toBe(value.name);
            });

            it('extension', ()=>{
                expect(standard.extension).toBe(value.extension);
            });

            it('value', ()=>{
                expect([...standard]).toEqual(value.value);
            });

            it('path', ()=>{
                expect(standard.toString()).toBe(value.expectation);
            });

        });

        i++;
    }
});

describe('mutate', ()=>{

    let standard = new FileList([], '', '');

    let i = 0;

    for(let value of map) {

        describe(`[${i}]` + JSON.stringify(value.value), ()=>{

            it('delimiter', ()=>{

                standard.delimiter = value.delimiter;
                expect(standard.delimiter).toBe(value.delimiter);
            });

            it('delimiters', ()=>{

                standard.delimiters = value.delimiters;
                expect(standard.delimiters).toBe(value.delimiters);
            });

            it('value', ()=>{

                standard.splice(0);
                standard.push(...value.value);
                expect([...standard]).toEqual(value.value);
            });

            it('file', ()=>{

                standard.file = value.file;
                expect(standard.file).toBe(value.file);
            });

            it('name', ()=>{

                standard.name = value.name;
                expect(standard.name).toBe(value.name);
            });

            it('extension', ()=>{

                standard.extension = value.extension;
                expect(standard.extension).toBe(value.extension);
            });

            it('path', ()=>{
                expect(standard.toString()).toBe(value.expectation);
            });

        });

        i++;
    }
});
