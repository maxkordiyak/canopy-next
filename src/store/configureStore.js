import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import { reducer as formReducer } from 'redux-form';
import createBrowserHistory from 'history/createBrowserHistory';
import createMemoryHistory from 'history/createMemoryHistory';
import { routerMiddleware, routerReducer } from 'react-router-redux';

/**
 * The method is main for configuration redux store
 * if process.env.NODE_ENV !== 'production' we don't run Redux Dev Tools Extension
 * @param initialState
 * @returns {Store<any> & {dispatch: any}}
 */

const configureStore = initialState => {
	// console.log(initialState, Object.keys(initialState).length);
	let history, middleware
	if (Object.keys(initialState).length === 0) {
		history = createMemoryHistory();
	} else {
		history = createBrowserHistory();
	}
	middleware = routerMiddleware(history);
	const store = createStore(
		combineReducers({
			...rootReducer,
			form: formReducer,
			router: routerReducer
		}),
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
		module.hot.accept('../reducers', () => {
			const nextRootReducer = require('../reducers').default;
			store.replaceReducer(nextRootReducer);
		});
	}

	return store;
};

export default configureStore;
