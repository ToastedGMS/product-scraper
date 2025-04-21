import express from 'express';
import priceHistory from '../controllers/priceHistory.js';
const router = express.Router();

router.get('/', priceHistory);

export default router;
