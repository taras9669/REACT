import React from 'react';
import './user.css';


const User = (props) => {
    const {id, name, username, email, street, suite, city, zipcode} = props;

    return (
        <div className="UserDiv">
            <div>ID:{id}</div>
            <div>NAME:{name}</div>
            <div>USERNAME:{username}</div>
            <div>EMAIL:{email}</div>
            <h3>Address:</h3>
            <div>STREET:{street}</div>
            <div>SUITE:{suite}</div>
            <div>CITY:{city}</div>
            <div>ZIPCODE:{zipcode}</div>
            <br></br>
        </div>
    );
};

export default User;