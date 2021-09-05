import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import getVideogames from "../actions/getVideogames";
import Search from "../components/Search";
import Filters from "../components/Filters"
import Pages from "../components/Pages";
import GameCard from "../components/GameCard";
import Nav from "../components/Nav";
import NotFound from "../components/NotFound";
import Loanding from "../components/Loanding";


function Home() {
  const videogames = useSelector((state) => state.videogames);
  const videogamesToShow = useSelector((state) => state.videogamesToShow);
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames());
  }, [dispatch])

  const paginate = pageNumber => {setPage(pageNumber)}

  let toShow = videogamesToShow ? videogamesToShow : videogames
  let notFound

  if(videogamesToShow && !videogamesToShow.length) notFound= true
  
  return (
    <div id="home">
      <Nav/>
      <Filters id="filters" />
      <Search />
      {toShow.length===0 && !notFound? <Loanding/>: null }
      <p>
        {notFound? <NotFound/>: null }
        {toShow.slice(15*page-15, 15*page).map((videogame) =>
        (<GameCard
          id={videogame.id}
          name={videogame.name}
          image={videogame.image}
          genres={videogame.genres}
          local={videogame.local}
        />))}
      </p>
      <footer>
        {notFound? null: <Pages 
        paginate={paginate} 
        totalGames={toShow.length} 
        />}
      </footer>
    </div>
  );
}

export default Home;
