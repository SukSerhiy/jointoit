import { List, Map } from 'immutable';
import { ADD_CARD, CHANGE_COLUMN_ID } from '../actionTypes';

export default (state = List([]), action) => {
  switch (action.type) {
    case ADD_CARD:
      return state.push(Map(action.payload));
    case CHANGE_COLUMN_ID:
      const { cardId, newColumnId } = action.payload;
      const cardIndex = state.findIndex(c => c.get('id') === cardId);
      return state.update(
        cardIndex,
        () => state.get(cardIndex).set('columnId', newColumnId)
      );
    default:
      return state;
  }
}