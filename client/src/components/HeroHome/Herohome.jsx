import './Herohome.css';
import { IconContext } from "react-icons";
import { AiFillRead } from 'react-icons/ai';
import { RiMenuAddLine } from 'react-icons/ri';
const Herohome = () => {
        return (
            <>
            <div className='Herohome__main_overlay'></div>
            <div className="Herohome__main">
                <div className="Herohome__left">
                    <div></div>
                    <div className="Herohome__left-bottom-active">
                        <div className="Herohome__left-bottom-title">
                            <h1>Naruto</h1>
                            <h3>Action,Drama &#9865; 2002 &#9865; 900 Chapters</h3>
                            <p>A young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village.</p>
                        </div>
                        <div className="Herohome__left-bottom-buttons">
                        <IconContext.Provider value={{ color:'white',className: 'menu-icons'}}>
                            <div className="Herohome__left-bottom-buttons-left">
                                <AiFillRead />
                                <p>Start reading</p>
                            </div>
                            <div className="Herohome__left-bottom-buttons-right">
                                <RiMenuAddLine />
                                <p>Add to favorites</p>
                            </div>
                            </IconContext.Provider>
                        </div>
                    </div>
                </div>
            </div>
            </>
        );
}



export default Herohome;