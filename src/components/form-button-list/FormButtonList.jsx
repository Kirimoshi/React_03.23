import {Component} from "react";
import styles from './FormButtonList.module.css';

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
                        className={ styles[className] }
                        key={ id }>{ name }</button>
            )
        })
        return (
            <div className={ styles.btnGroup }>
                { buttonElements }
            </div>
        )
    }
}

export default FormButtonList;