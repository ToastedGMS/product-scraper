import express from 'express';
import averagePrice from '../controllers/getAverage.js';
const router = express.Router();

router.get('/', averagePrice);

export default router;
