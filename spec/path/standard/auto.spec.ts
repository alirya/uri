import {StandardParameters} from '../../../dist/path/standard.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let map : {separator:string, separators:string, expectation:string, value:string}[] = [];

map.push({
    value:'root/parent/child/file.ext',
    separator:'/',
    separators:'/\\:',
    expectation :'root/parent/child/file.ext'
});
map.push({
    value:'root/parent/child/file.ext',
    separator:':',
    separators:'/\\:',
    expectation :'root:parent:child:file.ext'
});

map.push({
    value:'root/parent/child/file.ext',
    separator:'\\',
    separators:'/\\:',
    expectation :'root\\parent\\child\\file.ext'
});

map.push({
    value:'root/\\:parent:/\\child/:\\file.ext',
    separator:'/',
    separators:'/\\:',
    expectation :'root/parent/child/file.ext'
});
map.push({
    value:'root/\\:parent:/\\child/:\\file.ext',
    separator:':',
    separators:'/\\:',
    expectation :'root:parent:child:file.ext'
});
map.push({
    value:'root/\\:parent:/\\child/:\\file.ext',
    separator:'\\',
    separators:'/\\:',
    expectation :'root\\parent\\child\\file.ext'
});

map.push({
    value:'/\\:root/\\:parent:/\\child/:\\file.ext',
    separator:'/',
    separators:'/\\:',
    expectation :'/root/parent/child/file.ext'
});
map.push({
    value:'/\\:root/\\:parent:/\\child/:\\file.ext',
    separator:':',
    separators:'/\\:',
    expectation : ':root:parent:child:file.ext'
});
map.push({
    value:'/\\:root/\\:parent:/\\child/:\\file.ext',
    separator:'\\',
    separators:'/\\:',
    expectation : '\\root\\parent\\child\\file.ext'
});

map.push({
    value:'root/parent/child/file.ext',
    separator:'//',
    separators:'/\\:',
    expectation : 'root/parent/child/file.ext'
});

describe('constructor', ()=>{

    let i = 0;

    for(let value of map) {

        describe(`[${i}]${value.value}`, ()=>{

            let standard = new StandardParameters(value.value, value.separator, value.separators);

            it('delimiter', ()=>{
                expect(standard.separator).toBe(value.separator);
            });

            it('delimiters', ()=>{
                expect(standard.separators).toBe(value.separators);
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

    let standard = new StandardParameters('', '', '');

    let i = 0;

    for(let value of map) {

        describe(`[${i}]${value.value}`, ()=>{

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

            it('path', ()=>{
                expect(standard.toString()).toBe(value.expectation);
            });

        });

        i++;
    }
});
