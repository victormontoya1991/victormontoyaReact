import { createContext, useContext, useState } from "react";
const MOCK_USERS = [
    {
        email: 'disvictormontoya@gmail.com',
        password: 'admin'
    }
]
export const LoginContext= createContext()
export const useLoginContext = ()=>{
    return useContext (LoginContext)
}
export const LoginProvider = ({ children }) => {
    const [user, SetUser] = useState({
        email: '',
        logged: '',
        erro: null
    })
    const login = (values) => {
        const match = MOCK_USERS.find(user =>user.email === values.email && user.password === values.password)
        if(match) {
            SetUser({
                email: match.email,
                logged: true,
                error: null
            })
        }else {
            SetUser({
                email: null,
                logged: false,
                error: 'Datos invalidos'
            })
        }
    }
    const logout = () => {
        SetUser({
            email: null,
            logged: false,
            error: null
        })
    }
    return (
        <LoginContext.Provider value={{user, login, logout }}>
            {children}
        </LoginContext.Provider>
    )
}