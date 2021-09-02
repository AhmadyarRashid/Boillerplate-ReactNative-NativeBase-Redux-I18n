import { createStore, combineReducers, applyMiddleware } from 'redux';
import { reducers } from '../constants'

// import all reducers
import counterReducer from './reducers/counter/index'

// middlewares
const logger = store => next => action => {
  console.group(action.type)
  console.info('dispatching', action)
  let result = next(action)
  console.log('next state', store.getState())
  console.groupEnd()
  return result
}

// register all reducers
const rootReducer = combineReducers(
  {
    [reducers.COUNTER_REDUCER]: counterReducer
  }
);

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(
    logger
  ));

export default configureStore;
