import List from '../../../dist/path/list';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let map : {delimiter:string, delimiters:string, expectation:string, value:string[]}[] = [];

map.push({
    value:['root','parent','child','file.ext'],
    delimiter:'/',
    delimiters:'/\\:',
    expectation :'root/parent/child/file.ext'
});

map.push({
    value:['root','parent','child','file.ext'],
    delimiter:':',
    delimiters:'/\\:',
    expectation :'root:parent:child:file.ext'
});
map.push({
    value:['root','parent','child','file.ext'],
    delimiter:'\\',
    delimiters:'/\\:',
    expectation :'root\\parent\\child\\file.ext'
});

map.push({
    value:['root/\\:parent','child/:\\file.ext'],
    delimiter:'/',
    delimiters:'/\\:',
    expectation :'root/parent/child/file.ext'
});
map.push({
    value:['root/\\:parent','child/:\\file.ext'],
    delimiter:':',
    delimiters:'/\\:',
    expectation :'root:parent:child:file.ext'
});
map.push({
    value:['root/\\:parent','child/:\\file.ext'],
    delimiter:'\\',
    delimiters:'/\\:',
    expectation :'root\\parent\\child\\file.ext'
});

map.push({
    value:['','root/\\:parent:/\\child/:\\file.ext'],
    delimiter:'/',
    delimiters:'/\\:',
    expectation :'/root/parent/child/file.ext'
});
map.push({
    value:['','root/\\:parent:/\\child/:\\file.ext'],
    delimiter:':',
    delimiters:'/\\:',
    expectation : ':root:parent:child:file.ext'
});
map.push({
    value:['','root/\\:parent:/\\child/:\\file.ext'],
    delimiter:'\\',
    delimiters:'/\\:',
    expectation : '\\root\\parent\\child\\file.ext'
});

map.push({
    value:['root/parent/child/file.ext'],
    delimiter:'//',
    delimiters:'/\\:',
    expectation : 'root/parent/child/file.ext'
});

describe('constructor', ()=>{

    for(let value of map) {

        describe(JSON.stringify(value.value), ()=>{

            let standard = new List(value.value, value.delimiter, value.delimiters);

            it('delimiter', ()=>{
                expect(standard.delimiter).toBe(value.delimiter);
            });

            it('delimiters', ()=>{
                expect(standard.delimiters).toBe(value.delimiters);
            });

            it('value', ()=>{
                expect([...standard]).toEqual(value.value);
            });

            it('path', ()=>{
                expect(standard.toString()).toBe(value.expectation);
            });

        });
    }
});

describe('mutate', ()=>{

    let standard = new List([], '', '');

    for(let value of map) {

        describe(JSON.stringify(value.value), ()=>{

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

            it('path', ()=>{
                expect(standard.toString()).toBe(value.expectation);
            });

        });
    }
});
