import React from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import Home from '../Home';

const App = () => (
    <React.Fragment>
        <CssBaseline />
        <Switch>
            <Route exact path="/" component={Home} />
        </Switch>
    </React.Fragment>
);

export default App;
