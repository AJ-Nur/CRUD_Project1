import { useState } from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
 
const AddStudent = () => {
    const [name, setName] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [bloodType, setBType] = useState('');
    const history = useNavigate();
 
    const saveStudent = async (e) => {
        e.preventDefault();
        await axios.post('http://localhost:5000/health',{
            name: name,
            height: height,
            weight : weight,
            bloodType : bloodType
        });
        history.push("/");
    }
 
    return (
        <div>
            <form onSubmit={ saveStudent }>
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
                    <button className="button is-success">Save</button>
                </div>
            </form>
        </div>
    )
}
         
export default AddStudent