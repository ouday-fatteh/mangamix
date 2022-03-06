import './Mangacards.css';




const Mangacards = (props) => {
    function rand (max,min) {
        const random = Math.random() * max - min + min;
        return random;
    }
    return (
            <div className="maincard">
                <div className='cover'>
                    <img style={{borderRadius:"5px"}} alt='' src={`https://picsum.photos/200/250?random=${rand(props.max,props.min)}`}></img>
                    <div className='coveroverlay'></div>
                </div>
                <div className='cardinfo'>
                    <span style={{color:"white"}}>{props.title}</span>
                    <span>{props.release}</span>
                </div>


            </div>
    )
}



export default Mangacards;