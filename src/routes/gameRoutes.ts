import {Router} from 'express';
import { start,state,hit } from '../controllers/gameController';


const router = Router();
router.post('/start',start);
router.post('/hit',hit);
router.get('/state',state);


export default router;