import DomainName from '../../../dist/host/validatable/domain-name';
import Truncate from '@alirya/string/truncate';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});

let values : [string, boolean][] = [];

/**
 * ASCII only
 * @link https://www.w3.org/2004/04/uri-rel-test.html
 */
values.push(['google', true]);
values.push(['w3', true]);

/**
 * using IDNs
 * @link https://www.w3.org/2004/04/uri-rel-test.html
 */
values.push(['xn--rksmrgs-5wao1o.josefsson.org', true]);
values.push(['xn--99zt52a.w3.mag.keio.ac.jp', true]);

/**
 * long IDNs or IDN labels
 * @link https://www.w3.org/2004/04/uri-rel-test.html
 */
values.push(['www.xn--n8jaaaaai5bhf7as8fsfk3jnknefdde3fg11amb5gzdb4wi9bya3kc6lra.w3.mag.keio.ac.jp', true]);
values.push(['xn--n8jaaaaai5bhf7as8fsfk3jnknefdde3fg11amb5gzdb4wi9bya3kc6lra.xn--n8jaaaaai5bhf7as8fsfk3jnknefdde3fg11amb5gzdb4wi9bya3kc6lra.xn--n8jaaaaai5bhf7as8fsfk3jnknefdde3fg11amb5gzdb4wi9bya3kc6lra.w3.mag.keio.ac.jp', true]);


values.push(['255.255.255.255', true]);
values.push(['0.0.0.0', false]);
values.push(['1.1.1.1', false]);
values.push(['255.0.255.0', false]);

values.push(['256.255.255.255', true]);
values.push(['255.255.255.255:70', false]);
values.push(['-1.255.255.255:70', false]);

values.push(['1:2:3:4:5:6:7:8', false]);
values.push(['2001:0db8:85a3:0000:0000:8a2e:0370:7334', false]);
values.push(['[2001:db8:85a3:8d3:1319:8a2e:370:7348]', false]);
values.push(['2001:db8:1234:ffff:ffff:ffff:ffff:ffff', false]);

values.push(['256.255.255.255', true]);
values.push(['255.255.255.255:70', false]);
values.push(['255.255.255:70', false]);
values.push(['google', true]);
values.push(['[2001:db8:85a3:8d3:1319:8a2e:370:7348]:80', false]);

for(let [scheme, valid] of values) {

    let validatable = DomainName(scheme);

    it(scheme, ()=>{

        expect(validatable.valid).toBe(valid);

        if(validatable.valid) {

            expect(validatable.message).toBe(`is valid domain name.`);

        } else {

            expect(validatable.message).toBe(`must valid domain name, actual "${Truncate(scheme, 20)}".`);

        }

    });

}

