import ReplaceName from "../../../dist/path/string/replace-name";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

it('empty file', ()=>{
    let path = 'root/parent/child/fl';
    expect(ReplaceName(path, 'new', '/')).toBe('root/parent/child/new');
});
