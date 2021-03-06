import { useState } from 'react';
import Navbar from '../components/Navbar/Navbar';
import heroimg from '../images/hero.jpg';
import loader from '../images/loading.png';

const Login = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [Data,setData] = useState("");

    async function handleLogin(event){
        event.preventDefault()
        const response = await fetch("http://localhost:5000/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "email":email,
                "password":password
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
                  <div style={{margin:"10px",justifySelf:"center",color:"#aaaaaa",direction:"rtl"}}>تسجيل الدخول</div><br />
                  <form onSubmit={handleLogin} style={{direction:"rtl"}}>
                      <input id='inputF' required onChange={(e)=>{setEmail(e.target.value)}} type="text" style={{border:"1px solid #dddddd"}} placeholder='البريد الإلكتروني'></input><br /><br />
                      <input id='inputF' required onChange={(e)=>{setPassword(e.target.value)}} type="text" style={{border:"1px solid #dddddd"}} placeholder='كلمة المرور'></input><br /><br />
                    { Data.Message === 'البريد الإلكتروني أو كلمة المرور غير صالحة' || Data.Message === 'لا يوجد مستخدم بهذا البريد الإلكتروني' ? <div><div id="inputF" 
                            style={{border:"1px solid rgb(242, 83, 83)",color:"rgb(200, 53, 53)",paddingLeft:"15px",height:"40px",paddingTop:"5px"}}>
                            {Data.Message}</div><br /></div> 
                            :<div></div>}
                    { Data !== "" && Data.Message !== 'البريد الإلكتروني أو كلمة المرور غير صالحة' &&  Data.Message !== 'لا يوجد مستخدم بهذا البريد الإلكتروني' ? <div><div id="inputF" 
                            style={{border:"1px solid rgb(92, 255, 89)",color:"rgb(2, 140, 0)",height:"40px",display:"flex",
                            justifyContent:"space-between" ,paddingLeft:"15px",paddingRight:"15px" ,alignItems:"center"}}>
                            {Data.Message} <img alt="" id='spinner' src={loader}></img>   
                            </div><br /></div> :<div></div> }
                            {Data !== "" && Data.Message !== 'البريد الإلكتروني أو كلمة المرور غير صالحة' &&  Data.Message !== 'لا يوجد مستخدم بهذا البريد الإلكتروني' ?
                            
                            <div style={{display:"none"}}>{window.setTimeout(() => { window.location.href = 'http://localhost:3000/home'}, 3000)}</div>
                                
                            :""}
                      <input type="submit" id="inputD" value="تسجيل الدخول" style={{height:"40px",width:"350px"  ,color:"white"}}></input>
                  </form>
              </div>
            </div>
            </div>
            </div>
            </div>
    );
}


export default Login;