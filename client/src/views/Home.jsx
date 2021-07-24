import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getVideogames from "../actions/getVideogames";
import { filterByGenres } from "../actions/filters";
import { sortByAlphabet, sortByRating } from "../actions/sorts";
import Search from "../components/Search";
import Filters from "../components/Filters"
import Pages from "../components/Pages";
import GameCard from "../components/GameCard";
import Nav from "../components/Nav";


function Home() {
  const videogames = useSelector((state) => state.videogames);
  const videogamesToShow = useSelector((state) => state.videogamesToShow);
  const filters= useSelector((state) => state.filters)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch])

  const paginate = pageNumber => 
  {
    dispatch(getVideogames(pageNumber));
    dispatch(filterByGenres(filters.filter));
    dispatch(sortByAlphabet(filters.sortAlphabet));
    dispatch(sortByRating(filters.sortRating));
  }

  let toShow = videogamesToShow ? videogamesToShow : videogames
  
  return (
    <div id="home">
      <Nav/>
      <Filters id="filters" />
      <hr id="hrhome"/>
      <Search />
      <div>
        {toShow.map((videogame) =>
        (<GameCard
          id={videogame.id}
          name={videogame.name}
          image={videogame.image}
          genres={videogame.genres}
        />))}
      </div> <hr />
      <footer>
        <Pages paginate={paginate} />
      </footer>
    </div>
  );
}

export default Home;
