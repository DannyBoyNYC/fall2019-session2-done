import React from 'react';
import AddPirateForm from './AddPirateForm';

class PirateForm extends React.Component {
  render() {
    return (
      <div className='pirate'>
        <h3>Ahoy from the PirateForm Component</h3>
        <AddPirateForm />
      </div>
    );
  }
}

export default PirateForm;
