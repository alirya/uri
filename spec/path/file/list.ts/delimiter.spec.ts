import FileList from "../../../../dist/path/file/list";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

describe('construct', ()=>{

    it('/', ()=>{
        let standard = new FileList(['root','parent','child','file.ext'], '/', '/\\:')
        expect(standard.delimiter).toBe('/');
        expect(standard.directory).toBe('root/parent/child');
        expect(standard.toString()).toBe('root/parent/child/file.ext');
    });

    it(':', ()=>{
        let standard = new FileList(['root','parent','child','file.ext'], ':', '/\\:')
        expect(standard.delimiter).toBe(':');
        expect(standard.directory).toBe('root:parent:child');
        expect(standard.toString()).toBe('root:parent:child:file.ext');
    });

    it('\\', ()=>{
        let standard = new FileList(['root','parent','child','file.ext'], '\\', '/\\:')
        expect(standard.delimiter).toBe('\\');
        expect(standard.directory).toBe('root\\parent\\child');
        expect(standard.toString()).toBe('root\\parent\\child\\file.ext');
    });
});

describe('construct file only', ()=>{

    it('/', ()=>{
        let standard = new FileList(['file.ext'], '/', '/\\:')
        expect(standard.delimiter).toBe('/');
        expect(standard.directory).toBe('');
        expect(standard.toString()).toBe('file.ext');
    });

    it(':', ()=>{
        let standard = new FileList(['file.ext'], ':', '/\\:')
        expect(standard.delimiter).toBe(':');
        expect(standard.directory).toBe('');
        expect(standard.toString()).toBe('file.ext');
    });

    it('\\', ()=>{
        let standard = new FileList(['file.ext'], '\\', '/\\:')
        expect(standard.delimiter).toBe('\\');
        expect(standard.directory).toBe('');
        expect(standard.toString()).toBe('file.ext');
    });
});


describe('mutate', ()=>{

    it('/', ()=>{
        let standard = new FileList(['root','parent','child','file.ext'], '/', '/\\:')
        expect(standard.delimiter).toBe('/');
        expect(standard.directory).toBe('root/parent/child');
        expect(standard.toString()).toBe('root/parent/child/file.ext');
    });

    it(':', ()=>{
        let standard = new FileList(['root','parent','child','file.ext'], ':', '/\\:')
        expect(standard.delimiter).toBe(':');
        expect(standard.directory).toBe('root:parent:child');
        expect(standard.toString()).toBe('root:parent:child:file.ext');
    });

    it('\\', ()=>{
        let standard = new FileList(['root','parent','child','file.ext'], '\\', '/\\:')
        expect(standard.delimiter).toBe('\\');
        expect(standard.directory).toBe('root\\parent\\child');
        expect(standard.toString()).toBe('root\\parent\\child\\file.ext');
    });
});
