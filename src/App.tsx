import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Redux from './components/Redux';
import { useSelector } from 'react-redux';
import Jss from './components/Jss';
import { Communication } from './components/Communication';
import { User } from './components/User';
import { Context } from './components/Context';
import { AppContext } from './contexts/app.context';
import { Animations } from 'components/Transitions';
import { About } from 'components/About';
import { TransitionsSpring } from 'components/transitions-spring/TransitionsSpring';
import { Modals } from 'components/Modals';

function App() {

  const counter = useSelector((state: any) => state.counter);

  let [theme, setTheme] = useState('light');
  const appSettingsContext = {
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={appSettingsContext}>
      <Router>
        <div>[Context] Theme: {theme}</div>
        <div>[Redux] Counter: {counter}</div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/user/3">User 3</Link>
          </li>
          <li>
            <Link to="/azerty">404</Link>
          </li>
          <li>
            <Link to="/redux">Redux</Link>
          </li>
          <li>
            <Link to="/jss">JSS</Link>
          </li>
          <li>
            <Link to="/communication">Communication</Link>
          </li>
          <li>
            <Link to="/context">Context</Link>
          </li>
          <li>
            <Link to="/transitions">Transitions</Link>
          </li>
          <li>
            <Link to="/transitions-spring">Transitions (Spring)</Link>
          </li>
          <li>
            <Link to="/modals">Modals</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/redux" component={Redux} />
          <Route exact path="/jss" component={Jss} />
          <Route exact path="/communication" component={Communication} />
          <Route exact path="/user/:id" component={User} />
          <Route exact path="/context" component={Context} />
          <Route exact path="/transitions" component={Animations} />
          <Route exact path="/transitions-spring" component={TransitionsSpring} />
          <Route exact path="/modals" component={Modals} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;

function Home() {
  return <div>Home</div>;
}

function NotFound() {
  return <div>404 page not found</div>;
}