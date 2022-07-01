import {ReplaceNameParameters} from '../../../../dist/path/file/string/replace-name';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('empty file', ()=>{
    let path = 'root/parent/child/fl';
    expect(ReplaceNameParameters(path, 'new', '/')).toBe('root/parent/child/new');
});
