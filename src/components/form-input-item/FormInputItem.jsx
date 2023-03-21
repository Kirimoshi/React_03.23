import {Component} from "react";
import styles from './FormInputItem.module.css';

class FormInputItem extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        showNameError: false,
        showSurnameError: false,
        showSiteError: false,
        showPhoneError: false,
    }


    onInputChange = (event) => {
        const { onChange } = this.props;
        this.checkUniversal(event);
        onChange(event);
        /*if(this.checkUniversal(event)) {
            onChange(event);
        }*/
    }
    checkUniversal = (event) => {
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
        const isCheckPassed = /^[A-ZЁА-Я][a-zёа-я]*$/.test(event.target.value) && event.target.value.length !== 0;
        if (!isCheckPassed) {
            this.setState({
                showNameError: true,
            })
        } else {
            this.setState({
                showNameError: false,
            })
        }
        return isCheckPassed;
    }
    checkSurname = (event) => {
        const isCheckPassed = /^[A-ZЁА-Я][a-zёа-я]*$/.test(event.target.value) /*&& event.target.value.length !== 0*/;
        if (!isCheckPassed) {
            this.setState({
                showSurnameError: true,
            })
        } else {
            this.setState({
                showSurnameError: false,
            })
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
        const isCheckPassed = /^https:\/\//.test(event.target.value) && event.target.value.length !== 0;
        if (!isCheckPassed) {
            this.setState({
                showSiteError: true,
            })
        } else {
            this.setState({
                showSiteError: false,
            })
        }
        return isCheckPassed;
    }
    phoneMask = /^\d-\d{4}-\d{2}-\d{2}$/;
    checkPhoneNumber = (event) => {
        const isCheckPassed = this.phoneMask.test(event.target.value) && event.target.value.length !== 0;
        if (!isCheckPassed) {
            this.setState({
                showPhoneError: true,
            })
        } else {
            this.setState({
                showPhoneError: false,
            })
        }
        return isCheckPassed;
    }

    render() {
        const { state } = this.props;
        const { id, name, type, label, required } = this.props.input;
        let { placeholder } = this.props.input;
        const { showNameError, showSurnameError, showSiteError, showPhoneError } = this.state;
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
            </div>
            )
    }
}

export default FormInputItem;