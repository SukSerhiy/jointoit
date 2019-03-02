import { ADD_CARD } from '../../actionTypes';

const addCard = payload => dispatch => {
  dispatch({
    type: ADD_CARD,
    payload
  });
}

export default addCard;