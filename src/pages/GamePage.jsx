import UserStats from "../components/UserStats.jsx";
import CardList from "../components/CardList.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import Modal from "../components/Modal.jsx";

const GamePage = () => {
    const [currentScore, setCurrentScore] = useState(0);
    const [bestScore, setBestScore] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [cards, setCards] = useState([]);
    const [playerIsWin, setPlayerIsWin] = useState(false);

    async function fetchCards() {
        const response = await axios.get(
            "https://api.thecatapi.com/v1/images/search?size=full&limit=10&mime_types=jpg,png"
        );
        response.data.forEach((card) => {
            card.isUsed = false;
        })
        setCards(response.data);
    }

    useEffect(() => {
        fetchCards();
    }, []);

    useEffect(() => {
        if (currentScore > bestScore) {
            setBestScore(currentScore);
        }
    }, [currentScore, bestScore]);


    function shuffleCards() {
        setCards(prevCards => [...prevCards].sort(() => Math.random() - 0.5));
    }


    function reloadGame(){
        setCurrentScore(0);
        setPlayerIsWin(false)
        fetchCards();
    }


    async function fetchCard() {
        const response = await axios.get(
            "https://api.thecatapi.com/v1/images/search?size=full&limit=1&mime_types=jpg,png"
        );
        response.data[0].isUsed = false;
        const randIndex = Math.floor(Math.random() * cards.length);
        const newCards = [...cards];
        newCards[randIndex] = response.data[0];
        setCards(newCards);
    }

    function memorizedCards(card){
        if(card.isUsed){
            setModalVisible(true);
            setPlayerIsWin(currentScore >= bestScore);
        }
        else{
            (setCurrentScore(currentScore + 1));
            card.isUsed = true;
        }
    }

    return (
        <>
            <header>
                <h1>Memory Game</h1>
                <UserStats currentScore={currentScore}
                           bestScore={bestScore}
                />
            </header>
            <Modal currentScore={currentScore}
                   bestScore={bestScore}
                   modalVisible={modalVisible}
                   setModalVisible={setModalVisible}
                   playerIsWin={playerIsWin}
                   reloadGame={reloadGame}
            />
            <CardList memorizedCards={memorizedCards}
                      shuffleCards={shuffleCards}
                      cards={cards}
                      fetchCard={fetchCard}
                      currentScore={currentScore}
            />
        </>
    );
};

export default GamePage;