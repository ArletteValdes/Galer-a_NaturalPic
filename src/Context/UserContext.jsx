import { createContext, useState} from "react";

export const UserContext = createContext(false)

export default function UserProvider({children}){

const [user, setUser] = useState(false)

    return(
        <UserContext.Provider value={{user, setUser}}>
{children}

        </UserContext.Provider>
    )
}