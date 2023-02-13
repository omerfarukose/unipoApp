import React, {createContext, useState, useEffect} from 'react';

export const UserContext = createContext();

export const UserContextProvider = (props) => {

    const [username, setUsername] = useState("");
    const [university, setUniversity] = useState("");
    const [department, setDepartment] = useState("");

    const setUserData = ( userData ) => {
        setUsername(userData.username)
        setUniversity(userData.university)
        setDepartment(userData.department)
    }

    return (
        <UserContext.Provider
            value={{
                username,
                university,
                department
            }}>

            {props.children}

        </UserContext.Provider>
    )
}
