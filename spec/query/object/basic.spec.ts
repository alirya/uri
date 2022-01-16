import Standard from '../../../dist/query/object';

it('enable console log', () => { spyOn(console, 'log').and.callThrough();});


it('default', ()=>{

    let standard = new Standard({string:'string', array:[1,2,3,4]});
    standard.arrayFormat = 'bracket';
    expect(standard.toString()).toBe('array[]=1&array[]=2&array[]=3&array[]=4&string=string');

});
