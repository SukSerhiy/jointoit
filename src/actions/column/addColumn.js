import { ADD_COLUMN } from '../../actionTypes';

const addColumn = payload => dispatch => {
  dispatch({
    type: ADD_COLUMN,
    payload
  });
}

export default addColumn;