import Student from "../models/dbmodel.js";
 
export const getStudentsList = async (_req, res) => {
    try {
        const students = await Student.findAll();
        res.json(students);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const getStudentById = async (req, res) => {
    try {
        const student = await Student.findAll({
            where: {
                id: req.params.id
            }
        });
        res.json(student[0]);
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const AddNewStudent = async (req, res) => {
    try {
        await Student.create(req.body);
        res.json({
            "message": "New Student Added"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const updateStudent = async (req, res) => {
    try {
        await Student.update(req.body, {
            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Student Updated"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
 
export const removeStudent = async (req, res) => {
    try {
        await Student.destroy({
			            where: {
                id: req.params.id
            }
        });
        res.json({
            "message": "Student removed"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}