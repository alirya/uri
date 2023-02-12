import Standard from '../../../dist/query/from-record.js';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('default', ()=>{

    const standard = new Standard({string:'string', array:[1,2,3,4]});
    standard.arrayFormat = 'brackets';
    standard.encode = false;
    expect(standard.toString()).toBe('string=string&array[]=1&array[]=2&array[]=3&array[]=4');

});
