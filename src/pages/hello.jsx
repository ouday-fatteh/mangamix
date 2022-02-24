import './hello.css';
import Navbar from "../components/Navbar/Navbar";
import heroimg from '../images/hero.jpg';

const Hello = () => {
    return (
        <div>
            <Navbar />
            <div className="hero" >
            <img alt="Hero anime" class="background-img" src={heroimg} ></img>
            <div className="black-overlay">
            <div className='hero-info'>
                <h1>عدد غير محدود من المانجا و المزيد</h1>
                <h2>سجل الان لتتمتع بمحتوى مجاني</h2>
                <h3>جاهز للقراءة؟ أدخل بريدك الإلكتروني لإنشاء حسابك</h3>
                <div>
                <input type="text" placeholder='xxxx@xxxx.com'></input>
                <button className='btn-main'>ابدا</button>
                </div>
                
            </div>
            </div>
            </div>
        </div>
    )
}

export default Hello;