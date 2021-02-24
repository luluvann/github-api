import axios from "axios";
import { useState } from "react";
import "./App.css";

function Element() {

  const [userName, setUserName] = useState();
  const [repos, setRepos] = useState();

  const fetch = async () => {
    try {
      const res = await axios.get(
        `https://api.github.com/users/${userName}/repos`
      );
      console.log(res.data)
      setRepos(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  function clickHandler() {
    fetch();
  }

  function enterHandler(e) {
    e.keyCode === 13 ? fetch() : setRepos();
  }

  function handleChange(e) {
    e.preventDefault();
    setUserName(e.target.value);
  }

  const result = (
    repos === undefined ? <></> : repos.length === 0 ? <div>No public github repos found for this user</div> :  
    repos.map((repo, i) => (
    <ul>
        <li key={i}>
          <a href={repo.html_url} target="_blank" rel="noreferrer">
            {repo.name}
          </a> developed in <span>{repo.language}</span>
        </li>
      </ul>
    )));

  return (
    <div>
      <h3>List Github public repos for a user</h3>
      <div className="container">
        <input
          placeholder="username"
          onChange={handleChange}
          onKeyUp={enterHandler}
        ></input>
        <button onClick={clickHandler}>Search</button>
      </div>
      {result}
    </div>
  );
}

export default Element;
