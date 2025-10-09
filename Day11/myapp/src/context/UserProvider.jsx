import { createContext } from "react";
import { useState } from "react";
import AuthService from "../services/Auth.service";
import { useNavigate } from "react-router-dom";

//create context object
export const UserContext = createContext(null);

//Component to maintain the state of current user
function UserProvider({children}){
    const [currentUser, setCurrentUser] = useState(AuthService.getAuthUser);
    const [currentDate, setCurrentDate] = useState(null);
    const navigate = useNavigate();

    const loginClick = (user) => {
        setCurrentUser(user);
        AuthService.setAuthUser(user);
        
    }

    const logoutClick = ()=>{
        AuthService.removeAuthUser();
        setCurrentUser(null);
        navigate('/login');
    }

    return(
        <UserContext.Provider value={{currentUser, loginClick, logoutClick, currentDate, setCurrentDate}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;