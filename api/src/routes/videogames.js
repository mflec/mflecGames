const { Videogame, Genre } = require('../db');
const router = require('express').Router();
const axios = require('axios').default;

const RAWGGAMES = `https://api.rawg.io/api/games`;
const KEY = `0a54940f8789456aa6d405ce652df399`;

router.get('/', async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      let callApi = await axios.get(`${RAWGGAMES}?key=${KEY}&search=${name}`);
      let externalGames = await callApi.data.results
      let localGames = await Videogame.findAll({
        where: {
          name: name
        },
        include: [{
          model: Genre,
        }],
      });
      externalGames = await externalGames && externalGames.map(game => ({
        id: game.id,
        name: game.name,
        dateToRelase: game.released,
        image: game.background_image,
        rating: game.rating,
        platforms: game.platforms,
        genres: game.genres,
        local: false
      }));

      let totalGames = await [...localGames, ...externalGames]
      let returnedGames= totalGames.slice(0,15)
      return res.json(returnedGames);
    };

    let callApi1 = await axios.get(`${RAWGGAMES}?key=${KEY}`);
    let callApi2 = await axios.get(`${RAWGGAMES}?key=${KEY}&page=2`);
    let callApi3 = await axios.get(`${RAWGGAMES}?key=${KEY}&page=3`);
    let callApi4 = await axios.get(`${RAWGGAMES}?key=${KEY}&page=4`);
    let callApi5 = await axios.get(`${RAWGGAMES}?key=${KEY}&page=5`);
    let callApi6 = await axios.get(`${RAWGGAMES}?key=${KEY}&page=6`);
    let callApi7 = await axios.get(`${RAWGGAMES}?key=${KEY}&page=7`);

    externalGames = await [
      ...callApi1.data.results, 
      ...callApi2.data.results, 
      ...callApi3.data.results,
      ...callApi4.data.results, 
      ...callApi5.data.results, 
      ...callApi6.data.results, 
      ...callApi7.data.results, 

    ]
    localGames = await Videogame.findAll({
      include: {
        model: Genre,
        attributes: ['id', 'name'],
        through: {
          attributes: [],
        }
      }
    });

    externalGames = await externalGames && externalGames.map(game => ({
      id: game.id,
      name: game.name,
      dateToRelase: game.released,
      image: game.background_image,
      rating: game.rating,
      platforms: game.platforms,
      genres: game.genres,
      added: game.added,
      local: false
    }));

    totalGames = await [...localGames, ...externalGames]
    return res.json(totalGames);

  } catch (error) {
    return res.status(404)
  };
});

module.exports = router;