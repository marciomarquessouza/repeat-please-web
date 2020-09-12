import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Welcome from './pages/Welcome';

const App = (): JSX.Element => (
  <Router>
    <Switch>
      <Route path="/" component={Welcome} />
    </Switch>
  </Router>
);

export default App;
