import NavBar from "./components/NavBar";
import AddCar from "./components/AddCar";
import AllCars from "./components/AllCars";
import Home from "./components/Home";
import EditCar from "./components/EditCar";
import NotFound from "./components/NotFound";
import './App.css';
import {BrowserRouter, Route, Switch} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/voitures"component={AllCars} />
            <Route exact path="/ajouter"component={AddCar} />
            <Route exact path="/modifier/:id"component={EditCar} />
            <Route component={NotFound} />
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
