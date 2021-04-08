import { Component } from 'react';
import styles from './InputForm.module.css';

// import PropTypes from 'prop-types';

class InputForm extends Component {
  state = {
    name: '',
    number: '',
  };

  submitContact = event => {
    const { name, value } = event.currentTarget;
    this.setState({
      [name]: value,
    });
    console.log(this.state);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);

    this.props.onSubmit(this.state);

    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form className="section" action="">
        <label htmlFor="">
          <p className="subHeader">Add Your Contact Here</p>
          <input
            placeholder="Enter name"
            className={styles.input}
            type="text"
            value={this.state.name}
            onChange={this.submitContact}
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />

          <input
            placeholder="Enter phonenumber"
            className={styles.input}
            type="tel"
            name="number"
            value={this.state.number}
            onChange={this.submitContact}
            pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
            title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
            required
          />
          <button
            className={styles.btn}
            type="submit"
            onClick={this.handleSubmit}
          >
            Add contact
          </button>
        </label>
      </form>
    );
  }
}

export default InputForm;
