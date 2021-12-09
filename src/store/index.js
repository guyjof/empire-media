import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { ratesReducer } from './reducers/rates-reducer'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
    rates: ratesReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)
