import {Link} from 'react-router-dom';
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const Navbar = () => {
    
const [open,setOpen] = useState(false);
    return (
        <div className="main-bar">
                <div className='logo'><Link to="/">Mang<span style={{color:"rgb(28, 131, 24)"}}>Up</span></Link></div>
                <div className="menu">
                    <span className='login'><Link to="/login">تسجيل الدخول</Link></span>
                    <span className='signup'><Link to="/signup">اشتراك</Link></span>
                </div>
                <span className='menu-mobile'  onClick={()=>{setOpen(!open)}}><GiHamburgerMenu size={30}/>
                </span>
                <div className='hidden-menu'  style={{display:open ? "flex" : "none",right:open ? "0%" : "-100%"}}>
                    <ul>
                        <li>
                            About
                        </li>
                        <li>
                            Contact
                        </li>
                        <li>
                            Explore
                        </li>
                    </ul>
                    <div className='btn-low'>
                        <button style={{width:"100px",height:"40px",border:"1px solid white",borderRadius:"25px"}}><Link to="/login" >Sign In</Link></button>
                        <button to="/signup" style={{width:"100px",height:"40px",border:"1px solid green",borderRadius:"25px"}}><Link to="/signup">Sign Up</Link></button>
                    </div>
                </div>   
        </div>
    )
}


export default Navbar;