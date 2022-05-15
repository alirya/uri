import File from '../../../../dist/path/file/string/file-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

for(let d of ['\\:/', ':', '\\:', ':/', '\\/']) {

    it('full', ()=>{
        let path = `root${d}parent${d}child${d}file.ext`;
        expect(File(path, d)).toBe(`file.ext`);
    });

    it('no extension', ()=>{
        let path = `root${d}parent${d}child${d}file`;
        expect(File(path, d)).toBe(`file`);
    });

    it('no name', ()=>{
        let path = `root${d}parent${d}child${d}.git`;
        expect(File(path, d)).toBe(`.git`);
    });

    it('empty dir', ()=>{
        let path = d;
        expect(File(path, d)).toBe('');
    });

    it('empty file', ()=>{
        let path = `root${d}parent${d}child${d}`;
        expect(File(path, d)).toBe(``);
    });

    it('empty file', ()=>{
        let path = '';
        expect(File(path, d)).toBe('');
    });

}

