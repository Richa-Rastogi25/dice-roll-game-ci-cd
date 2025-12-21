import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const [dice, setDice] = useState(0);

  const rollDice = () => {
    const randomNumber = Math.floor(Math.random() * 6) + 1;
    setDice(randomNumber);
  }

  return (
    <div className="container">
      <h1> Dice Roll Game 🎲 </h1>
      <p>Click the button to roll the dice</p>

      <div className="dice">{dice}</div>

      <button onClick={rollDice}>🎲 Roll Dice</button>
    </div>
  );
}

export default App;
