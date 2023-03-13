import {Component} from 'react';
import './App.css';
import CandidateAddForm from "./components/candidate-add-form/candidate-add-form";

const inputs = [
  {type: "text", name: "name", id: "name", placeholder: "Имя", label: "Имя", },
  {type: "text", name: "surname", id: "surname", placeholder: "Фамилия", label: "Фамилия", },
  {type: "date", name: "dateOfBirth", id: "dateOfBirth", placeholder: "Дата рождения", label: "Дата рождения", },
  {type: "tel", name: "phoneNumber", id: "phoneNumber", placeholder: "Телефон", label: "Телефон", },
  {type: "url", name: "websiteURL", id: "websiteURL", placeholder: "Сайт", label: "Сайт", },
]
const textareas = [
  {name: "about", id: "about", placeholder: "О себе", label: "О себе", },
  {name: "techStack", id: "techStack", placeholder: "Стек технологий", label: "Стек технологий", },
  {name: "lastProjectDescription", id: "lastProjectDescription", placeholder: "Описание последнего проекта",
    label: "Описание последнего проекта", },
]

class App extends Component {
  render() {
    return (
      <div className='app'>
        <CandidateAddForm inputs={ inputs } textareas={ textareas } />
      </div>
    )
  }
}

export default App;
