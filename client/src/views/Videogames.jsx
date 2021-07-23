import React, { useEffect } from "react";
import getVideogames from "../actions/getVideogames";
import { useDispatch, useSelector } from "react-redux";
import GameCard from "../components/GameCard";
import Filters from "../components/Filters";
import Pages from "../components/Pages";


export default function Videogames() {
  const videogames = useSelector((state) => state.videogames);
  const videogamesToShow = useSelector((state) => state.videogamesToShow);
  const dispatch = useDispatch();

  useEffect(() => {
   dispatch(getVideogames());
  }, [dispatch]);

  let toShow= videogamesToShow? videogamesToShow: videogames

  return (
    <div id="game-cards">
      <Filters/>
      <div>
      {toShow.map((videogame) =>
      (<GameCard
        id={videogame.id}
        name={videogame.name}
        image={videogame.image}
        genres={videogame.genres}
      />))}
      </div> <hr/>
      <footer>
    <Pages actualPage={1} backPage={false}/>
    </footer>
    </div>
  );

};