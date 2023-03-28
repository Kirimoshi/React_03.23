import styles from './FormInputList.module.css';
import InputHint from "./input-hint/InputHint";

const NAME_TEST_REGEX = /^[A-ZЁА-Я][a-zёа-я]*$/;
const SURNAME_TEST_REGEX = /^[A-ZЁА-Я][a-zёа-я]*$/;
const URL_TEST_REGEX = /^https:\/\//;
const PHONE_TEST_REGEX = /^\d-\d{4}-\d{2}-\d{2}$/;

const FormInputList = ({ inputs, onChange, onUpdateErrors, state }) => {
  const onInputChange = (event) => {
    selectValidationType(event);
    onChange(event);
  }
  const selectValidationType = (event) => {
    switch (event.target.name) {
      case 'name':
        validateInput(event.target.value, 'name', NAME_TEST_REGEX);
        break;
      case 'surname':
        validateInput(event.target.value, 'surname', SURNAME_TEST_REGEX);
        break;
      case 'dateOfBirth':
        event.target.setAttribute('placeholder', `${event.target.value}`);
        break;
      case 'websiteURL':
        validateInput(event.target.value, 'websiteURL', URL_TEST_REGEX);
        break;
      case 'phoneNumber':
        validateInput(event.target.value, 'phoneNumber', PHONE_TEST_REGEX);
        break;
      default:
        break;
    }
  }
  const validateInput = (value, inputType, testRegex) => {
    const isCheckPassed = testRegex.test(value);
    if (value.length !== 0 && !isCheckPassed) {
      onUpdateErrors(`${inputType}ErrorTrue`);
    } else if (value.length === 0 || isCheckPassed) {
      onUpdateErrors(`${inputType}ErrorFalse`);
    }
  }
  const inputElements = inputs.map((input) => {
    const { id, name, type, label, required } = input;

    let { placeholder } = input;
    if (required) {
      placeholder += ' (обязательно)';
    }
    let value = state.formValues[name];

    return (
      <div className={ styles.inputs } key={ id }>
        <label htmlFor={id}>{label}</label>
        <input
          type={ type }
          name={ name }
          id={ id }
          placeholder={ placeholder }
          required={ required }
          aria-labelledby={ id }
          aria-required={ required }
          onChange={ onInputChange }
          value={ value }/>

        { state.formErrors[name]
            && <InputHint key={ `input_hint_${id}` } inputName={ name }/> }

        { value.length === 0 && state.formErrors.emptyField ?
            <span className={ styles.errMsg }>Поле пустое. Заполните пожалуйста</span> : null }
      </div>
    )
  })

  return (
    <>
      { inputElements }
    </>
  )
}

export default FormInputList;