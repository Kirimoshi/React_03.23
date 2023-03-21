import {Component} from "react";
import FormInputList from "../form-input-list/FormInputList";
import FormTextareaList from "../form-textarea-list/FormTextareaList";
import FormButtonList from "../form-button-list/FormButtonList";
import FormCompleted from "../form-completed/FormCompleted";
import styles from './MainForm.module.css';

const INITIAL_STATE = {
  name: '',
  surname: '',
  dateOfBirth: '',
  phoneNumber: '',
  websiteURL: '',
  about: '',
  techStack: '',
  lastProjectDescription: '',
  showEmptyFieldError: false,
  showNameError: false,
  showSurnameError: false,
  showSiteError: false,
  showPhoneError: false,
  showTextAreaCounterError: false,
  isFormSubmitted: false,
}

class MainForm extends Component {
  state = {
    ...INITIAL_STATE,
  }

  onValueChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    })
  }
  updateShowErrors = (type) => {
    switch (type) {
      case 'name':
        this.setState({
          showNameError: true,
        })
        return;
      case 'nameFalse':
        this.setState({
          showNameError: false,
        })
        return;
      case 'surname':
        this.setState({
          showSurnameError: true,
        })
        return;
      case 'surnameFalse':
        this.setState({
          showSurnameError: false,
        })
        return;
      case 'websiteURL':
        this.setState({
          showSiteError: true,
        })
        return;
      case 'websiteURLFalse':
        this.setState({
          showSiteError: false,
        })
        return;
      case 'phoneNumber':
        this.setState({
          showPhoneError: true,
        })
        return;
      case 'phoneNumberFalse':
        this.setState({
          showPhoneError: false,
        })
        return;
      case 'textareaCounter':
        this.setState({
          showTextAreaCounterError: true,
        })
        return;
      case 'textareaCounterFalse':
        this.setState({
          showTextAreaCounterError: false,
        })
        return;
      default:
        return;
    }
  }
  onSaveClick = () => {
    for (const key in this.state) {
      if (typeof this.state[key] === 'string' && this.state[key].length === 0) {
        this.setState({
          showEmptyFieldError: true,
        })
        break;
      } else {
        this.setState({
          showEmptyFieldError: false,
        })
      }
    }

    Object.values(this.state).forEach((value) => {
      if (typeof value === 'string' && value.length === 0) {
        this.setState({
          showEmptyFieldError: true,
        })
      }
    })
  }
  onDiscardClick =() => {
    this.setState({
      ...INITIAL_STATE,
    })
  }
  updateIsFormSubmitted = () => {
    this.setState({
      isFormSubmitted: true,
    })
  }
  goToMainForm = () => {
    this.setState({
      isFormSubmitted: false,
    })
  }
  onSubmitForm = (event) => {
    event.preventDefault();
    const { showEmptyFieldError, showNameError, showSurnameError, showSiteError, showPhoneError,
      showTextAreaCounterError } = this.state;

    Object.entries(this.state).forEach(([key, value]) => {
      if (typeof value === 'string') {
        this.setState({
          [key]: value.trim(),
        })
      }
    })

    if (!showEmptyFieldError &&
      !showNameError &&
      !showSurnameError &&
      !showSiteError &&
      !showPhoneError &&
      !showTextAreaCounterError) {
      this.updateIsFormSubmitted();
    }
  }

  render() {
    const { inputs, textareas, buttons } = this.props;
    const state = this.state;
    const { isFormSubmitted } = state;

    return (
      isFormSubmitted ?
        <FormCompleted state={ state } fns={ [this.goToMainForm, this.onDiscardClick] }/> :
        <>
          <h2 className={ styles.formHeader }>Создание анкеты</h2>
          <form
            className={ styles.form }
            action="#"
            onSubmit={ this.onSubmitForm }>
            <FormInputList inputs={ inputs } onChange={ this.onValueChange }
                           onUpdateShowErrors={ this.updateShowErrors } state={ state }/>
            <FormTextareaList textareas={ textareas } onChange={ this.onValueChange }
                              onUpdateShowErrors={ this.updateShowErrors } state={ state }/>
            <FormButtonList buttons={ buttons } onSave={ this.onSaveClick } onDiscard={ this.onDiscardClick }/>
          </form>
        </>
    )
  }
}

export default MainForm;