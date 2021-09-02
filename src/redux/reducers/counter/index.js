import get from "lodash/get"
import {createActionName} from '../../../utility'
import {reducers} from "../../../constants"

const initialState = {
  count: 0,
};

const reducerName = reducers.COUNTER_REDUCER;

// ACTIONS
export const COUNTER_CHANGE = createActionName(reducerName, 'COUNTER_CHANGE');

// ACTION CREATORS
export function changeCount(count) {
  return {
    type: COUNTER_CHANGE,
    payload: count,
  };
}

// SELECTORS
export const selectCount = state => get(state, `${reducerName}.count`, 0)

// REDUCERS
const countReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case COUNTER_CHANGE:
      return {
        ...state,
        count: payload,
      };
    default:
      return state;
  }
};

export default countReducer;
