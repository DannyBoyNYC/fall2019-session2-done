// import React from 'react';

// function Pirate({ tagline }) {
//   return <p>{tagline}</p>;
// }

// export default Pirate;
import React, { Component } from 'react';
import '../assets/css/Pirate.css';

class Pirate extends Component {
  render() {
    const { tagline } = this.props;
    return (
      <div className="pirate">
        <p>{tagline}</p>
      </div>
    );
  }
}

export default Pirate;
