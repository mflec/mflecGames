const app = require("./src/app");
const { conn, Genre } = require('./src/db.js');
const axios = require('axios').default;
require("dotenv").config();

const PORT = 3005;

const RAWG_GENRES = `https://api.rawg.io/api/genres`;
const KEY = "0a54940f8789456aa6d405ce652df399";

conn.sync({ force: false }).then(() => {
    app.listen(process.env.PORT, async() => {
        let apiGenres = await axios.get(`${RAWG_GENRES}?key=${KEY}`);
        apiGenres = await apiGenres.data.results.map(genre => Genre.create({
        name: genre.name,
         id: genre.id
        }));
        console.log(`Listening in port ${process.env.PORT}`)
    })
});