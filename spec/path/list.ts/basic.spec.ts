import {ListParameters} from '../../../dist/path/list.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

describe('single', ()=>{
    let std = ListParameters(['root','parent','child'], '/', '/\\:');

    describe('check integrity', ()=>{

        it('delimiter', ()=>{
            expect(std.separator).toBe('/');
        });

        it('delimiters', ()=>{
            expect(std.separators).toBe('/\\:');
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
});

describe('single', ()=>{

    let std = ListParameters([], '/', '/\\:');

    std.push('root/\\:parent','child/:\\file.ext');

    it('add path', ()=>{
        expect(std.toString()).toBe('root/parent/child/file.ext');
    });
});

describe('non asceii', ()=>{

    let std = ListParameters([], '/', '/\\');

    std.push('/:foo+');

    it('test', ()=>{
        expect(std.toString()).toBe('/:foo+');
    });
});
