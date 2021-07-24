const { Genre, Videogame } = require('../db');
const router = require('express').Router();

router.get('/', function(_req, res) {
    Genre.findAll(/*{
        include: {
          model: Videogame,
          attributes: ['id', 'name', 'image'],
          through: {
            attributes: [],
          }
        }
      }*/)
        .then(genres => res.json(genres))
        .catch(err => res.status(500).send('ups, algo salio mal😅'))
});

router.get('/:idGenre', function(req, res) {
    let { idGenre } = req.params
    Genre.findByPk(idGenre /*, {
        include: {
          model: Videogame,
          attributes: ['id', 'name', 'image'],
          through: {
            attributes: [],
          }
        }
      }*/)
        .then(genre =>
            genre ? res.json(genre) : res.sendStatus(404)
        )
        .catch(err => res.status(500).send('ups, algo salio mal😅'));
});

module.exports = router;