import NavBar from '../components/Navbar/Navbar.jsx';
import './Home.css';
import Mangacards from '../components/Mangacards/Mangacards.jsx';

const Home = () => {
    const MangaCards = [
        {title:"Manga1",release:"2001"},{title:"Manga2",release:"2950"},
        {title:"Manga3",release:"2005"},{title:"Manga4",release:"2025"},
        {title:"Manga5",release:"2020"},{title:"Manga6",release:"2027"},
        {title:"Manga7",release:"2005"},{title:"Manga8",release:"2025"},
        {title:"Manga9",release:"2015"},
    ];
    return (
        <div className="homepage">
          <NavBar isHome={true} />
          <div className="mainframe">
                <div className='leftframe'></div>
                
                <div className='middleframe'>
                    <div className='Infocontainer'>
                        <span>قائمة المانجا المفضلة لديك</span>
                    </div>
                    <div className='Mangacontainer'>
                        { MangaCards.map((item,index)=> {
                                 return <Mangacards key={index} title={item.title} release={item.release}/>
                        })

                        }
                    </div>
                </div>
               
                <div className="rightframe"></div>
          </div>
         </div>
    )
}


export default Home;