import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About } from './components/About';

import Redux from './components/Redux';
import { useSelector } from 'react-redux';
import Jss from './components/Jss';
import { Communication } from './components/Communication';
import { User } from './components/User';
import { Context } from './components/Context';
import { AppContext } from './contexts/app.context';

function App() {

  const counter = useSelector((state: any) => state.counter);

  let [settings, setSettings] = useState({ theme: 'light' });
  const appSettingsContext = {
    settings,
    setTheme: (theme: string) => { setSettings({ ...settings, ...{ theme } }); },
  };

  return (
    <AppContext.Provider value={appSettingsContext}>
      <Router>
        <div>Theme: {settings.theme}</div>
        <div>redux counter: {counter}</div>
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