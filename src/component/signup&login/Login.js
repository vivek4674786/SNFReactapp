import React, { useState } from "react";
import { Link, useNavigate, } from "react-router-dom";

const Login = (props) => {

    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({ email: "", password: "" })

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("https://smartandfastrajkot.onrender.com/home/auth/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: credentials.email, password: credentials.password })
        });
        const json = await response.json()
        console.log(JSON.stringify({ email: credentials.email, password: credentials.password }))
        console.log(json);
        if (json.success) {
            // Save the auth token and redirect
            localStorage.setItem('token', json.authtoken);
            props.showAlert("Logged in successfuly", "success")
            navigate("/");
        }
        else {
            props.showAlert("Invalid details", "danger")
        }
    }

    return (
        <div className="container">
            <article className="card-body mx-auto me-auto" style={{ maxWidth: "400px" }}>
                <h2 className="card-title mt-3 text-center my-1">Login into website</h2>
                <p className="text-center">Put correct Email and password.</p>
                <form className='my-2' onSubmit={handleSubmit}>
                    <div className="form-group input-group my-1 mx-1 ">
                        <div className="input-group-prepend mx-1 my-1">
                            <span className="input-group-text "> <i className="fa fa-envelope"></i> </span>
                        </div>
                        <input type="email" className="form-control" value={credentials.email} onChange={onChange} id="email" name="email" placeholder="Enter Your Email" aria-describedby="emailHelp" />
                    </div>
                    <div className="form-group input-group my-1 mx-1">
                        <div className="input-group-prepend mx-1 my-1">
                            <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
                        </div>
                        <input type="password" className="form-control" value={credentials.password} onChange={onChange} name="password" id="password" placeholder="Enter Password"/>
                    </div>
                    <div className="form-group text-center">
                        <button type="submit" className="btn btn-outline-light me-3 btn-dark">Login</button>
                    </div>
                    <p className="text-center">If does not have account than make it : <Link to="/signup">Sign Up</Link> </p>
                </form>
            </article>
        </div>
    )
}

export default Login;