import {Component} from "react";
import styles from "./FormCompleted.module.css";

class FormCompleted extends Component {
    render() {
        const { name, surname, dateOfBirth, phoneNumber, websiteURL, about, techStack,
            lastProjectDescription, } = this.props.state;
        const [goToMainForm, onDiscardClick] = this.props.fns;
        const onClick = () => {
          goToMainForm();
          onDiscardClick();
        }
        return (
            <div className={ styles.formCompletedWrapper }>
                <h2 className={ styles.formHeader }>{ `${name} ${surname}` }</h2>
                <p><span>Дата рождения:</span> { dateOfBirth }</p>
                <p><span>Телефон:</span> { phoneNumber }</p>
                <p>
                  <span>Сайт: </span>
                  <a href={ websiteURL } target="_blank" rel="noreferrer">{ websiteURL }</a>
                </p>
                <p><span>О себе:</span> { about }</p>
                <p><span>Стек технологий:</span> { techStack }</p>
                <p><span>Описание последнего проекта:</span> { lastProjectDescription }</p>
                <button type='button'
                        className={ styles.button }
                        onClick={ onClick }
                                      >Вернуться на главную форму</button>
            </div>
        )
    }
}

export default FormCompleted;