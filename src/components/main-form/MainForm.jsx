import FormInputList from "../form-input-list/FormInputList";
import FormTextareaList from "../form-textarea-list/FormTextareaList";
import FormButtonList from "../form-button-list/FormButtonList";
import FormCompleted from "../form-completed/FormCompleted";
import styles from './MainForm.module.css';
import {useState} from "react";

const INITIAL_STATE = {
  formValues: {
    name: '',
    surname: '',
    dateOfBirth: '',
    phoneNumber: '',
    websiteURL: '',
    about: '',
    techStack: '',
    lastProjectDescription: '',
  },
  formErrors: {
    name: false,
    surname: false,
    phoneNumber: false,
    websiteURL: false,
    emptyField: false,
    textAreaCounter: false,
  },
  formSubmitted: false,
}

const MainForm = ({ inputs, textareas, buttons }) => {
  const [formValues, setFormValues] = useState(INITIAL_STATE.formValues);
  const [formErrors, setFormErrors] = useState(INITIAL_STATE.formErrors);
  const [formSubmitted, setFormSubmitted] = useState(INITIAL_STATE.formSubmitted);

  const state = {
    formValues: { ...formValues },
    formErrors: { ...formErrors },
    formSubmitted: formSubmitted,
  }

  const onValueChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value, })
  }
  const updateErrors = (type) => {
    switch (type) {
      case 'nameErrorTrue':
        setFormErrors({ ...formErrors, name: true });
        break;
      case 'nameErrorFalse':
        setFormErrors({ ...formErrors, name: false });
        break;
      case 'surnameErrorTrue':
        setFormErrors({ ...formErrors, surname: true });
        break;
      case 'surnameErrorFalse':
        setFormErrors({ ...formErrors, surname: false });
        break;
      case 'websiteURLErrorTrue':
        setFormErrors({ ...formErrors, websiteURL: true });
        break;
      case 'websiteURLErrorFalse':
        setFormErrors({ ...formErrors, websiteURL: false });
        break;
      case 'phoneNumberErrorTrue':
        setFormErrors({ ...formErrors, phoneNumber: true });
        break;
      case 'phoneNumberErrorFalse':
        setFormErrors({ ...formErrors, phoneNumber: false });
        break;
      case 'textAreaCounterErrorTrue':
        setFormErrors({ ...formErrors, textAreaCounter: true });
        break;
      case 'textAreaCounterErrorFalse':
        setFormErrors({ ...formErrors, textAreaCounter: false });
        break;
      default:
        break;
    }
  }
  const onSaveClick = () => {
    for (const key in state.formValues) {
      if (state.formValues[key].length === 0) {
        setFormErrors({ ...formErrors, emptyField: true });
        break;
      } else {
        setFormErrors({ ...formErrors, emptyField: false });
      }
    }

    Object.values(state.formValues).forEach((value) => {
      if (value.length === 0) {
        setFormErrors({ ...formErrors, emptyField: true });
      }
    })
  }
  const onDiscardClick =() => {
    setFormValues(INITIAL_STATE.formValues);
    setFormErrors(INITIAL_STATE.formErrors);
    setFormSubmitted(INITIAL_STATE.formSubmitted);
    const dateInput = document.getElementById('dateOfBirth');
    dateInput.setAttribute('placeholder', `Дата рождения (обязательно)`);
  }
  const goToMainForm = () => {
    setFormSubmitted(false);
  }
  const onSubmitForm = (event) => {
    event.preventDefault();
    const { formValues, formErrors } = state;

    Object.entries(formValues).forEach(([key, value]) => {
      setFormValues({ ...formValues, [key]: value.trim(), })
    })

    if (Object.values(formErrors).every((error) => error === false)) {
      setFormSubmitted(true);
    } else {
      setFormSubmitted(false);
    }
  }

  return (
    formSubmitted
      ? <FormCompleted formValues={ formValues } fns={ [goToMainForm, onDiscardClick] }/>
      : <>
          <h2 className={ styles.formHeader }>Создание анкеты</h2>
          <form
            className={ styles.form }
            action="#"
            onSubmit={ onSubmitForm }>
            <FormInputList inputs={ inputs } onChange={ onValueChange }
                           onUpdateErrors={ updateErrors } state={ state }/>
            <FormTextareaList textareas={ textareas } onChange={ onValueChange }
                              onUpdateErrors={ updateErrors } state={ state }/>
            <FormButtonList buttons={ buttons } onSave={ onSaveClick } onDiscard={ onDiscardClick }/>
          </form>
        </>
  )
}

export default MainForm;