import React from "react";
import "./folder.css";
import Link from '../link/link';

const Folder = props => (
    <div className="col-12 py-2 bg-secondary text-white border border-2 border-white mt-4 rounded">

        <div className="row" onClick={() => props.setActiveFolder(props._id, "active")}>
            <span className="ml-2 col-1"></span>
            <h4 className="col-6 mt-4">FOLDER TITLE TEXT {props.title}</h4>
            <div className="col-4">
                <img onClick={() => props.copy(props.folderURL)} className="copy-icon m-1" id="copyButton" alt="Copy Link To Clipboard" src="./assets/images/icons/link.png"></img>
                <img className="delete-icon m-1" id="deleteButton" alt="Delete Link From Folder" src="./assets/images/icons/delete.png"></img>
            </div>
        </div>

        <div className="row bg-dark">
            <div className="">
                {props.links.map(link => {
                    return (<Link
                        key={link.url}
                        title={link.title}
                        url={link.url}
                        removeLink={props.removeLink}
                        copy={props.copy}
                    />)
                })}
            </div>
        </div>
        <div className="container mt-3">
            <h5>Add a new link</h5>
            <div className="form-group">
                <label>Title:</label>
                <input
                    type="text"
                    className="form-control col-8"
                    name="newTitle"
                    value={props.newTitle}
                    onChange={props.handleInputChange}
                />
            </div>
            <div className="form-group">
                <label>URL:</label>
                <input
                    type="url"
                    className="form-control col-8"
                    name="newURL"
                    value={props.newURL}
                    onChange={props.handleInputChange}
                />
            </div>
            <button className="btn btn-success my-2" onClick={() => props.addLink(props._id)}>Add New Link</button>
        </div>

    </div>
);

export default Folder;
