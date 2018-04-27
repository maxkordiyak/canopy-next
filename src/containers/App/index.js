import React from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import Home from '../Home';

const App = () => (
  <React.Fragment>
    <CssBaseline />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/test" component={Home} />
    </Switch>
  </React.Fragment>
);

export default App;
