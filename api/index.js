const app = require("./src/app");
const { conn} = require('./src/db.js');

conn.sync({ force: false }).then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Listening...`)
    })
});