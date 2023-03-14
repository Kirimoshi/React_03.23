import {Component} from "react";
import './FormInputList.Module.css';
import {Fragment} from "react";

class FormInputList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { inputs, onChange, state } = this.props;

        const inputElements = inputs.map((input) => {
            const { id, name, placeholder, type, label } = input;
            let value = state[name];
            return (
                <Fragment key={ `inputFragment${id}` }>
                    <label htmlFor={id}>{label}</label>
                    <input
                        type={type}
                        name={ name }
                        id={ id }
                        placeholder={ placeholder }
                        aria-labelledby={ id }
                        onChange={ (event) => onChange(event) }
                        required={true}
                        value={ value }
                    />
                </Fragment>
            )
        });

        return (
            <>
                { inputElements }
            </>
        )
    }
}
export default FormInputList;