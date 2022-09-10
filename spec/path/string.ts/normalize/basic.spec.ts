import Normalize, {NormalizeParameters} from '../../../../dist/path/string/normalize';


describe('constructor', ()=>{

    let standard = NormalizeParameters('root/parent/../child', '/');

    it('path', ()=>{
        expect(standard.toString()).toBe('root/child');
    });

});