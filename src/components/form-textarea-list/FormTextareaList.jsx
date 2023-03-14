import {Component} from "react";
import './FormTextareaList.Module.css';
import {Fragment} from "react";

class FormTextareaList extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const { textareas, onChange, state } = this.props;

        const textAreaElements = textareas.map((textarea) => {
            const { id, name, label, placeholder } = textarea;
            let value = state[name];
            return (
                <Fragment key={ `textareaFragment${id}`}>
                    <label htmlFor={id}>{label}</label>
                    <textarea
                        name={ name }
                        id={ id }
                        cols="30"
                        rows="7"
                        placeholder={ placeholder }
                        onChange={ (event) => onChange(event) }
                        required={true}
                        value={ value }
                    >
                    </textarea>
                </Fragment>
            )
        })
        return (
            <>
                { textAreaElements }
            </>
        )
    }
}

export default FormTextareaList;