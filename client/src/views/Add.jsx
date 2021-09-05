import React from "react";
import Nav from "../components/Nav";
import Swal from "sweetalert2";

function Add() {
  let [values, setValues] = React.useState({
    image: "",
    name: "",
    description: "",
    dateToRelase: "",
    rating: "",
    platforms: "",
    genres: [""]
  });

  function handleChange(e) {
    if (e.target.name == "genres") {
      setValues({
        ...values,
        genres: [...values.genres, e.target.value]
      })
    } else if (e.target.name == "platforms") {
      let arrayPlatforms = e.target.value.split(",")
      setValues({
        ...values,
        platforms: arrayPlatforms
      })
    } else {
      setValues({
        ...values,
        [e.target.name]: e.target.value
      })
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!values.name) {
      return Swal.fire("A name is required")
    }
    if (!values.description) {
      return Swal.fire("A description is required")
    }
    if (!values.platforms) {
      return Swal.fire("Successfully created videogame")
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
        await fetch("https://henrygames-by-mflec.herokuapp.com/videogame", config)
        return Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      } catch (error) {
        console.log(error)
        Swal.fire({
          icon: 'error',
          title: 'Oops...😥',
          text: 'Something went wrong! 😕',
          footer: '<h3> Please try again later 😁 </h3>'
        })
      }
    }
  }
  return (
    <div id="add">
      <Nav />
      <h3 id="add-tittle">ADD A VIDEOGAME</h3>
      <form onSubmit={handleSubmit} onChange={handleChange} id="add-form">
        <div >
          <label htmlFor="name" required>
            Name (*) 
          </label>
          <input  
          value={values.name} 
          name="name" 
          type="text" 
          className="form-control" 
          autoComplete="off"
          />
        </div>
        <div >
          <label htmlFor="description" required>
            Description (*)
          </label>
          <input 
          value={values.description} 
          name="description" 
          type="text" 
          className="form-control" 
          autoComplete="off"
           
          />
        </div>
        <div >
          <label htmlFor="dateToRelase" >
            Release date
          </label>
          <input value={values.dateToRelase} 
          name="dateToRelase"
           type="text" 
           className="form-control"
           autoComplete="off"
           
           />
        </div>
        <div >
          <label htmlFor="rating" >
            Rating
          </label>
          <input 
          value={values.rating} 
          name="rating" 
          className="form-control"
          autoComplete="off"
          
          ></input>
        </div>
        <div >
          <label htmlFor="platforms">
            Platforms (*)
          </label>
          <input 
          value={values.plataforms} 
          name="platforms" 
          className="form-control" 
          autoComplete="off"
          
          ></input>
        </div>
        <div >
          <label htmlFor="genres">
            <span>Genre(s)</span>
          </label>
          <select name="genres" multiple>
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
          <input 
          value={values.image} 
          name="image" 
          type="url"
          className="form-control" 
          autoComplete="off"
          />
        </div>
        <div >
          <input type="submit" value="Subir a la plataforma" id="submit"></input>
        </div>
      </form>
    </div>
  );
};

export default Add;
