import { useState, useRef } from "react";
import Card from "./components/Card";
import Result from "./components/Result";
import "./App.css";

const minions = [
  { name: "bob", clicked: false },
  { name: "mel", clicked: false },
  { name: "stuart", clicked: false },
  { name: "carl", clicked: false },
  { name: "jerry", clicked: false },
  { name: "dave", clicked: false },
];

const shuffle = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

function App() {
  const [flip, setFlip] = useState(false);
  const [result, setResult] = useState(null);
  let score = useRef(0);
  let bestScore = useRef(0);

  const resetGame = () => {
    minions.map((minion) => {
      minion.clicked = false;
    });
    setResult(null);
    score.current = 0;
  };

  const setBestScore = () => {
    if (score.current > bestScore.current) bestScore.current = score.current;
  };

  const playGame = (minion) => {
    // Loss condition
    if (minion.clicked === true) {
      setResult("lose");
      setBestScore();
      return;
    }

    // Play move
    minion.clicked = true;
    score.current += 1;

    // Win condition
    if (minions.every((minion) => minion.clicked === true)) {
      setResult("win");
      setBestScore();
    }
  };

  const handleClick = (minion) => {
    // Disable clicks until the cards flip back
    if (flip) return;

    playGame(minion);

    setFlip(true);
    // Shuffle cards and flip cards back after 1.5s
    setTimeout(() => {
      shuffle(minions);
      setFlip(false);
    }, 1500);
  };

  return (
    <>
      <div className="relative h-screen bg-[url('../assets/img/minions_bg_light.jpg')] bg-no-repeat bg-cover">
        <header className="h-36 pl-12">
          <img src="../assets/img/minions_logo.png" className="h-full" />
          <div>
            <p>{score.current}</p>
            <p>{bestScore.current}</p>
          </div>
        </header>

        <div className="max-w-screen-xl w-fit mx-auto grid grid-cols-3 gap-10">
          {minions.map((minion) => (
            <Card
              name={minion.name}
              imgUrl={`../assets/img/minions/minion-${minion.name}.webp`}
              flip={flip}
              key={minion.name}
              handleClick={() => handleClick(minion)}
            />
          ))}
        </div>

        {result && <Result result={result} handleClick={resetGame} />}
      </div>
    </>
  );
}

export default App;
