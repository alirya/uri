import List from '../../../dist/path/list-parameters';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let map : {separator:string, separators:string, expectation:string, value:string[], expectations:string[] }[] = [];

map.push({
    value:['root','parent','child','file.ext'],
    separator:'/',
    separators:'/\\:',
    expectation :'root/parent/child/file.ext',
    expectations:['root','parent','child','file.ext'],
});

map.push({
    value:['root','parent','child','file.ext'],
    separator:':',
    separators:'/\\:',
    expectation :'root:parent:child:file.ext',
    expectations:['root','parent','child','file.ext'],
});
map.push({
    value:['root','parent','child','file.ext'],
    separator:'\\',
    separators:'/\\:',
    expectation :'root\\parent\\child\\file.ext',
    expectations:['root','parent','child','file.ext'],
});

map.push({
    value:['root/\\:parent','child/:\\file.ext'],
    separator:'/',
    separators:'/\\:',
    expectations :['root','parent','child','file.ext'],
    expectation :'root/parent/child/file.ext',
});
map.push({
    value:['root/\\:parent','child/:\\file.ext'],
    expectations:['root','parent','child','file.ext'],
    separator:':',
    separators:'/\\:',
    expectation :'root:parent:child:file.ext'
});
map.push({
    value:['root/\\:parent','child/:\\file.ext'],
    expectations:['root','parent','child','file.ext'],
    separator:'\\',
    separators:'/\\:',
    expectation :'root\\parent\\child\\file.ext'
});

map.push({
    value:['','root/\\:parent:/\\child/:\\file.ext'],
    expectations:['','root','parent','child','file.ext'],
    separator:'/',
    separators:'/\\:',
    expectation :'/root/parent/child/file.ext'
});
map.push({
    value:['','root/\\:parent:/\\child/:\\file.ext'],
    expectations:['','root','parent','child','file.ext'],
    separator:':',
    separators:'/\\:',
    expectation : ':root:parent:child:file.ext'
});

map.push({
    value:['','root/\\:parent:/\\child/:\\file.ext'],
    expectations:['','root','parent','child','file.ext'],
    separator:'\\',
    separators:'/\\:',
    expectation : '\\root\\parent\\child\\file.ext'
});

map.push({
    value:['root/parent/child/file.ext'],
    expectations:['root','parent','child','file.ext'],
    separator:'//',
    separators:'/\\:',
    expectation : 'root/parent/child/file.ext'
});

describe('constructor', ()=>{

    for(let value of map) {

        describe(JSON.stringify(value.value), ()=>{

            let standard = List(value.value, value.separator, value.separators);

            it('delimiter', ()=>{
                expect(standard.separator).toBe(value.separator);
            });

            it('delimiters', ()=>{
                expect(standard.separators).toBe(value.separators);
            });

            it('value', ()=>{
                expect([...standard]).toEqual(value.expectations);
            });

            it('path', ()=>{
                expect(standard.toString()).toBe(value.expectation);
            });

        });
    }
});

describe('mutate', ()=>{

    let standard = List([], '', '');

    for(let value of map) {

        describe(JSON.stringify(value.value), ()=>{

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
                expect([...standard]).toEqual(value.expectations);
            });

            it('path', ()=>{
                expect(standard.toString()).toBe(value.expectation);
            });

        });
    }
});
