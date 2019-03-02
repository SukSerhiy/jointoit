import { combineReducers } from 'redux-immutable';
import columns from './columnsReducer';
import cards from './cardsReducer';

export default combineReducers({
  columns,
  cards
});