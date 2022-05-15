import ReplaceName from '../../../../dist/path/file/string/replace-name-parameters';

it('force console log', () => { spyOn(console, 'log').and.callThrough();});

it('empty file', ()=>{
    let path = 'root/parent/child/fl';
    expect(ReplaceName(path, 'new', '/')).toBe('root/parent/child/new');
});
