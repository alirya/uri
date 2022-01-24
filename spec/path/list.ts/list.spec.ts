import List from '../../../dist/path/list';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let map : {separator:string, separators:string, expectation:string, value:string[]}[] = [];

map.push({
    value:['root','parent','child','file.ext'],
    separator:'/',
    separators:'/\\:',
    expectation :'root/parent/child/file.ext'
});

map.push({
    value:['root','parent','child','file.ext'],
    separator:':',
    separators:'/\\:',
    expectation :'root:parent:child:file.ext'
});
map.push({
    value:['root','parent','child','file.ext'],
    separator:'\\',
    separators:'/\\:',
    expectation :'root\\parent\\child\\file.ext'
});

map.push({
    value:['root/\\:parent','child/:\\file.ext'],
    separator:'/',
    separators:'/\\:',
    expectation :'root/parent/child/file.ext'
});
map.push({
    value:['root/\\:parent','child/:\\file.ext'],
    separator:':',
    separators:'/\\:',
    expectation :'root:parent:child:file.ext'
});
map.push({
    value:['root/\\:parent','child/:\\file.ext'],
    separator:'\\',
    separators:'/\\:',
    expectation :'root\\parent\\child\\file.ext'
});

map.push({
    value:['','root/\\:parent:/\\child/:\\file.ext'],
    separator:'/',
    separators:'/\\:',
    expectation :'/root/parent/child/file.ext'
});
map.push({
    value:['','root/\\:parent:/\\child/:\\file.ext'],
    separator:':',
    separators:'/\\:',
    expectation : ':root:parent:child:file.ext'
});
map.push({
    value:['','root/\\:parent:/\\child/:\\file.ext'],
    separator:'\\',
    separators:'/\\:',
    expectation : '\\root\\parent\\child\\file.ext'
});

map.push({
    value:['root/parent/child/file.ext'],
    separator:'//',
    separators:'/\\:',
    expectation : 'root/parent/child/file.ext'
});

describe('constructor', ()=>{

    for(let value of map) {

        describe(JSON.stringify(value.value), ()=>{

            let standard = new List(value.value, value.separator, value.separators);

            it('delimiter', ()=>{
                expect(standard.separator).toBe(value.separator);
            });

            it('delimiters', ()=>{
                expect(standard.separators).toBe(value.separators);
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

            it('path', ()=>{
                expect(standard.toString()).toBe(value.expectation);
            });

        });
    }
});
