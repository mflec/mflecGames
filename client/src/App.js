import Home from "./views/Home";
import { Route, Switch } from "react-router-dom";
import './styles/App.css';
import Nav from "./components/Nav";
import Videogame from "./views/Videogame";
import Add from "./views/Add";
import Videogames from "./views/Videogames";
import VideogamesPages from "./views/VideogamesPages";
import LandingPage from "./views/LandingPage";


function App() {
  return (
    <div>
      <div className="container content">
        <Switch>
      <Route exact path="/" component={LandingPage} />
      <Nav/>
      </Switch>
        <Route path="/home" exact component={Home} />
        <Route path="/videogame" exact component={Add} />
        <Route path="/videogame/:idGame"  exact component={Videogame} />
        <Route path="/videogames" exact component={Videogames} />
        <Route path="/videogames/:page" exact component={VideogamesPages} />
      </div>
    </div>
  );
};

export default App;