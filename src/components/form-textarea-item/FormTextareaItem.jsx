import {Component} from "react";
import styles from './FormTextareaItem.module.css';

class FormTextareaItem extends Component {
    state = {
        symbolCounter: this.props.textarea.maxLength,
    }

    onTextareaChange = (event) => {
        const { onChange, onUpdateShowErrors } = this.props;
        const { maxLength } = this.props.textarea;
        this.setState({
            symbolCounter: maxLength - event.target.value.length,
        })

        onChange(event);

        event.target.value.length > maxLength ?
            onUpdateShowErrors('textareaCounter') :
            onUpdateShowErrors('textareaCounterFalse')
    }

    render() {
        const { state } = this.props;
        const { id, name, label, required, maxLength } = this.props.textarea;
        let { placeholder } = this.props.textarea;
        if (required) {
            placeholder += ' (обязательно)';
        }
        let value = state[name];

        const { symbolCounter } = this.state;

        return (
            <div className={ styles.textareas }>
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
                    onChange={ this.onTextareaChange }
                    value={ value }
                >
                </textarea>
                { value.length === 0 && state.showEmptyFieldError ?
                    <span className={ styles.errMsg }>Поле пустое. Заполните пожалуйста</span> : null }

                {symbolCounter >= 0 && !state.showTextAreaCounterError ?
                    <div className={ styles.limitNotExceededMsg }>Осталось {symbolCounter}/{maxLength} символов</div> :
                        (symbolCounter < 0 && state.showTextAreaCounterError ?
                        <div className={ styles.limitExceededMsg }>Превышен лимит символов в поле</div> :
                          <div className={ styles.limitNotExceededMsg }>
                              Осталось {symbolCounter}/{maxLength} символов
                          </div>)
                }
            </div>
        )
    }
}

export default FormTextareaItem;