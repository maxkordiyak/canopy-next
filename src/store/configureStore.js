import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import history from './history';
import { routerMiddleware } from 'react-router-redux';

const middleware = routerMiddleware(history);

/**
 * The method is main for configuration redux store
 * if process.env.NODE_ENV !== 'production' we don't run Redux Dev Tools Extension
 * @param initialState
 * @returns {Store<any> & {dispatch: any}}
 */
export default function configureStore(initialState = {}) {
	const store = createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(thunk),
			applyMiddleware(middleware),
			(
				process.env.NODE_ENV !== 'production' &&
				typeof window !== 'undefined' &&
				window.__REDUX_DEVTOOLS_EXTENSION__) ?
				window.__REDUX_DEVTOOLS_EXTENSION__() :
				f => f
		)
	);

	if (module.hot) {
		// Enable Webpack hot module replacement for reducers
		module.hot.accept('../reducers/index', () => {
			const newReducer = require('../reducers').default;
			store.replaceReducer(newReducer);
		});
	}
	return store;
}
