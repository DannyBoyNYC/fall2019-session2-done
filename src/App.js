import React from 'react';
import Pirate from './components/Pirate';
import Header from './components/Header';

const pirateCalls = [
  'Aaarg, belay that!',
  'Avast me hearties!',
  'Shiver me timbers!',
];

const randomize = () =>
  pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

function App() {
  return (
    <div>
      <Header title={randomize()} />
      <Pirate tagline="Ahoy from the Pirate Component" />
    </div>
  );
}

export default App;
