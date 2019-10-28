import React from 'react';
import Pirate from './Pirate';
import Header from './Header';
import PirateForm from './PirateForm';
import { base } from '../base';
import piratesFile from '../data/sample-pirates-array';

class App extends React.Component {
  state = {
    pirates: [],
  };

  componentDidMount() {
    this.ref = base.syncState(`pirates`, {
      context: this,
      state: 'pirates',
      asArray: true,
    });
  }

  componentWillUnmount() {
    base.removeBinding(this.ref);
  }

  render() {
    const pirateCalls = [
      'Aaarg, belay that!',
      'Avast me hearties!',
      'Shiver me timbers!',
    ];

    const randomize = () =>
      pirateCalls[Math.floor(Math.random() * pirateCalls.length)];

    const addPirate = pirate => {
      // this.setState({ pirates: this.state.pirates.concat([pirate]) });
      this.setState({ pirates: [...this.state.pirates, pirate] });
    };

    const removePirate = index => {
      console.log(index);
      const pirates = [...this.state.pirates];
      pirates.splice(index, 1);
      console.log(pirates);
      this.setState({ pirates: pirates });
    };

    return (
      <>
        <Header title={randomize()} />
        <PirateForm addPirate={addPirate} />
        {this.state.pirates.map((pirate, index) => (
          <Pirate
            key={index}
            index={index}
            tagline={randomize()}
            pirate={pirate}
            removePirate={removePirate}
          />
        ))}
      </>
    );
  }
}

export default App;
