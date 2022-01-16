import List from '../../../dist/path/list';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

let std = new List(['root','parent','child'], '/', '/\\:');

describe('check integrity', ()=>{

    it('delimiter', ()=>{
        expect(std.delimiter).toBe('/');
    });

    it('delimiters', ()=>{
        expect(std.delimiters).toBe('/\\:');
    });

    it('value', ()=>{
        expect([...std]).toEqual(['root','parent','child']);
    });

    it('path', ()=>{
        expect(std.toString()).toBe('root/parent/child');
    });

});

it('add path', ()=>{
    std.push('file.ext');
    expect(std.toString()).toBe('root/parent/child/file.ext');
});

it('prepend add', ()=>{
    std.unshift('prepend');
    expect(std.toString()).toBe('prepend/root/parent/child/file.ext');
});
