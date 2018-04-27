import App from './containers/App';
import { ConnectedRouter } from 'react-router-redux';
import React from 'react';
import { Provider } from 'react-redux';
import { hydrate } from 'react-dom';
import configureStore from './store/configureStore';
import history from './store/history';

const preloadedState = window.__PRELOADED_STATE__;

const store = configureStore(preloadedState || {});

hydrate(
	<Provider store={store}>
		<ConnectedRouter history={history}>
			<App />
		</ConnectedRouter>
	</Provider>,
	document.getElementById('root')
);

if (module.hot) {
	module.hot.accept();
}
