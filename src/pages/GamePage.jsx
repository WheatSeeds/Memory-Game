import UserStats from "../components/UserStats.jsx";
import CardList from "../components/CardList.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

const GamePage = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);

    const [cards, setCards] = useState([]);

    async function fetchCards() {
        const response = await axios.get(
            "https://api.thecatapi.com/v1/images/search?size=full&limit=10"
        );
        response.data.forEach((card) => {
            card.isUsed = false;
        })
        setCards(response.data);
    }

    useEffect(() => {
        fetchCards();
    }, []);

    function shuffleCards(){
        setCards([...cards].sort(() => Math.random() - 0.5));
    }

    function reloadGame(){
        if(currentScore > bestScore){
            setBestScore(currentScore);
        }
        setCurrentScore(0);
        fetchCards();
    }

    function memorizedCards(card){
        if(card.isUsed){
            reloadGame();
        }
        else{
            (setCurrentScore(currentScore + 1));
            card.isUsed = true;
        }
    }

    return (
        <>
            <h1>Memory Game</h1>
            <UserStats currentScore={currentScore}
                       bestScore={bestScore}
            />
            <CardList memorizedCards={memorizedCards}
                      shuffleCards={shuffleCards}
                      cards={cards}
            />
        </>
    );
};

export default GamePage;