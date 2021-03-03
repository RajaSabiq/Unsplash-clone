import logo from "./logo.svg";
import Axios from "axios";
import "./App.css";
import { useState } from "react";

function App() {
  const [photo, setPhoto] = useState([]);
  const [search, setSearch] = useState("");
  const [api, setAPi] = useState("");
  const getData = (event) => {
    event.preventDefault();
    Axios.get(
      "https://api.unsplash.com/search/photos/?query=" +
        search +
        "&client_id=1pdyl6SJQrKM9TKtNR6TkguUwnGY1mbWqIKLWhzF-Zc"
    ).then((response) => {
      setPhoto(response.data.results);
      console.log(photo[0].urls.small);
    });
    // setAPi(
    //   "https://api.unsplash.com/search/photos/?query=" +
    //     search +
    //     "&client_id=1pdyl6SJQrKM9TKtNR6TkguUwnGY1mbWqIKLWhzF-Zc"
    // );
    // fetch(api)
    //   .then((respone) => respone.json())
    //   .then((data) => {
    //     setPhoto(data.results);
    //     console.log(photo[0].urls.small);
    //   });
  };

  return (
    <div className="App">
      <form onSubmit={(event) => event.preventDefault()}>
        <h1>{api}</h1>
        <input
          type="text"
          placeholder="Search Category"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={getData}> Search </button>
      </form>
      {photo.map((data) => (
        <img id={data.id} src={data.urls.small} />
      ))}
    </div>
  );
}

export default App;
