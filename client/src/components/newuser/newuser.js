import React from "react";
import "./newuser.css";

const NewUser = props => (
    <div className="row bg-dark col-12 text-white fullpage rounded">
        <div className="col-md-4 col-sm-1">
        </div>
        <section className="col-md-4 col-sm-10 bg-secondary mt-5 py-3 rounded border border-white">
            <h2>
                Create Your Account
        </h2>
            <div className="spacer row col-12 bg-white mx-1 my-2"></div>
            <div className="form-group mt-3">
                <label>Create Your Username:</label>
                <input
                    type="text"
                    maxlength="25"
                    className="form-control"
                    name="newloginName"
                    value={props.newLoginName}
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label>Enter Your Email:</label>
                <input
                    type="email"
                    maxlength="255"
                    className="form-control"
                    name="newLoginEmail"
                    value={props.newLoginEmail}
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label>Choose Your Password:</label>
                <input
                    type="password"
                    maxlength="16"
                    className="form-control"
                    name="newPassword"
                    value={props.newPassword}
                    onChange={props.handleInputChange}
                />
            </div>
            <span className="px-1"></span>
            <button type="button" className="btn btn-primary px-3" onClick={props.createUser(props.newLoginName, props.newLoginEmail, props.newPassword)}> Create New Account</button>
        </section>
        <div className="col-md-4 col-sm-1">
        </div>
    </div>
);

export default NewUser;
