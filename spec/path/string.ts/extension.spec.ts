import Extension from "../../../dist/path/string/extension";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

for(let d of ['\\:/', ':', '\\:', ':/', '\\/']) {

    it('full', ()=>{
        let path = `root${d}parent${d}child${d}file.ext`;
        expect(Extension(path, d)).toBe(`ext`);
    });

    it('no extension', ()=>{
        let path = `root${d}parent${d}child${d}file`;
        expect(Extension(path, d)).toBe(``);
    })

    it('no name', ()=>{
        let path = `root${d}parent${d}child${d}.git`;
        expect(Extension(path, d)).toBe(`git`);
    })

    it('empty dir', ()=>{
        let path = d;
        expect(Extension(path, d)).toBe('');
    });

    it('empty file', ()=>{
        let path = `root${d}parent${d}child${d}`;
        expect(Extension(path, d)).toBe(``);
    });

    it('empty file', ()=>{
        let path = '';
        expect(Extension(path, d)).toBe('');
    });

}

