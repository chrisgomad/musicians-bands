const { db } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        const testBand = await Band.create({name: 'Deloitte rockettes', genre: 'rock'});
        expect(testBand).toBeTruthy();
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can create a Song', async () => {
        // TODO - test creating a song
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        const testBand = await Band.create({name: 'Deloitte rockettes', genre: 'rock'});
        const updatedBand = await testBand.update({
            genre: 'jazz'
        });
        expect(testBand.genre).toBe('jazz');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Song', async () => {
        // TODO - test updating a song
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        const testBand = await Band.create({name: 'Deloitte rockettes', genre: 'rock'});
        const deletedBand = testBand.destroy({
            where:{genre: 'rock'}
        })
        expect(deletedBand).toBeTruthy();
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Song', async () => {
        // TODO - test deleting a song
        
    })
})