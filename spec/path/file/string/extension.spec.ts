import {ExtensionParameters} from '../../../../dist/path/file/string/extension.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

for(let d of ['\\:/', ':', '\\:', ':/', '\\/']) {

    it('full', ()=>{
        let path = `root${d}parent${d}child${d}file.ext`;
        expect(ExtensionParameters(path, d)).toBe(`ext`);
    });

    it('no extension', ()=>{
        let path = `root${d}parent${d}child${d}file`;
        expect(ExtensionParameters(path, d)).toBe(``);
    });

    it('no name', ()=>{
        let path = `root${d}parent${d}child${d}.git`;
        expect(ExtensionParameters(path, d)).toBe(`git`);
    });

    it('empty dir', ()=>{
        let path = d;
        expect(ExtensionParameters(path, d)).toBe('');
    });

    it('empty file', ()=>{
        let path = `root${d}parent${d}child${d}`;
        expect(ExtensionParameters(path, d)).toBe(``);
    });

    it('empty file', ()=>{
        let path = '';
        expect(ExtensionParameters(path, d)).toBe('');
    });

}

