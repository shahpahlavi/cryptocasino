import React, { useState } from "react";

const Plinko = () => {
  const [bet, setBet] = useState(0);
  const [prize, setPrize] = useState(0);

  const handleSpin = () => {
    const randomPrize = Math.random() * 100; // Simulate prize
    setPrize(randomPrize);
  };

  return (
    <div className="bg-black p-4 rounded-lg text-white">
      <h3 className="text-primary mb-2">Plinko</h3>
      <input
        type="number"
        value={bet}
        onChange={(e) => setBet(e.target.value)}
        className="p-2 mb-2 border rounded"
      />
      <button onClick={handleSpin} className="bg-primary text-black p-2 rounded">
        Spin
      </button>
      <p>Prize: {prize.toFixed(2)} USD</p>
    </div>
  );
};

export default Plinko;
