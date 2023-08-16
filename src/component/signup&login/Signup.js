import React, { useState } from 'react';
import { Link,useNavigate } from "react-router-dom";

const Signup = (props) => {

    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ name: "", email: "",mobileno: "" , password: "", cpassword: ""})

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { name, email, password,mobileno } = credentials;
        const response = await fetch("https://smartandfastrajkot.onrender.com/home/auth/createuser", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, password,mobileno })
        });
        const json = await response.json()
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            navigate("/login");
            props.showAlert("Account created successfuly", "success")
        }
        else {
            props.showAlert("Invalid details", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }


    return (
        <div className="container">
            <article className="card-body mx-auto" style={{ maxWidth: "400px" }}>
                <h2 className="card-title mt-3 text-center my-1">Create Account</h2>
                <p className="text-center">Get started with your free account</p>
                <form className='my-2' onSubmit={handleSubmit}>
                    <div className="form-group input-group my-1">
                        <div className="input-group-prepend mx-1 my-1">
                            <span className="input-group-text"> <i className="fa fa-user"></i> </span>
                        </div>
                        <input type="text" className="form-control" id="name" name="name" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Your Name" required/>
                    </div>
                    <div className="form-group input-group my-1">
                        <div className="input-group-prepend mx-1 my-1">
                            <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input type="email" className="form-control" id="email" name="email" onChange={onChange} aria-describedby="emailHelp" placeholder="Enter Your Email" required/>
                    </div>
                   
                    <div className="form-group input-group my-1">
                        <div className="input-group-prepend mx-1 my-1">
                            <span className="input-group-text"> <i className="fa fa-phone"></i> </span>
                        </div>
                        <select className="custom-select mx-1 my-1" style={{ maxWidth: "120px" }}>
                            <option selected="">+91</option>
                            <option value="1">+99</option>
                            <option value="2">+20</option>
                            <option value="3">+11</option>
                        </select>
                        <input type="number" id="mobileno" name="mobileno" className="form-control" placeholder="Enter Phone number"  onChange={onChange} maxLength={10} minLength={10} required />
                    </div>
                    <div className="form-group input-group my-1">
                        <div className="input-group-prepend mx-1 my-1">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input type="password" className="form-control" id="password" name="password" onChange={onChange} minLength={5} placeholder="Enter Password" required />
                    </div>
                    <div className="form-group  input-group my-1">
                        <div className="input-group-prepend mx-1 my-1">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input type="password" className="form-control" id="cpassword" name="cpassword" onChange={onChange} minLength={5} placeholder="Repeat Password" required />
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-outline-light me-3 btn-dark"> Create Account  </button>
                    </div>
                    <p className="text-center">Have an account? <Link to="/login">Log In</Link> </p>
                </form>
            </article>
        </div>
    )
}

export default Signup;