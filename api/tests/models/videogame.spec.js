const { Videogame, conn } = require('../../src/db.js');

describe('Videogame model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Videogame.sync({ force: true }));
    describe('name', () => {
      it('should throw an error if name is null', (done) => {
        Videogame.create({})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should throw an error if description is null', (done) => {
        Videogame.create({ name: 'Super Mario Bros' })
          .then(() => done(new Error('It requires a valid description')))
          .catch(() => done());
      });
      it('should throw an error if platforms is null', (done) => {
        Videogame.create({
          name: 'Super Mario Bros',
          description: " The objective is to race through the Mushroom Kingdom, survive the main antagonist Bowser's forces, and save Princess Toadstool.[6]:7 The game is a side-scrolling platform game; the player moves to the right to reach the flagpole at the end of each level."
        })
          .then(() => done(new Error('It requires a valid platforms')))
          .catch(() => done());
      });
      
      it('It should work when its a valid name, a valid description, and platforms', () => {
        Videogame.create({
          name: 'Super Mario Bros',
          description: 'A jumps game',
          platforms: ["Atari 2600", "Nintendo Switch"]
        })
      });
    });
  });
});
