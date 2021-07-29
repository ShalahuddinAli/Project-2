require('dotenv').config();
const express = require('express');
const app = express();
const proxyRouter = require('./routes/proxy');
const adminRouter = require('./routes/admin');
const cors = require('cors');

const PORT = process.env.PORT || 4000;

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('build'));
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
	});
}
app.use(cors());
app.use(express.json());

app.use('/proxyServer', proxyRouter);
app.use('/admin', adminRouter);

app.listen(PORT, () => console.log(`Listening...`));
