
import './Navbar.css';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    return (
        <div className="main-bar">
                <div className='logo'>Manga<span style={{color:"rgb(28, 131, 24)"}}>Mix</span></div>
                <div className="menu">
                    <span className='login'>Log in</span>
                    <span className='signup'>Sign up</span>
                </div>
                <span className='menu-mobile' onClick={()=>{alert("Navbar mobile under developement")}}><GiHamburgerMenu size={30}/></span>
        </div>
    )
}


export default Navbar;