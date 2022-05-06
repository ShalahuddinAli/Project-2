const path = require('path');
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');

const coeRouter = require('./routes/coe');
const proxyRouter = require('./routes/proxy');
const adminRouter = require('./routes/admin');

require('dotenv').config();

const app = express();
const mongoURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}`;

app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(mongoURI, {
	useUnifiedTopology: true,
	useNewUrlParser: true,
});

mongoose.connection.once('open', () => {
	console.log('Connected to mongoose...');
});

app.use('/proxyServer', proxyRouter);
app.use('/admin', adminRouter);
app.use('/coe', coeRouter);

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/client/build')));

	app.get('*', (_req, res) =>
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	);
} else {
	app.get('/', (_req, res) => {
		res.json({ message: 'API Connected...' });
	});
}

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Listening... PORT:${PORT}`));
