import FileList from "../../../../dist/path/file/list";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

let map : {
    delimiter:string,
    delimiters:string,
    file:string,
    name:string,
    extension:string,
    expectation:string,
    dir:string,
    value:string[]
}[] = [];

// 0
map.push({
    value:['root','parent','child','file.ext'],
    dir:'root/parent/child',
    delimiter:'/',
    delimiters:'/\\:',
    file:'file.ext',
    name:'file',
    extension:'ext',
    expectation :'root/parent/child/file.ext',
});
// 1
map.push({
    value:['root','parent','child','file.ext'],
    delimiter:':',
    dir:'root:parent:child',
    delimiters:'/\\:',
    file:'file.ext',
    name:'file',
    extension:'ext',
    expectation :'root:parent:child:file.ext'
});
// 2
map.push({
    value:['root','parent','child','file.ext'],
    dir:'root\\parent\\child',
    delimiter:'\\',
    delimiters:'/\\:',
    file:'file.ext',
    name:'file',
    extension:'ext',
    expectation :'root\\parent\\child\\file.ext'
});
// 3
map.push({
    value:['root/\\:parent','child/:\\file.ext'],
    delimiter:'/',
    dir:'root/parent/child',
    delimiters:'/\\:',
    file:'file.ext',
    name:'file',
    extension:'ext',
    expectation :'root/parent/child/file.ext'

});
//
// // 4
// map.push({
//     value:['root/\\:parent','child/:\\file.ext'],
//     dir:'root:parent:child',
//     delimiter:':',
//     delimiters:'/\\:',
//     file:'file.ext',
//     name:'file',
//     extension:'ext',
//     expectation :'root:parent:child:file.ext'
// });
// // 5
// map.push({
//     value:['root/\\:parent','child/:\\file.ext'],
//     delimiter:'\\',
//     dir:'root/parent/child/',
//     delimiters:'/\\:',
//     file:'file.ext',
//     name:'file',
//     extension:'ext',
//     expectation :'root\\parent\\child\\file.ext'
// });
// // 6
// map.push({
//     value:['','root/\\:parent:/\\child/:\\file.ext'],
//     delimiter:'/',
//     dir:'/root/parent/child/',
//     delimiters:'/\\:',
//     file:'file.ext',
//     name:'file',
//     extension:'ext',
//     expectation :'/root/parent/child/file.ext'
// });
// // 7
// map.push({
//     value:['','root/\\:parent:/\\child/:\\file.ext'],
//     delimiter:':',
//     dir:':root:parent:child',
//     delimiters:'/\\:',
//     file:'file.ext',
//     name:'file',
//     extension:'ext',
//     expectation : ':root:parent:child:file.ext'
// });
// // 8
// map.push({
//     value:['','root/\\:parent:/\\child/:\\file.ext'],
//     delimiter:'\\',
//     dir:'\\root\\parent\\child',
//     delimiters:'/\\:',
//     file:'file.ext',
//     name:'file',
//     extension:'ext',
//     expectation : '\\root\\parent\\child\\file.ext'
// });
// // 9
// map.push({
//     value:['root/parent/child/file.ext'],
//     delimiter:'//',
//     dir:'root/parent/child',
//     delimiters:'/\\:',
//     file:'file.ext',
//     name:'file',
//     extension:'ext',
//     expectation : 'root/parent/child/file.ext'
// });

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

            it('dir', ()=>{
                expect(standard.dir).toBe(value.dir);
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

            it('dir', ()=>{

                standard.dir = value.dir;
                expect(standard.dir).toBe(value.dir);
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
