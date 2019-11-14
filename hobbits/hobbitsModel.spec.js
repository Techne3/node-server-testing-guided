const {insert} = require('./hobbitsModel')
const db = require('../data/dbConfig')


describe('hobbits model', () => {
    describe('insert', () => {

        beforeEach(async () => {
            await db('hobbits').truncate();
        })

        it('should insert a hobbit', async function() {
            // insert a hobbit 
          await  insert({name: 'sam'})

            // check if it was inserted into database 
         const hobbits = await db('hobbits');
         expect(hobbits).toHaveLength(1)
        })


        it('should insert the provided hobbit', async function() {
            // insert a hobbit 
          await  insert({name: 'sam'})
          await  insert({name: 'gaffer'})
    
                // check if it was inserted into database 
         const hobbits = await db('hobbits');

         expect(hobbits).toHaveLength(2)
         expect(hobbits[0].name).toBe('sam')
         expect(hobbits[1].name).toBe('gaffer')
        })



    });
});

