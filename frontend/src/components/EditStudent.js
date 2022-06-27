/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from 'react'
import axios from "axios";
import { useNavigate, useParams } from 'react-router-dom';
 
const EditStudent = () => {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bloodType, setBType] = useState('');
    const history = useNavigate();
    const { id } = useParams();
 
    const updateStudent = async (e) => {
        e.preventDefault();
        await axios.patch(`http://localhost:5000/health/${id}`,{
            name: name,
            height: height,
            weight : weight,
            bloodType : bloodType
        });
        history.push("/");
    }
 
    useEffect(() => {
        getStudentById();
    }, []);
 
    const getStudentById = async () => {
        const response = await axios.get(`http://localhost:5000/health/${id}`);
        setName(response.data.name);
        setWeight(response.data.weight);
        setHeight(response.data.height);
        setBType(response.data.bloodType);
    }
 
    return (
        <div>
            <form onSubmit={ updateStudent }>
                <div className="field">
                    <label className="label">Name</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Weight</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Weight"
                        value={ weight }
                        onChange={ (e) => setWeight(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">Height</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Height"
                        value={ height }
                        onChange={ (e) => setHeight(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Blood Type</label>
                    <input 
                        className="input"
                        type="text"
                        placeholder="Blood Type"
                        value={ bloodType }
                        onChange={ (e) => setBType(e.target.value) }
                    />
                </div>

                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditStudent