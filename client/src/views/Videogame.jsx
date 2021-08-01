import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import getVideogame from "../actions/getVideogame";
import { useDispatch, useSelector } from "react-redux";
import clearVideogame from "../actions/clearVideogame";
import Nav from "../components/Nav";

export default function Videogame() {
  const videogame = useSelector((state) => state.videogame);
  const dispatch = useDispatch();
  const { idGame } = useParams();

  useEffect(() => {
    dispatch(getVideogame(idGame));
    return () => dispatch(clearVideogame())
  }, [dispatch]);

  let arrayGenres
  let stringGenres
  let stringPlatforms

  if(videogame.genres){
    arrayGenres= videogame.genres.map(genre=>{return genre.name})
    stringGenres= arrayGenres.join(", ")
  }
  
  if(videogame.platforms && !videogame.local){
    let arrayPlatforms= videogame.platforms.map(platform=>{return platform.platform.name})
    stringPlatforms= arrayPlatforms.join(", ")
  }  

  if(videogame.platforms && videogame.local) {
    stringPlatforms= videogame.platforms.join(", ")
  }

return (<div >
        <Nav/>
    {videogame.image? <img src={videogame.image} id="img-game" alt="descriptive image of the game"/> : null}
        <div id="fullVideogame">
    <h2>{videogame.name}</h2>
    <h3> Genre(s): </h3> <p>{videogame.genres? stringGenres : "Undefined" }</p>
    <p>Description: <div dangerouslySetInnerHTML={{__html: videogame.description}}></div></p>
    {videogame.dateToRelase? <h3>Release date: {videogame.dateToRelase}</h3>: null }
    {videogame.rating?<h3>Rating: {videogame.rating}</h3>: null }
    <h5>Platform(s): </h5> <p>{videogame.platforms? stringPlatforms: "Undefined"}</p>
    </div>
  </div>);
};