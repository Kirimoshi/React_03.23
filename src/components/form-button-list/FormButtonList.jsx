import styles from './FormButtonList.module.css';

const FormButtonList = ({ buttons, onSave, onDiscard }) => {
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

export default FormButtonList;