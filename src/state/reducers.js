import {
  LOAD_BOOKS,
  LOAD_IMAGES,
  SET_LOADING,
  SHOW_MODAL,
  SET_ERROR,
  SET_SUCCESS,
  ON_SEARCH,
  MOBILE_SEARCH
} from './actions'

export const books = (state = [], action) =>
  (action.type === LOAD_BOOKS ? action.books : state)

export const images = (state = [], action) => {
  switch (action.type) {
    case LOAD_IMAGES:
      return state.concat(action.image)
    default:
      return state
  }
}

export const loading = (state = false, action) =>
  (action.type === SET_LOADING ? action.value : state)

export const error = (state = false, action) =>
  (action.type === SET_ERROR ? action.value : state)

export const success = (state = false, action) =>
  (action.type === SET_SUCCESS ? action.value : state)

export const showModal = (state = false, action) =>
  (action.type === SHOW_MODAL ? !state : state)

export const mobileSearch = (state = false, action) =>
  (action.type === MOBILE_SEARCH ? !state : state)

export const filter = (state = { title: '', search: '' }, action) => {
  switch (action.type) {
    case ON_SEARCH:
      let newFilter = Object.assign({}, state, {
        [action.value.target.name]: [action.value.target.value]
      })

      state = newFilter

      return { ...state, newFilter }

    default:
      return state
  }
}
