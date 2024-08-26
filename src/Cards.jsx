
function Cards(props){
    return(
        <div className="card">
            <img className='card-image' src={props.picture} alt={props.name} />
            <h2 className='card-tittle'>{props.name}</h2>
            <p className='card-text'>{props.description}</p>
            <button className="card-button">Order a Delivery</button>
        </div>
    )
}

export default Cards