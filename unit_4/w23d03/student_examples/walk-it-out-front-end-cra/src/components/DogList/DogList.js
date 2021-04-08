import React, { useState, useEffect } from "react";
import axios from "axios";

import DogShow from "../DogShow/DogShow";

const DogList = (props) => {
  const [dogs, setDogs] = useState([]);

  useEffect(() => {
    // Need to wrap this in an async function to use await inside:
    async function fetchData() {
      const response = await axios.get("http://localhost:3001/dogs", {
        headers: {
          Authorization: 'Bearer ' + localStorage.getItem('token')
        }
      });
      setDogs(response.data);
    }
    fetchData();
  }, [dogs]);

  const showDogs = dogs.map((dog, i) => {
    return (
      <div key={i}>
        <DogShow dog={dog} isLoggedIn={props.isLoggedIn} />
      </div>
    );
  });

  return <div>{showDogs}</div>;
};

export default DogList;
