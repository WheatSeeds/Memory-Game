import Card from "./Card.jsx";
import React from "react";

const CardList = (
    {
        cards,
        shuffleCards,
        memorizedCards,
        fetchCard,
        currentScore
    }) => {

    const [isFlipped, setFlipped] = React.useState(false);

    function flipCard() {
        setFlipped(true);

        setTimeout(() => {
            setFlipped(false);
        }, 2000);
    }


    return (
        <div id='cardList'>
            {cards.map((card) =>
                (<Card shuffle={shuffleCards}
                       memorizedCards={memorizedCards}
                       card={card} key={card.id}
                       isFlipped={isFlipped}
                       flipCard={flipCard}
                       fetchCard={fetchCard}
                       currentScore={currentScore}
                    />
            ))}
        </div>
    );
};

export default CardList;