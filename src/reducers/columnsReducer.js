import { List, Map } from 'immutable';
import { ADD_COLUMN } from '../actionTypes';

export default (state = List([]), action) => {
  switch (action.type) {
    case ADD_COLUMN:
      return state.push(Map(action.payload));
    default:
      return state;
  }
}