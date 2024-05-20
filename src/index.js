import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Index from './pages/Index'
import App from './pages/Index'
import Header from './components/Header'
import './styles/index.css'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/" element={<App />} />
        </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
