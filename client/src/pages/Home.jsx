import NavbarHome from '../components/NavbarHome/NavbarHome';
import Herohome from '../components/HeroHome/Herohome';
import Sections from '../components/Sections/Sections';
import './Home.css';


const Home = () => {

    return (
        <div className="homepage">
          <NavbarHome />
          <Herohome />   
          <Sections title="Trending"/>
          <Sections title="Popular"/> 
          <Sections isFavorite={true} title="My favorites"/>              
         </div>
    )
}


export default Home;