import Standard from "../../../../dist/path/file/standard";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

let map : {
    delimiter:string,
    delimiters:string,
    file:string,
    name:string,
    extension:string,
    expectation:string,
    value:string
}[] = [];

map.push({
    value:'root/parent/child/file.ext',
    delimiter:'/',
    delimiters:'/\\:',
    expectation :'root/parent/child/file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});
map.push({
    value:'root/parent/child/file.ext',
    delimiter:':',
    delimiters:'/\\:',
    expectation :'root:parent:child:file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});
map.push({
    value:'root/parent/child/file.ext',
    delimiter:'\\',
    delimiters:'/\\:',
    expectation :'root\\parent\\child\\file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});

map.push({
    value:'root/\\:parent:/\\child/:\\file.ext',
    delimiter:'/',
    delimiters:'/\\:',
    expectation :'root/parent/child/file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});
map.push({
    value:'root/\\:parent:/\\child/:\\file.ext',
    delimiter:':',
    delimiters:'/\\:',
    expectation :'root:parent:child:file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});

map.push({
    value:'root/\\:parent:/\\child/:\\file.ext',
    delimiter:'\\',
    delimiters:'/\\:',
    expectation :'root\\parent\\child\\file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});

map.push({
    value:'/\\:root/\\:parent:/\\child/:\\file.ext',
    delimiter:'/',
    delimiters:'/\\:',
    expectation :'/root/parent/child/file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});
map.push({
    value:'/\\:root/\\:parent:/\\child/:\\file.ext',
    delimiter:':',
    delimiters:'/\\:',
    expectation : ':root:parent:child:file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});
map.push({
    value:'/\\:root/\\:parent:/\\child/:\\file.ext',
    delimiter:'\\',
    delimiters:'/\\:',
    expectation : '\\root\\parent\\child\\file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});

map.push({
    value:'root/parent/child/file.ext',
    delimiter:'//',
    delimiters:'/\\:',
    expectation : 'root/parent/child/file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});

describe('constructor', ()=>{

    for(let value of map) {

        describe(value.value, ()=>{

            let standard = new Standard(value.value, value.delimiter, value.delimiters)

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
                expect(standard.value).toBe(value.value);
            });

            it('path', ()=>{
                expect(standard.toString()).toBe(value.expectation);
            });

        });
    }
});

describe('mutate', ()=>{

    let standard = new Standard('', '', '');

    for(let value of map) {

        describe(value.value, ()=>{

            it('delimiter', ()=>{

                standard.delimiter = value.delimiter;
                expect(standard.delimiter).toBe(value.delimiter);
            });

            it('delimiters', ()=>{

                standard.delimiters = value.delimiters;
                expect(standard.delimiters).toBe(value.delimiters);
            });

            it('value', ()=>{

                standard.value = value.value;
                expect(standard.value).toBe(value.value);
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
    }
});
