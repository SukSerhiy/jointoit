import { CHANGE_COLUMN_ID } from '../../actionTypes';

const changeColumnId = payload => dispatch => {
  dispatch({
    type: CHANGE_COLUMN_ID,
    payload
  });
}

export default changeColumnId;