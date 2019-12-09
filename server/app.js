const express = require('express');
const routes = require('./routes')

const app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(routes);

app.listen(process.env.PORT || 3000, () => console.log('Listening on 3000'));