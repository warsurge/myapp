import React from "react";
import "./style.css";

function EmployeeCard(props){
    return (
        <div className = "card">
            <div className= "img-container">
                <img alt ={props.name} src={props.picture} />
            </div>

            <div className ="content">
                <ul>
                    <li>
                        <strong>Name:</strong> {props.name}
                    </li>
                    <li>
                        <strong>Occupation:</strong> {props.occupation}
                    </li>
                    <li>
                        <strong>Office Number:</strong>{props.location}
                    </li>
                    <li>
                        <strong>Username:</strong>{props.username}
                    </li>
                    <li>
                        <strong>Phone Number:</strong>{props.phone}
                    </li>
                    <li>
                        <strong>Email:</strong>{props.email}
                    </li>
                    <li>
                        <strong>ID:</strong>{props.id}
                    </li>
                </ul>
            </div>
        </div>

    )
}

export default EmployeeCard;