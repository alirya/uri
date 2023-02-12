import {FileParameters} from '../../../../dist/path/file/string/file.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

for(const d of ['\\:/', ':', '\\:', ':/', '\\/']) {

    it('full', ()=>{
        const path = `root${d}parent${d}child${d}file.ext`;
        expect(FileParameters(path, d)).toBe(`file.ext`);
    });

    it('no extension', ()=>{
        const path = `root${d}parent${d}child${d}file`;
        expect(FileParameters(path, d)).toBe(`file`);
    });

    it('no name', ()=>{
        const path = `root${d}parent${d}child${d}.git`;
        expect(FileParameters(path, d)).toBe(`.git`);
    });

    it('empty dir', ()=>{
        const path = d;
        expect(FileParameters(path, d)).toBe('');
    });

    it('empty file', ()=>{
        const path = `root${d}parent${d}child${d}`;
        expect(FileParameters(path, d)).toBe(``);
    });

    it('empty file', ()=>{
        const path = '';
        expect(FileParameters(path, d)).toBe('');
    });

}

