import {Component} from "react";
import styles from './FormInputItem.module.css';

class FormInputItem extends Component {
  onInputChange = (event) => {
    this.selectCheckType(event);
    const { onChange } = this.props;
    onChange(event);
  }
  selectCheckType = (event) => {
    switch (event.target.name) {
      case 'name':
        return this.checkName(event);
      case 'surname':
        return this.checkSurname(event);
      case 'dateOfBirth':
        return this.checkDateOfBirth(event);
      case 'websiteURL':
        return this.checkSite(event);
      case 'phoneNumber':
        return this.checkPhoneNumber(event);
      default:
        return false;
    }
  }
  checkName = (event) => {
    const { onUpdateShowErrors } = this.props;
    const isCheckPassed = /^[A-ZЁА-Я][a-zёа-я]*$/.test(event.target.value);
    if (event.target.value.length !== 0 && !isCheckPassed) {
      onUpdateShowErrors('name');
    } else if (event.target.value.length === 0 || isCheckPassed) {
      onUpdateShowErrors('nameFalse');
    }
    return isCheckPassed;
  }
  checkSurname = (event) => {
    const { onUpdateShowErrors } = this.props;
    const isCheckPassed = /^[A-ZЁА-Я][a-zёа-я]*$/.test(event.target.value);
    if (event.target.value.length !== 0 && !isCheckPassed) {
      onUpdateShowErrors('surname');
    } else if (event.target.value.length === 0 || isCheckPassed) {
      onUpdateShowErrors('surnameFalse');
    }
    return isCheckPassed;
  }
  checkDateOfBirth = (event) => {
    if (event.target.name === 'dateOfBirth') {
      event.target.setAttribute('placeholder', `${event.target.value}`)
    }
    return true;
  }
  checkSite = (event) => {
    const { onUpdateShowErrors } = this.props;
    const isCheckPassed = /^https:\/\//.test(event.target.value);
    if (event.target.value.length !== 0 && !isCheckPassed) {
      onUpdateShowErrors('websiteURL');
    } else if (event.target.value.length === 0 || isCheckPassed) {
      onUpdateShowErrors('websiteURLFalse');
    }
    return isCheckPassed;
  }
  phoneMask = /^\d-\d{4}-\d{2}-\d{2}$/;
  checkPhoneNumber = (event) => {
    const { onUpdateShowErrors } = this.props;
    const isCheckPassed = this.phoneMask.test(event.target.value);
    if (event.target.value.length !== 0 && !isCheckPassed) {
      onUpdateShowErrors('phoneNumber');
    } else if (event.target.value.length === 0 || isCheckPassed) {
      onUpdateShowErrors('phoneNumberFalse');
    }
    return isCheckPassed;
  }

  render() {
    const { state } = this.props;
    const { id, name, type, label, required } = this.props.input;
    let { placeholder } = this.props.input;
    const { showNameError, showSurnameError, showSiteError, showPhoneError } = this.props.state;
    if (required) {
      placeholder += ' (обязательно)';
    }
    let value = state[name];

    return (
      <div className={ styles.inputs }>
        <label htmlFor={id}>{label}</label>
        <input
          type={ type }
          name={ name }
          id={ id }
          placeholder={ placeholder }
          required={ required }
          aria-labelledby={ id }
          aria-required={ required }
          onChange={ this.onInputChange }
          value={ value }/>
        { showNameError && (name === 'name') ?
          <span className={ styles.errMsg }>Имя должно начинаться с заглавной буквы</span> : null }
        { showSurnameError && (name === 'surname') ?
          <span className={ styles.errMsg }>Фамилия должна начинаться с заглавной буквы</span> : null }
        { showSiteError && (name === 'websiteURL') ?
          <span className={ styles.errMsg }>Сайт должен начинаться с "https://"</span> : null }
        { showPhoneError && (name === 'phoneNumber') ?
          <span className={ styles.errMsg }>Телефон должен быть в формате 7-7777-77-77</span> : null }
        { value.length === 0 && state.showEmptyFieldError ?
          <span className={ styles.errMsg }>Поле пустое. Заполните пожалуйста</span> : null }
      </div>
    )
  }
}

export default FormInputItem;