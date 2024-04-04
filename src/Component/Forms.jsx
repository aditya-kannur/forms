import { useState } from 'react';
import './Forms.css'

function Forms() {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phoneNumber: ""
    })

    const [error, setError] = useState({});
    const [successful, setSuccessful] = useState(false);

    const takeinput = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const formSubmit = (e) => {
        e.preventDefault();
        const errorMessage = validateData(formData);
        setError(errorMessage);

        if (Object.keys(errorMessage).length === 0) {
            setSuccessful(true);
        } else {
            setSuccessful(false);
        }
    }

    const validateData = (data) => {
        const error = {};
        const emailPattern = /\S+@\S+\.\S+/; // Regular expression for basic email validation
    
        if (data.firstname.trim() === "") {
            error.firstname = "Enter the firstname";
        }
        if (data.lastname.trim() === "") {
            error.lastname = "Enter the lastname";
        }
        if (!emailPattern.test(data.email)) {
            error.email = "Enter a valid email";
        }
        if (data.phoneNumber.trim().length !== 10) {
            error.phoneNumber = "Enter a valid 10-digit phone number";
        }
        return error;
    }
    

    return (
        <div className="form-container">
            <form onSubmit={formSubmit}>
                {successful && (
                    <div className="success-popup">
                        Registration successful!
                    </div>
                )}
                <div className="form-group">
                    <label className="label" htmlFor='firstname'>Enter your firstname</label>
                    <input className="input" type='text' id='firstname' name='firstname' placeholder='Enter your firstname' onChange={takeinput}></input>
                    {error.firstname ? <span className="error">{error.firstname}</span> : ""}
                </div>

                <div className="form-group">
                    <label className="label" htmlFor='lastname'>Enter your lastname</label>
                    <input className="input" type='text' id='lastname' name='lastname' placeholder='Enter your lastname' onChange={takeinput}></input>
                    {error.lastname ? <span className="error">{error.lastname}</span> : ""}
                </div>

                <div className="form-group">
                    <label className="label" htmlFor='email'>Enter your email</label>
                    <input className="input" type='email' id='email' name='email' placeholder='Enter your email' onChange={takeinput}></input>
                    {error.email ? <span className="error">{error.email}</span> : ""}
                </div>

                <div className="form-group">
                    <label className="label" htmlFor='phoneNumber'>Enter your phone number</label>
                    <input className="input" type='number' id='phoneNumber' name='phoneNumber' placeholder='Enter your phone number' onChange={takeinput}></input>
                    {error.phoneNumber ? <span className="error">{error.phoneNumber}</span> : ""}
                </div>

                <input className="submit-btn" type='submit' value={"Register"}></input>
            </form>
        </div>
    );
}

export default Forms;
