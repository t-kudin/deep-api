const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { port, url } = require('./config');
const Routes = require('./routes/routes');


const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use('/', Routes.routes);

app.listen(port, () => console.log(`App is listening on url: ${url}`));