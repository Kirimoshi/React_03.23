import {Component} from "react";
import FormTextareaItem from "../form-textarea-item/FormTextareaItem";

class FormTextareaList extends Component {
    render() {
        const { textareas, onChange, onUpdateShowErrors, state } = this.props;

        const textAreaElements = textareas.map((textarea) => {
            const { id } = textarea;
            return <FormTextareaItem
                                key={ id }
                                textarea={ textarea }
                                state={ state }
                                onChange={ (event) => onChange(event) }
                                onUpdateShowErrors={ onUpdateShowErrors }
                                />
        })
        return (
            <>
                { textAreaElements }
            </>
        )
    }
}

export default FormTextareaList;