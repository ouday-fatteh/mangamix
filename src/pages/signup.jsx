import Navbar from '../components/Navbar/Navbar';
import heroimg from '../images/hero.jpg';
import './signup.css';

const Signup = () => {
    return (
        <div>
            <Navbar />
            <div className="hero" >
            <img alt="Hero anime" className="background-img" src={heroimg} ></img>
            <div className="black-overlay">
            <div className='hero-info'>
              <div style={{backgroundColor:"white",padding:"10px",borderRadius:"5px"}}>
                  <div style={{margin:"10px",justifySelf:"center",color:"#aaaaaa"}}>Get most of the new manga!</div><br />
                  <form>
                      <input id='inputF' type="text" style={{border:"1px solid #dddddd"}} placeholder='Username'></input><br /><br />
                      <input id='inputF'  type="text" style={{border:"1px solid #dddddd"}} placeholder='Email'></input><br /><br />
                      <input id='inputF' type="text" style={{border:"1px solid #dddddd"}} placeholder='Password'></input><br /><br />
                      <input id='inputF'  type="text" style={{border:"1px solid #dddddd"}} placeholder='Confirm password'></input><br /><br />
                      <input type="submit" value="Sign Up" style={{height:"40px",width:"350px" ,backgroundColor:"green" ,color:"white"}}></input>
                  </form>
              </div>
            </div>
            </div>
            </div>
            </div>
    );
}


export default Signup;