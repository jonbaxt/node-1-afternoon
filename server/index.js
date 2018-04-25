const express = require('express');
const bodyParser = require('body-parser');
const mc = require('./controllers/messages_controller.js');

const app = express();

app.use(bodyParser.json());

app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.set('/api/messages', mc.update);
app.delete('/api/messages', mc.delete);


const port = 3000;
app.listen( port, () => console.log(`Port ${port} is open for business!`));

