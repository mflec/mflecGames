import React from "react";
import { useDispatch } from "react-redux";
import getVideogamesByName from "../actions/getVideogamesByName";
import getVideogames from "../actions/getVideogames";

export default function Search() {
  let dispatch = useDispatch()
  let [input, setInput] = React.useState({ name: "" })
  let { name } = input.name

  function handleChange(e) {
    setInput({ [e.target.name]: e.target.value })
    if (!input.name) {
      dispatch(getVideogames())
    } else {
      dispatch(getVideogamesByName(input.name))
    }
  }
  
  return (<div>
    <form>
      <label htmlFor="searchName" className="homeSearch">
        search a game by name
      </label>
      <br/>
      <input
        name="name"
        type="text"
        id="searchname"
        value={name}
        autoComplete="off"
        onChange={(e) => handleChange(e)} />
    </form>
  </div>)
}