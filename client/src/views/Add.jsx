import React from "react";
import Nav from "../components/Nav";

function Add() {
  let [values, setValues] = React.useState({
    image: null,
    name: null,
    description: null,
    dateToRelase: null,
    rating: null,
    platforms: null,
    genres: []
  });


  function handleChange(e) {
    if (e.target.name == "genres") {
      setValues(values => ({
        ...values,
        genres: [...values.genres, e.target.value]
      }))
    } else if (e.target.name == "platforms") {
      let arrayPlatforms = e.target.value.split(",")
      setValues(values => ({
        ...values,
        platforms: arrayPlatforms
      }))
    } else {
      setValues(values => ({
        ...values,
        [e.target.name]: e.target.value
      }))
    }
    console.log(values)
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!values.name) {
      return alert("A name is required")
    }
    if (!values.description) {
      return alert("A description is required")
    }
    if (!values.platforms) {
      return alert("Successfully created videogame")
    }else {
      try {
        let config = {
          method: "POST",
          headers: {
            "Accept": "Application/json",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        }
        let res = await fetch("http://localhost:3005/videogame", config)
        return alert("The genres are required")
      } catch (error) {
        console.log(error)
      }
    }
  }
  return (
    <div id="add">
      <Nav />
      <h3>ADD A VIDEOGAME</h3>
      <hr />
      <form onSubmit={(e) => handleSubmit(e)} id="add-form">
        <div >
          <label htmlFor="name" required>
            Name (*) 
          </label>
          <input onChange={(e) => handleChange(e)} value={values.name} name="name" type="text" className="form-control" />
        </div>
        <div >
          <label htmlFor="description" required>
            Description (*)
          </label>
          <input onChange={(e) => handleChange(e)} value={values.description} name="description" type="text" className="form-control"  />
        </div>
        <div >
          <label htmlFor="dateToRelase" >
            Release date
          </label>
          <input onChange={(e) => handleChange(e)} value={values.dateToRelase} name="dateToRelase" type="text" className="form-control" />
        </div>
        <div >
          <label htmlFor="rating" >
            Rating
          </label>
          <textarea onChange={(e) => handleChange(e)} value={values.rating} name="rating" className="form-control"></textarea>
        </div>
        <div >
          <label htmlFor="platforms">
            Platforms (*)
          </label>
          <textarea onChange={(e) => handleChange(e)} value={values.plataforms} name="platforms" className="form-control" ></textarea>
        </div>
        <div >
          <label htmlFor="genres">
            <span>Genre(s)</span>
          </label>
          <select onChange={(e) => handleChange(e)} name="genres" id='genres' multiple>
            <option value="4">Action</option>
            <option value="51">Indie</option>
            <option value="3">Adventure</option>
            <option value="5">RPG</option>
            <option value="10">Strategy</option>
            <option value="2">Shooter</option>
            <option value="40">Casual</option>
            <option value="14">Simulation</option>
            <option value="7">Puzzle</option>
            <option value="11">Arcade</option>
            <option value="83">Platformer</option>
            <option value="1">Racing</option>
            <option value="59">Massively Multiplayer</option>
            <option value="15">Sports</option>
            <option value="6">Fighting</option>
            <option value="19">Family</option>
            <option value="28">Board Games</option>
            <option value="34">Educational</option>
            <option value="17">Card</option>
          </select>
        </div>
        <div >
          <label htmlFor="image" >
            Descriptive image(URL)
          </label>
          <input onChange={(e) => handleChange(e)} value={values.image} name="image" type="url" className="form-control" />
        </div>
        <div >
          <input type="submit" value="Subir a la plataforma" id="submit"></input>
        </div>
      </form>
    </div>
  );
};

export default Add;
