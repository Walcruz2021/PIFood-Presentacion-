import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Home from "./components/Home"
import LandingPage from "./components/LandingPage"
import RecipeCreate from './components/RecipeCreate'
import DetailsRecipe from "./components/DetailsRecipe"
import Search from "./components/Search"
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="StyleApp">
      <Switch>
       <Route exact path="/" component={LandingPage}/>
       <Route path="/home" component={Home}/>
       <Route path="/newRecipe" component={RecipeCreate}/>
       <Route path="/details/:id" component={DetailsRecipe}/>
       <Route path="/search" component={Search}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
