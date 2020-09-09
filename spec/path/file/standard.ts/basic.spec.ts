import Standard from "../../../../dist/path/file/standard";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

let std = new Standard('root\\:/parent\\:/child\\:/file.ext', '/', '/\\:');

describe('check integrity', ()=>{

    it('delimiter', ()=>{
        expect(std.delimiter).toBe('/');
    });

    it('delimiters', ()=>{
        expect(std.delimiters).toBe('/\\:');
    });

    it('dir', ()=>{
        expect(std.dir).toBe('root/parent/child');
    });

    it('file', ()=>{
        expect(std.file).toBe('file.ext');
    });

    it('name', ()=>{
        expect(std.name).toBe('file');
    });

    it('extension', ()=>{
        expect(std.extension).toBe('ext');
    });

    it('value', ()=>{
        expect(std.value).toBe('root\\:/parent\\:/child\\:/file.ext');
    });

    it('path', ()=>{
        expect(std.toString()).toBe('root/parent/child/file.ext');
    });

});

it('change file', ()=>{
    std.file = 'image';
    expect(std.value).toBe('root\\:/parent\\:/child\\:/image');
    expect(std.file).toBe('image');
});

it('change dir', ()=>{
    std.dir = 'root\\:/parent\\:/child';
    expect(std.value).toBe('root\\:/parent\\:/child/image');
    expect(std.file).toBe('image');
});
