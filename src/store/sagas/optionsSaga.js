import 'regenerator-runtime/runtime'
import { put, call } from 'redux-saga/effects'
import { postOption, getOptions, deleteOption } from '../../api'
import * as types from '../../constants/actionTypes'

// and then instructing the saga middleware on the next line of action,
// for success or failure
export function* postOptionSaga ({ payload }) {
  console.log('putOptionSaga payload and url', payload)
  try {
    const status = yield call(postOption, types.URL, payload)
    yield put({
      type: types.POST_OPTION_SUCCESS,
      status,
    })
  } catch (error) {
    yield put({
      type: types.POST_OPTION_ERROR,
      status,
    })
  }
}

export function* getOptionsSaga () {
  console.log('getOptionsSaga triggered', types);
  try {
    const status = yield call(getOptions, types.URL)
    yield put({
      type: types.GET_OPTIONS_SUCCESS,
      status,
    })
  } catch (error) {
    yield put({
      type: types.GET_OPTIONS_ERROR,
      status,
    })
  }
}

export function* deleteOptionSaga ({ payload }) {
  console.log('deleteOptionSaga payload and url', payload)
  try {
    const status = yield call(deleteOption, types.URL, payload)
    yield put({
      type: types.DELETE_OPTION_SUCCESS,
      status,
    })
  } catch (error) {
    yield put({
      type: types.DELETE_OPTION_ERROR,
      status,
    })
  }
}
