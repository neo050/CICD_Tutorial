import {expect} from 'chai';

describe('Araays',()=>
{
    describe('#sort',()=>
    {

        it('Sorting names array',()=>
        {
            var names=['Dani','Moshe','Adam']
            expect(names.sort()).to.be.eql(['Adam','Dani','Moshe'])

        })
    })

})