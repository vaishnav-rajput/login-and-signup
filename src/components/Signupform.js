import { useState } from "react";
import {AiOutlineEye, AiOutlineEyeInvisible} from "react-icons/ai";


const Signupform = () => {
    const [formData, setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    function changeHandler(event){
        const {name, value} = event.target;
        setFormData((prevFormData) => {
            return {
                ...prevFormData, [name] : value
            }
        })
    }

    const [showPass, setShowPass] = useState(false);

    const [showConfirmPass, setShowConfirmPass] = useState(false);
    return(
        <div>
            <div>
                <label>Student</label>
                <label>Instructor</label>
            </div>

            <div className="flex gap-10">
                    <label>
                        <p>First Name <sup>*</sup></p>
                        <input type="text"
                        required
                        name="firstName"
                        value={formData.firstName}
                        onChange={changeHandler}

                        />
                    </label>

                    <label>
                            <p>Last Name <sup>*</sup></p>
                                <input type="text"
                                required
                                name="lastName"
                                value={formData.lastName}
                                onChange={changeHandler}

                                />
                    </label>
            </div>
            <div>
                <label>
                    <p>Email Address <sup>*</sup></p>
                    <input 
                    type="text"
                    required
                    name="email"
                    value={formData.email}
                    onChange={changeHandler}

                    />
                </label>
            </div>
            <div>
                <label>
                    <p>Create Password<sup>*</sup></p>
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
            <div>
                <label>
                    <p>Confirm Password<sup>*</sup></p>
                    <input type={showConfirmPass ? ("text") : ("password")}
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={changeHandler}
                required />
                
                
                <span>
                    {
                        showConfirmPass ? (<AiOutlineEyeInvisible onClick={() => setShowConfirmPass((prev) => (!prev))}/>) : (<AiOutlineEye onClick={() => setShowConfirmPass((prev) => (!prev))}/>)
                    }
                </span>
                </label>
            </div>

        </div>
    )
}

export default Signupform;