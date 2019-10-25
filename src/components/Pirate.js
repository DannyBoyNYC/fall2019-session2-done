import React from 'react';
import '../assets/css/Pirate.css';

// function Pirate(props) {
//   return (
//     <div className="pirate">
//       <p>{props.tagline}</p>
//     </div>
//   );
// }

class Pirate extends React.Component {
  render() {
    return (
      <div className="pirate">
        <p>{this.props.tagline}</p>
      </div>
    );
  }
}

export default Pirate;
