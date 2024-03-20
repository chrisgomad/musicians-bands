const { sequelize } = require('./db');
const { Band, Musician, Song } = require('./index')

describe('Band, Musician, and Song Models', () => {
    /**
     * Runs the code prior to all tests
     */
    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await sequelize.sync({ force: true });
    })

    test('can create a Band', async () => {
        // TODO - test creating a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can create a Musician', async () => {
        // TODO - test creating a musician
        const testMusi = await Musician.create({name: "The Killer", instrument: "Guitar"});
        expect(testMusi).toBeTruthy();
    })

    test('can update a Band', async () => {
        // TODO - test updating a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can update a Musician', async () => {
        // TODO - test updating a musician
        const createdMusi = await Musician.create({name: "Nickelback", instrument: "Guitar" });
        const updateMusi = await createdMusi.update({instrument: "Drums"});
        expect(createdMusi).toBe(updateMusi);
    })

    test('can delete a Band', async () => {
        // TODO - test deleting a band
        expect('NO TEST').toBe('EXPECTED VALUE HERE');
    })

    test('can delete a Musician', async () => {
        // TODO - test deleting a musician
        const createdMusi = await Musician.create({name: "Linkin Park", instrument: "Guitar"});
        const deleteMusi = await createdMusi.destroy();
        expect(createdMusi).toBe(deleteMusi);
    })
})