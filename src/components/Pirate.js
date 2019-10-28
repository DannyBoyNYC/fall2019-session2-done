import React from 'react';
import '../assets/css/Pirate.css';
import avatar from '../assets/img/avatar.png';

// function Pirate({
//   removePirate,
//   tagline,
//   pirate: { desc, name, year, weapon, vessel },
// }) {
//   return (
//     <main>
//       <aside className="pirate-data">
// <ul>
//   <li>
//     <img src={avatar} alt="pirate" />
//   </li>
//   <li>
//     <h3>{name}</h3>
//   </li>
//   <li>Died: {year}</li>
//   <li>Favorite weapon: {weapon}</li>
//   <li>Sailed on: {vessel}</li>
// </ul>
//       </aside>
// <article>
//   <h2>"{tagline}"</h2>
//   <p>{desc}</p>
//   <button onClick={() => removePirate(0)}>
//     Remove{' '}
//     <span role="img" arial-label="skull">
//       ☠️
//     </span>
//   </button>
// </article>
//     </main>
//   );
// }

class Pirate extends React.Component {
  render() {
    const { name, year, weapon, vessel, desc } = this.props.pirate;
    return (
      <main>
        <aside className="pirate-data">
          <ul>
            <li>
              <img src={avatar} alt="pirate" />
            </li>
            <li>
              <h3>{name}</h3>
            </li>
            <li>Died: {year}</li>
            <li>Favorite weapon: {weapon}</li>
            <li>Sailed on: {vessel}</li>
          </ul>
        </aside>
        <article>
          <h2>"{this.props.tagline}"</h2>
          <p>{desc}</p>
          {/* prettier-ignore */}
          <button onClick={() => this.props.removePirate(this.props.index)}>Remove <span role="img" arial-label="skull">☠️</span>
          </button>
        </article>
      </main>
    );
  }
}

export default Pirate;
