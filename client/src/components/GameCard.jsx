import React from "react";
import { Link } from "react-router-dom";

export default function GameCard({id, name, image, genres}) {
    let arrayGenres= genres.map(genre=>{return genre.name})
    let stringGenres= arrayGenres.join(", ")
return (
    <Link to={"/videogame/" + id}>
    <div className='gameCard' key={id}>
         <h4>{name}</h4>
        <img src={image} className='image-gameCard' alt="descriptive image of the game"/>
        <h5> Genre(s): </h5><p>{genres? stringGenres: "Undefined" }</p>
    </div>
    </Link>
)
}