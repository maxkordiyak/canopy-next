import React from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import { Route, Switch } from 'react-router-dom';
import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Home from '../Home';
import Test from '../Test';
import './index.css';
const App = () => (
	<React.Fragment>
		<CssBaseline/>
		<Switch>
			<Route exact path="/" component={SignIn}/>
			<Route path="/signin" component={SignIn}/>
			<Route path="/signup" component={SignUp}/>
			<Route path="/home" component={Home}/>
			<Route path="/test" component={Test}/>
		</Switch>
	</React.Fragment>
);

export default App;
