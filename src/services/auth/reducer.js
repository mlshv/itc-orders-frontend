import { handleActions } from 'redux-actions'
import { key, authRequired, authResult, logIn, logOut } from './actions'
import { roles } from './constants'

export const selectors = {
  authRole: state => state[key].authRole,
}

const initialState = {
  authRole: roles.GUEST,
}

export default handleActions(
  {
    [authRequired]: state => ({
      ...state,
      authRole: roles.GUEST,
    }),
    [authResult]: (state, { payload }) => ({
      ...state,
      authRole: payload.error ? roles.GUEST : roles.USER,
    }),
    [logIn]: state => ({
      ...state,
      authRole: roles.USER,
    }),
    [logOut]: state => ({
      ...state,
      authRole: roles.GUEST,
    }),
  },
  initialState,
)
