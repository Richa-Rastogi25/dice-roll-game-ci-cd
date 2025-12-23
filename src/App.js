import './App.css';
import { useState } from 'react';

function App() {
    const [dice, setDice] = useState(0);
    const [turn, setTurn] = useState(1);
    const [showNextTurn, setShowNextTurn] = useState(false);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDice(randomNumber);

    // Show "Next Turn" text temporarily
    setShowNextTurn(true);
    setTimeout(() => {
      setShowNextTurn(false);
      setTurn(prev => prev + 1);
    }, 1000); // text shown for 1 second
  }

  return (
    <div className="container">
      <h1> Roll the dice by just clicking the button! </h1>
      <p>Click the button to roll the dice</p>

      <div className="dice">{dice}</div>

      <button onClick={rollDice}>🎲 Roll Dice</button>

      {showNextTurn && (
        <p className="next-turn">🎉 Next Turn: Player {turn + 1} 🎉</p>
      )}
    </div>
  );
}

export default App;
