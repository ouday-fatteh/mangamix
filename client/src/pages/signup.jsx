import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import heroimg from '../images/hero.jpg';
import './signup.css';
import loader from '../images/loading.png';


const Signup = () => {
    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [Data,setData] = useState("");
    async function handleRegister (event) {
       event.preventDefault()
       const response = await fetch('http://localhost:5000/api/register',{
           method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                "username" : username,
                "email": email,
                "password": password,
            })
        })
        const Data = await response.json();
        setData(Data);
    }
    return (
        <div>
            <Navbar />
            <div className="hero" >
            <img alt="Hero anime" className="background-img" src={heroimg} ></img>
            <div className="black-overlay">
            <div className='hero-info'>
              <div style={{backgroundColor:"white",padding:"10px",borderRadius:"5px"}}>
                  <div style={{margin:"10px",justifySelf:"center",color:"#aaaaaa",direction:"rtl"}}>الاشتراك</div><br />
                  <form onSubmit={handleRegister} style={{direction:"rtl"}}>
                      <input id='inputF' required type="text" style={{border:"1px solid #dddddd"}} onChange={(e)=>{setUsername(e.target.value)}} placeholder='اسم االمستخدم'></input><br /><br />
                      <input id='inputF' required type="text" style={{border:"1px solid #dddddd"}} onChange={(e)=>setEmail(e.target.value)} placeholder='البريد الإلكتروني'></input><br /><br />
                      <input id='inputF' required type="text" style={{border:"1px solid #dddddd"}} onChange={(e)=>setPassword(e.target.value)} placeholder='كلمة المرور'></input><br /><br />
                      <input id='inputF' required type="text" style={{border:"1px solid #dddddd"}} placeholder='تأكيد كلمة المرور'></input><br /><br />
                      { Data.Message !== 'تم إنشاء حساب المستخدم بنجاح' && Data !== "" ? <div><div id="inputF" 
                      style={{border:"1px solid rgb(242, 83, 83)",color:"rgb(200, 53, 53)",paddingLeft:"15px",height:"40px",paddingTop:"5px"}}>
                          {Data.Message}</div><br /></div> 
                      :<div></div>}{ Data !== "" && Data.Message === "تم إنشاء حساب المستخدم بنجاح" ? <div><div id="inputF" 
                      style={{border:"1px solid rgb(92, 255, 89)",color:"rgb(2, 140, 0)",height:"40px",display:"flex",
                      justifyContent:"space-between" ,paddingLeft:"15px",paddingRight:"15px" ,alignItems:"center"}}>
                          {Data.Message} <img alt="" id='spinner' src={loader}></img></div><br /></div>:<div></div> }
                          <div style={{overflowWrap:"break-word",direction:"rtl",fontSize:"12px"}}><p>من خلال الاشتراك , فإنك تؤكد أنك تقبل الشروط والأحكام الخاصة بنا<br />وأنك قد قرأت سياسة الخصوصية الخاصة بنا</p></div><br />
                      <input type="submit" id='inputD' value="اشتراك" style={{height:"40px",width:"350px"  ,color:"white"}}></input>
                  </form>
              </div>
            </div>
            </div>
            </div>
            </div>
    );
}


export default Signup;