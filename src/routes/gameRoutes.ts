import {Router} from 'express';
import { start,state,hit,stand,double } from '../controllers/gameController';


const router = Router();
router.post('/start',start);
router.post('/hit',hit);
router.post('/stand',stand)
router.post('/double',double)
router.get('/state',state);


export default router;