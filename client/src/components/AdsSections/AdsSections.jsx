import './AdsSections.css';
import Image1 from '../../images/adsimage.png';

const AdsSections = () => {
    return(
        <div className='adssections__main'>
                <div className='adssections__right'><h2>اشترك الان لتعطيل الاعلانات و مساعدتنا على المتابعة
                </h2>
                <p>فقط 2$ شهريا</p>
                <button id="btn--1">اشترك الان</button>
                </div>
                <div className='adssections__left'>
                    <img alt='' src={Image1} height={450} width={450}></img>
                </div>
        </div>
    )
}

export default AdsSections;