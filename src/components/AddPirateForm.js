import React from 'react';
import '../assets/css/AddPirateForm.css';

class AddPirateForm extends React.Component {
  createPirate = event => {
    event.preventDefault();
    console.log('making a pirate');
  };

  render() {
    return (
      <form onSubmit={this.createPirate}>
        <input type="text" placeholder="Pirate name" />
        <input type="text" placeholder="Pirate vessel" />
        <input type="text" placeholder="Pirate weapon" />
        <button type="submit">Add Pirate</button>
      </form>
    );
  }
}

export default AddPirateForm;
