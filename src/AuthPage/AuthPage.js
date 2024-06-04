import { useState } from "react"
import { Login } from "./Login";
import { Register } from "./Register";
import './AuthPage.css'


export const AuthPage = () => {
    const [isLogin, setIsLogin] = useState(true);

    const handlePageToggle = () => {
        setIsLogin(prev => {
            return !prev;
        });
    }
    return (
        <div className="auth-container">{isLogin ? <Login 
        switchAuthHandler={handlePageToggle}
        /> : <Register
        
        switchAuthHandler={handlePageToggle}/> }</div>
    )
}