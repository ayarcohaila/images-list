import { put, takeLatest, call } from 'redux-saga/effects';

import * as actions from './actions';
import { request } from '../../utils';
import * as CONSTANTS from './constants';

function* getImages() {
  try {
    const data = yield call(request, '/photos');
    yield put(actions.getImagesSuccess(data));
  } catch (err) {
    yield put(actions.getImagesError());
  }
}

export default function* imagesSaga() {
  yield takeLatest(CONSTANTS.GET_IMAGES_REQUEST, getImages);
}
