import React from "react";
import "./login.css";

const Login = props => (
    <div className="row bg-dark col-12 text-white fullpage rounded mt-5">
        <div className= "col-md-3 col-sm-1">
        </div>
        <section className = "col-md-6 col-sm-10 bg-secondary mt-5 py-3 rounded border border-white">
        <h2>
            Please Login
        </h2>
        <div className="spacer row col-12 bg-white mx-1 my-2"></div>
        <div className="form-group mt-3">
            <label>Username:</label>
            <input
                type="text"
                className="form-control"
                name="loginName"
                value={props.loginName}
                onChange={props.handleInputChange}
            />
        </div>
        <div className="form-group">
            <label>Password:</label>
            <input
                type="password"
                className="form-control"
                name="Password"
                value={props.Password}
                onChange={props.handleInputChange}
            />
        </div>
        <span className= "px-1"></span>
        <button type="button" className="btn btn-success px-3" onClick={props.setUser}> Log In</button>
        <span className= "px-5"></span>
        <button type="button" className="btn btn-primary px-3" onClick={props.openPanel}> Create New Account</button>
        </section>
        <div className= "col-md-3 col-sm-1">
        </div>
    </div>
);

export default Login;
