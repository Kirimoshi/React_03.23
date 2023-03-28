import MainForm from './components/main-form/MainForm';
import './App.css';

const inputs = [
  {type: "text", name: "name", id: "name", placeholder: "Имя", label: "Имя", required: true, },
  {type: "text", name: "surname", id: "surname", placeholder: "Фамилия", label: "Фамилия", required: true, },
  {type: "date", name: "dateOfBirth", id: "dateOfBirth", placeholder: "Дата рождения", label: "Дата рождения",
    required: true, },
  {type: "tel", name: "phoneNumber", id: "phoneNumber", placeholder: "Телефон", label: "Телефон", required: true, },
  {type: "url", name: "websiteURL", id: "websiteURL", placeholder: "Сайт", label: "Сайт", required: true, },
]
const textareas = [
  {name: "about", id: "about", placeholder: "О себе", label: "О себе", required: true, maxLength: 600, },
  {name: "techStack", id: "techStack", placeholder: "Стек технологий", label: "Стек технологий", required: true,
    maxLength: 600,},
  {name: "lastProjectDescription", id: "lastProjectDescription", placeholder: "Описание последнего проекта",
    label: "Описание последнего проекта", required: true,  maxLength: 600,},
]
const buttons = [
  { type: 'submit', className: 'save', name: 'Сохранить', id: 1},
  { type: 'reset', className: 'discard', name: 'Отмена', id: 2},
]

const App = () => {
  return (
      <div className='app'>
        <div className="app-form">
          <MainForm
              inputs={ inputs }
              textareas={ textareas }
              buttons={ buttons }
          />
        </div>
      </div>
  );
}

export default App;
