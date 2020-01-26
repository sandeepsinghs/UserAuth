
import { compose, createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { autoRehydrate } from 'redux-persist'
import { LoginReducer } from '../Reducer/LoginReducer';

const loggerMiddleware = createLogger()

export default function configureStore(preloadedState) {
    return createStore(
        LoginReducer,
        preloadedState,
        compose(
            autoRehydrate(),
            applyMiddleware(
                thunkMiddleware,
                loggerMiddleware
            )
        )
    )
}
