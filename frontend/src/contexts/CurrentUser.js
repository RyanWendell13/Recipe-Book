import {React, createContext, useState, useEffect} from "react";

export const CurrentUser= createContext()

function CurrentUserProvider({children}){
    const [currentUser, setCurrentUser] = useState(null)

    useEffect(() => {
        const getLoggedInUser = async () => {
            let response = await fetch('/api/users/profile',{
                credentials: 'include'
            })
            let user = await response.json()
            setCurrentUser(user)
        }
        getLoggedInUser()
    },[])

    return (
        <CurrentUser.Provider value={{currentUser, setCurrentUser}}>
            {children}
        </CurrentUser.Provider>
    )
}

export default CurrentUserProvider