const express = require('express');
const { Client } = require('pg');
const bodyParser = require("body-parser");
require("dotenv/config");
const app = express();

// Rutas
const accountRoute = require('./routes/account');
app.use('/accounts', accountRoute);

const campaignRoute = require('./routes/campaign');
app.use('/campaigns', campaignRoute);

const contactRoute = require('./routes/contact');
app.use('/contacts', contactRoute);

const leadsRoute = require('./routes/lead');
app.use('/leads', leadsRoute);

const loginRoute = require('./routes/login');
app.use('/login', loginRoute);

var PORT = process.env.PORT || 3001;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configurar conexión, middlewares y rutas
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: true,
});
  
client.connect( () =>{
    console.log('Connected');
});

// inicializar
app.listen(PORT, () => {
    console.log("Listening...");
  });
  