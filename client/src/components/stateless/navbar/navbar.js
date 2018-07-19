import React from "react";
import "./navbar.css";

const navComp = props => (
    <nav className="nav bg-secondary text-white p-2">
        <div className="row mb-2">
                <h2 className="nav-link active" href="">LinkSaver</h2>
                <a className="nav-link pt-4" href="">User Settings</a>
                <a className="nav-link pt-4" href="">Collaborations</a>
            <div>
                <a className="nav-link pt-4 justify-content-right" href="">Logout</a>
            </div>
        </div>
    </nav>
);

export default navComp;