import React, { useEffect, useState } from "react";
import "./App.css";
import Cards from "./components/Cards";
import Memory from "./Memory";
import { Switch, Route, withRouter } from "react-router-dom";
import Instructions from "./components/Instructions";

function Card(word, id, uid) {
  this.word = word;
  this.id = id;
  this.uid = uid;
  this.shown = false;
  this.matched = false;
}

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

const cards = [
  //all the information im going to be using
  new Card("/images/Dan.png", 0, "dan-1"), //for the 'cards' of the game
  new Card("/images/Dan.png", 0, "dan-2"),
  new Card("/images/jamie copy.png", 1, "jamie-1"),
  new Card("/images/jamie copy.png", 1, "jamie-2"),
  new Card("/images/nick.png", 2, "nick-1"),
  new Card("/images/nick.png", 2, "nick-2"),
  new Card("/images/gavin.png", 3, "gavin-1"),
  new Card("/images/gavin.png", 3, "gavin-2"),
  new Card("/images/charley copy.png", 4, "charley-1"),
  new Card("/images/charley copy.png", 4, "charley-2"),
  new Card("/images/Lily.png", 5, "lily-1"),
  new Card("/images/Lily.png", 5, "lily-2"),
  new Card("/images/kim copy 2.png", 6, "kim-1"),
  new Card("/images/kim copy 2.png", 6, "kim-2"),
  new Card("/images/noelle.png", 7, "noelle-1"),
  new Card("/images/noelle.png", 7, "noelle-2"),
  new Card("/images/sandro.png", 8, "sandro-1"),
  new Card("/images/sandro.png", 8, "sandro-2"),
  new Card("/images/maria.png", 9, "maria-1"),
  new Card("/images/maria.png", 9, "maria-2"),
];

const App = (props) => {
  const [cardsState, setCardsState] = useState(cards);
  const [gameLevel, setGameLevel] = useState("");
  const allCards = cards;
  const { history } = props;
  const [showPopUp, setShowPopUP] = useState(false);

  const UNIQUE_IDS = 10; // ids 0..9

  const goToCards = (difficulty) => {
    const numberOfPairs =
      difficulty === "easy" ? 4 : difficulty === "medium" ? 6 : 10;

    // Pick N unique ids from 0..9
    const chosenIds = new Set();
    while (chosenIds.size < numberOfPairs) {
      chosenIds.add(Math.floor(Math.random() * UNIQUE_IDS));
    }

    // Build the deck, reset flags
    const selected = allCards
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

  return (
    <div>
      <Switch>
        <Route
          path="/Cards"
          render={() => (
            <Cards
              cards={cardsState}
              clickMe={clickMe}
              difficulty={gameLevel}
            />
          )}
        />

        <Route
          exact
          path="/"
          render={(props) => (
            <Memory {...props} goToCards={goToCards} cards={cardsState} />
          )}
        />

        <Route
          path="/Instructions"
          render={(props) => <Instructions {...props} />}
        />
      </Switch>
      {showPopUp && (
        <WinningMessage showPopUp={showPopUp} setShowPopUP={setShowPopUP} />
      )}
    </div>
  );
};

export default withRouter(App);
