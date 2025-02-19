import Card from "./Card.jsx";

const CardList = (props) => {

    return (
        <div id='cardList'>
            {/* eslint-disable-next-line react/prop-types */}
            {props.cards.map((card) =>
                // eslint-disable-next-line react/prop-types
                (<Card shuffle={props.shuffleCards}
                       memorizedCards={props.memorizedCards}
                       card={card} key={card.id}/>
            ))}
        </div>
    );
};

export default CardList;