/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, Genre, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  name: "Super Mario Bros",
  description: " The objective is to race through the Mushroom Kingdom, survive the main antagonist Bowser's forces, and save Princess Toadstool.[6]:7 The game is a side-scrolling platform game; the player moves to the right to reach the flagpole at the end of each level.",
  platforms: ["Atari 2600", "Nintendo Switch"],
  id: "testVideogame"
};


describe('Videogame routes', () => {

  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));

  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));

  describe('GET /', function () {
    it('Should get 200', () => {
      agent.get('/').expect(200);
    });
  });

  describe('GET /videogames', () => {
    it('Should get 200', () =>
      agent.get('/videogames').expect(200)
    );
    it('should get a 15 results', () =>
      agent.get('/videogames?name=fornite')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          expect(res.body).length(15);
        })
    );
  });

  describe('GET /videogame/:idGame', () => {
    it('Should get 404 status if game exist', () => {
      agent.get('/videogame/adsdashdiuashdiasud')
        .expect(404);
    });
    it('Should get 200 status if ', () => {
      agent.get('/videogame/testVideogame').expect(200);
    })
  });

  describe('GET /videogames?name={name}', () => {
    it('Should get 200', () =>
      agent.get('/videogames?name=fornite').expect(200)
    );
    it('should get a 15 results', () =>
      agent.get('/videogames?name=fornite')
        .expect(200)
        .expect('Content-Type', /json/)
        .expect(function (res) {
          expect(res.body).length(15);
        })
    );
  })

  describe('GET /genres', () => {
    it('Should get 200', () =>
      agent.get('/genres').expect(200)
    );
  });

  describe('POST /videogame', () => {
    it('Should get 302', () => {
      agent.post('/videogame')
        .send({
          name: 'Fornite',
          description: 'cool',
          platforms: ['pc']
        })
        .expect(302);
    });

    it('Should enter a videogame in the database', () => {
      agent.post('/videogame')
        .send({
          name: 'TheEndOfTheWORLD',
          description: 'ta weno',
          platforms: ['pc']
        })
        .then(() => {
          Videogame.findOne({
            where: {
              name: 'TheEndOfTheWORLD'
            }
          });
        })
        .then(game => {
          expect(game).to.exist;
        });
    });


    it('Set Genre in database', () => {
      agent.post('/videogame')
        .send({
          name: 'Fornite',
          description: 'ta weno',
          platforms: ['pc'],
          genres: ["1", "2"]
        })
        .then(() => {
          Videogame.findOne({
            where: {
              name: 'Fornite'
            },
            include: {
              model: Genre
            }
          });
        })
        .then(game => {
          expect(game.genres[0].name).to.equal('Racing');
          expect(game.genres[1].name).to.equal('Shooter');
        });
    });
  });
});