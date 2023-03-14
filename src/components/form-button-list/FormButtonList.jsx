import {Component} from "react";
import './FormButtonList.Module.css';

class FormButtonList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { buttons } = this.props;

        const buttonElements = buttons.map((button) => {
            const { type, className, name, id } = button;
            return (
                <button type={ type }
                        className={ className }
                        key={ id }>{ name }</button>
            )
        })
        return (
            <>
                { buttonElements }
            </>
        )
    }
}

export default FormButtonList;