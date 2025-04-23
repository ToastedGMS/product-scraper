import express from 'express';
const app = express();
const port = 3000;
import corsModule from 'cors';
const cors = corsModule.default || corsModule;

app.use(
	cors({
		origin: '*',
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	})
);

app.use(express.json());
app.get('/', (req, res) => {
	res.send('Hello World!');
});

import historyRouter from './routes/priceHistory.js';
app.use('/history', historyRouter);
import priceRouter from './routes/storePrice.js';
app.use('/update', priceRouter);

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
