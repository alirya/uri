import {ExtensionParameters} from '../../../../dist/path/file/string/extension.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

for(const d of ['\\:/', ':', '\\:', ':/', '\\/']) {

    it('full', ()=>{
        const path = `root${d}parent${d}child${d}file.ext`;
        expect(ExtensionParameters(path, d)).toBe(`ext`);
    });

    it('no extension', ()=>{
        const path = `root${d}parent${d}child${d}file`;
        expect(ExtensionParameters(path, d)).toBe(``);
    });

    it('no name', ()=>{
        const path = `root${d}parent${d}child${d}.git`;
        expect(ExtensionParameters(path, d)).toBe(`git`);
    });

    it('empty dir', ()=>{
        const path = d;
        expect(ExtensionParameters(path, d)).toBe('');
    });

    it('empty file', ()=>{
        const path = `root${d}parent${d}child${d}`;
        expect(ExtensionParameters(path, d)).toBe(``);
    });

    it('empty file', ()=>{
        const path = '';
        expect(ExtensionParameters(path, d)).toBe('');
    });

}

