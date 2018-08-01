import React from "react";
import "./user.css";

const UserComp = props => (
  <div className="mr-3">
    <div className="col-12">
      <div className="col-xs-1"></div>
      <div className="col-xs-10">
        <div className="bg-dark col-12">{props.children}</div>
      </div>
      <div className="col-xs-1"></div>
    </div>
    {/* <div className="spacer col-xs-12 bg-white mx-1 my-2" /> */}
    <div className="col-xs-4 ml-3 mt-4">
      <div className="container-fluid">
        <div className="col-xs-12 mt-3 bg-secondary pt-2 text-white rounded border border-2 border-white p-3">
          <h5>Add a new folder</h5>
          <div className="form-group ">
            <div className="col-xs-8" />
            <label style={{ color: 'white' }}>Title:</label>
            <input
              type="text"
              className="form-control"
              name="newFolder"
              value={props.newFolder}
              onChange={props.handleInputChange}
            />
          </div>

          <div className="form-group ">
            <div className="col-xs-8">
              <label style={{ color: 'white' }} >Description:</label>
              <input
                type="text"
                className="form-control"
                name="newDescription"
                value={props.newDescription}
                onChange={props.handleInputChange}
              />
            </div>
          </div>

          <button
            className="btn btn-success my-2"
            onClick={() => props.addFolder()}
          >
            Add Folder
            </button>
        </div>
      </div>
    </div>
  </div>
);

export default UserComp;
