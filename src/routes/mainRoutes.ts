import { Router } from "express";
import gameRoutes from './gameRoutes';

const router=Router();

router.use('/',gameRoutes);

export default router;