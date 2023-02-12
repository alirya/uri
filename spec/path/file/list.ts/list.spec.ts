import {ListParameters} from '../../../../dist/path/file/list.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

const map : {
    separator:string,
    separators:string,
    file:string,
    name:string,
    extension:string,
    expectation:string,
    directory:string,
    value:string[]
}[] = [];

// 0
map.push({
    value:['root','parent','child','file.ext'],
    directory:'root/parent/child',
    separator:'/',
    separators:'/\\:',
    file:'file.ext',
    name:'file',
    extension:'ext',
    expectation :'root/parent/child/file.ext',
});
// 1
// map.push({
//     value:['root','parent','child','file.ext'],
//     separator:':',
//     directory:'root:parent:child',
//     separators:'/\\:',
//     file:'file.ext',
//     name:'file',
//     extension:'ext',
//     expectation :'root:parent:child:file.ext'
// });
// // 2
// map.push({
//     value:['root','parent','child','file.ext'],
//     directory:'root\\parent\\child',
//     separator:'\\',
//     separators:'/\\:',
//     file:'file.ext',
//     name:'file',
//     extension:'ext',
//     expectation :'root\\parent\\child\\file.ext'
// });
// // 3
// map.push({
//     value:['root/\\:parent','child/:\\file.ext'],
//     separator:'/',
//     directory:'root/parent/child',
//     separators:'/\\:',
//     file:'file.ext',
//     name:'file',
//     extension:'ext',
//     expectation :'root/parent/child/file.ext'
//
// });
//
// // 4
// map.push({
//     value:['root/\\:parent','child/:\\file.ext'],
//     directory:'root:parent:child',
//     separator:':',
//     separators:'/\\:',
//     file:'file.ext',
//     name:'file',
//     extension:'ext',
//     expectation :'root:parent:child:file.ext'
// });
// // 5
// map.push({
//     value:['root/\\:parent','child/:\\file.ext'],
//     separator:'\\',
//     directory:'root\\parent\\child',
//     separators:'/\\:',
//     file:'file.ext',
//     name:'file',
//     extension:'ext',
//     expectation :'root\\parent\\child\\file.ext'
// });
// // 6
// map.push({
//     value:['','root/\\:parent:/\\child/:\\file.ext'],
//     separator:'/',
//     directory:'/root/parent/child',
//     separators:'/\\:',
//     file:'file.ext',
//     name:'file',
//     extension:'ext',
//     expectation :'/root/parent/child/file.ext'
// });
// // 7
// map.push({
//     value:['','root/\\:parent:/\\child/:\\file.ext'],
//     separator:':',
//     directory:':root:parent:child',
//     separators:'/\\:',
//     file:'file.ext',
//     name:'file',
//     extension:'ext',
//     expectation : ':root:parent:child:file.ext'
// });
// // 8
// map.push({
//     value:['','root/\\:parent:/\\child/:\\file.ext'],
//     separator:'\\',
//     directory:'\\root\\parent\\child',
//     separators:'/\\:',
//     file:'file.ext',
//     name:'file',
//     extension:'ext',
//     expectation : '\\root\\parent\\child\\file.ext'
// });
// // 9
// map.push({
//     value:['root/parent/child/file.ext'],
//     separator:'//',
//     directory:'root/parent/child',
//     separators:'/\\:',
//     file:'file.ext',
//     name:'file',
//     extension:'ext',
//     expectation : 'root/parent/child/file.ext'
// });

describe('constructor', ()=>{

    let i = 0;
    for(const value of map) {

        describe(`[${i}]` + JSON.stringify(value.value), ()=>{

            const standard = ListParameters(value.value, value.separator, value.separators);

            it('delimiter', ()=>{
                expect(standard.separator).toBe(value.separator);
            });

            it('delimiters', ()=>{
                expect(standard.separators).toBe(value.separators);
            });

            it('file', ()=>{
                expect(standard.file).toBe(value.file);
            });

            it('dir', ()=>{
                expect(standard.directory).toBe(value.directory);
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

    const standard = ListParameters([], '', '');

    let i = 0;

    for(const value of map) {

        describe(`[${i}]` + JSON.stringify(value.value), ()=>{

            it('delimiter', ()=>{

                standard.separator = value.separator;
                expect(standard.separator).toBe(value.separator);
            });

            it('delimiters', ()=>{

                standard.separators = value.separators;
                expect(standard.separators).toBe(value.separators);
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

                standard.directory = value.directory;
                expect(standard.directory).toBe(value.directory);
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
