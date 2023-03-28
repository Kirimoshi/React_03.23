import {Component} from "react";
import styles from './FormButtonList.module.css';

class FormButtonList extends Component {
    render() {
        const { buttons, onSave, onDiscard } = this.props;

        const buttonElements = buttons.map((button) => {
            const { type, className, name, id } = button;
            return (
                <button type={ type }
                        className={ styles[className] }
                        key={ id }
                        onClick={ type === 'submit' ? onSave : onDiscard }
                        >{ name }</button>
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