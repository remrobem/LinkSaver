import React from "react";
import "./user.css";

const UserComp = props => (
  <div className="">
    <div className="container">
      <div classNme="row">
        <div className="col-xs-8">
          <div className="bg-dark">{props.children}</div>
        </div>

        <div className="col-xs-4">
          <div className="container-fluid">
            {/* <div className="row"> */}
              <div className="col-xs-12 mt-3 bg-secondary pt-2 text-white  rounded border border-2 border-white">
                <h5>Add a new folder</h5>
              </div>
            {/* </div> */}

            {/* <div className="spacer col-xs-12 bg-white mx-1 my-2" /> */}

            <div className="form-group ">
              <div className="col-xs-8" />
              <label style={{color: 'white'}}>Title:</label>
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
                <label style={{color: 'white'}} >Description:</label>
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
  </div>
);

export default UserComp;
