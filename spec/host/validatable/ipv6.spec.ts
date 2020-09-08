import Ipv6 from "../../../dist/host/validatable/ipv6";
import Truncate from "@dikac/t-string/truncate";

it("enable console log", () => { spyOn(console, 'log').and.callThrough()});

let list : [string, boolean][] = [];

list.push(['1:2:3:4:5:6:7:8', true]);
list.push(['2001:0db8:85a3:0000:0000:8a2e:0370:7334', true]);
list.push(['[2001:db8:85a3:8d3:1319:8a2e:370:7348]', true]);
list.push(['2001:db8:1234:ffff:ffff:ffff:ffff:ffff', true]);

list.push(['256.255.255.255', false]);
list.push(['255.255.255.255:70', false]);
list.push(['255.255.255:70', false]);
list.push(['google', false]);
list.push(['[2001:db8:85a3:8d3:1319:8a2e:370:7348]:80', false]);


for(let [scheme, valid] of list) {

    let validatable = Ipv6(scheme);

    it(scheme, ()=>{

        expect(validatable.valid).toBe(valid);

        if(validatable.valid) {

            expect(validatable.message).toBe(`${Truncate(scheme, 20)} is valid ipv6`);

        } else {

            expect(validatable.message).toBe(`${Truncate(scheme, 20)} is not valid ipv6`);

        }

    });

}
