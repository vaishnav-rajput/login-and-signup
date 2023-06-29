import React from "react";
import logo from "../assets/Logo.svg";
    import { Link, NavLink } from "react-router-dom";
import Home from "../pages/Home";

const Navbar = ({isLoggedIn, setIsLoggedIn}) => {
    return(
        <div className="flex gap-3 justify-evenly">
            <div>
                <img src={logo} />
            </div>  

            <div>
                <Link to="/">
                        <p>Home</p>
                </Link>
            </div>  
            <div>
                <Link to="/about">
                        <p>About</p>
                </Link>
            </div> 
            <div>
                <Link to="/contact">
                        <p>Contact</p>
                </Link>
            </div>           

            <div className="flex justify-evenly">
                {!isLoggedIn &&
                    <Link className="ml-3">
                        <button>
                            Login
                        </button>
                    </Link>
                }
                {!isLoggedIn &&
                    <Link className="ml-3">
                        <button>
                            SignUp
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link className="ml-3">
                        <button>
                            LogOut
                        </button>
                    </Link>
                }
                {isLoggedIn &&
                    <Link className="ml-3">
                        <button>
                            Dashboard
                        </button>
                    </Link>
                }
            </div>
        </div>
        )
}

export default Navbar;

