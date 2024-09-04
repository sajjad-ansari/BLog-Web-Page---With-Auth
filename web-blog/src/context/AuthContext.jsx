import axios from "axios";
import{ createContext, useEffect, useState} from "react";

export const AuthContext = createContext();

export const AuthContextProvider = ({children}) =>{
    const storeUser = localStorage.getItem("user");
    let initialUser = null;

    try {
        initialUser = storeUser ? JSON.parse(storeUser): null;
        
    } catch (error) {
        console.log("Error Parsing user data from LocalStorage", error);
        
    }

    const [user, setUser] = useState(initialUser);

    const login = async (formData) => {
        const res  = await axios.post(
            "http://localhost:5550/api/auth", formData
        );

        console.log(res.data)
    };

    const logout = async () => {
        await axios.delete("http://localhost:5550/api/auth");
        setUser(null);
    };

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(user));
    },[user]);

    


    return(
        <AuthContext.Provider value={{user, login, logout}}>

            {children}

        </AuthContext.Provider>
    );
    
}