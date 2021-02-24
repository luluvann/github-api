import './App.css';
import axios from 'axios';
import { useState } from 'react'
import Form from "react-bootstrap/Form";

function App() {

  function Element(){
    const [userName, setUserName] = useState()
    const [repos, setRepos] = useState([{name:"blah"}])

    function clickHandler(){
      axios.get("https://api.github.com/users/luluvann/repos")
      .then(response => {
        const repos_list = response.data
        setRepos(repos_list);
        })
      }

    function handleChange(event){
      event.preventDefault();
      setUserName(event.target.value)
    }
      

    return (
      <div>
        <h3>List public repos for a specific github user</h3>
        <div class="container">
        <input placeholder="username" onChange={handleChange} value={userName}></input>
        <button onClick={clickHandler}>Submit</button>
        </div>
        <ul>
          {repos.map( (element,i) => <li key={i}>{element.name} developed in {element.language}</li>)}
        </ul>
      </div>
    )
  }


  return (
    <div className="App">
      <header className="App-header">
        <Element/>
      </header>
    </div>
  );
}

export default App;
