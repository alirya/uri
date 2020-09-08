// import Encode from "../../../src/uri/fragment/encode";
// import SubDelimiter from "../../../src/uri/regex/sub-delimiter";
// import Trim from "../../../src/string/trim";
//
// it("force console log", () => { spyOn(console, 'log').and.callThrough();});
//
// describe("not encoded", function() {
//
//     describe("lower alpha", function() {
//
//         let lower = 'abcdefghijklmnopqrstuvwxyz';
//         let encoded = Encode(lower);
//
//         it(`is equal`, () => expect(encoded).toBe(lower));
//     });
//
//     describe("upper alpha", function() {
//
//         let lower = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//         let encoded = Encode(lower);
//
//         it(`is equal`, () => expect(encoded).toBe(lower));
//     });
//
//     describe("percent encoded", function() {
//
//         let lower = '%FF';
//         let encoded = Encode(lower);
//
//         it(`is equal`, () => expect(encoded).toBe(lower));
//     });
//
//     describe("sub delimiter", function() {
//
//         let encoded = Encode(Trim(SubDelimiter.source, '[]'));
//
//         it(`is equal`, () => expect(encoded).toBe(Trim(SubDelimiter.source, '[]')));
//     });
// });
