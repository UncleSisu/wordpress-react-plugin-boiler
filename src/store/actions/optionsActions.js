import * as types from '../../constants/actionTypes'

// Returns action type and PUT_FORM
export const postOptionAction = payload => ({
  type: types.POST_OPTION,
  payload,
})

export const deleteOptionAction = payload => ({
  type: types.DELETE_OPTION,
  payload,
})

export const getOptionsAction = () => ({
  type: types.GET_OPTIONS
})
