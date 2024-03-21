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
        const testMusi = await Musician.create({name: "The Killer", instrument: "Guitar"});
        expect(testMusi).toBeTruthy();
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
        const createdMusi = await Musician.create({name: "Nickelback", instrument: "Guitar" });
        const updateMusi = await createdMusi.update({instrument: "Drums"});
        expect(createdMusi).toBe(updateMusi);
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
        const createdMusi = await Musician.create({name: "Linkin Park", instrument: "Guitar"});
        const deleteMusi = await createdMusi.destroy();
        expect(createdMusi).toBe(deleteMusi);
    })

    test('can delete a Song', async () => {
        // TODO - test deleting a song
        
    })

})


describe('Band, Musician, and Song Associations', () => {

    beforeAll(async () => {
        // the 'sync' method will create tables based on the model class
        // by setting 'force:true' the tables are recreated each time the 
        // test suite is run
        await db.sync({ force: true });
    })

test('associations between Song and Band', async () => {
    const testBand = await Band.create({name: 'Deloitte rockettes', genre: 'rock'});

    const song1 = await Song.create({name: "girls wanna fun", year: "1983", length: 185});
    const song2 = await Song.create({name: "We are the champions", year: "1989", length: 165});

    await testBand.addSong(song1);
    await testBand.addSong(song2);

    const songsOfTestBand = await testBand.getSongs();
    expect(songsOfTestBand.length).toBe(2);
    expect(songsOfTestBand.map(song => song.name)).toContain('girls wanna fun');
    expect(songsOfTestBand.map(song => song.name)).toContain('We are the champions');

    const bandsofSong1 = await song1.getBand();
    expect(bandsofSong1[0].name).toBe('Deloitte rockettes');

    const bandsofSong2 = await song2.getBand();
    expect(bandsofSong2[0].name).toBe('Deloitte rockettes');
})

test("add multiple musicians to a band", async () => {
    // Create some bands
    const band1 = await Band.create({ name: "Band A", genre: "Rock" });
  
    // Create at least two musicians
    const musician1 = await Musician.create({ name: "John Doe", instrument: "Guitar" });
    const musician2 = await Musician.create({ name: "Jane Smith", instrument: "Drums" });
  
    // Add musicians to a band
    await band1.addMusician([musician1, musician2]);
  
    // Check if the musicians have been added correctly to the band
    const musiciansOfBand1 = await band1.getMusicians();
  
    expect(musiciansOfBand1.length).toBe(2);
    expect(musiciansOfBand1).toContainEqual(expect.objectContaining({ name: "John Doe" }));
    expect(musiciansOfBand1).toContainEqual(expect.objectContaining({ name: "Jane Smith" }));
})
})
=======
});
