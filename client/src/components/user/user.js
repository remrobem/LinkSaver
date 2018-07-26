import React from "react";
import "./user.css";

const UserComp = props => (
    <div className="bg-dark row fullpage">
        <div className="col-2"></div>
        <div className="bg-dark col-10">
            {props.children}
        </div>
    </div>

);

export default UserComp;