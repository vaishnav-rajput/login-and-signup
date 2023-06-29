import Loginform from "../components/Loginform";
import Signupform from "../components/Signupform";
import frame from "../assets/frame.png";
import { useNavigate } from "react-router-dom";

const Template = ({formType, title, desc1, desc2, btn, isLoggedIn, image, setIsLoggedIn }) => {
    const navigate = useNavigate();

    function submitBtnHandler(event){
        event.preventDefault()
        setIsLoggedIn(true)
        navigate("/dashboard")
    }

    return(
        <div>
            <div>
                <h1>
                    {title}
                </h1>
            </div>
            <div>
                <p>{desc1}</p>
            </div>
            <div>
                <p>{desc2}</p>
            </div>
            <div>
                    {
                        formType === "signup" ? 
                        (<Signupform isLoggedIn={isLoggedIn}/>) : (<Loginform isLoggedIn={isLoggedIn}/>)
                    }    
            </div>
            <div>
                <button onClick={submitBtnHandler}>
                        {btn}    
                </button>        
            </div>       
            <div>
                <img src={image} />
            </div>       
            <div>
                    <img src={frame}/>
            </div>        

        </div>
    )
}

export default Template;