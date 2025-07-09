import { Router } from 'express';
import * as TaskController from '../controllers/taskcontroller.js';

const router = Router();

router.get('/', TaskController.getTasks);
router.post('/', TaskController.createTask);
router.put('/:id', TaskController.updateTask);
router.delete('/:id', TaskController.deleteTask);
router.get('/summary', TaskController.getSummary);

export default router;
