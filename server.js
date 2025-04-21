import express from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
	res.send('Hello World!');
});

import historyRouter from './routes/priceHistory.js';
app.use('/history', historyRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
