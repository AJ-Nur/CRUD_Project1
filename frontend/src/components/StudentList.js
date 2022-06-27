import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
 
const StudentList = () => {
    const [rec, setStudent] = useState([]);
 
    useEffect(() => {
        getStudents();
    }, []);
 
    const getStudents = async () => {
        const response = await axios.get('http://localhost:5000/health');
        setStudent(response.data);
    }
 
    const removeStudent = async (id) => {
        await axios.delete(`http://localhost:5000/health/${id}`);
        getStudents();
    }
 
    return (
        <div>
            <Link to="/add" className="button is-link mt-2">Add New</Link>
            <table className="table is-bordered is-fullwidth">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Weight</th>
                        <th>Height</th>
                        <th>Blood Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    { rec.map((student, index) => (
                        <tr key={ student.id }>
                            <td>{ index + 1 }</td>
                            <td>{ student.name }</td>
                            <td>{ student.weight }</td>
                            <td>{ student.height }</td>
                            <td>{ student.bloodType }</td>
                            <td>
                                <Link to={`/edit/${student.id}`} className="button is-small is-info">Edit</Link>
                                <button onClick={ () => removeStudent(student.id) } className="button is-small  is-danger">Delete</button>
                            </td>
                        </tr>
                    )) }
                     
                </tbody>
            </table>
        </div>
    )
}
 
export default StudentList