import './Herohome.css';
import { IconContext } from "react-icons";
import { AiFillRead } from 'react-icons/ai';
import { RiMenuAddLine } from 'react-icons/ri';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { slideImages } from './Images';


const Herohome = () => {
        return (
            <Slide  arrows={false} duration={3000}> 
                {slideImages.map((img,index) => {
                    return (
                        <div key={index}>
                        <div className='Herohome__main_overlay'></div>
                        <div className="Herohome__main"
                        style={{backgroundImage: `url('${img.url}')`}} key={img.title+index}>
                            <div className="Herohome__left">
                                <div></div>
                                <div className="Herohome__left-bottom-active">
                                    <div className="Herohome__left-bottom-title">
                                        <h1>{img.title}</h1>
                                        <h3>{img.genre}</h3>
                                        <p>{img.description}</p>
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
                        </div>
                    )
                })}
            </Slide>
        );
}



export default Herohome;