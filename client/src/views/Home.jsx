import React, { useEffect } from "react";
import { useDispatch} from "react-redux";
import getVideogames from "../actions/getVideogames";
import Search from "../components/Search";
import Filters from "../components/Filters"
import Pages from "../components/Pages";

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideogames())
  }, [dispatch])

  return (
    <div id="home">
      <></>
      <Filters id="filters"/>    
      <Search />
      <hr/>
      <footer>
        <></>
      <Pages actualIsHome={true} backPage={false} id="pagesHome"/>
        </footer>
      </div>
  );
}

export default Home;
