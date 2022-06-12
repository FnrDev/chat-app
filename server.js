const express = require('express');
const app = express();
require('dotenv').config();

app.set('view engine', 'ejs');
app.use(express.json());

app.use('/', require('./routers/index'));

app.listen(process.env.PORT, () => console.log(`App is ready on http://localhost:${process.env.PORT}`));