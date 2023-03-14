import {Component, Fragment} from "react";
import FormInputList from "../form-input-list/FormInputList";
import FormTextareaList from "../form-textarea-list/FormTextareaList";
import FormButtonList from "../form-button-list/FormButtonList";
import './MainForm.Module.css';

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

class MainForm extends Component {
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

    render() {
        const { inputs, textareas, buttons } = this.props;
        const state = this.state;

        return (
            <form
                className="form"
                action="#"
                onSubmit={ this.onSubmitForm }>
                <FormInputList inputs={ inputs } onChange={ this.onValueChange } state={ state }/>
                <FormTextareaList textareas={ textareas } onChange={ this.onValueChange } state={ state }/>
                <div className="btn-group">
                    <FormButtonList buttons={ buttons }/>
                </div>
            </form>
        )
    }
}

export default MainForm;