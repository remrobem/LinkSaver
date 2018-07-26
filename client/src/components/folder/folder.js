import React from "react";
import "./folder.css";
import Link from '../link/link';

const Folder = props => (
    <div className="col-12 py-2 bg-secondary text-white border border-2 border-white mt-4">

        <div className="row">
            <span className="ml-2 col-1"></span>
            <h4 className="col-6">FOLDER TITLE TEXT {props.title}</h4>
            <div className="col-4">
                <img className="copy-icon m-1" id="copyButton" alt="Copy Link To Clipboard" src="./assets/images/icons/link.png"></img>
                <img className="delete-icon m-1" id="deleteButton" alt="Delete Link From Folder" src="./assets/images/icons/delete.png"></img>
            </div>
            <button className="btn btn-success" onClick={() => props.setActiveFolder(props._id, "active")}>Close</button>
        </div>

        <div className="spacer row col-12 bg-white mx-2"></div>

        <div className="row">
            <span className="ml-2 col-2"></span>
            <div className="col-6">
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

    </div>
);

export default Folder;
