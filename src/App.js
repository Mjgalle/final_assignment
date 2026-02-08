import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Memory from "./Memory";
import { Switch, Route, withRouter } from "react-router-dom";
import Instructions from "./components/Instructions";

const instructionsData = {
  title: "Instructions",
  description:
    "As you click on the cards, you have to remember to keep an eye on the image of each card. The maximum number of card a user can click is 2. If those two cards match, they will stay facing the user. If those cards do not match, they will turn back over. The game is over when all cards have been matched.",
};

const WinningMessage = ({ setShowPopUP }) => {
  return (
    <div className="winning-message" onClick={() => setShowPopUP(false)}>
      <div className="pop-up">
        <h2>Congrats,</h2>
        <p>You won!</p>
      </div>
    </div>
  );
};

const cardsData = [
  {
    word: "/images/Dan.png",
    id: 0,
    uid: "dan-1",
    shown: false,
    matched: false,
  },
  {
    word: "/images/Dan.png",
    id: 0,
    uid: "dan-2",
    shown: false,
    matched: false,
  },
  {
    word: "/images/jamie copy.png",
    id: 1,
    uid: "jamie-1",
    shown: false,
    matched: false,
  },
  {
    word: "/images/jamie copy.png",
    id: 1,
    uid: "jamie-2",
    shown: false,
    matched: false,
  },
  {
    word: "/images/nick.png",
    id: 2,
    uid: "nick-1",
    shown: false,
    matched: false,
  },
  {
    word: "/images/nick.png",
    id: 2,
    uid: "nick-2",
    shown: false,
    matched: false,
  },
  {
    word: "/images/gavin.png",
    id: 3,
    uid: "gavin-1",
    shown: false,
    matched: false,
  },
  {
    word: "/images/gavin.png",
    id: 3,
    uid: "gavin-2",
    shown: false,
    matched: false,
  },
  {
    word: "/images/charley copy.png",
    id: 4,
    uid: "charley-1",
    shown: false,
    matched: false,
  },
  {
    word: "/images/charley copy.png",
    id: 4,
    uid: "charley-2",
    shown: false,
    matched: false,
  },
  {
    word: "/images/Lily.png",
    id: 5,
    uid: "lily-1",
    shown: false,
    matched: false,
  },
  {
    word: "/images/Lily.png",
    id: 5,
    uid: "lily-2",
    shown: false,
    matched: false,
  },
  {
    word: "/images/kim copy 2.png",
    id: 6,
    uid: "kim-1",
    shown: false,
    matched: false,
  },
  {
    word: "/images/kim copy 2.png",
    id: 6,
    uid: "kim-2",
    shown: false,
    matched: false,
  },
  {
    word: "/images/noelle.png",
    id: 7,
    uid: "noelle-1",
    shown: false,
    matched: false,
  },
  {
    word: "/images/noelle.png",
    id: 7,
    uid: "noelle-2",
    shown: false,
    matched: false,
  },
  {
    word: "/images/sandro.png",
    id: 8,
    uid: "sandro-1",
    shown: false,
    matched: false,
  },
  {
    word: "/images/sandro.png",
    id: 8,
    uid: "sandro-2",
    shown: false,
    matched: false,
  },
  {
    word: "/images/maria.png",
    id: 9,
    uid: "maria-1",
    shown: false,
    matched: false,
  },
  {
    word: "/images/maria.png",
    id: 9,
    uid: "maria-2",
    shown: false,
    matched: false,
  },
];

const App = (props) => {
  const { history } = props;
  const [showPopUp, setShowPopUP] = useState(false);
  const savedDifficulty = localStorage.getItem("difficulty");
  const initialDifficulty = savedDifficulty || "";
  const initialCards = savedDifficulty
    ? (() => {
        const numberOfPairs =
          savedDifficulty === "easy"
            ? 4
            : savedDifficulty === "medium"
            ? 6
            : 10;
        const UNIQUE_IDS = 10;
        const chosenIds = new Set();
        while (chosenIds.size < numberOfPairs) {
          chosenIds.add(Math.floor(Math.random() * UNIQUE_IDS));
        }
        return cardsData
          .filter((card) => chosenIds.has(card.id))
          .map((card) => ({ ...card, shown: false, matched: false }));
      })()
    : cardsData.map((card) => ({ ...card, shown: false, matched: false }));
  const [gameLevel, setGameLevel] = useState(initialDifficulty);
  const [cardsState, setCardsState] = useState(initialCards);

  const UNIQUE_IDS = 10; // ids 0..9

  const goToCards = (difficulty) => {
    localStorage.setItem("difficulty", difficulty);
    const numberOfPairs =
      difficulty === "easy" ? 4 : difficulty === "medium" ? 6 : 10;

    // Pick N unique ids from 0..9
    const chosenIds = new Set();
    while (chosenIds.size < numberOfPairs) {
      chosenIds.add(Math.floor(Math.random() * UNIQUE_IDS));
    }

    // Build the deck, reset flags
    const selected = cardsData
      .filter((card) => chosenIds.has(card.id))
      .map((card) => ({ ...card, shown: false, matched: false })); // if you added matched

    shuffleCards(selected);
    setGameLevel(difficulty);
    history.push("/Cards");
  };

  const shuffleCards = (cardsToShuffle) => {
    const shuffled = [...cardsToShuffle];
    let currentIndex = shuffled.length;

    while (currentIndex !== 0) {
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      [shuffled[currentIndex], shuffled[randomIndex]] = [
        shuffled[randomIndex],
        shuffled[currentIndex],
      ];
    }
    setCardsState(shuffled);
  };

  const clickMe = (index) => {
    const clicked = cardsState[index];

    // Don’t allow clicking matched cards or already-shown cards
    if (!clicked || clicked.matched || clicked.shown) return;

    // Only allow 2 unmatched cards flipped at a time
    const currentlyFlipped = cardsState.filter((c) => c.shown && !c.matched);
    if (currentlyFlipped.length >= 2) return;

    // Flip the clicked card up
    const nextCards = cardsState.map((card, i) =>
      i === index ? { ...card, shown: true } : card
    );
    setCardsState(nextCards);

    const flippedNow = nextCards.filter((c) => c.shown && !c.matched);

    if (flippedNow.length === 2) {
      setTimeout(() => {
        setCardsState((currentCards) => {
          const flipped = currentCards
            .map((card, i) => ({ card, i }))
            .filter(({ card }) => card.shown && !card.matched);

          if (flipped.length !== 2) return currentCards;

          const [
            { card: firstCard, i: firstIndex },
            { card: secondCard, i: secondIndex },
          ] = flipped;

          const isMatch = firstCard.id === secondCard.id;

          return currentCards.map((card, i) => {
            if (i !== firstIndex && i !== secondIndex) return card;

            if (isMatch) {
              // ✅ keep them up and mark as matched
              return { ...card, matched: true, shown: true };
            }

            // ❌ not a match: flip both down
            return { ...card, shown: false };
          });
        });
      }, 1000);
    }
  };

  useEffect(() => {
    const didWin =
      cardsState.length > 0 && cardsState.every((card) => card.matched);
    if (didWin) setShowPopUP(true);
  }, [cardsState]);

  useEffect(() => {
    const savedDifficulty = localStorage.getItem("difficulty");
    if (savedDifficulty) {
      setGameLevel(savedDifficulty);
      goToCards(savedDifficulty);
    }
  }, []);

  return (
    <div>
      <Switch>
        <Route path="/Cards">
          <Cards cards={cardsState} clickMe={clickMe} />
        </Route>

        <Route exact path="/">
          <Memory goToCards={goToCards} />
        </Route>

        <Route path="/Instructions">
          <Instructions instructionsData={instructionsData} />
        </Route>
      </Switch>
      {showPopUp && (
        <WinningMessage showPopUp={showPopUp} setShowPopUP={setShowPopUP} />
      )}
    </div>
  );
};

export default withRouter(App);
