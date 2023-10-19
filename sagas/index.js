import {fork} from 'redux-saga/effects';

import items from './items';
import user from './user';

export default function* rootSaga() {
  yield fork(items);
  yield fork(user);
}
