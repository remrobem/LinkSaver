import React from "react";
import "./folder.css";

const Folder = props => (
    <div className="col-12 py-2 bg-secondary text-white border border-2 border-white mt-4">

        <div className="row">
            <span className="ml-2 col-1"></span>
            <h4 className = "col-6">FOLDER TITLE TEXT</h4>
            <div className="col-4">
                <img className="copy-icon m-1" id="copyButton" alt="Copy Link To Clipboard" src="./assets/images/icons/link.png"></img>
                <img className="delete-icon m-1" id="deleteButton" alt="Delete Link From Folder" src="./assets/images/icons/delete.png"></img>
            </div>
        </div>

        <div className="spacer row col-12 bg-white mx-2"></div>

        <div className="row">
            <span className="ml-2 col-2"></span>
            <div className="col-6">
            {props.children}
            </div>
        </div>

    </div>
);

export default Folder;
