import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext();

export const useUser = ()=>{
    return useContext(UserContext);
};

export const UserProvider = ({children}) => {
    const [role, setRole ] = useState(null);

    const login = (userRole) => {
        setRole(userRole);
    }

    const logOut = () =>{
        setRole(null);
    }

    return (
        <UserContext.Provider value={{role, login, logOut }}>
            {children}
        </UserContext.Provider>
    )
}
  

