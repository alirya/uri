import Standard from '../../../dist/path/standard-parameters';


it('force console log', () => { spyOn(console, 'log').and.callThrough();});


const path = 'root/parent/child/file.ext';


describe(`prefix`, ()=>{

    const standard = new Standard(path);

    it('delimiter', ()=>{

        expect(standard + '').toBe(path);
    });

});

describe(`no prefix`, ()=>{

    const standard = new Standard(path, undefined, undefined, true);

    it('delimiter', ()=>{

        expect(standard + '').toBe('/' + path);
    });

});
