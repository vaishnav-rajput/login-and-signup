import { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";


const Loginform = ({isLoggedIn}) => {
    const [formData, setFormData] = useState({
        email:"",
        password:""
    })

    function changeHandler(event){
        const {name, value} = event.target;
      setFormData(
        (prevFormData) => {
            return {
              ...prevFormData, [name] : value

            }
        }
      )
    }

    const [showPass, setShowPass] = useState(false);



    return(
        <div>
            <label>
                Email Address<sup>*</sup>
                <div>
                        <input type="email" required
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        />
                        
                </div>
                
            </label>
            <label>
                <p>
                Password<sup>*</sup>

                </p>
                
                <input type={showPass ? ("text") : ("password")}
                name="password"
                value={formData.password}
                onChange={changeHandler}
                required />
                
                
                <span>
                    {
                        showPass ? (<AiOutlineEyeInvisible onClick={() => setShowPass((prev) => (!prev))}/>) : (<AiOutlineEye onClick={() => setShowPass((prev) => (!prev))}/>)
                    }
                </span>
            </label>
        </div>
    )
}

export default Loginform;