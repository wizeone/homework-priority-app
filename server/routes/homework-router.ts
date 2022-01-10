import * as assignmentCtrl from '../controllers/assignment-ctrl';
import * as classCtrl from '../controllers/class-ctrl';
import { Router } from 'express';

const router = Router();

// Assignment
router.post('/assignment', assignmentCtrl.createAssignment);
router.put('/assignment/:id', assignmentCtrl.updateAssignment);
router.delete('/assignment/:id', assignmentCtrl.deleteAssignment);

// Class
router.post('/class', classCtrl.createClass);

export default router;
