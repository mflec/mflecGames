import React from "react";
import { useDispatch } from "react-redux";
import getVideogamesByName from "../actions/getVideogamesByName";
import { useSelector } from "react-redux";
import GameCard from "./GameCard"

export default function Search() {
  const videogames = useSelector((state) => state.videogames);
  const videogamesToShow = useSelector((state) => state.videogamesToShow);

  let dispatch = useDispatch()
  let [input, setInput] = React.useState({ name: "" })
  function handleChange(e) {
    setInput({ name: e.target.value })
  }
  function handleSubmit(e) {
    e.preventDefault()
    dispatch(getVideogamesByName(input.name))
  }
  let {name} = input.name

  let toShow= videogamesToShow? videogamesToShow: videogames

  return (<div> 
        <form onSubmit={(e) => handleSubmit(e)}>
            <input
              name="name"
              type="text"
              id="searchname"
              autoComplete="off"
              value={name}
              onChange={(e) => handleChange(e)}/>
          <button type="submit" id="searchbutton">BUSCAR</button>
        </form>
        <div>
        {toShow.map((videogame) =>
      (<GameCard
        id={videogame.id}
        name={videogame.name}
        image={videogame.image}
        genres={videogame.genres}
      />))}
        </div>
  </div>)
}