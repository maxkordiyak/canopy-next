import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

/**
 * The method is main for configuration redux store
 * if process.env.NODE_ENV !== 'production' we don't run Redux Dev Tools Extension
 * @param initialState
 * @returns {Store<any> & {dispatch: any}}
 */
export default function configureStore(initialState = {}) {
	return createStore(
		rootReducer,
		initialState,
		compose(
			applyMiddleware(thunk),
			(
				process.env.NODE_ENV !== 'production' &&
				typeof window !== 'undefined' &&
				window.__REDUX_DEVTOOLS_EXTENSION__) ?
				window.__REDUX_DEVTOOLS_EXTENSION__() :
				f => f
		)
	);
}
