import {StandardParameters} from '../../../dist/path/standard.js';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});


const path = 'root/parent/child/file.ext';


describe(`prefix`, ()=>{

    const standard = new StandardParameters(path);

    it('delimiter', ()=>{

        expect(standard + '').toBe(path);
    });

});

describe(`no prefix`, ()=>{

    const standard = new StandardParameters(path, undefined, undefined, true);

    it('delimiter', ()=>{

        expect(standard + '').toBe('/' + path);
    });

});
