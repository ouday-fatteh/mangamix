import './NavbarHome.css';
import { IconContext } from "react-icons";
import { AiOutlineHome } from 'react-icons/ai';
import { HiOutlineTrendingUp } from 'react-icons/hi';
import {VscFlame} from 'react-icons/vsc';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { IoIosArrowDown } from 'react-icons/io';
import { AiOutlineUser } from 'react-icons/ai';
import { HiOutlineSearch } from 'react-icons/hi';
const NavbarHome = () =>  {
    return (
        <div className='NavbarHome__main-container'>
            
            <div className="NavbarHome__logo-menu-container">
               <div className="Navbar__logo-menu-container__logo">
                   Mangup
               </div>
               <div className="NavbarHome__logo-menu-container-menu">
               <IconContext.Provider value={{ color:'white',className: 'menu-icons'}}>
                    <div><AiOutlineHome />Home</div>
                    <div><HiOutlineTrendingUp />Trending</div>
                    <div><VscFlame />Popular</div>
                    <div><MdOutlineFavoriteBorder />My favorites</div>
                    </IconContext.Provider>
               </div>
            </div>
            <div className="NavbarHome__search-container">
                <input type="text" placeholder='Search for titles,categories ...'/>
                <div><HiOutlineSearch /></div>
            </div>
            <div className="NavbarHome__account-container">
                <div className="NavbarHome__account-container-account">
                    <span>bla bla bla</span>
                    <IoIosArrowDown />
                </div>
                <div className="NavbarHome__account-container-profilepic">
                    <AiOutlineUser />
                </div>
            </div>
        </div>
    );
}

export default NavbarHome;