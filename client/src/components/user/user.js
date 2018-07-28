import React from "react";
import "./user.css";

const UserComp = props => (
    <div className="">
        <div className="container row">
            <div className="col-2"></div>
            <div className="bg-dark col-6">
                {props.children}
            </div>
            <div className="col-4">
                <div className="container mt-3 bg-secondary pt-2 text-white col-10 rounded border border-2 border-white">
                    <h5>Add a new folder</h5>
                    <div className="spacer row col-12 bg-white mx-1 my-2"></div>
                    <div className="form-group">
                        <label>Title:</label>
                        <input
                            type="text"
                            className="form-control col-8"
                            name="newFolder"
                            value={props.newFolder}
                            onChange={props.handleInputChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description:</label>
                        <input
                            type="text"
                            className="form-control col-8"
                            name="newDescription"
                            value={props.newDescription}
                            onChange={props.handleInputChange}
                        />
                    </div>
                    <button className="btn btn-success my-2" onClick={() => props.addFolder()}>Add Folder</button>
                </div>
            </div>
        </div>
    </div>

);

export default UserComp;