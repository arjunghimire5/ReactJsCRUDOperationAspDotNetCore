import React from 'react';
import { connect } from 'react-redux';
const Home = props => (
    <div>
        <h2>Student Registration</h2>
        <br />
            <div className="col-md-4">
            <label>Student Name: </label>
            <input type="text" className="form-control" placeholder="xyzname"></input>
            </div>
            <div className="col-md-4">
                <label>Address: </label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="col-md-4">
                <label>Phone Number: </label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="col-md-4">
                <label>Gender: </label>
                <input type="text" className="form-control"></input>
            </div>
            <div className="col-md-4">
                <label>Address: </label>
                <input type="text" className="form-control"></input>
        </div>
        <div className="col-md-4">
            <button class="btn btn-success">Add</button>
        </div>
    </div>
);
export default connect()(Home);