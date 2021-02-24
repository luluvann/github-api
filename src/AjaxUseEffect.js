import React, { useState, useEffect } from "react";
import axios from "axios";

function AjaxUseEffect() {
  const [repos, setRepos] = useState(["something", "somewhat"]);

  //Fonction appelée avant l'affichage du component
  useEffect(() => {
    async function callback(){
      const response = await axios.get(
        `https://api.github.com/users/luluvann/repos`
      );
      setRepos(response.data);
    }
    callback();
  }, []);

  return (
    <div>
      <ul>
        {repos.map((element, i) => (
          <li key={i}>{element.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default AjaxUseEffect;
