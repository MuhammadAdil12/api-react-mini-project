import { useState } from 'react'
import './App.css'
import Card from "./components/Cards"


function App() {
  const [error, setError] = useState(false)
  const [userInput, setUserInput] = useState("")
  const [data, setData] = useState(null)

function getData(){

    fetch(`https://www.superheroapi.com/api.php/3695200347474778/search/${userInput}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Network response was not ok: ${res.status}`);
        }
        return res.json();
      })
      .then((info) => {
        setData(info.results[0]) 
        setError(false)
      }
        )

      .catch((error) => {
        console.log(error);
        setError(true)
        setData(null)
      });

  }
  return (
    <>
      <div className="title-div">
        <h1>Superhero Info Finder</h1>
      </div>
        <div className="input-div">
            <input type="text" required placeholder="Hero Name" id="hero-input" onChange={(e)=> setUserInput(e.target.value)}/>
            <button className="searchBtn" onClick={getData}>search</button>
        </div>
        <div className="error-div">
            {error && <h3>We don't have any data on this person</h3>}
        </div>

      {data && <Card data={data}/>}

    </>
  )
}

export default App
