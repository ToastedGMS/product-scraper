import express from 'express';
import storePrices from '../controllers/storePrice.js';
const router = express.Router();

router.get('/', storePrices);

export default router;
