import { createContext, useState } from "react";


interface AuthContextInterface {
    auth?: any
    setAuth:(a: any) => any
    
  }

const AuthContext = createContext({})

export function AuthProvider({ children }: any) {
    const [auth, setAuth] = useState({});

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );


}

export default AuthContext