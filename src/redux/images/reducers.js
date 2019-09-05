import * as CONSTANTS from './constants';

const initialState = {
  list: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.GET_IMAGES_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case CONSTANTS.GET_IMAGES_SUCCESS:
      return {
        ...state,
        list: action.payload,
        loading: false,
      };
    case CONSTANTS.GET_IMAGES_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
