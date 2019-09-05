import { combineReducers } from 'redux';

import imagesReducer from './images/reducers';

const rootReducer = combineReducers({
  images: imagesReducer,
});

export default rootReducer;
