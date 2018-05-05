import App from './containers/App';
import { ConnectedRouter } from 'react-router-redux';
import React from 'react';
import { Provider } from 'react-redux';
import { hydrate, render } from 'react-dom';
import configureStore from './store/configureStore';
import createHistory from 'history/createBrowserHistory'

const preloadedState = window.__PRELOADED_STATE__;
// Create a history of your choosing (we're using a browser history in this case)
const history = createHistory()

const store = configureStore(preloadedState || {});

const renderMethod = !!module.hot ? render : hydrate
renderMethod(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept(App, () => {
		hydrate(
			<Provider store={store}>
				<ConnectedRouter history={history}>
					<App />
				</ConnectedRouter>
			</Provider>,
			document.getElementById('root')
		);
	});
}
