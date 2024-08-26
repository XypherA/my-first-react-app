
function TestimonialCard(props){

    return(
        <div className="tcard">
            <q className="tcard-quotation">{props.rating}</q>
            <img className='tcard-image' src={props.picture} alt={props.name} />
            <h2 className='tcard-tittle'>{props.name}</h2>
            <p className='tcard-text'>{props.review}</p>
        </div>
    )
}

export default TestimonialCard