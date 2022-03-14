import NavbarHome from '../components/NavbarHome/NavbarHome';
import Herohome from '../components/HeroHome/Herohome';
import Sections from '../components/Sections/Sections';
import AdsSections from '../components/AdsSections/AdsSections';
import './Home.css';


const Home = () => {

    return (
        <div className="homepage">
          <NavbarHome />
          <Herohome />   
          <Sections id="trending" title="Trending"/>
          <Sections id="popular" title="Popular"/> 
          <Sections id="favorites" isFavorite={true} title="My favorites"/>    
          <AdsSections />          
         </div>
    )
}


export default Home;