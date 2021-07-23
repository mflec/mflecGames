const { Router } = require("express");
const genresRoutes = require("./genres");
const videogamesRoutes = require("./videogames");
const videogameRoutes = require("./videogame");

const router = Router();

router.use("/genres", genresRoutes);
router.use("/videogames", videogamesRoutes);
router.use("/videogame", videogameRoutes);

router.get('/', (req, res) => {
    return res.send('todo okey')
});


module.exports = router;
