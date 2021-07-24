import React from "react";
import { useDispatch } from "react-redux";
import getVideogamesByName from "../actions/getVideogamesByName";
import { useSelector } from "react-redux";
import GameCard from "./GameCard"

export default function Search() {
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
  </div>)
}