import { all, fork } from 'redux-saga/effects';

import imagesSaga from './images/saga';

export default function* root() {
  yield all([fork(imagesSaga)]);
}
