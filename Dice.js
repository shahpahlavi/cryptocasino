import React, { useState } from "react";

const Dice = () => {
  const [bet, setBet] = useState(0);
  const [roll, setRoll] = useState(0);

  const handleRoll = () => {
    const rollResult = Math.floor(Math.random() * 6) + 1; // Simulate dice roll
    setRoll(rollResult);
  };

  return (
    <div className="bg-black p-4 rounded-lg text-white">
      <h3 className="text-primary mb-2">Dice</h3>
      <input
        type="number"
        value={bet}
        onChange={(e) => setBet(e.target.value)}
        className="p-2 mb-2 border rounded"
      />
      <button onClick={handleRoll} className="bg-primary text-black p-2 rounded">
        Roll
      </button>
      <p>Roll: {roll}</p>
    </div>
  );
};

export default Dice;
