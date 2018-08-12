import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from './state/store'
import { loadBooks, loadImages } from './state/actionCreators'
import App from './App.jsx'
import registerServiceWorker from './registerServiceWorker'
import './index.scss'

const { store, persistor } = configureStore()

store.dispatch(loadBooks())
store.dispatch(loadImages())

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById('root')
)

registerServiceWorker()
