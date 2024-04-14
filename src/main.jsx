import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import store from './store/store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store= {store}>
   <Router>
    <App />
    </Router>
    
  </Provider> 
)
