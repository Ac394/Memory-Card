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
  let highScore = useRef(0);

  const resetGame = () => {
    minions.map((minion) => {
      minion.clicked = false;
    });
    setResult(null);
    score.current = 0;
  };

  const setHighScore = () => {
    if (score.current > highScore.current) highScore.current = score.current;
  };

  const playGame = (minion) => {
    // Loss condition
    if (minion.clicked === true) {
      setResult("lose");
      setHighScore();
      return;
    }

    // Play move
    minion.clicked = true;
    score.current += 1;

    // Win condition
    if (minions.every((minion) => minion.clicked === true)) {
      setResult("win");
      setHighScore();
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
      <div className="min-h-screen flex flex-col bg-[url('/minions_bg_light.jpg')] bg-no-repeat bg-cover">
        <header className="h-36 px-12 flex justify-between items-center">
          <img src="/minions_logo.png" className="h-full drop-shadow-xl" />
          <div className="text-2xl text-white font-semibold bg-blue-light-minion/50 px-5 py-2.5 rounded-xl backdrop-blur-sm shadow-lg">
            <p>
              Score: <span className="font-extrabold">{score.current}/6</span>
            </p>
            <p>
              High score: <span className="font-extrabold">{highScore.current}</span>
            </p>
          </div>
        </header>

        <div className="px-6 mx-auto my-auto flex items-center justify-center flex-wrap content-center gap-10">
          {minions.map((minion) => (
            <Card
              name={minion.name}
              imgUrl={`/minions/minion-${minion.name}.webp`}
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
