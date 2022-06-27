import express from "express";
 
import { 
    getStudentsList,
    getStudentById,
    AddNewStudent,
    updateStudent,
    removeStudent
} from "../controllers/control.js";
 
const router = express.Router();
 
router.get('/', getStudentsList);
router.get('/:id', getStudentById);
router.post('/', AddNewStudent);
router.patch('/:id', updateStudent);
router.delete('/:id', removeStudent);
 
export default router;