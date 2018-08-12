import axios from 'axios'
import {
  LOAD_BOOKS,
  SET_LOADING,
  LOAD_IMAGES,
  SHOW_MODAL,
  SET_ERROR,
  SET_SUCCESS,
  ON_SEARCH,
  MOBILE_SEARCH
} from './actions'

const API_URL = 'https://fakerestapi.azurewebsites.net/api/books/'
const IMAGE_URL = 'http://picsum.photos/200/300/?image'

export const showModal = () => ({ type: SHOW_MODAL })

export const onSearch = value => ({ type: ON_SEARCH, value })

export const mobileSearch = () => ({ type: MOBILE_SEARCH })

const setError = value => ({ type: SET_ERROR, value })

const isLoading = value => ({ type: SET_LOADING, value })

const setSuccess = value => ({ type: SET_SUCCESS, value })

export const loadBooks = () => {
  return async dispatch => {
    dispatch(isLoading(true))
    try {
      let response = await axios.get(API_URL)
      let books = await response.data

      return await dispatch({
        type: LOAD_BOOKS,
        books
      })
    } catch (error) {
      dispatch(setError(true))
      setTimeout(() => dispatch(setError(false)), 3000)
    } finally {
      dispatch(isLoading(false))
    }
  }
}

async function asyncForEach (array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

export const loadImages = () => {
  return async dispatch => {
    try {
      let local = JSON.parse(window.localStorage.getItem('persist:root'))
      let books = JSON.parse(local.books)

      await asyncForEach(books, async book => {
        let res = await axios.get(`${IMAGE_URL}=${book.ID}`)
        let image = await res.request.responseURL
        return dispatch({
          type: LOAD_IMAGES,
          image
        })
      })
    } catch (error) {
      dispatch(setError(true))
      setTimeout(() => dispatch(setError(false)), 3000)
    }
  }
}

export const onAddBook = e => {
  e.preventDefault()
  return async dispatch => {
    dispatch(isLoading(true))

    let form = e.target
    let date = new Date()
    let ISOdate = date.toISOString().substr(10)
    let book = {
      Title: form.title.value,
      Description: form.description.value,
      PageCount: form.pages.value,
      Excerpt: form.excerpt.value,
      PublishDate: form.date.value + ISOdate
    }

    await axios
      .post(API_URL, book)
      .then(() => {
        dispatch(setSuccess(true))
        dispatch(isLoading(false))
        setTimeout(() => dispatch(setSuccess(false)), 3000)
        form.reset()
      })
      .catch(() => {
        dispatch(setError(true))
        dispatch(isLoading(false))
        setTimeout(() => dispatch(setError(false)), 3000)
      })
  }
}

export const onUpdateBook = e => {
  e.preventDefault()
  return async dispatch => {
    dispatch(isLoading(true))

    let form = e.target
    let date = new Date()
    let ISOdate = date.toISOString().substr(10)
    let book = {
      Title: form.title.value,
      Description: form.description.value,
      PageCount: form.pages.value,
      Excerpt: form.excerpt.value,
      PublishDate: form.date.value + ISOdate
    }

    await axios
      .put(`${API_URL}/${form.ID.value}`, book)
      .then(() => {
        dispatch(setSuccess(true))
        dispatch(isLoading(false))
        setTimeout(() => dispatch(setSuccess(false)), 3000)
        form.reset()
      })
      .catch(() => {
        dispatch(setError(true))
        dispatch(isLoading(false))
        setTimeout(() => dispatch(setError(false)), 3000)
      })
  }
}

export const removeBook = (e, book) => {
  e.preventDefault()
  return async dispatch => {
    try {
      await axios.delete(`${API_URL}/${book.ID}`)
    } catch (error) {
      dispatch(setError(true))
      setTimeout(() => dispatch(setError(false)), 3000)
    } finally {
      dispatch(showModal())
      window.location.href = `/granada`
    }
  }
}
