import React from 'react';
import '../assets/css/AddPirateForm.css';

class AddPirateForm extends React.Component {
  nameRef = React.createRef();
  vesselRef = React.createRef();
  weaponRef = React.createRef();

  createPirate = event => {
    event.preventDefault();
    console.log('making a pirate');
  };

  render() {
    return (
      <form onSubmit={this.createPirate}>
        <input
          type='text'
          name='name'
          placeholder='Pirate name'
          ref={this.nameRef}
        />
        <input
          type='text'
          name='vessel'
          placeholder='Pirate vessel'
          ref={this.vesselRef}
        />
        <input
          type='text'
          name='weapon'
          placeholder='Pirate weapon'
          ref={this.weaponRef}
        />
        <button type='submit'>Add Pirate</button>
      </form>
    );
  }
}

export default AddPirateForm;
