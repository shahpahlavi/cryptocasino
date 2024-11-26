/casino-site
  ├── /public
  │     ├── index.html
  ├── /src
  │     ├── /components
  │     │     ├── Navbar.js
  │     │     ├── GameList.js
  │     │     ├── Plinko.js
  │     │     ├── Dice.js
  │     │     └── etc.
  │     ├── App.js
  │     ├── index.js
  │     ├── /assets
  │     │     └── images/
  ├── /backend
  │     └── server.js
  ├── tailwind.config.js
  ├── package.json
  ├── index.css
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFCC00', // yellow
        secondary: '#111111', // dark background
      },
    },
  },
  plugins: [],
}
@tailwind base;
@tailwind components;
@tailwind utilities;
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-secondary p-4 text-primary">
      <div className="container mx-auto">
        <h1 className="text-3xl">Win.fun Casino</h1>
      </div>
    </nav>
  );
};

export default Navbar;
import React from "react";
import Plinko from "./Plinko";
import Dice from "./Dice";

const GameList = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-2xl text-primary mb-4">Play Your Favorite Games</h2>
      <div className="grid grid-cols-2 gap-4">
        <Plinko />
        <Dice />
      </div>
    </div>
  );
};

export default GameList;
