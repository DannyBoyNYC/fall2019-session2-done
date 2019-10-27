import React from 'react';
import Pirate from './Pirate';
import Header from './Header';
import PirateForm from './PirateForm';

import piratesFile from '../data/sample-pirates-array';

class App extends React.Component {
  state = {
    pirates: piratesFile,
  };

  render() {
    const pirateCalls = [
      'Aaarg, belay that!',
      'Avast me hearties!',
      'Shiver me timbers!',
    ];

    const randomize = () =>
      pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

    const addPirate = pirate => {
      console.log(pirate);
      //take a copy of the current state and put it into pirates var
      const pirates = [...this.state.pirates];
      console.log(pirates);
      pirates.unshift(pirate);
      console.log(pirates);
      //set state pirates with var pirates
      this.setState({ pirates: pirates });
    };

    return (
      <>
        <Header title={randomize()} />
        <PirateForm addPirate={addPirate} />
        {this.state.pirates.map(pirate => (
          <Pirate key={pirate.id} tagline={randomize()} pirate={pirate} />
        ))}
      </>
    );
  }
}

export default App;
