const express = require('express');
const app = express();
const cors = require('cors');
const carparkController= require('./controllers/carpark')
const trafficCamController= require('./controllers/trafficCam')
require('dotenv').config();

const PORT = process.env.PORT || 4000
app.use(cors());

app.use('/proxyServer/carparks', carparkController);
app.use('/proxyServer/trafficCam', trafficCamController);



app.listen(PORT,()=> console.log(`Listening...`))