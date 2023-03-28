import {Component} from "react";
import FormInputItem from "../form-input-item/FormInputItem";

class FormInputList extends Component {
  render() {
    const { inputs, onChange, onUpdateShowErrors, state } = this.props;

    const inputElements = inputs.map((input) => {
      const { id } = input;
      return <FormInputItem
        key={ id }
        input={ input }
        state={ state }
        onChange={ onChange }
        onUpdateShowErrors={ onUpdateShowErrors }
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