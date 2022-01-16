import Standard from '../../dist/path/standard';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let map : {delimiter:string, delimiters:string, expectation:string, value:string}[] = [];

map.push({
    value:'root/parent/child/file.ext',
    delimiter:'/',
    delimiters:'/\\:',
    expectation :'root/parent/child/file.ext'
});
map.push({
    value:'root/parent/child/file.ext',
    delimiter:':',
    delimiters:'/\\:',
    expectation :'root:parent:child:file.ext'
});

map.push({
    value:'root/parent/child/file.ext',
    delimiter:'\\',
    delimiters:'/\\:',
    expectation :'root\\parent\\child\\file.ext'
});

map.push({
    value:'root/\\:parent:/\\child/:\\file.ext',
    delimiter:'/',
    delimiters:'/\\:',
    expectation :'root/parent/child/file.ext'
});
map.push({
    value:'root/\\:parent:/\\child/:\\file.ext',
    delimiter:':',
    delimiters:'/\\:',
    expectation :'root:parent:child:file.ext'
});
map.push({
    value:'root/\\:parent:/\\child/:\\file.ext',
    delimiter:'\\',
    delimiters:'/\\:',
    expectation :'root\\parent\\child\\file.ext'
});

map.push({
    value:'/\\:root/\\:parent:/\\child/:\\file.ext',
    delimiter:'/',
    delimiters:'/\\:',
    expectation :'/root/parent/child/file.ext'
});
map.push({
    value:'/\\:root/\\:parent:/\\child/:\\file.ext',
    delimiter:':',
    delimiters:'/\\:',
    expectation : ':root:parent:child:file.ext'
});
map.push({
    value:'/\\:root/\\:parent:/\\child/:\\file.ext',
    delimiter:'\\',
    delimiters:'/\\:',
    expectation : '\\root\\parent\\child\\file.ext'
});

map.push({
    value:'root/parent/child/file.ext',
    delimiter:'//',
    delimiters:'/\\:',
    expectation : 'root/parent/child/file.ext'
});

describe('constructor', ()=>{

    let i = 0;

    for(let value of map) {

        describe(`[${i}]${value.value}`, ()=>{

            let standard = new Standard(value.value, value.delimiter, value.delimiters);

            it('delimiter', ()=>{
                expect(standard.delimiter).toBe(value.delimiter);
            });

            it('delimiters', ()=>{
                expect(standard.delimiters).toBe(value.delimiters);
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

        describe(`[${i}]${value.value}`, ()=>{

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

            it('path', ()=>{
                expect(standard.toString()).toBe(value.expectation);
            });

        });

        i++;
    }
});
