import {Router} from 'express';
import { start,state,hit,stand } from '../controllers/gameController';


const router = Router();
router.post('/start',start);
router.post('/hit',hit);
router.post('/stand',stand)
router.get('/state',state);


export default router;