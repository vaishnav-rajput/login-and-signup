import signup from "../assets/signup.png";
import Template from "../components/Template";

const Signup = ({isLoggedIn, setIsLoggedIn}) => {
    return(
        <div>
        <Template formType= "signup"
        title="Join the millions learning new skills"
        desc1="build skills for today tomorrow and beyond"
        desc2="Education to future-proof your career"
        btn="Create Account" 
        isLoggedIn={isLoggedIn}
        image={signup}
        setIsLoggedIn = {setIsLoggedIn}
        />      
    </div>
    )
}

export default Signup;