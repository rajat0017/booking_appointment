const express = require('express');

const app = express();

const home= require('./home');

app.use(home);

app.listen(3000);