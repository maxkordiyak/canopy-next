import { applyMiddleware, compose, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';
import history from './history';
import { routerMiddleware, routerReducer } from 'react-router-redux';


const middleware = routerMiddleware(history);

/**
 * The method is main for configuration redux store
 * if process.env.NODE_ENV !== 'production' we don't run Redux Dev Tools Extension
 * @param initialState
 * @returns {Store<any> & {dispatch: any}}
 */

const configureStore = initialState => {
	const store = createStore(
		combineReducers({
			...rootReducer,
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
