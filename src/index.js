import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore } from 'redux'
import rootReducer from './redux/reducers/rootReducer'
import { Provider } from 'react-redux'

import App from './App'

const store = createStore(rootReducer)
const root = ReactDOM.createRoot(document.getElementById('root'))

const app = (
    <Provider store={store}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </Provider>
)
root.render(app)
