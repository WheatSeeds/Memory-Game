const Card = (props) => {
    return (
        <div className="card" onClick={() => {
            props.shuffle();
            props.memorizedCards(props.card);
        }}>
            {/* eslint-disable-next-line react/prop-types */}
            <img className='card-image' src={props.card.url} alt={props.card.alt} />
        </div>
    );
};

export default Card;