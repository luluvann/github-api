import './App.css';
import axios from 'axios';
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup"

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
        <div>List public repos for a specific github user</div>
        <Form.Group>
          <Form.Control placeholder="username" onChange={handleChange} value={userName}></Form.Control>
        </Form.Group>
        <Button onClick={clickHandler}>Submit</Button>
        <ListGroup variant="flush">
          <ul>
            {repos.map( (element,i) => <li key={i}>{element.name} developed in {element.language}</li>)}
          </ul>
        </ListGroup>
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
