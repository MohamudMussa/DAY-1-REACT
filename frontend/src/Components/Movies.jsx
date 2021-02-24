import { useState } from "react";
import axios from "axios";

const Movies = () => {
  // error
  const [error, setError] = useState(null);

  const apiSearch = "&s=";
  const [data, setData] = useState([]);
  const [apiKey, setApiKey] = useState("530671a4");
  const [filmTitle, setFilmTitle] = useState("");

  const updateTitle = (e) => {
    e.preventDefault();
    setFilmTitle(e.target.value);
  };

  const makeRequest = (e) => {
    axios
      .get("http://www.omdbapi.com/?apikey=" + apiKey + apiSearch + filmTitle)
      .then((response) => {
        console.log(response.data.Search);
        setData(response.data.Search);
      })
      .catch((error) => {
        setError(error);
      });
  };

  if (error) {
    return <p>Oops.. that movie does not exist!{error.message}</p>;
  } else {
    return (
      <>
        <div>
          <h2>AMC FILM SEARCH </h2>

          <p>Enter the name of the film you are searching for here:</p>
          <input type="text" onChange={(e) => updateTitle(e)} />

          <button onClick={(e) => makeRequest(e)}>Click me</button>

          {data.map((info) => (
            <div>
              <h4>{info.Title}</h4>
              <h4>{info.Year}</h4>
              <h4>{info.Rated}</h4>
              <h4>{info.Genre}</h4>
              <h4>{info.Plot}</h4>
              <img src={info.Poster} alt="The poster"></img>
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default Movies;
