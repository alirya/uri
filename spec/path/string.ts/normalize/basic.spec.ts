import Normalize from '../../../../dist/path/string/normalize';


describe('constructor', ()=>{

    let standard = Normalize('root/parent/../child', '/');

    it('path', ()=>{
        expect(standard.toString()).toBe('root/child');
    });

});