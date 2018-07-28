import React from "react";
import "./folder.css";

const InnactiveFolder = props => (
    <div className="col-12 py-2 bg-secondary text-white border border-2 border-white mt-4 rounded" onClick={() => props.setActiveFolder(props._id, "innactive")}>

        <div className="row">
            <div className="col-8" onClick={() => props.setActiveFolder(props._id, "innactive")}>
                <h4 className="col-10 mt-4">{props.name}</h4>
            </div>
            <div className="col-4">
                <img onClick={() => props.copy(props.folderURL)} className="copy-icon m-1" id="copyButton" alt="Copy Link To Clipboard" src="./assets/images/icons/link.png"></img>
                <img onClick={() => props.deleteFolder(props._id)} className="delete-icon m-1" id="deleteButton" alt="Delete Link From Folder" src="./assets/images/icons/delete.png"></img>
            </div>
        </div>
        <div className = "ml-4">
            <p>{props.description}</p>
        </div>

    </div>
);

export default InnactiveFolder;
