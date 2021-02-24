import './App.css';
import axios from 'axios';
import { useState } from 'react'

function App() {

  function Element(){
    const [userName, setUserName] = useState()
    const [repos, setRepos] = useState()

    function clickHandler(e){
      
      axios.get(`https://api.github.com/users/${userName}/repos`)
      .then(response => {
        const repos_list = response.data
        console.log(repos_list)
        setRepos(repos_list);
        })
      }

      function enterHandler(e){
        e.keyCode == 13 ?
          axios.get(`https://api.github.com/users/${userName}/repos`)
          .then(response => {
            const repos_list = response.data
            console.log(repos_list)
            setRepos(repos_list);
            }) : setRepos()
        }

    function handleChange(e){
      e.preventDefault()
      setUserName(e.target.value)
    }
      
    return (
      <div>
        <h3>List Github public repos for a user</h3>
        <div className="container">
        <input placeholder="username" onChange={handleChange} onKeyUp={enterHandler}></input>
        <button onClick={clickHandler}>Search</button>
        </div>
        {repos != undefined ? <ul>
          {repos.map( (element,i) => <li key={i}><a href={element.html_url} target="_blank" rel="noreferrer">{element.name}</a> developed in <span>{element.language}</span></li>)}
        </ul> : <div>No public repos found for that user!</div>} 
      </div>
    )
  }


  return (
    <div className="App">
        <Element/>
    </div>
  );
}

export default App;
