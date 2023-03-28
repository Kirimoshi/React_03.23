import styles from './InputHint.module.css';

const InputHint = ({ inputName }) => {
  const inputHintText = (inputName) => {
    switch (inputName) {
      case 'name':
        return 'Имя должно начинаться с заглавной буквы';
      case 'surname':
        return 'Фамилия должна начинаться с заглавной буквы';
      case 'websiteURL':
        return 'Сайт должен начинаться с "https://"';
      case 'phoneNumber':
        return 'Телефон должен быть в формате "7-7777-77-77"';
      default:
        break;
    }
  }

  return (
    <span className={ styles.errMsg }>{ inputHintText(inputName) }</span>
  )
}

export default InputHint;