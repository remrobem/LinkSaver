import React from "react";
import "./navbar.css";

const navComp = props => (
    <nav className="nav bg-secondary text-white p-2 border-bottom border-white">
        <div className="row mb-2">
                <h1 className="nav-link active pt-1" href="">LinkSaver</h1>
                <a className="nav-link navStyle pt-4" href="">User Settings</a>
                <a className="nav-link navStyle pt-4" href="">Collaborations</a>
            <div>
                <a className="nav-link navStyle pt-4 justify-content-right" href="" onClick = {props.logout}>Logout</a>
            </div>
        </div>
    </nav>
);

export default navComp;