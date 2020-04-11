import React from "react";


function Card(props) {


    return (
        <div className="card mb-3"
            style={{ maxWidth: "600px" }}>
            <div className="row no-gutters">

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"><strong>Name:</strong>{props.name}</h5>
                        <h5 className="card-title"><strong>Job Title:</strong> {props.title}</h5>
                        <h5 className="card-title"><strong>Manager:</strong> {props.manager}</h5>
                        <h5 className="card-title"><strong>Year Hired:</strong> {props.yearhired}</h5>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Card;