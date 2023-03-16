import {Component} from "react";
import FormInputItem from "../form-input-item/FormInputItem";

class FormInputList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { inputs, onChange, state } = this.props;

        const inputElements = inputs.map((input) => {
            const { id } = input;
            return <FormInputItem
                            key={ id }
                            input={ input }
                            state={ state }
                            onChange={ onChange }
                            />
        });

        return (
            <>
                { inputElements }
            </>
        )
    }
}
export default FormInputList;