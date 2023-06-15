import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Peliculas from "./routes/Peliculas";
import Tv from "./routes/Tv";
import Navigation from "./Components/Navegation";


function App() {
  return (

    <div className="App">
      <Navigation />
      <Peliculas />
      <Tv  />

   
    </div>
  );
}

export default App;
