import SubDelimiter from "../../dist/pattern/sub-delimiter";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

it('symbol', ()=>{

    expect("!$&'()*+,;=".match(SubDelimiter)).toBeTruthy();
})
