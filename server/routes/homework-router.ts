import * as assignmentCtrl from '../controllers/assignment-ctrl';
import * as classCtrl from '../controllers/class-ctrl';
import { Router } from 'express';

const router = Router();

// Assignment
router.post('/assignment', assignmentCtrl.createAssignment);
router.put('/assignment/:id', assignmentCtrl.updateAssignment);
router.delete('/assignment/:id', assignmentCtrl.deleteAssignment);
router.get('/assignment/:id', assignmentCtrl.getAssignmentById);
router.get('/assignments', assignmentCtrl.getAssignments);

// Class
router.post('/class', classCtrl.createClass);
router.put('/class/:id', classCtrl.updateClass);
router.delete('/class/:id', classCtrl.deleteClass);
router.get('/class/:id', classCtrl.getClassById);
router.get('/classes', classCtrl.getClasses);

export default router;
