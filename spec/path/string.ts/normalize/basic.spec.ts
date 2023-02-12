import Normalize, {NormalizeParameters} from '../../../../dist/path/string/normalize.js';


describe('constructor', ()=>{

    const standard = NormalizeParameters('root/parent/../child', '/');

    it('path', ()=>{
        expect(standard.toString()).toBe('root/child');
    });

});