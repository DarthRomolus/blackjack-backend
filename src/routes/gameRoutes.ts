import {Router} from 'express';
import { start,state } from '../controllers/gameController';


const router = Router();
router.post('/start',start);
router.get('/state',state)


export default router;