import * as types from '../../constants/actionTypes'

const optionsReducer = (state = { options: {} }, action) => {
  const { type, status } = action
  switch (type) {
    case types.POST_OPTION_SUCCESS:
    case types.POST_OPTION_ERROR:
    case types.GET_OPTIONS_SUCCESS:
    case types.GET_OPTIONS_ERROR:
    case types.DELETE_OPTION_SUCCESS:
    case types.DELETE_OPTION_ERROR:
      console.log('check options reducer', status);
      return {
        ...state,
        options: status.options
      }
    default:
      return state
  }
}

export default optionsReducer
