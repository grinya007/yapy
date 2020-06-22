import React from 'react'
import { render } from 'react-dom'
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import createSagaMiddleware from 'redux-saga'
import { logger } from 'redux-logger'
import rootSaga from './sagas'

const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer: rootReducer,
  middleware: [sagaMiddleware, logger]
})

sagaMiddleware.run(rootSaga)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
