import React from "react";
import "./user.css";

const UserComp = props => (
    <container className="container bg-dark col-12 row">
    <div className="col-2"></div>
        <div className="bg-dark col-10">
            {props.children}
        </div>
    </container>

);

export default UserComp;