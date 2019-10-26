import React from 'react';
import Pirate from './components/Pirate';
import Header from './components/Header';

import piratesFile from './data/sample-pirates-array';

const pirateCalls = [
  'Aaarg, belay that!',
  'Avast me hearties!',
  'Shiver me timbers!'
];

const randomize = () =>
  pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

function App() {
  return (
    <div>
      <Header title={randomize()} />
      {piratesFile.map(pirate => (
        <Pirate key={pirate.id} tagline={randomize()} pirate={pirate} />
      ))}
    </div>
  );
}

export default App;
