import React from 'react'
import './index.css'
import { render } from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
const rootEl = document.getElementById('root')

render(
  <Router>
    <App />
  </Router>,
  rootEl
)
