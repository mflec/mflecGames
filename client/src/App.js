import Home from "./views/Home";
import { Route, Switch } from "react-router-dom";
import './styles/App.css';
import Videogame from "./views/Videogame";
import Add from "./views/Add";
import LandingPage from "./views/LandingPage";
import Error404 from "./views/Error404";



function App() {
  return (
    <div>
      <div className="container content">
        <Switch>
      <Route exact path="/" component={LandingPage}/>
        <Route path="/home" exact component={Home}/>
        <Route path="/videogame" exact component={Add}/>
        <Route path="/videogame/:idGame"  exact component={Videogame}/>
        <Route path="*" component={Error404} />
        </Switch>
      </div>
    </div>
  );
};

export default App;