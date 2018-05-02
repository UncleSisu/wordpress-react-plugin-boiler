import 'regenerator-runtime/runtime'
import { fork } from 'redux-saga/effects'
import { watchOptionPost, watchOptionGet, watchOptionDelete } from './watcher'

// Registers watcher saga(s and exports a single generator as root Saga
export default function* startForman () {
  console.log('foreman running?')
  yield fork(watchOptionPost)
  yield fork(watchOptionGet)
  yield fork(watchOptionDelete)
}
