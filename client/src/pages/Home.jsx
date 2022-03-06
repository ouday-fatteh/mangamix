import NavbarHome from '../components/NavbarHome/NavbarHome';
import Herohome from '../components/HeroHome/Herohome';
import './Home.css';


const Home = () => {

    return (
        <div className="homepage">
          <NavbarHome />
          <Herohome />           
         </div>
    )
}


export default Home;