import { Router } from 'express';
import { calculateWage } from '../controllers/wageController';

const router = Router();

router.post('/', calculateWage);

export { router };