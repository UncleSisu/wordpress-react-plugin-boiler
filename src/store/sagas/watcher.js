import 'regenerator-runtime/runtime'
import { takeLatest, take } from 'redux-saga/effects'
import { postOptionSaga, getOptionsSaga, deleteOptionSaga } from './optionsSaga'
import * as types from '../../constants/actionTypes'

export function* watchOptionPost () {
  console.log('watchOptionPost triggered')
  yield takeLatest(types.POST_OPTION, postOptionSaga)
}

export function* watchOptionGet () {
  console.log('watchOptionGet triggered')
  yield takeLatest(types.GET_OPTIONS, getOptionsSaga)
}

export function* watchOptionDelete () {
  console.log('watchOptionDelete triggered')
  yield takeLatest(types.DELETE_OPTION, deleteOptionSaga)
}
