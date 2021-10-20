import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Home from "./components/Home/Home.jsx";
import ActivityCreate from "./components/ActivityCreate/ActivityCreate.jsx";
import CountryDetail from "./components/CountryDetail/CountryDetail.jsx";
import About from "./components/About/About.jsx";

import styles from "./App.module.css";
// import NavBar from "./components/NavBar/NavBar.jsx";

function App() {
  return (
    <BrowserRouter>
      
      <Switch>
        <div className={styles.app}>
          <Route exact path="/" component={LandingPage} />
          <Route path="/home" component={Home} />
          <Route path="/countries/:idPais" component={CountryDetail} />
          <Route path="/activity" component={ActivityCreate} />
          <Route path="/about" component={About} />
        </div>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
