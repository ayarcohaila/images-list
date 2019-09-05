import * as CONSTANTS from './constants';

const initialState = {
  list: [],
  loading: false,
  favoriteCount: 0,
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
    case CONSTANTS.MARK_FAVORITE:
      return {
        ...state,
        list: state.list.map(item => ({
          ...item,
          isFavorite: item.id === action.payload || item.isFavorite,
        })),
        favoriteCount: state.favoriteCount + 1,
      };

    default:
      return state;
  }
};
