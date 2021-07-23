import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import getVideogames from "../actions/getVideogames";
import { useDispatch, useSelector } from "react-redux";
import GameCard from "../components/GameCard";
import Filters from "../components/Filters";
import Pages from "../components/Pages";

export default function VideogamesPages() {
  const videogames = useSelector((state) => state.videogames);
  const videogamesToShow = useSelector((state) => state.videogamesToShow);
  const dispatch = useDispatch();
  const { page } = useParams();

  useEffect(() => {
   dispatch(getVideogames(page));
  }, [dispatch]);

  let toShow= videogamesToShow? videogamesToShow: videogames

  return (
    <div id="game-cards">
      <Filters/>
      <div >
      {toShow.map((videogame) =>
      (<GameCard
        id={videogame.id}
        name={videogame.name}
        image={videogame.image}
        genres={videogame.genres}
      />))}
      </div><hr/>
      <footer>
      <Pages actualPage={parseInt(page)} backPage={parseInt(page) -1 }/>
      </footer>
    </div>
  );

};