import {ReplaceNameParameters} from '../../../../dist/path/file/string/replace-name.js';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('empty file', ()=>{
    const path = 'root/parent/child/fl';
    expect(ReplaceNameParameters(path, 'new', '/')).toBe('root/parent/child/new');
});
