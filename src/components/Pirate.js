import React from 'react';
import '../assets/css/Pirate.css';
import avatar from '../assets/img/avatar.png';

// function Pirate(props) {
//   return (
//     <div className="pirate">
//       <p>{props.tagline}</p>
//     </div>
//   );
// }

class Pirate extends React.Component {
  render() {
    const { name, year, weapon, vessel, desc } = this.props.pirate;
    return (
      <div className='pirate'>
        <ul>
          <li>
            <img src={avatar} alt='pirate' />
            <h3>{name}</h3>
            <p>Died: {year}</p>
            <p>Favorite weapon: {weapon}</p>
            <p>Sailed on: {vessel}</p>
          </li>
          <li>
            <h2>"{this.props.tagline}"</h2>
            <p>{desc}</p>
          </li>
        </ul>
      </div>
    );
  }
}

export default Pirate;
