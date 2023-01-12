const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { port, url } = require('./config');
const moviesRoutes = require('./routes/movies-routes');


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/', moviesRoutes.routes);

app.listen(port, () => console.log(`App is listening on url: ${url}`));