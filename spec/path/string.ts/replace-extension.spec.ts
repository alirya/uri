import ReplaceExtension from '../../../dist/path/string/replace-extension';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

for(let d of ['\\:/', ':', '\\:', ':/', '\\/']) {

    it('full', ()=>{
        let path = `root${d}parent${d}child${d}file.ext`;
        expect(ReplaceExtension(path, 'txt', d)).toBe(`root${d}parent${d}child${d}file.txt`);
    });

    it('no name', ()=>{
        let path = `root${d}parent${d}child${d}.git`;
        expect(ReplaceExtension(path, 'gitkeep', d)).toBe(`root${d}parent${d}child${d}.gitkeep`);
    });

    it('no extension', ()=>{
        let path = `root${d}parent${d}child${d}file`;
        expect(ReplaceExtension(path, 'txt', d)).toBe(`root${d}parent${d}child${d}file.txt`);
    });

    it('empty dir', ()=>{
        let path = d;
        expect(ReplaceExtension(path, 'txt', d)).toBe(d);
    });

    it('empty file', ()=>{
        let path = `root${d}parent${d}child${d}`;
        expect(ReplaceExtension(path, 'txt', d)).toBe(`root${d}parent${d}child${d}`);
    });

    it('empty file', ()=>{
        let path = '';
        expect(ReplaceExtension(path, 'txt', d)).toBe('');
    });

}

