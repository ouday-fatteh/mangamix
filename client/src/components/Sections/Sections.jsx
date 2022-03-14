import './Sections.css';
import Mangacards from '../Mangacards/Mangacards';


const Sections = (props) => {
    return (
        <div className="sections__main" id={props.id}>
            <h3>{props.title}</h3>
            <div className='sections__line'></div>
            <div className='sections__scroll' style={{overflowX:"scroll"}}>
            {!props.isFavorite ?
            <>
             <div className='sections__fade'></div>   
            <section className='sections__cardholder'>
                <Mangacards max={55} min={22} title='NARUTO' release="2005"/>
                <Mangacards max={55} min={22} title='ONE PIECE' release="1999"/>
                <Mangacards max={55} min={22} title='DEMON' release="2005"/>
                <Mangacards max={55} min={22} title='NARUTO' release="2005"/>
                <Mangacards max={55} min={22} title='NARUTO' release="2005"/>
                <Mangacards max={55} min={22} title='NARUTO' release="2005"/>
                <Mangacards max={55} min={22} title='NARUTO' release="2005"/>
                <Mangacards max={55} min={22} title='NARUTO' release="2005"/>
                <Mangacards max={55} min={22} title='ONE PIECE' release="1999"/>
                <Mangacards max={55} min={22} title='DEMON' release="2005"/>  
            </section>
            </>
            :
            <>
            <section style={{justifyContent:'center'}} >
                <div style={{width:'100%',height:'187px',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                    <h2>No favorites yet ?</h2>
                    <h6 style={{color:'white'}}>Like Mangas to see them here</h6>
                    </div>
            </section>
            </>
            }
            </div>

        </div>
    )
}

export default Sections;