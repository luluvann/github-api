import './App.css';
import axios from 'axios';
import { useState } from 'react'

function App() {

  function Element(){
    const [userName, setUserName] = useState()
    const [repos, setRepos] = useState([{name:""}])

    function clickHandler(e){
    
      axios.get(`https://api.github.com/users/${userName}/repos`)
      .then(response => {
        const repos_list = response.data
        console.log(repos_list)
        setRepos(repos_list);
        })
      }

    function handleChange(e){
      e.preventDefault()
      setUserName(e.target.value)
    }
      
    return (
      <div>
        <h3>List Github public repos for a user</h3>
        <div className="container">
        <input placeholder="username" onChange={handleChange}></input>
        <button onClick={clickHandler}>Search</button>
        </div>
        {repos ? <ul>
          {repos.map( (element,i) => <li key={i}><a href={element.html_url}>{element.name}</a> developed in <span>{element.language}</span></li>)}
        </ul> : <div></div>}
        
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
