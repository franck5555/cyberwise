import { Router } from 'express';
import { checkAuth } from '../middleware/authenticate';
import scannerController from '../controllers/scannerController';

const router = Router();

router.get('/:userId', checkAuth, scannerController.getUserScans);
router.post('/:userId', checkAuth, scannerController.createScan);

export default router;