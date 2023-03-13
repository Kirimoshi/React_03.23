import './candidate-add-form.css';
import {Component, Fragment} from "react";

const INITIAL_STATE = {
    name: '',
    surname: '',
    dateOfBirth: '',
    phoneNumber: '',
    websiteURL: '',
    about: '',
    techStack: '',
    lastProjectDescription: '',
}

class CandidateAddForm extends Component {
    constructor(props) {
        super(props);
    }
    state = {
        ...INITIAL_STATE,
    }


    onValueChange = (event) => {
        if (event.target.name === 'dateOfBirth') {
            event.target.setAttribute('placeholder', `${event.target.value}`)
        }
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    onSubmitForm = (event) => {
        event.preventDefault();
        const { name, surname, dateOfBirth, phoneNumber, websiteURL, about, techStack, lastProjectDescription } =
            this.state;
        console.log(`
        Name: ${name}    
        Surname: ${surname}
        Date of birth: ${dateOfBirth}
        Phone number: ${phoneNumber}
        Website: ${websiteURL}
        About: ${about}
        Technology stack: ${techStack}
        Last project description: ${lastProjectDescription}`        )
    }
    renderInputs = () => {
        const { inputs } = this.props;
        return inputs.map((input) => {
            const { id, name, placeholder, type, label } = input;
            let value = this.state[name];
            return (
                <Fragment key={ `inputFragment${id}` } >
                    <label htmlFor={id} key={ `label-for-${id}` }>{label}</label>
                    <input
                        type={type}
                        name={ name }
                        id={ id }
                        placeholder={ placeholder }
                        aria-labelledby={ id }
                        key={ id }
                        onChange={ this.onValueChange }
                        required={true}
                        value={ value }
                    />
                </Fragment>
            )
        })
    }
    renderTextareas = () => {
        const { textareas } = this.props;
        return textareas.map((textarea) => {
            const { id, name, label, placeholder } = textarea;
            let value = this.state[name];
            return (
                <Fragment key={ `textareaFragment${id}`}>
                    <label htmlFor={id} key={ `label-for-${id}` }>{label}</label>
                    <textarea
                        name={ name }
                        id={ id }
                        cols="30"
                        rows="7"
                        placeholder={ placeholder }
                        key={ id }
                        onChange={ this.onValueChange }
                        required={true}
                        value={ value }
                    >
                    </textarea>
                </Fragment>
            )
        })
    }

    onDiscard = () => {
        this.setState({
            ...INITIAL_STATE,
        })
    }

    render() {
        const inputElements = this.renderInputs();
        const textareaElements = this.renderTextareas();
        return (
            <div className="app-add-form">
                <h2 className="form-header">Создание анкеты</h2>
                <form
                    className="form"
                    onSubmit={ this.onSubmitForm }>
                    { inputElements }
                    { textareaElements }
                    <div className="btn-group">
                        <button type="submit"
                                className="save">Сохранить</button>
                        <button type="reset"
                                className="discard"
                                onClick={ this.onDiscard }>Отмена</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default CandidateAddForm;