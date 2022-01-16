import ReplaceFile from '../../../dist/path/string/replace-file';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

for(let d of ['\\:/', ':', '\\:', ':/', '\\/']) {

    it('full', ()=>{
        let path = `root${d}parent${d}child${d}file.ext`;
        expect(ReplaceFile(path, 'new.txt', d)).toBe(`root${d}parent${d}child${d}new.txt`);
    });

    it('no extension', ()=>{
        let path = `root${d}parent${d}child${d}file`;
        expect(ReplaceFile(path, 'new.txt', d)).toBe(`root${d}parent${d}child${d}new.txt`);
    });

    it('no name', ()=>{
        let path = `root${d}parent${d}child${d}.git`;
        expect(ReplaceFile(path, 'hub', d)).toBe(`root${d}parent${d}child${d}hub`);
    });

    it('empty dir', ()=>{
        let path = d;
        expect(ReplaceFile(path, 'new.txt', d)).toBe(d);
    });

    it('empty file', ()=>{
        let path = `root${d}parent${d}child${d}`;
        expect(ReplaceFile(path, 'new.txt', d)).toBe(`root${d}parent${d}child${d}`);
    });

    it('empty file', ()=>{
        let path = '';
        expect(ReplaceFile(path, 'new.txt', d)).toBe('');
    });

}

