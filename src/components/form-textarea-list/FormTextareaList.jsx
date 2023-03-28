import styles from './FormTextareaList.module.css';
import {useState} from "react";

const FormTextareaList = ({ textareas, onChange, onUpdateErrors, state }) => {
  const INITIAL_SYMBOL_COUNTER = {
    about: textareas[0].maxLength,
    techStack: textareas[1].maxLength,
    lastProjectDescription: textareas[2].maxLength,
  }
  const [symbolCounter, setSymbolCounter] = useState(INITIAL_SYMBOL_COUNTER);
  const onTextareaChange = (event) => {
    const maxLength = INITIAL_SYMBOL_COUNTER[event.target.name];
    setSymbolCounter({ ...symbolCounter, [event.target.name]: maxLength - event.target.value.length, })
    onChange(event);

    event.target.value.length > maxLength ?
      onUpdateErrors('textAreaCounterErrorTrue') :
      onUpdateErrors('textAreaCounterErrorFalse')
  }
  const textAreaElements = textareas.map((textarea) => {
    const { id, name, label, required, maxLength } = textarea;
    let { placeholder } = textarea;
    if (required) {
      placeholder += ' (обязательно)';
    }
    let value = state.formValues[name];

    const { emptyField, textAreaCounter } = state.formErrors;
    return (
      <div className={ styles.textareas } key={ id }>
        <label htmlFor={id}>{label}</label>
        <textarea
          name={ name }
          id={ id }
          cols="30"
          rows="7"
          placeholder={ placeholder }
          required={ required }
          aria-labelledby={ id }
          aria-required={ required }
          onChange={ onTextareaChange }
          value={ value }
        >
          </textarea>
        { value.length === 0 && emptyField &&
          <span className={ styles.errMsg }>Поле пустое. Заполните пожалуйста</span> }

        {symbolCounter[name] >= 0 && !textAreaCounter ?
          <div className={ styles.limitNotExceededMsg }>Осталось {symbolCounter[name]}/{maxLength} символов</div> :
          (symbolCounter[name] < 0 && textAreaCounter ?
            <div className={ styles.limitExceededMsg }>Превышен лимит символов в поле</div> :
            <div className={ styles.limitNotExceededMsg }>
              Осталось {symbolCounter[name]}/{maxLength} символов
            </div>)
        }
      </div>
    )
  })

  return (
    <>
      { textAreaElements }
    </>
  )
}

export default FormTextareaList;