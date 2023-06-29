import React from "react";
import Template from "../components/Template";
import login from "../assets/login.png";

const Login = ({isLoggedIn, setIsLoggedIn}) => {
    return(
        <div>
            <Template formType= "login"
            title="Welcome Back"
            desc1="build skills for today tomorrow and beyond"
            desc2="Education to future-proof your career"
            btn="Sign In" 
            isLoggedIn={isLoggedIn}
            image={login}
            />      
        </div>
    )
}

export default Login;