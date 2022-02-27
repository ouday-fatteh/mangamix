import './Mangacards.css';




const Mangacards = (props) => {
    return (
            <div className="maincard">
                <div className='cover'>
                    <img style={{borderRadius:"5px"}} alt='' src="https://picsum.photos/id/1/200/250"></img>
                    <div className='coveroverlay'></div>
                </div>
                <div className='cardinfo'>
                    <span style={{color:"red"}}>{props.title}</span>
                    <span>{props.release}</span>
                </div>


            </div>
    )
}



export default Mangacards;