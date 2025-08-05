import { Router } from "express";
import gameRoutes from './gameRoutes';

const router=Router();

router.use('/game',gameRoutes);

export default router;