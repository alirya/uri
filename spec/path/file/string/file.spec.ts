import {FileParameters} from '../../../../dist/path/file/string/file.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

for(let d of ['\\:/', ':', '\\:', ':/', '\\/']) {

    it('full', ()=>{
        let path = `root${d}parent${d}child${d}file.ext`;
        expect(FileParameters(path, d)).toBe(`file.ext`);
    });

    it('no extension', ()=>{
        let path = `root${d}parent${d}child${d}file`;
        expect(FileParameters(path, d)).toBe(`file`);
    });

    it('no name', ()=>{
        let path = `root${d}parent${d}child${d}.git`;
        expect(FileParameters(path, d)).toBe(`.git`);
    });

    it('empty dir', ()=>{
        let path = d;
        expect(FileParameters(path, d)).toBe('');
    });

    it('empty file', ()=>{
        let path = `root${d}parent${d}child${d}`;
        expect(FileParameters(path, d)).toBe(``);
    });

    it('empty file', ()=>{
        let path = '';
        expect(FileParameters(path, d)).toBe('');
    });

}

