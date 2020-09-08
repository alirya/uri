import PercentEncoded from "../../dist/pattern/percent-encoded";
import PercentEncodedList from "./percent-encoded";

it("force console log", () => { spyOn(console, 'log').and.callThrough()});

for(let percent of PercentEncodedList()) {

    it(percent, ()=>{
        expect(percent.match(PercentEncoded)).toBeTruthy();
    });

}
