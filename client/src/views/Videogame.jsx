import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import getVideogame from "../actions/getVideogame";
import { useDispatch, useSelector } from "react-redux";
import clearVideogame from "../actions/clearVideogame"

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

  if(videogame.genres){
    arrayGenres= videogame.genres.map(genre=>{return genre.name})
    stringGenres= arrayGenres.join(", ")
  }

  return (<div >
    <img src={videogame.image} id="img-game"/>
    <h1>{videogame.name}</h1>
    <h3> Genre(s): </h3><p>{videogame.genres? stringGenres : "Undefined" }</p>
    <p>Description: <div dangerouslySetInnerHTML={{__html: videogame.description}}></div></p>
    {videogame.dateToRelase? <h3>Release date: {videogame.dateToRelase}</h3>: null }
    {videogame.rating?<h3>Rating: {videogame.rating}</h3>: null }
  </div>);
};