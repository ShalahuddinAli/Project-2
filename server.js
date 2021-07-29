require('dotenv').config();
const express = require('express');
const app = express();
const proxyRouter = require('./routes/proxy');
const adminRouter = require('./routes/admin');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

app.use(
	cors({
		origin: 'http://localhost:3000',
	})
);
app.use(express.json());

app.use('/proxyServer', proxyRouter);
app.use('/admin', adminRouter);

app.listen(PORT, () => console.log(`Listening...`));
