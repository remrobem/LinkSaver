import React from "react";
import "./link.css";

const LinkComp = props => (
    <div className="col-12 my-2 py-2 bg-light text-dark border-2 border-white">

        <div className="row">
            <span className="ml-2 col-2"></span>
            <a className="link font-weight-bold mt-2 linka" href={props.url} rel="noopener noreferrer" target="_blank">{props.name}</a>
        </div>

        <div className="spacer row col-12 bg-dark mx-2 my-2"></div>

        <div className="row">
            <span className="ml-2 col-1"></span>
            <div className="col-6">
                <p>
                    {props.description}TEXT FROM DESCRIPTION FIELD I am generating filler text which serves as the first 144 characters of a link.
                </p>
            </div>
            <div className="col-4">
                <img className="copy-icon m-1" id="copyButton" alt="Copy Link To Clipboard" src="./assets/images/icons/link.png"></img>
                <img onClick={() => props.deleteLink(props.folderID, props.url)} className="delete-icon m-1" id="deleteButton" alt="Delete Link From Folder" src="./assets/images/icons/delete.png"></img>
            </div>
        </div>

    </div>
);

export default LinkComp;
