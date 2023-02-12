import {ReplaceExtensionParameters} from '../../../../dist/path/file/string/replace-extension.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

for(const d of ['\\:/', ':', '\\:', ':/', '\\/']) {

    it('full', ()=>{
        const path = `root${d}parent${d}child${d}file.ext`;
        expect(ReplaceExtensionParameters(path, 'txt', d)).toBe(`root${d}parent${d}child${d}file.txt`);
    });

    it('no name', ()=>{
        const path = `root${d}parent${d}child${d}.git`;
        expect(ReplaceExtensionParameters(path, 'gitkeep', d)).toBe(`root${d}parent${d}child${d}.gitkeep`);
    });

    it('no extension', ()=>{
        const path = `root${d}parent${d}child${d}file`;
        expect(ReplaceExtensionParameters(path, 'txt', d)).toBe(`root${d}parent${d}child${d}file.txt`);
    });

    it('empty dir', ()=>{
        const path = d;
        expect(ReplaceExtensionParameters(path, 'txt', d)).toBe(d);
    });

    it('empty file', ()=>{
        const path = `root${d}parent${d}child${d}`;
        expect(ReplaceExtensionParameters(path, 'txt', d)).toBe(`root${d}parent${d}child${d}`);
    });

    it('empty file', ()=>{
        const path = '';
        expect(ReplaceExtensionParameters(path, 'txt', d)).toBe('');
    });

}

