import {BrowserRouter, Route, Switch} from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';

import styles from './App.module.css'

function App() {
  
  return (
    <BrowserRouter>
    <div className={styles.app}>
      <div className={styles.bkg} />
        <div className={styles.container}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/countries" component={Home} />
        </Switch>
      </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
