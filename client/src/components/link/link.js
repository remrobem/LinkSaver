import React from "react";
import "./link.css";

const LinkComp = props => (
    <div className="my-2 py-2 bg-light text-dark border-2 border-white">
<div className="container-fluid">
        <div className="row">
            <span className="ml-2 col-xs-12"></span>
            <a className="link font-weight-bold mt-2 linka" href={props.url} rel="noopener noreferrer" target="_blank">{props.url}</a>
        </div>

        <div className="spacer row col-xs-12 bg-dark mx-2 my-2"></div>

        <div className="row">
            <span className="ml-2 col-xs-2"></span>
            <div className="col-xs-6">
                <p>
                    {props.description}
                </p>
            </div>
            <div className="col-xs-4">
                <img className="copy-icon m-1" id="copyButton" alt="Copy Link To Clipboard" src="./assets/images/icons/link.png"></img>
                <img onClick={() => props.deleteLink(props.folderID, props.url)} className="delete-icon m-1" id="deleteButton" alt="Delete Link From Folder" src="./assets/images/icons/delete.png"></img>
            </div>
        </div>
</div>
    </div>
);

export default LinkComp;
