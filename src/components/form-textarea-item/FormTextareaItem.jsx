import {Component} from "react";
import styles from './FormTextareaItem.module.css';

class FormTextareaItem extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        symbolCounter: this.props.textarea.maxLength,
    }

    onTextareaChange = (event) => {
        const { onChange } = this.props;
        this.setState({
            symbolCounter: this.props.textarea.maxLength - event.target.value.length,
        })

        onChange(event);
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
                {symbolCounter >= 0 ?
                    <div className={ styles.limitNotExceededMsg }>Осталось {symbolCounter}/{maxLength} символов</div> :
                    <div className={ styles.limitExceededMsg }>Превышен лимит символов в поле</div>
                }
            </div>
        )
    }

}

export default FormTextareaItem;