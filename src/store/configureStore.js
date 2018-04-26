import {
    createStore,
    compose,
    applyMiddleware,
} from 'redux';

import ReduxThunk from 'redux-thunk';

import rootReducer from '../reducers';

const createStoreWithMiddleware = compose(applyMiddleware(ReduxThunk))(createStore);

export default function configureStore(initialState = {}) {
    // return createStoreWithMiddleware(rootReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    return createStoreWithMiddleware(rootReducer, initialState);
};