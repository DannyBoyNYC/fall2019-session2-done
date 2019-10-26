import React from 'react';
import Pirate from './components/Pirate';
import Header from './components/Header';
import PirateForm from './components/PirateForm';
import piratesFile from './data/sample-pirates-array';

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
      <PirateForm />
      {piratesFile.map((pirate, index) => (
        <section key={pirate.id}>
          <Pirate tagline={randomize()} pirate={pirate} />
        </section>
      ))}
    </div>
  );
}

export default App;
