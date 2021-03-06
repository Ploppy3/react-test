import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Redux from './components/pages/Redux';
import { useSelector } from 'react-redux';
import Jss from './components/pages/Jss';
import { Communication } from './components/pages/Communication';
import { User } from './components/pages/User';
import { Context } from './components/pages/Context';
import { AppContext } from './contexts/app.context';
import { TransitionReactTransitionGroup } from 'components/pages/TransitionReactTransitionGroup';
import { About } from 'components/pages/About';
import { TransitionsSpring } from 'components/pages/TransitionsSpring';
import { Modals } from 'components/pages/Modals';
import { Form } from 'components/pages/Form';
import { TransitionsStyledComponents } from 'components/pages/TransitionsStyledComponents';

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
            <Link to="/user/3">Router params (/user/3)</Link>
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
            <Link to="/transitions-react-group">Transitions (React Transition Group)</Link>
          </li>
          <li>
            <Link to="/transitions-spring">Transitions (Spring)</Link>
          </li>
          <li>
            <Link to="/transitions-styled-components">Transitions (Styled Components)</Link>
          </li>
          <li>
            <Link to="/modals">Modals</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
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
          <Route exact path="/transitions-react-group" component={TransitionReactTransitionGroup} />
          <Route exact path="/transitions-spring" component={TransitionsSpring} />
          <Route exact path="/transitions-styled-components" component={TransitionsStyledComponents} />
          <Route exact path="/modals" component={Modals} />
          <Route exact path="/form" component={Form} />
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