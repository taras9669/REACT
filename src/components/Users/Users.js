import React, {useEffect, useState} from 'react';
import User from "./User";


const Users = () => {
    const [usersList, setUsersList] = useState([])
    useEffect(() => {

        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(value => setUsersList(value))
    }, [])
    return (
        <div className="UserBox">
           {usersList.map(value => <User key={value.id} id={value.id} name={value.name} username={value.username} email={value.email} street={value.address.street} suite={value.address.suite} city={value.address.city} zipcode={value.address.zipcode} />)}
        </div>
    );
}

export default Users;