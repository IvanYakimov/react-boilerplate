const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

/* HEROKU-dependent code */
const port = process.env.PORT || 3000;
/* . */

hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());

let app = express();
app.set('view engine', 'hbs');
app.use(express.static(`${__dirname}/public`));
app.use((request, response, next) => {
    const now = new Date().toString();
    const log = `${now}: ${request.method} ${request.url}`;
    const log_file = `server.log`;
    console.log(log);
    fs.appendFile(log_file, `${log}\n`, err => { if (err) console.log(`Unable to append to ${log_file}`) });
    next(); // run
});

app.use((request, response, next) => {
    response.render('home.hbs');
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});