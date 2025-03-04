import Tilt from 'react-parallax-tilt';
const Card = (
    {
        isFlipped,
        flipCard,
        currentScore,
        fetchCard,
        shuffle,
        memorizedCards,
        card
    }) => {

    return (
        <Tilt>
            <div className={`card ${isFlipped ? 'flipped' : ''}`} onClick={() => {
                flipCard();
                setTimeout(() => {
                    if(currentScore + 1 >= 9){
                        fetchCard();
                    }
                    shuffle()
                }, 1000);
                memorizedCards(card);
            }}>
                <div className="card-side card-side-front">
                    <div className='card-image-wrapper'>
                        <img className='card-image' src={card.url} alt={card.alt}/>
                    </div>
                </div>
                <div className="card-side card-side-back">
                    <div className='card-image-wrapper'>
                        <img className='card-image-back' src='./images/back_side.png' alt='back'/>
                    </div>
                </div>
            </div>
        </Tilt>
    );
};

export default Card;