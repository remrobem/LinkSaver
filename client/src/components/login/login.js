import React from "react";
import "./login.css";

const Login = props => (
    <div className="row bg-dark col-12 text-white fullpage rounded">
        <div className= "col-3">
        </div>
        <seciton className = "col-6 bg-secondary mt-5 py-3 rounded border border-white">
        <h2>
            Please Login
        </h2>
        <div className="spacer row col-12 bg-white mx-1 my-2"></div>
        <div className="form-group">
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
        <button type="button" className="btn btn-success" onClick={props.setUser}> Log In</button>
        </seciton>
        <div className= "col-3">
        </div>
    </div>
);

export default Login;
