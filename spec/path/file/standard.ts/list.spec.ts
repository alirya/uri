import Standard from '../../../../dist/path/file/standard-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let map : {
    separator:string,
    separators:string,
    file:string,
    name:string,
    extension:string,
    expectation:string,
    dir:string,
    value:string
}[] = [];

// 0
map.push({
    value:'root/parent/child/file.ext',
    separator:'/',
    separators:'/\\:',
    dir:'root/parent/child',
    expectation :'root/parent/child/file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});

// 1
map.push({
    value:'root/parent/child/file.ext',
    separator:':',
    separators:'/\\:',
    dir:'root:parent:child',
    expectation :'root:parent:child:file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});

// 2
map.push({
    value:'root/parent/child/file.ext',
    dir:'root\\parent\\child',
    separator:'\\',
    separators:'/\\:',
    expectation :'root\\parent\\child\\file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});

//3
map.push({
    value:'root/\\:parent:/\\child/:\\file.ext',
    dir:'root/parent/child',
    separator:'/',
    separators:'/\\:',
    expectation :'root/parent/child/file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});

//4
map.push({
    value:'root/\\:parent:/\\child/:\\file.ext',
    separator:':',
    dir:'root:parent:child',
    separators:'/\\:',
    expectation :'root:parent:child:file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});
//5
map.push({
    value:'root/\\:parent:/\\child/:\\file.ext',
    separator:'\\',
    dir:'root\\parent\\child',
    separators:'/\\:',
    expectation :'root\\parent\\child\\file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});
//6
map.push({
    value:'/\\:root/\\:parent:/\\child/:\\file.ext',
    separator:'/',
    dir:'/root/parent/child',
    separators:'/\\:',
    expectation :'/root/parent/child/file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});

//7
map.push({
    value:'/\\:root/\\:parent:/\\child/:\\file.ext',
    separator:':',
    dir:':root:parent:child',
    separators:'/\\:',
    expectation : ':root:parent:child:file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});

//8
map.push({
    value:'/\\:root/\\:parent:/\\child/:\\file.ext',
    separator:'\\',
    dir:'\\root\\parent\\child',
    separators:'/\\:',
    expectation : '\\root\\parent\\child\\file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});

//9
map.push({
    value:'root/parent/child/file.ext',
    separator:'//',
    dir:'root/parent/child',
    separators:'/\\:',
    expectation : 'root/parent/child/file.ext',
    file:'file.ext',
    name:'file',
    extension:'ext',
});

describe('constructor', ()=>{

    let i = 0;
    for(let value of map) {

        describe(`[${i}]${value.value}`, ()=>{

            let standard = new Standard(value.value, value.separator, value.separators);

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
                expect(standard.directory).toBe(value.dir);
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

        i++;
    }
});

describe('mutate', ()=>{

    let standard = new Standard('', '', '');
    let i = 0;

    for(let value of map) {

        describe(`[${i}] ${value.value}`, ()=>{

            it('delimiter', ()=>{

                standard.separator = value.separator;
                expect(standard.separator).toBe(value.separator);
            });

            it('delimiters', ()=>{

                standard.separators = value.separators;
                expect(standard.separators).toBe(value.separators);
            });

            it('value', ()=>{

                standard.value = value.value;
                expect(standard.value).toBe(value.value);
            });

            it('file', ()=>{

                standard.file = value.file;
                expect(standard.file).toBe(value.file);
            });

            it('dir', ()=>{

                standard.directory = value.dir;
                expect(standard.directory).toBe(value.dir);
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
